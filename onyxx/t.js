WebAssembly.compileStreaming(fetch('https://wasm-n7k1.vercel.app/loader101.wasm'))
    .then(module => {
        console.log('WASM imports:', WebAssembly.Module.imports(module));
    })
    .catch(err => {
        console.error('Failed to inspect WASM imports:', err);

    });
