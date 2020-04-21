import { SIGN_UP, SIGN_IN, SIGN_OUT, SET_LOADING, USERS_ERROR } from './types'

export const setLoading = () => ({ type: SET_LOADING })

export const signUp = user => async dispatch => {
  try {
    const response = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await response.json()
    dispatch({
      type: SIGN_UP,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error.message,
    })
  }
}

export const signIn = (email, password) => async dispatch => {
  try {
    const response = await fetch(`/users?email=${email}&password=${password}`)
    const data = await response.json()
    console.log(data)
    if (data.length === 0) throw new Error('Cannot find')
    dispatch({
      type: SIGN_IN,
      payload: data[0],
    })
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error.message,
    })
  }
}

export const signOut = () => async dispatch => {
  try {
    dispatch({
      type: SIGN_OUT,
    })
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error.response.data,
    })
  }
}
