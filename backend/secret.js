import { MongooseDocument } from "mongoose";

const secrets = {
//The URL that we use to connect to the MongoDB Atlas Cluster
    dburi: 'mongodb+srv://jacob:<123password>@cluster0-kzxka.mongodb.net/test?retryWrites=true&w=majority'
};

const getSecret = key => secrets[keys];

module.exports = getSecret; 