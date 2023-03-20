import { ActionButtonItem } from "./components/dropzone/DropzoneProps";

/**
 * 
 * @param uploadButton upload action button props
 * @param abortButton abort action button props
 * @param deleteButton delete action button props
 * @param other array of other custom action buttons props
 * @returns 
 */
export const makeListOfActionButtonItems = (
  uploadButton: ActionButtonItem | undefined,
  abortButton: ActionButtonItem | undefined,
  deleteButton: ActionButtonItem | undefined,
  cleanButton: ActionButtonItem | undefined
): [ActionButtonItem[], ActionButtonItem[]] => {
  let listOfTopButtons: ActionButtonItem[] = [];
  let listOfBottomButtons: ActionButtonItem[] = [];
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