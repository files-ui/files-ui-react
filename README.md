<a href="https://www.files-ui.com">
<p align="center">
<img src="https://user-images.githubusercontent.com/43678736/226257748-6ba2f8cf-59c5-40d1-a545-a388ddab0f68.png" width="150" height="150" alt="Files UI Logo"/>
</p>
</a>

<h1 align="center">Files UI</h1>

<p align="center">
  <strong>Complete React file upload component library</strong>
  <br />
  <sub>Validation • Upload • Preview • Crop • Compress</sub>
</p>

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/files-ui/react/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@files-ui/react.svg?logo=npm&logoColor=fff&label=NPM&color=limegreen)](https://www.npmjs.com/package/@files-ui/react)
[![Node.js CI](https://github.com/files-ui/files-ui-react/actions/workflows/node.js.yml/badge.svg)](https://github.com/files-ui/files-ui-react)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![GitHub stars](https://img.shields.io/github/stars/files-ui/files-ui-react?style=social)](https://github.com/files-ui/files-ui-react)

</div>

<p align="center">
<a href="https://www.files-ui.com">
<img src="https://user-images.githubusercontent.com/43678736/228052494-99d970c0-1eb7-42c6-b22c-8c2295b8dc4a.gif" width="70%" alt="Files UI Demo"/>
</a>
</p>

<p align="center">
  <a href="#-quick-start">Quick Start</a> •
  <a href="#-whats-new-in-v210">What's New</a> •
  <a href="#-key-features">Features</a> •
  <a href="#-documentation">Docs</a> •
  <a href="#-documentation">Examples</a>
</p>

---

## ✨ What's New in v2.1.0

🎉 **Major update with powerful new capabilities!**

<table>
<tr>
<td width="50%">

### 🎨 Material Design Icons
Beautiful Material Design selection checkboxes with full dark mode support

```tsx
<FileMosaic 
  {...file} 
  selectable 
  selected 
  darkMode 
/>
```

</td>
<td width="50%">

### 🖼️ Image Editing
Built-in edit icon for image files with callback support

```tsx
<FileMosaic 
  {...file} 
  onEdit={handleEdit}
  preview 
/>
```

</td>
</tr>
</table>

### 🔌 Optional Plugin Ecosystem

Extend functionality without bloating your bundle:

- **<a href="https://www.files-ui.com/plugins/crop" target="_blank" rel="noopener noreferrer">@files-ui/crop</a>** (~11KB) — Interactive image cropping
- **<a href="https://www.files-ui.com/plugins/compress" target="_blank" rel="noopener noreferrer">@files-ui/compress</a>** (~8KB) — Image optimization

**[See Full Changelog →](./CHANGELOG.md)**

---

## 🚀 Quick Start

### Installation

```bash
npm install @files-ui/react
# or
yarn add @files-ui/react
```

### Basic Usage

```jsx
import { Dropzone, FileMosaic } from "@files-ui/react";
import { useState } from "react";

export default function App() {
  const [files, setFiles] = useState([]);

  return (
    <Dropzone onChange={setFiles} value={files}>
      {files.map((file) => (
        <FileMosaic key={file.id} {...file} preview />
      ))}
    </Dropzone>
  );
}
```

**Live Demos:**

| Demo | Link |
|------|------|
| Basic Sample 🍰 | [![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/basic-demo-js-blssi1?file=/src/App.js) |
| Advanced Sample 🔨 | [![CodeSandbox](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/advanced-demo-js-6euo8j?file=/src/App.js) |

---

## 💎 Key Features

### 📤 Upload & Validation
- ✅ **Drag & Drop** — Intuitive file upload
- ✅ **File Validation** — Type, size, custom validators
- ✅ **Upload Progress** — Real-time upload tracking
- ✅ **Chunked Upload** — Large file support
- ✅ **Server Actions** — Next.js 16+ native support

### 🎨 UI Components
- ✅ **Multiple Layouts** — Grid (FileMosaic) & Card (FileCard)
- ✅ **Material Icons** — Beautiful Material Design icons
- ✅ **Dark Mode** — Built-in theme support
- ✅ **Selection API** — Multi-select with checkboxes
- ✅ **Preview** — Image and video fullscreen preview
- ✅ **Avatar** — Profile image picker

### 🔧 Developer Experience
- ✅ **TypeScript** — Full type definitions
- ✅ **Headless** — `useFilesUI()` hook for custom UIs
- ✅ **Zero Dependencies** — Core has no external deps
- ✅ **RSC Compatible** — Next.js App Router ready
- ✅ **Framework Agnostic** — Works with any React setup

---

## 📚 Main Components

| Component | Purpose | Key Props |
|-----------|---------|-----------|
| **[\<Dropzone/\>](https://www.files-ui.com/components/dropzone)** | Main upload area | `onChange`, `value`, `accept`, `maxFileSize` |
| **[\<FileMosaic/\>](https://www.files-ui.com/components/filemosaic)** | Grid file display | `preview`, `onDelete`, `onEdit`, `selectable` |
| **[\<FileCard/\>](https://www.files-ui.com/components/filecard)** | Card file display | `elevation`, `preview`, `darkMode` |
| **[\<Avatar/\>](https://www.files-ui.com/components/avatar)** | Profile image picker | `src`, `alt`, `onChange` |
| **[\<FileInputButton/\>](https://www.files-ui.com/components/fileinputbutton)** | Button uploader | `onChange`, `accept` |
| **[\<FullScreen/\>](https://www.files-ui.com/components/fullscreen)** | Modal preview | `open`, `onClose` |

[**→ View Full API Reference**](https://www.files-ui.com)

---

## 🎯 Common Use Cases

<details>
<summary><strong>📸 Image Cropping & Compression</strong></summary>

```jsx
import { Dropzone, FileMosaic } from "@files-ui/react";
import { CropDialog, useCropDialog } from "@files-ui/crop/react";
import { compressImage } from "@files-ui/compress";

function ImageUploader() {
  const [files, setFiles] = useState([]);
  const { cropFile, openCrop, closeCrop, handleCropComplete } = useCropDialog({
    onComplete: async (croppedFile) => {
      // Compress after crop
      const compressed = await compressImage(croppedFile, {
        maxWidthOrHeight: 1920,
        quality: 0.85
      });
      updateFile(compressed);
    }
  });

  return (
    <>
      <Dropzone onChange={setFiles} value={files}>
        {files.map(file => (
          <FileMosaic key={file.id} {...file} onEdit={openCrop} />
        ))}
      </Dropzone>
      
      {cropFile && (
        <CropDialog
          file={cropFile}
          onComplete={handleCropComplete}
          onCancel={closeCrop}
        />
      )}
    </>
  );
}
```

</details>

<details>
<summary><strong>🌙 Dark Mode</strong></summary>

```jsx
import { Dropzone, FileMosaic, FilesUiProvider } from "@files-ui/react";

// Global dark mode
function App() {
  return (
    <FilesUiProvider config={{ darkMode: true }}>
      <Dropzone onChange={setFiles} value={files}>
        {files.map(file => (
          <FileMosaic key={file.id} {...file} />
        ))}
      </Dropzone>
    </FilesUiProvider>
  );
}

// Per-component dark mode
<FileMosaic {...file} darkMode />
<FileCard {...file} darkMode />
```

</details>

<details>
<summary><strong>☑️ Multi-Select with Checkboxes</strong></summary>

```jsx
function FileSelector() {
  const [files, setFiles] = useState([]);
  const [selected, setSelected] = useState(new Set());

  const handleSelect = (fileId, isSelected) => {
    setSelected(prev => {
      const next = new Set(prev);
      isSelected ? next.add(fileId) : next.delete(fileId);
      return next;
    });
  };

  return (
    <Dropzone onChange={setFiles} value={files}>
      {files.map(file => (
        <FileMosaic
          key={file.id}
          {...file}
          selectable
          selected={selected.has(file.id)}
          onSelect={handleSelect}
        />
      ))}
    </Dropzone>
  );
}
```

</details>

<details>
<summary><strong>🚀 Next.js Server Actions</strong></summary>

```jsx
// app/actions/upload.ts
"use server";
export async function uploadFile(formData: FormData) {
  const file = formData.get("file") as File;
  // Process file...
  return { success: true, message: `Uploaded ${file.name}` };
}

// app/uploader.tsx
"use client";
import { Dropzone } from "@files-ui/react/client/dropzone";
import { uploadFile } from "./actions/upload";

export function Uploader() {
  return <Dropzone action={uploadFile} />;
}
```

</details>

<details>
<summary><strong>🎨 Custom UI with <a href="https://www.files-ui.com/headless" target="_blank" rel="noopener noreferrer">Headless Hook</a></strong></summary>

```jsx
import { useFilesUI } from "@files-ui/react";

function CustomUploader() {
  const { files, uploadFiles, getDragHandlers, getInputProps } = useFilesUI({
    accept: "image/*",
    maxFileSize: 5 * 1024 * 1024,
    url: "/api/upload"
  });

  return (
    <div {...getDragHandlers()} className="my-dropzone">
      <input {...getInputProps()} />
      <button onClick={() => uploadFiles()}>
        Upload {files.length} files
      </button>
    </div>
  );
}
```

</details>

---

## 📖 Documentation

- 📚 **[Complete Documentation](https://www.files-ui.com)** — Component API, guides, examples
- 🎨 **[Storybook](https://www.files-ui.com)** — Interactive component playground
- 📝 **[Changelog](./CHANGELOG.md)** — Release history
- 🔗 **[TypeScript Definitions](https://www.files-ui.com)** — Full type support

---

## 🖼️ More Previews

<details>
<summary><strong>Image Fullscreen Preview</strong></summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066199-fb7a5bd3-9c7e-4f72-b0ef-7f11d236d38e.png" alt="Image preview" width="100%"/></p>
</details>

<details>
<summary><strong>Video Fullscreen Preview</strong></summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066195-62063300-21e0-48fd-80d8-31b566562fde.png" alt="Video preview" width="100%"/></p>
</details>

<details>
<summary><strong>Component Gallery</strong></summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228063876-5b6d00fe-f0ba-453f-a7ce-c44ba7444417.png" alt="Components" width="100%"/></p>
</details>

<details>
<summary><strong>Dark Mode Support</strong></summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228063883-569ca6f1-6959-45bc-9882-2c447162a00f.png" alt="Dark mode 1" width="100%"/></p>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066720-e0bb96ac-3c00-4aa6-80b9-e0b4d0c5f947.png" alt="Dark mode 2" width="100%"/></p>
</details>

---

## 🌐 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | ✅ Latest |
| Firefox | ✅ Latest |
| Safari | ✅ 14+ |
| Edge | ✅ Latest |
| Mobile | ✅ iOS 14+, Android Chrome |

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

**Ways to contribute:**
- 🐛 Report bugs via [GitHub Issues](https://github.com/files-ui/files-ui-react/issues)
- ✨ Suggest features
- 📝 Improve documentation
- 🔧 Submit pull requests

---

## 💬 Community & Support

- 💡 **[GitHub Discussions](https://github.com/files-ui/files-ui-react/discussions)** — Ask questions
- 📧 **[Email Support](mailto:support@files-ui.com)** — Get help
- 🐛 **[Issue Tracker](https://github.com/files-ui/files-ui-react/issues)** — Report bugs

---

## ⭐ Show Your Support

If **Files UI** helped your project:

1. ⭐ **[Star us on GitHub](https://github.com/files-ui/files-ui-react)**
2. 🐦 **Share on social media**
3. 💬 **Tell your developer friends**
4. 📝 **Write about it on your blog**

It really helps us grow! 🙏

---

## 📄 License

MIT License — See [LICENSE](./LICENSE) for details.

**© 2024 Files UI Contributors**

---

## 🙏 Acknowledgments

### ⭐ Stargazers

[![Stargazers](https://bytecrank.com/nastyox/reporoster/php/stargazersSVG.php?user=files-ui&repo=files-ui-react)](https://github.com/files-ui/files-ui-react/stargazers)

### 🔀 Forkers

[![Forkers](https://bytecrank.com/nastyox/reporoster/php/forkersSVG.php?user=files-ui&repo=files-ui-react)](https://github.com/files-ui/files-ui-react/network/members)

---

<p align="center">
  <strong>Made with ❤️ by the Files UI Team</strong>
  <br/>
  <sub><a href="https://www.files-ui.com">www.files-ui.com</a></sub>
</p>

<p align="center">
  <a href="#">
    <img src="http://randojs.com/images/barsSmallTransparentBackground.gif" alt="Animated footer" width="100%"/>
  </a>
</p>

<br/>
<p align="center">
  <a href="#">
    <img src="http://randojs.com/images/backToTopButtonTransparentBackground.png" alt="Back to top" height="28px"/>
  </a>
</p>
