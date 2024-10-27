

import { Price, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Price[]> {
  try {
    let res = await fetch('https://www.elprisetjustnu.se/api/v1/prices/2024/10-16_SE3.json')
    let data = await res.json()
    return (
      data
    )
  } catch (error) {
    console.error('Error fetching the data:', error)
    return []
  }
}

export default async function DemoPage() {
  const data = await getData();


  return (
    <div>
        <DataTable columns={columns} data={data} />
    </div>
  )
}
