# universal-plugins

A list of universal plugins for node, vitejs, webpack, rollup...

## Important !

This project is not maintened anymore but the code of every plugins are still working so just make it work for your code by yourself :)

## Plugins

{% for(const plugin of plugins){ _%}

- [{%= plugin.name %}](./plugins/{%= plugin.name %}/README.md): {%= plugin.description %}
  {%_ } _%}
