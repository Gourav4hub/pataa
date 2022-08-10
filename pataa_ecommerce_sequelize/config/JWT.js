const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const ApiResponse = require('../routers/responses/ApiResponse');
// get config vars
dotenv.config();

class JWT 
{
    generateAccessToken(email) {
        return jwt.sign({user:email}, process.env.TOKEN_SECRET, 
            { expiresIn: '5m' });
    }

    authenticateToken = () => (req, res, next) => 
    {
        const authHeader = req.headers['authorization']
        const token = authHeader && authHeader.split(' ')[1]
    
        if (token == null)
            res.status(500).json(new ApiResponse(false,null,"Token Not Found !"))
        else
        {
            jwt.verify(token, process.env.TOKEN_SECRET, (err,tokendata)=>
            {
                //console.log(err)    
                if (err)
                     res.status(500).json(new ApiResponse(false,null,"Invalid or Expire Token !"))
                else
                {                    
                    req.user_email = tokendata.user
                    next()
                }
            }) 
        }    

    };

}

module.exports = new JWT()