import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Icon, { Props } from "../../../src/components/utility/icon";

describe("Design Panel Item" , () => {

  let component: any;
  const click = sinon.spy(() => ("test click"));
  const props: Props = {
    onClick: click,
    icon: "test icon",
    size: 20,
    id: "test id",
  };
  const state = {};


  beforeEach(() => {
    component = shallow(<Icon {...props} />);
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



