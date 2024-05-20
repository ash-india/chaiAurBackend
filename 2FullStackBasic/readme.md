There are two types of file handling in javascript

commonjs and modulejs

In commonjs require is used. This is synchronous

In modulejs, import is used. This is asynchronous.

By default require is used.

To use modulejs,  add "type":"module" in package.json

Used axios to handle web requests. It provides more functionalities with respect to fetch


cors :- 

backend doesn't allow to fetch data from frontend. To allow, we use cors(), (cross-origin policy)

npim i cors to install cors

app.use(cors());


The api follows some standard ways

the jokes are served at localhost:3000/api/jokes


No writing again again this large link doesn't make any sense


so write axios.get('/api/jokes')

The benefit of these is, 

    it is not necessary that the application will be hosted from localhost, it can be hosted from anywhere else (vercel, netlify, etc.)


So wherever be the hosted backend, after the host address, /api/jokes will be served


Now here proxy will be used



1. **Frontend Request** : When you make a request using `axios.get('/api/jokes')`, your frontend code is only aware of the `/api/jokes` endpoint.
2. **Proxy Interception** : The development server (like Vite, Webpack dev server, etc.) intercepts this request because it matches the `/api` prefix.
3. **Request Forwarding** : The development server then forwards this request to `http://localhost:3000/api/jokes` on your behalf.

Also to the backend it seems that the request is coming from `http://localhost:3000/api/jokes`
so this will not produce any error, and no need of cors()


But here we will use proxy
