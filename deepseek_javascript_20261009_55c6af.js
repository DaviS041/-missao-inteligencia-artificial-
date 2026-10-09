// Elementos do DOM
const tituloElemento = document.getElementById('titulo');
const textoElemento = document.getElementById('texto');
const opcoesElemento = document.getElementById('opcoes');

// Estrutura de dados da história (Baseado nas suas fotos)
const historia = {
    inicio: {
        titulo: "Você decide o futuro da IA",
        texto: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        opcoes: [
            { texto: "Isso é assustador", proximo: "assustador" },
            { texto: "Isso é maravilhoso", proximo: "maravilhoso" }
        ]
    },
    maravilhoso: {
        titulo: "Você decide o futuro da IA",
        texto: "Com a descoberta desta tecnologia, chamada Inteligência Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequência de aulas sobre ela. No fim de uma aula ela pede que você escreva um trabalho sobre o uso de tecnologia em sala de aula. Qual atitude você toma?",
        opcoes: [
            { 
                texto: "Utilizar uma ferramenta de busca na internet que utiliza IA para que ela ajude a encontrar informações relevantes para o trabalho e explique numa linguagem que facilite o entendimento.", 
                proximo: "final_bom" 
            },
            { 
                texto: "Escrever o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.", 
                proximo: "final_neutro" 
            }
        ]
    },
    assustador: {
        titulo: "Você decide o futuro da IA",
        texto: "Você decidiu que a IA é perigosa e prefere se afastar. No entanto, a tecnologia avança rapidamente. Como você lida com isso?",
        opcoes: [
            { texto: "Tentar entender como funciona para não ser pego de surpresa.", proximo: "final_bom" },
            { texto: "Ignorar completamente e continuar usando métodos tradicionais.", proximo: "final_neutro" }
        ]
    },
    final_bom: {
        titulo: "Fim da Jornada",
        texto: "Você escolheu usar a IA como uma ferramenta de auxílio. Isso permitiu que você aprendesse mais rápido e tivesse ideias mais criativas. O futuro é promissor!",
        opcoes: [
            { texto: "Recomeçar", proximo: "inicio" }
        ]
    },
    final_neutro: {
        titulo: "Fim da Jornada",
        texto: "Você decidiu fazer do seu jeito. Embora tenha funcionado, você percebeu que poderia ter economizado tempo e aprendido novas habilidades se tivesse explorado a tecnologia.",
        opcoes: [
            { texto: "Recomeçar", proximo: "inicio" }
        ]
    }
};

// Função para renderizar a tela atual
function renderizarTela(chaveDaTela) {
    const telaAtual = historia[chaveDaTela];
    
    // Atualiza título e texto
    tituloElemento.innerText = telaAtual.titulo;
    textoElemento.innerText = telaAtual.texto;
    
    // Limpa os botões antigos
    opcoesElemento.innerHTML = '';
    
    // Cria os novos botões
    telaAtual.opcoes.forEach(opcao => {
        const botao = document.createElement('button');
        botao.innerText = opcao.texto;
        
        // Adiciona o evento de clique para avançar na história
        botao.addEventListener('click', () => {
            renderizarTela(opcao.proximo);
        });
        
        opcoesElemento.appendChild(botao);
    });
}

// Inicia o jogo assim que a página carregar
window.onload = () => {
    renderizarTela('inicio');
};