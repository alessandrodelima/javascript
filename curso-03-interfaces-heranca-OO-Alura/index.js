import { Cliente } from "./Cliente.js";
import { Gerente} from "./Funcionarios/Gerente.js";
import { Diretor} from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao} from "./SistemaAutenticacao.js";

const diretor = new Diretor("Alessandro", 10000, 12345678901);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Isabella", 5000, 25498719825);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Luisa", 78542692125, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(gerente, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);
