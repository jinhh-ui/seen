export default async function handler(req, res) {
  const { query } = req.body;
  const CLIENT_ID = 'dgF9EXTz4RYp9dwxTKOc';
  const CLIENT_SECRET = 'weGrgTH2EX';
  if (!query) return res.status(400).json({ error: 'query required' });
  try {
    const response = await fetch(`https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(query)}&display=6&sort=sim`, {
      headers: {
        'X-Naver-Client-Id': CLIENT_ID,
        'X-Naver-Client-Secret': CLIENT_SECRET
      }
    });
    const data = await response.json();
    const results = (data.items || []).map(item => ({ title: item.title.replace(/<[^>]*>/g, ''), link: item.link, image: item.image, price: item.lprice, retailer: item.mallName }));
    return res.status(200).json({ results });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
