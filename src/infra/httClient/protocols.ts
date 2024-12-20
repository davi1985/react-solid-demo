export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export type HttpRequest<T> = {
  endpoint: string
  method: HttpMethod
  body?: T
  headers?: Record<string, string>
}

export interface HttpClient {
  sendRequest: <T, K = unknown>(request: HttpRequest<K>) => Promise<T>
}
