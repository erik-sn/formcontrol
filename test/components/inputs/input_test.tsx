
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Input, { Props } from "../../../src/components/inputs/input";
import * as interfaces from "../../../src/utils/interfaces";
import { generatePanels } from "../../test_data";

describe("Input" , () => {

  describe("Layout" , () => {

    const panel = generatePanels(["input", "select"])[0];
    let component: any;
    let update: any = sinon.spy(() => "test");
    const props = {
      panel,
      update,
      close: (id: string) => id,
      settings: (id: string) => id,
    };
    const state = {};


    beforeEach(() => {
      component = shallow(<Input {...props} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should have a top level class", () => {
      expect(component.find(".formpanel-input-container")).to.have.length(1);
    });

    it("should have the label displayed inside a label container", () => {
      expect(component.find(".input-label-container")).to.have.length(1);
      expect(component.find(".input-label-container input").props().value).to.equal(props.panel.config.label);
    });

    it("should have the description displayed inside a description container", () => {
      expect(component.find(".input-description-container")).to.have.length(1);
      expect(component.find(".input-description-container input").props().value).to.equal(
        props.panel.config.description
      );
    });

    it("the type of input should have an input field", () => {
      expect(component.find(".input-container")).to.have.length(1);
      expect(component.find(".input-container input")).to.have.length(1);
    });

    it("should have two icons", () => {
      expect(component.find("Icon")).to.have.length(2);
    });
  });

  describe("Label and Description" , () => {

    const panel = generatePanels(["input", "select"])[0];
    let component: any;
    let update: any;
    let updateLabel: any = sinon.spy(Input.prototype, "updateLabel");
    let updateDescription: any = sinon.spy(Input.prototype, "updateDescription");
    const props: Props = {
      panel,
      update,
      close: (id: string) => id,
      settings: (id: string) => id,
    };
    const state = {};


    beforeEach(() => {
      update = sinon.spy(() => "test");
      props.update = update;
      component = mount(<Input {...props} />);
    });

    it("changes update the input field", () => {
      expect(updateLabel.callCount).to.equal(0);
      expect(update.callCount).to.equal(0);
      component.find(".input-label-container input").simulate("change");
      expect(updateLabel.callCount).to.equal(1);
      expect(update.callCount).to.equal(1);
    });

    it("changes update the description field", () => {
      expect(updateDescription.callCount).to.equal(0);
      expect(update.callCount).to.equal(0);
      component.find(".input-description-container input").simulate("change");
      expect(updateDescription.callCount).to.equal(1);
      expect(update.callCount).to.equal(1);
    });

  });


  describe("the type of the input" , () => {

   it("has an input box if it the input type is input", () => {
      const panel = generatePanels(["input"])[0];
      const props: Props = {
        panel,
        update: undefined,
        close: (id: string) => id,
        settings: (id: string) => id,
      };
      const state = {};
      const component = mount(<Input {...props} />);
      expect(component.find(".design-input-field")).to.have.length(1);
    });

   it("has a select box if it the input type is select", () => {
      const panel = generatePanels(["select"])[0];
      const props: Props = {
        panel,
        update: undefined,
        close: (id: string) => id,
        settings: (id: string) => id,
      };
      const state = {};
      const component = mount(<Input {...props} />);
      expect(component.find(".design-select-field")).to.have.length(1);
    });

  });

});
