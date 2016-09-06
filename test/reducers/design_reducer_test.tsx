
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
    { id: "b1", type: "input", layout: { x: 0, y: 0, w: 1, h: 3 }, config },
    { id: "b2", type: "select", layout: { x: 2, y: 2, w: 1, h: 3 }, config },
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
    const result = reducer({ panels: []}, { payload: panels, type: types.UPDATE_PANELS });
    expect(result).to.deep.equal({ panels });
  });

  it("should update one panel", () => {
    const newPanel = panels[0];
    newPanel.type = "test input";
    newPanel.layout = { x: 4, y: 4, w: 4, h: 4 };
    const result: any = reducer({ panels }, { payload: panels[0], type: types.UPDATE_PANEL });

    expect(result.panels[0].type).to.equal(newPanel.type);
    expect(result.panels[0].layout).to.deep.equal(newPanel.layout);
  });

});


