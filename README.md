# ember-cli-hook-scripts

This addon lets you customize build events by placing executable scripts under `~/.config/ember/hooks/<hook name>`. `hook name` should be replaced by the name of the ember-cli hook you would like to use (e.g. `postBuild` or `buildError`).

## Installation

```
$ ember instal ember-cli-hook-scripts
```

## Rationale

This plugin was inspired by `ember-cli-build-notifications`, but is intended to give you more flexibility regarding how you would like your notifications delivered.

## License
MIT
