import ProductCard from '@/components/demo/ProductCard'

export function ProductList() {
  const products = [
    {
      id: '1',
      name: 'Навушники Logitech G435 LIGHTSPEED Wireless Gaming Headset — Black',
      images: [
        '/products/Навушники Logitech G435 LIGHTSPEED Wireless Gaming Headset — Black.png',
      ],
      price: 3600,
      commentsCount: 244,
      rating: 3.8,
      params: [
        { key: 'производитель', value: 'logitech' },
        { key: 'тип наушникокв', value: 'полноразмерные' },
        { key: 'тип подключения', value: 'беспроводные' },
        { key: 'диапазон частот', value: '20 Гц - 20 000 Гц' },
      ],
    },
  ]

  return products.map((product) => {
    return <ProductCard product={product} key={product.id} />
  })
}
