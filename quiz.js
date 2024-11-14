
let titulo     = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso      = document.querySelector('#aviso')
let progresso  = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar
const nome = document.getElementById('nome').value;
// AUDIO
let somAcerto   = document.querySelector('#somAcerto')
let somErro     = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Alternativa D",
    correta      : "0",
}
const q1 = {
    numQuestao: 1,
    pergunta: "Em que ano o homem pisou pela primeira vez na Lua?",
    alternativaA: "1969",
    alternativaB: "1957",
    alternativaC: "1975",
    alternativaD: "1981",
    correta: "1969",
}
const q2 = {
    numQuestao: 2,
        pergunta: "Quem pintou o quadro A noite estrelada?",
        alternativaA: "Frida Kahlo",
        alternativaB: "Monet",
        alternativaC: "Van Gogh",
        alternativaD: "Leonardo Da Vince",
        correta: "Van Gogh",
}
const q3 = {
    numQuestao   : 3,
    pergunta     : "Quem escreveu  a famosa obra brasileira Dom Casmurro?",
    alternativaA : "Capitu e Bentinho",
    alternativaB : "Carlos Drumond de Andrade",
    alternativaC : "Fernando Sabino",
    alternativaD : "Machado de Assis",
    correta      : "Machado de Assis",
}
const q4 = {
    numQuestao   : 4,
    pergunta     : "Qual é a função principal do coração? ",
    alternativaA : "Filtrar o sangue",
    alternativaB : "Amar",
    alternativaC : "Bombear o sangue",
    alternativaD : "Conduzir proteinas",
    correta      : "Bombear o sangue",
}
const q5 = {
    numQuestao   : 5,
    pergunta     : "Qual é o fenômeno que ocorre quando a Lua passa entre a Terra e o Sol? .",
    alternativaA : "Eclipse lunar",
    alternativaB : "Eclipse solar",
    alternativaC : "Lua nova",
    alternativaD : "Super lua",
    correta      : "Eclip´se Solar",
}
const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual é o nome do famoso relógio de Big Ben?",
    alternativaA : "Big Ben é o nome do relógio",
    alternativaB : "É o nome da torre",
    alternativaC : "Big Ben é o nome do sino",
    alternativaD : "É uma referência a um famoso relógio francês",
    correta      : "Big Ben é o nome do sino",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Quem é considerado o pai da filosofia ocidental?",
    alternativaA : "Platão",
    alternativaB : "Aristóteles",
    alternativaC : "Sócrates",
    alternativaD : "Descartes",
    correta      : "Sócrates",
}
const q8 = {
    numQuestao   : 8,
    pergunta     : "Na mitologia grega, quem foi o herói que matou a Medusa, cujos olhos transformavam em pedra qualquer ser vivo?",
    alternativaA : "Hércules",
    alternativaB : "Perseu",
    alternativaC : "Aquiles",
    alternativaD : "Ulisses",
    correta      : "Perseu",
}
const q9 = {
    numQuestao   : 9,
    pergunta     : "Em que ano ocorreu a queda do Muro de Berlim?",
    alternativaA : "1985",
    alternativaB : "1987",
    alternativaC : "1989",
    alternativaD : "1991",
    correta      : "1989",
}
const q10 = {
    numQuestao   : 10,
    pergunta     : "Qual foi o primeiro computador pessoal a ser comercializado em larga escala, lançado pela IBM em 1981?",
    alternativaA : "Apple Macintosh",
    alternativaB : "IBM PC",
    alternativaC : "Commodore 64",
    alternativaD : "PCU IBM",
    correta      : "IBM PC",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    progresso.value = parseInt(progresso.value) + 1
    //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if(numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if(nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);
    
    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto"+ s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        //location.reload();
        instrucoes.classList.remove('placar')
        // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}