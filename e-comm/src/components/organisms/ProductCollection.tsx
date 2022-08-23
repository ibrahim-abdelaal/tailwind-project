import { FC } from 'react';
import { CollectionHeader } from '../molecules/CollectionHeader';
import { ProductCard } from '../molecules/ProductCard';
import { Product } from '../atoms/interfaces';


export const ProductCollection: FC<{ collectionName: string, products: Product[] }> = ({ collectionName, products }) => (
  <div className="my-20">
    <CollectionHeader title={collectionName} buttonText='View all' />
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {products.map( product => (<ProductCard key={product.id} productName={product.productName} src={product.src} href={product.href} colorRange={product.colorRange} sizeRange={product.sizeRange} />))}
    </div>
  </div>
);