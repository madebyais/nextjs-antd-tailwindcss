import { ProductThumbnail1, ProductThumbnail2 } from "components/e-commerce";
import LayoutComponentPreview from "./_layout";

export default function EcommercePreviewPage() {
  return (
    <LayoutComponentPreview>
      <div className={`mb-20`}>
        <div className={`mb-10 text-lg font-bold uppercase`}>Product Thumbnail 1</div>
        <div className={`flex justify-between items-center mb-3`}>
          <div className={`font-bold`}>Electronics</div>
          <div><a href={`#`}>See all</a></div>
        </div>
        <div className={`grid grid-cols-2 md:grid-cols-6 gap-5`}>
          <ProductThumbnail1 imageUrl={`https://placeimg.com/400/600/tech/grayscale`} title={`Laptop X`} category={`Laptop`} price={500000} discountedPrice={200000} href={`/components/e-commerce`} />
          <ProductThumbnail1 imageUrl={`https://placeimg.com/400/600/tech/grayscale`} title={`Phone XS`} category={`Phone`} price={500000} href={`/components/header`} />
          <ProductThumbnail1 imageUrl={`https://placeimg.com/400/600/tech/grayscale`} title={`Tablet Y`} category={`Tablet`} price={500000} href={`/components/footer`} />
          <ProductThumbnail1 imageUrl={`https://placeimg.com/400/600/tech/grayscale`} title={`PC Z`} price={500000} href={`/components`} textAlign={`center`} />
        </div>
      </div>

      <div className={`mb-20`}>
        <div className={`mb-10 text-lg font-bold uppercase`}>Product Thumbnail 2</div>
        <div className={`flex justify-between items-center mb-3`}>
          <div className={`font-bold`}>Electronics</div>
          <div><a href={`#`}>See all</a></div>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-5`}>
          <ProductThumbnail2 imageUrl={`https://placeimg.com/150/150/tech/grayscale`} title={`Laptop X`} category={`Laptop`} price={500000} discountedPrice={200000} href={`/components/e-commerce`} />
          <ProductThumbnail2 imageUrl={`https://placeimg.com/150/150/tech/grayscale`} title={`Phone XS`} category={`Phone`} price={500000} href={`/components/header`} />
          <ProductThumbnail2 imageUrl={`https://placeimg.com/150/150/tech/grayscale`} title={`Tablet Y`} category={`Tablet`} price={500000} href={`/components/footer`} />
          <ProductThumbnail2 imageUrl={`https://placeimg.com/150/150/tech/grayscale`} title={`PC Z`} price={500000} href={`/components`} />
        </div>
      </div>
    </LayoutComponentPreview>
  )
}