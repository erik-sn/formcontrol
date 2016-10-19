import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import * as mocha from "mocha";

import Login, { Props } from "../../../src/components/auth/login";

describe("Auth - Login" , () => {

  let component: any;
  let showLogin: any;

  const props: Props = {
    auth: {
      showLogin: false,
      user: {},
    },
    showLogin: () => undefined,
  };

  beforeEach(() => {
    showLogin = sinon.spy();
    component = shallow(<Login {...props} showLogin={showLogin} />);
  });

  it("renders component and correct hiearchy", () => {
    expect(component).to.exist;
  });

  it("has the correct html classes", () => {
    expect(component.find(".login__confirm-container")).to.have.length(1);
    expect(component.find(".login__deny-container")).to.have.length(1);
    expect(component.find(".message-container")).to.have.length(1);
    expect(component.find(".header-container")).to.have.length(1);
  });

  it("calls the showLogin function on confirm click", () => {
    expect(showLogin.callCount).to.equal(0);
    component.find(".login__deny-container RaisedButton").simulate("click");
    expect(showLogin.callCount).to.equal(1);
  });

});
