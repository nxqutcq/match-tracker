import axios from 'axios'
import { ApiResponse, Match } from '../types'

const BASE_URL = 'https://app.ftoyd.com/fronttemp-service/'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const getMatchesList = async (): Promise<Match[]> => {
  try {
    const response = await axiosInstance.get<ApiResponse>('fronttemp')
    if (!response.data.ok) {
      throw new Error('API response not ok')
    }
    return response.data.data.matches
  } catch (error) {
    console.error('Error fetching matches list:', error)
    throw error
  }
}
