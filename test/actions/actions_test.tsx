import { expect } from "chai";
import * as actions from "../../src/actions/actions.tsx";
import * as types from "../../src/actions/constants.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";

describe("Actions" , () => {

  describe("Design Actions" , () => {

    it("should create an action to add a panel", () => {
      const panel = { 
        type: "input" 
      };
      const expectedAction = {
        payload: panel,
        type: types.ADD_DESIGN_PANEL,
      }
      expect(actions.addDesignPanel(panel).type).to.equal(expectedAction.type)
      expect(actions.addDesignPanel(panel).payload).to.equal(expectedAction.payload)
    });

    it("should create an action to delete a panel", () => {
      const expectedAction: any = {
        payload: { id: 1 },
        type: types.REMOVE_DESIGN_PANEL,
      }
      expect(actions.removeDesignPanel(1).payload).deep.equal(expectedAction.payload)
    });

  });

});


