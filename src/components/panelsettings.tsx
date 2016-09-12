import * as React from "react";

import { Panel, PanelConfig, PanelValidation } from "../../src/utils/interfaces.tsx";

export interface Props {
  panel: Panel;
  x: number;
  y: number;
}

interface State {
  panel: Panel;
}

export default class PanelSettings extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      panel: props.panel,
    };
    this.updatePanel = this.updatePanel.bind(this);
  }

  public updatePanel(event: React.FormEvent) {
    const { name, value } = event.target as HTMLSelectElement;
    const panel: any = this.state.panel;
    const validationNames = ["regex", "type", "length", "email", "date"];
    if (validationNames.indexOf(name) !== -1) {
      panel.validation[name] = value;
    } else {
      panel.config[name] = value;
    }
    this.setState({ panel });
  }

  public  render() {
    const { config, validation } = this.state.panel;
    const { x, y } = this.props;
    return (
      <div className="panel-settings-container" style={{ left: x - 5, top: y + 5 }} >
        <h3>Validation</h3>
        <input id="panel-settings-regex" name="regex" type="text" value={validation.regex} onChange={this.updatePanel} />
        <input id="panel-settings-type" name="type" type="text" value={validation.type} onChange={this.updatePanel} />
        <input id="panel-settings-length" name="length" type="text" value={validation.length} onChange={this.updatePanel} />
        <input id="panel-settings-email" name="email" type="checkbox" checked={validation.email} onChange={this.updatePanel} />
        <input id="panel-settings-date" name="date" type="checkbox" checked={validation.date} onChange={this.updatePanel} />
        <input id="panel-settings-options" name="options" type="text" value={config.options} onChange={this.updatePanel} />
        <input id="panel-settings-checked" name="checked" type="checkbox" checked={config.checked} onChange={this.updatePanel} />
        <input id="panel-settings-mandatory" name="mandatory" type="checkbox" checked={config.mandatory} onChange={this.updatePanel} />
      </div>
    );
  }
}
