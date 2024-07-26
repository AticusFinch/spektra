export default async function handler(req, res) {
  // Check for secret to confirm this is a valid request
  if (req.query.secret !== process.env.SPEKTRA_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // Revalidate the specific page
    await res.revalidate("/news");
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ message: "Error revalidating" });
  }
}
