const wait = (ms) =>
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(`Вызов wait ${ms}`);
      res(ms);
    }, ms);
  });

// Пример await

const start = async () => {
  console.time('await');
  await wait(1000);
  await wait(1000);
  await wait(1000);
  await wait(1000);
  await wait(1000);
  console.timeEnd('await');
};

start();

// Пример then

const start2 = async () => {
  console.time('then');
  wait(1200)
    .then(() => wait(1200))
    .then(() => wait(1200))
    .then(() => wait(1200))
    .then(() => wait(1200))
    .catch((err) => console.log(err))

  console.timeEnd('then');
};

start2(2)