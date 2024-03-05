import { test } from "@vitest/runner";
import { Appointment } from "./appointment";
import { expect } from "chai";

test("create on appointment", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 1);
  endsAt.setDate(endsAt.getDate() + 2);

  const appointment = new Appointment({
    customer: "Jon",
    startsAt,
    endsAt,
  });

  expect(appointment).instanceOf(Appointment);
  expect(appointment.customer).equal("Jon");
});

test("cannot create on appointment with end date before start date", () => {
  const startsAt = new Date();
  const endsAt = new Date();

  startsAt.setDate(startsAt.getDate() + 2);
  endsAt.setDate(endsAt.getDate() + 1);

  expect(() => {
    return new Appointment({
      customer: "Jon",
      startsAt,
      endsAt,
    });
  }).throw();
});
