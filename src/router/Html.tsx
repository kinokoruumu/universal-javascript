import * as React from "react";

interface ChunkManifest {
  [key: string]: string;
}
const getChunkPath = (): ChunkManifest => {
  return require("../chunk-manifest.json");
};
const manifest = getChunkPath();

const Html: React.FunctionComponent = ({ children }) => {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app">{children}</div>
        <script defer={true} src={manifest.vendor} />
        <script defer={true} src={manifest.main} />
      </body>
    </html>
  );
};

export default Html;
