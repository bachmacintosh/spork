# Spork

⚠️ This bot is still early in development. I recommend waiting for Version 1.0.0 before using.

Spork is a Discord Bot that will (eventually) return either Random or Pseudorandom entities right into your Discord Guild. Random elements are fetching using the [Random.org API](https://api.random.org), while Pseudorandom elements are fetched using the [Node.js Crypto API](https://nodejs.org/api/crypto.html).

## Add to Your Server

(Coming Soon)

## Run Your Own Instance of This Bot

### Environment

You must have the following environment variables set to build and run the bot:

- `DATABASE_URL` - A Connection String pointing to a MySQL database; this bot was built to run on PlanetScale, but any MySQL Database should suffice.
- `DISCORD_APP_ID` - Your app's Application ID from the [Discord Developer Portal](https://discord.com/developers/applications) under the app's General Information page.
- `DISCORD_BOT_TOKEN` - Your app's Token from the [Discord Developer Portal](https://discord.com/developers/applications) under the app's Bot page.
- `DISCORD_OWNER_ID` - The ID of the Discord User who owns the bot. Enable Developer Mode in your Discord client if not already, right-click your user, and choose Copy ID.
- `DISCORD_OWNER_GUILD` - The ID of the Guild the bot should add administrative commands to (e.g. the `/shutdown` command). In Discord, right-click the server name, and choose Copy ID.
- `DISCORD_WEBHOOK_URL` - Used to post errors and any other important info the bot's owner should be aware of.
- `LOG_LEVEL` - One of 'fatal', 'error', 'warn', 'info', 'debug', 'trace' or 'silent'. I recommend setting to at least `info` and at most `warn` in production.

If you want to make changes to the database schema, you'll also need to add one more environment variable.

- `SHADOW_DATABASE_URL` - Used by Prisma to check for schema deift against migrations

### Install

Clone this repository and install the dependencies.

```shell
npm install
```

Then build the bot.

```shell
npm run build
```

Start the bot.

```shell
npm start
```

You can use the `/shutdown` command in your bot's Home Guild, or by sending a `SIGINT` to the bot.
