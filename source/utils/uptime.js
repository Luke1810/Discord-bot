/**@param {bool}asMessage*/
module.exports = function uptime(asMessage = true) {
  const
    up = process.uptime(),
    d = Math.floor(up / (60 * 60 * 24)),
    h = Math.floor((up / (60 * 60)) % 24),
    m = Math.floor((up / 60) % 60),
    s = Math.floor(up % 60);

  let msg;
  if (asMessage) {
    if (d) msg = `${d} Tagen, ${h} Stunden, ${m} Minuten und ${s} Sekunden`;
    else if (h) msg = `${h} Stunden, ${m} Minuten und ${s} Sekunden`;
    else msg = m ? `${m} Minuten und ${s} Sekunden` : `${s} Sekunden`;
  }

  return {
    total: up * 1000,
    formatted: msg ?? `${d.toString().padStart(2, '0')}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  };
};