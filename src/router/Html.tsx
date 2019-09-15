import * as React from "react";

const Html: React.FunctionComponent = ({ children }) => {
  return (
    <html>
      <head>
        <title>App</title>
      </head>
      <body>
        <div id="app">{children}</div>
        <script src="/assets/bundle.js"></script>
      </body>
    </html>
  );
};

export default Html;
