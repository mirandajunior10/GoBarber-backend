import { Request, Response } from 'express';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import { container } from 'tsyringe';

export default class AppointmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;
    const user_id = req.user.id;

    const createAppointments = container.resolve(CreateAppointmentService);

    const appointment = await createAppointments.execute({
      provider_id,
      user_id,
      date,
    });

    return res.json(appointment);
  }
}
