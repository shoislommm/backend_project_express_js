"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret_key';
var generateToken = function (userId) {
    return jsonwebtoken_1.default.sign({ userId: userId }, JWT_SECRET, { expiresIn: '1h' });
};
exports.default = generateToken;
//# sourceMappingURL=generateToken.js.map