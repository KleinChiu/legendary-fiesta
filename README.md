# legendary-fiesta

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
npm run build:sw
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
