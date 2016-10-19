import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";
import * as mocha from "mocha";

import Basic, { Props } from "../../../src/components/auth/basic";

describe("Auth - basic" , () => {

  let component: any;
  let handleChange: any;

  const props: Props = {
    username: "test name",
    password: "test pw",
    handleChange: undefined,
  };

  beforeEach(() => {
    handleChange = sinon.spy();
    component = shallow(<Basic {...props}  handleChange={handleChange} />);
  });

  it("renders component and correct hiearchy", () => {
    expect(component).to.exist;
    expect(component.find(".login__basic-auth-container")).to.have.length(1);
  });

  it("has two input fields witht he correct values", () => {
    expect(component.find("TextField")).to.have.length(2);
    expect(component.find(".login__username-container TextField").prop("value")).to.equal("test name");
    expect(component.find(".login__password-container TextField").prop("value")).to.equal("test pw");
  });

  it("has a type of password for the second input field", () => {
    expect(component.find(".login__password-container TextField").prop("type")).to.equal("password")
  });

  it("calls onChange when either of the fields are change", () => {
    const user = component.find(".login__username-container TextField");
    const pw = component.find(".login__password-container TextField");

    user.simulate("change");
    expect(handleChange.callCount).to.equal(1);
    pw.simulate("change");
    expect(handleChange.callCount).to.equal(2);


  });

});
