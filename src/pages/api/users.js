import {users} from '../../data/userdata'

export default function handler(req,res) {
    if(req.method === 'GET'){
        res.status(200).json(users)
    }
    else if(req.method === 'POST'){
        const email = req.body.email
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const business = req.body.business
        const newUser = {
            id: Date.now(),
            email: email,
            firstname: firstname,
            lastname: lastname,
            business: business,
        }
        users.push(newUser)
        res.status(201).json(newUser)
    }
}