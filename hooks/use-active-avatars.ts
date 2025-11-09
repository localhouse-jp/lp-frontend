import { useEffect, useState } from "react"

interface ActiveAvatarsResponse {
  result: string
  avatars: string[]
}

export function useActiveAvatars() {
  const [avatars, setAvatars] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://kitade.localhouse.jp/users/active-avatars")
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data: ActiveAvatarsResponse = await response.json()
        
        if (data.result === "ok" && Array.isArray(data.avatars)) {
          setAvatars(data.avatars)
        } else {
          throw new Error("Invalid response format")
        }
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Failed to fetch avatars"))
      } finally {
        setLoading(false)
      }
    }

    fetchAvatars()
  }, [])

  return { avatars, loading, error }
}
