
import { expect } from "chai";
import * as sinon from "sinon";
import { sRender } from "../test_helper.tsx";
import FormPanel from "../../src/components/formpanel.tsx";

describe("Form Panel" , () => {

  describe("Input" , () => {

    // <div key="a" data-grid={{x: 0, y: 0, w: 1, h: 2, static: true}}>a</div>
    let component: any;
    const props = {
      description: "test description",
      label: "test1",
      type: "input",
    };
    const state = {};


    beforeEach(() => {
      component = sRender(FormPanel, props, state);
    });

    it("renders something", () => {
      expect(component).to.exist;
    });

    it("should contain a grid layout", () => {
      expect(component.find(".form-panel-container")).to.exist;
    });

    it("should have the label displayed inside a label container", () => {
      expect(component.find(".formpanel-label-container")).to.have.length(1);
      expect(component.find(".formpanel-label-container").text()).to.equal(props.label);
    });

    it("should have the description displayed inside a description container", () => {
      expect(component.find(".formpanel-description-container")).to.have.length(1);
      expect(component.find(".formpanel-description-container").text()).to.equal(props.description);
    });

    it("an type of input should have an input field", () => {
      expect(component.find(".formpanel-input-container")).to.have.length(1);
      expect(component.find("input")).to.have.length(1);
      expect(component.find("select")).to.have.length(0);
    });

    it("an type of select should have an select field", () => {
      const newProps = {
        label: "test1",
        type: "select",
      };
      component = sRender(FormPanel, newProps, state);
      expect(component.find(".formpanel-input-container")).to.have.length(1);
      expect(component.find("input")).to.have.length(0);
      expect(component.find("select")).to.have.length(1);

    });

  });

});
