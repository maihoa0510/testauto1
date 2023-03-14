// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//       const { name, email } = req.body;
  
//       const user = { id: nanoid(), name, email };
//       const newUser = await addUser(user);
  
//       res.status(201).json({ success: true, user: newUser });
//     } else if (req.method === 'GET') {
//       const users = await getUsers();
  
//       res.status(200).json(users);
//     } else {
//       res.status(405).json({ message: 'Method not allowed' });
//     }
//   }
export default async function handler(req, res) {
    console.log('body',body);
    
}