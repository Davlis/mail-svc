import { Logger } from 'winston'
import { createLogger } from './common/lib'
import EmailClient from './common/lib/email/EmailClient'

import { SENDGRID_API_KEY } from './config'

export interface IDependencyInjectionContext {
  logger: Logger
  emailClient: EmailClient
}

async function createDiContext(): Promise<IDependencyInjectionContext> {
  const logger: Logger = createLogger()
  const emailClient: EmailClient = new EmailClient(logger, SENDGRID_API_KEY)

  const diContext: IDependencyInjectionContext = {
    logger,
    emailClient
  }

  return diContext
}

export default createDiContext
