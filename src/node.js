function* sleep(ms, val) {
    return yield new Promise(r => setTimeout(() => r(val), ms))
}
function* test(fl, time = 1e3) {
    yield 0
    return fl ? yield* sleep(time, 'reg') : yield 2
}
function* each() {
    let sum = 0
    for (let i = 0; i < 1e6; i++)
        sum += yield* test()
    return yield sum
}
function* test2() {
    Promise.resolve().then(() => console.log('after'))
    console.log('sum:', yield* each())

    Promise.resolve().then(() => console.log('before sleep'))
    for (let i = 10; i--;)
        console.log(`r${i}=`, yield* test(1, 100))

    console.log('sum:', yield* each())
}

asyncWrapper(test2)

function asyncWrapper(func) {
    const it = func();
    it.next();
}