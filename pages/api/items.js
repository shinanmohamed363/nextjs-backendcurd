// pages/api/login.js
import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['POST', 'OPTIONS'], // Allow POST and preflight OPTIONS requests
  origin: ['http://localhost:3001'], // Allow requests from your frontend origin
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  // Run the cors middleware
  await runMiddleware(req, res, cors);

  // Define a mock user database (you can replace this with a real database query later)
  const mockUser = {
    username: "123nass",
    password: "hsackan",
    role: "ADMIN",
    name: "Johnkdn Doe",
    mobile: "1768990",
  };

  if (req.method === 'POST') {
    // Extract username and password from the request body
    const { username, password } = req.body;

    // Check if username and password match the mock user
    if (username === mockUser.username && password === mockUser.password) {
      // Return a successful login response
      return res.status(200).json({
        message: "Login successful",
        session: {
          role: mockUser.role,
          username: mockUser.username,
          name: mockUser.name,
          mobile: mockUser.mobile,
        },
      });
    } else {
      // Return an error if credentials are invalid
      return res.status(401).json({ message: "Invalid username or password" });
    }
  } else if (req.method === 'OPTIONS') {
    // Preflight request is handled by the cors middleware
    return res.status(200).end();
  } else {
    // Method not allowed
    return res.status(405).json({ message: "Method Not Allowed" });
  }
}