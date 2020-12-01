const spinnerChars = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];
let timer = 100;

for (let i = 0; i <= 1; i++) {
  for (const item of spinnerChars) {
    setTimeout(() => {
      process.stdout.write(item);
    }, timer);
    timer += 200;
  }
}
setTimeout(() => {
  process.stdout.write("\n");
}, 1700);
