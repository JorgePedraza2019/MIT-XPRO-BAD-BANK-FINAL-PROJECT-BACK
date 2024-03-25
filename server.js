const express = require('express');
const cors = require('cors');
const dal = require('./dal.js');
const { generateToken } = require('./auth');

const app = express();
app.use(express.static('public'));
app.use(cors());

// Endpoint to create a new user account
app.get('/account/create/:name/:email/:password', async (req, res) => {
    try {
        const users = await dal.find(req.params.email);
        if (users.length > 0) {
            console.log('User already exists');
            res.send('User already exists');
        } else {
            const user = await dal.create(req.params.name, req.params.email, req.params.password);
            console.log(user);
            res.send(user);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to login with a user account
app.get('/account/login/:email/:password', async (req, res) => {
    try {
        const user = await dal.find(req.params.email);
        if (user.length > 0) {
            if (user[0].password === req.params.password) {
                const token = generateToken(user[0]); // Generate JWT token
                res.send({ token, user: user[0] }); // Send token and user info to the client
            } else {
                res.send('Login failed: wrong password');
            }
        } else {
            res.send('Login failed: user not found');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to find a user account by email
app.get('/account/find/:email', async (req, res) => {
    try {
        const user = await dal.find(req.params.email);
        console.log(user);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to find one user by email
app.get('/account/findOne/:email', async (req, res) => {
    try {
        const user = await dal.findOne(req.params.email);
        console.log(user);
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to update user balance
app.get('/account/update/:email/:amount/:generateToken', async (req, res) => {
    try {
        const amount = Number(req.params.amount);
        const response = await dal.update(req.params.email, amount);
        let token = null;

        if (req.params.generateToken === 'true') {
            const user = await dal.find(req.params.email); // Find the updated user
            token = generateToken(user[0]); // Generate a new JWT token with the updated balance
        }

        console.log(response);
        res.send({ response, token }); // Send the updated balance and new JWT token to the client
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

// Endpoint to get all users
app.get('/account/all', async (req, res) => {
    try {
        const docs = await dal.all();
        res.send(docs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

const port = 3001;
app.listen(port, () => {
    console.log('Running on port: ' + port);
});
