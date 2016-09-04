import * as React from "react";
const Responsive = require("react-grid-layout").Responsive; // typescript definitions not available
const WidthProvider = require("react-grid-layout").WidthProvider;
const ResponsiveReactGridLayout = WidthProvider(Responsive);

import FormPanel from "./formpanel.tsx";
import GridWrapper from "./utility/gridwrapper.tsx";

export interface IDesignProps {  }
export interface IPanel { label: string; type: string; dataGrid: Object; }

export default class DesignForm extends React.Component<IDesignProps, {}> {

  public render() {

    return (
      <div className="design-form-container">
        <ResponsiveReactGridLayout
          className="layout"
          rowHeight={30}
          breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
          cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
        >
          <GridWrapper key="test1" data-grid={{x: 0, y: 0, w: 1, h: 3}}>
            <FormPanel label="test1" description="this is an input" type="input"/>
          </GridWrapper>
          <GridWrapper key="test2" data-grid={{x: 1, y: 0, w: 3, h: 3, minW: 2, maxW: 4}}>
            <FormPanel label="test1" description="another input" type="input"/>
          </GridWrapper>
          <GridWrapper key="test3" data-grid={{x: 4, y: 0, w: 1, h: 3}}>
            <FormPanel label="test1" description="a third" type="input"/>
          </GridWrapper>
        </ResponsiveReactGridLayout>
      </div>
    );
  }

}