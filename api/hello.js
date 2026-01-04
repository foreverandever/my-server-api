// api/hello.js - 处理POST请求并返回JSON
export default function handler(req, res) {
  // 设置CORS头部，允许跨域请求
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    // 处理预检请求
    return res.status(200).end();
  }
  
  if (req.method === 'POST') {
    try {
      // 获取POST请求的JSON数据
      const body = req.body;
      const name = body?.name || '访客';
      
      // 构建JSON响应
      const responseData = {
        success: true,
        message: `你好，${name}！`,
        method: 'POST',
        your_data: body,
        timestamp: new Date().toISOString(),
        server: 'Vercel Serverless Function',
        note: '这个API完全免费且自动部署'
      };
      
      return res.status(200).json(responseData);
    } catch (error) {
      return res.status(400).json({ 
        success: false, 
        error: '无效的JSON数据' 
      });
    }
  } 
  else if (req.method === 'GET') {
    // 响应GET请求（方便浏览器直接测试）
    return res.status(200).json({
      message: '这是一个API接口，请使用POST方法发送JSON数据。',
      example_post_body: { name: '你的名字', age: 30 },
      endpoint: '/api/hello',
      supported_methods: ['POST', 'GET']
    });
  } 
  else {
    return res.status(405).json({ 
      error: '不支持的方法',
      supported_methods: ['POST', 'GET', 'OPTIONS']
    });
  }
}