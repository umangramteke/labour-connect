const serverless = require('serverless-http');
const app = require('../../server/server');

const handler = serverless(app);

exports.handler = async (event, context) => {
  // Normalize Netlify Function URL path so Express /api routes match seamlessly
  if (event.path && event.path.startsWith('/.netlify/functions/api')) {
    const subPath = event.path.replace('/.netlify/functions/api', '');
    event.path = subPath.startsWith('/api') ? subPath : '/api' + (subPath || '');
  }
  return await handler(event, context);
};
