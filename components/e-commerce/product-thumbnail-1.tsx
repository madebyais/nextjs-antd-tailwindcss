import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

type textAlign = 'left' | 'center' | 'right'

interface IProductThumbnail1Props {
  readonly imageUrl?: string
  readonly title: string
  readonly category?: string
  readonly currency?: string
  readonly price: number
  readonly discountedPrice?: number
  readonly href: string
  readonly textAlign?: textAlign
}

const ProductThumbnail1: FC<IProductThumbnail1Props> = ({ imageUrl = '', title, category = '', currency = 'IDR', price = 0, discountedPrice = 0, href, textAlign = 'left' }) => {
  const getTextAlign = (type: string, align: string) => {
    if (type === 'text') return `text-${align}`
    if (type === 'price') {
      let textAlignment: string
      switch (align.toLowerCase()) {
        case 'left':
          textAlignment = 'justify-start'
          break
        case 'center':
          textAlignment = 'justify-center'
          break
        case 'right':
          textAlignment = 'justify-end'
          break
        default:
          textAlignment = 'justify-start'
      }
      return textAlignment
    }
  }
  return (
    <Link href={href} passHref>
      <div className={`cursor-pointer ${getTextAlign('text', textAlign)}`}>
        {imageUrl.length > 0 && <Image src={imageUrl} alt={`image`} width={400} height={600} layout={`responsive`} />}
        <div className={`font-bold mt-2`}>{title}</div>
        {category.length > 0 && <div>{category}</div>}
        <div className={`flex  ${getTextAlign('price', textAlign)} items-center`}>
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
}

export default ProductThumbnail1