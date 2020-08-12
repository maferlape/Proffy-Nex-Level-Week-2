const express = require ("express")
const server = express()

const {pageLanding, pageStudy, pagegiveClasses, saveClasses}=require('./pages')

const nunjucks=require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
})

server
//recibir los datos de req.body
.use(express.urlencoded({extended: true}))

.use(express.static("public"))


.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pagegiveClasses)
.post("/save-classes", saveClasses)

server.listen(5500, function(){
    console.log("server is running")
})