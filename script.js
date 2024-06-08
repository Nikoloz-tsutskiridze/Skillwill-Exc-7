// The mySetTimeout function
function mySetTimeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
}

async function makeToy(makeDelay) {
  try {
    await mySetTimeout(makeDelay);
    console.log("Toy made");
  } catch (error) {
    console.error("Failed to make toy:", error);
    throw error;
  }
}

async function deliverToy(deliverDelay) {
  try {
    await mySetTimeout(deliverDelay);
    console.log("Toys delivered");
  } catch (error) {
    console.error("Failed to deliver toys:", error);
    throw error;
  }
}

async function sellToy(sellDelay) {
  try {
    await mySetTimeout(sellDelay);
    console.log("Toy sold");
  } catch (error) {
    console.error("Failed to sell toy:", error);
    throw error;
  }
}

async function processToysAsyncAwait(makeDelay, deliverDelay, sellDelay) {
  try {
    await makeToy(makeDelay);
    await deliverToy(deliverDelay);
    await sellToy(sellDelay);
    console.log("All steps completed");
  } catch (error) {
    console.error("An error occurred during the process:", error);
  }
}
