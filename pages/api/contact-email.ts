import { NextApiRequest, NextApiResponse  } from "next";

import { sendEmail } from "../../utils/contactEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method === 'POST') {
        const { fullName, emailAddress, message } = req.body;

        await sendEmail({ fullName, emailAddress, message });

        return res.status(200).end();
    }
    return res.status(404).json({
        error: {
            code: 'not_found',
            message: "The requested endpoint was not found or doesn't support this method."
        }
    });
}