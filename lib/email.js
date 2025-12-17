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
      const errorMessage = errors.map((e) => e.message).join(", ");
      throw new Error(
        `Failed to send email due to GraphQL errors: ${errorMessage}`
      );
    }

    if (!data?.sendEmail?.sent) {
      const errorMessage = data?.sendEmail?.message || "Unknown error";
      console.error("Email sending failed:", {
        message: errorMessage,
        origin: data?.sendEmail?.origin,
        sent: data?.sendEmail?.sent,
      });
      throw new Error(`Failed to send email: ${errorMessage}`);
    }

    return data.sendEmail;
  } catch (error) {
    console.error("Error sending email:", error);
    // If it's already our custom error, throw it as-is
    if (error.message && error.message.startsWith("Failed to send email")) {
      throw error;
    }
    // Otherwise wrap it
    throw new Error(
      `Failed to send email: ${error.message || "Unknown error"}`
    );
  }
}
