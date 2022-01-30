let buffer = [];

onmessage = function(e) {
    const workerId = e.data[0];
    const consumeMB = e.data[1];

    console.log('Message received from main script: ' + workerId, consumeMB);
    
    // buffer = new Int8Array(1024*1024*consumeMB);
    for(let i=0; i < consumeMB * 1024 * 1024 / 8 / 1.4; i++) {
        buffer.push(1);
    };

    postMessage(['worker ' + workerId]);
}