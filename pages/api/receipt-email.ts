import { NextApiRequest, NextApiResponse  } from "next";

import { sendEmail } from "../../utils/receiptEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const { name, shipping, courier, address, phone, landmark, emailAddress, totalPrice, order, customer } = req.body;

        await sendEmail({ name, shipping, courier, address, phone, landmark, emailAddress, totalPrice, order, customer });

        return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
}