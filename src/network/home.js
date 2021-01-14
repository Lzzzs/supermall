import {request} from './request'

export function getHomemMultidata() {
  return request({
    url: 'home/multidata'
  })
}