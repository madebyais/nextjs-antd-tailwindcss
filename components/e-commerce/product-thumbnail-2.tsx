import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface IProductThumbnail2Props {
  readonly imageUrl?: string
  readonly title: string
  readonly category?: string
  readonly currency?: string
  readonly price: number
  readonly discountedPrice?: number
  readonly href: string
}

const ProductThumbnail2: FC<IProductThumbnail2Props> = ({ imageUrl = '', title, category = '', currency = 'IDR', price = 0, discountedPrice = 0, href }) => (
  <Link href={href} passHref>
    <div className={`bg-white border cursor-pointer flex items-center`}>
      {imageUrl.length > 0 && 
        <Image src={imageUrl.toString()} alt={`image`} width={120} height={120} />
      }
      <div className={`h-full flex flex-col justify-between p-5`}>
        <div>
          <div className={`font-bold`}>{title}</div>
          {category.length > 0 && <div>{category}</div>}
        </div>
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
    </div>
  </Link>
)

export default ProductThumbnail2