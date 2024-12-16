const express = require('express')
const application = express()


application.use(
    express.urlencoded({
        extended: true
    })
)


application.use(express.json())


// ROUTES
application.get('/', (req, res) => {
    res.status(200).json({message: 'First route successfully initialized!'})
})


application.post('/createproduct', (req, res) => {
    const name = req.body.name
    const price = req.body.price

    if (!name){
        res.status(442).json({message: "Field name is required!"})
    }

    console.log(name)
    console.log(price)

    res.status(201).json({message: `Product ${name} was created successfully!`})
})


application.listen(3000)