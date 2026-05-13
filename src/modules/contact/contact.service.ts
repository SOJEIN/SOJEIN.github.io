import emailjs from '@emailjs/browser';

export interface IEmailService {
  send(form: HTMLFormElement): Promise<void>;
}

class EmailJSService implements IEmailService {
  constructor(
    private readonly serviceId: string,
    private readonly templateId: string,
    private readonly publicKey: string,
  ) {}

  async send(form: HTMLFormElement): Promise<void> {
    await emailjs.sendForm(this.serviceId, this.templateId, form, {
      publicKey: this.publicKey,
    });
  }
}

export const emailService: IEmailService = new EmailJSService(
  import.meta.env.VITE_EMAILJS_SERVICE_ID ?? 'YOUR_SERVICE_ID',
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? 'YOUR_TEMPLATE_ID',
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY',
);
