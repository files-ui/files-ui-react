import * as React from "react";
import { render } from "@testing-library/react";
import FilesUiProvider from "../src/FilesUiProvider/FilesUiProvider";

describe("FilesUiProvider fontFamily", () => {
  afterEach(() => {
    // Clean up any leftover style elements
    const el = document.getElementById("files-ui-font-style");
    if (el) el.remove();
  });

  it("injects <style> element when fontFamily is set", () => {
    render(
      <FilesUiProvider config={{ fontFamily: "Inter" }}>
        <div />
      </FilesUiProvider>
    );
    const style = document.getElementById("files-ui-font-style");
    expect(style).not.toBeNull();
    expect(style?.textContent).toContain("Inter");
    expect(style?.textContent).toContain("--files-ui-font-family");
  });

  it("removes <style> on unmount", () => {
    const { unmount } = render(
      <FilesUiProvider config={{ fontFamily: "Roboto" }}>
        <div />
      </FilesUiProvider>
    );
    expect(document.getElementById("files-ui-font-style")).not.toBeNull();
    unmount();
    expect(document.getElementById("files-ui-font-style")).toBeNull();
  });

  it("does not inject <style> when fontFamily is undefined", () => {
    render(
      <FilesUiProvider config={{ darkMode: true }}>
        <div />
      </FilesUiProvider>
    );
    const style = document.getElementById("files-ui-font-style");
    expect(style).toBeNull();
  });

  it("updates <style> when fontFamily changes", () => {
    const { rerender } = render(
      <FilesUiProvider config={{ fontFamily: "Inter" }}>
        <div />
      </FilesUiProvider>
    );
    expect(document.getElementById("files-ui-font-style")?.textContent).toContain("Inter");

    rerender(
      <FilesUiProvider config={{ fontFamily: "Montserrat" }}>
        <div />
      </FilesUiProvider>
    );
    expect(document.getElementById("files-ui-font-style")?.textContent).toContain("Montserrat");
    expect(document.getElementById("files-ui-font-style")?.textContent).not.toContain("Inter");
  });
});
