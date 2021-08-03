import { Button } from "antd"
import Image from "next/image"
import { FC, MouseEventHandler } from "react"

interface IProductDetail1Props {
  readonly imageUrl: string
  readonly title?: string
  readonly category?: string
  readonly description?: any
  readonly currency?: string
  readonly price: number
  readonly discountedPrice?: number
  readonly onClickBuy?: MouseEventHandler<HTMLElement>
}

const ProductDetail1: FC<IProductDetail1Props> = ({ imageUrl, title, category, description, currency, price, discountedPrice = 0, onClickBuy }) => (
  <div className={`grid grid-cols-1 gap-5 md:grid-cols-6 md:gap-10`}>
    <div className={`md:col-span-2`}>
      <Image src={imageUrl} width={400} height={600} layout={`responsive`} />
    </div>
    <div className={`md:col-span-4`}>
      <div className={`bg-red-500 px-3 py-1 text-xs text-white inline uppercase font-bold tracking-wide`}>{category}</div>
      <div className={`text-4xl mt-5 mb-10 md:text-6xl`}>{title}</div>
      <div className={`mb-10`}>{description}</div>
      { discountedPrice > 0 ? (
        <div className={`flex justify-start items-center gap-x-4`}>
          <div className={`text-red-500 text-4xl`}>{currency} {discountedPrice.toLocaleString()}</div>
          <div className={`text-gray-400 line-through`}>{currency} {price.toLocaleString()}</div>
        </div>
      ) : (
        <div className={`text-4xl`}>{currency} {price.toLocaleString()}</div>
      )}
      
      <Button className={`mt-10`} onClick={onClickBuy} size={`large`}>Buy Now</Button>
    </div>
  </div>
)

export default ProductDetail1