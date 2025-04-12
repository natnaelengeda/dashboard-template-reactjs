import { createFileRoute } from '@tanstack/react-router'

// Layout
import DefaultLayout from '@/layouts/default-layout'

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"

// Data
import data from "@/app/dashboard/data.json";

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  return (
    <DefaultLayout>
      <div className=''>
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
            <SectionCards />
            <div className="px-4 lg:px-6">
              <ChartAreaInteractive />
            </div>
            <DataTable data={data} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
