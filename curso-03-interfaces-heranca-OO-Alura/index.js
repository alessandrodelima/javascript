import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

const cliente1 = new Cliente("Alessandro", 11122233304);

const contaCorrenteAlessandro = new ContaCorrente(0, cliente1, 1001);
contaCorrenteAlessandro.depositar(500);
contaCorrenteAlessandro.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001);

console.log(contaPoupanca);
console.log(contaCorrenteAlessandro);


