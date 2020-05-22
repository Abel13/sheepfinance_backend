import { Router } from 'express';
import { parseISO } from 'date-fns';
import IncomingsRepository from '../repositories/IncomingsRepository';
import CreateIncomingService from '../services/CreateIncomingService';

const incomingsRouter = Router();
const incomingsRepository = new IncomingsRepository();

incomingsRouter.get('/', (request, response) => {
  const incomings = incomingsRepository.all();

  return response.json(incomings);
});

incomingsRouter.post('/', (request, response) => {
  const { description, date, account, value, category } = request.body;

  const parsedDate = parseISO(date);

  const createIncoming = new CreateIncomingService(incomingsRepository);

  try {
    const incoming = createIncoming.execute({
      description,
      date: parsedDate,
      account,
      value,
      category,
    });

    return response.json(incoming);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default incomingsRouter;
