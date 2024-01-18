const alunos = [
  {
    nome: 'Mathias',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 7 },
      { cadeira: 'LP2', nota: 5 },
    ],
  },
  {
    nome: 'Luiza',
    notas: [
      { cadeira: 'DW2', nota: 8 },
      { cadeira: 'BD2', nota: 8 },
    ],
  },
  {
    nome: 'Pedro',
    notas: [
      { cadeira: 'DW2', nota: 10 },
      { cadeira: 'BD2', nota: 10 },
    ],
  },
];
/**Enunciado I do Exercício 02 exemplo de adição de propriedade
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
*/
/**Para cada aluno, gere a média geral obtida de todas as notas. 
 * Você pode salvar esse valor numa propriedade chamada mediaGeral. 
 * A média de uma nota é composta pela soma de todas as nota dividido pelo número de notas. 
 * Você pode usar o map ou o forEach para adicionar a nova propriedade mediaGeral. 
 */

const novosAlunos = alunos.map((aluno) =>{  
  const total =+ aluno.notas.forEach((nota) =>{
    let soma =+ nota.nota;
    return soma;
  });
  return{
    ...aluno,
    mediaGeral: total, ///aluno.notas.length),
  };
});


//impressão no html
let lista4 = document.querySelector('#exec04');
for (let arquivo of novosAlunos) {    
    let li = document.createElement('li');
    li.textContent = " Nome: " + arquivo.nome +' Media: '+ arquivo.mediaGeral;
    lista4.appendChild(li)
    for(nota of arquivo.notas){
      let par = document.createElement('p');
      par.innerHTML='Disciplina: '+ nota.cadeira + ' nota:' + nota.nota +'</br>';
      lista4.appendChild(par);
    }
    ;    
  }

