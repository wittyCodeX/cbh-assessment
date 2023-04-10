describe("deterministicPartitionKey", () => {
  const event = { partitionKey: "test" };
  const longEvent = { data: "a".repeat(300) };

  it("returns the trivial partition key if no event is provided", () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it("returns the event's partition key if it exists and is within the maximum length", () => {
    expect(deterministicPartitionKey(event)).toBe("test");
  });

  it("returns the event as a string if it has no partition key and is within the maximum length", () => {
    expect(deterministicPartitionKey(longEvent)).toBe(
      JSON.stringify(longEvent)
    );
  });

  it("hashes the candidate partition key using SHA3-512 if it is too long", () => {
    const hashedKey = crypto
      .createHash("sha3-512")
      .update(longEvent)
      .digest("hex");
    expect(deterministicPartitionKey(longEvent)).toBe(hashedKey);
  });
});
