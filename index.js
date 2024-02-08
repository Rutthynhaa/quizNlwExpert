const perguntas = [
    {
      pergunta: "Qual é o nome do encanador italiano que é o protagonista de uma famosa franquia de videogame da Nintendo?",
      respostas: [
        "Mario",
        "Luigi",
        "Yoshi",
      ],
      correta: 0
    },
    {
      pergunta: "Em que jogo é possível encontrar o personagem Sonic, o ouriço azul rápido, que é um dos mascotes mais conhecidos da SEGA?",
      respostas: [
        "The Legend of Zelda",
        "Pokémon",
        "Sonic the Hedgehog",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do criador da série de jogos 'Metal Gear'?",
      respostas: [
        "Hideo Kojima",
        "Shigeru Miyamoto",
        "Satoru Iwata",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o título do jogo onde os jogadores constroem e exploram um mundo virtual tridimensional?",
      respostas: [
        "Minecraft",
        "World of Warcraft",
        "League of Legends",
      ],
      correta: 0
    },
    {
      pergunta: "Em que jogo é possível encontrar o personagem principal chamado Link, que deve resgatar a Princesa Zelda?",
      respostas: [
        "Final Fantasy",
        "The Legend of Zelda",
        "Halo",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do jogo onde os jogadores controlam um personagem chamado Nathan Drake em busca de tesouros perdidos?",
      respostas: [
        "Uncharted",
        "Assassin's Creed",
        "Gears of War",
      ],
      correta: 0
    },
    {
      pergunta: "Em que jogo os jogadores podem encontrar o famoso easter egg 'Konami Code'?",
      respostas: [
        "Mortal Kombat",
        "Street Fighter",
        "Contra",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o nome do jogo onde os jogadores assumem o papel de um herói chamado Geralt de Rivia em busca de sua filha adotiva?",
      respostas: [
        "The Witcher",
        "Dark Souls",
        "Bloodborne",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do estúdio de desenvolvimento responsável pela criação da série de jogos 'Grand Theft Auto'?",
      respostas: [
        "Ubisoft",
        "Rockstar Games",
        "Electronic Arts",
      ],
      correta: 1
    },
    {
     
      pergunta: "No universo dos jogos, qual desses é um dos tipos de criaturas que os jogadores podem capturar e treinar em 'Pokémon'?",
      respostas: [
        "Dragões",
        "Zumbis",
        "Monstros de bolso",
      ],
      correta: 2
  
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
  