import { gql } from "@apollo/client";
import { client } from "./apollo";
import axios from "axios";

export async function sendMail(
  subject,
  body,
  captchaToken,
  mutationId = "contact"
) {
  const fromAddress = "stasabastrica05@gmail.com";
  const toAddress = "stasabastrica05@gmail.com";

  const isCaptchaValid = await verifyCaptcha(captchaToken);
  if (!isCaptchaValid) {
    throw new Error("Invalid reCAPTCHA. Please try again.");
  }

  const mutation = gql`
    mutation SendEmail($input: SendEmailInput!) {
      sendEmail(input: $input) {
        message
        origin
        sent
      }
    }
  `;

  try {
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

async function verifyCaptcha(captchaToken) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY; // Ensure you have this in your .env file
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify`,
    null,
    {
      params: {
        secret: secretKey,
        response: captchaToken,
      },
    }
  );

  return response.data.success;
}
