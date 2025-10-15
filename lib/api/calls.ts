// 3'rd party
import useSWR from "swr"
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios"

// local
import { endpoints } from "@/lib/api/endpoints"
import { getConfig } from "@/lib/utils"
import { type SignInSchemaType } from "@/lib/schemas"
// import { AssignRiderType, RiderWriteType, SignIn, ParcelBulkCreateType, AddTrackingType } from "@/lib/types"


const handleSuccess = (res: AxiosResponse) => {
    return res.data
}
const handleError = (error: AxiosError) => {
    console.log(error.response?.data)

    throw error
}
const getCall = async (endpoint: string, config?: AxiosRequestConfig) => {
    return axios.get(endpoint, config).then(res => handleSuccess(res)).catch(err => handleError(err))
}
const postCall = async (endpoint: string, data?: any, config?: AxiosRequestConfig) => {
    return axios.post(endpoint, data, config).then(res => handleSuccess(res)).catch(err => handleError(err))
}
// const deleteCall = async (endpoint: string, config?: AxiosRequestConfig) => {
//     return axios.delete(endpoint, config).then(res => handleSuccess(res)).catch(err => handleError(err))
// }

// fetchers
export const fetcher = (endpoint: string) => getCall(endpoint, getConfig())
export const authLessFetcher = (endpoint: string) => getCall(endpoint)

// mutators
export async function postCredentials(endpoint: string, { arg }: { arg: SignInSchemaType }) {
    return postCall(endpoint, arg)
}

// query hooks
export const useFetchedProfile = () => useSWR(endpoints.profile_get_update, fetcher)
