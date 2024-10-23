import http from '@/utils/http'
import type * as T from './type'

export type * from './type'

const BASE_URL = '/system/news'

/** @desc 查询角色 */
export function getUserInfoTest(id: string) {
    return http.get<T.TestResp>(`${BASE_URL}/test/${id}`)
}
