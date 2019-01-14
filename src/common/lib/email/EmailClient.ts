import mailer_ from '@sendgrid/mail'

import { Logger } from 'winston'

export type IMailer = typeof mailer_.MailService

export interface ISendOptions {
  from: string
  to: string
  subject: string
  text: string
}

class EmailClient {
  constructor(public logger: Logger, private API_KEY: string, private mailer: IMailer = mailer_) {
    this.mailer.setApiKey(this.API_KEY)
  }

  public async send(sendOptions: Partial<ISendOptions>): Promise<void> {
    const options = {
      from: 'Placeholder',
      to: 'Placeholder',
      subject: 'Placeholder',
      text: 'Placeholder',
      ...sendOptions
    }

    await this.mailer.send(options)
  }
}

export default EmailClient
