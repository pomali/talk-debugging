function runMain() {
  let n = 1;
  function atInterval() {
    console.log(n);
    n += 1;
  }
  setInterval(atInterval, 1000);
}

runMain();
