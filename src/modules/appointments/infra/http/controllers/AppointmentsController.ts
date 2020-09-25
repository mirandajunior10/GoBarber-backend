import { Request, Response } from 'express';
import { parseISO } from 'date-fns';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import { container } from 'tsyringe';

export default class AppointmentsController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { provider_id, date } = req.body;

    const parsedDate = parseISO(date);

    const createAppointments = container.resolve(CreateAppointmentService);

    const appointment = await createAppointments.execute({
      provider_id,
      date: parsedDate,
    });

    return res.json(appointment);
  }
}
