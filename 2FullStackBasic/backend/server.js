import express from 'express';

const app=express();

const PORT = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('Server is REady');
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            title:'A joke',
            content:'This is a joke'
        },
        {
            id:2,
            title:'Another joke',
            content:'This is another joke'
        },
        {
            id:3,
            title:'Third joke',
            content:'This is also a joke'
        },
        {
            id:4,
            title:'one another joke',
            content:'Thissss is a joke'
        },
        {
            id:5,
            title:'Another one',
            content:'Everything is joke'
        },
        {
            id:6,
            title:'Last one',
            content:'I am joking'
        }
    ]
    res.send(jokes)
})

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))