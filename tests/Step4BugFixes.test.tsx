import "@testing-library/jest-dom";
import React from "react";
import { render, waitFor, renderHook } from "@testing-library/react";
import * as core from "@files-ui/core";
import DownloadHidden from "../src/DownloadHidden/DownloadHidden";
import { useFileMosaicInitializer } from "../src/hooks/useFileMosaicInitializer";

jest.mock("@files-ui/core", () => {
  const actual = jest.requireActual("@files-ui/core");
  return {
    ...actual,
    getURLFileIco: jest.fn(() => ({ url: "icon-url" })),
    getURLFileIcoFromNameAndType: jest.fn(() => ({ url: "icon-url" })),
    readAsDataURL: jest.fn(async () => "data:image/png;base64,original"),
    resizeImage: jest.fn(async () => "data:image/png;base64,resized"),
  };
});

describe("Step 4 bug fixes", () => {
  test("DownloadHidden should prioritize videoUrl over downloadUrl", () => {
    const anchorRef = React.createRef<HTMLAnchorElement>();
    const { container } = render(
      <DownloadHidden
        anchorRef={anchorRef}
        fileName="sample.mp4"
        downloadUrl="https://server.com/file-image.jpg"
        videoUrl="https://server.com/file-video.mp4"
      />
    );

    const anchor = container.querySelector("a");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "https://server.com/file-video.mp4");
  });

  test("DownloadHidden should fallback to downloadUrl when videoUrl is not provided", () => {
    const anchorRef = React.createRef<HTMLAnchorElement>();
    const { container } = render(
      <DownloadHidden
        anchorRef={anchorRef}
        fileName="sample.jpg"
        downloadUrl="https://server.com/file-image.jpg"
      />
    );

    const anchor = container.querySelector("a");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("href", "https://server.com/file-image.jpg");
  });

  test("useFileMosaicInitializer should resize image preview before setting source", async () => {
    const file = new File(["dummy"], "preview.png", { type: "image/png" });

    const { result } = renderHook(() =>
      useFileMosaicInitializer(
        file,
        "preview.png",
        "image/png",
        true,
        true,
        undefined,
        undefined
      )
    );

    await waitFor(() => {
      expect(result.current[0]).toBe(true);
    });

    expect(core.readAsDataURL).toHaveBeenCalledWith(file);
    expect(core.resizeImage).toHaveBeenCalledWith("data:image/png;base64,original");
    expect(result.current[4]).toBe("data:image/png;base64,resized");
  });
});
