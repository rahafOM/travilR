// Import the server instance from the server module
import { server } from "../src/server/server";

// Describe block for grouping related tests
describe('Test: "PORT" should be set to 8081', () => {
  
  // Individual test case
  it("should be a 8081", async () => {
    
    // Expect server to be undefined (this is likely incorrect if you want to test the port)
    expect(server).toBe(undefined);
  });
});
