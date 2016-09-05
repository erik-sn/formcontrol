import * as React from "react";
import DesignPanelItem from "./designpanel_item.tsx";
import { connect } from "react-redux";
import { Panel, ReducerAction, ReduxState } from "../utils/interfaces.tsx";
import { generateId } from "../utils/functions.tsx";
import { addPanel, clearPanels } from "../actions/actions.tsx";

interface Props { 
  addPanel: (panel: Panel) => ReducerAction;
  clearPanels: () => ReducerAction;
}


export class DesignPanel extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props)
    this.createPanel = this.createPanel.bind(this);
  }

  public createPanel(type: string): void {
    const panel: Panel = {
      id: generateId(),
      type: type.toLowerCase(),
      layout: {x: 0, y: 0, w: 1, h: 3 }, 
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
    const { clearPanels } = this.props;
    return (
      <div className="design-panel-container">
        <h2>Form Configuration</h2>
        {this.generateElements()}
        <div onClick={() => clearPanels()} id="design-panel-clear" className="panel-item">Clear Panels</div>
      </div>
    );
  }

}


const mapStateToProps = (state: ReduxState) => ({ 
});


export default connect(mapStateToProps, { addPanel, clearPanels })(DesignPanel);