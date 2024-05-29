    const express=require("express")
    const path=require("path")
    const port=process.env.PORT || 3000
    const app=express()   
    const bodyParser=require("body-parser") 

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(express.static(path.join(__dirname, 'client', 'dist')))
    app.set('view engine', 'ejs')

    //res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))

    app.get('/', (req, res) => {
        
    });










app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})