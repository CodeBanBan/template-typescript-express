
## Branch Detail
- `main`: merge all branch
- `base`: base structure and express
- `mysql`: add feature connect mysql with Sequelize
- `redis`: add feature connect redis with ioredis

## Project Structure
- `_dist` Compile Typescript
- `app` Business Logic
- `env` Environment config
- `http` HTTP server
- `scripts` Script for running app eg. api, task-exec or runner
- `tasks` Small jobs 
- `test` unit test

## Package.json
- ...

## Tasks
- use `scripts/task-exec.ts` for run task
- pass task-name param for run task
- eg. `ts-node scripts/exec-task.ts hello-task`
  - `task-exec` will dynamic load module and run function `exec`
  - `xxx-task` must extend `base-task` and implement function `exec`
  - `base-task` will autoload app bootstrap
