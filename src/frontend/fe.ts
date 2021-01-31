import express from 'express'
import bodyParser from 'body-parser'
import multer from 'multer'
import {tech} from '../common/tech.js'

const technician = tech()

export async function fe(){
    const app = express()
    const upload = multer()
    
    //Various variables influencing startup
    const port = 3000||await technician.read('EXP_PORT')
    app.set('view engine', 'pug')
    app.set('views', 'frontend/views')
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.use(upload.array(""))
    app.locals.pretty = true
    app.use(express.static('frontend/static'))
    app.get('/',(req,res)=>{
        res.send("Hello from Paxbot")
    })
    //And running our app
    app.listen(port,()=>{
        console.log(`Paxbot frontend listining on ${port}`)
    })
}