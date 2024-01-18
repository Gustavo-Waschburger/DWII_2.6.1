const paises = [
  {
    pais: 'br',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [
          {
            nome: 'felipe',
            esporte: 'volei',
          },
          {
            nome: 'fulaipe',
            esporte: 'Exterminator',
          },
          {
            nome: 'falide',
            esporte: 'futvolei',
          },
        ],
      },
      {
        tipo: 'prata',
        ganhadores: [
          {
            nome: 'mathias',
            esporte: 'atletismo',
          },
        ],
      },
      {
        tipo: 'bronze',
        ganhadores: [
          {
            nome: 'michael',
            esporte: 'futebol',
          },
        ],
      },
    ],
  },
  {
    pais: 'eua',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [
          {
            nome: 'felipe',
            esporte: 'basquete',
          },
        ],
      },
      {
        tipo: 'prata',
        ganhadores: [],
      },
      {
        tipo: 'bronze',
        ganhadores: [],
      },
    ],
  },
  {
    pais: 'nova zelandia',
    medalhas: [
      {
        tipo: 'ouro',
        ganhadores: [],
      },
      {
        tipo: 'prata',
        ganhadores: [],
      },
      {
        tipo: 'bronze',
        ganhadores: [],
      },
    ],
  },
];
/**Enunciado I do Exercício 02 */
const _paises = paises.filter(pais =>{
  const medalhas = pais.medalhas;
  return medalhas.some(medalha =>{
    const ganhadores = medalha.ganhadores;
    return ganhadores.length > 0;
  });
});
/**Enunciado II do Exercício 02 */
const novoPaises = paises.map((pais) =>{
  const medalhas = pais.medalhas.map(medalha=>{
    const quantidade = medalha.ganhadores.length;
    return{
      ...medalha,
      quantidade,
    };
  });
  return{
    ...pais,
    medalhas,
  };
});

  

let lista3 = document.querySelector('#exec03');

for (arquivo of novoPaises) {    
    let li = document.createElement('li');
    li.textContent = " PAIS:  " + arquivo.pais;
    lista3.appendChild(li);
    for(medalhas of arquivo.medalhas){
      let ulMedalha = document.createElement('ul');
      ulMedalha.id='medalhas';
      let itemMedalha = document.createElement('li');
      itemMedalha.textContent='tipo medalha: ' + medalhas.tipo +' quantidade: '+ medalhas.quantidade;
      ulMedalha.appendChild(itemMedalha);
      
      for(ganhador of medalhas.ganhadores){
        let paragrafo = document.createElement('p');
        paragrafo.innerHTML = '<br>Ganhador: ' + ganhador.nome + '<br>Esporte:'+ganhador.esporte;
        itemMedalha.appendChild(paragrafo);
      } 
      lista3.appendChild(ulMedalha);     
    }
  }

