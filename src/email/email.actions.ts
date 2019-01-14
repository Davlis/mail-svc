import { IDependencyInjectionContext } from '../createDiContext'
import { sendEmailCommand } from './sendEmail.command'

export interface IEmailData {
  from: string
  to: string
  subject: string
  text: string
}

export const emailActions: {
  [key: string]: (diContext: IDependencyInjectionContext, data: IEmailData) => any
} = {
  SEND_EMAIL: sendEmailCommand
}
