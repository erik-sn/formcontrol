import { Panel, ReducerAction } from "../../../src/utils/interfaces";
import * as React from "react";

import Icon from "../utility/icon";

export interface Props {
  panel: Panel;
  close: (id: string) => void;
  label: string;
}

interface State {
}

export default class Button extends React.Component<Props, State> {

  /**
   * Creates an instance of Input.
   * 
   * @param {Props} props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
    };
    this.closePanel = this.closePanel.bind(this);
  }

  public closePanel() {
    const { close, panel } = this.props;
    close(panel.id);
  }

  public render() {
    const { panel, label} = this.props;
    return (
      <div className="formpanel-button-container">
        <Icon onClick={this.closePanel} id={panel.id} size={20} icon="cancel" />
        <button className="formpanel-button" type="clear" >{label}</button>
      </div>
    );
  }

}
