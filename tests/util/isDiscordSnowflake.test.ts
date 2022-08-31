import isDiscordSnowflake from "../../src/util/isDiscordSnowflake";

test("Returns true on valid Discord Snowflake", () => {
	expect(isDiscordSnowflake("340870098183258112")).toBe(true);
});

test("Returns false on invalid Discord Snowflake", () => {
	expect(isDiscordSnowflake("Cheesecake!")).toBe(false);
});

test("Returns false if decimal integer has 0 bits in timestamp area", () => {
	expect(isDiscordSnowflake("4194303")).toBe(false);
});
