
import { expect } from "chai";
import * as sinon from "sinon";

import DesignPanelItem from "../../src/components/designpanel_item.tsx";
import { sRender } from "../test_helper.tsx";

describe("Design Panel Item" , () => {

  let component: any;
  const click = sinon.spy(() => "test click")
  const props = {
    onClick: click,
    element: "test element",
  };
  const state = {};


  beforeEach(() => {
    component = sRender(DesignPanelItem, props, state);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });
  
});



