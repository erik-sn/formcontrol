import { expect } from "chai";
import { shallow } from "enzyme";
import * as React from "react";
import * as mocha from "mocha";

import Login, { Props } from "../../src/components/login";

describe("Login" , () => {

  let component: any;

  const props: Props = {
    auth: {
      showLogin: false,
      user: {},
    },
    showLogin: () => undefined,
  };

  beforeEach(() => {
    component = shallow(<Login  {...props} />);
  });

  it("renders something", () => {
    expect(component).to.exist;
  });

});
