import { expect } from "chai";
import reducer from "../../src/reducers/design_reducer.tsx";
import * as types from "../../src/actions/constants.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";

describe("Design Reducers" , () => {

  const panels = [
    { id: "b1", type: "input", layout: {x: 0, y: 0, w: 1, h: 3 }, }, 
    { id: "b2", type: "select", layout: {x: 0, y: 0, w: 1, h: 3 }, },
  ];

  it("should return the initial state", () => {
    expect(
      reducer(undefined, { type: types.NULL_ACTION, payload: {}})
    ).to.deep.equal(
      {
        panels: [],
      }
    )
  });

  it("should add a design panel", () => {
    expect(
      reducer({ panels: [panels[0]]}, { type: types.ADD_PANEL, payload: panels[1]})
    ).to.deep.equal(
      {
        panels,
      }
    )
  });


  it("should remove a panel based on its id", () => {
    expect(
      reducer({ panels }, { type: types.REMOVE_PANEL, payload: "b1"})
    ).to.deep.equal(
      {
        panels: [panels[1]],
      }
    )
  });

  it("should remove a design panel", () => {
    expect(
      reducer({ panels }, { type: types.CLEAR_PANELS, payload: undefined})
    ).to.deep.equal(
      {
        panels: [],
      }
    )
  });

  it("should update all panels", () => {
    expect(
      reducer({panels: []}, { type: types.UPDATE_PANELS, payload: panels})
    ).to.deep.equal(
      {
        panels: panels,
      }
    )
  });

});


