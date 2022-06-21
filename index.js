const express = require('express');
const server = express();

server.get('/curso', (req, res)=>{
  //return res.send("Estou ficando fera")
  return res.json( {"aprendizado": "Estou ficando fera"})
})

server.listen(2000)
