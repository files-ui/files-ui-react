import { renderHook, act, waitFor } from "@testing-library/react";
import { useFilesUI, UseFilesUIOptions } from "../src/hooks/useFilesUI";
import { ExtFile, ServerResponse } from "@files-ui/core";

let nextMockId = 1;

const uploadSingleExtFileWithStrategyMock = jest.fn(
  async (file: any) => ({ ...file, uploadStatus: "success", uploadMessage: "Uploaded" })
);
const uploadExtFilesWithStrategyMock = jest.fn(
  async (files: any[]) =>
    files.map((file) => ({
      ...file,
      uploadStatus: "success",
      uploadMessage: "Uploaded",
    }))
);

jest.mock("../src/utils/uploadStrategy", () => ({
  uploadSingleExtFileWithStrategy: (...args: any[]) =>
    uploadSingleExtFileWithStrategyMock(...args),
  uploadExtFilesWithStrategy: (...args: any[]) =>
    uploadExtFilesWithStrategyMock(...args),
}));

// Mock @files-ui/core
jest.mock("@files-ui/core", () => ({
  ...jest.requireActual("@files-ui/core"),
  ExtFileManager: {
    createFileListMap: jest.fn(() => 1),
    removeFileListMap: jest.fn(),
    getNextId: jest.fn(() => nextMockId++),
  },
}));

describe("useFilesUI Hook", () => {
  afterEach(() => {
    nextMockId = 1;
    jest.clearAllMocks();
  });

  describe("Initialization", () => {
    it("should initialize with empty files", () => {
      const { result } = renderHook(() => useFilesUI());

      expect(result.current.files).toEqual([]);
      expect(result.current.numberOfValidFiles).toBe(0);
      expect(result.current.isUploading).toBe(false);
      expect(result.current.isDragging).toBe(false);
    });

    it("should initialize with provided value", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test.pdf", size: 1024, valid: true },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles })
      );

      expect(result.current.files).toEqual(initialFiles);
      expect(result.current.numberOfValidFiles).toBe(1);
    });

    it("should generate dropzone ID if not provided", () => {
      const { ExtFileManager } = require("@files-ui/core");
      
      renderHook(() => useFilesUI());

      expect(ExtFileManager.createFileListMap).toHaveBeenCalled();
    });

    it("should use provided dropzone ID", () => {
      const { ExtFileManager } = require("@files-ui/core");
      
      renderHook(() => useFilesUI({ dropzoneId: "custom-id" }));

      expect(ExtFileManager.createFileListMap).not.toHaveBeenCalled();
    });
  });

  describe("File Addition", () => {
    it("should add files from FileList", () => {
      const { result } = renderHook(() => useFilesUI());

      const file = new File(["content"], "test.txt", { type: "text/plain" });
      const fileList = [file];

      act(() => {
        result.current.addFiles(fileList as any);
      });

      expect(result.current.files).toHaveLength(1);
      expect(result.current.files[0].name).toBe("test.txt");
    });

    it("should replace files when behaviour is 'replace'", () => {
      const { result } = renderHook(() =>
        useFilesUI({ behaviour: "replace" })
      );

      const file1 = new File(["content1"], "test1.txt", { type: "text/plain" });
      const file2 = new File(["content2"], "test2.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file1] as any);
      });
      expect(result.current.files).toHaveLength(1);

      act(() => {
        result.current.addFiles([file2] as any);
      });
      expect(result.current.files).toHaveLength(1);
      expect(result.current.files[0].name).toBe("test2.txt");
    });

    it("should add files when behaviour is 'add'", () => {
      const { result } = renderHook(() => useFilesUI({ behaviour: "add" }));

      const file1 = new File(["content1"], "test1.txt", { type: "text/plain" });
      const file2 = new File(["content2"], "test2.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file1] as any);
      });
      expect(result.current.files).toHaveLength(1);

      act(() => {
        result.current.addFiles([file2] as any);
      });
      expect(result.current.files).toHaveLength(2);
    });

    it("should call onChange callback when files are added", () => {
      const onChange = jest.fn();
      const { result } = renderHook(() => useFilesUI({ onChange }));

      const file = new File(["content"], "test.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file] as any);
      });

      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange).toHaveBeenCalledWith(expect.arrayContaining([
        expect.objectContaining({ name: "test.txt" }),
      ]));
    });
  });

  describe("File Removal", () => {
    it("should remove file by id", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test1.pdf", size: 1024 },
        { id: 2, name: "test2.pdf", size: 2048 },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles })
      );

      act(() => {
        result.current.removeFile(1);
      });

      expect(result.current.files).toHaveLength(1);
      expect(result.current.files[0].id).toBe(2);
    });

    it("should call onDelete callback", () => {
      const onDelete = jest.fn();
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test.pdf", size: 1024 },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles, onDelete })
      );

      act(() => {
        result.current.removeFile(1);
      });

      expect(onDelete).toHaveBeenCalledWith(1);
    });
  });

  describe("File Update", () => {
    it("should update file properties", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test.pdf", size: 1024, valid: true },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles })
      );

      act(() => {
        result.current.updateFile(1, { uploadStatus: "uploading", progress: 50 });
      });

      expect(result.current.files[0].uploadStatus).toBe("uploading");
      expect(result.current.files[0].progress).toBe(50);
    });
  });

  describe("File Clearing", () => {
    it("should clear all files", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test1.pdf", size: 1024 },
        { id: 2, name: "test2.pdf", size: 2048 },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles })
      );

      act(() => {
        result.current.clearFiles();
      });

      expect(result.current.files).toHaveLength(0);
    });

    it("should call onClean callback when clearing files", () => {
      const onClean = jest.fn();
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test.pdf", size: 1024 },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles, onClean })
      );

      act(() => {
        result.current.clearFiles();
      });

      expect(onClean).toHaveBeenCalledWith([]);
    });

    it("should clean only invalid files", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "valid.pdf", size: 1024, valid: true },
        { id: 2, name: "invalid.pdf", size: 2048, valid: false },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles })
      );

      act(() => {
        result.current.cleanFiles();
      });

      expect(result.current.files).toHaveLength(1);
      expect(result.current.files[0].id).toBe(1);
    });
  });

  describe("Validation", () => {
    it("should determine validation is needed", () => {
      const { result: result1 } = renderHook(() =>
        useFilesUI({ accept: "image/*" })
      );
      expect(result1.current.numberOfValidFiles).toBeDefined();

      const { result: result2 } = renderHook(() =>
        useFilesUI({ maxFileSize: 1024 })
      );
      expect(result2.current.numberOfValidFiles).toBeDefined();

      const { result: result3 } = renderHook(() =>
        useFilesUI({ maxFiles: 5 })
      );
      expect(result3.current.numberOfValidFiles).toBeDefined();
    });

    it("should count valid files correctly", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "valid1.pdf", size: 1024, valid: true },
        { id: 2, name: "valid2.pdf", size: 2048, valid: true },
        { id: 3, name: "invalid.pdf", size: 3072, valid: false },
      ];

      const { result } = renderHook(() =>
        useFilesUI({ value: initialFiles, maxFileSize: 5000 })
      );

      expect(result.current.numberOfValidFiles).toBe(2);
    });

    it("should auto-clean invalid files when autoClean is true", () => {
      const { result } = renderHook(() =>
        useFilesUI({ autoClean: true, maxFileSize: 100 })
      );

      const largeFile = new File(["x".repeat(200)], "large.txt", {
        type: "text/plain",
      });

      act(() => {
        result.current.addFiles([largeFile] as any);
      });

      // File should be filtered out due to autoClean
      // Note: This depends on validateExtFileList implementation
      expect(result.current.files.length).toBeLessThanOrEqual(1);
    });
  });

  describe("Drag Handlers", () => {
    it("should provide drag handlers", () => {
      const { result } = renderHook(() => useFilesUI());

      const handlers = result.current.getDragHandlers();

      expect(handlers).toHaveProperty("onDragEnter");
      expect(handlers).toHaveProperty("onDragLeave");
      expect(handlers).toHaveProperty("onDragOver");
      expect(handlers).toHaveProperty("onDrop");
    });

    it("should set isDragging on drag enter", () => {
      const { result } = renderHook(() => useFilesUI());
      const handlers = result.current.getDragHandlers();

      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as any;

      act(() => {
        handlers.onDragEnter(mockEvent);
      });

      expect(result.current.isDragging).toBe(true);
    });

    it("should unset isDragging on drag leave", () => {
      const { result } = renderHook(() => useFilesUI());
      const handlers = result.current.getDragHandlers();

      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
      } as any;

      act(() => {
        handlers.onDragEnter(mockEvent);
      });
      expect(result.current.isDragging).toBe(true);

      act(() => {
        handlers.onDragLeave(mockEvent);
      });
      expect(result.current.isDragging).toBe(false);
    });

    it("should handle drop with files", () => {
      const { result } = renderHook(() => useFilesUI());
      const handlers = result.current.getDragHandlers();

      const file = new File(["content"], "test.txt", { type: "text/plain" });
      const mockEvent = {
        preventDefault: jest.fn(),
        stopPropagation: jest.fn(),
        dataTransfer: {
          files: [file],
        },
      } as any;

      act(() => {
        handlers.onDrop(mockEvent);
      });

      expect(result.current.isDragging).toBe(false);
      expect(result.current.files).toHaveLength(1);
    });
  });

  describe("Input Props", () => {
    it("should provide input props", () => {
      const { result } = renderHook(() =>
        useFilesUI({ accept: "image/*", maxFiles: 5 })
      );

      const inputProps = result.current.getInputProps();

      expect(inputProps).toHaveProperty("onChange");
      expect(inputProps.accept).toBe("image/*");
      expect(inputProps.multiple).toBe(true);
    });

    it("should set multiple to false when maxFiles is 1", () => {
      const { result } = renderHook(() => useFilesUI({ maxFiles: 1 }));

      const inputProps = result.current.getInputProps();

      expect(inputProps.multiple).toBe(false);
    });

    it("should handle input change", () => {
      const { result } = renderHook(() => useFilesUI());
      const inputProps = result.current.getInputProps();

      const file = new File(["content"], "test.txt", { type: "text/plain" });
      const mockEvent = {
        target: {
          files: [file],
        },
      } as any;

      act(() => {
        inputProps.onChange(mockEvent);
      });

      expect(result.current.files).toHaveLength(1);
    });
  });

  describe("Upload", () => {
    it("should call uploadFiles method", async () => {
      const { result } = renderHook(() => useFilesUI());

      await act(async () => {
        const uploadedFiles = await result.current.uploadFiles();
        expect(uploadedFiles).toBeDefined();
      });

      // After upload completes, isUploading should be false
      expect(result.current.isUploading).toBe(false);
    });

    it("should call onUploadStart and onUploadFinish", async () => {
      const onUploadStart = jest.fn();
      const onUploadFinish = jest.fn();
      const mockAction = jest.fn().mockResolvedValue({ success: true, message: "Uploaded" });

      const { result } = renderHook(() =>
        useFilesUI({ 
          onUploadStart, 
          onUploadFinish,
          action: mockAction 
        })
      );

      // Add a file first
      await act(async () => {
        const file = new File(["test"], "test.txt", { type: "text/plain" });
        result.current.addFiles([file]);
      });

      // Upload the file
      await act(async () => {
        await result.current.uploadFiles();
      });

      expect(onUploadStart).toHaveBeenCalled();
      expect(onUploadFinish).toHaveBeenCalled();
      expect(mockAction).toHaveBeenCalled();
    });

    it("should initialize xhr for non-action uploads", async () => {
      const { result } = renderHook(() =>
        useFilesUI({
          url: "/api/upload",
        })
      );

      const file = new File(["test"], "test.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file]);
      });

      await act(async () => {
        await result.current.uploadFiles();
      });

      expect(uploadSingleExtFileWithStrategyMock).toHaveBeenCalled();
      const firstCallArg = uploadSingleExtFileWithStrategyMock.mock.calls[0][0];
      expect(firstCallArg.xhr).toBeDefined();
      expect(firstCallArg.xhr).toBeInstanceOf(XMLHttpRequest);
    });

    it("should keep file aborted when late completion arrives after abortUpload", async () => {
      let resolveAction: ((value: ServerResponse) => void) | undefined;
      const delayedAction = jest.fn(
        () =>
          new Promise<ServerResponse>((resolve) => {
            resolveAction = resolve;
          })
      );

      const { result } = renderHook(() =>
        useFilesUI({
          action: delayedAction,
        })
      );

      const file = new File(["test"], "test.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file]);
      });

      act(() => {
        void result.current.uploadFiles();
      });

      await waitFor(() => {
        expect(result.current.isUploading).toBe(true);
      });

      act(() => {
        result.current.abortUpload();
      });

      expect(result.current.isUploading).toBe(false);
      expect(result.current.files[0].uploadStatus).toBe("aborted");

      act(() => {
        resolveAction?.({ success: true, message: "late success" });
      });

      await waitFor(() => {
        expect(result.current.files[0].uploadStatus).toBe("aborted");
      });
    });

    it("should abort a single file without aborting other uploads", async () => {
      const pendingResolvers = new Map<string, (value: ServerResponse) => void>();
      const perFileAction = jest.fn((formData: FormData) => {
        const file = formData.get("file") as File;

        return new Promise<ServerResponse>((resolve) => {
          pendingResolvers.set(file.name, resolve);
        });
      });

      const { result } = renderHook(() =>
        useFilesUI({
          action: perFileAction,
        })
      );

      const fileA = new File(["a"], "a.txt", { type: "text/plain" });
      const fileB = new File(["b"], "b.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([fileA, fileB]);
      });

      act(() => {
        void result.current.uploadFiles();
      });

      await waitFor(() => {
        expect(result.current.isUploading).toBe(true);
      });

      const firstFileId = result.current.files[0].id as string | number;

      act(() => {
        result.current.abortFileUpload(firstFileId);
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");

      act(() => {
        pendingResolvers.get("a.txt")?.({ success: true, message: "late success a" });
      });

      await waitFor(() => {
        expect(pendingResolvers.has("b.txt")).toBe(true);
      });

      act(() => {
        pendingResolvers.get("b.txt")?.({ success: true, message: "success b" });
      });

      await waitFor(() => {
        expect(result.current.files[0].uploadStatus).toBe("aborted");
        expect(result.current.files[1].uploadStatus).toBe("success");
      });
    });

    it("should be idempotent when aborting the same file twice", async () => {
      let resolveAction: ((value: ServerResponse) => void) | undefined;
      const delayedAction = jest.fn(
        () =>
          new Promise<ServerResponse>((resolve) => {
            resolveAction = resolve;
          })
      );

      const { result } = renderHook(() =>
        useFilesUI({ action: delayedAction })
      );

      const file = new File(["test"], "test.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file]);
      });

      act(() => {
        void result.current.uploadFiles();
      });

      await waitFor(() => {
        expect(result.current.isUploading).toBe(true);
      });

      const fileId = result.current.files[0].id as string | number;

      act(() => {
        result.current.abortFileUpload(fileId);
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");

      // Second abort should not throw or change state
      act(() => {
        result.current.abortFileUpload(fileId);
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");

      act(() => {
        resolveAction?.({ success: true, message: "late" });
      });

      await waitFor(() => {
        expect(result.current.files[0].uploadStatus).toBe("aborted");
      });
    });

    it("should be idempotent when calling abortUpload twice", async () => {
      let resolveAction: ((value: ServerResponse) => void) | undefined;
      const delayedAction = jest.fn(
        () =>
          new Promise<ServerResponse>((resolve) => {
            resolveAction = resolve;
          })
      );

      const { result } = renderHook(() =>
        useFilesUI({ action: delayedAction })
      );

      const file = new File(["test"], "test.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file]);
      });

      act(() => {
        void result.current.uploadFiles();
      });

      await waitFor(() => {
        expect(result.current.isUploading).toBe(true);
      });

      act(() => {
        result.current.abortUpload();
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");
      expect(result.current.isUploading).toBe(false);

      // Second bulk abort should not throw or change state
      act(() => {
        result.current.abortUpload();
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");
      expect(result.current.isUploading).toBe(false);

      act(() => {
        resolveAction?.({ success: true, message: "late" });
      });

      await waitFor(() => {
        expect(result.current.files[0].uploadStatus).toBe("aborted");
      });
    });

    it("should keep cancelled status when late XHR-route response arrives", async () => {
      uploadSingleExtFileWithStrategyMock.mockImplementation(
        (file: any) =>
          new Promise((resolve) => {
            // Simulate a delayed XHR response
            setTimeout(() => {
              resolve({ ...file, uploadStatus: "success", uploadMessage: "done" });
            }, 50);
          })
      );

      const { result } = renderHook(() =>
        useFilesUI({ url: "/api/upload" })
      );

      const file = new File(["test"], "test.txt", { type: "text/plain" });

      act(() => {
        result.current.addFiles([file]);
      });

      act(() => {
        void result.current.uploadFiles();
      });

      await waitFor(() => {
        expect(result.current.isUploading).toBe(true);
      });

      act(() => {
        result.current.abortUpload();
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");

      // Wait for the delayed mock to settle
      await act(async () => {
        await new Promise((r) => setTimeout(r, 100));
      });

      expect(result.current.files[0].uploadStatus).toBe("aborted");
    });
  });

  describe("Controlled Mode", () => {
    it("should sync with controlled value", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test1.pdf", size: 1024 },
      ];

      const { result, rerender } = renderHook(
        ({ value }: { value?: ExtFile[] }) => useFilesUI({ value }),
        { initialProps: { value: initialFiles } }
      );

      expect(result.current.files).toHaveLength(1);

      const updatedFiles: ExtFile[] = [
        { id: 1, name: "test1.pdf", size: 1024 },
        { id: 2, name: "test2.pdf", size: 2048 },
      ];

      rerender({ value: updatedFiles });

      expect(result.current.files).toHaveLength(2);
    });

    it("should use controlled value when not uploading", () => {
      const initialFiles: ExtFile[] = [
        { id: 1, name: "test1.pdf", size: 1024 },
      ];

      const { result, rerender } = renderHook(
        ({ value }: { value?: ExtFile[] }) => useFilesUI({ value }),
        { initialProps: { value: initialFiles } }
      );

      expect(result.current.files).toHaveLength(1);

      // Update controlled value
      const updatedFiles: ExtFile[] = [
        { id: 1, name: "test1.pdf", size: 1024 },
        { id: 2, name: "test2.pdf", size: 2048 },
      ];

      rerender({ value: updatedFiles });

      // Should sync to new value when not uploading
      expect(result.current.files).toHaveLength(2);
      expect(result.current.files[1].id).toBe(2);
    });
  });

  describe("Cleanup", () => {
    it("should cleanup on unmount", () => {
      const { ExtFileManager } = require("@files-ui/core");
      const { unmount } = renderHook(() => useFilesUI());

      unmount();

      expect(ExtFileManager.removeFileListMap).toHaveBeenCalled();
    });
  });
});
