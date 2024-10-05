export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, email, password } = req.body;
      // Mock database interaction - replace with your actual database logic
      res.status(201).json({ message: 'Sign up successful' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
 