export const USERS_LOADING = 'USERS_LOADING'
export const USERS_FAIL = 'USERS_FAIL'
export const USERS_SUCCESS = 'USERS_SUCCESS'

export type UsersType = {
  id: number
  name: string
  username: string
  email: string
  adress: Adress[]
  phone: string
  website: string
  company: Company[]
}
export type Adress = {
  adress: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
}

export type Company = {
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
export interface UsersLoading {
  type: typeof USERS_LOADING
}

export interface UsersFail {
  type: typeof USERS_FAIL
}

export interface UsersSuccess {
  type: typeof USERS_SUCCESS
  payload: UsersType
}

export type UsersDispatchTypes = UsersLoading | UsersFail | UsersSuccess
