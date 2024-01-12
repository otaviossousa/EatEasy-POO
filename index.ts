/* Projeto 1: Plataforma de Reservas para Restaurantes (Grupo 03: Otavio, José Vitor)
    
    Objetivos:

    Aplicar conceitos de POO na criação de um sistema de reservas.                                                         =   SIM
    Praticar a interação com um banco de dados para armazenamento e recuperação de dados.                                  =   NAO
    Desenvolver habilidades em criação de interfaces e lógica de negócios.                                                 =   SIM

    Funcionalidades:

    Busca de Restaurantes: Permitir a busca por localização ou tipo de cozinha.                                            =   SIM
    Gerenciamento de Reservas: Permitir que usuários façam, alterem ou cancelem reservas.                                  =   SIM
    Visualização de Mesas Disponíveis: Mostrar as mesas disponíveis em diferentes horários.                                =   SIM
    Perfil de Restaurante: Cada restaurante possui um perfil com informações e avaliações.                                 =   SIM

    Conceitos de POO:

    Encapsulamento: Uso de classes para encapsular lógicas relacionadas a restaurantes, reservas e usuários.               =   SIM
    Herança: Criação de classes base e derivadas para diferentes tipos de usuários (clientes, gerentes de restaurante).    =   SIM
    Polimorfismo: Implementação de diferentes estratégias de busca para restaurantes.                                      =   SIM
    Exceções: Tratamento de situações como falta de disponibilidade ou conflitos de reserva.                               =   SIM

*/


// Classe base para usuários
abstract class Usuario {
    private _nome: string;
    private _cpf: string;
    private _email: string;
    private _senha: string;

    constructor(nome: string,cpf: string, email: string, senha: string){
        this._nome = nome;
        this._cpf = cpf;
        this._email = email;
        this._senha = senha;
    }

    get nome(): string {
        return this._nome;
    }

    get cpf(): string {
        return this._cpf;
    }

    get email(): string {
        return this._email;
    }

    get senha(): string {
        return this._senha;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    set email(email: string) {
        this._email = email;
    }

    set senha(senha: string) {
        this._senha = senha;
    }

    toString(): string {
        return `Usuario: ${this.nome} ${this.cpf} (${this.email})`;
    }

    validarEmail(email: string): boolean {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return regex.test(email);
    }

    validarSenha(senha: string): boolean {
        const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return regex.test(senha);
    }

    validarCPF(cpf: string): boolean {
        const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
        return regex.test(cpf);
    }

    validarUsuario(): boolean {
        return this.validarEmail(this.email) && this.validarSenha(this.senha) && this.validarCPF(this.cpf);
    }
}


// Classe para clientes
class Cliente extends Usuario {
    private _reservas: Reserva[];

    constructor(nome: string,cpf: string, email: string, senha: string){
        super(nome,cpf, email, senha);
        this._reservas = [];
    }

    get reservas(): Reserva[] {
        return this._reservas;
    }

    set reservas(reservas: Reserva[]) {
        this._reservas = reservas;
    }

    toString(): string {
        return `Cliente: ${this.nome} (${this.email})`;
    }
}

// Classe para gerentes de restaurantes
class GerenteRestaurante extends Usuario {
    private _restaurante: Restaurante;

    constructor(nome: string,cpf: string, email: string, senha: string, restaurante: Restaurante){
        super(nome,cpf, email, senha);
        this._restaurante = restaurante;
    }

    get restaurante(): Restaurante {
        return this._restaurante;
    }

    set restaurante(restaurante: Restaurante) {
        this._restaurante = restaurante;
    }

    toString(): string {
        return `Gerente: ${this.nome} (${this.email})`;
    }
}

class Localizacao {
    private _rua: string;
    private _numero: string;
    private _bairro: string;
    private _cep: string;
    private _estado: string;

    constructor(rua: string, numero: string, bairro: string, cep: string, estado: string) {
        this._rua = rua;
        this._numero = numero;
        this._bairro = bairro;
        this._cep = cep;; 
        this._cep = cep;
        this._estado = estado;
    }

    get rua(): string {
        return this._rua;
    }

    get numero(): string {
        return this._numero;
    }

    get bairro(): string {
        return this._bairro;
    }

    get cep(): string {
        return this._cep;
    }

    get estado(): string {
        return this._estado;
    }

    set rua(rua: string) {
        this._rua = rua;
    }

    set numero(numero: string) {
        this._numero = numero;
    }

    set bairro(bairro: string) {
        this._bairro = bairro;
    }

    set cep(cep: string) {
        this._cep = cep;
    }

    set estado(estado: string) {
        this._estado = estado;
    }

    toString(): string {
        return `Localizacao: ${this.rua}, ${this.numero}, ${this.bairro}, ${this.cep}, ${this.estado}`;
    }
    validarRua(): boolean {
        return this.rua.trim() !== '';
    }

    validarNumero(): boolean {
        return this.numero.trim() !== '';
    }

    validarBairro(): boolean {
        return this.bairro.trim() !== '';
    }

    validarEstado(estado: string): boolean {
        const estadosValidos = ["AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RS", "RO", "RR", "SC", "SP", "SE", "TO"];
    
        return estadosValidos.includes(estado.toUpperCase());
    }

    validarCep(cep: string): boolean {
        const regex = /^\d{5}-\d{3}$/;
        return regex.test(cep);
    }   

    validarLocalizacao(): boolean {
        return this.validarRua() && this.validarNumero() && this.validarBairro() && this.validarEstado(this.estado) && this.validarCep(this.cep);
    }

}

// Enum para os tipos de cozinha
enum TipoCozinha {
    Italiana = "Italiana",
    Mexicana = "Mexicana",
    Tailandesa = "Tailandesa",
    Japonesa = "Japonesa",
    Indiana = "Indiana",
    Francesa = "Francesa",
    Chinesa = "Chinesa",
    Mediterranea = "Mediterrânea",
    Nordestina = "Nordestina",
    Mineira = "Mineira",
    Brasileira = "Brasileira",
    Portuguesa = "Portuguesa",
    Argentina = "Argentina",
    Uruguaia = "Uruguaia",
    Americana = "Americana",
    FastFood = "Fast Food",
    Outros = "Outros"
}

// Classe para restaurantes
class Restaurante {
    private _nome: string;
    private _localizacao: Localizacao;
    private _cozinha: TipoCozinha; 
    private _mesas: Mesa[];
    private _avaliacoes: Avaliacao[];

    constructor(nome: string, localizacao: Localizacao, cozinha: TipoCozinha){
        this._nome = nome;
        this._localizacao = localizacao;
        this._cozinha = cozinha;
        this._mesas = [];
        this._avaliacoes = [];
    }
    
    get nome(): string {
        return this._nome;
    }

    get localizacao(): Localizacao {
        return this._localizacao;
    }

    get cozinha(): TipoCozinha {
        return this._cozinha;
    }

    get mesas(): Mesa[] {
        return this._mesas;
    }

    get avaliacoes(): Avaliacao[] {
        return this._avaliacoes;
    }

    set nome(nome: string) {
        this._nome = nome;
    }

    set localizacao(localizacao: Localizacao) {
        this._localizacao = localizacao;
    }

    set cozinha(cozinha: TipoCozinha) {
        this._cozinha = cozinha;
    }

    set mesas(mesas: Mesa[]) {
        this._mesas = mesas;
    }

    set avaliacoes(avaliacoes: Avaliacao[]) {
        this._avaliacoes = avaliacoes;
    }

    validarCozinha(cozinha: TipoCozinha): boolean {
        return Object.values(TipoCozinha).some(value => value === cozinha);
    }

    dicionarMesa(mesa: Mesa): void {
        this._mesas.push(mesa);
    }

    adicionarAvaliacao(avaliacao: Avaliacao): void {
        this._avaliacoes.push(avaliacao);
    }

    toString(): string {
        return `\nRestaurante: ${this.nome} (${this.cozinha})\nMesas: ${this.mesas.length}\nAvaliações: ${this.avaliacoes.length}`;
    }

    validarRestaurante(): boolean {
        if (!this._nome || this._nome.trim() === '') {
            console.log("Nome do restaurante não pode estar vazio.");
            return false;
        }
    
        if (!this._localizacao.validarLocalizacao()) {
            console.log("Localização inválida.");
            return false;
        }
    
        if (!this.validarCozinha(this._cozinha)) {
            console.log("Tipo de cozinha inválido.");
            return false;
        }
    
        return true;
    }
}


// Classe para mesas
class Mesa {
    private _numero: number;
    private _lugares: number;
    private _status: 'disponivel' | 'reservada';  
    private _reservas: Reserva[];

    constructor(numero: number, lugares: number){
        this._numero = numero;
        this._lugares = lugares;
        this._status = 'disponivel';  
        this._reservas = [];
    }

    get numero(): number {
        return this._numero;
    }

    get lugares(): number {
        return this._lugares;
    }

    get status(): 'disponivel' | 'reservada' {
        return this._status;
    }

    set numero(numero: number) {
        this._numero = numero;
    }

    set lugares(lugares: number) {
        this._lugares = lugares;
    }

    set status(status: 'disponivel' | 'reservada') {
        this._status = status;
    }

    get reservas(): Reserva[] {
        return this._reservas;
    }

    set reservas(reservas: Reserva[]) {
        this._reservas = reservas;
    }

    toString(): string {
        return `Mesa ${this.numero} (${this.lugares} lugares) - Status: ${this.status}`;
    }

    validarStatus(): boolean {
        return this._status === 'disponivel' || this._status === 'reservada';
    }

    validarNumero(): boolean {
        return this.numero > 0;
    }

    validarLugares(): boolean {
        return this.lugares > 0;
    }

    validarMesa(): boolean {
        return this.validarStatus() && this.validarNumero() && this.validarLugares();
    }
}

// Classe para avaliações
class Avaliacao {
    private _cliente: Cliente;
    private _nota: number;
    private _comentario: string;
    private _restaurante: Restaurante;

    constructor(cliente: Cliente, nota: number, comentario: string, restaurante: Restaurante){
        this._cliente = cliente;
        this._nota = nota;
        this._comentario = comentario;
        this._restaurante = restaurante;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    get nota(): number {
        return this._nota;
    }

    get comentario(): string {
        return this._comentario;
    }

    get restaurante(): Restaurante {
        return this._restaurante;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    set nota(nota: number) {
        if (nota >= 1 && nota <= 5) {
            this._nota = nota;
        } else {
            throw new Error("A nota deve estar entre 1 e 5.");
        }
    }

    set comentario(comentario: string) {
        this._comentario = comentario;
    }

    set restaurante(restaurante: Restaurante) {
        this._restaurante = restaurante;
    }

    toString(): string {
        return `Avaliacao de ${this.cliente.nome}: ${this.nota} estrelas - Comentario: ${this.comentario}`;
    }

    validarNota(): boolean {
        return this.nota >= 1 && this.nota <= 5;
    }

    validarComentario(): boolean {
        return this.comentario.length > 0;
    }


    validarAvaliacao(): boolean {
        return this.validarNota() && this.validarComentario();
    }

    static calcularMediaAvaliacoes(avaliacoes: Avaliacao[]): number {
        const notas = avaliacoes.map(avaliacao => avaliacao.nota);
        const somaNotas = notas.reduce((soma, nota) => soma + nota, 0);
        return somaNotas / notas.length;
    }

    static filtrarAvaliacoesRestaurante(avaliacoes: Avaliacao[], restaurante: Restaurante): Avaliacao[] {
        return avaliacoes.filter(avaliacao => avaliacao.restaurante === restaurante);
    }

}

// Classe para reservas
class Reserva {
    private _cliente: Cliente;
    private _quantidadePessoas: number;
    private _mesa: Mesa;
    private _data: Date;
    private _hora: number;
    restaurante!: Restaurante;

    constructor(cliente: Cliente, quantidadePessoas: number, mesa: Mesa, data: Date, hora: number){
        this._cliente = cliente;
        this._quantidadePessoas = quantidadePessoas;
        this._mesa = mesa;
        this._data = data;
        this._hora = hora;
    }

    get cliente(): Cliente {
        return this._cliente;
    }

    get mesa(): Mesa {
        return this._mesa;
    }

    get data(): Date {
        return this._data;
    }

    get hora(): number {
        return this._hora;
    }

    get quantidadePessoas(): number {
        return this._quantidadePessoas;
    }

    set cliente(cliente: Cliente) {
        this._cliente = cliente;
    }

    set quantidadePessoas(quantidadePessoas: number) {
        this._quantidadePessoas = quantidadePessoas;
    }

    set mesa(mesa: Mesa) {
        if (mesa.lugares >= this._quantidadePessoas) {
            this._mesa = mesa;
        } else {
            throw new Error("A capacidade da mesa nao e suficiente para o numero de pessoas.");
        }
    }

    set data(data: Date) {
        if (data.getTime() >= Date.now()) {
            this._data = data;
        } else {
            throw new Error("A data da reserva deve ser maior ou igual a data atual.");
        }
    }

    set hora(hora: number) {
        if (hora >= 12 && hora <= 23) {
            this._hora = hora;
        } else {
            throw new Error("A hora da reserva deve estar entre 12h e 23h.");
        }
    }

    toString(): string {
        return `Reserva de ${this.cliente.nome} ${this.restaurante.nome} (${this.mesa})`;
    }

    validarData(): boolean {
        return this.data.getTime() >= Date.now();
    }

    validarHora(): boolean {
        return this.hora >= 12 && this.hora <= 23;
    }

    validarReserva(): boolean {
        return this.validarData() && this.validarHora();
    }
}

// Classe para o sistema
class Sistema {
    private _restaurantes: Restaurante[];
    private _clientes: Cliente[];
    private _gerentes: GerenteRestaurante[];
    private _avaliacoes: Avaliacao[];
    private _reservas: Reserva[];

    constructor(){
        this._restaurantes = [];
        this._clientes = [];
        this._gerentes = [];
        this._avaliacoes = [];
        this._reservas = [];
    }

    get restaurantes(): Restaurante[] {
        return this._restaurantes;
    }

    get clientes(): Cliente[] {
        return this._clientes;
    }

    get gerentes(): GerenteRestaurante[] {
        return this._gerentes;
    }

    get avaliacoes(): Avaliacao[] {
        return this._avaliacoes;
    }

    get reservas(): Reserva[] {
        return this._reservas;
    }

    set restaurantes(restaurantes: Restaurante[]) {
        this._restaurantes = restaurantes;
    }

    set clientes(clientes: Cliente[]) {
        this._clientes = clientes;
    }

    set gerentes(gerentes: GerenteRestaurante[]) {
        this._gerentes = gerentes;
    }

    set avaliacoes(avaliacoes: Avaliacao[]) {
        this._avaliacoes = avaliacoes;
    }

    set reservas(reservas: Reserva[]) {
        this._reservas = reservas;
    }

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
    }

    adicionarGerente(gerente: GerenteRestaurante): void {
        this.gerentes.push(gerente);
    }

    adicionarRestaurante(restaurante: Restaurante): void {
        this.restaurantes.push(restaurante);
    }

    adicionarMesa(restaurante: Restaurante, mesa: Mesa): void {
        restaurante.mesas.push(mesa);
    }

    adicionarAvaliacao(restaurante: Restaurante, avaliacao: Avaliacao): void {
        restaurante.avaliacoes.push(avaliacao);
    }

    removerCliente(cliente: Cliente): void {
        this.clientes.splice(this.clientes.indexOf(cliente), 1);
    }

    removerGerente(gerente: GerenteRestaurante): void {
        this.gerentes.splice(this.gerentes.indexOf(gerente), 1);
    }

    removerRestaurante(restaurante: Restaurante): void {
        this.restaurantes.splice(this.restaurantes.indexOf(restaurante), 1);
    }

    removerMesa(restaurante: Restaurante, mesa: Mesa): void {
        restaurante.mesas.splice(restaurante.mesas.indexOf(mesa), 1);
    }

    removerAvaliacao(restaurante: Restaurante, avaliacao: Avaliacao): void {
        restaurante.avaliacoes.splice(restaurante.avaliacoes.indexOf(avaliacao), 1);
    }

    buscarRestaurantesPorLocalizacao(localizacao: Localizacao): Restaurante[] {
        return this.restaurantes.filter(restaurante => restaurante.localizacao.estado === localizacao.estado);
    }

    buscarRestaurantesPorCozinha(cozinha: TipoCozinha): Restaurante[] {
        return this.restaurantes.filter(restaurante => restaurante.cozinha === cozinha);
    }

    buscarRestaurantesPorNome(nome: string): Restaurante[] {
        return this.restaurantes.filter(restaurante => restaurante.nome === nome);
    }

    buscarRestaurantesPorAvaliacao(nota: number): Restaurante[] {
        return this.restaurantes.filter(restaurante => {
            const avaliacoes = restaurante.avaliacoes.filter(avaliacao => avaliacao.nota === nota);
            return avaliacoes.length > 0;
        });
    }

    buscarRestaurantesPorDisponibilidade(data: Date, hora: number): Restaurante[] {
        return this.restaurantes.filter(restaurante => {
            const mesasDisponiveis = restaurante.mesas.filter(mesa => this.verificarDisponibilidade(restaurante, mesa, data, hora));
            return mesasDisponiveis.length > 0;
        });
    }

    fazerReserva(cliente: Cliente, restaurante: Restaurante, mesa: Mesa, data: Date, hora: number, quantidadePessoas: number): boolean {
        if (mesa.lugares >= quantidadePessoas) {
            const reserva = new Reserva(cliente, quantidadePessoas, mesa, data, hora);
            if (reserva.validarReserva()) {
                cliente.reservas.push(reserva);
                mesa.reservas.push(reserva);
                mesa.status = 'reservada';
                return true;
            } else {
                console.log("Dados da reserva invalidos.");
                return false;
            }
        } else {
            console.log("A capacidade da mesa nao e suficiente para o numero de pessoas.");
            return false;
        }
    }

    alterarReserva(cliente: Cliente, restaurante: Restaurante, mesa: Mesa, data: Date, hora: number): boolean {
        const reservaEncontrada = cliente.reservas.find(reserva => 
            reserva.restaurante === restaurante && reserva.mesa === mesa && reserva.data.getTime() === data.getTime() &&  reserva.hora === hora
        );
    
        if (reservaEncontrada) {
            const novaMesa = escolherMesa(restaurante);
            if (novaMesa) {
                restaurante.mesas.push(mesa);
                restaurante.mesas.splice(restaurante.mesas.indexOf(novaMesa), 1);
                reservaEncontrada.mesa = novaMesa;
                return true;
            } else {
                console.log("Mesa nao encontrada.");
                return false;
            }
        } else {
            console.log("Reserva nao encontrada para alteracao.");
            return false;
        }
    }

    cancelarReserva(cliente: Cliente, restaurante: Restaurante, mesa: Mesa, data: Date, hora: number): void {
        const reservaEncontrada = cliente.reservas.find(reserva => 
            reserva.restaurante === restaurante && reserva.mesa === mesa && reserva.data.getTime() === data.getTime() &&  reserva.hora === hora
        );
    
        if (reservaEncontrada) {
            cliente.reservas.splice(cliente.reservas.indexOf(reservaEncontrada), 1);
            mesa.reservas.splice(mesa.reservas.indexOf(reservaEncontrada), 1);
            mesa.status = 'disponivel';
        } else {
            console.log("Reserva nao encontrada para cancelamento.");
        }
    }

    verificarDisponibilidade(restaurante: Restaurante, mesa: Mesa, data: Date, hora: number): boolean {
        const reserva = restaurante.mesas.find(mesa => mesa.reservas.find(reserva => reserva.data.getTime() === data.getTime() && reserva.hora === hora));
        return !reserva;
    }

    listarClientes(): void {
        if (this.clientes.length > 0) {
            this.clientes.forEach(cliente => console.log(cliente.toString()));
        } else {
            console.log("\nNao ha clientes registrados.");
        }
    }

    listarGerentes(): void {
        if (this.gerentes.length > 0) {
            this.gerentes.forEach(gerente => console.log(gerente.toString()));
        } else {
            console.log("\nNao ha gerentes registrados.");
        }
    }

    listarRestaurantes(): void {
        if (this.restaurantes.length > 0) {
            this.restaurantes.forEach(restaurante => console.log(restaurante.toString()));
        } else {
            console.log("\nNao ha restaurantes registrados.");
        }
    }

    listarRestaurantesPorCozinha(cozinha: TipoCozinha): void {
        this.buscarRestaurantesPorCozinha(cozinha).forEach(restaurante => console.log(restaurante.toString()));
    }

    listarMesas(restaurante: Restaurante): void {
        restaurante.mesas.forEach(mesa => console.log(mesa.toString()));
    }

    listarAvaliacoes(restaurante: Restaurante): void {
        if (restaurante.avaliacoes.length > 0) {
            restaurante.avaliacoes.forEach(avaliacao => console.log(avaliacao.toString()));
        } else {
            console.log("\nNao ha avaliacoes registradas.");
        }
    }

    listarReservas(cliente: Cliente): void {
        if (cliente.reservas.length > 0) {
            cliente.reservas.forEach(reserva => console.log(reserva.toString()));
        } else {
            console.log("\nNao ha reservas registradas.");
        }
    }

    listarDisponibilidade(restaurante: Restaurante, data: Date, hora: number): void {
        restaurante.mesas.forEach(mesa => {
            if (this.verificarDisponibilidade(restaurante, mesa, data, hora)) {
                console.log(mesa.toString());
            }
        });
    }
}

import * as readlineSync from 'readline-sync';

// Instanciando o sistema
const sistema = new Sistema();

// Criar clientes
function criarCliente(){
    console.log("\nInsira as informacoes do cliente: ");
    const nome = readlineSync.question("Nome : ");
    const cpf = readlineSync.question("CPF (Ex 123.456.789-09):");
    const email = readlineSync.question("Email (Ex exemplo@dominio.com):");
    const senha = readlineSync.question("Senha (Ex Senha123):");
    const cliente = new Cliente(nome, cpf, email, senha);
    if (cliente.validarUsuario()) {
        sistema.adicionarCliente(cliente);
        console.log("\nCliente cadastrado com sucesso.");
    } else {
        console.log("\nDados invalidos.");
    }
}

// Criar restaurante
function criarRestaurante() {
    console.log("\nInsira as informações do restaurante: ");
    const nome = readlineSync.question("Nome: ");
    const rua = readlineSync.question("Rua: ");
    const numero = readlineSync.question("Numero: ");
    const bairro = readlineSync.question("Bairro: ");
    const cep = readlineSync.question("CEP (65000-000): ");
    const estado = readlineSync.question("Estado (Ex: MA): ");

    const localizacao = new Localizacao(rua, numero, bairro, cep, estado);

    if (localizacao.validarLocalizacao()) {
        let cozinhaInput: string;
        let cozinha: TipoCozinha;

        do {
            cozinhaInput = readlineSync.question("Cozinha: ");
            cozinha = TipoCozinha[cozinhaInput as keyof typeof TipoCozinha];

            if (!cozinha) {
                console.log("Tipo de cozinha inválido. Escolha um valor válido. Ex: Italiana");
            }
        } while (!cozinha);

        const restaurante = new Restaurante(nome, localizacao, cozinha);

        if (restaurante.validarRestaurante()) {
            sistema.adicionarRestaurante(restaurante);
            console.log("\nRestaurante cadastrado com sucesso.");
        } else {
            console.log("\nRestaurante inválido. Verifique os dados e tente novamente.");
        }
    } else {
        console.log("\nDados inválidos. Certifique-se de preencher corretamente todos os campos.");
    }
}

// Criar gerente
function criarGerente(){
    const restaurante = escolherRestaurante();
    if (restaurante) {
        console.log("\nInsira as informacoes do gerente: ");
        const nome = readlineSync.question("Nome : ");
        const cpf = readlineSync.question("CPF (Ex 123.456.789-09):");
        const email = readlineSync.question("Email (Ex exemplo@dominio.com):");
        const senha = readlineSync.question("Senha (Ex Senha123):");
        const gerente = new GerenteRestaurante(nome, cpf, email, senha, restaurante);
        if (gerente.validarUsuario()) {
            sistema.adicionarGerente(gerente);
            console.log("\nGerente cadastrado com sucesso.");
        } else {
            console.log("\nDados invalidos.");
        }
    }
}

// Criar mesa
function criarMesa(){
    const restaurante = escolherRestaurante();
    if (restaurante) {
        console.log("\nInsira as informacoes da mesa: ");
        const numero = readlineSync.question("Numero: ");
        const lugares = readlineSync.question("Lugares: ");
        const mesa = new Mesa(Number(numero), Number(lugares));
        if (mesa.validarMesa()) {
            sistema.adicionarMesa(restaurante, mesa);
            console.log("\nMesa cadastrada com sucesso.");
        } else {
            console.log("\nDados invalidos.");
        }
    }

}

// Validar cliente
function validarCliente(){
    const email = readlineSync.question("\nDigite o email do cliente: ");
    const senha = readlineSync.question("Digite a senha do cliente: ");
    const cliente = sistema.clientes.find(cliente => cliente.email === email && cliente.senha === senha);
    if (cliente) {
        console.log("\nCliente encontrado!\n");
        return cliente;
    } else {
    console.log("\nCliente nao encontrado.\n");
    }
}

// Criar avaliação
function criarAvaliacao(){
    const cliente = validarCliente();
    if (cliente) {
        console.log("\nInsira as informacoes da avaliacao: ");
        const nota = readlineSync.question("Nota: ");
        const comentario = readlineSync.question("Comentario: ");
        const restauranteInput = readlineSync.question("Restaurante: ");
        const restaurante = sistema.restaurantes.find(restaurante => restaurante.nome === restauranteInput);
        if (restaurante) {
            const avaliacao = new Avaliacao(cliente, Number(nota), comentario, restaurante);
            if (avaliacao.validarAvaliacao()) {
                sistema.adicionarAvaliacao(restaurante, avaliacao);
                console.log("\nAvaliacao cadastrada com sucesso.");
            } else {
                console.log("\nDados invalidos.");
            }
        } else {
            console.log("\nRestaurante nao encontrado.");
        }
    }
}

// Criar reserva
function escolherRestaurante(){
    sistema.listarRestaurantes();
    const restauranteInput = readlineSync.question("\nDigite o nome do restaurante: ");
    const restaurante = sistema.restaurantes.find(restaurante => restaurante.nome === restauranteInput);
    if (restaurante) {
        console.log("\nRestaurante encontrado!\n");
        return restaurante;
    } else {
        console.log("\nRestaurante nao encontrado.\n");
    }
}

// Escolher mesa, exibir as mesas disponiveis
function escolherMesa(restaurante: Restaurante){
    listarMesas();
    const numero = readlineSync.question("\nDigite o numero da mesa: ");
    const mesa = restaurante.mesas.find(mesa => mesa.numero === Number(numero));
    if (mesa) {
        console.log("\nMesa encontrada!\n");
        return mesa;
    } else {
        console.log("\nMesa nao encontrada.\n");
    }
}

// Criar reserva, se os dados forem invalidos Nao registrar a reserva
function criarReserva(){
    const cliente = validarCliente();
    if (cliente) {
        const restaurante = escolherRestaurante();
        if (restaurante) {
            const mesa = escolherMesa(restaurante);
            if (mesa) {
                console.log("\nInsira as informacoes da reserva: ");
                const data = readlineSync.question("Data (dd/mm/aa): ");
                const hora = readlineSync.question("Hora (12 - 23): ");
                const quantidadePessoas = readlineSync.question("Quantidade de pessoas: ");
                const reserva = new Reserva(cliente, Number(quantidadePessoas), mesa, new Date(data), Number(hora));
                if (reserva.validarReserva()) {
                    sistema.fazerReserva(cliente, restaurante, mesa, new Date(data), Number(hora), Number(quantidadePessoas));
                    console.log("\nReserva cadastrada com sucesso.");
                } else {
                    console.log("\nDados invalidos.");
                }
            }
        }
    }
}

// Alterar reserva, se os dados forem invalidos Nao registrar a reserva
function alterarReserva(){
    const cliente = validarCliente();
    if (cliente) {
        const restaurante = escolherRestaurante();
        if (restaurante) {
            const mesa = escolherMesa(restaurante);
            if (mesa) {
                console.log("\nInsira as informacoes da reserva: ");
                const data = readlineSync.question("Data (dd/mm/aa): ");
                const hora = readlineSync.question("Hora (12 - 23): ");
                sistema.alterarReserva(cliente, restaurante, mesa, new Date(data), Number(hora));
                console.log("\nReserva alterada com sucesso.");
            }
        }
    }
}

// Cancelar reserva
function cancelarReserva(){
    const cliente = validarCliente();
    if (cliente) {
        const restaurante = escolherRestaurante();
        if (restaurante) {
            const mesa = escolherMesa(restaurante);
            if (mesa) {
                console.log("\nInsira as informacoes da reserva: ");
                const data = readlineSync.question("Data (dd/mm/aa): ");
                const hora = readlineSync.question("Hora (12 - 23): ");
                sistema.cancelarReserva(cliente, restaurante, mesa, new Date(data), Number(hora));
                console.log("\nReserva cancelada com sucesso.");
            }
        }
    }
}

function listarRestaurantesPorLocalizacao(){
    const estado = readlineSync.question("\nDigite o estado: ");
    const localizacao = new Localizacao('', '', '', '', estado);
    const restaurantes = sistema.buscarRestaurantesPorLocalizacao(localizacao);
    if (restaurantes.length > 0) {
        restaurantes.forEach(restaurante => console.log(restaurante.toString()));
    } else {
        console.log("\nNao ha restaurantes nesse estado.");
    }
}

function isTipoCozinhaValido(valor: string): valor is TipoCozinha {
    return Object.values(TipoCozinha).includes(valor as TipoCozinha);
}

function listarRestaurantesPorCozinha(){
    let cozinha: TipoCozinha;

    do {
        const cozinhaInput = readlineSync.question("\nDigite a cozinha: ");
        cozinha = TipoCozinha[cozinhaInput as keyof typeof TipoCozinha];

        if (!isTipoCozinhaValido(cozinhaInput)) {
            console.log("Tipo de cozinha inválido. Escolha um valor válido.");
        }
    } while (!cozinha);

    const restaurantes = sistema.buscarRestaurantesPorCozinha(cozinha);

    if (restaurantes.length > 0) {
        console.log("\nRestaurantes encontrados:");
        restaurantes.forEach(restaurante => console.log(restaurante.toString()));
    } else {
        console.log("\nNão há restaurantes dessa cozinha.");
    }
}

function listarRestaurantesPorAvaliacao(){
    const nota = readlineSync.question("\nDigite a nota: ");
    const restaurantes = sistema.buscarRestaurantesPorAvaliacao(Number(nota));
    if (restaurantes.length > 0) {
        restaurantes.forEach(restaurante => console.log(restaurante.toString()));
    } else {
        console.log("\nNao ha restaurantes com essa avaliacao.");
    }
}

function listarRestaurantesPorDisponibilidade(){
    const data = readlineSync.question("\nDigite a data: ");
    const hora = readlineSync.question("Digite a hora: ");
    const restaurantes = sistema.buscarRestaurantesPorDisponibilidade(new Date(data), Number(hora));
    if (restaurantes.length > 0) {
        restaurantes.forEach(restaurante => console.log(restaurante.toString()));
    } else {
        console.log("\nNao ha restaurantes disponiveis nessa data e hora.");
    }
}

function listarClientes(){
    sistema.listarClientes();
}

function listarGerentes(){
    sistema.listarGerentes();
}

function listarRestaurantes(){
    sistema.listarRestaurantes();
}

function listarMesas(){
    console.log("\nInsira novamente o nome do restaurante para listar as mesas");
    const restaurante = escolherRestaurante();
    if (restaurante) {
        sistema.listarMesas(restaurante);
    }
}

function listarAvaliacoes(){
    const restaurante = escolherRestaurante();
    if (restaurante) {
        sistema.listarAvaliacoes(restaurante);
    }
}

function listarReservas(){
    const cliente = validarCliente();
    if (cliente) {
        sistema.listarReservas(cliente);
    }
}


function calcularMediaAvaliacoes(){
    const restaurante = escolherRestaurante();
    if (restaurante) {
        const media = Avaliacao.calcularMediaAvaliacoes(restaurante.avaliacoes);
        console.log(`\nA media de avaliacoes do restaurante ${restaurante.nome} e ${media} estrelas.`);
    }
}

function filtrarAvaliacoesRestaurante(){
    const restaurante = escolherRestaurante();
    if (restaurante) {
        const avaliacoes = Avaliacao.filtrarAvaliacoesRestaurante(sistema.avaliacoes, restaurante);
        if (avaliacoes.length > 0) {
            avaliacoes.forEach(avaliacao => console.log(avaliacao.toString()));
        } else {
            console.log("\nNao ha avaliacoes para esse restaurante.");
        }
    }
}


// Menu principal
function menuPrincipal() {
    console.log("\n       Menu Principal");
    console.log("Escolha uma opcao: ");
    console.log("1 - Cliente");
    console.log("2 - Gerente");
    console.log("3 - Sistema");
    console.log("0 - Sair");
}

// Menu cliente
function menuCliente() {
    let opcaoCliente = -1;
    while (opcaoCliente !== 0) {
        console.log("\n       Menu Cliente");
        console.log("Escolha uma opcao: ");
        console.log("1 - Cadastrar");
        console.log("2 - Avaliar restaurante");
        console.log("3 - Fazer reserva");
        console.log("4 - Alterar reserva");
        console.log("5 - Cancelar reserva");
        console.log("6 - Listar reservas");
        console.log("7 - Listar restaurantes");
        console.log("8 - Listar restaurantes por localizacao");
        console.log("9 - Listar restaurantes por cozinha");
        console.log("10 - Listar restaurantes por avaliacao");
        console.log("11 - Listar restaurantes por disponibilidade");
        console.log("0 - Voltar");
        opcaoCliente = parseInt(readlineSync.question("\nDigite a opcao: "));
        switch (opcaoCliente) {
            case 1:
                criarCliente();
                break;
            case 2:
                criarAvaliacao();
                break;
            case 3:
                criarReserva();
                break;
            case 4:
                alterarReserva();
                break;
            case 5:
                cancelarReserva();
                break;
            case 6:
                listarReservas();
                break;
            case 7:
                listarRestaurantes();
                break;
            case 8:
                listarRestaurantesPorLocalizacao();
                break;
            case 9:
                listarRestaurantesPorCozinha();
                break;
            case 10:
                listarRestaurantesPorAvaliacao();
                break;
            case 11:
                listarRestaurantesPorDisponibilidade();
                break;
            case 0:
                console.log("\nVoltando ao menu principal.");
                break;
            default:
                console.log("\nOpcao invalida.");
                break;
        }
    }
}

// Menu gerente
function menuGerente() {
    let opcaoGerente = -1;
    while (opcaoGerente !== 0) {
        console.log("\n       Menu Gerente");
        console.log("Escolha uma opcao: ");
        console.log("1 - Cadastrar Gerente");
        console.log("2 - Cadastrar restaurante");
        console.log("3 - Cadastrar mesa");
        console.log("4 - Listar mesas");
        console.log("5 - Listar avaliacoes");
        console.log("0 - Voltar");
        opcaoGerente = parseInt(readlineSync.question("\nDigite a opcao: "));
        switch (opcaoGerente) {
            case 1:
                criarGerente();
                break;
            case 2:
                criarRestaurante();
                break;
            case 3:
                criarMesa();
                break;
            case 4:
                listarMesas();
                break;
            case 5:
                listarAvaliacoes();
                break;
            case 0:
                console.log("\nVoltando ao menu principal.");
                break;
            default:
                console.log("\nOpcao invalida.");
                break;
        }
    }
}

function menuSistema() {
    let opcaoSistema = -1;
    while (opcaoSistema !== 0) {
        console.log("\n       Menu Sistema");
        console.log("Escolha uma opcao: ");
        console.log("1 - Listar Gerentes");
        console.log("2 - Listar Clientes");
        console.log("3 - Listar Restaurantes");
        console.log("4 - Listar avaliacoes");
        console.log("6 - Filtrar avaliacoes por restaurante");
        console.log("8 - Calcular media de avaliacoes");
        console.log("0 - Voltar");

        opcaoSistema = parseInt(readlineSync.question("\nDigite a opcao: "));
        switch (opcaoSistema) {
            case 1:
                listarGerentes();
                break;
            case 2:
                listarClientes();
                break;
            case 3:
                listarRestaurantes();
                break;
            case 4:
                listarAvaliacoes();
                break;
            case 6:
                filtrarAvaliacoesRestaurante();
                break;
            case 8:
                calcularMediaAvaliacoes();
                break;
            case 0:
                console.log("\nVoltando ao menu principal.");
                break;
            default:
                console.log("\nOpcao invalida.");
                break;
        }
    }
}

// Main
function main() {
    console.log("\nBem vindo ao EatEasy.");
    let opcao = -1;
    while (opcao !== 0) {
        menuPrincipal();
        opcao = parseInt(readlineSync.question("\nDigite a opcao: "));
        switch (opcao) {
            case 1:
                menuCliente();
                break;
            case 2:
                menuGerente();
                break;
            case 3:
                menuSistema();
                break;
            case 0:
                console.log("\nEncerrando o programa.");
                break;
            default:
                console.log("\nOpcao invalida.");
                break;
        }
    }
}

main();

// Para executar o programa é necessário instalar a biblioteca readline-sync com o comando => npm install readline-sync.
// Para o programa é necessário ter o node instalado comando => npm install node
// O program é inicializado pelo terminal com o comando => node index.js 
