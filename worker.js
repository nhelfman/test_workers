onmessage = function(e) {
    const workerId = e.data[0];
    console.log('Message received from main script: ' + workerId);
 
    postMessage(['worker ' + workerId]);
  }