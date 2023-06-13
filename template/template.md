# website-plugins

A list of universal plugins for node, vitejs, webpack, rollup...

## Plugins

{% for(const plugin of plugins){ _%}
- [{%= plugin.name %}](./plugins/{%= plugin.name %}/README.md): {%= plugin.description %}
{%_ } _%}
