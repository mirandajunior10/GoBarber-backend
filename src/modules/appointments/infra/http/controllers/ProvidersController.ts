import { Request, Response } from 'express';

import ListProvidersService from '@modules/appointments/services/ListProvidersService';
import { container } from 'tsyringe';

export default class ProvidersController {
  public async index(req: Request, res: Response): Promise<Response> {
    const user_id = req.user.id;

    const listProviders = container.resolve(ListProvidersService);

    const providers = await listProviders.execute({
      user_id,
    });

    return res.json(providers);
  }
}
