import * as React from "react";
/**
 * Performs stopPropagation and preventDefault functions on an drop event instance
 * @param evt drag event handler object
 */
export const handleDropUtil: React.DragEventHandler<HTMLDivElement> = (
  evt: React.DragEvent<HTMLDivElement>
) => {
  evt.stopPropagation();
  evt.preventDefault();
};
/**
 * Performs stopPropagation and preventDefault functions on an drop event instance
 * and also specifies that the drop effect is link
 * @param evt drag event handler object
 */
export const handleDragUtil: React.DragEventHandler<HTMLDivElement> = (
  evt: React.DragEvent<HTMLDivElement>
) => {

  evt.dataTransfer.dropEffect = "link"; handleDropUtil(evt);
};