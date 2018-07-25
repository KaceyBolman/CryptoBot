# CryptoBot

## What does it do?

This project will allow you to run a `Crypto Bot` *trading bot* to provide liquidity to markets where a spread exists

## How to get it running?

Install NodeJS v9.x ( I suggest NVM )

Install packages

```bash
npm install
```

Copy the base conf

```bash
cp config/sample.js config/default.js
```

Edit the config with your settings

```bash
vim config/default.js
```

Run with the following command

```bash
./CryptoBot.js
```

Once Running, the output should look like this

![Sample BOT run](https://raw.githubusercontent.com/KaceyBolman/CryptoBot/master/img/output.png)

Check out [Sample BOT Trades](https://raw.githubusercontent.com/KaceyBolman/CryptoBot/master/sample_trades.ods) for an idea of what you can do with this `BOT`

## Supported exchanges?

Right now I have been only using the bot with `cryptopia`, but in theory it will work with any exchange that is on this `CCXT` support list

## Known issues?

TODO: We need to find the issues and report them
