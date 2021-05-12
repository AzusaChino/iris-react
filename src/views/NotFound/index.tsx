import React from "react";
import { Result, Button } from "antd";
import { Link } from "react-router-dom";

const NotFound: React.FC = (): JSX.Element => (
  <Result
    status="warning"
    title="There are some problems with your operation."
    extra={
      <Link to="/">
        <Button type="primary" key="console">
          Go Console
        </Button>
      </Link>
    }
  />
);

export default NotFound;
