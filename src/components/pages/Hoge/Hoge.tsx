import * as React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Hoge: React.FunctionComponent<Props> = () => {
  return (
    <div>
      <h1>Hoge Page</h1>
      <Link to={"/"}>/top</Link>
    </div>
  );
};

export { Hoge };
