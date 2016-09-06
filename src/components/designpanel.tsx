import * as React from "react";
import { connect } from "react-redux";

import { addPanel, clearPanels, hideModal, showModal } from "../actions/actions.tsx";
import { generateId } from "../utils/functions.tsx";
import { Panel, ReducerAction, ReduxState } from "../utils/interfaces.tsx";
import DesignPanelItem from "./designpanel_item.tsx";
import Modal from "./utility/modal.tsx";

interface Props {
  panels: Array<Panel>;
  addPanel: (panel: Panel) => ReducerAction;
  clearPanels: () => ReducerAction;
  showModal: (modal: JSX.Element) => ReducerAction;
  hideModal: () => ReducerAction;
}


export class DesignPanel extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.createPanel = this.createPanel.bind(this);
    this.clearAllPanels = this.clearAllPanels.bind(this);
  }

  public clearAllPanels(): void {
    const { showModal, hideModal, clearPanels, panels } = this.props;
    if (panels.length === 0) {
      return;
    }
    console.log(panels);
    const message = "Are you sure you want to delete all panels in this design?";
    const response: (response: boolean) => void = (input) => {
      if (input) {
        clearPanels();
      }
      hideModal();
    };
    showModal(<Modal message={message} response={response} />);
  }

  public createPanel(type: string): void {
    const panel: Panel = {
      id: generateId(),
      type: type.toLowerCase(),
      layout: {x: 0, y: 0, w: 1, h: 3, minH: 3 },
      config: {
        label: "",
        description: "",
        options: [],
        checked: false,
      },
    };
    this.props.addPanel(panel);
  }

  public generateElements(): Array<JSX.Element> {
    const elements = ["Input", "Select", "Radio", "Checkbox", "Submit Button", "Cancel Button"];
    return elements.map((element, index) => (
      <DesignPanelItem element={element} onClick={this.createPanel} key={index} />
    ));

  }

  public render() {
    return (
      <div className="design-panel-container">
        <h2>Form Configuration</h2>
        {this.generateElements()}
        <div onClick={this.clearAllPanels} id="design-panel-clear" className="panel-item">Clear Panels</div>
      </div>
    );
  }

}


const mapStateToProps = (state: ReduxState) => ({
  panels: state.design.panels,
});


export default connect(mapStateToProps, { addPanel, clearPanels, showModal, hideModal })(DesignPanel);
