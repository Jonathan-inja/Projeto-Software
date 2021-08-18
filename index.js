const express = require('express')
const app = express()
app.use(express.json())

app.get('/soma/:n1/:n2', (req, res) => {
    return res.json({ 
            result: parseFloat(req.params.n1) + parseFloat(req.params.n2)
        })
})

app.listen(8000, () => {
    console.log(`Rodando em http://localhost:8000/`);
})