import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import DesignPanelItem from "../../src/components/designpanel_item";

describe("Design Panel Item" , () => {

  let component: any;
  const click = sinon.spy(() => ("test click"))
  const props = {
    onClick: click,
    element: "test element",
  };
  const state = {};


  beforeEach(() => {
    component = shallow(<DesignPanelItem {...props} />);
  });

  it("renders component with correct text and class", () => {
    expect(component).to.exist;
    expect(component.text()).to.contain(props.element);
    expect(component.find(".panel-item")).to.have.length(1);
  });

  it("contains an icon", () => {
    expect(component.find("MuiThemeProvider")).to.have.length(1);
  });

  it("returns the element text on click", () => {
    expect(click.callCount).to.equal(0);
    component.find(".panel-item").simulate("click");
    expect(click.callCount).to.equal(1);
  });


});



