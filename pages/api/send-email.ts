import { NextApiRequest, NextApiResponse  } from "next";

import { sendEmail } from "../../utils/sendEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
      const { name, shipping, courier, address, phone, landmark, emailAddress, quantity, type, density, totalPrice } = req.body;
      await sendEmail({ name, shipping, courier, address, phone, landmark, emailAddress, quantity, type, density, totalPrice });
      return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
}