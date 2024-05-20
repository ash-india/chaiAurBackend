require('dotenv').config()
const express = require('express')

const app=express()

const port = process.env.PORT;

const githubData = {
    "login": "ash-india",
    "id": 116694405,
    "node_id": "U_kgDOBvSdhQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/116694405?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ash-india",
    "html_url": "https://github.com/ash-india",
    "followers_url": "https://api.github.com/users/ash-india/followers",
    "following_url": "https://api.github.com/users/ash-india/following{/other_user}",
    "gists_url": "https://api.github.com/users/ash-india/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ash-india/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ash-india/subscriptions",
    "organizations_url": "https://api.github.com/users/ash-india/orgs",
    "repos_url": "https://api.github.com/users/ash-india/repos",
    "events_url": "https://api.github.com/users/ash-india/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ash-india/received_events",
    "type": "User",
    "site_admin": false,
    "name": "NITESH MODI",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 11,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-10-26T01:18:52Z",
    "updated_at": "2024-03-15T12:04:39Z"
  }

app.get("/",(req,res)=>{
    res.send("Hello World !!!");
})

app.get("/login",(req,res)=>{
    res.send("<h1 style='color:red;'>Login will be available soon</h1>");
})

app.get("/linkedin",(req,res)=>{
    res.send("<h2>UserName - niteshmodi08</h2>");
})

app.get("/github",(req,res)=>{
    res.json(githubData);
})

app.listen(port,()=>{
    console.log(`Listening on port ${port}`)
});