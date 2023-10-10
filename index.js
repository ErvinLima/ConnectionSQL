const express = require("express")
const exphbs = require("express-handlebars")
const mysql = require("mysql2")

const app =  express()

// definindo o handlebars como tamplate enigne 
app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

//pasta de arquivos estaticos 
app.use(express.static("public"))

//trabalhar com dados no fomato json
app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

//rotaas 
app.get('/', (req, res) =>{
    res.render('home')
})

//conexão com o myqsql
const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "nodemysql",
    port: 3307
})

conn.connect((error) => {
    if (error){
        console.log(error)
        return
    }

    console.log('conectando ao mysql')

    app.listen(3000, () => {
        console.log('rodando na porta 3000')
    })
})