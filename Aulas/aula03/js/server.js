const express = require('express')
const app = express()
const port = 5010

app.use(express.json())

let database = []

// ENDPOINT
app.get('/', (req, res) => {
    try {
        return res.status(200).json({ produtos: database })
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro! Aguarde alguns minutos e tente novamente" })
    }
})

app.get('/buscar-produto-por-id', (req, res) => {
    try {
        let produtoId = req.query.id
        let produto = database.find(produto => produto.id == produtoId)
        if (produto == undefined) {
            return res.status(404).json({ mensagem: "Produto não encontrado" })
        }

        return res.status(200).json({ produto: produto })
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro! Aguarde alguns minutos e tente novamente" })
    }
})

// ENDPOINT
app.post('/adicionar-produto', (req, res) => {
    try {
        let produto = {
            id: req.body.id,
            nome: req.body.nome,
            valor: req.body.valor,
            descricao: req.body.descricao
        }

        database.push(produto)

        return res.status(201).json({ mensagem: "Produto adicionado com sucesso!" })
    } catch (error) {
        return res.status(500).json({ mensagem: error })
    }
})

app.listen(port, () => {
    console.log('Servidor executando!')
    console.log(`http://localhost:${port}`)
})
