const makeError = (msg: string): never => {
  throw new Error(msg);
};

const gameLoop = (): never => {
  while (true) {
    console.log("Game loop running");
  }
};
