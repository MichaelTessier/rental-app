import nodemailer from 'nodemailer'
import smtpConfig from "./nodemailer.config" 
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const transporter = nodemailer.createTransport({
  host: smtpConfig.smtpHost,
  port: smtpConfig.smtpPort,
  auth: {
    user: smtpConfig.smtpUser,
    pass: smtpConfig.smtpPassword
  }
} as SMTPTransport.Options)

type EmailOptions = {
  email: string
  subject: string
  message: string
}

export const sendEmail = async (options: EmailOptions): Promise<void> => {
  await transporter.sendMail({
    from: `${smtpConfig.smtpFromName} <${smtpConfig.smtpFromEmail}>`,
    to: options.email,
    subject: options.subject,
    html: options.message,
  })
}