import { IDependencyInjectionContext } from '../createDiContext'
import { emailActions } from './email.actions'

export type IEventMessage = string

export interface IEvent {
  event: string
  data: IEmailData
}

export interface IEmailData {
  from: string
  to: string
  subject: string
  text: string
}

export default function createEmailReducer(diContext: IDependencyInjectionContext) {
  diContext.logger.debug('email/createEmailReducer : creating email reducer')

  return async function emailReducer(event: IEventMessage): Promise<any> {
    const { logger } = diContext

    logger.debug('email/emailReducer : handling event', { event })
    let decodedEvent: IEvent
    try {
      decodedEvent = JSON.parse(event)
    } catch (error) {
      logger.error('email/emailReducer: error while parsing event value', { error })
      return () => {}
    }

    return emailActions[decodedEvent.event](diContext, decodedEvent.data)
  }
}
