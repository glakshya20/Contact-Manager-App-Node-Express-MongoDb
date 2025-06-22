const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validatetoken = asyncHandler(async (req, resizeBy, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) {
        resizeBy.status(401);
        throw new Error("User isn't Authorized ");
      }
      req.user = decoded.user;
      next();
    });

    if (!token) {
      resizeBy.status(401);
      throw new Error("User isn't Authorized or Token is missing");
    }
  }
});

module.exports = validatetoken;
