import fetch from "node-fetch";

const sendEmail = async ({ name, shipping, courier, address, phone, landmark, emailAddress, totalPrice, order, customer }) => {

    const email = emailAddress;
    const SENDGRID_API_KEY = 'api-key-here';
    const SENDGRID_API = 'https://api.sendgrid.com/v3/mail/send';

    try {
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
                        "dynamic_template_data":{
                            "order" : order,
                            "customer" : customer
                        }
                    }
                ],
                from: {
                    email: 'kennethletreroguerrero@gmail.com',
                    name: 'BTNGÑ'
                },
                "template_id" : "template-id-here"
            })
        });
    }
    catch (e) {
        console.error("ERROR", e);
    }
}

export { sendEmail }