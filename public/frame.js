// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load();

// Create a broadcast channel to return the fingerprint.
const fpChannel = new BroadcastChannel("fingerprint");

// Get the visitor identifier when you need it.
fpPromise
  .then((fp) => fp.get())
  .then((result) => {
    // Send the fingerprinting data on the broadcast channel.
    fpChannel.postMessage(result);
    // Allow for garbage collection to stop a memory leak.
    fpChannel.close();
  });
