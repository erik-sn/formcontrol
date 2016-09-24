
import { expect } from "chai";
import { mount } from "enzyme";
import * as React from "react";
import * as sinon from "sinon";

import * as constants from "../../src/actions/constants";
import ConnectedDesignPanel, { DesignPanel, Props, State } from "../../src/components/designpanel";
import * as interfaces from "../../src/utils/interfaces";

describe("Design Panel" , () => {
  const config: interfaces.PanelConfig = {
    label: "",
    description: "",
    options: [],
    checked: false,
    mandatory: true,
  };

  const validation: interfaces.PanelValidation = {
    regex: "",  // let user specify regex
    email: false,  // default empty, user specifiys a '@host.com'
    date: false,
    type: "",  // default: both string, number, both
    length: "",
  };

  const panels: Array<interfaces.Panel> = [
    { id: "b1", type: "input", layout: { x: 0, y: 0, w: 1, h: 3 }, config, validation },
    { id: "b2", type: "select", layout: { x: 2, y: 2, w: 1, h: 3 }, config, validation },
  ];

  const action: interfaces.ReducerAction = {
    payload: undefined,
    type: constants.NULL_ACTION,
  };

  describe("Panel" , () => {
    let component: any;
    let togglePreview: any = sinon.spy(DesignPanel.prototype, "togglePreview");
    let clearAllPanels: any = sinon.spy(DesignPanel.prototype, "clearAllPanels");
    let saveAllPanels: any = sinon.spy(DesignPanel.prototype, "saveAllPanels");
    const props: Props = {
      panels,
      addPanel: (panel: interfaces.Panel): interfaces.ReducerAction => action,
      savePanels: (panelArray: Array<interfaces.Panel>): interfaces.ReducerAction => action,
      clearPanels: (): interfaces.ReducerAction => action,
      hideModal: (): interfaces.ReducerAction => action,
      showModal: (): interfaces.ReducerAction => action,
      showPreview: (): interfaces.ReducerAction => action,
    };
    const state: State = {
      showPreviewButton: false,
    };


    beforeEach(() => {
      component = mount(<DesignPanel {...props} {...state} />);
    });

    it("renders something", () => {
      expect(component).to.exist;
      expect(component.find(".design-panel-container")).to.have.length(1);
    });

    it("should have three menu buttons", () => {
      expect(component.find(".panel-menu-button")).to.have.length(3);
    });

    it("Calls togglePreview on click, toggles togglePreview state", () => {
      expect(togglePreview.callCount).to.equal(0);
      expect(component.state(["showPreviewButton"])).to.be.false;
      expect(component.find("#design-panel-preview").text()).to.contain("Show");

      component.find("#design-panel-preview").simulate("click");
      expect(togglePreview.callCount).to.equal(1);
      expect(component.state(["showPreviewButton"])).to.be.true;
      expect(component.find("#design-panel-preview").text()).to.contain("Hide");

      component.find("#design-panel-preview").simulate("click");
      expect(togglePreview.callCount).to.equal(2);
      expect(component.state(["showPreviewButton"])).to.be.false;
      expect(component.find("#design-panel-preview").text()).to.contain("Show");
    });

    it("Calls clearAllPanels on click", () => {
      expect(clearAllPanels.callCount).to.equal(0);
      component.find("#design-panel-clear").simulate("click");
      expect(clearAllPanels.callCount).to.equal(1);
    });

    it("Calls clearAllPanels on click", () => {
      expect(saveAllPanels.callCount).to.equal(0);
      component.find("#design-panel-save").simulate("click");
      expect(saveAllPanels.callCount).to.equal(1);
    });


  });

});
