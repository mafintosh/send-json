module.exports = function(req, res, obj, opts) {
  opts = opts || {};

  if (opts.pretty) opts.space = '    ';

  var json = JSON.stringify(obj, null, opts.space || '');
  var buf = new Buffer(json);

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Length', Buffer.byteLength(json));
  res.end(json);
};
