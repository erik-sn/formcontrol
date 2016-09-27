import * as React from "react";
import { connect } from "react-redux";
const uuid = require("node-uuid");

import { addPanel, clearPanels, hideModal, savePanels, showModal, showPreview } from "../actions/actions";
import { Panel, ReducerAction, ReduxState } from "../utils/interfaces";
import DesignPanelItem from "./designpanel_item";
import Modal from "./utility/modal";

export interface Props {
  panels: Array<Panel>;
  addPanel: (panel: Panel) => ReducerAction;
  clearPanels: () => ReducerAction;
  savePanels: (panels: Array<Panel>) => ReducerAction;
  showModal: (modal: JSX.Element) => ReducerAction;
  hideModal: () => ReducerAction;
  showPreview: (show: boolean) => ReducerAction;
}

export interface State {
  showPreviewButton?: boolean;
  errors?: IErrors;
}

export class DesignPanel extends React.Component<Props, State> {

  private defaultErrors: IErrors = {
    clearPanel: "",
    showPreview: "",
    savePanel: "",
    addPanel: "",
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      showPreviewButton: false,
      errors: this.defaultErrors,
    };
    this.createPanel = this.createPanel.bind(this);
    this.togglePreview = this.togglePreview.bind(this);
    this.clearAllPanels = this.clearAllPanels.bind(this);
    this.saveAllPanels = this.saveAllPanels.bind(this);
  }

  public componentWillReceiveProps(nextProps: Props) {
    this.setState({ errors: this.defaultErrors });
  }
  

  public togglePreview(): void {
    const { showPreviewButton, errors } = this.state;
    this.setState({ errors, showPreviewButton: !showPreviewButton });
    this.props.showPreview(!showPreviewButton);
  }

  public clearAllPanels(): void {
    const { showModal, hideModal, clearPanels, panels } = this.props;
    // don't allow creating new panels when in preview mode
    if (this.state.showPreviewButton) {
      const errors: IErrors = _.cloneDeep(this.defaultErrors);
      errors.clearPanel = "Cannot clear panels while in prieview mode";
      this.setState({ errors });
      return;
    } else if (panels.length === 0) {
      return;
    }
    const message = "Are you sure you want to delete all panels in this design?";
    const response: (response: boolean) => void = (input) => {
      if (input) {
        clearPanels();
      }
      hideModal();
    };
    showModal(<Modal message={message} response={response} />);
  }

  public saveAllPanels(): void {
    const { panels, savePanels } = this.props;
    savePanels(panels);
  }
  

  public getMinHeight(type: string): number {
    switch (type) {
      case "submit button":
      case "cancel button":
      case "checkbox":
      case "date picker":
        return 1;
      default:
        return 2;
    }
  }

  public createPanel(type: string): void {
    // don't allow creating new panels when in preview mode
    if (this.state.showPreviewButton) {
      return;
    }

    const minHeight = this.getMinHeight(type.toLocaleLowerCase());
    const panel: Panel = {
      id: uuid.v4(),
      type: type.toLowerCase(),
      layout: {x: 0, y: 0, w: 3, h: minHeight, minH: minHeight },
      config: {
        label: "",
        description: "",
        options: [],
        checked: false,
        mandatory: true,
      },
      validation: {
        regex: "",  // let user specify regex
        email: false,  // default empty, user specifiys a '@host.com'
        date: false,
        type: "any",  // default: any string, number, both
        length: "",
      },
    };
    this.props.addPanel(panel);
  }

  public generateElements(): Array<JSX.Element> {
    const elements = ["Input", "Select", "Radio", "Checkbox", "Date Picker", "Submit Button", "Cancel Button"];
    return elements.map((element, index) => (
      <DesignPanelItem element={element} onClick={this.createPanel} key={index} />
    ));

  }

  public render() {
    const { showPreviewButton, errors } = this.state;
    return (
      <div className="design-panel-container">
        <h2>Form Configuration</h2>
        {this.generateElements()}
        <div
          className="panel-item panel-menu-button"
          onClick={this.togglePreview}
          id="design-panel-preview"
        >
        {showPreviewButton ? "Hide " : "Show " }Preview
        </div>
        <div
          className="panel-item panel-menu-button"
          onClick={this.clearAllPanels}
          id="design-panel-clear"
        >
        <div>Clear Panels</div>
        {errors.clearPanel ? <span className="small-error">{errors.clearPanel}</span> : undefined}
        </div>
        <div
          className="panel-item panel-menu-button"
          onClick={this.saveAllPanels}
          id="design-panel-save"
        >
        Save Panels
        </div>
      </div>
    );
  }

}


const mapStateToProps = (state: ReduxState) => ({
  panels: state.design.panels,
});


export default connect(mapStateToProps,
{ showPreview, addPanel, clearPanels, savePanels, showModal, hideModal })(DesignPanel);


interface IErrors {
  clearPanel: string;
  showPreview: string;
  savePanel: string;
  addPanel: string;
};
