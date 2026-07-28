import "@testing-library/jest-dom";
import React from "react";
import { Dropzone } from "../src";

import { cleanup, fireEvent, render, screen } from "@testing-library/react";

test("Validate label text must be 'Drop yor files here...'", () => {
  render(<Dropzone> Drop yor files here...</Dropzone>);
  expect(screen.getByText("Drop yor files here...")).toBeInTheDocument();
});

describe("Dropzone actionButtons", () => {
  test.each([
    [{ uploadButton: { onClick: console.log } }, false],
    [{ uploadButton: { onClick: console.log, disabled: false } }, false],
    [{ uploadButton: { onClick: console.log, disabled: true } }, true],
    [{ deleteButton: { onClick: console.log } }, false],
    [{ deleteButton: { onClick: console.log, disabled: false } }, false],
    [{ deleteButton: { onClick: console.log, disabled: true } }, true],

    // abortButton and cleanButton need more interaction
  ])("disabled %s -> %s", (config, expected) => {
    const { container } = render(
      <Dropzone actionButtons={{ position: "after", ...config }} />,
    );
    expect(
      (
        container.querySelector(
          ".files-ui-buttons-container button",
        ) as HTMLInputElement
      ).disabled,
    ).toBe(expected);
  });
});
