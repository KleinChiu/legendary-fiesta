declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_SERVER: string; // API server url to fetch data
    }
  }
}

export {};
