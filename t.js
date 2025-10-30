WebAssembly.compileStreaming(fetch('https://iluv.tech/loader101.wasm'))
    .then(module => {
        console.log('WASM imports:', WebAssembly.Module.imports(module));
    })
    .catch(err => {
        console.error('Failed to inspect WASM imports:', err);
    });