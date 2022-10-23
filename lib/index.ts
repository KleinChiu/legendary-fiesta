export const sleep = (mil: number) =>
  new Promise<void>((res) => setTimeout(res, mil));
