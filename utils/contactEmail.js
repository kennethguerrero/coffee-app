import fetch from "node-fetch";

const sendEmail = async ({ fullName, emailAddress, message }) => {

    const email = 'btngn.ph@gmail.com';
    const SENDGRID_API_KEY = 'api-key-here';
    const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

    await fetch(SENDGRID_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${SENDGRID_API_KEY}`
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [
                {
                    email
                }
              ],
              subject: 'BTNGÑ Customer Feedback'
            }
          ],
          from: {
            email: 'kennethletreroguerrero@gmail.com',
            name: 'BTNGÑ'
          },
          content: [
            {
              type: 'text/html',
              value: `<strong>Full Name:</strong> ${fullName} <br /><br /> <strong>Email Address:</strong> ${emailAddress} <br /><br /> <strong>Message:</strong> <br /> ${message}`
            }
          ]
        })
    });
}

export { sendEmail }