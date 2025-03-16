export default function handler(req, res) {
    const { id } = req.query;
  
    if (req.method === 'GET') {
      // Simulate GET item by ID
      return res.status(200).json({ message: "Get successfully implemented" });
    } else if (req.method === 'PUT') {
      // Simulate PUT update item
      return res.status(200).json({ message: "Put successfullGGGGGGGGGy implemented" });
    } else if (req.method === 'DELETE') {
      // Simulate DELETE item
      return res.status(200).json({ message: "Delete successfully implemented" });
    } else {
      // Method not allowed
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  }