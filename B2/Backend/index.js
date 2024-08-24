import express from 'express'
const app=express()
const port=process.env.PORT || 4000
app.get('/',(req,res)=>{
    res.send('Server is Ready!')
})
app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id: 1,
            title: 'A joke',
            content: 'Hi this is joke 1' 
        },
        {
            id: 2,
            title: 'Another joke',
            content: 'Hi this is joke 2' 
        },
        {
            id: 3,
            title: 'Another other joke',
            content: 'Hi this is joke 3' 
        }
    ]
    res.send(jokes)
})


app.listen(port,()=>{
    console.log(`Server Running... https://localhost:${port}`)
})