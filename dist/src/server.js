"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
// GET: Busca ou lista uma informacao
// POST: Cria alguma nova informacao
// PUT: Atualiza uma informacao
// DELETE: Deleta um informacao
//Corpo (req.body) :Dados para criacao ou atualizacao de um registro
//Route params (req.params): Identificar qual eu quero atualizar ou deletar ex: /users:id
//Query Params (req.query): pagiancao, filtros , ordenacao
//localhost:3333
app.listen(3333);
