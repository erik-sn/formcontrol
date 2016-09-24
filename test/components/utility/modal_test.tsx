import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Modal, { Props } from "../../../src/components/utility/modal";

describe("Modal" , () => {

  let component: any;
  let response: any;
  const props: any = {
    message: "test message",
  };
  const state = {};


  beforeEach(() => {
    response = sinon.spy((confirm: boolean) => (confirm));
    component = mount(<Modal response={response} {...props} />);
  });

  it("renders component with correct class", () => {
    expect(component).to.exist;
    expect(component.find(".modal-container")).to.have.length(1);
  });

  it("responds with true on confirm click", () => {
    expect(response.callCount).to.equal(0);
    component.find(".confirm-button").simulate("click");
    expect(response.callCount).to.equal(1);
    expect(response.returnValues[0]).to.equal(true);
  });

  it("responds with false on deny click", () => {
    expect(response.callCount).to.equal(0);
    component.find(".deny-button").simulate("click");
    expect(response.callCount).to.equal(1);
    expect(response.returnValues[0]).to.equal(false);
  });

});



