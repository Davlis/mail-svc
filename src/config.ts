import dotenv from 'dotenv'
dotenv.load()

export const LOG_LEVEL: string = process.env.LOG_LEVEL as string
export const AMQP_CONNECTION_URL: string = process.env.AMQP_CONNECTION_URL as string
export const AMQP_EMAIL_QUEUE: string = process.env.AMQP_EMAIL_QUEUE as string
export const SENDGRID_API_KEY: string = process.env.SENDGRID_API_KEY as string
