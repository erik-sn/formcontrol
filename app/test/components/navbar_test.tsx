import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as mocha from "mocha";

import Navbar, { Props } from "../../src/components/navbar";

describe("Navbar" , () => {

  describe("Navbar" , () => {
    let component: any;
    const props: Props = {
      auth: {
        showLogin: false,
        user: {},
      },
      showLogin: () => null,
    };
    const state = {};


    beforeEach(() => {
      component = shallow(<Navbar  {...props} />);
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


  });

});
