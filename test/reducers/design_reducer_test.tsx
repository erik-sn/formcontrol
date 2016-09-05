import { expect } from "chai";
import reducer from "../../src/reducers/design_reducer.tsx";
import * as types from "../../src/actions/constants.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";

describe("Design Reducers" , () => {

  const panels = [{ id: "b1", type: "input" }, { id: "b2", type: "select"},];

  it('should return the initial state', () => {
    expect(
      reducer(undefined, { type: types.NULL_ACTION, payload: {}})
    ).to.deep.equal(
      {
        panels: [],
      }
    )
  });

  it('should add a design panel', () => {
    expect(
      reducer({ panels: [panels[0]]}, { type: types.ADD_PANEL, payload: panels[1]})
    ).to.deep.equal(
      {
        panels,
      }
    )
  });


  it('should remove a design panel', () => {
    expect(
      reducer({ panels }, { type: types.REMOVE_PANEL, payload: "b1"})
    ).to.deep.equal(
      {
        panels: [panels[1]],
      }
    )
  });
});


