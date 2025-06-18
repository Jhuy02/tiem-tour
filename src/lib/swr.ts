import {ENV_CMS} from '@/config-global.env'

const baseURL = process.env.NEXT_PUBLIC_API!
export const fetcher = async (url: string, baseCustom?: string) => {
  const response = await fetch(`${baseCustom || baseURL}${url}`)
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return response.json()
}

export const fetcherCMS = async (url: string) => {
  const response = await fetch(`${ENV_CMS}${url}`)
  if (!response.ok) {
    throw new Error('An error occurred while fetching the data.')
  }
  return response.json()
}
