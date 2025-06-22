const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        title: "VALIDATION FAILED",
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      res.json({
        title: "NOT FOUND",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.UNAUTHORIZED:
      res.json({
        title: "Un-authorized",
        message: err.message,
        stackTrace: err.stack,
      });
    case constants.FORBIDDEN:
      res.json({
        title: "Forbidden",
        message: err.message,
        stackTrace: err.stack,
      });

    case constants.SERVER_ERROR:
      res.json({
        title: "SERVER ERROR IT IS",
        message: err.message,
        stackTrace: err.stack,
      });
    default:
      console.log("NO error all good !");
      break;
  }
};

module.exports = errorHandler;
