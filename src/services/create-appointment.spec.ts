import { describe, it } from "@vitest/runner";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";
import { expect } from "chai";

describe("Create Appointment", () => {
  it("should be able to create an appointment", async () => {
    const createAppointment = new CreateAppointment();

    const startsAt = new Date();
    const endsAt = new Date();

    startsAt.setDate(startsAt.getDate() + 1)
    endsAt.setDate(endsAt.getDate() + 2);

    const result = await createAppointment.execute({
      customer: "Jon",
      startsAt,
      endsAt,
    });

    expect(result).to.be.an.instanceOf(Appointment);
  });
});