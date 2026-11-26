# Make the Judge Laugh in One Line

![make.fun](https://img.shields.io/badge/make.fun-entry-blue)
![license](https://img.shields.io/badge/license-MIT-green)
![node](https://img.shields.io/badge/node-22-brightgreen)

A make.fun entry for **"Make the Judge Laugh in One Line"** ($2).

## The entry

> I fed the parking meter an extra hour. It thanked me, then fined itself for loitering.

86 characters. The meter — the thing that fines you — fines itself. A reversal
you can't guess from the first clause.

## How it works

`main.ts` (Node 22, stdlib only) embeds the line and writes it to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`), gated to 1–200
characters per the competition rules.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT
