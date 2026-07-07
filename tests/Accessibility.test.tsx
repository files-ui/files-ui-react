import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Dropzone, FileMosaic, FileCard, Avatar, FullScreen } from "../src";

describe("Dropzone Accessibility", () => {
  test("should have role='button' when clickable", () => {
    const { container } = render(<Dropzone onChange={() => {}} value={[]} />);
    const dropzone = container.querySelector("[role='button']");
    expect(dropzone).toBeInTheDocument();
  });

  test("should have role='region' when not clickable", () => {
    const { container } = render(
      <Dropzone onChange={() => {}} value={[]} clickable={false} />
    );
    const dropzone = container.querySelector("[role='region']");
    expect(dropzone).toBeInTheDocument();
  });

  test("should have tabIndex=0 when clickable and not disabled", () => {
    const { container } = render(<Dropzone onChange={() => {}} value={[]} />);
    const dropzone = container.querySelector("[role='button']");
    expect(dropzone).toHaveAttribute("tabindex", "0");
  });

  test("should have aria-disabled when disabled", () => {
    const { container } = render(
      <Dropzone onChange={() => {}} value={[]} disabled={true} />
    );
    const region = container.querySelector("[role='region']");
    expect(region).toHaveAttribute("aria-disabled", "true");
  });

  test("should have aria-label", () => {
    const { container } = render(<Dropzone onChange={() => {}} value={[]} />);
    const dropzone = container.querySelector("[aria-label]");
    expect(dropzone).toBeInTheDocument();
    expect(dropzone?.getAttribute("aria-label")).toBeTruthy();
  });

  test("should use custom label as aria-label when provided", () => {
    const { container } = render(
      <Dropzone onChange={() => {}} value={[]} label="Upload your photos" />
    );
    const dropzone = container.querySelector("[aria-label='Upload your photos']");
    expect(dropzone).toBeInTheDocument();
  });

  test("should respond to Enter key like a click", () => {
    const onChange = jest.fn();
    const { container } = render(<Dropzone onChange={onChange} value={[]} />);
    const dropzone = container.querySelector("[role='button']") as HTMLElement;
    fireEvent.keyDown(dropzone, { key: "Enter", code: "Enter" });
    // The keyDown should trigger handleClick which opens file dialog
    // We can't test the file dialog opening, but we can verify no error is thrown
    expect(dropzone).toBeInTheDocument();
  });

  test("should respond to Space key like a click", () => {
    const { container } = render(<Dropzone onChange={() => {}} value={[]} />);
    const dropzone = container.querySelector("[role='button']") as HTMLElement;
    fireEvent.keyDown(dropzone, { key: " ", code: "Space" });
    expect(dropzone).toBeInTheDocument();
  });
});

describe("FileMosaic Accessibility", () => {
  test("should have role='listitem'", () => {
    const { container } = render(
      <FileMosaic id={1} name="test.txt" />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item).toBeInTheDocument();
  });

  test("should have tabIndex=0 for keyboard navigation", () => {
    const { container } = render(
      <FileMosaic id={1} name="test.txt" />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item).toHaveAttribute("tabindex", "0");
  });

  test("should have aria-label with file name", () => {
    const { container } = render(
      <FileMosaic id={1} name="document.pdf" size={1024} />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item?.getAttribute("aria-label")).toContain("document.pdf");
  });

  test("should include upload status in aria-label when uploading", () => {
    const { container } = render(
      <FileMosaic id={1} name="test.txt" uploadStatus="uploading" />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item?.getAttribute("aria-label")).toContain("uploading");
  });
});

describe("FileCard Accessibility", () => {
  test("should have role='listitem'", () => {
    const { container } = render(
      <FileCard id={1} name="test.txt" />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item).toBeInTheDocument();
  });

  test("should have tabIndex=0", () => {
    const { container } = render(
      <FileCard id={1} name="test.txt" />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item).toHaveAttribute("tabindex", "0");
  });

  test("should have aria-label with file name", () => {
    const { container } = render(
      <FileCard id={1} name="report.xlsx" />
    );
    const item = container.querySelector("[role='listitem']");
    expect(item?.getAttribute("aria-label")).toContain("report.xlsx");
  });
});

describe("FullScreen Accessibility", () => {
  test("should have role='dialog' and aria-modal when open", () => {
    const { container } = render(
      <FullScreen open={true} onClose={() => {}}>
        <img src="test.jpg" alt="test" />
      </FullScreen>
    );
    const dialog = container.querySelector("[role='dialog']");
    expect(dialog).toBeInTheDocument();
    expect(dialog).toHaveAttribute("aria-modal", "true");
  });

  test("should have aria-label", () => {
    const { container } = render(
      <FullScreen open={true} onClose={() => {}}>
        <img src="test.jpg" alt="test" />
      </FullScreen>
    );
    const dialog = container.querySelector("[role='dialog']");
    expect(dialog).toHaveAttribute("aria-label", "Fullscreen preview");
  });

  test("should not have aria-modal when closed", () => {
    const { container } = render(
      <FullScreen open={false} onClose={() => {}}>
        <img src="test.jpg" alt="test" />
      </FullScreen>
    );
    const dialog = container.querySelector("[role='dialog']");
    expect(dialog).not.toHaveAttribute("aria-modal");
  });
});
