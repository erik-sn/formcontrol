import { ChangeEvent, InputState } from "../../../src/utils/interfaces.tsx";
import * as React from "react";

interface Props {
  label?: string;
  description?: string;
}


export default class Input extends React.Component<Props, InputState> {

  /**
   * Creates an instance of Input.
   * 
   * @param {Props} props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      type: "input",
      description: props.description || "",
      label: props.label || "",
    };
    this.updateLabel = this.updateLabel.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
  }

  /**
   * Update the label of the Input component
   * 
   * @param {ChangeEvent} e
   */
  public updateLabel(e: ChangeEvent): void {
    this.setState({ label: e.target.value });
  }

  /**
   * Update the description of the Input component
   * 
   * @param {ChangeEvent} e
   */
  public updateDescription(e: ChangeEvent): void {
    this.setState({ description: e.target.value });
  }

  public render() {
    const { label, description } = this.state;
    return (
     <div className="formpanel-input-container">
        <div className="input-label-container">
          <input
            type="text"
            value={label}
            onChange={this.updateLabel}
            placeholder="Enter Label..."
          />
        </div>
        <div className="input-container">
          <input type="text" value="" placeholder={`Value for ${label ? label : "..."}`} disabled />
        </div>
        <div className="input-description-container">
          <input
            type="text"
            value={description}
            onChange={this.updateDescription}
            placeholder="Enter Description..."
          />
        </div>
      </div>
    );
  }

}
