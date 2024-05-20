To run index.js page, we run command node index.js

Also we can do is we can add a script in package.json which will run the above command on running a script

This scripts are useful when the application goes in production or deployment

In computer networking, a port or port number is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service. At the software level, within an operating system, a port is a logical construct that identifies a specific process or a type of network service.

We specified a port number here. Now this port is busy serving the current project

app=express()

This allows to use many functionalities provided by express

app.get() funtions tells this is the request coming from this route, and we have to just respond
Takes a callback function

app.get('${route}',(req,res)=>{
    res.send("HEllo world);
})

On request from a route the server sends hello world as a response.

app.listen(port) tells that the server has started listening on this port number
Also takes a callback function

we can send html tags with the response which gets executed there on browser

Now for deployment we push all the code to repositories. 
Now there are sensitive file information like database username password

So this files to be handled properly

This files are stored as constants in .env file

To use .env, install dotenv

without installing dotenv, process.env.PORT was giving undefined

After installing
require('dotenv').config() in index.js