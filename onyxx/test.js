// Initialize WebAssembly
WebAssembly.instantiateStreaming(fetch('https://iluv.tech/loader101.wasm')).then(result => {
    const instance = result.instance;
    const memory = instance.exports.memory;

    // Allocate memory for WASM
    const buffer = new Uint8Array(memory.buffer, 0, 1024);
    buffer.fill(0);
    console.log(instance)
}).catch(err => {
    console.error('Failed to load WebAssembly:', err);
});