const express=require('express') 
const http=require('http')

const server=http.createServer((req,res)=>{
    console.log("something...")
    res.end("home")
})

server.listen(5000)
