
import {RadioButton, RadioButtonGroup} from "material-ui/RadioButton";
import { isEqual } from "lodash";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

import { Panel, ReducerAction } from "../../../src/utils/interfaces";
import Icon from "../utility/icon";

export interface Props {
  panel: Panel;
  disabled: boolean;
  onChange: (e: React.MouseEvent, value: string) => void;
  value: string;
}

interface State {
}

export default class Radio extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    return !isEqual(this.props.panel.config.options, nextProps.panel.config.options);
  }

  public render() {
    const { panel, disabled, onChange, value } = this.props;
    const radioButtons = panel.config.options.map((option: string, i: number) => (
      <RadioButton key={i} value={option} label={option} disabled={disabled} />
    ));
    return (
      <div className="formpanel-button-container">
        <MuiThemeProvider>
          <RadioButtonGroup
            name="buttongroup"
            defaultSelected=""
            valueSelected={value}
            onChange={onChange}
          >
            {radioButtons}
          </RadioButtonGroup>
        </MuiThemeProvider>
      </div>
    );
  }

}
