
import { expect } from "chai";
import * as sinon from "sinon";

import Icon from "../../../src/components/utility/icon.tsx";
import { sRender } from "../../test_helper.tsx";

describe("Design Panel Item" , () => {

  let component: any;
  const click = sinon.spy(() => ("test click"))
  const props = {
    onClick: click,
    element: "test element",
  };
  const state = {};


  beforeEach(() => {
    component = sRender(Icon, props, state);
  });

  it("renders component with correct text and class", () => {
    expect(component).to.exist;
    expect(component.find(".formcontrol-icon")).to.have.length(1);
  });

  it("returns the element text on click", () => {
    expect(click.callCount).to.equal(0);
    component.find(".formcontrol-icon").simulate("click");
    expect(click.callCount).to.equal(1);
  });


});



