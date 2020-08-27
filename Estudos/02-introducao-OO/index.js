import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Alessandro";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Isabella";
cliente2.cpf = 88877766605;

const contaCorrenteAlessandro = new ContaCorrente();
contaCorrenteAlessandro.agencia = 1001;
contaCorrenteAlessandro.cliente = cliente1;
contaCorrenteAlessandro.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

let valor = 200;
contaCorrenteAlessandro.transferir(valor, conta2);

console.log("Valor: ", valor);
console.log(conta2);




