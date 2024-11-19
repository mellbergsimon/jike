

import { Price, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Price[]> {
  try {

    // Get today's date
    const today = new Date();

    // Format the date as YYYY/MM-DD
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based, so add 1
    const day = String(today.getDate()).padStart(2, '0'); // Pad single-digit days with leading zero

    // Construct the URL with today's date
    const url = `https://www.elprisetjustnu.se/api/v1/prices/${year}/${month}-${day}_SE3.json`;
 
    let res = await fetch(url)
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
