'use strict';

module.exports = (req, res, next) => {
  // after we do stuff and it work, then go on to the next middleware
  res.status(404).json({ msg: 'not found' });
  next();
}