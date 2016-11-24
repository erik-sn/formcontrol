
import * as types from "../../src/actions/constants";
import reducer, { INITIAL_STATE } from "../../src/reducers/auth_reducer";
import * as interfaces from "../../src/utils/interfaces";
import { expect } from "chai";
import * as React from "react";

describe("Auth Reducers" , () => {

  it("should return the initial state", () => {
    expect(reducer(undefined, { payload: {}, type: types.NULL_ACTION })).to.deep.equal(INITIAL_STATE);
  });

  it("should return the correct value for show login", () => {
    const trueResult = reducer(INITIAL_STATE, { payload: true, type: types.SHOW_LOGIN });
    expect(trueResult.showLogin).to.be.true;

    const falseResult = reducer(INITIAL_STATE, { payload: false, type: types.SHOW_LOGIN });
    expect(falseResult.showLogin).to.be.false;
  });

  it("should return the correct value for show register", () => {
    const trueResult = reducer(INITIAL_STATE, { payload: true, type: types.SHOW_REGISTER });
    expect(trueResult.showRegister).to.be.true;

    const falseResult = reducer(INITIAL_STATE, { payload: false, type: types.SHOW_REGISTER });
    expect(falseResult.showRegister).to.be.false;
  });

});


