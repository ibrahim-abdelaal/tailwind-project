import { FC } from 'react';
import { BasicButton, BasicImage } from '../atoms';
import { BrandInfo } from '../molecules/BrandInfo';
import heroSvg from '../../assets/hero-img.svg';

export const Hero:FC = () => (
  <div className="md:flex mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <BrandInfo />
        <BasicButton name="Shop Now" href='#' fromColor='red' toColor='pink' textColor='gray' />
      </div>
      <div className="md:3/5">
        <BasicImage src={heroSvg} width='full'/>
      </div>
  </div>
)