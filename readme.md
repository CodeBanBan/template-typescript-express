
## Project Structure
- `_dist` Compile Typescript
- `app` Business Logic
- `env` Environment config
- `http` HTTP server
- `scripts` Script for running app eg. api, task-exec or runner
- `tasks` Small jobs 
- `test` unit test

## Package.json
- chai 4.x for CommonJS for this template use this version
- chai 5.x for ESModule

## Tasks
- use `scripts/task-exec.ts` for run task
- pass task-name param for run task
- eg. `ts-node scripts/exec-task.ts hello-task`
- `task-exec` will dynamic load module and run function `exec`
- `xxx-task` must extend `base-task` and implement function `exec`
- `base-task` will autoload app bootstrap
