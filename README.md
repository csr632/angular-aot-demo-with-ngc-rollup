# learn-angular-aot
A minimum project to learn aot with Angular5 and rollup. Also demonstrate how to import 3rd lib such as jQuery.

## command explain:
1. `npm run compile`: use `ngc` to compile the "angular syntax" into js. You can observe the output in `compile_output/`.
2. `npm run rollup`: rollup the whole application(including application code, angular framework, 3rd lib, **except lazy-loading modules**) into one file: `serve/rollup-output.js`.
3. `npm run serve`: copy the necessary files into the `serve/` directory, and serve this folder with lite-server.
4. `npm run clean`: clean `compile_output/` and `serve/`.
5. `npm run aot`: "npm run clean && npm run compile && npm run rollup && npm run serve".
