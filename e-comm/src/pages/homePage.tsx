import { FC } from 'react'
import { HomeTemplate } from '../components/templates/HomeTemplate';
import { data, newsletterImage } from '../dummyData';

export const HomePage: FC = ({}) => (
  <div>
    <HomeTemplate data={data} newsletterImage={newsletterImage} />
  </div>
);