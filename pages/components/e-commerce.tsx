import { ProductDetail1, ProductThumbnail1, ProductThumbnail2 } from "components/e-commerce";
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

      <div className={`mb-20`}>
        <div className={`mb-10 text-lg font-bold uppercase`}>Product Detail 1</div>
        <ProductDetail1
          imageUrl={`https://placeimg.com/400/600/tech/grayscale`}
          title={`Laptop X`}
          category={`Laptop`}
          currency={`IDR`}
          price={500000}
          discountedPrice={200000}
          description={
            <>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </>
          }
          onClickBuy={() => alert('buy this item')}
        />
      </div>
    </LayoutComponentPreview>
  )
}
