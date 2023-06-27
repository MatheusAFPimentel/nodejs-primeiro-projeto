const express = require('express')
const app = express(); // Criando um APP
const PORT = 2000

app.get('/', (req, res) => {
    res.send("app get!")
})

app.post('/', (req, res) => {
    res.send("app POST")
})

app.delete('/', (req, res) => {
    res.send("app DELETE")
})

// ouvindo na porta 2000.
app.listen(PORT, () => {
    console.log(`APP online na porta: ${PORT}`)
});

// baixar thunter client para testar as chamadas