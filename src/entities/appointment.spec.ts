import { test } from "@vitest/runner";
import { Appointment } from "./appointment";
import { expect } from "chai";

test("create on appointment", () => {
    const appointment = new Appointment({
        customer: "Jon",
        startsAt: new Date(),
        endsAt: new Date()
    })

    expect(appointment).instanceOf(Appointment)
    expect(appointment.customer).equal("Jon")
});
