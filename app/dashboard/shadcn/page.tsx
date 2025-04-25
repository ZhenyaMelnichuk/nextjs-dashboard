import { AccordionDemo } from '@/components/demo/AccordionDemo'
import { AlertDialogDemo } from '@/components/demo/AlertDialogDemo'
import { BreadcrumbDemo } from '@/components/demo/BreadcrumbDemo'

export default async function Page() {
  return (
    <main>
      <BreadcrumbDemo />
      <AccordionDemo />
      <AlertDialogDemo />
    </main>
  )
}
