import * as actions from "../../src/actions/actions.tsx";
import * as types from "../../src/actions/constants.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";
import { expect } from "chai";
import * as React from "react";

describe("Actions" , () => {

  describe("Design Actions" , () => {

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

    const panels: Array<interfaces.Panel> = [
      { id: "b1", type: "input", layout: {x: 0, y: 0, w: 1, h: 3 }, config, validation },
      { id: "b2", type: "select", layout: {x: 0, y: 0, w: 1, h: 3 }, config, validation },
    ];

    it("should create an action to add a panel", () => {
      const expectedAction = {
        payload: panels[0],
        type: types.ADD_PANEL,
      };
      expect(actions.addPanel(panels[0]).type).to.equal(expectedAction.type);
      expect(actions.addPanel(panels[0]).payload).to.equal(expectedAction.payload);
    });

    it("should create an action to delete a panel", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: { id: "b1" },
        type: types.REMOVE_PANEL,
      };
      expect(actions.removePanel("b1").payload).to.deep.equal(expectedAction.payload);
    });

    it("should create an action to clear all panels", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: undefined,
        type: types.CLEAR_PANELS,
      };
      expect(actions.clearPanels()).to.deep.equal(expectedAction);
    });

    it("should create an action to update panels with their layout", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: panels,
        type: types.UPDATE_PANELS,
      };
      expect(actions.updatePanels(panels)).to.deep.equal(expectedAction);
    });

    it("should create an action to update panels with their layout", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: panels[0],
        type: types.UPDATE_PANEL,
      };
      expect(actions.updatePanel(panels[0])).to.deep.equal(expectedAction);
    });

    it("should create an action to save all panels", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: undefined,
        type: types.SAVE_PANELS,
      };
      expect(actions.savePanels(panels)).to.deep.equal(expectedAction);
    });

  });


  describe("Display Actions" , () => {
    const mockModal = <div />;

    it("should create an action to show a modal", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: {
          showModal: true,
          modal: mockModal,
        },
        type: types.SHOW_MODAL,
      };
      expect(actions.showModal(mockModal)).to.deep.equal(expectedAction);

    });

  });

});


