## eslint 2.10.1 issue

To reproduce run:

> npm install

> npm start

Output

```
Hash: 01c0ae25188d378f7353
Version: webpack 1.13.0
Time: 1371ms
    Asset     Size  Chunks             Chunk Names
bundle.js  1.75 kB       0  [emitted]  main
    + 1 hidden modules

ERROR in ./Counter.js

C:\Dev\eslint-issue\Counter.js
  2:23  error  Parsing error: Unexpected token =

? 1 problem (1 error, 0 warnings)

```

If you revert the version of eslint to `2.9.0`, no error occurs