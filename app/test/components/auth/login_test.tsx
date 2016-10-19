import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import * as mocha from "mocha";

import Login, { Props } from "../../../src/components/auth/login";
import { AuthDefault } from "../../test_data";
describe("Auth - Login" , () => {

  let component: any;
  let showLogin: any;
  let basicLogin: any;

  const props: Props = {
    auth: AuthDefault,
    showLogin: (show: boolean) => undefined,
    showRegister: (show: boolean) => undefined,
    basicLogin: (username: string, password: string) => undefined,
  };

  beforeEach(() => {
    showLogin = sinon.spy();
    basicLogin = sinon.spy();
    component = shallow(<Login {...props} showLogin={showLogin} basicLogin={basicLogin} />);
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

  it("calls the showLogin function on deny click", () => {
    expect(showLogin.callCount).to.equal(0);
    component.find(".login__deny-container RaisedButton").simulate("click");
    expect(showLogin.callCount).to.equal(1);
  });

  it("calls the basicLogin function on confirm click", () => {
    expect(basicLogin.callCount).to.equal(0);
    component.find(".login__confirm-container RaisedButton").simulate("click");
    expect(basicLogin.callCount).to.equal(1);
  });


});
