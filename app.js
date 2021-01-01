const express = require('express')
const routerProduct = require('./routes/product-router')
const app = express()
const port = process.env.port || 3000

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended:false }))

app.use('/products', routerProduct)

app.listen(port, () => {
    console.log(`server jalan di ${port}`)
})