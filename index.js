const prompt = require('prompt-sync')({sigint: true});

const {adicionar, listar, editar} = require('./modulo.js')

while (true) {
    console.log(`
         SISTEMA DE VOTOS:
    1. Votar
    2. Listar todos votos
    3. Atualizar um voto
    0. Sair
    `);

    let opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            adicionar();
            break;
        case '2':
            listar();
            break;
        case '3':
            editar();
            break;
        case '0':
            console.log('Saindo do sistema. Até logo!');
            process.exit();
        default:
            console.log('Opção inválida, digite uma opção válida!');
    }
}