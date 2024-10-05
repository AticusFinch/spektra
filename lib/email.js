import { gql } from "@apollo/client";
import { client } from "./apollo";

export async function sendMail(
  subject,
  body,
  captchaToken,
  mutationId = "contact"
) {
  const fromAddress = "stasabastrica05@gmail.com";
  const toAddress = "stasabastrica05@gmail.com";

  const verifyCaptcha = async (token) => {
    const response = await fetch("/api/verify-captcha", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    });

    const data = await response.json();
    if (!data.success) {
      throw new Error("Captcha verification failed");
    }
  };

  try {
    // First, verify the reCAPTCHA token
    await verifyCaptcha(captchaToken);

    const mutation = gql`
      mutation SendEmail($input: SendEmailInput!) {
        sendEmail(input: $input) {
          message
          origin
          sent
        }
      }
    `;

    const response = await client.mutate({
      mutation: mutation,
      variables: {
        input: {
          clientMutationId: mutationId,
          from: fromAddress,
          to: toAddress,
          body: body,
          subject: subject,
        },
      },
    });

    const { data, errors } = response;

    if (errors) {
      console.error("GraphQL errors:", errors);
      throw new Error("Failed to send email due to GraphQL errors");
    }

    if (!data?.sendEmail?.sent) {
      console.error("Email sending failed:", data?.sendEmail);
      throw new Error("Failed to send email");
    }

    return data.sendEmail;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email");
  }
}
