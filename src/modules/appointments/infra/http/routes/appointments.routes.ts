import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '@modules/appointments/infra/typeorm/repositories/AppointmentsRepository';
import CreateAppointmentsService from '@modules/appointments/services/CreateAppointmentService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = Router();
appointmentsRouter.use(ensureAuthenticated);

/* appointmentsRouter.get('/', async (req, res) => {
  const appointments = await appointmentsRepository.find();
  return res.json(appointments);
}); */

appointmentsRouter.post('/', async (req, res) => {
  const { provider_id, date } = req.body;
  const appointmentsRepository = new AppointmentsRepository();

  const parsedDate = parseISO(date);

  const createAppointments = new CreateAppointmentsService(
    appointmentsRepository,
  );

  const appointment = await createAppointments.execute({
    provider_id,
    date: parsedDate,
  });

  return res.json(appointment);
});

export default appointmentsRouter;
