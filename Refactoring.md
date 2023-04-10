# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
// Importing the built-in Node.js crypto module
const crypto = require("crypto");

// Defining a constant variable for a trivial partition key
const TRIVIAL_PARTITION_KEY = "0";

// Defining a constant variable for the maximum length of a partition key
const MAX_PARTITION_KEY_LENGTH = 256;

// Defining a function to generate a deterministic partition key based on an event
function deterministicPartitionKey(event) {
  // If no event is provided, return the trivial partition key
  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  // Generate a candidate partition key based on the event's partition key or the event itself
  const candidate = event.partitionKey || JSON.stringify(event);

  // If the candidate partition key is too long, hash it using the SHA3-512 algorithm
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

  // Otherwise, return the candidate partition key as is
  return candidate;
}

// Exporting the deterministicPartitionKey function for use in other modules
module.exports = { deterministicPartitionKey };