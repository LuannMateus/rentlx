import http from 'http';

const PORT = process.env.PORT || 3000;

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
