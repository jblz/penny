import { ComponentMeta, ComponentStory } from '@storybook/react';
import { collectionByHandleResponse } from 'features/ProductCategory/queries.fixtures';
import { getCollection } from 'features/ProductCategory/transforms';
import { _BackgroundImage } from 'features/Storefront/BackgroundImage/BackgroundImage.stories';
import { WithTrendingProducts } from 'features/Storefront/Collection/Collection.stories';
import { _Collections } from 'features/Storefront/Collections/Collections.stories';
import { _Hero } from 'features/Storefront/Hero/Hero.stories';
import { _Offers } from 'features/Storefront/Offers/Offers.stories';
import { _Sale } from 'features/Storefront/Sale/Sale.stories';
import { _Testimonials } from 'features/Storefront/Testimonials/Testimonials.stories';
import { Storefront } from './Storefront';

const collection = getCollection(collectionByHandleResponse.collection, {});

const Meta: ComponentMeta<typeof Storefront> = {
  title: 'Features / Storefront',
  component: Storefront
};

const Template: ComponentStory<typeof Storefront> = (args) => <Storefront {...args} />;

export const _Storefront = Template.bind({});
_Storefront.args = {
  items: collection.items,
  storefront: {
    components: [
      { __typename: 'OffersComponent', ..._Offers.args },
      { __typename: 'HeroComponent', ..._Hero.args },
      { __typename: 'TrendingProductsComponent' },
      { __typename: 'CollectionsComponent', ..._Collections.args },
      {
        __typename: 'BackgroundImageComponent',
        ..._BackgroundImage.args,
        components: [
          {
            __typename: 'SaleComponent',
            ..._Sale.args
          },
          {
            __typename: 'TestimonialsComponent',
            ..._Testimonials.args
          }
        ]
      }
    ]
  }
};

_Storefront.parameters = {
  ...WithTrendingProducts.parameters
};

export default Meta;
