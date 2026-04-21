export default async function handler(req, res) {
  const { imageUrl } = req.body;
  const API_KEY = 'AIzaSyCTC02B2iOnyksgl_fSDwn_Eg_BsKgzgCo';
  try {
    const response = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        requests: [{
          image: { source: { imageUri: imageUrl } },
          features: [{ type: 'LABEL_DETECTION', maxResults: 10 }, { type: 'IMAGE_PROPERTIES', maxResults: 1 }]
        }]
      })
    });
    const data = await response.json();
    const annotations = data.responses[0];
    return res.status(200).json({ labels: annotations.labelAnnotations || [], colors: [] });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
