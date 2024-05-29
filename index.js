    const express=require("express")
    const path=require("path")
    const port=process.env.PORT || 3000
    const app=express()   
    const bodyParser=require("body-parser") 

    app.use(bodyParser.urlencoded({ extended: true }))
    app.use("/assets", express.static(path.join(__dirname, "client", "dist", "assets")));
    app.set('view engine', 'ejs')

    //res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))

    app.get("/",(req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'dist', 'home.html'))
    })
    app.get('/app/*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
    })










app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})