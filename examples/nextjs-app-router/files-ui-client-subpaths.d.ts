/**
 * DEPRECATED: With @files-ui/react v2.0.6+, all client components include
 * "use client" in their build output. You can import directly from
 * "@files-ui/react" in both Server and Client Components.
 *
 * This file is kept only for projects still using the /client/ subpath pattern.
 */
declare module "@files-ui/react/client/dropzone" {
  import * as React from "react";
  import { DropzoneProps } from "@files-ui/react";

  const Dropzone: React.FC<DropzoneProps>;
  export default Dropzone;
}
