import { test } from "@vitest/runner";
import { expect } from "chai";
import { getFutureDate } from "./get-future-date";

test("increanses date with one yaer", () => {
    const year = new Date().getFullYear()

    expect(getFutureDate(`${year}-03-05`).getFullYear()).equal(2025)
});
