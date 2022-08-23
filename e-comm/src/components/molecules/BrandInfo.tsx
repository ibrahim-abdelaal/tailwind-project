import { FC } from 'react';
import { Heading2, SubTitle1 } from '../atoms';

export const BrandInfo: FC = () => (
  <div className="md:w-2/5 flex flex-col justify-center items-center">
    <Heading2 text='Some catchy title here' />
    <SubTitle1 text='Our brand tageline goes here.' />
    <SubTitle1 text='More info goes here...' />
  </div>
);