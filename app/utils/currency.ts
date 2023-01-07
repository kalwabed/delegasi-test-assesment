export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('id', {
    style: 'currency',
    currency: 'IDR'
  }).format(value)
}
