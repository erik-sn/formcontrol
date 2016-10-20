import { expect } from "chai";
import { shallow } from "enzyme";
import { cloneDeep } from "lodash";
import * as React from "react";
import * as sinon from "sinon";

import { Application, Props } from "../../src/components/application";

const defaultProps: Props = {
  params: {
    mode: "input",
  },
  route: {},
  display: {
    showPreview: false,
    modal: {
      showModal: false,
      modal: undefined,
    },
  },
  auth: {
    showLogin: false,
    showRegister: false,
    user: {},
  },
  showLogin: () => null,
  showRegister: () => null,
  basicLogin: () => null,
};

describe("Application" , () => {

  describe("Application in design mode" , () => {
    let component: any;
    const props: Props = cloneDeep(defaultProps);
    props.params.mode = "design";
    const state = {};


    beforeEach(() => {
      component = shallow(<Application {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("has design components", () => {
      expect(component.find(".design-container")).to.have.length(1);
    });

    it("has a navbar", () => {
      expect(component.find("Navbar")).to.have.length(1);
    });

    it("has a form component", () => {
      expect(component.find("Form")).to.have.length(0);
    });

    it("has modal only if showModal is true", () => {
      expect(component.find(".modal-container")).to.have.length(0);
      const newProps = props;
      newProps.display.modal = {
        showModal: true,
        modal: <div className="modal-container" />,
      };
      component = shallow(<Application {...newProps} />);
      expect(component.find(".modal-container")).to.have.length(1);
    });


  });

  describe("Application in input mode" , () => {
    let component: any;
    const props: Props = cloneDeep(defaultProps);
    props.params.mode = "input";
    const state = {};


    beforeEach(() => {
      component = shallow(<Application {...props} />);
    });

    it("does NOT have design components", () => {
      expect(component.find(".design-container")).to.have.length(0);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("has a navbar", () => {
      expect(component.find("Navbar")).to.have.length(1);
    });

    it("has a form component", () => {
      expect(component.find("Form")).to.have.length(1);
    });

  });

});


