import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente("Alessandro", 11122233304);
const cliente2 = new Cliente("Isabella",88877766605 );

const contaCorrenteAlessandro = new ContaCorrente(cliente1, 1001);
contaCorrenteAlessandro.depositar(500);
const conta2 = new ContaCorrente(cliente1, 102);

let valor = 200;
contaCorrenteAlessandro.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);


