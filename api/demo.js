module.exports = (req, res) => {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const key = req.headers['x-api-key'];
  if (!key || !/^fah_[a-f0-9]{32}$/.test(key)) return res.status(401).json({ error: 'Missing or invalid demo API key. Generate a key in the hub and send it as x-api-key.' });
  return res.status(200).json({
    ok: true,
    service: 'FREE ARPIT API HUB',
    message: 'Demo API is working.',
    timestamp: new Date().toISOString(),
    note: 'This is a demonstration endpoint; generated keys are format-checked, not stored or individually revoked.'
  });
};
