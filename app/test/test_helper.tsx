// This is to fix a bug with ts-node: https://github.com/TypeStrong/ts-node/issues/168
/// <reference path="../node_modules/@types/material-ui/index.d.ts" />
/// <reference path="../node_modules/@types/mocha/index.d.ts" />

import * as jsdom from "jsdom";

declare const global: any;
const doc = jsdom.jsdom("<!doctype html><html><body></body></html>");
const win = doc.defaultView;
// win.localStorage = storageMock();
global["document"] = doc;
global["window"] = win;
global["navigator"] = {userAgent: "node.js"};
global["HTMLElement"] = global["window"].HTMLElement;


class Dictionary<Value> {
    [index: string]: Value;
}

function storageMock() {
  const storage = new Dictionary();

  return {
    setItem(key: string, value: string) {
      storage[key] = value || "";
    },
    getItem(key: string) {
      return storage[key] || null;
    },
    removeItem(key: string) {
      delete storage[key];
    },
    get length() {
      return Object.keys(storage).length;
    },
    key(i: number) {
      const keys = Object.keys(storage);
      return keys[i] || null;
    },
  };
}
