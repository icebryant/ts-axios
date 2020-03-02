import { AxiosRequestConfig } from './types'
import xhr from './xhr'
import { buildUrl } from './helpers/url'
import { transformRequest } from './helpers/data'

function axios(config: AxiosRequestConfig): void {
  prossessConfig(config)
  xhr(config)
}
function prossessConfig(config: AxiosRequestConfig): void {
  config.url = transformUrl(config)
  config.data = transRequestData(config)
}
function transformUrl(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildUrl(url, params)
}
function transRequestData(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}
export default axios
