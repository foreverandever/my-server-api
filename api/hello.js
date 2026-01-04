export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    const { name = '访客' } = req.body;
    res.status(200).json({
      success: true,
      message: `你好，${name}！`,
      method: 'POST',
      your_data: req.body,
      timestamp: new Date().toISOString()
    });
  } else if (req.method === 'GET') {
    res.status(200).json({
      message: '这是一个API接口，请使用POST方法发送JSON数据。',
      example_post_body: { name: '你的名字' }
    });
  } else {
    res.status(405).json({ error: '不支持的方法' });
  }
}