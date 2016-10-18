import * as actions from "../../src/actions/actions";
import * as types from "../../src/actions/constants";
import * as interfaces from "../../src/utils/interfaces";
import { expect } from "chai";
import * as mocha from "mocha";
import * as React from "react";

import { generatePanels } from "../test_data";

describe("Actions" , () => {

  describe("Design Actions" , () => {

    const panels: Array<interfaces.Panel> = generatePanels(["input", "select"]);

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

    it("should create an action to show a preview", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: true,
        type: types.SHOW_PREVIEW,
      };
      expect(actions.showPreview(true)).to.deep.equal(expectedAction);

    });

    it("should create an action to hide a preview", () => {
      const expectedAction: interfaces.ReducerAction = {
        payload: false,
        type: types.SHOW_PREVIEW,
      };
      expect(actions.showPreview(false)).to.deep.equal(expectedAction);
    });

  });

});


