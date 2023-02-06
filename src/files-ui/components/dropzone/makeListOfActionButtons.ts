import { DropzoneActionButton } from "./components/dropzone/DropzoneProps";

/**
 * 
 * @param uploadButton upload action button props
 * @param abortButton abort action button props
 * @param deleteButton delete action button props
 * @param other array of other custom action buttons props
 * @returns 
 */
export const makeListOfActionButtons = (
  uploadButton: DropzoneActionButton | undefined,
  abortButton: DropzoneActionButton | undefined,
  deleteButton: DropzoneActionButton | undefined,
  cleanButton: DropzoneActionButton | undefined
): [DropzoneActionButton[], DropzoneActionButton[]] => {
  let listOfTopButtons: DropzoneActionButton[] = [];
  let listOfBottomButtons: DropzoneActionButton[] = [];
 /*  if (uploadButton) {
    uploadButton.position === "top"
      ? listOfTopButtons.push(uploadButton)
      : listOfBottomButtons.push(uploadButton);
  }
  if (abortButton) {
    abortButton.position === "top"
      ? listOfTopButtons.push(abortButton)
      : listOfBottomButtons.push(abortButton);
  }
  if (deleteButton) {
    deleteButton.position === "top"
      ? listOfTopButtons.push(deleteButton)
      : listOfBottomButtons.push(deleteButton);
  }
  other?.forEach((actionButton) => {
    actionButton.position === "top"
      ? listOfTopButtons.push(actionButton)
      : listOfBottomButtons.push(actionButton);
  }); */

  return [listOfTopButtons, listOfBottomButtons];
};