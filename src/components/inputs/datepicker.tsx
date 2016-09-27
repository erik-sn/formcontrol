
import * as _ from "lodash";
import DatePicker from "material-ui/DatePicker";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import * as React from "react";

import { Panel, ReducerAction } from "../../../src/utils/interfaces";
import Icon from "../utility/icon";

export interface Props {
  panel: Panel;
  disabled: boolean;
  className?: string;
}

interface State {
}

export default class Date extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    return !_.isEqual(this.props.panel.config, nextProps.panel.config);
  }

  public render() {
    const { panel, disabled, className } = this.props;
    return (
      <div className={`checkbox-input ${className ? className : ""}`} >
        <MuiThemeProvider>
          <DatePicker hintText={disabled ? "" : panel.config.label} />
        </MuiThemeProvider>
      </div>
    );
  }

}
