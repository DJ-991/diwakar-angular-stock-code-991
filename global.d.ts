declare module 'finnhub' {
  class DefaultApi {
    quote: (symbol: string, callback: (a, b, c) => void) => XMLHttpRequest;
    symbolSearch: (
      symbol: string,
      callback: (a, b, c) => void
    ) => XMLHttpRequest;
    insiderSentiment: (
      symbol: string,
      from: string,
      to: string,
      callback: (a, b, c) => void
    ) => XMLHttpRequest;
  }
  const ApiClient: Client;
}
interface Client {
  instance: {
    authentications: { api_key: { [key: string]: String } };
  };
}
