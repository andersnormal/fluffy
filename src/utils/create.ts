import { log } from './log'
import { createServer } from 'net'

const connections = {}

export default (socket: string) => {
  log('Creating server')

  const server = createServer(function (stream) {
    console.log('Connection acknowledged.');

    // Store all connections so we can terminate them if the server closes.
    // An object is better than an array for these.
    var self = Date.now();
    connections[self] = (stream);
    stream.on('end', function () {
      console.log('Client disconnected.')
      delete connections[self]
    })

    // Messages are buffers. use toString
    stream.on('data', function (msg) {
      log(msg.toString())
      // msg = msg.toString();
      // if (msg === '__snootbooped') {
      //   console.log("Client's snoot confirmed booped.");
      //   return;
      // }

      // console.log('Client:', msg);

      // if (msg === 'foo') {
      //   stream.write('bar');
      // }

      // if (msg === 'baz') {
      //   stream.write('qux');
      // }

      // if (msg === 'here come dat boi') {
      //   stream.write('Kill yourself.');
      // }

    });
  })
    .listen(socket)
    .on('connection', function (socket) {
      log('Client connected.')
      log('Sending boop.')
      socket.write('__boop')
      //console.log(Object.keys(socket));
    })
  return server;
}
