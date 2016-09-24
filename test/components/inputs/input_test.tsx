
import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import Input, { Props } from "../../../src/components/inputs/input";
import * as interfaces from "../../../src/utils/interfaces";

describe("Input" , () => {
  const config: interfaces.PanelConfig = {
    label: "",
    description: "",
    options: [],
    checked: false,
    mandatory: true,
  };

  const validation: interfaces.PanelValidation = {
    regex: "",  // let user specify regex
    email: false,
    date: false,
    type: "",  // default: both string, number, both
    length: "",
  };

  const panel: interfaces.Panel = {
    id: "b1",
    type: "input",
    layout: { x: 0, y: 0, w: 1, h: 3 },
    config,
    validation,
  };

  describe("Layout" , () => {

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

    it("should contain a grid layout", () => {
      expect(component.find(".form-panel-container")).to.exist;
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

    it("an type of input should have an input field", () => {
      expect(component.find(".input-container")).to.have.length(1);
      expect(component.find(".input-container input")).to.have.length(1);
    });

  });

  describe("Fields" , () => {

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

});
