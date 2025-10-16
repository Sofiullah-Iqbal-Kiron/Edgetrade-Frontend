import { format } from "date-fns"
import { AxiosRequestConfig } from "axios"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// local
import { cookies } from "@/lib/cookies"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | undefined) {
  if (!date) return ""

  return format(date, "PPP")
}

export function setAccessToken(access_token: string): boolean {
  cookies.set("access_token", access_token)

  return true
}

export function getAccessToken(): string {
  return cookies.get("access_token") || ""
}

export function isAccessTokenAvailable(): boolean {
  const accessToken = getAccessToken().trim()

  return accessToken != null && accessToken != undefined && accessToken != ""
}

export function getAxiosHeaders(token: string) {
  return ({ Authorization: `Bearer ${token}` })
}

export function getConfig(): AxiosRequestConfig {
  return ({ headers: getAxiosHeaders(getAccessToken()) })
}