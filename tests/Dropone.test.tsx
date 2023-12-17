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
    [{ uploadButton: { onClick: console.log } }, "Upload"],
    [{ uploadButton: { label: undefined, onClick: console.log } }, "Upload"],
    [{ uploadButton: { label: null, onClick: console.log } }, "Upload"],
    [{ uploadButton: { label: "my label", onClick: console.log } }, "my label"],
    [{ deleteButton: { label: null, onClick: console.log } }, "Delete"],
    [
      { deleteButton: { label: "my delete label", onClick: console.log } },
      "my delete label",
    ],

    // abortButton and cleanButton need more interaction
  ])("label %s -> %s", (config, expected) => {
    const { container } = render(
      <Dropzone actionButtons={{ position: "after", ...config }} />,
    );
    expect(
      container.querySelector(".files-ui-buttons-container button").textContent,
    ).toBe(expected);
  });
});
