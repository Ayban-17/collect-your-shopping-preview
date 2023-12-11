const client = require('@sendgrid/client')

client.setApiKey(process.env.SENDGRID_API_KEY)

const addSingleRecipient = async (req, res) => {
  const { contacts } = req.body
  if (req.method == 'POST') {
    const data = {
      contacts,
      list_ids: [process.env.SENDGRID_LIST_ID],
    }
    const headers = {
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    }
    // request API
    const request = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: data,
      headers: headers,
    }
    try {
      //Sending the request to grid
      const [response, body] = await client.request(request)
      if (response) {
        return res
          .status(response.statusCode)
          .json({ success: true, message: response.body })
      }
    } catch (error) {
      return res.status(error.code).json({
        success: false,
        message: error.message,
        code: error.code,
      })
    }
  } else {
    // handle other requests
    return res.status(405).end(`Method ${req.method} is not allowed`)
  }
}

export default addSingleRecipient
