import { getImageUrl } from '@takeshape/routing';
import Button from 'components/Button/Button';
import NextImage from 'components/NextImage';
import { HeroComponent } from 'types/takeshape';

export const Hero = ({ primaryText, secondaryText, buttonText, image }: HeroComponent) => {
  return (
    <div className="relative bg-gray-100 pb-4 lg:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:grid lg:grid-cols-2">
        <div className="max-w-2xl mx-auto py-24 lg:py-64 lg:max-w-none">
          <div className="lg:pr-16">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
              {primaryText}
            </h1>
            <p className="mt-4 text-xl text-gray-600">{secondaryText}</p>
            <div className="mt-6">
              <Button as="a" href="#" color="primary" size="large">
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-48 sm:h-64 lg:h-full">
          <div className="w-full h-full">
            <NextImage
              layout="fill"
              src={getImageUrl(image)}
              alt=""
              objectFit="cover"
              objectPosition="center"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};
