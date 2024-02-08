const perguntas = [
    {
        pergunta: "Qual é a função que usamos para declarar uma variável em JavaScript?",
        respostas: [
            "define",
            "var",
            "declare"
        ],
        correta: 1 // "var"
    },
    {
        pergunta: "Qual destes métodos é usado para adicionar um elemento ao final de um array em JavaScript?",
        respostas: [
            "push()",
            "add()",
            "append()"
        ],
        correta: 0 // "push()"
    },
    {
        pergunta: "Qual é a palavra-chave usada para declarar uma função em JavaScript?",
        respostas: [
            "function",
            "def",
            "method"
        ],
        correta: 0 // "function"
    },
    {
        pergunta: "Qual método é usado para selecionar um elemento pelo seu ID em JavaScript?",
        respostas: [
            "getElementByClass()",
            "selectByID()",
            "getElementById()"
        ],
        correta: 2 // "getElementById()"
    },
    {
        pergunta: "Qual destas é uma maneira válida de comentar código em JavaScript?",
        respostas: [
            "// Este é um comentário",
            "' Este é um comentário",
            "<!-- Este é um comentário -->"
        ],
        correta: 0 // "// Este é um comentário"
    },
    {
        pergunta: "Qual método é usado para converter uma string em minúsculas em JavaScript?",
        respostas: [
            "toLowerCase()",
            "toLower()",
            "lowerCase()"
        ],
        correta: 0 // "toLowerCase()"
    },
    {
        pergunta: "Qual operador é usado para verificar igualdade estrita em JavaScript?",
        respostas: [
            "==",
            "===",
            "="
        ],
        correta: 1 // "==="
    },
    {
        pergunta: "Qual é o resultado da expressão '5' + 2 em JavaScript?",
        respostas: [
            "7",
            "52",
            "TypeError"
        ],
        correta: 1 // "52"
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas: [
            "pop()",
            "removeLast()",
            "deleteLast()"
        ],
        correta: 0 // "pop()"
    },
    {
        pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
        respostas: [
            "console.print()",
            "log()",
            "print()"
        ],
        correta: 1 // "log()"
    }
];



const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

//loop ou laço de repetiçao
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
    const estaCorreta = event.target.value == item.correta
    if(estaCorreta) {
      corretas.add(item)
     }
    mostrarTotal.textContent = corretas.size + 'de' + totalDePerguntas

    }

    quizItem.querySelector('dl').appendChild(dt)
  }
  //espeço no parentese significa que dentro do dl está o dt 
    quizItem.querySelector('dl dt').remove()

  //aparece na tela
quiz.appendChild(quizItem)
  
  
  }
  