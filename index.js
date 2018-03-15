'use strict';

module.exports = function(ms) {
  if (typeof ms !== 'number') {
    throw new Error("need millseconds.");
  }
  let round = ms > 0 ? Math.floor : Math.ceil;
  return  {
    days: round(ms / (1000 * 60 * 60 * 24)),
    hours: round(ms / (1000 * 60 * 60)) % 24,
    minutes: round(ms / (1000 * 60)) % 60,
    millseconds: round(ms) % 1000
  }
};