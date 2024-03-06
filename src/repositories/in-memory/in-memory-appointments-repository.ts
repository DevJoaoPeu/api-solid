import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository";

export class InMemoryAppointmenstRepository implements AppointmentsRepository {
  create(appointment: Appointment): Promise<void> {
      
  }

  save(appointment: Appointment): Promise<void> {
      
  }
}