require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
const githubAPI={
    "login": "PranavSharma26",
    "id": 144207205,
    "node_id": "U_kgDOCJhtZQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/144207205?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/PranavSharma26",
    "html_url": "https://github.com/PranavSharma26",
    "followers_url": "https://api.github.com/users/PranavSharma26/followers",
    "following_url": "https://api.github.com/users/PranavSharma26/following{/other_user}",
    "gists_url": "https://api.github.com/users/PranavSharma26/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/PranavSharma26/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/PranavSharma26/subscriptions",
    "organizations_url": "https://api.github.com/users/PranavSharma26/orgs",
    "repos_url": "https://api.github.com/users/PranavSharma26/repos",
    "events_url": "https://api.github.com/users/PranavSharma26/events{/privacy}",
    "received_events_url": "https://api.github.com/users/PranavSharma26/received_events",
    "type": "User",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 6,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-09-06T06:10:25Z",
    "updated_at": "2024-06-30T18:09:14Z"
  }
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/instagram',(req,res)=>{
    res.send('Reels')
})
app.get('/h1',(req,res)=>{
    res.send('<h1>Hello this is H1 tag</h1>')
})
app.get('/github',(req, res)=>{
    res.json(githubAPI)
})
app.listen(process.env.PORT,()=>{
    console.log(`Example app listening on port ${port}`)
})