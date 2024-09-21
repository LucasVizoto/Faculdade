/*
----------------------------------------------------------------
 O trabalho de manipulação de Strings abaixo foi feito pelos alunos:

 LUCAS EDUARDO ALVES VIZOTO - 24691 - CIÊNCIAS DA COMPUTAÇÃO
 ANA LAURA SILVA PEREIRA - 24696 - CIÊNCIAS DA COMPUTAÇÃO
----------------------------------------------------------------
*/
const exercicio1 = () => {
    texto = 'React é um framework útil'
    let i = 0
    while (texto[i] != undefined) {
        i++
    }
    console.log(`O texto possui ${i} caracteres`)
}

const exercicio2 = (texto) => {
    // Ler um nome e imprima o nome somente se a primeira letra do nome for ‘a’ (maiu´scula ou minu´scula).
    if (texto[0] == 'a') {
        console.log(`Seu texto começa com 'a' seu texto é: ${texto}`)
    }
    
    else { 
        console.log(`Seu texto não começa com a... `) 
    }
}

const exercicio3 = (texto) => {
    // leia um nome e imprima as 4 primeiras letras do nome.

    let nova_string = ''
    for (let i = 0; i < 4; i++) {
        nova_string += texto[i]
    }
    console.log(nova_string)
    //ou
    console.log(texto.substring(0, 4))
}

const exercicio4 = (texto) => {
    // Digite um nome, calcule e retorne quantas letras tem esse nome.
    texto.split(' ').join('') //o split explode num vetor e o join junta, os parametrs são as formas que eles farão isso
    console.log(texto.length)
}

const exercicio5 = () => {
    // Ler nome, sexo e idade. Se sexo for feminino e idade menor que 25,
    // imprime o nome da pessoa e a palavra “ACEITA”, caso contra´rio imprimir “NA˜ O ACEITA”.
    let pessoa = {
        nome: String(prompt('Digite o nome: ')),
        idade: Number(prompt('digite a idade: ')),
        sexo: String(prompt('Escreva o sexo: ')).toLowerCase()
    }
    pessoa.idade < 25 && pessoa.sexo == 'feminino' ? console.log('ACEITA') : console.log('NÃO ACEITA')
}

const exercicio6 = (texto) => {
    // Compara duas strings (na˜o use a func¸a˜o strcmp). 

    let texto_novo = String(prompt('Digite outro valor')).toLowerCase()
    if (texto == texto_novo) {
        console.log('OS TEXTOS SÃO IGUAIS')
    }
}
const exercicio7 = (texto) => {
    // Conte o nu´mero de 1’s que aparecem em um string.  Exemplo: “0011001” -> 3
    let cont = 0
    texto.split('').forEach(element => {
        element == '1' && cont++
    });
    console.log(`Na string digitada temos ${cont} 1's`)
}

const exercicio8 = (texto) => {
    // Substitui as ocorreˆncias de um caractere ‘0’ em uma string por outro caractere ‘1’.
    let nova_string = texto.replace(/\d+/g, '1') //subtitui todos os números por 1
    console.log(`Seu texto é ${nova_string}`)
}


const exercicio9 = (texto) => {
    // 9.	Receba uma palavra e a imprima de tra´s-para-frente
    let novo_texto = texto.split('').reverse() //explode cada letra num vetor, reverte o vetor
    console.log(novo_texto.join('')) //concatena todos os itens do vetor
}

const exercicio10 = () => {
    // 10.	Receba do usua´rio uma string. O programa imprime a 
    // string sem suas vogais.
    let texto = String(prompt('Digite seu texto: ')).toLowerCase()
    let novo_texto = texto.replace(/[aeiou]/g, '') //replace retorna uma nova string, a array no primeiro parametro são os valores a serem removidos
    console.log(novo_texto)
}

const exercicio11 = (texto) => {
    // 11.	Receba uma palavra e calcule quantas vogais (a, e, i, o, u) 
    // possui essa palavra. Entre com um caractere (vogal ou consoante) 
    // e substitua todas as vogais da palavra dada por esse caractere.
    let cont = 0

    texto.split("").forEach(element => {
        if (element == 'a' || element == 'e' || element == 'i' || element == 'o' || element == 'u') {
            cont++
        }
    }) //forEach para percorrer toda a String e contar a quantidade de vogais nela

    let letra_usuario = prompt('Digite uma letra')
    let texto_final = texto.replace(/[aeiouAEIOU]/g, letra_usuario) //substitui tudo pelo valor digitado pelo usuário
    console.log(`Seu texto tem ${cont} vogais, que, substituidas pela letra que colocaste fica: ${texto_final}`)
}

const exercicio12 = (texto) => {
    // 12.	Ler uma frase e contar quantos caracteres sa˜o espac¸os em brancos.   
    let cont = 0
    texto.split('').forEach(element => {
        element == ' ' && cont++
    })
    console.log(`${cont} espaços em branco`)
}

const exercicio13 = (texto) => {
    // 13.	Leia um vetor contendo letras de uma frase inclusive os espac¸os 
    // em branco.  Retirar os espac¸os em branco do vetor e depois escrever 
    // o vetor resultante.
    let array_texto = texto.split('')
    for (let i = 0; i < array_texto.length; i++) {
        if (array_texto[i] == ' ') {
            array_texto[i] = ''
        }
    }
    console.log(array_texto)
}

const exercicio14 = () => {
    // 14.	Fac¸a um programa em que troque todas as ocorreˆncias de uma letra
    // L1 pela letra L2 em uma string. A string e as letras L1 e L2 devem 
    // ser fornecidas pelo usua´rio.
    let texto = prompt(`Digite aqui seu texto: `)
    let l1 = prompt(`Digite a letra a ser substituida: `)
    let l2 = prompt(`Digite a letra a ser colocada no lugar: `)
    new_text = texto.replace(l1, l2)
    console.log(`Seu novo texto é : ${new_text}`)
}

const exercicio15 = () => {
    // 15.	Leia a idade e o primeiro nome de 10 pessoas. Seu programa deve
    // terminar quando uma idade negativa for digitada. Ao terminar, seu 
    // programa deve escrever o nome e a idade das pessoas mais 
    // jovens e mais velhas.
    let vetor_Pessoa = [], idade_mais_velha, nome_velha, idade_mais_nova, nome_nova
    //inicialização de variáveis

    for (let i = 0; i < 10; i++) {
        let obj_Pessoa = {
            nome: prompt('digite seu primeiro nome: '),
            idade: Number(prompt('idade: '))
        } //criação de um objeto com os valores
        if (obj_Pessoa.idade < 0) { break } //se negativo quebra o laço
        vetor_Pessoa.push(obj_Pessoa) //se passar pela quebra, significa que pode dar push então coloca num vetor
    }

    idade_mais_nova = vetor_Pessoa[0].idade //set das idades iniciais pare comparação
    idade_mais_velha = vetor_Pessoa[0].idade

    vetor_Pessoa.forEach(element => { //para cada elemento do vetor ele vai executar, ou seja, vai manipular os objetos
        if (element.idade > idade_mais_velha) {
            idade_mais_velha = element.idade
            nome_velha = element.nome
        } //comparação da mais velha
        else if (element.idade < idade_mais_nova) {
            idade_mais_nova = element.idade
            nome_nova = element.nome
        } // comparação da mais nova
    })
    //imprimir no console os resultados
    console.log(`O nome da pessoa mais velha é ${nome_velha} com ${idade_mais_velha} anos
               \nEnquanto o nome da mais nova é ${nome_nova} com ${idade_mais_nova} anos`)
}

const exercicio16 = (frase, outra_frase) => {
    // 16.Receba duas frases distintas e imprima de maneira
    // invertida, trocando as letras A por *.
    let veto1 = frase.split('').reverse() //salvando numa variável o vetor gerado pelo split e inverito pelo reverse
    let veto2 = outra_frase.split('').reverse()
    let juncao = veto1.join('') + veto2.join('') //junção de vetor em string e concatenação das frases 
    juncao = juncao.replace(/A/g, '*') //substitui A por * como pedido
    console.log(juncao)
}
const exercicio17 = (s, i, j) => {
    // 17.	Recebe uma string S e inteiros na˜o-negativos I e J e imprima o
    // segmento S[I..J].
    let pedaco = s.slice(i, j)
    console.log(pedaco)
}

const exercicio18 = (s, c, i) => {
    // 18.	Recebe  do  usua´rio  uma  string  S,  um  caractere  C,  e  uma
    // posic¸a˜o I e devolve o ´ındice da primeira posic¸a˜o da string
    // onde foi encontrado o caractere C. A procura deve comec¸ar a 
    // partir da posic¸a˜o I.

    let string_cortada = s.substring(i) //fatiamento de String
    let contagem
    //declarar variáveis

    for (let j = 0; j < string_cortada.length; j++) {
        if (string_cortada[j] == c) {
            contagem = j + 1
            break //sai do laço pq achou
        }
    }
    console.log(`O indice em que aparece o caractere informado, a partir do indice 
    ${i} é ${contagem}`)
    return contagem //o exercício pede para retornar então coloquei return
}

const exercicio19 = () => {
    // 19.	leia duas palavras e diga qual deles vem primeiro na ordem 
    // alfabe´tica. Dica: ‘a’ e´ menor do que ‘b’
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz' //variavel com o alfabeto para se basear no length
    let palavra = prompt(' ').toLowerCase(), cont_p1
    let outra_palavra = prompt(' ').toLowerCase(), cont_p2

    for (let i = 0; i < alfabeto.length; i++) {
        if (palavra[0] == alfabeto[i]) {
            cont_p1 = i
            break //quebra o laço caso encontre
        }
    }//comparação da primeira palavra

    for (let i = 0; i < alfabeto.length; i++) {
        if (outra_palavra[0] == alfabeto[i]) {
            cont_p2 = i
            break
        }
    } //comparação da segunda palavra

    //imprimindo no console , com base no resultado obtido
    if (cont_p1 < cont_p2) { console.log(`A palavra ${cont_p1} vem primeiro`) }
    else if (cont_p1 == cont_p2) { console.log(`Ambas palavras começam com a mesma letra`) }
    else { console.log(`A palavra ${cont_p2} vem primeiro`) }
}

const exercicio20 = (texto) => {
    // 20.	O co´digo de Ce´sar e´ uma das mais simples e conhecidas
    // te´cnicas de criptografia. E´  um tipo de substituic¸a˜o na qual 
    // cada letra do texto e´ substitu´ıda por outra, que se apresenta 
    // no alfabeto abaixo dela um nu´mero fixo de vezes.  
    // Por exemplo, com uma troca de treˆs posic¸o˜es, ‘A’ seria 
    // substitu´ıdo por ‘D’, ‘B’ se tornaria ‘E’, e assim por diante. 
    // Fac¸a uso desse Co´digo de Ce´sar (3 posic¸o˜es), entre com uma string 
    // e retorne a string codificada. Exemplo:

    // String: a ligeira raposa marrom saltou sobre o cachorro cansado
    // Nova string: D OLJHLUD UDSRVD PDUURP VDOWRX VREUH R FDFKRUUR FDQVDGR
    let texto_tratado = texto.toLowerCase(), texto_novo = ''
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz' //Alfabeto a ser comparado
    let array_alfabeto = alfabeto.split('') //Splitar o alfabeto num vetor para usar o indice
    texto_tratado.split('').forEach(element => { //forEach para navegar na string que foi transformada num vetor
        if (element == ' ') { texto_novo += element } // Se for um espaço ele sóscrescenta e ignora a cifra de cesar
        else { texto_novo += alfabeto[(array_alfabeto.indexOf(element)) + 3] } //se naão cai no indice do alfabeto e substitui no novo texto
        //o +3 é a quantidade de casas que vai pular, indexOf para resgatar o lugar que está o item atual
    })
    console.log(texto_novo.toUpperCase()) //imprimir no console com o upper
}


ex21 = () => {
    const frase = prompt("Digite uma frase: ")
    const str = frase.split('').filter(char => char !== ' ').join('').toUpperCase()
    const reverse = str.split('').reverse().join('')

    if (str === reverse) {
        console.log(`É um palíndromo.`)
    }

    else {
        console.log(`Não é um palíndromo.`)
    }
}



ex22 = () => {
    const frase1 = String(prompt("Digite uma frase: "))
    const frase2 = String(prompt("Digite outra frase: "))

    const termina = frase1.endsWith(frase2);

    if (termina) {
        console.log("Está contida");
    }

    else {
        console.log("Não está contida ");
    }
}



ex23 = () => {
    const frase1 = String(prompt("Digite uma frase: "))
    const frase2 = String(prompt("Digite outra frase: "))
    const n = Number(prompt("Digite um número: "))

    const aux = frase2.slice(0, n);
    const concat = frase1 + aux + '/0'
    console.log(concat)
}


ex24 = () => {
    const frase1 = String(prompt("Digite uma frase: ").toUpperCase())
    const frase2 = String(prompt("Digite outra frase: ").toUpperCase())

    let cont = 0

    for (let i = 0; i < frase1.length; i++) {
        if (frase2.includes(frase1[i])) {
            cont++
        }
    }

    console.log(cont)
}



ex25 = () => {
    data = String(prompt("Digite uma data(DD/MM/AAAA): "))

    if (data.length === 10 && data[2] === '/' && data[5] === '/') {

        const divide = data.split('/');
        const dia = parseInt(divide[0], 10);
        const mes = parseInt(divide[1], 10);
        const ano = parseInt(divide[2], 10);

        if (!isNaN(dia) && !isNaN(mes) && !isNaN(ano)) {
            console.log("Dia:", dia);
            console.log("Mês:", mes);
            console.log("Ano:", ano);
        }

        else {
            console.log("Formato inválido.");
        }
    }

    else {
        console.log("Formato inválido.");
    }
}



//####################################################################################
//EXERCÍCIO 2
// 1. Ler uma string S1 (tamanho ma´ximo 20 caracteres);
// 2. Imprimir o tamanho da string S1;
// 3. Comparar a string S1 com uma nova string S2 fornecida pelo usua´rio e imprimir o resultado da comparac¸a˜o;
// 4. Concatenar a string S1 com uma nova string S2 e imprimir na tela o resultado da concatenac¸a˜o;
// 5. Imprimir a string S1 de forma reversa;
// 6. Contar quantas vezes um dado caractere aparece na string S1. Esse caractere desse ser informado pelo usua´rio;
// 7. Substituir a primeira ocorreˆncia do caractere C1 da string S1 pelo caractere C2. Os caracteres C1 e C2 sera˜o lidos pelo usua´rio;
// 8. Verificar se uma string S2 e´  substring de S1.  A string S2 deve ser informada pelo usua´rio;
// 9. Retornar uma substring da string S1.  Para isso o usua´rio deve informar a partir de qual posic¸a˜o deve ser criada a substring e qual e´ o tamanho da substring
// 0.SAIR

const exercicio2_da_lista = () => {
    do {
        let escolha = Number(prompt('Escolha uma das opções a seguir sendo: \n 1. Ler uma string S1 (tamanho máximo 20 caracteres);\n 2. Imprimir o tamanho da string S1; \n 3. Comparar a string S1 com uma nova string S2 fornecida pelo usuário e imprimir o resultado da comparação; \n 4. Concatenar a string S1 com uma nova string S2 e imprimir na tela o resultado da concatenação; \n 5. Imprimir a string S1 de forma reversa;\n 6. Contar quantas vezes um dado caractere aparece na string S1. Esse caractere desse ser informado pelo usua´rio;\n 7. Substituir a primeira ocorreˆncia do caractere C1 da string S1 pelo caractere C2. Os caracteres C1 e C2 sera˜o lidos pelo usua´rio; \n 8. Verificar se uma string S2 e´  substring de S1.  A string S2 deve ser informada pelo usua´rio;\n 9. Retornar uma substring da string S1.  Para isso o usua´rio deve informar a partir de qual posic¸a˜o deve ser criada a substring e qual e´ o tamanho da substring \n0. SAIR'))
        let string_S1 = prompt('Digite seu texto').toLowerCase()
        switch (escolha) {
            case 1:

                while (string_S1.length > 20) {
                    string_S1 = prompt(`O texto informado tinha ${string_S1.length}, informe novamente(max: 20char)`).toLowerCase()
                }
                break

            case 2:
                console.log(`O tamanho da string é ${string_S1.length}`)
                break

            case 3:
                let string_S2 = prompt(`Digite texto: `).toLowerCase()
                if (string_S2 == string_S1) {
                    console.log('As strings são iguais')
                }
                else {
                    console.log('São diferente')
                }
                break

            case 4:
                console.log(string_S1 + string_S2)
                break
            case 5:
                let novo_texto = string_S1.split('').reverse()
                console.log(novo_texto.join(''))
                break

            case 6:
                const frase1 = String(prompt("Digite uma frase: ").toUpperCase())
                const caracter = String(prompt('Digite um caracter: ').toUpperCase())
                let total = 0;

                for (let i = 0; i < frase1.length; i++) {
                    if (frase1[i] === caracter) {
                        total++
                    }
                }
                break

            case 7:
                let c1 = prompt('Informe o caractere que deseja substituir: ')
                let c2 = prompt('Informe o caractere que deseja colocar: ')
                string_S1.replace(c1, c2)
                break

            case 8:
                // Verificar se uma string S2 e´  substring de S1.  A string S2 deve ser informada pelo usua´rio;
                let nova_string_S2 = prompt('Digite texto:').toLowerCase()
                if (string_S1.indexOf(nova_string_S2) != -1) {
                    console.log(`A nova string informada É uma substring de: \n${string_S1} \n\n${nova_string_S2}`)
                }
                else {
                    console.log(`A string infomada NÃO é uma substring de: \n${string_S1}`)
                }
                break

            case 9:
                let tamanho_substring = Number(prompt('Digite o indice do lugar máximo de onde deseja cortar: '))
                let inicio_substring = Number(prompt(`Digite de onde a substring deve começar (o tamanho máximo é ${string_S1.length}): `))
                let substring_gerada = string_S1.substring(inicio_substring, tamanho_substring)
                console.log(substring_gerada)
                break
        }
    } while (escolha != 0)
}   
// let vetor = [[[[[[[[[[[[[[[12]]]]]]]]]]]]]]]

// vetor.forEach(item => {
//     let fim = []
//     while (typeof item === Array) {
//         fim == item
//     }  
//     console.log(fim)
// })


let a = 'Please visit Microsoft! Microsoft Microsoft Microsoft'
console.log(a.replace(/MICROSOFT/i,"W3Schools"))