import nodemailer from "nodemailer"

export default defineEventHandler(async e => {
  const transporter = nodemailer.createTransport({
    host: process.env.GMAIL_SV,
    port: Number(process.env.GMAIL_PT),
    secure: process.env.GMAIL_PT == '465',
    auth: {
      user: process.env.GMAIL_ID,
      pass: process.env.GMAIL_PW,
    }
  });
  const query = getQuery(e)
  const code = "1234"
  const info = await transporter.sendMail({
    from: "nakazawaken1@gmail.com",
    to: query.email as string,
    subject: "ログイン用ワンタイムパスワード",
    text: `ログイン用ワンタイムパスワードを発行しました。ログイン画面に入力してください。\n\n${code}`,
  })
  return { info, url: await nodemailer.getTestMessageUrl(info) }
})