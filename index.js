const express = require('express')
const { spawn } = require('child_process')
const fs = require('fs')

const app = express()

app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('./public'))


app.get('/',(req,res)=>{
    res.render('index')
})
app.post('/',(req,res,next)=>{
    if(req.body.element!='')
    {
        const childPython = spawn('python',['codespace.py',req.body.element])
        childPython.stdout.on('data',(data)=>{
            console.log(`Stdout: ${data}`)
        })
        childPython.stderr.on('data',(data)=>{
            console.error(`stderr:${data}`)
        })
    }
    else{
        console.log('no text')
        next()
    }
})

app.listen(3000,()=>{console.log('listening to 3000')})