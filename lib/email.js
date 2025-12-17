import { gql } from "@apollo/client";
import { client } from "./apollo";

export async function sendMail(subject, body, mutationId = "contact") {
  const fromAddress = "stasabastrica05@gmail.com";
  const toAddress = "info@asocijacijaspektra.org";

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
