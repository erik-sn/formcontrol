if (process.env.BROWSER) {
  require("../sass/formpanel.scss");
}

import * as React from "react";

export interface IFormPanelProps {
  type: string;
  label?: string;
  description?: string;
  className?: string;
 }

export interface IFormPanelState {
  label?: string;
  description?: string;
 }

 export interface IChangeEvent {
  target: { value: string};
 }

export default class FormPanel extends React.Component<IFormPanelProps, IFormPanelState> {

  constructor(props: IFormPanelProps) {
    super(props);
    this.state = {
      label: props.label || "",
      description: props.description || "",
    }
    this.updateLabel = this.updateLabel.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  public getType(type: string, label: string): JSX.Element {
    switch (type) {
      case "input":
        return <input type="text" value="" placeholder={`Value for ${label ? label : "..."}`} disabled />;
      case "select":
        return <select disabled />;
      default:
        return <div />;
    }
  }

  public updateLabel(e: IChangeEvent): void {
    this.setState({ label: e.target.value });
  }

  public updateDescription(e: IChangeEvent): void {
    this.setState({ description: e.target.value });
  }

  public render() {
    const { type } = this.props;
    const { label, description } = this.state;
    return (
      <div className="formpanel-container">
          <div className="formpanel-label-container">
            <input
              type="text"
              className="formpanel-input"
              value={label}
              onChange={this.updateLabel}
              placeholder="Enter Label..."
            />
          </div>
          <div className="formpanel-input-container">
            {this.getType(type, label)}
          </div>
          <div className="formpanel-description-container">
            <input
              type="text"
              className="formpanel-input"
              value={description}
              onChange={this.updateDescription}
              placeholder="Enter Description..."
            />
          </div>
      </div>
    );
  }

}
