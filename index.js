const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000 ;

function sseSendData(data) {
  return `data: ${JSON.stringify(data)}\n\n`;
}

function sseSendEventData(event, data) {
  return `event: ${event}\n data: ${JSON.stringify(data)}\n\n`;
}

app.use(express.static('./public'));

app.get('/helloworld', (req, res) => res.send('Hello World!'))

app.get('/sse', (req, res) => {
  let counter = 0,
    interval;

  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive'
  });
  res.flush();

  interval = setInterval(() => {
    counter = counter + 1;
    console.log(`test ${counter}`);
    res.write(sseSendData(`test ${counter}`));
    res.flushHeaders();
  }, 1000)

  res.on('close', () => {
    clearInterval(interval);
  })
});



app.listen(port, () => console.log(`sample-expressjs app listening on port ${port}!`))
