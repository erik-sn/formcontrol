
import * as types from "../../src/actions/constants";
import reducer, { INITIAL_STATE } from "../../src/reducers/auth_reducer";
import * as interfaces from "../../src/utils/interfaces";
import { expect } from "chai";
import * as React from "react";

describe("Display Reducers" , () => {

  it("should return the initial state", () => {
    expect(reducer(undefined, { payload: {}, type: types.NULL_ACTION })).to.deep.equal(INITIAL_STATE);
  });

});


