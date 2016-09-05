import { expect } from "chai";
import * as actions from "../../src/actions/actions.tsx";
import * as types from "../../src/actions/constants.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";

describe("Actions" , () => {

  describe("Design Actions" , () => {

    it("should create an action to add a panel", () => {
      const panel = { 
        id: "b1",
        type: "input",
      };
      const expectedAction = {
        payload: panel,
        type: types.ADD_PANEL,
      }
      expect(actions.addPanel(panel).type).to.equal(expectedAction.type)
      expect(actions.addPanel(panel).payload).to.equal(expectedAction.payload)
    });

    it("should create an action to delete a panel", () => {
      const expectedAction: any = {
        payload: { id: "b1" },
        type: types.REMOVE_PANEL,
      }
      expect(actions.removePanel("b1").payload).deep.equal(expectedAction.payload)
    });

    it("should create an action to clear all panels", () => {
      const expectedAction: any = {
        payload: undefined,
        type: types.CLEAR_PANELS,
      }
      expect(actions.clearPanels()).deep.equal(expectedAction)
    });

  });

});


