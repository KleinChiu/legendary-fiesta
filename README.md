# Legendary Fiesta

[![Deploy Vue app with GitHub Pages](https://github.com/KleinChiu/legendary-fiesta/actions/workflows/vite-gh-pages.yml/badge.svg?branch=main)](https://github.com/KleinChiu/legendary-fiesta/actions/workflows/vite-gh-pages.yml)
![Website](https://img.shields.io/website?down_color=lightgrey&down_message=offline&up_color=blue&up_message=online&url=https%3A%2F%2Fkleinchiu.github.io%2Flegendary-fiesta%2F)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/KleinChiu/legendary-fiesta)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/KleinChiu/legendary-fiesta?sort=semver)
![GitHub](https://img.shields.io/github/license/KleinChiu/legendary-fiesta)
![GitHub language count](https://img.shields.io/github/languages/count/KleinChiu/legendary-fiesta)
![GitHub top language](https://img.shields.io/github/languages/top/KleinChiu/legendary-fiesta)
![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/KleinChiu/legendary-fiesta/vue)
[![CodeFactor](https://www.codefactor.io/repository/github/kleinchiu/legendary-fiesta/badge)](https://www.codefactor.io/repository/github/kleinchiu/legendary-fiesta)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/KleinChiu/legendary-fiesta)

Try it out at the [GitHub Page](https://kleinchiu.github.io/legendary-fiesta/)!

Tech demo for the follow:

- PWA (manifest.json)
  - installable web app
- Service worker
  - cacheing for offline
  - prompt install in browser (chrome, edge)
- IndexedDB
- LocalStorage

## Contribution

```sh
npm install
npm run serve
```

### HTTPS

This app include share feature, which require secure context.
By providing `cert.pem` and `key.pem` in `certs` directory, vite will be execute in HTTPS with config.

### Environment Variable

The app require the following env var to function properly.

- `API_SERVER`: url to api server. Default: http://localhost:5173/legendary-fiesta/data

## Notes

Mount [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) with the following setting in workspace.

```json
{
  "liveServer.settings.mount": [["/legendary-fiesta", "./dist"]]
}
```
