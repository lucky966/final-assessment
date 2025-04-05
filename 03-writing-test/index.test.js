import {test} from 'node:test';
import assert from 'node:assert';
import { sum } from "./index.js";

test(() => {
    assert.strictEqual(sum(8,3),11);
});