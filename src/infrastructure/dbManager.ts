import { MongoClient, Collection, FilterQuery, Cursor } from 'mongodb';

export class DbManager {
    private dbClient: MongoClient = null;
    private databaseName: string = '';

    constructor() {
        try {
            const connectionString: string = process.env.CONNECTION_STRING || '';
            this.databaseName = process.env.DATABASE_NAME || '';

            MongoClient.connect(connectionString, {
                useNewUrlParser: true,
            }, (err, client) => {
                if (client) {
                    this.dbClient = client;

                    // tslint:disable-next-line:no-console
                    console.log('Successfully connected with the database');
                }
            });
        } catch (ex) {
            throw new Error(`${ex.toString()} in DBManager`);
        }
    }

    public get isConnected(): boolean {
        return this.dbClient.isConnected();
    }

    public async find(collectionName: string, query?: FilterQuery<any>): Promise<Cursor<any>> {
        const collection: Collection = this.dbClient.db(this.databaseName).collection(collectionName);

        return collection.find(query!);
    }

    public async findOne(collectionName: string, query?: FilterQuery<any>): Promise<Cursor<any>> {
        const collection: Collection = this.dbClient.db(this.databaseName).collection(collectionName);

        return collection.findOne(query!);
    }

    public async getCollection(collectionName: string): Promise<Collection<any>> {
        return this.dbClient.db(this.databaseName).collection(collectionName);
    }
}
