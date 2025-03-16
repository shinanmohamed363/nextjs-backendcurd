export default function handler(req, res) {
    if (req.method === 'GET') {
      // Simulate GET all items
      return res.status(200).json({ message: "Get successfully implemented" });
    } else if (req.method === 'POST') {
      // Simulate POST new item
      return res.status(201).json({ message: "Post successfully implemented" });
    } else {
      // Method not allowed
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  }