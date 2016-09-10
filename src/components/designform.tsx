if (process.env.BROWSER) {
  require("../sass/design.scss");
}

const Responsive = require("react-grid-layout").Responsive; // typescript definitions not available
const WidthProvider = require("react-grid-layout").WidthProvider;
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import * as _ from "lodash";
import * as React from "react";
import { connect } from "react-redux";

import {  hideModal, removePanel, showModal, updatePanel, updatePanels  } from "../actions/actions.tsx";
import { DesignReducer, Layout, Panel, ReducerAction, ReduxState } from "../utils/interfaces.tsx";
import Input from "./inputs/input.tsx";
import GridWrapper from "./utility/gridwrapper.tsx";
import Modal from "./utility/modal.tsx";

export interface Props {
  design: DesignReducer;
  panels: Array<Panel>;
  updatePanel: (panel: Panel) => ReducerAction;
  updatePanels: (panels: Array<Panel>) => ReducerAction;
  removePanel: (id: string) => ReducerAction;
  showModal: (modal: JSX.Element) => ReducerAction;
  hideModal: () => ReducerAction;
}

export interface State {
}

export class DesignForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {};
    this.updateLayouts = this.updateLayouts.bind(this);
    this.closePanel = this.closePanel.bind(this);
  }

  /**
   * Return a JSX component with a label based on the type parameter
   * 
   * @param {string} type - type of the component
   * @param {string} label - label that should be applied to the generated component
   * @returns {JSX.Element}
   */
  public getType(panel: Panel): JSX.Element {
    switch (panel.type) {
      case "input":
        return (
          <Input
            panel={panel}
            close={this.closePanel}
            settings={this.showSettings}
            update={this.props.updatePanel}
          />
        );
      case "select":
        return <select disabled />;
      default:
        return undefined;
    }
  }

  /**
   * Called when a user clicks the close button on a panel. Opens a modal
   * with a dialogue and asks for their confirmation. If the user confirms
   * the redux action removePanel is called with the specified parameter id.
   * 
   * If the user denies then nothing happens. After any user input showModal is
   * set to false and the modal should close.
   * 
   * @param {string} id
   */
  public closePanel(id: string): void {
    // generate a message string and response function for a modal
    const message: string = "Are you sure you want to close this panel?";
    const response: (response: boolean) => void = (input) => {
      if (input) {
        this.props.removePanel(id);
      }
      this.props.hideModal();
    };
    this.props.showModal(<Modal message={message} response={response} />);
  }

  public showSettings(id: string): void {
    console.log(id);
  }

  /**
   * Map over panel objects and return JSX components. These components
   * are of types:
   * - Input
   * - Select/Combobox
   * - Radio
   * - Checkbox
   * - Buttons
   * 
   * It is necessary to wrap the child components in a GridWrapper. Due to the way 
   * the react-grid-layoutlibrary works custom children do not have all of the library 
   * props passed to them, so the GridWrapper acts
   * as a container for them.
   * 
   * See: https://github.com/STRML/react-grid-layout/issues/14
   * 
   * @param {Array<Panel>} panels
   * @returns {Array<JSX.Element>}
   */
  public processPanels(panels: Array<Panel>): Array<JSX.Element> {
    return panels.map((panel, index) => {
      const child = this.getType(panel);
      if (!child) {
        return undefined;
      }
      return (
        <GridWrapper
          key={`${panel.id}`}
          data-grid={panel.layout}
        >
          {child}
        </GridWrapper>
      );
    })
    .filter(panel => panel !== undefined);
  }

  public updateLayouts(layouts: any) {
    const { panels, updatePanels } = this.props;
    const combined: Array<Panel> = panels.map(panel => {
      panel.layout = _.find(layouts, (layout: Layout) => layout.i === panel.id);
      return panel;
    });
    updatePanels(combined);
    console.log(combined);
  }

  public render() {
    const { panels } = this.props;
    return (
      <div className="design-form-container">
        <ResponsiveReactGridLayout
          onLayoutChange={this.updateLayouts}
          className="layout"
          rowHeight={30}
          width={1200}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        >
          {this.processPanels(panels)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({
  panels: state.design.panels,
});

export default connect(mapStateToProps, { updatePanel, updatePanels, removePanel,
   showModal, hideModal })(DesignForm);
