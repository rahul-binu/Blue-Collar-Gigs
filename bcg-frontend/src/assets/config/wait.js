export function waitAndReturnNull() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(null);
        }, 1000); 
    });
}

// Example usage:
waitAndReturnNull().then(result => {
    console.log(result); // This will output: null
});
