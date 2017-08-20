export class ContactCard {
  mainName: string;
  phone: string;
  email: string;
  secondPhone: string;
  secondEmail: string;

  constructor(
    mainName: string,
    phone: string,
    email: string,
    secondPhone?: string,
    secondEmail?: string) {
    this.mainName = mainName;
    this.phone = phone;
    this.email = email;
    this.secondEmail = secondEmail;
    this.secondPhone = secondPhone;
  }
}
