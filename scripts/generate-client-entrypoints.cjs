const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const buildClientDir = path.join(root, "build", "client");

const entries = [
  {
    name: "dropzone",
    esmTarget: "../Dropzone/components/dropzone/DropzoneClient.es.js",
    cjsTarget: "../Dropzone/components/dropzone/DropzoneClient.js",
  },
  {
    name: "file-input-button",
    esmTarget: "../FileInputButton/FileInputButtonClient.es.js",
    cjsTarget: "../FileInputButton/FileInputButtonClient.js",
  },
  {
    name: "file-card",
    esmTarget: "../FileCard/FileCardClient.es.js",
    cjsTarget: "../FileCard/FileCardClient.js",
  },
  {
    name: "file-mosaic",
    esmTarget: "../FileMosaic/components/file-mosaic/FileMosaicClient.es.js",
    cjsTarget: "../FileMosaic/components/file-mosaic/FileMosaicClient.js",
  },
  {
    name: "avatar",
    esmTarget: "../Avatar/AvatarClient.es.js",
    cjsTarget: "../Avatar/AvatarClient.js",
  },
  {
    name: "full-screen",
    esmTarget: "../FullScreen/FullScreenClient.es.js",
    cjsTarget: "../FullScreen/FullScreenClient.js",
  },
];

fs.mkdirSync(buildClientDir, { recursive: true });

for (const entry of entries) {
  const esmContent = `"use client";\n\nexport { default } from "${entry.esmTarget}";\nexport * from "${entry.esmTarget}";\n`;
  const cjsContent = `"use client";\n\nmodule.exports = require("${entry.cjsTarget}");\n`;

  fs.writeFileSync(path.join(buildClientDir, `${entry.name}.es.js`), esmContent, "utf8");
  fs.writeFileSync(path.join(buildClientDir, `${entry.name}.js`), cjsContent, "utf8");
}

console.log("Generated Next.js client entrypoints in build/client/");
