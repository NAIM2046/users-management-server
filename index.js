const express = require('express')
const app = express() ; 
const cors = require('cors')

const port = process.env.PORT || 5000 ; 
app.use(cors()) ;
app.use(express.json()) ;
const user = [
    {
        id: 1 , name: "naim" , email: "naim@gmail.com"
    },
    {
        id: 2 , name: "naim" , email: "naim@gmail.com"
    },
    {
        id: 3 , name: "naim" , email: "naim@gmail.com"
    }
]
app.get('/' ,(req , res) =>{
    res.send('Users Management Server is running ')
})
app.get('/user' ,(req , res) =>{
    res.send(user)
})
 app.post('/user',(req , res) =>{
    
    const newUser = req.body ;
    newUser.id = user.length + 1 ; 
    user.push(newUser) ; 
    res.send(newUser) ;
 })

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`)
})