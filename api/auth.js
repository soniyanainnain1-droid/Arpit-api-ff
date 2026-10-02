module.exports = (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code } = req.body || {};
  if (!process.env.HUB_ACCESS_CODE) return res.status(500).json({ error: 'HUB_ACCESS_CODE is not configured' });
  if (typeof code !== 'string' || code !== process.env.HUB_ACCESS_CODE) return res.status(401).json({ error: 'Unauthorized' });
  return res.status(200).json({ ok: true });
};
