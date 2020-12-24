export function sleep(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, num);
    })
}