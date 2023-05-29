const jwt = require("jsonwebtoken");
const { jwt_secret } = require("../config/config");

const privateSign = jwt_secret;
const generateToken = (user) => {
  const token = jwt.sign(user, privateSign, { expiresIn: "12h" });
  return token;
};

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: "No estás autorizado" });
  const token = authHeader.split(" ")[1];
  jwt.verify(token, privateSign, (err, credentials) => {
    if (err) return res.status(403).json({ error: "No estás autorizado" });
    req.credential = credentials.user;
    next();
  });
};

module.exports = { generateToken, verifyToken };
