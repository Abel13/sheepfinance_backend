import { isEqual } from 'date-fns';
import Incoming from '../models/Incoming';

interface CreateApointmentDTO {
  description: string;
  date: Date;
  account: string;
  value: number;
  category: string;
}

class IncomingsRepository {
  private incomings: Incoming[];

  constructor() {
    this.incomings = [];
  }

  public all(): Incoming[] {
    return this.incomings;
  }

  public findByDate(date: Date): Incoming | null {
    const findIncoming = this.incomings.find(incoming =>
      isEqual(date, incoming.date),
    );

    return findIncoming || null;
  }

  public create({
    description,
    account,
    category,
    date,
    value,
  }: CreateApointmentDTO): Incoming {
    const incoming = new Incoming({
      description,
      date,
      account,
      value,
      category,
    });

    this.incomings.push(incoming);

    return incoming;
  }
}

export default IncomingsRepository;
