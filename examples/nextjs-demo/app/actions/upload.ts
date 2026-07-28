"use server";

import { ServerResponse } from "@files-ui/core";

/**
 * Server Action for handling file uploads
 * Demonstrates Next.js 16 App Router integration with useFilesUI
 */
export async function uploadFileAction(formData: FormData): Promise<ServerResponse> {
  try {
    const file = formData.get("file") as File;
    
    if (!file) {
      return {
        success: false,
        message: "No file provided",
      };
    }

    // Simulate file processing
    console.log(`Processing file: ${file.name} (${file.size} bytes)`);
    
    // In a real app, you would:
    // 1. Validate the file
    // 2. Upload to cloud storage (S3, Azure Blob, etc.)
    // 3. Save metadata to database
    // 4. Return the file URL
    
    // Simulate async processing
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: `File ${file.name} uploaded successfully`,
      data: {
        filename: file.name,
        size: file.size,
        type: file.type,
        // In a real app, return the uploaded file URL
        url: `/uploads/${file.name}`,
      },
    };
  } catch (error) {
    console.error("Upload error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Upload failed",
    };
  }
}
