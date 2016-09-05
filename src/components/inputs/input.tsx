import { ChangeEvent } from "../../../src/utils/interfaces.tsx";
import * as React from "react";

export interface IInputProps {
  label?: string;
  description?: string;
}

export interface IInputState {
  label?: string;
  description?: string;
}

export default class Input extends React.Component<IInputProps, IInputState> {

  constructor(props: IInputProps) {
    super(props);
    this.state = {
      description: props.description || "",
      label: props.label || "",
    };
    this.updateLabel = this.updateLabel.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  public updateLabel(e: ChangeEvent): void {
    this.setState({ label: e.target.value });
  }

  public updateDescription(e: ChangeEvent): void {
    this.setState({ description: e.target.value });
  }

  public render() {
    const { label, description } = this.state;
    return (
     <div className="formpanel-container">
        <div className="formpanel-input-label">
          <input
            type="text"
            className="formpanel-input"
            value={label}
            onChange={this.updateLabel}
            placeholder="Enter Label..."
          />
        </div>
        <div className="formpanel-input-container">
          <input type="text" value="" placeholder={`Value for ${label ? label : "..."}`} disabled />
        </div>
        <div className="formpanel-input-description">
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
