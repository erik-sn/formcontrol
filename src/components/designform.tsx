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
        return undefined;
    }
  }

  public processPanels(panels: Array<Panel>) {
    return panels.map((panel, index) => {
      const child = this.getType(panel.type, panel.id)
      if (!child) return undefined;
      return (
        <GridWrapper key={`${index}`} data-grid={{x: 0, y: 0, w: 1, h: 3}}>
          {child}
        </GridWrapper>
      );
    })
    .filter(panel => panel !== undefined);
  }

  public render() {
    const { panels } = this.props;
    return (
      <div className="design-form-container">
        <ResponsiveReactGridLayout
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

export default connect(mapStateToProps)(DesignForm);