const jwt = require("jsonwebtoken");

const { findUserByProperty } = require("../service/user");

const verifyToken = async (req, res, next) => {
  try { 
    let token = req.headers.authorization;
    token = token.split(" ")[1];

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const user = await findUserByProperty("_id", decoded._id);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized. No user found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error(error); 
    return res.status(400).json({ message: "Invalid token" }); 
  }
};

module.exports = verifyToken;
