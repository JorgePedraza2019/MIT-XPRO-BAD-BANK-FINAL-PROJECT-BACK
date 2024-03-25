const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
let db = null;

// Function to connect to the database
async function connectDB() {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true });
    console.log("Connected successfully to db server");
    db = client.db('FinalProject');
}

connectDB(); // Call connectDB at the beginning to initialize db

// Function to disconnect from the database
async function disconnectDB() {
    if (db) {
        await db.close();
        console.log("Disconnected from db server");
    }
}

// Middleware to connect and disconnect from the database on each request
async function withDB(req, res, next) {
    if (!db) {
        await connectDB();
    }
    req.db = db;
    next();
}

// create user account
async function create(name, email, password) {
    const collection = db.collection('users');
    const doc = { name, email, password, balance: 0, role: 'customer' };
    await collection.insertOne(doc);
    return doc;
}

// find user account
async function find(email) {
    const collection = db.collection('users');
    const docs = await collection.find({ email: email }).toArray();
    return docs;
}

// find one user by email - alternative to find
async function findOne(email) {
    const collection = db.collection('users');
    const doc = await collection.findOne({ email: email });
    return doc;
}

// update - deposit/withdraw amount
async function update(email, amount) {
    const collection = db.collection('users');
    const doc = await collection.findOneAndUpdate(
        { email: email },
        { $inc: { balance: amount } },
        { returnOriginal: false }
    );
    return doc;
}

// all users
async function all() {
    const collection = db.collection('users');
    const docs = await collection.find({}).toArray();
    return docs;
}

module.exports = { connectDB, disconnectDB, withDB, create, findOne, find, update, all };
