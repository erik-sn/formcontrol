if (process.env.BROWSER) {
  require("../sass/design.scss");
}
const Responsive = require("react-grid-layout").Responsive; // typescript definitions not available
const WidthProvider = require("react-grid-layout").WidthProvider;
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import * as React from "react";
import { connect } from "react-redux";
import { Panel, ReduxState, DesignReducer } from "../utils/interfaces.tsx";
import Input from "./inputs/input.tsx";
import GridWrapper from "./utility/gridwrapper.tsx";


interface Props { design: DesignReducer, panels: Array<Panel>; }

export class DesignForm extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  public getType(type: string, label: string): JSX.Element {
    switch (type) {
      case "input":
        return <Input description="" label={label} />;
      case "select":
        return <select disabled />;
      default:
        return <div />;
    }
  }

  public processPanels(panels: Array<Panel>) {
    return panels.map(panel => (
      <GridWrapper key="test1" data-grid={{x: 0, y: 0, w: 1, h: 3}}>
        {this.getType("input", "label1")}
      </GridWrapper>
    ));
  }

  public render() {
    const { design } = this.props;
    return (
      <div className="design-form-container">
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight={30}
          width={1200}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        >
          {this.processPanels(design.panels)}
        </ResponsiveReactGridLayout>
      </div>
    );
  }
}

const mapStateToProps = (state: ReduxState) => ({ 
  design: state.design
});

export default connect(mapStateToProps)(DesignForm);