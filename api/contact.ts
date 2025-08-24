// api/contact.ts (Without @vercel/node types)
import { Resend } from 'resend';

interface RequestBody {
  name: string;
  email: string;
  message: string;
  to?: string;
}

const handler = async (req: any, res: any) => {

  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ 
      message: 'Method not allowed',
      method: req.method 
    });
  }

  try {
    // Check environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACTFORM_EMAIL || 'contact@novanexus.nz';
    
    console.log('Environment check:', {
      hasResendKey: !!resendApiKey,
      contactEmail,
      nodeEnv: process.env.NODE_ENV
    });

    if (!resendApiKey) {
      console.error('RESEND_API_KEY environment variable is missing');
      return res.status(500).json({ 
        message: 'Server configuration error: Missing API key',
        error: 'RESEND_API_KEY not configured'
      });
    }

    // Parse request body
    let requestBody: RequestBody;
    try {
      requestBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      console.log('Parsed request body:', {
        hasName: !!requestBody.name,
        hasEmail: !!requestBody.email,
        hasMessage: !!requestBody.message,
        messageLength: requestBody.message?.length
      });
    } catch (parseError) {
      console.error('Failed to parse request body:', parseError);
      return res.status(400).json({ 
        message: 'Invalid request body',
        error: 'Failed to parse JSON'
      });
    }

    const { name, email, message } = requestBody;

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Missing required fields:', { name: !!name, email: !!email, message: !!message });
      return res.status(400).json({ 
        message: 'Missing required fields',
        required: ['name', 'email', 'message']
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log('Invalid email format:', email);
      return res.status(400).json({ 
        message: 'Invalid email format',
        email
      });
    }

    // Initialize Resend client
    const resend = new Resend(resendApiKey);

    // Send email using Resend
    console.log('Sending email...');
    const emailData = {
      from: 'Contact Form <noreply@novanexus.nz>',
      to: [contactEmail],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #f0f0f0; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="color: #333; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="text-align: center; padding: 20px; color: #888; font-size: 12px;">
            <p>This email was sent from the Nova Nexus contact form.</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        --
        This email was sent from the Nova Nexus contact form.
      `
    };

    console.log('Email data prepared:', {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject
    });

    const { data, error } = await resend.emails.send(emailData);

    if (error) {
      console.error('Resend API error:', {
        error,
        errorType: typeof error,
        errorMessage: error?.message,
        errorName: error?.name
      });
      return res.status(500).json({ 
        message: 'Failed to send email',
        error: error?.message || 'Unknown Resend API error',
        details: error
      });
    }

    console.log('Email sent successfully:', {
      emailId: data?.id,
      dataType: typeof data
    });

    return res.status(200).json({ 
      message: 'Email sent successfully', 
      emailId: data?.id || 'unknown',
      success: true
    });

  } catch (error) {
    console.error('Unexpected error in contact handler:', {
      error,
      errorType: typeof error,
      errorMessage: error instanceof Error ? error.message : 'Unknown error',
      errorStack: error instanceof Error ? error.stack : 'No stack trace',
      errorName: error instanceof Error ? error.name : 'Unknown'
    });

    return res.status(500).json({ 
      message: 'Internal server error',
      error: error instanceof Error ? error.message : 'Unknown error',
      type: 'UNEXPECTED_ERROR'
    });
  }
};

export default handler;