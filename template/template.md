# website-plugins

A list of plugins for node, vitejs, webpack, rollup...

## Plugins

{%_ for(const plugin of plugins){ %}

- [{%= plugin.name %}](./plugins/{%= plugin.name %}/README.md): {%= plugin.description %}
  {%_ } %}
