export const formatDate = (date: string | Date): string => {
  const d = new Date(date)
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}
