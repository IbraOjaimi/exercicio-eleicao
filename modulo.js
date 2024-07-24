const prompt = require('prompt-sync')({ sigint: true });

let urna = [];
let seguranca = [];

function adicionar() {
    let nome = prompt('Digite seu nome: ');
    let senha;
    
    while (true) {
        senha = prompt('Digite uma senha contendo 8 dígitos: letras maiúsculas, minúsculas e caracteres especiais: ');

        const senhaValida = senha.length >= 8 &&
                            /[A-Z]/.test(senha) &&
                            /[a-z]/.test(senha) &&
                            /[!@#$%^&*(),.?":{}|<>]/.test(senha);

        if (!senhaValida) {
            console.log('Senha inválida. Digite novamente!');
        } else {
            break;
        }
    }

    console.log(`Escolha seu candidato: 
    1. Candidato 1
    2. Candidato 2
    3. Candidato 3
    4. Candidato 4`);

    let candidatoOpcao = parseInt(prompt('Escolha uma opção: '));
    let candidato = ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4"][candidatoOpcao - 1];

    if (candidato) {
        seguranca.push({ senha });
        urna.push({ nome, candidato });
        console.log('Voto adicionado com sucesso!', urna);
    } else {
        console.log('Candidato inválido!');
    }
}

function listar() {
    if (urna.length === 0) {
        console.log('Nenhum voto cadastrado.');
    } else {
        let contagemVotos = {
            "Candidato 1": 0,
            "Candidato 2": 0,
            "Candidato 3": 0,
            "Candidato 4": 0
        };

        urna.forEach((voto, index) => {
            console.log(`${index + 1}. Candidato: ${voto.candidato}`);
            if (contagemVotos[voto.candidato] !== undefined) {
                contagemVotos[voto.candidato]++;
            }
        });

        console.log("\nContagem de votos:");
        for (let candidato in contagemVotos) {
            console.log(`${candidato}: ${contagemVotos[candidato]} voto(s)`);
        }
    }
}

function editar() {
    listar();
    let resposta = prompt('Deseja editar seu voto? (sim/nao) ');

    if (resposta === 'sim') {
        let nomeEleitor = prompt('Digite seu nome: ');
        let senhaEleitor = prompt('Digite sua senha: ');
        let voto = urna.find(v => v.nome === nomeEleitor);
            voto = seguranca.find(v => v.senha === senhaEleitor);

        if (voto) {
            console.log(`Escolha o novo candidato: 
            1. Candidato 1
            2. Candidato 2
            3. Candidato 3
            4. Candidato 4`);

            let novoVotoOpcao = parseInt(prompt('Escolha um novo candidato: '));
            let novoCandidato = ["Candidato 1", "Candidato 2", "Candidato 3", "Candidato 4"][novoVotoOpcao - 1];

            if (novoCandidato) {
                voto.candidato = novoCandidato;
                console.log('Candidato atualizado com sucesso!', voto);
            } else {
                console.log('Opção de candidato inválida!');
            }
        } else {
            console.log('Nome não encontrado!');
        }
    } else if (resposta === 'nao') {
        console.log('Voltando ao menu!');
    } else {
        console.log('Opção inválida!');
    }
}

module.exports = {
    adicionar,
    listar,
    editar,
};
