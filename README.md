# mf-navbar

Global navigation bar micro frontend for the [single-spa demo](https://mf.malaymishra.com).

**Live:** [navbar-mf.malaymishra.com](https://navbar-mf.malaymishra.com)

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![single-spa](https://img.shields.io/badge/single--spa-6-blueviolet)
![Webpack](https://img.shields.io/badge/Webpack-5-8DD6F9?logo=webpack&logoColor=black)

## Quick Start

```bash
npm install
npm start       # dev server on http://localhost:9001
```

## Build

```bash
npm run build   # production bundle → dist/
```

## Integration

The root-config orchestrator at [`mf-root-config`](../mf-root-config) registers this app via an import map:

```json
{
  "imports": {
    "navigation": "https://navbar-mf.malaymishra.com/navigation.js"
  }
}
```

single-spa mounts this navbar on every route — it stays visible across all micro app transitions.

## License

MIT
