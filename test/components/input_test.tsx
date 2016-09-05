
import { expect } from "chai";
import { mount, shallow } from 'enzyme';
import * as sinon from "sinon";
import * as React from "react";
import { sRender } from "../test_helper.tsx";
import Input from "../../src/components/inputs/input.tsx";

describe("Form Panel" , () => {

  describe("Layout" , () => {

    let component: any;
    const props = {
      description: "test description",
      label: "test1",
      type: "input",
    };
    const state = {};


    beforeEach(() => {
      component = sRender(Input, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should contain a grid layout", () => {
      expect(component.find(".form-panel-container")).to.exist;
    });

    it("should have the label displayed inside a label container", () => {
      expect(component.find(".formpanel-input-label")).to.have.length(1);
      expect(component.find(".formpanel-input-label input").props().value).to.equal(props.label);
    });

    it("should have the description displayed inside a description container", () => {
      expect(component.find(".formpanel-input-description")).to.have.length(1);
      expect(component.find(".formpanel-input-description input").props().value).to.equal(props.description);
    });

    it("an type of input should have an input field", () => {
      expect(component.find(".formpanel-input-container")).to.have.length(1);
      expect(component.find(".formpanel-input-container input")).to.have.length(1);
      expect(component.find(".formpanel-input-container select")).to.have.length(0);
    });

  });

  describe("Fields" , () => {

    let component: any;
    let updateLabel: any = sinon.spy(Input.prototype, "updateLabel");
    let updateDescription: any = sinon.spy(Input.prototype, "updateDescription");
    const props = {
      description: "test description",
      label: "test1",
      type: "input",
    };
    const state = {};


    beforeEach(() => {
      component = mount(<Input  {...props} />);
    });

    it("changes update the input field", () => {
      expect(updateLabel.callCount).to.equal(0);
      component.find(".formpanel-input-label input").simulate("change");
      expect(updateLabel.callCount).to.equal(1);
    });

    it("changes update the description field", () => {
      expect(updateDescription.callCount).to.equal(0);
      component.find(".formpanel-input-description input").simulate("change");
      expect(updateDescription.callCount).to.equal(1);
    });

  });

});
