import { SIGN_UP, SIGN_IN, SIGN_OUT, SET_LOADING, USERS_ERROR } from './types'

export const setLoading = () => ({ type: SET_LOADING })

export const signUp = user => async dispatch => {
  try {
    const checkRes = await fetch(`/users?email=${user.email}`)
    const checkData = await checkRes.json()
    if (checkData.length > 0) {
      return `Email ${user.email} has already been taken.`
    }

    const signUpRes = await fetch('/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const signUpData = await signUpRes.json()
    dispatch({
      type: SIGN_UP,
      payload: signUpData,
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
    if (data.length === 0) {
      return 'Email or password is invalid.'
    }
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
