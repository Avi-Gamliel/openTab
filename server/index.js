const express = require('express');
const http = require('http')
const app = express()
const path = require('path')
const server = http.createServer(app)

app.get('/api/list', (req, res) => {
    const ls = ["aavi", "dotan", "list", "test", "test2"]
    res.send(ls)
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});


const PORT = process.env.PORT || 2001;
server.listen(PORT, () => console.log(`server is running on port =${PORT}`));