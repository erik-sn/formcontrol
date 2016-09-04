if (process.env.BROWSER) {
  require("../sass/design.scss");
}

import Input from "./inputs/input.tsx";
import * as React from "react";

export interface IFormPanelProps {
  type: string;
  label: string;
}

export interface IFormPanelState {
  label?: string;
  description?: string;
}

export default class FormPanel extends React.Component<IFormPanelProps, {}> {

  public getType(type: string, label: string): JSX.Element {
    switch (type) {
      case "input":
        return <Input description="" label={label} />;
      case "select":
        return <select disabled />;
      default:
        return <div />;
    }
  }

  public render() {
    const { type, label } = this.props;
    return (
      <div>
        {this.getType(type, label)}
      </div>
    );
  }

}
