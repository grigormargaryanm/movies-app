export const getSeenIds = (): string[] => {
  return JSON.parse(sessionStorage.getItem('seen') as string) || []
}

export const addSeenIds = (id: string) => {
  const ids = getSeenIds()
  if (!ids.includes(id)) {
    ids.push(id)
    sessionStorage.setItem('seen', JSON.stringify(ids))
  }
}

export const sortByDate = <T extends { Date: string }>(data: T[]): T[] => {
  return data.sort((a: T, b: T) => new Date(b.Date).valueOf() - new Date(a.Date).valueOf())
}
