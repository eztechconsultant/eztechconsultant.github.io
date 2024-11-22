export async function onRequestPost(context) {
  try {
    // Get form data
    const formData = await context.request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Create email content
    const emailContent = {
      from: "contact@eztechconsultants.com",
      to: "lenny@eztechconsultants.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `
    };

    // Send email using Cloudflare Email
    await context.env.SENDMAIL.send(emailContent);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Thank you for your message. We'll be in touch soon!" 
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ 
      success: false, 
      message: "There was an error submitting your message. Please try again." 
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}
