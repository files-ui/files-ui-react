"use server";

type UploadActionResult = {
  success: boolean;
  message: string;
};

export async function uploadFileAction(
  formData: FormData,
): Promise<UploadActionResult> {
  const file = formData.get("file") as File | null;

  if (!file) {
    return { success: false, message: "No file provided" };
  }

  // In a real app, persist file bytes to your storage provider.
  return {
    success: true,
    message: `Received ${file.name} (${file.size} bytes)`,
  };
}
