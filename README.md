
![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)


# ICE ID - Distributed Unique ID Generator
IceId is a lightweight and efficient distributed unique ID generator based on the Snowflake algorithm. It generates time-ordered, unique IDs for distributed systems by combining a timestamp, datacenter ID, machine ID, and a sequence number. Ideal for use cases like distributed databases, logs, or anywhere globally unique and ordered identifiers are needed.


## Authors

- [@arupsarkar96](https://www.github.com/arupsarkar96)


## Installation

Install iceid with npm

```bash
  npm install iceid
```
    
## Usage/Examples

```javascript
import IceId from 'iceid';

const idGenerator = new IceId(1, 1); // datacenterId, machineId
const uniqueId = idGenerator.generate();

console.log(uniqueId); // Prints a unique ID
```


## Features

- Time-based IDs: IDs maintain chronological order, preserving the sequence in which they were generated.
- Distributed Friendly: Supports up to 32 datacenters and 32 machines per datacenter with a unique identifier for each.
- High Throughput: Generates thousands of unique IDs per second, thanks to the 12-bit sequence counter.
- Collision-Free: Designed to ensure no ID collisions across distributed nodes within the same datacenter.
- Node.js Compatible: Fully compatible with Node.js environments, using native BigInt for high precision.

## Use Cases
- Distributed systems requiring unique and ordered identifiers
- Event tracking, log generation, and database indexing
- Sharded databases and multi-region deployments
