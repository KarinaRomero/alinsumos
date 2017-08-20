import { ContactCard } from './contact-card';

export class MultipleContactCard extends ContactCard {

  constructor(contacts: Array<ContactCard>) {
    let mainName: string;
    let phone = '';
    let email = '';

    contacts.forEach((contact, index) => {
      mainName = contact.mainName;
      phone += contact.phone + (index === contacts.length - 1 ? '' : ' y ');
      email += contact.email + (index === contacts.length - 1 ? '' : ' y ');
    });

    super(mainName, phone, email);
  }
}
