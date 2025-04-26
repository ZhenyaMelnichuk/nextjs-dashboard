import Image from 'next/image'
import { Product } from '@/components/demo/types'
import {
  StarIcon,
  ChatBubbleLeftIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import { Button } from '../ui/button'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card p-4 mt-4 border-1 rounded-md">
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <Image
          width={200}
          height={200}
          src={product.images[0]}
          alt={`Image ${product.name}`}
          className="rounded-md object-cover aspect-square w-[200px] h-[200px] mx-auto lg:mx-0"
        />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg line-clamp-2">{product.name}</p>
            <div className="flex flex-col items-center">
              <StarIcon className="w-6" />
              <p className="font-bold">{product.rating}</p>
            </div>
          </div>

          <ul className="">
            {product.params.map((param) => {
              return (
                <li key={param.key} className="flex gap-1">
                  <span className="first-letter:uppercase after:content-[':'] opacity-50">
                    {param.key}
                  </span>
                  <span className="first-letter:uppercase">{param.value}</span>
                </li>
              )
            })}
          </ul>

          <div className="flex justify-between mt-2">
            <div className="flex items-center gap-1">
              <ChatBubbleLeftIcon className="w-6" />
              <p className="whitespace-nowrap">
                Отзывы ({product.commentsCount})
              </p>
            </div>
            <div className="flex gap-1 font-bold">
              <p>{product.price}</p>
              <CurrencyDollarIcon className="w-6" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4 pt-4">
        <Button className="flex-1 bg-blue-600 text-white cursor-pointer">
          Купить
        </Button>
        <Button className="flex-1 cursor-pointer">Подробнее</Button>
      </div>
      {/* <p>{JSON.stringify(product)}</p> */}
    </div>
  )
}
