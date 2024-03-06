import { describe, it } from "@vitest/runner";
import { Appointment } from "../entities/appointment";
import { CreateAppointment } from "./create-appointment";
import { expect } from "chai";
import { getFutureDate } from "../tests/utils/get-future-date";
import { InMemoryAppointmenstRepository } from "../repositories/in-memory/in-memory-appointments-repository";


describe("Create Appointment", () => {
  it("should be able to create an appointment", async () => {
    const appointmentRepo = new InMemoryAppointmenstRepository()
    const createAppointment = new CreateAppointment(appointmentRepo);

    const startsAt = getFutureDate("2024-04-10");
    const endsAt = getFutureDate("2024-04-11");

    const result = await createAppointment.execute({
      customer: "Jon",
      startsAt,
      endsAt,
    });

    expect(result).to.be.an.instanceOf(Appointment);
  });
});