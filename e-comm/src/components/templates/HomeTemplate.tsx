import { FC } from 'react';
import { Product } from '../atoms/interfaces';
import { Hero } from '../organisms/Hero';
import { Newsletter } from '../organisms/Newsletter';
import { ProductCollection } from '../organisms/ProductCollection';

export const HomeTemplate:FC<{ data: {title: string, products: Product[]}[], newsletterImage: string }> = ({ data, newsletterImage }) => (
  <div>
    <Hero />
    {data.map((item, index) => (<ProductCollection key={index} collectionName={item.title} products={item.products} />))}
    <Newsletter src={newsletterImage} />
  </div>
);