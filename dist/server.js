"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
// import router from './router'
var server = (0, express_1.default)();
server.use(express_1.default.json());
server.use('/api');
server.get('/', function (req, res) {
    res.send('<h1>Homepage</h1>');
    console.log('сделан GET запрос');
});
server.get('/login', function (req, res) {
    res.send('<h1>Login page</h1>');
    console.log('сделан GET запрос ');
});
exports.default = server;
//# sourceMappingURL=server.js.map