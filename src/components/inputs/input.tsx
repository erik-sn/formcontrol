import { ChangeEvent, Panel, ReducerAction } from "../../../src/utils/interfaces.tsx";
import * as React from "react";

import Icon from "../utility/icon.tsx";

export interface Props {
  panel: Panel;
  update: (panel: Panel) => ReducerAction;
  close: (id: string) => void;
  settings: (id: string) => void;
}

interface State {
  panel: Panel;
}

export default class Input extends React.Component<Props, State> {

  /**
   * Creates an instance of Input.
   * 
   * @param {Props} props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      panel: props.panel,
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
    const panel = this.state.panel;
    panel.config.label = e.target.value;
    this.setState({ panel });
    this.props.update(panel);
  }

  /**
   * Update the description of the Input component
   * 
   * @param {ChangeEvent} e
   */
  public updateDescription(e: ChangeEvent): void {
    const panel = this.state.panel;
    panel.config.description = e.target.value;
    this.setState({ panel });
    this.props.update(panel);
  }

  public render() {
    const { label, description } = this.state.panel.config;
    return (
     <div className="formpanel-input-container">
        <Icon onClick={this.props.close} id={this.props.panel.id} size={20} icon="cancel" />
        <Icon onClick={this.props.settings} id={this.props.panel.id} size={20} icon="settings" />
        <div className="input-label-container">
          <input
            type="text"
            value={label}
            onChange={this.updateLabel}
            placeholder="Label..."
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
            placeholder="Description..."
          />
        </div>
      </div>
    );
  }

}
