import { createFileRoute } from '@tanstack/react-router'

// Layout
import DefaultLayout from '@/layouts/default-layout'

export const Route = createFileRoute('/')({
  component: Index,
})

export default function Index() {
  return (
    <DefaultLayout>
      <div className=''>Index</div>
    </DefaultLayout>
  )
}
