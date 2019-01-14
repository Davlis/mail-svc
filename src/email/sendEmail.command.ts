import sendMailHandler from '../core/sendMailHandler'
import { IDependencyInjectionContext } from '../createDiContext'
import { IEmailData } from './email.actions'

export function sendEmailCommand(diContext: IDependencyInjectionContext, data: IEmailData): Promise<void> {
  return sendMailHandler(diContext, data)
}
