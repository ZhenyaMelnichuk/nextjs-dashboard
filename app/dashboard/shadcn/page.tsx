import { AccordionDemo } from '@/components/demo/AccordionDemo'
import { AlertDialogDemo } from '@/components/demo/AlertDialogDemo'
import { BreadcrumbDemo } from '@/components/demo/BreadcrumbDemo'
import { ProductList } from '@/components/demo/ProductList'

export default async function Page() {
  return (
    <main>
      <BreadcrumbDemo />
      <AccordionDemo />
      <AlertDialogDemo />
      <ProductList />
    </main>
  )
}
