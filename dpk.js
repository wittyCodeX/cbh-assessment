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
