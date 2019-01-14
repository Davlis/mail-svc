import { IDependencyInjectionContext } from '../createDiContext'

export interface IData {
  from: string
  to: string
  subject: string
  text: string
}

export default async function sendMailHandler(diContext: IDependencyInjectionContext, data: IData): Promise<void> {
  const { logger, emailClient } = diContext

  logger.debug(`core/sendMailHandler : processing started for ${JSON.stringify(data)}`)

  try {
    await emailClient.send(data)
  } catch (error) {
    logger.error(`core/sendMailHandler: error occured ${error}`)
    return
  }

  logger.debug('core/sendMailHandler : processing finished')
}
