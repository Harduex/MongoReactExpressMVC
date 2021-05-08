import mongoose from 'mongoose';

const dbConnection = () => {
    // credentials
    const dbUrl = process.env.DB_URL || 'localhost';
    const dbPort = process.env.DB_PORT || '27017';
    const database = process.env.DATABASE || 'MyDb';

    // options
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }

    // connection
    mongoose.connect(`mongodb://${dbUrl}:${dbPort}/${database}`, options);
    // if mongoose runs
    mongoose.connection.on('open', () => {
        console.log('Mongodb Connected');
    });
    // error
    mongoose.connection.on('error', (error) => {
        console.log(`Mongoose error: ${error}`);
    });

    mongoose.Promise = global.Promise;
}

export default dbConnection;