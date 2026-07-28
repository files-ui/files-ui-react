import "@testing-library/jest-dom";
import React from "react";
import { FileMosaic, FileCard } from "../src";
import { render } from "@testing-library/react";

describe("Size Variants", () => {
  const baseProps = { id: "test-1", name: "test.pdf", size: 1024, type: "application/pdf" };

  describe("FileMosaic", () => {
    it("renders without variant (defaults to medium)", () => {
      const { container } = render(<FileMosaic {...baseProps} />);
      const el = container.querySelector(".files-ui-file-mosaic-main-container");
      expect(el).toBeInTheDocument();
      expect(el).not.toHaveClass("fui-size-xs");
      expect(el).not.toHaveClass("fui-size-small");
      expect(el).not.toHaveClass("fui-size-large");
    });

    it("applies fui-size-xs class when variant='xs'", () => {
      const { container } = render(<FileMosaic {...baseProps} variant="xs" />);
      const el = container.querySelector(".files-ui-file-mosaic-main-container");
      expect(el).toHaveClass("fui-size-xs");
    });

    it("applies fui-size-small class when variant='small'", () => {
      const { container } = render(<FileMosaic {...baseProps} variant="small" />);
      const el = container.querySelector(".files-ui-file-mosaic-main-container");
      expect(el).toHaveClass("fui-size-small");
    });

    it("does not add size class when variant='medium'", () => {
      const { container } = render(<FileMosaic {...baseProps} variant="medium" />);
      const el = container.querySelector(".files-ui-file-mosaic-main-container");
      expect(el).not.toHaveClass("fui-size-xs");
      expect(el).not.toHaveClass("fui-size-small");
      expect(el).not.toHaveClass("fui-size-large");
    });

    it("applies fui-size-large class when variant='large'", () => {
      const { container } = render(<FileMosaic {...baseProps} variant="large" />);
      const el = container.querySelector(".files-ui-file-mosaic-main-container");
      expect(el).toHaveClass("fui-size-large");
    });
  });

  describe("FileCard", () => {
    it("renders without variant (defaults to medium)", () => {
      const { container } = render(<FileCard {...baseProps} />);
      const el = container.querySelector(".files-ui-file-card-main-container");
      expect(el).toBeInTheDocument();
      expect(el).not.toHaveClass("fui-size-xs");
      expect(el).not.toHaveClass("fui-size-small");
      expect(el).not.toHaveClass("fui-size-large");
    });

    it("applies fui-size-xs class when variant='xs'", () => {
      const { container } = render(<FileCard {...baseProps} variant="xs" />);
      const el = container.querySelector(".files-ui-file-card-main-container");
      expect(el).toHaveClass("fui-size-xs");
    });

    it("applies fui-size-small class when variant='small'", () => {
      const { container } = render(<FileCard {...baseProps} variant="small" />);
      const el = container.querySelector(".files-ui-file-card-main-container");
      expect(el).toHaveClass("fui-size-small");
    });

    it("applies fui-size-large class when variant='large'", () => {
      const { container } = render(<FileCard {...baseProps} variant="large" />);
      const el = container.querySelector(".files-ui-file-card-main-container");
      expect(el).toHaveClass("fui-size-large");
    });
  });
});
