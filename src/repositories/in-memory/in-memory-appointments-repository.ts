import { Appointment } from "../../entities/appointment";
import { AppointmentsRepository } from "../appointments-repository";

export class InMemoryAppointmenstRepository implements AppointmentsRepository {

  public items: Appointment[] = []

  async create(appointment: Appointment): Promise<void> {
      this.items.push(appointment)
  }
}