import { Image } from "antd"
import image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface IProductThumbnail1Props {
  readonly imageUrl?: string
  readonly title: string
  readonly category?: string
  readonly currency?: string
  readonly price: number
  readonly discountedPrice?: number
  readonly href: string
}

const ProductThumbnail1: FC<IProductThumbnail1Props> = ({ imageUrl = '', title, category = '', currency = 'IDR', price = 0, discountedPrice = 0, href }) => (
  <Link href={href} passHref>
    <div className={`cursor-pointer`}>
      {imageUrl.length > 0 && <Image src={imageUrl} alt={`image`} preview={false} />}
      <div className={`font-bold`}>{title}</div>
      {category.length > 0 && <div>{category}</div>}
      <div className={`flex justify-start items-center`}>
        {discountedPrice > 0 ? (
          <>
            <div className={`font-bold text-red-500 mr-2`}>{currency} {discountedPrice.toLocaleString()}</div>
            <div className={`text-xs line-through text-gray-500`}>{currency} {price.toLocaleString()}</div>
          </>
        ) : (
          <div className={`font-bold`}>{currency} {price.toLocaleString()}</div>
        )}
      </div>
    </div>
  </Link>
)

export default ProductThumbnail1