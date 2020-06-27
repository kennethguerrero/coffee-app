import fetch from "node-fetch";

const SENDGRID_API_KEY = 'API-KEY-HERE'

const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send'

const sendEmail = async ({ name, shipping, courier, address, phone, landmark, emailAddress, quantity, type, density }) => {
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
                email: 'kennethletreroguerrero@gmail.com',
                name: 'BTNGÑ'
            },
            content: [
                {
                    type: 'text/html',
                    value: `
                        <strong>Customer Details</strong><br />
                        Name: ${name}<br /> 
                        Shipping: ${shipping}<br />
                        Courier: ${courier}<br />
                        Address: ${address}<br />
                        Phone: ${phone}<br />
                        Landmark: ${landmark}<br />
                        Email: ${emailAddress}<br /><br />

                        <strong>Order</strong><br />
                        Quantity: ${quantity}<br />
                        Type: ${type} ${density}<br />
                    `
                }
            ]
        })
    });
}

export { sendEmail }