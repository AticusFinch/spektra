import fetch from "node-fetch";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { token } = req.body;

    const secretKey = "6LejulgqAAAAAMZ_dGKO9QxFpfEEnO6oWV94-X_5"; // Set your reCAPTCHA Secret Key in environment variables
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

    try {
      const response = await fetch(verificationUrl, { method: "POST" });
      const data = await response.json();

      if (data.success) {
        return res.status(200).json({ success: true });
      } else {
        return res.status(400).json({ success: false });
      }
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, error: "Verification failed" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
