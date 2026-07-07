import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { FileCard, FileMosaic } from "../src";
import DropzoneChildrenNext from "../src/Dropzone/components/DropzoneChildren/DropzoneChildrenNext";
import {
  uploadExtFilesWithStrategy,
  uploadSingleExtFileWithStrategy,
} from "../src/utils/uploadStrategy";
import * as core from "@files-ui/core";

jest.mock("@files-ui/core", () => {
  const actual = jest.requireActual("@files-ui/core");
  return {
    ...actual,
    uploadExtFile: jest.fn(async (file: any) => ({ ...file, uploadStatus: "success" })),
    uploadExtFileChunked: jest.fn(async (file: any) => ({ ...file, uploadStatus: "success" })),
    uploadExtFilesConcurrent: jest.fn(async (files: any[]) => files.map((f) => ({ ...f, uploadStatus: "success" }))),
  };
});

describe("Phase 5 feature tests", () => {
  test("DropzoneChildrenNext lazy mode defers rendering until intersection", async () => {
    class IOStub {
      cb: IntersectionObserverCallback;
      constructor(cb: IntersectionObserverCallback) {
        this.cb = cb;
      }
      observe = jest.fn();
      disconnect = jest.fn();
      unobserve = jest.fn();
      takeRecords = jest.fn(() => []);
      root = null;
      rootMargin = "300px";
      thresholds = [0];
    }

    (globalThis as any).IntersectionObserver = IOStub;

    render(
      <DropzoneChildrenNext lazyLoad={true} lazyLoadBuffer={300}>
        <div>lazy-item-1</div>
      </DropzoneChildrenNext>
    );

    expect(screen.queryByText("lazy-item-1")).not.toBeInTheDocument();
  });

  test("FileMosaic selectable checkbox emits onSelect", () => {
    const onSelect = jest.fn();

    render(
      <FileMosaic
        id={123}
        name="photo.png"
        selectable={true}
        selected={false}
        onSelect={onSelect}
      />
    );

    const checkbox = screen.getByLabelText("Select file photo.png");
    fireEvent.click(checkbox);

    expect(onSelect).toHaveBeenCalledWith(123, true);
  });

  test("FileCard selectable checkbox emits onSelect", () => {
    const onSelect = jest.fn();

    render(
      <FileCard
        id={456}
        name="report.pdf"
        selectable={true}
        selected={false}
        onSelect={onSelect}
      />
    );

    const checkbox = screen.getByLabelText("Select file report.pdf");
    fireEvent.click(checkbox);

    expect(onSelect).toHaveBeenCalledWith(456, true);
  });

  test("uploadSingleExtFileWithStrategy uses chunked upload when enabled", async () => {
    const extFile: any = { id: 1, name: "big.mov", file: new File(["x"], "big.mov", { type: "video/mp4" }) };

    await uploadSingleExtFileWithStrategy(extFile, {
      chunked: true,
      chunkSize: 1024,
      url: "https://api/upload",
    });

    expect(core.uploadExtFileChunked).toHaveBeenCalled();
    expect(core.uploadExtFile).not.toHaveBeenCalled();
  });

  test("uploadExtFilesWithStrategy uses concurrent upload when enabled and not chunked", async () => {
    const files: any[] = [
      { id: 1, name: "a.txt" },
      { id: 2, name: "b.txt" },
    ];

    await uploadExtFilesWithStrategy(files, {
      maxConcurrentUploads: 3,
      chunked: false,
      url: "https://api/upload",
    });

    await waitFor(() => {
      expect(core.uploadExtFilesConcurrent).toHaveBeenCalled();
    });
  });
});
