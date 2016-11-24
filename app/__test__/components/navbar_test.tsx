import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Navbar, { Props } from "../../src/components/navbar";
import { AuthDefault } from "../test_data";

describe("Navbar" , () => {

  describe("Navbar" , () => {
    let showLogin: any;
    let component: any;
    const props: Props = {
      auth: AuthDefault,
      showLogin: () => null,
    };
    const state = {};


    beforeEach(() => {
      showLogin = sinon.spy();
      component = shallow(<Navbar {...props} showLogin={showLogin}  />);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("has all expected containers", () => {
      expect(component.find(".navbar-inner-container")).to.have.length(4);
      expect(component.find(".navbar-button")).to.have.length(2);
      expect(component.find("#navbar-icon-container")).to.have.length(1);
      expect(component.find("#navbar-title-container")).to.have.length(1);
      expect(component.find("#navbar-settings-container")).to.have.length(1);
      expect(component.find("#navbar-login-container")).to.have.length(1);
    });

    it("calls the showLogin function on login click", () => {
      expect(showLogin.callCount).to.equal(0);
      component.find("#navbar-login-container").simulate("click");
      expect(showLogin.callCount).to.equal(1);
    });


  });

});
