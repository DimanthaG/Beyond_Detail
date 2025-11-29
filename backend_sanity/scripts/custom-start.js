const getDevServer = require('@sanity/server/lib/devServer').default;
const path = require('path');

const port = process.env.PORT || 3333;
const basePath = process.cwd();

try {
  const server = getDevServer({
    basePath: basePath
  });

  server.listen(port, (err) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Sanity Studio started at http://localhost:${port}`);
  });
} catch (err) {
  console.error('Failed to start server:', err);
  process.exit(1);
}

