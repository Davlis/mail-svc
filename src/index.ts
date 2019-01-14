import createDiContext, { IDependencyInjectionContext } from './createDiContext'

import createEventClient, { IAmqpClient } from './common/lib/createEventClient'

import { AMQP_CONNECTION_URL, AMQP_EMAIL_QUEUE } from './config'
import createEmailReducer from './email/email.reducer';

const createEventConsumerService = (diContext: IDependencyInjectionContext): Promise<IAmqpClient> => {
  return createEventClient(diContext.logger, AMQP_CONNECTION_URL)
}

async function main(): Promise<void> {
  const diContext: IDependencyInjectionContext = await createDiContext()
  const { logger } = diContext

  const eventService = await createEventConsumerService(diContext)

  try {
    await Promise.all([
      eventService.subscribeToQueue(AMQP_EMAIL_QUEUE, createEmailReducer(diContext))
    ])
    logger.debug('index : Mail service started')
  } catch (error) {
    logger.error(`index : error occured in Mail service ${error.message}`)
  }
}

main().catch(
  (error: Error): void => {
    console.log(error) // tslint:disable-line:no-console
    process.exit(1)
  }
)
