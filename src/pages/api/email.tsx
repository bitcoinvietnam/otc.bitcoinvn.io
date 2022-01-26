import { NextApiRequest, NextApiResponse } from 'next';
import nodeMailer from 'nodemailer';

interface FormBody {
  email: string;
  btc: boolean;
  eth: boolean;
  usdt: boolean;
  usdc: boolean;
  message: string;
}

function handleContactForm(req: NextApiRequest, res: NextApiResponse) {
  const form: FormBody = req.body;
  const transporter = nodeMailer.createTransport({
    host: process.env.MAIL_SERVER,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
  });
  const content = `A client has contacted us from OTC Landing Page:

  Email: ${form.email}
  Interested Asset(s): ${form.btc ? 'BTC' : ''} ${form.eth ? 'ETH' : ''} ${
    form.usdt ? 'USDT' : ''
  } ${form.usdc ? 'USDC' : ''}
  Message: ${form.message}`;
  const mailData = {
    from: 'otc@mg.bitcoinvn.io',
    to: process.env.MAIL_RECIPIENT,
    subject: `OTC: MESSAGE FROM ${form.email}`,
    text: content,
  };
  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log(info);
    }
  });
  res.status(200);
}

export default handleContactForm;
