import axios from 'axios'

export const base_URL = 'https://neko-back.herokuapp.com/2.0/'

export const instance = axios.create({
  baseURL: base_URL,
  withCredentials: true
})



