
// Selecionando o textarea e o botão, (Selecionar não significa que estou pegando os valores)
const areaTexto = document.getElementById('area_texto');
const botaoEnviar = document.getElementById('botao_de_envio');
const equipeUmTexto = document.getElementById('texto_equipe_um');
let equipeUm = [];
let equipeDois = [];

// Adiciona um evento de clique ao botão
botaoEnviar.addEventListener('click', () => {
    // Agora sim, pegando os valores do textarea 
    const nomesDigitados = areaTexto.value;

    // Insere os nomes digitados em um array, o delimitador de nomes é a quebra de linha
    const listaDeNomes = nomesDigitados.split('\n');
    
    //console.log(listaDeNomes[0]);

    // Função para sortear um número aleatorio de acordo com o tamanho do indice
    function sortearIndice (min, max){
        let indiceSorteado = parseInt(Math.random() * (0, listaDeNomes.length));
        return indiceSorteado;
    }

    //Função para criar um h2 para cada item do array das equipes sorteadas
    function mostraEquipe(equipe, containerId){
        //Selecionando onde vai inserir os h2
        const equipeGeral = document.getElementById(containerId);
        
        //Percorre/ itera por cada item do array
        equipe.forEach(item => {

            // Cria um novo elemento <h2>
            const h2 = document.createElement("h2");

            h2.textContent = item;

            equipeGeral.appendChild(h2);
        })
    }

    // Realiza uma repetição até que o tamanho da equipeUmm seja maior qque a metade do tamanho da listaDeNomes
    while(equipeUm.length < Math.floor(listaDeNomes.length / 2)){
        // Guarda o valor do indice sorteado para utilizar como um verificador depois
        let nomeSorteado = listaDeNomes[sortearIndice()];
        let nomeJaExiste = false;

        // O for vai percorrer os indices da equipeUm para garantir que o nome não esteja repetido
        for(let i = 0; i < equipeUm.length; i++){
            if(nomeSorteado === equipeUm[i]){
                nomeJaExiste = true;
                break;
            }    
        }

        // Se o nome não estiver presente no equipeUm, inserimos o nome
        if(!nomeJaExiste){
            equipeUm.push(nomeSorteado);
        }
        }

        for(let i = 0; i < listaDeNomes.length; i++) {
            // Verifica se o nome da lista já está na equipeUm
            if (!equipeUm.includes(listaDeNomes[i])) {
                // Se não estiver, adiciona na equipeDois
                equipeDois.push(listaDeNomes[i]);
            }
        }

        //console.log(`Equipe 1: ${equipeUm}`);
        mostraEquipe(equipeUm, 'equipe_um');
        mostraEquipe(equipeDois, 'equipe_dois');
});


