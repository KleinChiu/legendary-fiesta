# Legendary Fiesta

[![CodeFactor](https://www.codefactor.io/repository/github/kleinchiu/legendary-fiesta/badge)](https://www.codefactor.io/repository/github/kleinchiu/legendary-fiesta)
![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/KleinChiu/legendary-fiesta)
![jsDelivr hits (GitHub)](https://img.shields.io/jsdelivr/gh/hm/KleinChiu/legendary-fiesta)
[![Deploy Vue app with GitHub Pages](https://github.com/KleinChiu/legendary-fiesta/actions/workflows/vite-gh-pages.yml/badge.svg?branch=main)](https://github.com/KleinChiu/legendary-fiesta/actions/workflows/vite-gh-pages.yml)
![GitHub tag (latest SemVer)](https://img.shields.io/github/v/tag/KleinChiu/legendary-fiesta?sort=semver)
![GitHub](https://img.shields.io/github/license/KleinChiu/legendary-fiesta)
![GitHub language count](https://img.shields.io/github/languages/count/KleinChiu/legendary-fiesta)
![GitHub top language](https://img.shields.io/github/languages/top/KleinChiu/legendary-fiesta)
![GitHub package.json dependency version (subfolder of monorepo)](https://img.shields.io/github/package-json/dependency-version/KleinChiu/legendary-fiesta/vue)

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

## Environment Variable

The app require the following env var to function properly.

- `API_SERVER`: url to api server. Default: http://localhost:5173/legendary-fiesta/data

## Notes

Mount [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) with the following setting in workspace.

```json
{
  "liveServer.settings.mount": [["/legendary-fiesta", "./dist"]]
}
```
