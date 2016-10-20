import * as React from "react";

import { TextField } from "material-ui";

export interface Props {
  username: string;
  password: string;
  handleChange: (change: React.FormEvent<{}>) => void;
};

const Basic = (props: Props): JSX.Element => {

  return (
    <div className="login__basic-auth-container">
      <div className="login__username-container">
        <TextField
          name="username"
          hintText="username or email address..."
          value={props.username}
          onChange={props.handleChange}
        />
      </div>
      <div className="login__password-container">
        <TextField
          name="password"
          type="password"
          hintText="password..."
          value={props.password}
          onChange={props.handleChange}
        />
      </div>
    </div>
  );
};

export default Basic;
