/* eslint-disable no-bitwise -- We use bitwise operators to work on Discord Snowflake binary, not a typo. */
export default function isDiscordSnowflake(snowflakeString: string): boolean {
	const discordEpoch = 1420070400000n;
	const timestampPositionBits = 22n;
	const workerIdPositionBits = 17n;
	const processIdPositionBits = 12n;
	const workerIdMask = 0x3e000n;
	const processIdMask = 0x1f000n;
	const incrementMask = 0xfffn;

	try {
		const snowflake = BigInt(snowflakeString);
		if (snowflake >> timestampPositionBits === 0n) {
			return false;
		}
		const timestamp = ((snowflake >> timestampPositionBits) + discordEpoch).toString();
		const workerId = ((snowflake & workerIdMask) >> workerIdPositionBits).toString();
		const processId = ((snowflake & processIdMask) >> processIdPositionBits).toString();
		const increment = (snowflake & incrementMask).toString();
		return (
			!isNaN(parseInt(timestamp, 10)) &&
			!isNaN(parseInt(workerId, 10)) &&
			!isNaN(parseInt(processId, 10)) &&
			!isNaN(parseInt(increment, 10))
		);
	} catch {
		return false;
	}
}
