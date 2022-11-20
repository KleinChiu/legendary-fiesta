export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      readonly API_SERVER: string; // API server url to fetch data
      readonly npm_package_name: string;
      readonly npm_package_version: string;
    }
  }
}
