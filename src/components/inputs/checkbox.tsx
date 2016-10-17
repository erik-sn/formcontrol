import Checkbox from "material-ui/Checkbox";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

import { Panel } from "../../../src/utils/interfaces";

export interface Props {
  panel: Panel;
  disabled: boolean;
  className?: string;
  checked: boolean;
  onChange: (e: React.MouseEvent<{}>, checked: boolean) => void;
}

export interface State {
}

export default class Check extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public render() {
    const { panel, disabled, checked, onChange, className } = this.props;
    return (
      <div className={`checkbox-input ${className ? className : ""}`} >
        <MuiThemeProvider>
          <Checkbox
            label={disabled ? "" : panel.config.label}
            checked={checked}
            onCheck={onChange}
            disabled={false}
          />
        </MuiThemeProvider>
      </div>
    );
  }

}
