# BUGS

## File Item (mosaic)

- After uploading, progress must be reiitialized to 0
- [SOLVED] FileiTEMmAINlAYER WORKS STRANGE AT THE TIME NEW fILEiTEM IS ADDED
- Fileptions (menu collapsed from click in option icon)

## Dropzone

- [SOLVED]: Uploading works in 2 times (first time stops after setting progress = UPLOADING.progrss), but fails to recover from the manager. [UPDATED]: Problem is at `useDropzoneFileListUpdater.ts` file. The problem is that hook for updating when user wants to interrupt preparing, is called at the begining of the upload process, with value of undefined in all files. It is probably the last update on localFiles outside Dropzone component.

- When file is set from preparing to undefined it can be deleted, however, will appear again if onDelete is called. It would be great to add a reconciliation procedure to support different array sizes in updater hook. Or "canceled" upload status could be added and file Item should not show the "X" button when uploading and canceled. After Upload process, all files with "canceled" upload status should be set to "undefined" again. This can be a workaround.

- [SOLVED] Dropzpne is afected by adding more files as children
- offset should not be used, instead a padding, given header or footer
- When layer is visible, border in the root container must dissapear

## Tooltip

- prints console.log() every time I hover FileItem, even when no message is sent

## Drop Layer

- prints the classname everytime I drop files o select files
