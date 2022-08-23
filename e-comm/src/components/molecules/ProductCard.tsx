import { FC } from 'react';
import { CartIcon, ClicableHeading3, ClickableImage, ProductCardGradientIconButton, ProductCardIconButton, ProductColor, ProductSize, RightArrow } from '../atoms';

export const ProductCard: FC<{ src: string, href: string, productName: string, colorRange: string[], sizeRange: string[] }> = ({ src, href, productName, colorRange,  sizeRange }) => (
  <div className="shadow-lg rounded-lg">
    <ClickableImage src={src} href={href} topRounded={true} />
    <div className="p-5">
      <ClicableHeading3 text={productName} href={href} />
      <div className="flex my-3">
        {colorRange.map((color, index) => (<ProductColor color={color} key={index} />))}
      </div>
      </div>
      <div className="flex my-3">
        {sizeRange.map((size, index) => (<ProductSize size={size} key={index}/>))}
      </div>
      <div className="flex flex-col xl:flex-row justify-between">
        <ProductCardGradientIconButton name='Add to Cart' href='#' fromColor='red' toColor='pink' textColor='gray' children={<CartIcon />} />
        <ProductCardIconButton name='View Details' href='#' bgColor='purple' textColor='gray' children={<RightArrow />} />
      </div>
  </div>
);