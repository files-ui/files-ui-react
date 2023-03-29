<a href="https://www.files-ui.com">
<p align="center">
<img src="https://user-images.githubusercontent.com/43678736/226257748-6ba2f8cf-59c5-40d1-a545-a388ddab0f68.png" width="150" height="150" alt="fui-logo"/>
</p>
</a>

<h1 align="center">Files ui</h1>

UI components for file uploads with [React js](https://react.dev/).
**Files UI** is a complete library for handling files in the UI. You can validate and upload them.

<div align="center">

[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/files-ui/react/blob/HEAD/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@files-ui/react.svg?logo=npm&logoColor=fff&label=NPM+package&color=limegreen)](https://www.npmjs.com/package/@files-ui/react) [![Rate on Openbase](https://badges.openbase.com/js/rating/@files-ui/react.svg)](https://openbase.com/js/@files-ui/react?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge) [![kandi X-Ray](https://kandi.openweaver.com/badges/xray.svg)](https://kandi.openweaver.com/typescript/files-ui/files-ui-react) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![GitHub Repo stars](https://img.shields.io/github/stars/files-ui/react?label=Star%20me%20please%20:D&style=social)](https://github.com/files-ui/react)

</div>

<p align="center">
<a href="https://www.files-ui.com">
<img src="https://user-images.githubusercontent.com/43678736/228052494-99d970c0-1eb7-42c6-b22c-8c2295b8dc4a.gif"  width="80%" alt="fui-logo"/>
</a>
</p>

- More previews [here](#more-previews).

## Installation

@files-ui/react is available as an [npm package](https://www.npmjs.com/package/@files-ui/react).

```sh
// with npm
npm i @files-ui/react
```

```sh
// with yarn
yarn add @files-ui/react
```

## Usage and examples

Here is a quick example to get you started, **it's all you need**:

```jsx
import * as React from "react";
import ReactDOM from "react-dom";
import { Dropzone, FileMosaic } from "@files-ui/react";
Function App() {
  const [files, setFiles] = React.useState([]);
  const updateFiles = (incommingFiles) => {
    setFiles(incommingFiles);
  };
  return (
    <Dropzone onChange={updateFiles} value={files}>
      {files.map((file) => (
        <FileMosaic {...file} preview />
      ))}
    </Dropzone>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

Yes, it's really all you need to get started as you can see in these live and interactive demos:

- [Basic sample](https://www.files-ui.com/usage#quick-start) :cake:
- [Advanced sample](https://www.files-ui.com/usage#advanced-example) :hammer:

## More Previews

<details>
  <summary>Image full screen preview 🖼️ </summary>
  <p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066199-fb7a5bd3-9c7e-4f72-b0ef-7f11d236d38e.png" alt="Image full screen preview" width="100%"/></p>

</details>
<details>
 <summary>Video full screen preview 🎞️ </summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066195-62063300-21e0-48fd-80d8-31b566562fde.png" alt="Video full screen preview" width="100%"/></p>
</details>

<details>
 <summary>FileCard, FileInputButton and Avatar preview 🎴 </summary>
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228063876-5b6d00fe-f0ba-453f-a7ce-c44ba7444417.png" alt="Video full screen preview" width="100%"/></p>

</details>

<details>
 <summary>DarkMode 🌙 🌞 </summary> 
<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228063883-569ca6f1-6959-45bc-9882-2c447162a00f.png" alt="darkmode 1 preview" width="100%"/></p>

<p align="center"><img src="https://user-images.githubusercontent.com/43678736/228066720-e0bb96ac-3c00-4aa6-80b9-e0b4d0c5f947.png" alt="darkmode 2 preview" width="100%"/></p>
</details>

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).

<p align="center">
<a href="#">
<img src="http://randojs.com/images/barsSmallTransparentBackground.gif" alt="Animated footer bars" width="100%"/>
</a>
</p>

<br/>
<p align="center">
<a href="#">
<img src="http://randojs.com/images/backToTopButtonTransparentBackground.png" alt="Back to top" height="28"/>
</a>
</p>
