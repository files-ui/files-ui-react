import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { FileCard, FileMosaic } from "../src";

describe("Selection regression", () => {
  test("FileMosaic updates controlled selected state on first click", () => {
    const Harness = () => {
      const [selectedIds, setSelectedIds] = React.useState<(string | number)[]>([]);

      const toggleSelection = (id: string | number | undefined, selected: boolean) => {
        if (id === undefined) return;
        setSelectedIds((prev) =>
          selected ? (prev.includes(id) ? prev : [...prev, id]) : prev.filter((item) => item !== id),
        );
      };

      return (
        <>
          <FileMosaic
            id="sel-1"
            name="selection-1.png"
            selectable
            selected={selectedIds.includes("sel-1")}
            onSelect={toggleSelection}
          />
          <p>Selected: {selectedIds.length ? selectedIds.join(", ") : "none"}</p>
        </>
      );
    };

    render(<Harness />);

    const checkbox = screen.getByLabelText("Select file selection-1.png") as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    expect(screen.getByText("Selected: sel-1")).toBeInTheDocument();
  });

  test("FileCard updates controlled selected state on first click", () => {
    const Harness = () => {
      const [selectedIds, setSelectedIds] = React.useState<(string | number)[]>([]);

      const toggleSelection = (id: string | number | undefined, selected: boolean) => {
        if (id === undefined) return;
        setSelectedIds((prev) =>
          selected ? (prev.includes(id) ? prev : [...prev, id]) : prev.filter((item) => item !== id),
        );
      };

      return (
        <>
          <FileCard
            id="sel-1"
            name="selection-1.png"
            selectable
            selected={selectedIds.includes("sel-1")}
            onSelect={toggleSelection}
          />
          <p>Selected: {selectedIds.length ? selectedIds.join(", ") : "none"}</p>
        </>
      );
    };

    render(<Harness />);

    const checkbox = screen.getByLabelText("Select file selection-1.png") as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(checkbox.checked).toBe(true);
    expect(screen.getByText("Selected: sel-1")).toBeInTheDocument();
  });
});
