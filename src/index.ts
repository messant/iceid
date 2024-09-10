class IceId {
    private readonly epoch: number;
    private readonly datacenterId: number;
    private readonly machineId: number;
    private sequence: number;
    private lastTimestamp: number;

    constructor(datacenterId: number, machineId: number) {
        if (datacenterId < 0 || datacenterId > 31) {
            throw new Error('datacenterId must be between 0 and 31');
        }
        if (machineId < 0 || machineId > 31) {
            throw new Error('machineId must be between 0 and 31');
        }

        this.epoch = 1609459200000; // Fixed epoch: January 1, 2021
        this.datacenterId = datacenterId;
        this.machineId = machineId;
        this.sequence = 0;
        this.lastTimestamp = -1;
    }

    generate(): string {
        let timestamp = this.currentTimestamp();

        if (timestamp < this.lastTimestamp) {
            throw new Error('Clock moved backwards.');
        }

        if (this.lastTimestamp === timestamp) {
            this.sequence = (this.sequence + 1) & 0xfff; // 12-bit sequence

            if (this.sequence === 0) {
                // Wait for the next millisecond
                while (timestamp <= this.lastTimestamp) {
                    timestamp = this.currentTimestamp();
                }
            }
        } else {
            this.sequence = 0;
        }

        this.lastTimestamp = timestamp;

        const id = ((BigInt(timestamp - this.epoch) << 22n) |
            (BigInt(this.datacenterId) << 17n) |
            (BigInt(this.machineId) << 12n) |
            BigInt(this.sequence)).toString();

        return id;
    }

    private currentTimestamp(): number {
        return Date.now();
    }
}

export default IceId;
