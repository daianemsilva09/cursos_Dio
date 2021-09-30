/* //O typeScript mostra o erro na hora da codificação
function soma(a: number, b: number) {
    return a + b
}
soma(2, 3)
*/

//types - junçoes

//interfaces - contratos

/*
//criando a classe
interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico'
    executarRugido(alturaEmDecibeis: number): void;
}
//inserir visão noturna no IAnimal
interface IFelino extends IAnimal {
    visaoNoturna: boolean
} 
//colocando altura 
const animal: IAnimal = {
    nome: 'elefante',
    tipo: 'terrestre'
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}` db)
}

const felino: IFelino ={
    nome: 'leao',
    tipo: 'terrestre',
    visaoNoturna: true

}
*/
//pegando o input
const input = document.getElementById('input') as HTMLInputElement;
// evento
input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
})

//generic types
//mudando tipo de variaveis 

function adicionaApendiceALista<t>(array: t[], valor: t) {
    return array.map(() => valor);
}

adicionaApendiceALista([1, 2, 3], 3)

//
interface IUsuario {
    id: string;
    email: string;
}

interface IAdmin extends IUsuario {
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario | IAdmin) {
    if ('cargo' in usuario) {
        //ir para area adm
    }
    //ir para area usuario
}

//


interface IUsuario {
    id: string;
    email: string;
    //opcional
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funconario'
}


function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        //ir para area adm
    }
    //ir para area usuario
}




