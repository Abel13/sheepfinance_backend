import Incoming from '../models/Incoming';
import IncomingsRepository from '../repositories/IncomingsRepository';

interface RequestDTO {
  description: string;
  date: Date;
  account: string;
  value: number;
  category: string;
}

class CreateIncomingService {
  private incomingsRepository: IncomingsRepository;

  constructor(incomingsRepository: IncomingsRepository) {
    this.incomingsRepository = incomingsRepository;
  }

  public execute({
    description,
    date,
    account,
    value,
    category,
  }: RequestDTO): Incoming {
    const findIncomingInSameDate = this.incomingsRepository.findByDate(date);

    if (findIncomingInSameDate) {
      throw Error('This incoming is already created');
    }

    const incoming = this.incomingsRepository.create({
      description,
      date,
      account,
      value,
      category,
    });

    return incoming;
  }
}

export default CreateIncomingService;
