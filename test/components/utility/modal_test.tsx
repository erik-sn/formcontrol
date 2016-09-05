
import { expect } from "chai";
import * as sinon from "sinon";

import Modal, { Props } from "../../../src/components/utility/modal.tsx";
import { fRender } from "../../test_helper.tsx";

describe("Modal" , () => {

  let component: any;
  let response: any;
  const props: Props = {
    response: undefined,
    message: "test message",
  };
  const state = {};


  beforeEach(() => {
    response = sinon.spy((response: boolean) => (response));
    props.response = response;
    component = fRender(Modal, props, state);
  });

  it("renders component with correct class", () => {
    expect(component).to.exist;
    expect(component.find(".modal-container")).to.have.length(1);
  });

  it("responds with true on confirm click", () => {
    expect(response.callCount).to.equal(0);
    component.find(".confirm-button button").simulate("click");
    expect(response.callCount).to.equal(1);
    expect(response.returnValues[0]).to.equal(true);
  });

  it("responds with false on deny click", () => {
    expect(response.callCount).to.equal(0);
    component.find(".deny-button button").simulate("click");
    expect(response.callCount).to.equal(1);
    expect(response.returnValues[0]).to.equal(false);
  });

});



