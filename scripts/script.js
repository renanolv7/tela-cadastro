


function submitInfo() {

    // Pegando os elementos da página
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Chamando minhas funções e atribuindo nas variáveis
    let erroDeNome = verificaNome(name);
    let erroDeEmail = verificaEmail(email);
    let erroDeSenha = verificaSenha(password);

    // Verifica se há erros em qualquer um dos campos - se tiver ERRO em algum dos retornos, as veriáveis erroDeNome
    // erroDeEmail e erroDeSenha irão receber esse valor
    if (erroDeNome || erroDeEmail || erroDeSenha) {
        return; // Encerra a função se houver erro em algum campo
    }

    // Aqui meu objeto info_cadastro irá receber chaves e valores de name, email e senha
    let info_cadastro = {
        'nome': name,
        'email': email,
        'password': password
    };

    alert("CADASTRO REALIZADO COM SUCESSO! ✅")
    console.log(info_cadastro)

}

// Deicando as funções separadas para cada verificação
function verificaNome(name) {

    if (name == '') {
        alert('Campo NOME vazio, por favor preencha!');
        return true; // Retorna true se houver erro
    }

    if (name.length < 3) {
        alert('O nome deve ter pelo menos 3 caracteres!');
        return true;
    }

    for (let i = 0; i < name.length; i++) {

        // isNaN = Not a Number - verifica se é um número
        // ! inverte o sentido da função
        // como um espaço não é uma letra, preciso fazer a verificação do espaço em branco tbm
        if (!isNaN(name[i]) && name[i] !== ' ') {
            alert('O nome não pode conter números!');
            return true;
        }


    }

    return false;

}

function verificaEmail(email) {

    // Trabalhando com variáveis boleanas
    let temArroba = false;
    let pontoArroba = false;

    // Verificar email
    if (email === '') {
        alert('Campo EMAIL vazio, por favor preencha!');
        return true;
    }


    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            temArroba = true;
            break;
        }
    }

    // se não tem arroba faça o alert
    if (!temArroba) {
        alert('Email informado não contém arroba!')
        return true;
    }

    if (email[0] == '@') {
        alert('Sinal de arroba não pode estar no começo do email!')
        return true;
    }

    // pega o indice de trás pra frente
    if (email[email.length - 1] === '@') {
        alert(' Sinal de arroba não pode estar ao final do email!')
        return true;
    }

    for (let i = 0; i < email.length; i++) {
        if (email[i] === '@') {
            temArroba = true;
        }
        if (temArroba && email[i] === '.') {
            pontoArroba = true;
        }

    }

    if (!pontoArroba) {
        alert('Email não contém ponto depois do arroba!');
        return true;
    }

    // CODIGO NÃO TÁ FUNCIONANDO - NÃO SEI COMO FAZER
    // Confirmar que apenas caracteres permitidos estão presentes. 
    // Para isso, considere apenas letras, números, pontos, hífens e underscores.

    // let caracterPermit = 'abcdefghijiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ.+-*&=_@'
    // let caracterNaoPermt = ""
    // let temCaractEspec = false

    // for (let i = 0; i < email.length; i++) {

    //     for (let x = 0; x < caracterPermit.length; x++) {
    //         if (email[i] === caracterPermit[x]) {
    //             temCaractEspec = true
    //             break;
    //         }
    //     }

    //     if (temCaractEspec) {
    //         break;
    //     }
    // }

    // if (!temCaractEspec) {
    //     caracterNaoPermt += email[i];
    //     alert("Os caracteres:" + caracterNaoPermt + " não são permitidos no email")

    // }


    return false;

}

function verificaSenha(password) {

    let caractEspecial = '!@#$%¨&*()'
    let temCaracter = false
    let temMaiusc = false
    let contNumero = 0


    if (password == '') {
        alert('Campo de SENHA vazio, por favor preencha!');
        return true; // Retorna true se tiver erro
    }

    // Senha:
    // Deverá ter ao menos 8 dígitos
    if (password.length < 8) {
        alert('A senha deve conter ao menos 8 dígitos!');
        return true;
    }

    // Deverá ter ao menos um dos seguintes caracteres especiais: !@#$%¨&*()
    for (let i = 0; i < password.length; i++) {
        // EXPLICAÇÃO DO CÓDIGO ABAIXO
        // A variável "caractEspecial" tem um conjunto de caracteres especiais, se eu comparar cada posição da minha senha 
        // com a variavel caractEspecial vai dar erro, pois está comparando com todo conteúdo da minha variável
        // Por isso preciso de um FOR para percorrer a minha senha e outro para percorrer a minha variável caractEspecial

        for (let c = 0; c < caractEspecial.length; c++) {
            if (password[i] === caractEspecial[c]) {
                temCaracter = true;
                break;
            }
        }

        if (temCaracter) {
            break;
        }

    }

    if (!temCaracter) {
        alert('Senha não contém caracter especial');
        return true;
    }


    // Deverá possuir ao menos 2 números
    for (let i = 0; i < password.length; i++) {

        if (!isNaN(password[i])) {
            contNumero = password[i]
        }

    }

    if (contNumero < 2) {
        alert('Senha necessita ter ao menos 2 números...')
        return true;
    }

    // Deverá possuir ao menos uma letra maiúscula
    for (let i = 0; i < password.length; i++) {

        if ((password[i] === password[i].toUpperCase()) && (password[i] !== "@" && isNaN(parseInt(password[i])))) {
            temMaiusc = true;
            break;
        }

    }

    if (!temMaiusc) {
        alert("Senha informada não contém letra maiúscula...")
        return true;
    }


    return false;

}