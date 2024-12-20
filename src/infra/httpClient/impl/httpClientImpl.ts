import axios, { AxiosInstance, AxiosError } from 'axios'
import { HttpClient, HttpRequest } from '../protocols'

export class HttpClientImpl implements HttpClient {
  private constructor(private api: AxiosInstance = axios) {}

  static create() {
    return new HttpClientImpl()
  }

  async sendRequest<T, K = unknown>(props: HttpRequest<K>) {
    const { method, body, endpoint, headers } = props

    try {
      const { data } = await this.api.request<T>({
        url: endpoint,
        method,
        headers,
        data: body,
      })

      return data
    } catch (err) {
      console.log({ err })
      const error = err as AxiosError
      const status = error.response?.status || 500
      const message = error.response?.data || error.message

      throw new Error(`Request failed with status ${status}: ${message}`)
    }
  }
}
