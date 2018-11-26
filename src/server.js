import express from 'express';
import Html from '../client/Html';

const port = 3000;
const server = express();

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Content-Length");
  res.header('Access-Control-Expose-Headers','Cache-Control,Content-Language,Content-Type,Expires,Last-Modified,Pragma,Content-Length');
  next();
});

// Creating a single index route to server our React application from.
server.get('*', (req, res) => {
  
  const title = 'Server side Rendering with Styled Components';

  res.send(
    Html({
      title
    })
  );
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);




