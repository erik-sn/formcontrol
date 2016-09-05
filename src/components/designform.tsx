if (process.env.BROWSER) {
  require("../sass/design.scss");
}
const Responsive = require("react-grid-layout").Responsive; // typescript definitions not available
const WidthProvider = require("react-grid-layout").WidthProvider;
const ResponsiveReactGridLayout = WidthProvider(Responsive);
import * as React from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

import Input from "./inputs/input.tsx";
import GridWrapper from "./utility/gridwrapper.tsx";
import { Panel, ReduxState, DesignReducer, Layout, ReducerAction } from "../utils/interfaces.tsx";
import { updatePanels, removePanel } from "../actions/actions.tsx";

interface Props { 
  design: DesignReducer;
  panels: Array<Panel>;
  updatePanels: (panels: Array<Panel>) => ReducerAction;
  removePanel: (id: string) => ReducerAction;
}

interface State {  }

export class DesignForm extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
    this.updateLayouts = this.updateLayouts.bind(this);
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    return true; 
  }

  public getType(type: string, label: string): JSX.Element {
    switch (type) {
      case "input":
        return <Input description="" label={label} />;
      case "select":
        return <select disabled />;
      default:
        return undefined;
    }
  }

  public processPanels(panels: Array<Panel>) {
    return panels.map((panel, index) => {
      const child = this.getType(panel.type, panel.id)
      if (!child) return undefined;
      return (
        <GridWrapper
          close={() => this.props.removePanel(panel.id)}
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
  }

  public render() {
    const { panels } = this.props;
    console.log(panels);
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

export default connect(mapStateToProps, { updatePanels, removePanel })(DesignForm);