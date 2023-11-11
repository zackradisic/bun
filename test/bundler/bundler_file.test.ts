import assert from "assert";
import dedent from "dedent";
import path from "path";
import { itBundled, testForFile } from "./expectBundled";
var { describe, test, expect } = testForFile(import.meta.path);

describe("bundler", () => {
  const wasmFixture = {
    "wasm_test.ts": /* ts */ `
    import wasm from "./something.wasm"
    console.log(wasm)
    `,
    "something.wasm": `lmao`,
  };

  const napiFixture = {
    "napi_test.ts": /* ts */ `
    import wasm from "./something.node"
    console.log(wasm)
    `,
    "something.node": `lmao`,
  };

  itBundled(".wasm without crashing", {
    todo: false,
    files: wasmFixture,
    run: {
      stdout: "foo",
    },
  });

  itBundled(".node without crashing", {
    todo: false,
    files: napiFixture,
    run: {
      stdout: "foo",
    },
  });
});
