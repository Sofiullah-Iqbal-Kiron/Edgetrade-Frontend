// Backend API endpoints.


const API_BASE_V1 = "http://91.108.122.156/api/v1"

export const endpoints = {
    // core
    token_pair: `${API_BASE_V1}/token/`,

    // user
    profile_get_update: `${API_BASE_V1}/users/me/`,
}
