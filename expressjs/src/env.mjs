import env from 'dotenv'

env.config()

export const PORT  = process.env['PORT']
export const SECRET = process.env['SECRET']