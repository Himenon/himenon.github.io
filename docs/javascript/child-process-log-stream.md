---
title: nodejsから実行するコマンドのログをstreamで出力する
keywords:
  - nodejs
  - command
  - exec
  - execSync
  - spawn
  - spawnSync
description: execSyncなどを利用すると、実行されたコマンドが完了したあとにログが返ってきます。ログをstreamで取得するにはspawnを利用します。
---

以下のような実装を行うことでログを適宜取得できる。

```typescript
import { spawn } from "child_process";

const cmd = (command: string, args: string, cwd: string): Promise<void> => {
  const promise: Promise<void> = new Promise(resolve => {
    console.log(`${command} ${args}`);

    const childProcess = spawn(command, args.split(" "), { cwd, env });

    childProcess.stdout.on("data", data => {
      console.log(data.toString().trim()); // streamでログを出力する
    });

    childProcess.stdout.on("end", () => {
      resolve();
    });

  });
  return promise;
};
```