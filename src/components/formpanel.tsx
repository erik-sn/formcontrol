if (process.env.BROWSER) {
  require("../sass/formpanel.scss");
}

import * as React from "react";

export interface IFormPanelProps {
  label: string;
  type: string;
  description: string;
  className?: string;
 }

export default class FormPanel extends React.Component<IFormPanelProps, {}> {

  public getType(type: string, label: string): JSX.Element {
    switch (type) {
      case "input":
        return <input type="text" value="" placeholder={`Value for ${label}`} disabled />;
      case "select":
        return <select disabled />;
      default:
        return <div />;
    }
  }

  public render() {
    const { label, type, description } = this.props;
    return (
      <div className="formpanel-container">
          <div className="formpanel-label-container">{label}</div>
          <div className="formpanel-input-container">
            {this.getType(type, label)}
          </div>
          <div className="formpanel-description-container">{description}</div>
      </div>
    );
  }

}
