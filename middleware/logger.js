const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`
  );
  // Calling next, tells the app what is the next
  next();
};

module.exports = logger;
