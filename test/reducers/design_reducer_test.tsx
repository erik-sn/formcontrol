
import * as types from "../../src/actions/constants.tsx";
import reducer from "../../src/reducers/design_reducer.tsx";
import * as interfaces from "../../src/utils/interfaces.tsx";
import { expect } from "chai";

describe("Design Reducers" , () => {

  const config: interfaces.PanelConfig = {
    label: "",
    description: "",
    options: [],
    checked: false,
  };

  const panels: Array<interfaces.Panel> = [
    { id: "b1", type: "input", layout: {x: 0, y: 0, w: 1, h: 3 }, config },
    { id: "b2", type: "select", layout: {x: 0, y: 0, w: 1, h: 3 }, config },
  ];

  it("should return the initial state", () => {
    expect(
      reducer(undefined, { payload: {}, type: types.NULL_ACTION })
    ).to.deep.equal(
      {
        panels: [],
      }
    );
  });

  it("should add a design panel", () => {
    const result = reducer({ panels: [panels[0]]}, { payload: panels[1], type: types.ADD_PANEL });
    expect(result).to.deep.equal({panels});
  });


  it("should remove a panel based on its id", () => {
    const result = reducer({ panels }, { payload: { id: "b1" }, type: types.REMOVE_PANEL });
    expect(result.panels).to.deep.equal([panels[1]]);
  });

  it("should remove a design panel", () => {
    const result = reducer({ panels }, { payload: undefined, type: types.CLEAR_PANELS });
    expect(result).to.deep.equal({panels: [], });
  });

  it("should update all panels", () => {
    const result = reducer({panels: []}, { payload: panels, type: types.UPDATE_PANELS });
    expect(result).to.deep.equal({ panels });
  });

});


