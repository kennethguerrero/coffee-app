import fetch from "node-fetch";

const SENDGRID_API_KEY = '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'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ name, address, phone }) => {
    const email = 'btngn.ph@gmail.com';

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
                    subject: 'Order via Website'
                }
            ],
            from: {
                email: 'kenetguerrero@gmail.com',
                name: 'BTNGÑ'
            },
            content: [
                {
                    type: 'text/html',
                    value: `
                        Name: ${name}<br> 
                        Address: ${address}<br>
                        Phone: ${phone}
                    `
                }
            ]
        })
    });
}

export { sendEmail }