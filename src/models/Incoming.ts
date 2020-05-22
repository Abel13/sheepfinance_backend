import { uuid } from 'uuidv4';

class Incoming {
  id: string;

  description: string;

  date: Date;

  account: string;

  value: number;

  category: string;

  constructor({
    description,
    date,
    account,
    value,
    category,
  }: Omit<Incoming, 'id'>) {
    this.id = uuid();
    this.description = description;
    this.date = date;
    this.account = account;
    this.value = value;
    this.category = category;
  }
}

export default Incoming;
