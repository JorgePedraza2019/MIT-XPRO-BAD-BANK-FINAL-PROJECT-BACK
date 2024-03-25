const jwt = require('jsonwebtoken');

// Function to generate a JWT token for the user
function generateToken(user) {
    // Signs a new token with user data and a secret key
    return jwt.sign(
        {
            id: user._id,           // User ID
            email: user.email,      // User email
            name: user.name,        // User name
            balance: user.balance,  // User balance
            role: user.role         // User role (e.g., admin, customer)
        }, 
        'your_secret_key',        // Secret key used for signing the token (should be stored securely and not hardcoded)
        { expiresIn: '1h' }       // Token expiration time (1 hour in this case)
    );
}

// Exports the generateToken function for use in other modules
module.exports = { generateToken };
