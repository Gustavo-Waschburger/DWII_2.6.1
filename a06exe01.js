const arquivos = [
    {
      id: 1,
      nome: 'Meu Trabalho v1',
      excluido: false,
    },
    {
      id: 2,
      nome: 'Meu Trabalho v2',
      excluido: false,
    },
    {
      id: 3,
      nome: 'Meu Trabalho v3',
      excluido: false,
    },
    {
      id: 4,
      nome: 'Meu Trabalho v4',
      excluido: true,
    },
  ];

  function inverterBoleano(arquivos){
    const arquivoInvertido = arquivos.map(arquivo => {
        const excluido = arquivo.excluido
        return {
            id: arquivo.id,
            nome: arquivo.nome,
            excluido : excluido ? false : true //!excluido,
        }
    });
    return arquivoInvertido;
  }
  //função para capturar #listaConcluida e adicionar uma ul > li;
    


let lista = document.querySelector('#exec01');
const objetoinvertido = inverterBoleano(arquivos);
for (arquivo of arquivos) {    
    let li = document.createElement('li');
    li.textContent = " ID:" + arquivo.id +" Nome: " +arquivo.nome + " status: " + arquivo.excluido ;
    lista.appendChild(li);
  }

let lista2 = document.querySelector('#exec02');

for (arquivo of objetoinvertido) {    
    let li = document.createElement('li');
    li.textContent = " ID:" + arquivo.id +" Nome: " +arquivo.nome + " status: " + arquivo.excluido ;
    lista2.appendChild(li);        
}


//  paragrafo.appendChild(document.createTextNode(medico.genero + " Dr(a). " + medico.nome + " " + medico.sobrenome ));
