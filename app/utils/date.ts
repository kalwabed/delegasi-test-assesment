export function dateFormatter(date: Date, options?: Intl.DateTimeFormatOptions): string {
  return new Intl.DateTimeFormat('id', {
    dateStyle: 'medium',
    ...options
  }).format(date)
}
