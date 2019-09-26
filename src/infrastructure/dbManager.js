"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class DbManager {
    constructor() {
        this.dbClient = null;
        this.databaseName = '';
        try {
            const connectionString = process.env.CONNECTION_STRING || '';
            this.databaseName = process.env.DATABASE_NAME || '';
            mongodb_1.MongoClient.connect(connectionString, {
                useNewUrlParser: true,
            }, (err, client) => {
                if (client) {
                    this.dbClient = client;
                    // tslint:disable-next-line:no-console
                    console.log('Successfully connected with the database');
                }
            });
        }
        catch (ex) {
            throw new Error(`${ex.toString()} in DBManager`);
        }
    }
    get isConnected() {
        return this.dbClient.isConnected();
    }
    find(collectionName, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.dbClient.db(this.databaseName).collection(collectionName);
            return collection.find(query);
        });
    }
    findOne(collectionName, query) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = this.dbClient.db(this.databaseName).collection(collectionName);
            return collection.findOne(query);
        });
    }
    getCollection(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dbClient.db(this.databaseName).collection(collectionName);
        });
    }
}
exports.DbManager = DbManager;
