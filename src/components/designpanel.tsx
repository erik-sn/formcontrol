import * as React from "react";
import DesignPanelItem from "./designpanel_item.tsx";
import { connect } from "react-redux";
import { Panel, ReducerAction, ReduxState } from "../utils/interfaces.tsx";
import { generateId } from "../utils/functions.tsx";
import { addPanel } from "../actions/actions.tsx";

interface Props { addPanel: (panel: Panel) => ReducerAction }

export class DesignPanel extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
    this.createPanel = this.createPanel.bind(this);
  }

  public createPanel(type: string): void {
    const panel: Panel = {
      id: generateId(),
      type: type.toLowerCase(),
    }
    this.props.addPanel(panel);
  }

  public generateElements(): Array<JSX.Element> {
    const elements = ["Input", "Select", "Radio", "Checkbox", "Submit Button", "Cancel Button"]
    return elements.map((element, index) => (
      <DesignPanelItem element={element} onClick={this.createPanel} key={index} />
    ));

  }

  public render() {
    return (
      <div className="design-panel-container">
        <h3>Configure a Component</h3>
        {this.generateElements()}
      </div>
    );
  }

}


const mapStateToProps = (state: ReduxState) => ({ 
});


export default connect(mapStateToProps, { addPanel })(DesignPanel);