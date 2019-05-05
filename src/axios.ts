import { AxiosRequestConfig, AxiosPromise, AxiosResponse } from './types'
import xhr from './xhr'
import { bulidURL } from './helps/url'
import { transformRequest, transformResponse } from './helps/data'
import { processHeaders } from './helps/headers'

function axios(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => transformResponseData(res))
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestConfig(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return bulidURL(url, params)
}

function transformRequestConfig(config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders(config: AxiosRequestConfig): any {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}

export default axios
