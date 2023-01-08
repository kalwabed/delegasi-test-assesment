export interface Laporan {
  label: string
  month: string
  value: number
  details: Laporan[]
  children: Laporan[]
}
