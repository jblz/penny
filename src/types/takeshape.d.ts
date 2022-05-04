export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

/** Root of the Schema */
export type Query = {
  __typename?: 'Query';
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  ReviewsIo_listProductReviews?: Maybe<ReviewsIo_ListProductReviewsResponse>;
  /** Get Stripe products from the TakeShape API Index */
  getIndexedProductList?: Maybe<Stripe_ProductPaginatedList>;
  /** Get the signed in user's profile from ShapeDB */
  getMyProfile?: Maybe<Profile>;
  /** Get the signed in user's subscriptions from Stripe */
  getMySubscriptions?: Maybe<Array<Maybe<Stripe_Subscription>>>;
  /** Get the signed-in user's payments from Stripe */
  getMyPayments_UNINDEXED?: Maybe<Array<Maybe<Stripe_PaymentIntent>>>;
  /** Get the signed-in user's payments from Stripe */
  getMyPayments_INDEXED?: Maybe<Stripe_PaymentIntentPaginatedList>;
  /** Get the signed-in user's payments from Stripe */
  getMyPayments?: Maybe<Array<Maybe<Stripe_PaymentIntent>>>;
  /** Get the signed-in user's payments from Stripe */
  getMyPaymentsIndexed?: Maybe<Stripe_PaymentIntentPaginatedList>;
  /** Get a profile by ID */
  getProfile?: Maybe<Profile>;
  /** Returns a list of profiles in natural order. */
  getProfileList?: Maybe<ProfilePaginatedList>;
  /** <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p> */
  Stripe_listProducts?: Maybe<Stripe_ListProductsResponse>;
  /** <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p> */
  Stripe_getProduct?: Maybe<Stripe_Product>;
  /** Get a loyalty card from Voucherify */
  getMyLoyaltyCard?: Maybe<Voucherify_LoyaltyCard>;
  getMyNewsletterSubscriptions?: Maybe<Array<Maybe<ProfileNewsletterStatus>>>;
  /** <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p> */
  Stripe_listInvoiceLines?: Maybe<Stripe_ListInvoiceLinesResponse>;
  /** <p>Returns a list of PaymentIntents.</p> */
  Stripe_listPaymentIntents?: Maybe<Stripe_ListPaymentIntentsResponse>;
  /** Get a NavigationData by ID */
  getNavigationData?: Maybe<NavigationData>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  searchProfileIndex?: Maybe<ProfileSearchResults>;
  search?: Maybe<TsSearchableSearchResults>;
  withContext?: Maybe<WithContext>;
};


/** Root of the Schema */
export type QueryTaxonomySuggestArgs = {
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  terms?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSON']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
};


/** Root of the Schema */
export type QueryGetContentVersionArgs = {
  id: Scalars['ID'];
  version: Scalars['Int'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type QueryGetContentVersionListArgs = {
  id: Scalars['ID'];
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


/** Root of the Schema */
export type QueryGetAssetArgs = {
  _id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type QueryGetAssetListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type QueryGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type QueryGetTsStaticSiteListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type QueryReviewsIo_ListProductReviewsArgs = {
  sku?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  per_page?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Scalars['Int']>;
  verified_only?: InputMaybe<Scalars['Int']>;
  comments_only?: InputMaybe<Scalars['Int']>;
  minRating?: InputMaybe<Scalars['Int']>;
  include_unpublished_images?: InputMaybe<Scalars['Int']>;
  include_moderated?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['String']>;
  min_date?: InputMaybe<Scalars['String']>;
  max_date?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetIndexedProductListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereStripeProductInput>;
};


/** Root of the Schema */
export type QueryGetMySubscriptionsArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** Root of the Schema */
export type QueryGetMyPayments_UnindexedArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['JSON']>;
  startingAfter?: InputMaybe<Scalars['String']>;
  endingBefore?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetMyPayments_IndexedArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereStripePaymentIntentInput>;
};


/** Root of the Schema */
export type QueryGetMyPaymentsArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['JSON']>;
  startingAfter?: InputMaybe<Scalars['String']>;
  endingBefore?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetMyPaymentsIndexedArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereStripePaymentIntentInput>;
};


/** Root of the Schema */
export type QueryGetProfileArgs = {
  _id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type QueryGetProfileListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereProfileInput>;
};


/** Root of the Schema */
export type QueryStripe_ListProductsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['JSON']>;
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  shippable?: InputMaybe<Scalars['Boolean']>;
  starting_after?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryStripe_GetProductArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
};


/** Root of the Schema */
export type QueryStripe_ListInvoiceLinesArgs = {
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  invoice: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  starting_after?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryStripe_ListPaymentIntentsArgs = {
  created?: InputMaybe<Scalars['JSON']>;
  customer?: InputMaybe<Scalars['String']>;
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  starting_after?: InputMaybe<Scalars['String']>;
};


/** Root of the Schema */
export type QueryGetNavigationDataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** Root of the Schema */
export type QuerySearchAssetIndexArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** Root of the Schema */
export type QuerySearchTsStaticSiteIndexArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** Root of the Schema */
export type QuerySearchProfileIndexArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereProfileInput>;
};


/** Root of the Schema */
export type QuerySearchArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  where?: InputMaybe<TsWhereInput>;
};


/** Root of the Schema */
export type QueryWithContextArgs = {
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};

export type TsSuggestionPaginatedList = {
  __typename?: 'TSSuggestionPaginatedList';
  items?: Maybe<Array<Maybe<TsSuggestion>>>;
  total?: Maybe<Scalars['Int']>;
};

export type TsSuggestion = {
  __typename?: 'TSSuggestion';
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['ID']>;
  _shapeName?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

export type TsSearchSort = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsVersionResponse = {
  __typename?: 'TSVersionResponse';
  content?: Maybe<Scalars['JSONObject']>;
  schema?: Maybe<Scalars['JSONObject']>;
};

export type TsVersionsPaginatedList = {
  __typename?: 'TSVersionsPaginatedList';
  items?: Maybe<Array<Maybe<TsVersion>>>;
  total?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  size?: Maybe<Scalars['Int']>;
};

export type TsVersion = {
  __typename?: 'TSVersion';
  id?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  enabled?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  updatedBy?: Maybe<TsProjectMember>;
  item?: Maybe<TsVersionResponse>;
};


export type TsVersionItemArgs = {
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};

export type TsProjectMember = {
  __typename?: 'TSProjectMember';
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  avatarPath?: Maybe<Scalars['String']>;
};

export type Asset = TsSearchable & {
  __typename?: 'Asset';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  filename: Scalars['String'];
  caption?: Maybe<Scalars['JSON']>;
  captionHtml?: Maybe<Scalars['String']>;
  credit?: Maybe<Scalars['JSON']>;
  creditHtml?: Maybe<Scalars['String']>;
  path: Scalars['String'];
  mimeType?: Maybe<Scalars['String']>;
  sourceUrl?: Maybe<Scalars['String']>;
  uploadStatus?: Maybe<Scalars['String']>;
  _shapeId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  /** @deprecated Use path instead */
  s3Key?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type AssetCaptionHtmlArgs = {
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
};


export type AssetCreditHtmlArgs = {
  imageConfig?: InputMaybe<Scalars['JSON']>;
  images?: InputMaybe<TsImagesConfig>;
  classPrefix?: InputMaybe<Scalars['String']>;
  headerIdPrefix?: InputMaybe<Scalars['String']>;
};

export type TsSearchable = {
  _id?: Maybe<Scalars['ID']>;
  _shapeId?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type TsImagesConfig = {
  /** Default image parameters. See https://docs.imgix.com/apis/url  */
  default?: InputMaybe<Scalars['JSON']>;
  /** Small image parameters. See https://docs.imgix.com/apis/url  */
  small?: InputMaybe<Scalars['JSON']>;
  /** Medium image parameters. See https://docs.imgix.com/apis/url  */
  medium?: InputMaybe<Scalars['JSON']>;
  /** Large image parameters. See https://docs.imgix.com/apis/url  */
  large?: InputMaybe<Scalars['JSON']>;
};

export type TsUser = {
  __typename?: 'TSUser';
  id: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  avatarPath?: Maybe<Scalars['String']>;
};

export enum DefaultWorkflow {
  Disabled = 'disabled',
  Enabled = 'enabled'
}

export type AssetPaginatedList = {
  __typename?: 'AssetPaginatedList';
  items: Array<Asset>;
  total: Scalars['Int'];
};

export type TsSearchSortInput = {
  field: Scalars['String'];
  /** "asc" for ascending or "desc" for descending */
  order: Scalars['String'];
};

export type TsWhereAssetInput = {
  title?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  AND?: InputMaybe<Array<InputMaybe<TsWhereAssetInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereAssetInput>>>;
  NOT?: InputMaybe<TsWhereAssetInput>;
};

export type TsWhereStringInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereDraftjsInput = {
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
};

export type TsWhereIdInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TsWhereIntegerInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Int']>;
  /** Less than */
  lt?: InputMaybe<Scalars['Int']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Int']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Int']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Int']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type TsWhereDateInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']>;
};

export type TsWhereNumberInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Float']>;
  /** Less than */
  lt?: InputMaybe<Scalars['Float']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['Float']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['Float']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['Float']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type TsWhereWorkflowInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Less than */
  lt?: InputMaybe<Scalars['String']>;
  /** Less than or equal */
  lte?: InputMaybe<Scalars['String']>;
  /** Greater than */
  gt?: InputMaybe<Scalars['String']>;
  /** Greater than or equal */
  gte?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type TsStaticSite = TsSearchable & {
  __typename?: 'TsStaticSite';
  title: Scalars['String'];
  baseUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  idKey?: Maybe<Scalars['String']>;
  secretKey?: Maybe<Scalars['String']>;
  destination: Scalars['String'];
  privateAcl?: Maybe<Scalars['Boolean']>;
  environmentVariables?: Maybe<Array<Maybe<TsStaticSiteEnvironmentVariables>>>;
  triggers?: Maybe<Array<Maybe<TsStaticSiteTriggers>>>;
  templateHash?: Maybe<Scalars['String']>;
  _shapeId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariables = {
  __typename?: 'TsStaticSiteEnvironmentVariables';
  name?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type TsStaticSiteTriggers = {
  __typename?: 'TsStaticSiteTriggers';
  contentTypeId?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

export type TsStaticSitePaginatedList = {
  __typename?: 'TsStaticSitePaginatedList';
  items: Array<TsStaticSite>;
  total: Scalars['Int'];
};

export type TsWhereTsStaticSiteInput = {
  title?: InputMaybe<TsWhereStringInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  AND?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereTsStaticSiteInput>>>;
  NOT?: InputMaybe<TsWhereTsStaticSiteInput>;
};

export type TsWhereBooleanInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['Boolean']>;
};

export type TsWhereTsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereTsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type ReviewsIo_ListProductReviewsResponse = {
  __typename?: 'ReviewsIo_ListProductReviewsResponse';
  write_review_link?: Maybe<Scalars['String']>;
  word?: Maybe<Scalars['String']>;
  stats?: Maybe<ReviewsIo_ListProductReviewsResponseStatsProperty>;
  store?: Maybe<ReviewsIo_ListProductReviewsResponseStoreProperty>;
  reviews?: Maybe<ReviewsIo_ListProductReviewsResponseReviewsProperty>;
  products?: Maybe<Array<Maybe<ReviewsIo_ListProductReviewsResponseProductsProperty>>>;
  ratings?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  settings?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
};

export type ReviewsIo_ListProductReviewsResponseStatsProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseStatsProperty';
  average?: Maybe<Scalars['Float']>;
  count?: Maybe<Scalars['Int']>;
};

export type ReviewsIo_ListProductReviewsResponseStoreProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseStoreProperty';
  name?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ListProductReviewsResponseReviewsProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseReviewsProperty';
  total?: Maybe<Scalars['Int']>;
  per_page?: Maybe<Scalars['Int']>;
  current_page?: Maybe<Scalars['Int']>;
  last_page?: Maybe<Scalars['Int']>;
  from?: Maybe<Scalars['Int']>;
  to?: Maybe<Scalars['Int']>;
  data?: Maybe<Array<Maybe<ReviewsIo_ProductReview>>>;
};

export type ReviewsIo_ProductReview = {
  __typename?: 'ReviewsIo_ProductReview';
  product_review_id?: Maybe<Scalars['Int']>;
  product_make?: Maybe<Scalars['String']>;
  order_id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  sku?: Maybe<Scalars['String']>;
  review?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Int']>;
  date_created?: Maybe<Scalars['String']>;
  votes?: Maybe<Scalars['String']>;
  flags?: Maybe<Scalars['String']>;
  timeago?: Maybe<Scalars['String']>;
  date_formatted?: Maybe<Scalars['String']>;
  product?: Maybe<ReviewsIo_Product>;
  ratings?: Maybe<Array<Maybe<ReviewsIo_ProductReviewRatingsProperty>>>;
  reviewer?: Maybe<ReviewsIo_Reviewer>;
  images?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  replies?: Maybe<Array<Maybe<Scalars['JSONObject']>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  author?: Maybe<ReviewsIo_ProductReviewAuthorProperty>;
};

export type ReviewsIo_Product = {
  __typename?: 'ReviewsIo_Product';
  /** Product unique ID */
  sku?: Maybe<Scalars['String']>;
  /** Product name */
  name?: Maybe<Scalars['String']>;
  /** Product description */
  description?: Maybe<Scalars['String']>;
  /** Product image URL */
  image_url?: Maybe<Scalars['String']>;
  /** Product link URL */
  link?: Maybe<Scalars['String']>;
  /** Product MPN */
  mpn?: Maybe<Scalars['String']>;
  /** Product GTIN */
  gtin?: Maybe<Scalars['String']>;
  /** Product brand */
  brand?: Maybe<Scalars['String']>;
  /** Product category */
  category?: Maybe<Scalars['String']>;
  /** Product custom property */
  custom?: Maybe<Scalars['String']>;
  /** Product page url */
  pageUrl?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ProductReviewRatingsProperty = {
  __typename?: 'ReviewsIo_ProductReviewRatingsProperty';
  name?: Maybe<Scalars['String']>;
  score?: Maybe<Scalars['String']>;
};

export type ReviewsIo_Reviewer = {
  __typename?: 'ReviewsIo_Reviewer';
  user_id?: Maybe<Scalars['Int']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  verified_buyer?: Maybe<ReviewsIo_ReviewerVerifiedBuyerProperty>;
  address?: Maybe<Scalars['String']>;
  profile_picture?: Maybe<Scalars['String']>;
  gravatar?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  name_formatted?: Maybe<Scalars['String']>;
};

export enum ReviewsIo_ReviewerVerifiedBuyerProperty {
  Yes = 'yes',
  No = 'no'
}

export type ReviewsIo_ProductReviewAuthorProperty = {
  __typename?: 'ReviewsIo_ProductReviewAuthorProperty';
  email?: Maybe<Scalars['String']>;
};

export type ReviewsIo_ListProductReviewsResponseProductsProperty = {
  __typename?: 'ReviewsIo_ListProductReviewsResponseProductsProperty';
  sku?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Stripe_ProductPaginatedList = {
  __typename?: 'Stripe_ProductPaginatedList';
  items: Array<Stripe_Product>;
  total: Scalars['Int'];
};

export type Stripe_Product = TsSearchable & {
  __typename?: 'Stripe_Product';
  /** Whether the product is currently available for purchase. */
  active?: Maybe<Scalars['Boolean']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** The product's description, meant to be displayable to the customer. Use this field to optionally store a long form explanation of the product being sold for your own rendering purposes. */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** A list of up to 8 URLs of images for this product, meant to be displayable to the customer. */
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The product's name, meant to be displayable to the customer. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ProductObjectProperty>;
  package_dimensions?: Maybe<Stripe_PackageDimensions>;
  /** Whether this product is shipped (i.e., physical goods). */
  shippable?: Maybe<Scalars['Boolean']>;
  /** Extra information about a product which will appear on your customer's credit card statement. In the case that multiple products are billed at once, the first statement descriptor will be used. */
  statement_descriptor?: Maybe<Scalars['String']>;
  tax_code?: Maybe<Stripe_ProductTaxCodeProperty>;
  /** A label that represents units of this product in Stripe and on customers’ receipts and invoices. When set, this will be included in associated invoice line item descriptions. */
  unit_label?: Maybe<Scalars['String']>;
  /** Time at which the object was last updated. Measured in seconds since the Unix epoch. */
  updated?: Maybe<Scalars['Int']>;
  /** A URL of a publicly-accessible webpage for this product. */
  url?: Maybe<Scalars['String']>;
  prices?: Maybe<Array<Maybe<Stripe_Price>>>;
  reviews?: Maybe<ReviewsIo_ListProductReviewsResponse>;
  _shapeId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export enum Stripe_ProductObjectProperty {
  Product = 'product'
}

export type Stripe_PackageDimensions = {
  __typename?: 'Stripe_PackageDimensions';
  /** Height, in inches. */
  height?: Maybe<Scalars['Float']>;
  /** Length, in inches. */
  length?: Maybe<Scalars['Float']>;
  /** Weight, in ounces. */
  weight?: Maybe<Scalars['Float']>;
  /** Width, in inches. */
  width?: Maybe<Scalars['Float']>;
};

export type Stripe_ProductTaxCodeProperty = WrappedString | Stripe_TaxCode;

export type WrappedString = {
  __typename?: 'WrappedString';
  value: Scalars['String'];
};

export type Stripe_TaxCode = {
  __typename?: 'Stripe_TaxCode';
  /** A detailed description of which types of products the tax code represents. */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** A short name for the tax code. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TaxCodeObjectProperty>;
};

export enum Stripe_TaxCodeObjectProperty {
  TaxCode = 'tax_code'
}

export type Stripe_Price = {
  __typename?: 'Stripe_Price';
  /** Whether the price can be used for new purchases. */
  active?: Maybe<Scalars['Boolean']>;
  /** Describes how to compute the price per period. Either `per_unit` or `tiered`. `per_unit` indicates that the fixed amount (specified in `unit_amount` or `unit_amount_decimal`) will be charged per unit in `quantity` (for prices with `usage_type=licensed`), or per unit of total usage (for prices with `usage_type=metered`). `tiered` indicates that the unit pricing will be computed using a tiering strategy as defined using the `tiers` and `tiers_mode` attributes. */
  billing_scheme?: Maybe<Stripe_PriceBillingSchemeProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** A lookup key used to retrieve prices dynamically from a static string. This may be up to 200 characters. */
  lookup_key?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** A brief description of the price, hidden from customers. */
  nickname?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PriceObjectProperty>;
  /** The Stripe product associated with this subscription. */
  product?: Maybe<Stripe_Product>;
  recurring?: Maybe<Stripe_Recurring>;
  /** Specifies whether the price is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. Once specified as either `inclusive` or `exclusive`, it cannot be changed. */
  tax_behavior?: Maybe<Stripe_PriceTaxBehaviorProperty>;
  /** Each element represents a pricing tier. This parameter requires `billing_scheme` to be set to `tiered`. See also the documentation for `billing_scheme`. */
  tiers?: Maybe<Array<Maybe<Stripe_PriceTier>>>;
  /** Defines if the tiering price should be `graduated` or `volume` based. In `volume`-based tiering, the maximum quantity within a period determines the per unit price. In `graduated` tiering, pricing can change as the quantity grows. */
  tiers_mode?: Maybe<Stripe_PriceTiersModeProperty>;
  transform_quantity?: Maybe<Stripe_TransformQuantity>;
  /** One of `one_time` or `recurring` depending on whether the price is for a one-time purchase or a recurring (subscription) purchase. */
  type?: Maybe<Stripe_PriceTypeProperty>;
  /** The unit amount in %s to be charged, represented as a whole integer if possible. Only set if `billing_scheme=per_unit`. */
  unit_amount?: Maybe<Scalars['Int']>;
  /** The unit amount in %s to be charged, represented as a decimal string with at most 12 decimal places. Only set if `billing_scheme=per_unit`. */
  unit_amount_decimal?: Maybe<Scalars['String']>;
};

export enum Stripe_PriceBillingSchemeProperty {
  PerUnit = 'per_unit',
  Tiered = 'tiered'
}

export enum Stripe_PriceObjectProperty {
  Price = 'price'
}

export type Stripe_Recurring = {
  __typename?: 'Stripe_Recurring';
  /** Specifies a usage aggregation strategy for prices of `usage_type=metered`. Allowed values are `sum` for summing up all usage during a period, `last_during_period` for using the last usage record reported within a period, `last_ever` for using the last usage record ever (across period bounds) or `max` which uses the usage record with the maximum reported usage during a period. Defaults to `sum`. */
  aggregate_usage?: Maybe<Stripe_RecurringAggregateUsageProperty>;
  /** The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`. */
  interval?: Maybe<Stripe_RecurringIntervalProperty>;
  /** The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. */
  interval_count?: Maybe<Scalars['Int']>;
  /** Configures how the quantity per period should be determined. Can be either `metered` or `licensed`. `licensed` automatically bills the `quantity` set when adding it to a subscription. `metered` aggregates the total usage based on usage records. Defaults to `licensed`. */
  usage_type?: Maybe<Stripe_RecurringUsageTypeProperty>;
};

export enum Stripe_RecurringAggregateUsageProperty {
  LastDuringPeriod = 'last_during_period',
  LastEver = 'last_ever',
  Max = 'max',
  Sum = 'sum'
}

export enum Stripe_RecurringIntervalProperty {
  Day = 'day',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export enum Stripe_RecurringUsageTypeProperty {
  Licensed = 'licensed',
  Metered = 'metered'
}

export enum Stripe_PriceTaxBehaviorProperty {
  Exclusive = 'exclusive',
  Inclusive = 'inclusive',
  Unspecified = 'unspecified'
}

export type Stripe_PriceTier = {
  __typename?: 'Stripe_PriceTier';
  /** Price for the entire tier. */
  flat_amount?: Maybe<Scalars['Int']>;
  /** Same as `flat_amount`, but contains a decimal value with at most 12 decimal places. */
  flat_amount_decimal?: Maybe<Scalars['String']>;
  /** Per unit price for units relevant to the tier. */
  unit_amount?: Maybe<Scalars['Int']>;
  /** Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. */
  unit_amount_decimal?: Maybe<Scalars['String']>;
  /** Up to and including to this quantity will be contained in the tier. */
  up_to?: Maybe<Scalars['Int']>;
};

export enum Stripe_PriceTiersModeProperty {
  Graduated = 'graduated',
  Volume = 'volume'
}

export type Stripe_TransformQuantity = {
  __typename?: 'Stripe_TransformQuantity';
  /** Divide usage by this number. */
  divide_by?: Maybe<Scalars['Int']>;
  /** After division, either round the result `up` or `down`. */
  round?: Maybe<Stripe_TransformQuantityRoundProperty>;
};

export enum Stripe_TransformQuantityRoundProperty {
  Down = 'down',
  Up = 'up'
}

export enum Stripe_PriceTypeProperty {
  OneTime = 'one_time',
  Recurring = 'recurring'
}

export type TsWhereStripeProductInput = {
  active?: InputMaybe<TsWhereBooleanInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  images?: InputMaybe<TsWhereStripe_ProductImagesInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  package_dimensions?: InputMaybe<TsWhereStripe_PackageDimensionsInput>;
  shippable?: InputMaybe<TsWhereBooleanInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  tax_code?: InputMaybe<TsWhereStripe_TaxCodeWrappedStringUnionInput>;
  unit_label?: InputMaybe<TsWhereStringInput>;
  updated?: InputMaybe<TsWhereIntegerInput>;
  url?: InputMaybe<TsWhereStringInput>;
  prices?: InputMaybe<TsWhereStripe_PriceInput>;
  reviews?: InputMaybe<TsWhereReviewsIo_ListProductReviewsResponseInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  AND?: InputMaybe<Array<InputMaybe<TsWhereStripeProductInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereStripeProductInput>>>;
  NOT?: InputMaybe<TsWhereStripeProductInput>;
};

export type TsWhereStripe_ProductImagesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereInput = {
  title?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
  baseUrl?: InputMaybe<TsWhereStringInput>;
  provider?: InputMaybe<TsWhereStringInput>;
  idKey?: InputMaybe<TsWhereStringInput>;
  destination?: InputMaybe<TsWhereStringInput>;
  privateAcl?: InputMaybe<TsWhereBooleanInput>;
  environmentVariables?: InputMaybe<TsWhereTsStaticSiteEnvironmentVariablesInput>;
  triggers?: InputMaybe<TsWhereTsStaticSiteTriggersInput>;
  templateHash?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_capturable?: InputMaybe<TsWhereIntegerInput>;
  amount_details?: InputMaybe<TsWhereStripe_PaymentFlowsAmountDetailsInput>;
  amount_received?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStripe_ApplicationWrappedStringUnionInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  automatic_payment_methods?: InputMaybe<TsWhereStripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntentInput>;
  canceled_at?: InputMaybe<TsWhereIntegerInput>;
  cancellation_reason?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  charges?: InputMaybe<TsWhereStripe_PaymentIntentChargesInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  confirmation_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStripe_InvoiceWrappedStringUnionInput>;
  last_payment_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_action?: InputMaybe<TsWhereStripe_PaymentIntentNextActionInput>;
  object?: InputMaybe<TsWhereInput>;
  on_behalf_of?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
  payment_method?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  payment_method_options?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodOptionsInput>;
  payment_method_types?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodTypesInput>;
  processing?: InputMaybe<TsWhereStripe_PaymentIntentProcessingInput>;
  receipt_email?: InputMaybe<TsWhereStringInput>;
  review?: InputMaybe<TsWhereStripe_ReviewWrappedStringUnionInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_suffix?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_TransferDataInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
  invoiceItems?: InputMaybe<TsWhereStripe_InvoiceitemInput>;
  sessionItems?: InputMaybe<TsWhereStripe_ItemInput>;
  shipment?: InputMaybe<TsWhereShipEngine_LabelInput>;
  active?: InputMaybe<TsWhereBooleanInput>;
  images?: InputMaybe<TsWhereStripe_ProductImagesInput>;
  name?: InputMaybe<TsWhereStringInput>;
  package_dimensions?: InputMaybe<TsWhereStripe_PackageDimensionsInput>;
  shippable?: InputMaybe<TsWhereBooleanInput>;
  tax_code?: InputMaybe<TsWhereStripe_TaxCodeWrappedStringUnionInput>;
  unit_label?: InputMaybe<TsWhereStringInput>;
  updated?: InputMaybe<TsWhereIntegerInput>;
  url?: InputMaybe<TsWhereStringInput>;
  prices?: InputMaybe<TsWhereStripe_PriceInput>;
  reviews?: InputMaybe<TsWhereReviewsIo_ListProductReviewsResponseInput>;
  email?: InputMaybe<TsWhereStringInput>;
  bio?: InputMaybe<TsWhereStringInput>;
  avatar?: InputMaybe<TsWhereAssetRelationshipInput>;
  stripeCustomerId?: InputMaybe<TsWhereStringInput>;
  links?: InputMaybe<TsWhereNavigationDataLinksInput>;
  AND?: InputMaybe<Array<InputMaybe<TsWhereInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereInput>>>;
  NOT?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentFlowsAmountDetailsInput = {
  tip?: InputMaybe<TsWhereStripe_PaymentFlowsAmountDetailsResourceTipInput>;
};

export type TsWhereStripe_PaymentFlowsAmountDetailsResourceTipInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_ApplicationWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntentInput = {
  enabled?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_PaymentIntentChargesInput = {
  data?: InputMaybe<TsWhereStripe_ChargeInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ChargeInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_captured?: InputMaybe<TsWhereIntegerInput>;
  amount_refunded?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStripe_ApplicationWrappedStringUnionInput>;
  application_fee?: InputMaybe<TsWhereStripe_ApplicationFeeWrappedStringUnionInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  balance_transaction?: InputMaybe<TsWhereStripe_BalanceTransactionWrappedStringUnionInput>;
  billing_details?: InputMaybe<TsWhereStripe_BillingDetailsInput>;
  calculated_statement_descriptor?: InputMaybe<TsWhereStringInput>;
  captured?: InputMaybe<TsWhereBooleanInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  disputed?: InputMaybe<TsWhereBooleanInput>;
  failure_balance_transaction?: InputMaybe<TsWhereStripe_BalanceTransactionWrappedStringUnionInput>;
  failure_code?: InputMaybe<TsWhereStringInput>;
  failure_message?: InputMaybe<TsWhereStringInput>;
  fraud_details?: InputMaybe<TsWhereStripe_ChargeFraudDetailsInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStripe_InvoiceWrappedStringUnionInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  on_behalf_of?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
  order?: InputMaybe<TsWhereStripe_OrderWrappedStringUnionInput>;
  outcome?: InputMaybe<TsWhereStripe_ChargeOutcomeInput>;
  paid?: InputMaybe<TsWhereBooleanInput>;
  payment_intent?: InputMaybe<TsWhereStripe_PaymentIntentWrappedStringUnionInput>;
  payment_method?: InputMaybe<TsWhereStringInput>;
  payment_method_details?: InputMaybe<TsWhereStripe_PaymentMethodDetailsInput>;
  receipt_email?: InputMaybe<TsWhereStringInput>;
  receipt_number?: InputMaybe<TsWhereStringInput>;
  receipt_url?: InputMaybe<TsWhereStringInput>;
  refunded?: InputMaybe<TsWhereBooleanInput>;
  refunds?: InputMaybe<TsWhereStripe_PaymentIntentRefundsInput>;
  review?: InputMaybe<TsWhereStripe_ReviewWrappedStringUnionInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  source_transfer?: InputMaybe<TsWhereStripe_TransferWrappedStringUnionInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_suffix?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer?: InputMaybe<TsWhereStripe_TransferWrappedStringUnionInput>;
  transfer_data?: InputMaybe<TsWhereStripe_ChargeTransferDataInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ApplicationFeeWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_refunded?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  refunded?: InputMaybe<TsWhereBooleanInput>;
  refunds?: InputMaybe<TsWhereStripe_ApplicationFeeRefundsInput>;
};

export type TsWhereStripe_ApplicationFeeRefundsInput = {
  data?: InputMaybe<TsWhereStripe_FeeRefundInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_FeeRefundInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_BalanceTransactionWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  available_on?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  exchange_rate?: InputMaybe<TsWhereNumberInput>;
  fee?: InputMaybe<TsWhereIntegerInput>;
  fee_details?: InputMaybe<TsWhereStripe_FeeInput>;
  id?: InputMaybe<TsWhereStringInput>;
  net?: InputMaybe<TsWhereIntegerInput>;
  object?: InputMaybe<TsWhereInput>;
  reporting_category?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_FeeInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStringInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_BillingDetailsInput = {
  address?: InputMaybe<TsWhereStripe_AddressInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  phone?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AddressInput = {
  city?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  line1?: InputMaybe<TsWhereStringInput>;
  line2?: InputMaybe<TsWhereStringInput>;
  postal_code?: InputMaybe<TsWhereStringInput>;
  state?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ChargeFraudDetailsInput = {
  stripe_report?: InputMaybe<TsWhereStringInput>;
  user_report?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_InvoiceWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  account_country?: InputMaybe<TsWhereStringInput>;
  account_name?: InputMaybe<TsWhereStringInput>;
  account_tax_ids?: InputMaybe<TsWhereStripe_InvoiceAccountTaxIdsInput>;
  amount_due?: InputMaybe<TsWhereIntegerInput>;
  amount_paid?: InputMaybe<TsWhereIntegerInput>;
  amount_remaining?: InputMaybe<TsWhereIntegerInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  attempt_count?: InputMaybe<TsWhereIntegerInput>;
  attempted?: InputMaybe<TsWhereBooleanInput>;
  auto_advance?: InputMaybe<TsWhereBooleanInput>;
  automatic_tax?: InputMaybe<TsWhereStripe_AutomaticTaxInput>;
  billing_reason?: InputMaybe<TsWhereInput>;
  collection_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  custom_fields?: InputMaybe<TsWhereStripe_InvoiceSettingCustomFieldInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  customer_address?: InputMaybe<TsWhereStripe_AddressInput>;
  customer_email?: InputMaybe<TsWhereStringInput>;
  customer_name?: InputMaybe<TsWhereStringInput>;
  customer_phone?: InputMaybe<TsWhereStringInput>;
  customer_shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  customer_tax_exempt?: InputMaybe<TsWhereInput>;
  customer_tax_ids?: InputMaybe<TsWhereStripe_InvoicesResourceInvoiceTaxIdInput>;
  default_tax_rates?: InputMaybe<TsWhereStripe_TaxRateInput>;
  description?: InputMaybe<TsWhereStringInput>;
  discount?: InputMaybe<TsWhereStripe_DiscountInput>;
  discounts?: InputMaybe<TsWhereStripe_InvoiceDiscountsInput>;
  due_date?: InputMaybe<TsWhereIntegerInput>;
  ending_balance?: InputMaybe<TsWhereIntegerInput>;
  footer?: InputMaybe<TsWhereStringInput>;
  hosted_invoice_url?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice_pdf?: InputMaybe<TsWhereStringInput>;
  last_finalization_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  lines?: InputMaybe<TsWhereStripe_InvoiceLinesInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_payment_attempt?: InputMaybe<TsWhereIntegerInput>;
  number?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  paid?: InputMaybe<TsWhereBooleanInput>;
  paid_out_of_band?: InputMaybe<TsWhereBooleanInput>;
  payment_settings?: InputMaybe<TsWhereStripe_InvoicesPaymentSettingsInput>;
  period_end?: InputMaybe<TsWhereIntegerInput>;
  period_start?: InputMaybe<TsWhereIntegerInput>;
  post_payment_credit_notes_amount?: InputMaybe<TsWhereIntegerInput>;
  pre_payment_credit_notes_amount?: InputMaybe<TsWhereIntegerInput>;
  receipt_number?: InputMaybe<TsWhereStringInput>;
  starting_balance?: InputMaybe<TsWhereIntegerInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  status_transitions?: InputMaybe<TsWhereStripe_InvoicesStatusTransitionsInput>;
  subscription_proration_date?: InputMaybe<TsWhereIntegerInput>;
  subtotal?: InputMaybe<TsWhereIntegerInput>;
  tax?: InputMaybe<TsWhereIntegerInput>;
  threshold_reason?: InputMaybe<TsWhereStripe_InvoiceThresholdReasonInput>;
  total?: InputMaybe<TsWhereIntegerInput>;
  total_discount_amounts?: InputMaybe<TsWhereStripe_DiscountsResourceDiscountAmountInput>;
  total_tax_amounts?: InputMaybe<TsWhereStripe_InvoiceTaxAmountInput>;
  transfer_data?: InputMaybe<TsWhereStripe_InvoiceTransferDataInput>;
  webhooks_delivered_at?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_InvoiceAccountTaxIdsInput = {
  value?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  type?: InputMaybe<TsWhereInput>;
  verification?: InputMaybe<TsWhereStripe_TaxIdVerificationInput>;
};

export type TsWhereStripe_TaxIdVerificationInput = {
  status?: InputMaybe<TsWhereInput>;
  verified_address?: InputMaybe<TsWhereStringInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AutomaticTaxInput = {
  enabled?: InputMaybe<TsWhereBooleanInput>;
  status?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_InvoiceSettingCustomFieldInput = {
  name?: InputMaybe<TsWhereStringInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ShippingInput = {
  address?: InputMaybe<TsWhereStripe_AddressInput>;
  carrier?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  phone?: InputMaybe<TsWhereStringInput>;
  tracking_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_InvoicesResourceInvoiceTaxIdInput = {
  type?: InputMaybe<TsWhereInput>;
  value?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TaxRateInput = {
  active?: InputMaybe<TsWhereBooleanInput>;
  country?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  display_name?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  inclusive?: InputMaybe<TsWhereBooleanInput>;
  jurisdiction?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  percentage?: InputMaybe<TsWhereNumberInput>;
  state?: InputMaybe<TsWhereStringInput>;
  tax_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_DiscountInput = {
  checkout_session?: InputMaybe<TsWhereStringInput>;
  coupon?: InputMaybe<TsWhereStripe_CouponInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  end?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStringInput>;
  invoice_item?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  start?: InputMaybe<TsWhereIntegerInput>;
  subscription?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_CouponInput = {
  amount_off?: InputMaybe<TsWhereIntegerInput>;
  applies_to?: InputMaybe<TsWhereStripe_CouponAppliesToInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  duration?: InputMaybe<TsWhereInput>;
  duration_in_months?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  max_redemptions?: InputMaybe<TsWhereIntegerInput>;
  name?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  percent_off?: InputMaybe<TsWhereNumberInput>;
  redeem_by?: InputMaybe<TsWhereIntegerInput>;
  times_redeemed?: InputMaybe<TsWhereIntegerInput>;
  valid?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_CouponAppliesToInput = {
  products?: InputMaybe<TsWhereStripe_InvoiceProductsInput>;
};

export type TsWhereStripe_InvoiceProductsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_InvoiceDiscountsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_ApiErrorsInput = {
  charge?: InputMaybe<TsWhereStringInput>;
  code?: InputMaybe<TsWhereStringInput>;
  decline_code?: InputMaybe<TsWhereStringInput>;
  doc_url?: InputMaybe<TsWhereStringInput>;
  message?: InputMaybe<TsWhereStringInput>;
  param?: InputMaybe<TsWhereStringInput>;
  payment_intent?: InputMaybe<TsWhereStripe_PaymentIntentInput>;
  payment_method?: InputMaybe<TsWhereStripe_PaymentMethodInput>;
  payment_method_type?: InputMaybe<TsWhereStringInput>;
  setup_intent?: InputMaybe<TsWhereStripe_SetupIntentInput>;
  source?: InputMaybe<TsWhereStripe_BankAccountStripe_CardStripe_SourceUnionInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentIntentInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_capturable?: InputMaybe<TsWhereIntegerInput>;
  amount_details?: InputMaybe<TsWhereStripe_PaymentFlowsAmountDetailsInput>;
  amount_received?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStripe_ApplicationWrappedStringUnionInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  automatic_payment_methods?: InputMaybe<TsWhereStripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntentInput>;
  canceled_at?: InputMaybe<TsWhereIntegerInput>;
  cancellation_reason?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  charges?: InputMaybe<TsWhereStripe_PaymentIntentChargesInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  confirmation_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStripe_InvoiceWrappedStringUnionInput>;
  last_payment_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_action?: InputMaybe<TsWhereStripe_PaymentIntentNextActionInput>;
  object?: InputMaybe<TsWhereInput>;
  on_behalf_of?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
  payment_method?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  payment_method_options?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodOptionsInput>;
  payment_method_types?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodTypesInput>;
  processing?: InputMaybe<TsWhereStripe_PaymentIntentProcessingInput>;
  receipt_email?: InputMaybe<TsWhereStringInput>;
  review?: InputMaybe<TsWhereStripe_ReviewWrappedStringUnionInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_suffix?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_TransferDataInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
  invoiceItems?: InputMaybe<TsWhereStripe_InvoiceitemInput>;
  sessionItems?: InputMaybe<TsWhereStripe_ItemInput>;
  shipment?: InputMaybe<TsWhereShipEngine_LabelInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
};

export type TsWhereStripe_PaymentIntentNextActionInput = {
  alipay_handle_redirect?: InputMaybe<TsWhereStripe_PaymentIntentNextActionAlipayHandleRedirectInput>;
  boleto_display_details?: InputMaybe<TsWhereStripe_PaymentIntentNextActionBoletoInput>;
  card_await_notification?: InputMaybe<TsWhereStripe_PaymentIntentNextActionCardAwaitNotificationInput>;
  display_bank_transfer_instructions?: InputMaybe<TsWhereStripe_PaymentIntentNextActionDisplayBankTransferInstructionsInput>;
  konbini_display_details?: InputMaybe<TsWhereStripe_PaymentIntentNextActionKonbiniInput>;
  oxxo_display_details?: InputMaybe<TsWhereStripe_PaymentIntentNextActionDisplayOxxoDetailsInput>;
  paynow_display_qr_code?: InputMaybe<TsWhereStripe_PaymentIntentNextActionPaynowDisplayQrCodeInput>;
  redirect_to_url?: InputMaybe<TsWhereStripe_PaymentIntentNextActionRedirectToUrlInput>;
  type?: InputMaybe<TsWhereStringInput>;
  verify_with_microdeposits?: InputMaybe<TsWhereStripe_PaymentIntentNextActionVerifyWithMicrodepositsInput>;
  wechat_pay_display_qr_code?: InputMaybe<TsWhereStripe_PaymentIntentNextActionWechatPayDisplayQrCodeInput>;
  wechat_pay_redirect_to_android_app?: InputMaybe<TsWhereStripe_PaymentIntentNextActionWechatPayRedirectToAndroidAppInput>;
  wechat_pay_redirect_to_ios_app?: InputMaybe<TsWhereStripe_PaymentIntentNextActionWechatPayRedirectToIosAppInput>;
};

export type TsWhereStripe_PaymentIntentNextActionAlipayHandleRedirectInput = {
  native_data?: InputMaybe<TsWhereStringInput>;
  native_url?: InputMaybe<TsWhereStringInput>;
  return_url?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionBoletoInput = {
  expires_at?: InputMaybe<TsWhereIntegerInput>;
  hosted_voucher_url?: InputMaybe<TsWhereStringInput>;
  number?: InputMaybe<TsWhereStringInput>;
  pdf?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionCardAwaitNotificationInput = {
  charge_attempt_at?: InputMaybe<TsWhereIntegerInput>;
  customer_approval_required?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_PaymentIntentNextActionDisplayBankTransferInstructionsInput = {
  amount_remaining?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  financial_addresses?: InputMaybe<TsWhereStripe_FundingInstructionsBankTransferFinancialAddressInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_FundingInstructionsBankTransferFinancialAddressInput = {
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentIntentNextActionKonbiniInput = {
  expires_at?: InputMaybe<TsWhereIntegerInput>;
  hosted_voucher_url?: InputMaybe<TsWhereStringInput>;
  stores?: InputMaybe<TsWhereStripe_PaymentIntentNextActionKonbiniStoresInput>;
};

export type TsWhereStripe_PaymentIntentNextActionKonbiniStoresInput = {
  familymart?: InputMaybe<TsWhereStripe_PaymentIntentNextActionKonbiniFamilymartInput>;
  lawson?: InputMaybe<TsWhereStripe_PaymentIntentNextActionKonbiniLawsonInput>;
  ministop?: InputMaybe<TsWhereStripe_PaymentIntentNextActionKonbiniMinistopInput>;
  seicomart?: InputMaybe<TsWhereStripe_PaymentIntentNextActionKonbiniSeicomartInput>;
};

export type TsWhereStripe_PaymentIntentNextActionKonbiniFamilymartInput = {
  confirmation_number?: InputMaybe<TsWhereStringInput>;
  payment_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionKonbiniLawsonInput = {
  confirmation_number?: InputMaybe<TsWhereStringInput>;
  payment_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionKonbiniMinistopInput = {
  confirmation_number?: InputMaybe<TsWhereStringInput>;
  payment_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionKonbiniSeicomartInput = {
  confirmation_number?: InputMaybe<TsWhereStringInput>;
  payment_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionDisplayOxxoDetailsInput = {
  expires_after?: InputMaybe<TsWhereIntegerInput>;
  hosted_voucher_url?: InputMaybe<TsWhereStringInput>;
  number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionPaynowDisplayQrCodeInput = {
  data?: InputMaybe<TsWhereStringInput>;
  image_url_png?: InputMaybe<TsWhereStringInput>;
  image_url_svg?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionRedirectToUrlInput = {
  return_url?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionVerifyWithMicrodepositsInput = {
  arrival_date?: InputMaybe<TsWhereIntegerInput>;
  hosted_verification_url?: InputMaybe<TsWhereStringInput>;
  microdeposit_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentIntentNextActionWechatPayDisplayQrCodeInput = {
  data?: InputMaybe<TsWhereStringInput>;
  image_data_url?: InputMaybe<TsWhereStringInput>;
  image_url_png?: InputMaybe<TsWhereStringInput>;
  image_url_svg?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionWechatPayRedirectToAndroidAppInput = {
  app_id?: InputMaybe<TsWhereStringInput>;
  nonce_str?: InputMaybe<TsWhereStringInput>;
  package?: InputMaybe<TsWhereStringInput>;
  partner_id?: InputMaybe<TsWhereStringInput>;
  prepay_id?: InputMaybe<TsWhereStringInput>;
  sign?: InputMaybe<TsWhereStringInput>;
  timestamp?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentNextActionWechatPayRedirectToIosAppInput = {
  native_url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  business_profile?: InputMaybe<TsWhereStripe_AccountBusinessProfileInput>;
  business_type?: InputMaybe<TsWhereInput>;
  capabilities?: InputMaybe<TsWhereStripe_AccountCapabilitiesInput>;
  charges_enabled?: InputMaybe<TsWhereBooleanInput>;
  company?: InputMaybe<TsWhereStripe_LegalEntityCompanyInput>;
  controller?: InputMaybe<TsWhereStripe_AccountUnificationAccountControllerInput>;
  country?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  default_currency?: InputMaybe<TsWhereStringInput>;
  details_submitted?: InputMaybe<TsWhereBooleanInput>;
  email?: InputMaybe<TsWhereStringInput>;
  external_accounts?: InputMaybe<TsWhereStripe_AccountExternalAccountsInput>;
  future_requirements?: InputMaybe<TsWhereStripe_AccountFutureRequirementsInput>;
  id?: InputMaybe<TsWhereStringInput>;
  individual?: InputMaybe<TsWhereStripe_PersonInput>;
  object?: InputMaybe<TsWhereInput>;
  payouts_enabled?: InputMaybe<TsWhereBooleanInput>;
  requirements?: InputMaybe<TsWhereStripe_AccountRequirementsInput>;
  settings?: InputMaybe<TsWhereStripe_AccountSettingsInput>;
  tos_acceptance?: InputMaybe<TsWhereStripe_AccountTosAcceptanceInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_AccountBusinessProfileInput = {
  mcc?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  product_description?: InputMaybe<TsWhereStringInput>;
  support_address?: InputMaybe<TsWhereStripe_AddressInput>;
  support_email?: InputMaybe<TsWhereStringInput>;
  support_phone?: InputMaybe<TsWhereStringInput>;
  support_url?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountCapabilitiesInput = {
  acss_debit_payments?: InputMaybe<TsWhereInput>;
  afterpay_clearpay_payments?: InputMaybe<TsWhereInput>;
  au_becs_debit_payments?: InputMaybe<TsWhereInput>;
  bacs_debit_payments?: InputMaybe<TsWhereInput>;
  bancontact_payments?: InputMaybe<TsWhereInput>;
  bank_transfer_payments?: InputMaybe<TsWhereInput>;
  boleto_payments?: InputMaybe<TsWhereInput>;
  card_issuing?: InputMaybe<TsWhereInput>;
  card_payments?: InputMaybe<TsWhereInput>;
  cartes_bancaires_payments?: InputMaybe<TsWhereInput>;
  eps_payments?: InputMaybe<TsWhereInput>;
  fpx_payments?: InputMaybe<TsWhereInput>;
  giropay_payments?: InputMaybe<TsWhereInput>;
  grabpay_payments?: InputMaybe<TsWhereInput>;
  ideal_payments?: InputMaybe<TsWhereInput>;
  jcb_payments?: InputMaybe<TsWhereInput>;
  klarna_payments?: InputMaybe<TsWhereInput>;
  konbini_payments?: InputMaybe<TsWhereInput>;
  legacy_payments?: InputMaybe<TsWhereInput>;
  oxxo_payments?: InputMaybe<TsWhereInput>;
  p24_payments?: InputMaybe<TsWhereInput>;
  paynow_payments?: InputMaybe<TsWhereInput>;
  sepa_debit_payments?: InputMaybe<TsWhereInput>;
  sofort_payments?: InputMaybe<TsWhereInput>;
  tax_reporting_us_1099_k?: InputMaybe<TsWhereInput>;
  tax_reporting_us_1099_misc?: InputMaybe<TsWhereInput>;
  transfers?: InputMaybe<TsWhereInput>;
  us_bank_account_ach_payments?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_LegalEntityCompanyInput = {
  address?: InputMaybe<TsWhereStripe_AddressInput>;
  address_kana?: InputMaybe<TsWhereStripe_LegalEntityJapanAddressInput>;
  address_kanji?: InputMaybe<TsWhereStripe_LegalEntityJapanAddressInput>;
  directors_provided?: InputMaybe<TsWhereBooleanInput>;
  executives_provided?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
  name_kana?: InputMaybe<TsWhereStringInput>;
  name_kanji?: InputMaybe<TsWhereStringInput>;
  owners_provided?: InputMaybe<TsWhereBooleanInput>;
  ownership_declaration?: InputMaybe<TsWhereStripe_LegalEntityUboDeclarationInput>;
  phone?: InputMaybe<TsWhereStringInput>;
  structure?: InputMaybe<TsWhereInput>;
  tax_id_provided?: InputMaybe<TsWhereBooleanInput>;
  tax_id_registrar?: InputMaybe<TsWhereStringInput>;
  vat_id_provided?: InputMaybe<TsWhereBooleanInput>;
  verification?: InputMaybe<TsWhereStripe_LegalEntityCompanyVerificationInput>;
};

export type TsWhereStripe_LegalEntityJapanAddressInput = {
  city?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  line1?: InputMaybe<TsWhereStringInput>;
  line2?: InputMaybe<TsWhereStringInput>;
  postal_code?: InputMaybe<TsWhereStringInput>;
  state?: InputMaybe<TsWhereStringInput>;
  town?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_LegalEntityUboDeclarationInput = {
  date?: InputMaybe<TsWhereIntegerInput>;
  ip?: InputMaybe<TsWhereStringInput>;
  user_agent?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_LegalEntityCompanyVerificationInput = {
  document?: InputMaybe<TsWhereStripe_LegalEntityCompanyVerificationDocumentInput>;
};

export type TsWhereStripe_LegalEntityCompanyVerificationDocumentInput = {
  details?: InputMaybe<TsWhereStringInput>;
  details_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountUnificationAccountControllerInput = {
  is_controller?: InputMaybe<TsWhereBooleanInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_AccountExternalAccountsInput = {
  data?: InputMaybe<TsWhereStripe_AccountDataInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountDataInput = {
  account_holder_name?: InputMaybe<TsWhereStringInput>;
  account_holder_type?: InputMaybe<TsWhereStringInput>;
  account_type?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  default_for_currency?: InputMaybe<TsWhereBooleanInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
  address_city?: InputMaybe<TsWhereStringInput>;
  address_country?: InputMaybe<TsWhereStringInput>;
  address_line1?: InputMaybe<TsWhereStringInput>;
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_line2?: InputMaybe<TsWhereStringInput>;
  address_state?: InputMaybe<TsWhereStringInput>;
  address_zip?: InputMaybe<TsWhereStringInput>;
  address_zip_check?: InputMaybe<TsWhereStringInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  tokenization_method?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountFutureRequirementsInput = {
  alternatives?: InputMaybe<TsWhereStripe_AccountRequirementsAlternativeInput>;
  current_deadline?: InputMaybe<TsWhereIntegerInput>;
  currently_due?: InputMaybe<TsWhereStripe_AccountCurrentlyDueInput>;
  disabled_reason?: InputMaybe<TsWhereStringInput>;
  errors?: InputMaybe<TsWhereStripe_AccountRequirementsErrorInput>;
  eventually_due?: InputMaybe<TsWhereStripe_AccountEventuallyDueInput>;
  past_due?: InputMaybe<TsWhereStripe_AccountPastDueInput>;
  pending_verification?: InputMaybe<TsWhereStripe_AccountPendingVerificationInput>;
};

export type TsWhereStripe_AccountRequirementsAlternativeInput = {
  alternative_fields_due?: InputMaybe<TsWhereStripe_AccountAlternativeFieldsDueInput>;
  original_fields_due?: InputMaybe<TsWhereStripe_AccountOriginalFieldsDueInput>;
};

export type TsWhereStripe_AccountAlternativeFieldsDueInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_AccountOriginalFieldsDueInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_AccountCurrentlyDueInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_AccountRequirementsErrorInput = {
  code?: InputMaybe<TsWhereInput>;
  reason?: InputMaybe<TsWhereStringInput>;
  requirement?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountEventuallyDueInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_AccountPastDueInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_AccountPendingVerificationInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_PersonInput = {
  account?: InputMaybe<TsWhereStringInput>;
  address?: InputMaybe<TsWhereStripe_AddressInput>;
  address_kana?: InputMaybe<TsWhereStripe_LegalEntityJapanAddressInput>;
  address_kanji?: InputMaybe<TsWhereStripe_LegalEntityJapanAddressInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  dob?: InputMaybe<TsWhereStripe_LegalEntityDobInput>;
  email?: InputMaybe<TsWhereStringInput>;
  first_name?: InputMaybe<TsWhereStringInput>;
  first_name_kana?: InputMaybe<TsWhereStringInput>;
  first_name_kanji?: InputMaybe<TsWhereStringInput>;
  full_name_aliases?: InputMaybe<TsWhereStripe_AccountFullNameAliasesInput>;
  future_requirements?: InputMaybe<TsWhereStripe_PersonFutureRequirementsInput>;
  gender?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  id_number_provided?: InputMaybe<TsWhereBooleanInput>;
  last_name?: InputMaybe<TsWhereStringInput>;
  last_name_kana?: InputMaybe<TsWhereStringInput>;
  last_name_kanji?: InputMaybe<TsWhereStringInput>;
  maiden_name?: InputMaybe<TsWhereStringInput>;
  nationality?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  phone?: InputMaybe<TsWhereStringInput>;
  political_exposure?: InputMaybe<TsWhereInput>;
  relationship?: InputMaybe<TsWhereStripe_PersonRelationshipInput>;
  requirements?: InputMaybe<TsWhereStripe_PersonRequirementsInput>;
  ssn_last_4_provided?: InputMaybe<TsWhereBooleanInput>;
  verification?: InputMaybe<TsWhereStripe_LegalEntityPersonVerificationInput>;
};

export type TsWhereStripe_LegalEntityDobInput = {
  day?: InputMaybe<TsWhereIntegerInput>;
  month?: InputMaybe<TsWhereIntegerInput>;
  year?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_AccountFullNameAliasesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_PersonFutureRequirementsInput = {
  alternatives?: InputMaybe<TsWhereStripe_AccountRequirementsAlternativeInput>;
  currently_due?: InputMaybe<TsWhereStripe_AccountCurrentlyDueInput>;
  errors?: InputMaybe<TsWhereStripe_AccountRequirementsErrorInput>;
  eventually_due?: InputMaybe<TsWhereStripe_AccountEventuallyDueInput>;
  past_due?: InputMaybe<TsWhereStripe_AccountPastDueInput>;
  pending_verification?: InputMaybe<TsWhereStripe_AccountPendingVerificationInput>;
};

export type TsWhereStripe_PersonRelationshipInput = {
  director?: InputMaybe<TsWhereBooleanInput>;
  executive?: InputMaybe<TsWhereBooleanInput>;
  owner?: InputMaybe<TsWhereBooleanInput>;
  percent_ownership?: InputMaybe<TsWhereNumberInput>;
  representative?: InputMaybe<TsWhereBooleanInput>;
  title?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PersonRequirementsInput = {
  alternatives?: InputMaybe<TsWhereStripe_AccountRequirementsAlternativeInput>;
  currently_due?: InputMaybe<TsWhereStripe_AccountCurrentlyDueInput>;
  errors?: InputMaybe<TsWhereStripe_AccountRequirementsErrorInput>;
  eventually_due?: InputMaybe<TsWhereStripe_AccountEventuallyDueInput>;
  past_due?: InputMaybe<TsWhereStripe_AccountPastDueInput>;
  pending_verification?: InputMaybe<TsWhereStripe_AccountPendingVerificationInput>;
};

export type TsWhereStripe_LegalEntityPersonVerificationInput = {
  additional_document?: InputMaybe<TsWhereStripe_LegalEntityPersonVerificationDocumentInput>;
  details?: InputMaybe<TsWhereStringInput>;
  details_code?: InputMaybe<TsWhereStringInput>;
  document?: InputMaybe<TsWhereStripe_LegalEntityPersonVerificationDocumentInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_LegalEntityPersonVerificationDocumentInput = {
  details?: InputMaybe<TsWhereStringInput>;
  details_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountRequirementsInput = {
  alternatives?: InputMaybe<TsWhereStripe_AccountRequirementsAlternativeInput>;
  current_deadline?: InputMaybe<TsWhereIntegerInput>;
  currently_due?: InputMaybe<TsWhereStripe_AccountCurrentlyDueInput>;
  disabled_reason?: InputMaybe<TsWhereStringInput>;
  errors?: InputMaybe<TsWhereStripe_AccountRequirementsErrorInput>;
  eventually_due?: InputMaybe<TsWhereStripe_AccountEventuallyDueInput>;
  past_due?: InputMaybe<TsWhereStripe_AccountPastDueInput>;
  pending_verification?: InputMaybe<TsWhereStripe_AccountPendingVerificationInput>;
};

export type TsWhereStripe_AccountSettingsInput = {
  bacs_debit_payments?: InputMaybe<TsWhereStripe_AccountBacsDebitPaymentsSettingsInput>;
  branding?: InputMaybe<TsWhereStripe_AccountBrandingSettingsInput>;
  card_issuing?: InputMaybe<TsWhereStripe_AccountCardIssuingSettingsInput>;
  card_payments?: InputMaybe<TsWhereStripe_AccountCardPaymentsSettingsInput>;
  dashboard?: InputMaybe<TsWhereStripe_AccountDashboardSettingsInput>;
  payments?: InputMaybe<TsWhereStripe_AccountPaymentsSettingsInput>;
  payouts?: InputMaybe<TsWhereStripe_AccountPayoutSettingsInput>;
  sepa_debit_payments?: InputMaybe<TsWhereStripe_AccountSepaDebitPaymentsSettingsInput>;
};

export type TsWhereStripe_AccountBacsDebitPaymentsSettingsInput = {
  display_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountBrandingSettingsInput = {
  primary_color?: InputMaybe<TsWhereStringInput>;
  secondary_color?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountCardIssuingSettingsInput = {
  tos_acceptance?: InputMaybe<TsWhereStripe_CardIssuingAccountTermsOfServiceInput>;
};

export type TsWhereStripe_CardIssuingAccountTermsOfServiceInput = {
  date?: InputMaybe<TsWhereIntegerInput>;
  ip?: InputMaybe<TsWhereStringInput>;
  user_agent?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountCardPaymentsSettingsInput = {
  decline_on?: InputMaybe<TsWhereStripe_AccountDeclineChargeOnInput>;
  statement_descriptor_prefix?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountDeclineChargeOnInput = {
  avs_failure?: InputMaybe<TsWhereBooleanInput>;
  cvc_failure?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_AccountDashboardSettingsInput = {
  display_name?: InputMaybe<TsWhereStringInput>;
  timezone?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountPaymentsSettingsInput = {
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_kana?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_kanji?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountPayoutSettingsInput = {
  debit_negative_balances?: InputMaybe<TsWhereBooleanInput>;
  schedule?: InputMaybe<TsWhereStripe_TransferScheduleInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TransferScheduleInput = {
  delay_days?: InputMaybe<TsWhereIntegerInput>;
  interval?: InputMaybe<TsWhereStringInput>;
  monthly_anchor?: InputMaybe<TsWhereIntegerInput>;
  weekly_anchor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountSepaDebitPaymentsSettingsInput = {
  creditor_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_AccountTosAcceptanceInput = {
  date?: InputMaybe<TsWhereIntegerInput>;
  ip?: InputMaybe<TsWhereStringInput>;
  service_agreement?: InputMaybe<TsWhereStringInput>;
  user_agent?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  acss_debit?: InputMaybe<TsWhereStripe_PaymentMethodAcssDebitInput>;
  au_becs_debit?: InputMaybe<TsWhereStripe_PaymentMethodAuBecsDebitInput>;
  bacs_debit?: InputMaybe<TsWhereStripe_PaymentMethodBacsDebitInput>;
  billing_details?: InputMaybe<TsWhereStripe_BillingDetailsInput>;
  boleto?: InputMaybe<TsWhereStripe_PaymentMethodBoletoInput>;
  card?: InputMaybe<TsWhereStripe_PaymentMethodCardInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  eps?: InputMaybe<TsWhereStripe_PaymentMethodEpsInput>;
  fpx?: InputMaybe<TsWhereStripe_PaymentMethodFpxInput>;
  id?: InputMaybe<TsWhereStringInput>;
  ideal?: InputMaybe<TsWhereStripe_PaymentMethodIdealInput>;
  klarna?: InputMaybe<TsWhereStripe_PaymentMethodKlarnaInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  p24?: InputMaybe<TsWhereStripe_PaymentMethodP24Input>;
  sepa_debit?: InputMaybe<TsWhereStripe_PaymentMethodSepaDebitInput>;
  sofort?: InputMaybe<TsWhereStripe_PaymentMethodSofortInput>;
  type?: InputMaybe<TsWhereInput>;
  us_bank_account?: InputMaybe<TsWhereStripe_PaymentMethodUsBankAccountInput>;
};

export type TsWhereStripe_PaymentMethodAcssDebitInput = {
  bank_name?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  institution_number?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  transit_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodAuBecsDebitInput = {
  bsb_number?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodBacsDebitInput = {
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  sort_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodBoletoInput = {
  tax_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodCardInput = {
  brand?: InputMaybe<TsWhereStringInput>;
  checks?: InputMaybe<TsWhereStripe_PaymentMethodCardChecksInput>;
  country?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  generated_from?: InputMaybe<TsWhereStripe_PaymentMethodCardGeneratedCardInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  networks?: InputMaybe<TsWhereStripe_NetworksInput>;
  three_d_secure_usage?: InputMaybe<TsWhereStripe_ThreeDSecureUsageInput>;
  wallet?: InputMaybe<TsWhereStripe_PaymentMethodCardWalletInput>;
};

export type TsWhereStripe_PaymentMethodCardChecksInput = {
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_postal_code_check?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodCardGeneratedCardInput = {
  charge?: InputMaybe<TsWhereStringInput>;
  payment_method_details?: InputMaybe<TsWhereStripe_CardGeneratedFromPaymentMethodDetailsInput>;
};

export type TsWhereStripe_CardGeneratedFromPaymentMethodDetailsInput = {
  card_present?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardPresentInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardPresentInput = {
  amount_authorized?: InputMaybe<TsWhereIntegerInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  capture_before?: InputMaybe<TsWhereIntegerInput>;
  cardholder_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  emv_auth_data?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  generated_card?: InputMaybe<TsWhereStringInput>;
  incremental_authorization_supported?: InputMaybe<TsWhereBooleanInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  network?: InputMaybe<TsWhereStringInput>;
  overcapture_supported?: InputMaybe<TsWhereBooleanInput>;
  read_method?: InputMaybe<TsWhereInput>;
  receipt?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardPresentReceiptInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardPresentReceiptInput = {
  account_type?: InputMaybe<TsWhereInput>;
  application_cryptogram?: InputMaybe<TsWhereStringInput>;
  application_preferred_name?: InputMaybe<TsWhereStringInput>;
  authorization_code?: InputMaybe<TsWhereStringInput>;
  authorization_response_code?: InputMaybe<TsWhereStringInput>;
  cardholder_verification_method?: InputMaybe<TsWhereStringInput>;
  dedicated_file_name?: InputMaybe<TsWhereStringInput>;
  terminal_verification_results?: InputMaybe<TsWhereStringInput>;
  transaction_status_information?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_NetworksInput = {
  available?: InputMaybe<TsWhereStripe_PaymentMethodAvailableInput>;
  preferred?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodAvailableInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_ThreeDSecureUsageInput = {
  supported?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_PaymentMethodCardWalletInput = {
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  masterpass?: InputMaybe<TsWhereStripe_PaymentMethodCardWalletMasterpassInput>;
  type?: InputMaybe<TsWhereInput>;
  visa_checkout?: InputMaybe<TsWhereStripe_PaymentMethodCardWalletVisaCheckoutInput>;
};

export type TsWhereStripe_PaymentMethodCardWalletMasterpassInput = {
  billing_address?: InputMaybe<TsWhereStripe_AddressInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  shipping_address?: InputMaybe<TsWhereStripe_AddressInput>;
};

export type TsWhereStripe_PaymentMethodCardWalletVisaCheckoutInput = {
  billing_address?: InputMaybe<TsWhereStripe_AddressInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  shipping_address?: InputMaybe<TsWhereStripe_AddressInput>;
};

export type TsWhereStripe_PaymentMethodEpsInput = {
  bank?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodFpxInput = {
  bank?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodIdealInput = {
  bank?: InputMaybe<TsWhereInput>;
  bic?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodKlarnaInput = {
  dob?: InputMaybe<TsWhereStripe_PaymentFlowsPrivatePaymentMethodsKlarnaDobInput>;
};

export type TsWhereStripe_PaymentFlowsPrivatePaymentMethodsKlarnaDobInput = {
  day?: InputMaybe<TsWhereIntegerInput>;
  month?: InputMaybe<TsWhereIntegerInput>;
  year?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_PaymentMethodP24Input = {
  bank?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodSepaDebitInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  branch_code?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodSofortInput = {
  country?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodUsBankAccountInput = {
  account_holder_type?: InputMaybe<TsWhereInput>;
  account_type?: InputMaybe<TsWhereInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentPaymentMethodOptionsInput = {
  acss_debit?: InputMaybe<TsWhere4c5fc35133092d01c0a6f6273b32acefUnionInput>;
  afterpay_clearpay?: InputMaybe<TsWhere69c699ae4c023cdd5081fd0b275d2314UnionInput>;
  alipay?: InputMaybe<TsWhere0c15571704f92e4deef74bf2861e3048UnionInput>;
  au_becs_debit?: InputMaybe<TsWhered0f94d051a53ade5163af84b3fd6b0f7UnionInput>;
  bacs_debit?: InputMaybe<TsWhere55b3d4514248bce7ac082bbc0da1833aUnionInput>;
  bancontact?: InputMaybe<TsWhereac15fe59c1b71bd6db2d201a4acee09dUnionInput>;
  boleto?: InputMaybe<TsWhere076b30d85cca1aae72305dffd8194343UnionInput>;
  card?: InputMaybe<TsWhere6181441ba9fb7eee556dd3a4a9d229e4UnionInput>;
  card_present?: InputMaybe<TsWherea245e0776494a0d51fe046b0453d38afUnionInput>;
  customer_balance?: InputMaybe<TsWhere8b9cb37bcfc0b30034cf6ebd1e41fe69UnionInput>;
  eps?: InputMaybe<TsWheref973d307d812f0dfb771bc8122e5c599UnionInput>;
  fpx?: InputMaybe<TsWhereabae1b112405e8b3c0dbfa673a54aaadUnionInput>;
  giropay?: InputMaybe<TsWhere8cc56b75820487c13c502fada2896d16UnionInput>;
  grabpay?: InputMaybe<TsWhereeaab7727acdc782ba4b7fd55f1d34914UnionInput>;
  ideal?: InputMaybe<TsWherebc8c021d852b37c55e33cd17b5bc5c8eUnionInput>;
  interac_present?: InputMaybe<TsWhere0790e0b407fa40ec44faa0c0093547c0UnionInput>;
  klarna?: InputMaybe<TsWhere431e685e94c88a23966c5e39578fd407UnionInput>;
  konbini?: InputMaybe<TsWhere00ef7207d1f936d9dfffc7da2b87c7a0UnionInput>;
  oxxo?: InputMaybe<TsWhere3ec3443ea1c1a903147c0d61800da976UnionInput>;
  p24?: InputMaybe<TsWherea35be11d8b3a6f85cf29c066bd2baeecUnionInput>;
  paynow?: InputMaybe<TsWhere3755b88328836d5c8b19acd047bf83f5UnionInput>;
  sepa_debit?: InputMaybe<TsWhere1ef47aea767cbab0a37f27b4392256afUnionInput>;
  sofort?: InputMaybe<TsWhere29eab390824f828a021e12d845868bf5UnionInput>;
  us_bank_account?: InputMaybe<TsWheree8df26123b430c2df83da95f1b7d7d58UnionInput>;
  wechat_pay?: InputMaybe<TsWheref3a2f1202624d0cdb50285826cb85a9eUnionInput>;
};

export type TsWhere4c5fc35133092d01c0a6f6273b32acefUnionInput = {
  mandate_options?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitInput = {
  custom_mandate_url?: InputMaybe<TsWhereStringInput>;
  interval_description?: InputMaybe<TsWhereStringInput>;
  payment_schedule?: InputMaybe<TsWhereInput>;
  transaction_type?: InputMaybe<TsWhereInput>;
};

export type TsWhere69c699ae4c023cdd5081fd0b275d2314UnionInput = {
  capture_method?: InputMaybe<TsWhereInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere0c15571704f92e4deef74bf2861e3048UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhered0f94d051a53ade5163af84b3fd6b0f7UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere55b3d4514248bce7ac082bbc0da1833aUnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereac15fe59c1b71bd6db2d201a4acee09dUnionInput = {
  preferred_language?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere076b30d85cca1aae72305dffd8194343UnionInput = {
  expires_after_days?: InputMaybe<TsWhereIntegerInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere6181441ba9fb7eee556dd3a4a9d229e4UnionInput = {
  capture_method?: InputMaybe<TsWhereInput>;
  installments?: InputMaybe<TsWhereStripe_PaymentMethodOptionsCardInstallmentsInput>;
  mandate_options?: InputMaybe<TsWhereStripe_PaymentMethodOptionsCardMandateOptionsInput>;
  network?: InputMaybe<TsWhereInput>;
  request_three_d_secure?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodOptionsCardInstallmentsInput = {
  available_plans?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardInstallmentsPlanInput>;
  enabled?: InputMaybe<TsWhereBooleanInput>;
  plan?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardInstallmentsPlanInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardInstallmentsPlanInput = {
  count?: InputMaybe<TsWhereIntegerInput>;
  interval?: InputMaybe<TsWhereInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodOptionsCardMandateOptionsInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_type?: InputMaybe<TsWhereInput>;
  description?: InputMaybe<TsWhereStringInput>;
  end_date?: InputMaybe<TsWhereIntegerInput>;
  interval?: InputMaybe<TsWhereInput>;
  interval_count?: InputMaybe<TsWhereIntegerInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  start_date?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWherea245e0776494a0d51fe046b0453d38afUnionInput = {
  request_extended_authorization?: InputMaybe<TsWhereBooleanInput>;
  request_incremental_authorization_support?: InputMaybe<TsWhereBooleanInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere8b9cb37bcfc0b30034cf6ebd1e41fe69UnionInput = {
  bank_transfer?: InputMaybe<TsWhereStripe_PaymentMethodOptionsCustomerBalanceBankTransferInput>;
  funding_type?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodOptionsCustomerBalanceBankTransferInput = {
  type?: InputMaybe<TsWhereInput>;
};

export type TsWheref973d307d812f0dfb771bc8122e5c599UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereabae1b112405e8b3c0dbfa673a54aaadUnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere8cc56b75820487c13c502fada2896d16UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereeaab7727acdc782ba4b7fd55f1d34914UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWherebc8c021d852b37c55e33cd17b5bc5c8eUnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere0790e0b407fa40ec44faa0c0093547c0UnionInput = {
  capture_method?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere431e685e94c88a23966c5e39578fd407UnionInput = {
  capture_method?: InputMaybe<TsWhereInput>;
  preferred_locale?: InputMaybe<TsWhereStringInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere00ef7207d1f936d9dfffc7da2b87c7a0UnionInput = {
  confirmation_number?: InputMaybe<TsWhereStringInput>;
  expires_after_days?: InputMaybe<TsWhereIntegerInput>;
  expires_at?: InputMaybe<TsWhereIntegerInput>;
  product_description?: InputMaybe<TsWhereStringInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere3ec3443ea1c1a903147c0d61800da976UnionInput = {
  expires_after_days?: InputMaybe<TsWhereIntegerInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWherea35be11d8b3a6f85cf29c066bd2baeecUnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere3755b88328836d5c8b19acd047bf83f5UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere1ef47aea767cbab0a37f27b4392256afUnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere29eab390824f828a021e12d845868bf5UnionInput = {
  preferred_language?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWheree8df26123b430c2df83da95f1b7d7d58UnionInput = {
  setup_future_usage?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
};

export type TsWheref3a2f1202624d0cdb50285826cb85a9eUnionInput = {
  app_id?: InputMaybe<TsWhereStringInput>;
  client?: InputMaybe<TsWhereInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentIntentPaymentMethodTypesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_PaymentIntentProcessingInput = {
  card?: InputMaybe<TsWhereStripe_PaymentIntentCardProcessingInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentIntentCardProcessingInput = {
  customer_notification?: InputMaybe<TsWhereStripe_PaymentIntentProcessingCustomerNotificationInput>;
};

export type TsWhereStripe_PaymentIntentProcessingCustomerNotificationInput = {
  approval_requested?: InputMaybe<TsWhereBooleanInput>;
  completes_at?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_ReviewWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  billing_zip?: InputMaybe<TsWhereStringInput>;
  closed_reason?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  ip_address?: InputMaybe<TsWhereStringInput>;
  ip_address_location?: InputMaybe<TsWhereStripe_RadarReviewResourceLocationInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  open?: InputMaybe<TsWhereBooleanInput>;
  opened_reason?: InputMaybe<TsWhereInput>;
  reason?: InputMaybe<TsWhereStringInput>;
  session?: InputMaybe<TsWhereStripe_RadarReviewResourceSessionInput>;
};

export type TsWhereStripe_RadarReviewResourceLocationInput = {
  city?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  latitude?: InputMaybe<TsWhereNumberInput>;
  longitude?: InputMaybe<TsWhereNumberInput>;
  region?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_RadarReviewResourceSessionInput = {
  browser?: InputMaybe<TsWhereStringInput>;
  device?: InputMaybe<TsWhereStringInput>;
  platform?: InputMaybe<TsWhereStringInput>;
  version?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TransferDataInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  destination?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
};

export type TsWhereStripe_InvoiceitemInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  date?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  discountable?: InputMaybe<TsWhereBooleanInput>;
  discounts?: InputMaybe<TsWhereStripe_PaymentIntentDiscountsInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStripe_InvoiceWrappedStringUnionInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  period?: InputMaybe<TsWhereStripe_InvoiceLineItemPeriodInput>;
  price?: InputMaybe<TsWhereStripe_PriceInput>;
  proration?: InputMaybe<TsWhereBooleanInput>;
  quantity?: InputMaybe<TsWhereIntegerInput>;
  subscription?: InputMaybe<TsWhereStripe_SubscriptionWrappedStringUnionInput>;
  subscription_item?: InputMaybe<TsWhereStringInput>;
  tax_rates?: InputMaybe<TsWhereStripe_TaxRateInput>;
  test_clock?: InputMaybe<TsWhereStripe_TestHelpersTestClockWrappedStringUnionInput>;
  unit_amount?: InputMaybe<TsWhereIntegerInput>;
  unit_amount_decimal?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentDiscountsInput = {
  value?: InputMaybe<TsWhereStringInput>;
  checkout_session?: InputMaybe<TsWhereStringInput>;
  coupon?: InputMaybe<TsWhereStripe_CouponInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  end?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStringInput>;
  invoice_item?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  start?: InputMaybe<TsWhereIntegerInput>;
  subscription?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_InvoiceLineItemPeriodInput = {
  end?: InputMaybe<TsWhereIntegerInput>;
  start?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_PriceInput = {
  active?: InputMaybe<TsWhereBooleanInput>;
  billing_scheme?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  lookup_key?: InputMaybe<TsWhereStringInput>;
  nickname?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  product?: InputMaybe<TsWhereStripe_ProductInput>;
  recurring?: InputMaybe<TsWhereStripe_RecurringInput>;
  tax_behavior?: InputMaybe<TsWhereInput>;
  tiers?: InputMaybe<TsWhereStripe_PriceTierInput>;
  tiers_mode?: InputMaybe<TsWhereInput>;
  transform_quantity?: InputMaybe<TsWhereStripe_TransformQuantityInput>;
  type?: InputMaybe<TsWhereInput>;
  unit_amount?: InputMaybe<TsWhereIntegerInput>;
  unit_amount_decimal?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ProductInput = {
  active?: InputMaybe<TsWhereBooleanInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  images?: InputMaybe<TsWhereStripe_ProductImagesInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  package_dimensions?: InputMaybe<TsWhereStripe_PackageDimensionsInput>;
  shippable?: InputMaybe<TsWhereBooleanInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  tax_code?: InputMaybe<TsWhereStripe_TaxCodeWrappedStringUnionInput>;
  unit_label?: InputMaybe<TsWhereStringInput>;
  updated?: InputMaybe<TsWhereIntegerInput>;
  url?: InputMaybe<TsWhereStringInput>;
  prices?: InputMaybe<TsWhereStripe_PriceInput>;
  reviews?: InputMaybe<TsWhereReviewsIo_ListProductReviewsResponseInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
};

export type TsWhereStripe_PackageDimensionsInput = {
  height?: InputMaybe<TsWhereNumberInput>;
  length?: InputMaybe<TsWhereNumberInput>;
  weight?: InputMaybe<TsWhereNumberInput>;
  width?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereStripe_TaxCodeWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
};

export type TsWhereReviewsIo_ListProductReviewsResponseInput = {
  write_review_link?: InputMaybe<TsWhereStringInput>;
  word?: InputMaybe<TsWhereStringInput>;
  stats?: InputMaybe<TsWhereStripe_ProductStatsInput>;
  store?: InputMaybe<TsWhereStripe_ProductStoreInput>;
  reviews?: InputMaybe<TsWhereStripe_ProductReviewsInput>;
  products?: InputMaybe<TsWhereStripe_ProductProductsInput>;
};

export type TsWhereStripe_ProductStatsInput = {
  average?: InputMaybe<TsWhereNumberInput>;
  count?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_ProductStoreInput = {
  name?: InputMaybe<TsWhereStringInput>;
  logo?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ProductReviewsInput = {
  total?: InputMaybe<TsWhereIntegerInput>;
  per_page?: InputMaybe<TsWhereIntegerInput>;
  current_page?: InputMaybe<TsWhereIntegerInput>;
  last_page?: InputMaybe<TsWhereIntegerInput>;
  from?: InputMaybe<TsWhereIntegerInput>;
  to?: InputMaybe<TsWhereIntegerInput>;
  data?: InputMaybe<TsWhereReviewsIo_ProductReviewInput>;
};

export type TsWhereReviewsIo_ProductReviewInput = {
  product_review_id?: InputMaybe<TsWhereIntegerInput>;
  product_make?: InputMaybe<TsWhereStringInput>;
  order_id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  sku?: InputMaybe<TsWhereStringInput>;
  review?: InputMaybe<TsWhereStringInput>;
  title?: InputMaybe<TsWhereStringInput>;
  rating?: InputMaybe<TsWhereIntegerInput>;
  date_created?: InputMaybe<TsWhereStringInput>;
  votes?: InputMaybe<TsWhereStringInput>;
  flags?: InputMaybe<TsWhereStringInput>;
  timeago?: InputMaybe<TsWhereStringInput>;
  date_formatted?: InputMaybe<TsWhereStringInput>;
  product?: InputMaybe<TsWhereReviewsIo_ProductInput>;
  reviewer?: InputMaybe<TsWhereReviewsIo_ReviewerInput>;
  images?: InputMaybe<TsWhereStripe_ProductImagesInput>;
  tags?: InputMaybe<TsWhereStripe_ProductTagsInput>;
  author?: InputMaybe<TsWhereStripe_ProductAuthorInput>;
};

export type TsWhereReviewsIo_ProductInput = {
  sku?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  image_url?: InputMaybe<TsWhereStringInput>;
  link?: InputMaybe<TsWhereStringInput>;
  mpn?: InputMaybe<TsWhereStringInput>;
  gtin?: InputMaybe<TsWhereStringInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  category?: InputMaybe<TsWhereStringInput>;
  custom?: InputMaybe<TsWhereStringInput>;
  pageUrl?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereReviewsIo_ReviewerInput = {
  user_id?: InputMaybe<TsWhereIntegerInput>;
  first_name?: InputMaybe<TsWhereStringInput>;
  last_name?: InputMaybe<TsWhereStringInput>;
  verified_buyer?: InputMaybe<TsWhereInput>;
  address?: InputMaybe<TsWhereStringInput>;
  profile_picture?: InputMaybe<TsWhereStringInput>;
  gravatar?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name_formatted?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ProductTagsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_ProductAuthorInput = {
  email?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ProductProductsInput = {
  sku?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_RecurringInput = {
  aggregate_usage?: InputMaybe<TsWhereInput>;
  interval?: InputMaybe<TsWhereInput>;
  interval_count?: InputMaybe<TsWhereIntegerInput>;
  usage_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PriceTierInput = {
  flat_amount?: InputMaybe<TsWhereIntegerInput>;
  flat_amount_decimal?: InputMaybe<TsWhereStringInput>;
  unit_amount?: InputMaybe<TsWhereIntegerInput>;
  unit_amount_decimal?: InputMaybe<TsWhereStringInput>;
  up_to?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_TransformQuantityInput = {
  divide_by?: InputMaybe<TsWhereIntegerInput>;
  round?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SubscriptionWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  application_fee_percent?: InputMaybe<TsWhereNumberInput>;
  automatic_tax?: InputMaybe<TsWhereStripe_SubscriptionAutomaticTaxInput>;
  billing_cycle_anchor?: InputMaybe<TsWhereIntegerInput>;
  billing_thresholds?: InputMaybe<TsWhereStripe_SubscriptionBillingThresholdsInput>;
  cancel_at?: InputMaybe<TsWhereIntegerInput>;
  cancel_at_period_end?: InputMaybe<TsWhereBooleanInput>;
  canceled_at?: InputMaybe<TsWhereIntegerInput>;
  collection_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  current_period_end?: InputMaybe<TsWhereIntegerInput>;
  current_period_start?: InputMaybe<TsWhereIntegerInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  days_until_due?: InputMaybe<TsWhereIntegerInput>;
  default_tax_rates?: InputMaybe<TsWhereStripe_TaxRateInput>;
  discount?: InputMaybe<TsWhereStripe_DiscountInput>;
  ended_at?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  items?: InputMaybe<TsWhereStripe_SubscriptionItemsInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_pending_invoice_item_invoice?: InputMaybe<TsWhereIntegerInput>;
  object?: InputMaybe<TsWhereInput>;
  pause_collection?: InputMaybe<TsWhereStripe_SubscriptionsResourcePauseCollectionInput>;
  payment_settings?: InputMaybe<TsWhereStripe_SubscriptionsResourcePaymentSettingsInput>;
  pending_invoice_item_interval?: InputMaybe<TsWhereStripe_SubscriptionPendingInvoiceItemIntervalInput>;
  pending_update?: InputMaybe<TsWhereStripe_SubscriptionsResourcePendingUpdateInput>;
  start_date?: InputMaybe<TsWhereIntegerInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_SubscriptionTransferDataInput>;
  trial_end?: InputMaybe<TsWhereIntegerInput>;
  trial_start?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_SubscriptionAutomaticTaxInput = {
  enabled?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_SubscriptionBillingThresholdsInput = {
  amount_gte?: InputMaybe<TsWhereIntegerInput>;
  reset_billing_cycle_anchor?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_SubscriptionItemsInput = {
  data?: InputMaybe<TsWhereStripe_SubscriptionItemInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SubscriptionItemInput = {
  billing_thresholds?: InputMaybe<TsWhereStripe_SubscriptionItemBillingThresholdsInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  price?: InputMaybe<TsWhereStripe_PriceInput>;
  quantity?: InputMaybe<TsWhereIntegerInput>;
  subscription?: InputMaybe<TsWhereStringInput>;
  tax_rates?: InputMaybe<TsWhereStripe_TaxRateInput>;
};

export type TsWhereStripe_SubscriptionItemBillingThresholdsInput = {
  usage_gte?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_SubscriptionsResourcePauseCollectionInput = {
  behavior?: InputMaybe<TsWhereInput>;
  resumes_at?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_SubscriptionsResourcePaymentSettingsInput = {
  payment_method_options?: InputMaybe<TsWhereStripe_SubscriptionsResourcePaymentMethodOptionsInput>;
};

export type TsWhereStripe_SubscriptionsResourcePaymentMethodOptionsInput = {
  acss_debit?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsAcssDebitInput>;
  bancontact?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsBancontactInput>;
  card?: InputMaybe<TsWhereStripe_SubscriptionPaymentMethodOptionsCardInput>;
  customer_balance?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsCustomerBalanceInput>;
  us_bank_account?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsUsBankAccountInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsAcssDebitInput = {
  mandate_options?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsAcssDebitMandateOptionsInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsAcssDebitMandateOptionsInput = {
  transaction_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsBancontactInput = {
  preferred_language?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SubscriptionPaymentMethodOptionsCardInput = {
  mandate_options?: InputMaybe<TsWhereStripe_InvoiceMandateOptionsCardInput>;
  request_three_d_secure?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_InvoiceMandateOptionsCardInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_type?: InputMaybe<TsWhereInput>;
  description?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsCustomerBalanceInput = {
  bank_transfer?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsCustomerBalanceBankTransferInput>;
  funding_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsCustomerBalanceBankTransferInput = {
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsUsBankAccountInput = {
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SubscriptionPendingInvoiceItemIntervalInput = {
  interval?: InputMaybe<TsWhereInput>;
  interval_count?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_SubscriptionsResourcePendingUpdateInput = {
  billing_cycle_anchor?: InputMaybe<TsWhereIntegerInput>;
  expires_at?: InputMaybe<TsWhereIntegerInput>;
  subscription_items?: InputMaybe<TsWhereStripe_SubscriptionItemInput>;
  trial_end?: InputMaybe<TsWhereIntegerInput>;
  trial_from_plan?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_SubscriptionTransferDataInput = {
  amount_percent?: InputMaybe<TsWhereNumberInput>;
};

export type TsWhereStripe_TestHelpersTestClockWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  deletes_after?: InputMaybe<TsWhereIntegerInput>;
  frozen_time?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  status?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_ItemInput = {
  amount_subtotal?: InputMaybe<TsWhereIntegerInput>;
  amount_total?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  discounts?: InputMaybe<TsWhereStripe_LineItemsDiscountAmountInput>;
  id?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  price?: InputMaybe<TsWhereStripe_PriceInput>;
  quantity?: InputMaybe<TsWhereIntegerInput>;
  taxes?: InputMaybe<TsWhereStripe_LineItemsTaxAmountInput>;
};

export type TsWhereStripe_LineItemsDiscountAmountInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  discount?: InputMaybe<TsWhereStripe_DiscountInput>;
};

export type TsWhereStripe_LineItemsTaxAmountInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  rate?: InputMaybe<TsWhereStripe_TaxRateInput>;
};

export type TsWhereShipEngine_LabelInput = {
  label_id?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
  shipment_id?: InputMaybe<TsWhereStringInput>;
  ship_date?: InputMaybe<TsWhereStringInput>;
  created_at?: InputMaybe<TsWhereStringInput>;
  tracking_number?: InputMaybe<TsWhereStringInput>;
  batch_id?: InputMaybe<TsWhereStringInput>;
  carrier_id?: InputMaybe<TsWhereStringInput>;
  charge_event?: InputMaybe<TsWhereStringInput>;
  service_code?: InputMaybe<TsWhereStringInput>;
  package_code?: InputMaybe<TsWhereStringInput>;
  voided_at?: InputMaybe<TsWhereStringInput>;
  label_format?: InputMaybe<TsWhereStringInput>;
  display_scheme?: InputMaybe<TsWhereStringInput>;
  label_layout?: InputMaybe<TsWhereStringInput>;
  label_image_id?: InputMaybe<TsWhereStringInput>;
  carrier_code?: InputMaybe<TsWhereStringInput>;
  tracking_status?: InputMaybe<TsWhereStringInput>;
  label_download?: InputMaybe<TsWhereShipEngine_LabelDownloadInput>;
  trackable?: InputMaybe<TsWhereBooleanInput>;
  packages?: InputMaybe<TsWhereShipEngine_PackageInput>;
};

export type TsWhereShipEngine_LabelDownloadInput = {
  href?: InputMaybe<TsWhereStringInput>;
  pdf?: InputMaybe<TsWhereStringInput>;
  png?: InputMaybe<TsWhereStringInput>;
  zpl?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShipEngine_PackageInput = {
  package_id?: InputMaybe<TsWhereIntegerInput>;
  description?: InputMaybe<TsWhereStringInput>;
  package_code?: InputMaybe<TsWhereStringInput>;
  tracking_number?: InputMaybe<TsWhereStringInput>;
  label_download?: InputMaybe<TsWhereShipEngine_LabelDownloadInput>;
  weight?: InputMaybe<TsWhereShipEngine_WeightInput>;
  dimensions?: InputMaybe<TsWhereShipEngine_DimensionsInput>;
};

export type TsWhereShipEngine_WeightInput = {
  value?: InputMaybe<TsWhereNumberInput>;
  unit?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereShipEngine_DimensionsInput = {
  length?: InputMaybe<TsWhereNumberInput>;
  width?: InputMaybe<TsWhereNumberInput>;
  height?: InputMaybe<TsWhereNumberInput>;
  unit?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodInput = {
  acss_debit?: InputMaybe<TsWhereStripe_PaymentMethodAcssDebitInput>;
  au_becs_debit?: InputMaybe<TsWhereStripe_PaymentMethodAuBecsDebitInput>;
  bacs_debit?: InputMaybe<TsWhereStripe_PaymentMethodBacsDebitInput>;
  billing_details?: InputMaybe<TsWhereStripe_BillingDetailsInput>;
  boleto?: InputMaybe<TsWhereStripe_PaymentMethodBoletoInput>;
  card?: InputMaybe<TsWhereStripe_PaymentMethodCardInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  customer?: InputMaybe<TsWhereStripe_CustomerWrappedStringUnionInput>;
  eps?: InputMaybe<TsWhereStripe_PaymentMethodEpsInput>;
  fpx?: InputMaybe<TsWhereStripe_PaymentMethodFpxInput>;
  id?: InputMaybe<TsWhereStringInput>;
  ideal?: InputMaybe<TsWhereStripe_PaymentMethodIdealInput>;
  klarna?: InputMaybe<TsWhereStripe_PaymentMethodKlarnaInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  p24?: InputMaybe<TsWhereStripe_PaymentMethodP24Input>;
  sepa_debit?: InputMaybe<TsWhereStripe_PaymentMethodSepaDebitInput>;
  sofort?: InputMaybe<TsWhereStripe_PaymentMethodSofortInput>;
  type?: InputMaybe<TsWhereInput>;
  us_bank_account?: InputMaybe<TsWhereStripe_PaymentMethodUsBankAccountInput>;
};

export type TsWhereStripe_CustomerWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  address?: InputMaybe<TsWhereStripe_AddressInput>;
  balance?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  delinquent?: InputMaybe<TsWhereBooleanInput>;
  description?: InputMaybe<TsWhereStringInput>;
  discount?: InputMaybe<TsWhereStripe_DiscountInput>;
  email?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice_prefix?: InputMaybe<TsWhereStringInput>;
  invoice_settings?: InputMaybe<TsWhereStripe_InvoiceSettingCustomerSettingInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  name?: InputMaybe<TsWhereStringInput>;
  next_invoice_sequence?: InputMaybe<TsWhereIntegerInput>;
  object?: InputMaybe<TsWhereInput>;
  phone?: InputMaybe<TsWhereStringInput>;
  preferred_locales?: InputMaybe<TsWhereStripe_CustomerPreferredLocalesInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  sources?: InputMaybe<TsWhereStripe_CustomerSourcesInput>;
  subscriptions?: InputMaybe<TsWhereStripe_CustomerSubscriptionsInput>;
  tax?: InputMaybe<TsWhereStripe_CustomerTaxInput>;
  tax_exempt?: InputMaybe<TsWhereInput>;
  tax_ids?: InputMaybe<TsWhereStripe_CustomerTaxIdsInput>;
};

export type TsWhereStripe_InvoiceSettingCustomerSettingInput = {
  custom_fields?: InputMaybe<TsWhereStripe_InvoiceSettingCustomFieldInput>;
  footer?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_CustomerPreferredLocalesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_CustomerSourcesInput = {
  data?: InputMaybe<TsWhereStripe_CustomerDataInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_CustomerDataInput = {
  created?: InputMaybe<TsWhereIntegerInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  payment_amount?: InputMaybe<TsWhereIntegerInput>;
  payment_currency?: InputMaybe<TsWhereStringInput>;
  reusable?: InputMaybe<TsWhereBooleanInput>;
  used?: InputMaybe<TsWhereBooleanInput>;
  username?: InputMaybe<TsWhereStringInput>;
  account_holder_name?: InputMaybe<TsWhereStringInput>;
  account_holder_type?: InputMaybe<TsWhereStringInput>;
  account_type?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  default_for_currency?: InputMaybe<TsWhereBooleanInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
  active?: InputMaybe<TsWhereBooleanInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_received?: InputMaybe<TsWhereIntegerInput>;
  bitcoin_amount?: InputMaybe<TsWhereIntegerInput>;
  bitcoin_amount_received?: InputMaybe<TsWhereIntegerInput>;
  bitcoin_uri?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  filled?: InputMaybe<TsWhereBooleanInput>;
  inbound_address?: InputMaybe<TsWhereStringInput>;
  payment?: InputMaybe<TsWhereStringInput>;
  refund_address?: InputMaybe<TsWhereStringInput>;
  transactions?: InputMaybe<TsWhereStripe_BitcoinReceiverTransactionsInput>;
  uncaptured_funds?: InputMaybe<TsWhereBooleanInput>;
  used_for_payment?: InputMaybe<TsWhereBooleanInput>;
  address_city?: InputMaybe<TsWhereStringInput>;
  address_country?: InputMaybe<TsWhereStringInput>;
  address_line1?: InputMaybe<TsWhereStringInput>;
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_line2?: InputMaybe<TsWhereStringInput>;
  address_state?: InputMaybe<TsWhereStringInput>;
  address_zip?: InputMaybe<TsWhereStringInput>;
  address_zip_check?: InputMaybe<TsWhereStringInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  tokenization_method?: InputMaybe<TsWhereStringInput>;
  ach_credit_transfer?: InputMaybe<TsWhereStripe_SourceTypeAchCreditTransferInput>;
  ach_debit?: InputMaybe<TsWhereStripe_SourceTypeAchDebitInput>;
  acss_debit?: InputMaybe<TsWhereStripe_SourceTypeAcssDebitInput>;
  alipay?: InputMaybe<TsWhereStripe_SourceTypeAlipayInput>;
  au_becs_debit?: InputMaybe<TsWhereStripe_SourceTypeAuBecsDebitInput>;
  bancontact?: InputMaybe<TsWhereStripe_SourceTypeBancontactInput>;
  card?: InputMaybe<TsWhereStripe_SourceTypeCardInput>;
  card_present?: InputMaybe<TsWhereStripe_SourceTypeCardPresentInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  code_verification?: InputMaybe<TsWhereStripe_SourceCodeVerificationFlowInput>;
  eps?: InputMaybe<TsWhereStripe_SourceTypeEpsInput>;
  flow?: InputMaybe<TsWhereStringInput>;
  giropay?: InputMaybe<TsWhereStripe_SourceTypeGiropayInput>;
  ideal?: InputMaybe<TsWhereStripe_SourceTypeIdealInput>;
  klarna?: InputMaybe<TsWhereStripe_SourceTypeKlarnaInput>;
  multibanco?: InputMaybe<TsWhereStripe_SourceTypeMultibancoInput>;
  owner?: InputMaybe<TsWhereStripe_SourceOwnerInput>;
  p24?: InputMaybe<TsWhereStripe_SourceTypeP24Input>;
  receiver?: InputMaybe<TsWhereStripe_SourceReceiverFlowInput>;
  redirect?: InputMaybe<TsWhereStripe_SourceRedirectFlowInput>;
  sepa_debit?: InputMaybe<TsWhereStripe_SourceTypeSepaDebitInput>;
  sofort?: InputMaybe<TsWhereStripe_SourceTypeSofortInput>;
  source_order?: InputMaybe<TsWhereStripe_SourceOrderInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  three_d_secure?: InputMaybe<TsWhereStripe_SourceTypeThreeDSecureInput>;
  type?: InputMaybe<TsWhereInput>;
  usage?: InputMaybe<TsWhereStringInput>;
  wechat?: InputMaybe<TsWhereStripe_SourceTypeWechatInput>;
};

export type TsWhereStripe_BitcoinReceiverTransactionsInput = {
  data?: InputMaybe<TsWhereStripe_BitcoinTransactionInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_BitcoinTransactionInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  bitcoin_amount?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  receiver?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeAchCreditTransferInput = {
  account_number?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_name?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_type?: InputMaybe<TsWhereStringInput>;
  refund_routing_number?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
  swift_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeAchDebitInput = {
  bank_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeAcssDebitInput = {
  bank_address_city?: InputMaybe<TsWhereStringInput>;
  bank_address_line_1?: InputMaybe<TsWhereStringInput>;
  bank_address_line_2?: InputMaybe<TsWhereStringInput>;
  bank_address_postal_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  category?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeAlipayInput = {
  data_string?: InputMaybe<TsWhereStringInput>;
  native_url?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeAuBecsDebitInput = {
  bsb_number?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeBancontactInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  preferred_language?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeCardInput = {
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_zip_check?: InputMaybe<TsWhereStringInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  three_d_secure?: InputMaybe<TsWhereStringInput>;
  tokenization_method?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeCardPresentInput = {
  application_cryptogram?: InputMaybe<TsWhereStringInput>;
  application_preferred_name?: InputMaybe<TsWhereStringInput>;
  authorization_code?: InputMaybe<TsWhereStringInput>;
  authorization_response_code?: InputMaybe<TsWhereStringInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  cvm_type?: InputMaybe<TsWhereStringInput>;
  data_type?: InputMaybe<TsWhereStringInput>;
  dedicated_file_name?: InputMaybe<TsWhereStringInput>;
  emv_auth_data?: InputMaybe<TsWhereStringInput>;
  evidence_customer_signature?: InputMaybe<TsWhereStringInput>;
  evidence_transaction_certificate?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  pos_device_id?: InputMaybe<TsWhereStringInput>;
  pos_entry_mode?: InputMaybe<TsWhereStringInput>;
  read_method?: InputMaybe<TsWhereStringInput>;
  reader?: InputMaybe<TsWhereStringInput>;
  terminal_verification_results?: InputMaybe<TsWhereStringInput>;
  transaction_status_information?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceCodeVerificationFlowInput = {
  attempts_remaining?: InputMaybe<TsWhereIntegerInput>;
  status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeEpsInput = {
  reference?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeGiropayInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeIdealInput = {
  bank?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeKlarnaInput = {
  background_image_url?: InputMaybe<TsWhereStringInput>;
  client_token?: InputMaybe<TsWhereStringInput>;
  first_name?: InputMaybe<TsWhereStringInput>;
  last_name?: InputMaybe<TsWhereStringInput>;
  locale?: InputMaybe<TsWhereStringInput>;
  logo_url?: InputMaybe<TsWhereStringInput>;
  page_title?: InputMaybe<TsWhereStringInput>;
  pay_later_asset_urls_descriptive?: InputMaybe<TsWhereStringInput>;
  pay_later_asset_urls_standard?: InputMaybe<TsWhereStringInput>;
  pay_later_name?: InputMaybe<TsWhereStringInput>;
  pay_later_redirect_url?: InputMaybe<TsWhereStringInput>;
  pay_now_asset_urls_descriptive?: InputMaybe<TsWhereStringInput>;
  pay_now_asset_urls_standard?: InputMaybe<TsWhereStringInput>;
  pay_now_name?: InputMaybe<TsWhereStringInput>;
  pay_now_redirect_url?: InputMaybe<TsWhereStringInput>;
  pay_over_time_asset_urls_descriptive?: InputMaybe<TsWhereStringInput>;
  pay_over_time_asset_urls_standard?: InputMaybe<TsWhereStringInput>;
  pay_over_time_name?: InputMaybe<TsWhereStringInput>;
  pay_over_time_redirect_url?: InputMaybe<TsWhereStringInput>;
  payment_method_categories?: InputMaybe<TsWhereStringInput>;
  purchase_country?: InputMaybe<TsWhereStringInput>;
  purchase_type?: InputMaybe<TsWhereStringInput>;
  redirect_url?: InputMaybe<TsWhereStringInput>;
  shipping_delay?: InputMaybe<TsWhereIntegerInput>;
  shipping_first_name?: InputMaybe<TsWhereStringInput>;
  shipping_last_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeMultibancoInput = {
  entity?: InputMaybe<TsWhereStringInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_address_city?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_address_country?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_address_line1?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_address_line2?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_address_postal_code?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_address_state?: InputMaybe<TsWhereStringInput>;
  refund_account_holder_name?: InputMaybe<TsWhereStringInput>;
  refund_iban?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceOwnerInput = {
  address?: InputMaybe<TsWhereStripe_AddressInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  phone?: InputMaybe<TsWhereStringInput>;
  verified_address?: InputMaybe<TsWhereStripe_AddressInput>;
  verified_email?: InputMaybe<TsWhereStringInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
  verified_phone?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeP24Input = {
  reference?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceReceiverFlowInput = {
  address?: InputMaybe<TsWhereStringInput>;
  amount_charged?: InputMaybe<TsWhereIntegerInput>;
  amount_received?: InputMaybe<TsWhereIntegerInput>;
  amount_returned?: InputMaybe<TsWhereIntegerInput>;
  refund_attributes_method?: InputMaybe<TsWhereStringInput>;
  refund_attributes_status?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceRedirectFlowInput = {
  failure_reason?: InputMaybe<TsWhereStringInput>;
  return_url?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeSepaDebitInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  branch_code?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  mandate_reference?: InputMaybe<TsWhereStringInput>;
  mandate_url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeSofortInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  preferred_language?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceOrderInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  items?: InputMaybe<TsWhereStripe_SourceOrderItemInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
};

export type TsWhereStripe_SourceOrderItemInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  parent?: InputMaybe<TsWhereStringInput>;
  quantity?: InputMaybe<TsWhereIntegerInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeThreeDSecureInput = {
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_zip_check?: InputMaybe<TsWhereStringInput>;
  authenticated?: InputMaybe<TsWhereBooleanInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  card?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  three_d_secure?: InputMaybe<TsWhereStringInput>;
  tokenization_method?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SourceTypeWechatInput = {
  prepay_id?: InputMaybe<TsWhereStringInput>;
  qr_code_url?: InputMaybe<TsWhereStringInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_CustomerSubscriptionsInput = {
  data?: InputMaybe<TsWhereStripe_SubscriptionInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SubscriptionInput = {
  application_fee_percent?: InputMaybe<TsWhereNumberInput>;
  automatic_tax?: InputMaybe<TsWhereStripe_SubscriptionAutomaticTaxInput>;
  billing_cycle_anchor?: InputMaybe<TsWhereIntegerInput>;
  billing_thresholds?: InputMaybe<TsWhereStripe_SubscriptionBillingThresholdsInput>;
  cancel_at?: InputMaybe<TsWhereIntegerInput>;
  cancel_at_period_end?: InputMaybe<TsWhereBooleanInput>;
  canceled_at?: InputMaybe<TsWhereIntegerInput>;
  collection_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  current_period_end?: InputMaybe<TsWhereIntegerInput>;
  current_period_start?: InputMaybe<TsWhereIntegerInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  days_until_due?: InputMaybe<TsWhereIntegerInput>;
  default_tax_rates?: InputMaybe<TsWhereStripe_TaxRateInput>;
  discount?: InputMaybe<TsWhereStripe_DiscountInput>;
  ended_at?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  items?: InputMaybe<TsWhereStripe_CustomerItemsInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_pending_invoice_item_invoice?: InputMaybe<TsWhereIntegerInput>;
  object?: InputMaybe<TsWhereInput>;
  pause_collection?: InputMaybe<TsWhereStripe_SubscriptionsResourcePauseCollectionInput>;
  payment_settings?: InputMaybe<TsWhereStripe_SubscriptionsResourcePaymentSettingsInput>;
  pending_invoice_item_interval?: InputMaybe<TsWhereStripe_SubscriptionPendingInvoiceItemIntervalInput>;
  pending_update?: InputMaybe<TsWhereStripe_SubscriptionsResourcePendingUpdateInput>;
  start_date?: InputMaybe<TsWhereIntegerInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_SubscriptionTransferDataInput>;
  trial_end?: InputMaybe<TsWhereIntegerInput>;
  trial_start?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_CustomerItemsInput = {
  data?: InputMaybe<TsWhereStripe_SubscriptionItemInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_CustomerTaxInput = {
  automatic_tax?: InputMaybe<TsWhereInput>;
  ip_address?: InputMaybe<TsWhereStringInput>;
  location?: InputMaybe<TsWhereStripe_CustomerTaxLocationInput>;
};

export type TsWhereStripe_CustomerTaxLocationInput = {
  country?: InputMaybe<TsWhereStringInput>;
  source?: InputMaybe<TsWhereInput>;
  state?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_CustomerTaxIdsInput = {
  data?: InputMaybe<TsWhereStripe_TaxIdInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TaxIdInput = {
  country?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  type?: InputMaybe<TsWhereInput>;
  value?: InputMaybe<TsWhereStringInput>;
  verification?: InputMaybe<TsWhereStripe_TaxIdVerificationInput>;
};

export type TsWhereStripe_SetupIntentInput = {
  application?: InputMaybe<TsWhereStripe_ApplicationWrappedStringUnionInput>;
  cancellation_reason?: InputMaybe<TsWhereInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  last_setup_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  latest_attempt?: InputMaybe<TsWhereStripe_SetupAttemptWrappedStringUnionInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  mandate?: InputMaybe<TsWhereStripe_MandateWrappedStringUnionInput>;
  next_action?: InputMaybe<TsWhereStripe_SetupIntentNextActionInput>;
  object?: InputMaybe<TsWhereInput>;
  on_behalf_of?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
  payment_method?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  payment_method_options?: InputMaybe<TsWhereStripe_SetupIntentPaymentMethodOptionsInput>;
  payment_method_types?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodTypesInput>;
  single_use_mandate?: InputMaybe<TsWhereStripe_MandateWrappedStringUnionInput>;
  status?: InputMaybe<TsWhereInput>;
  usage?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupAttemptWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  payment_method_details?: InputMaybe<TsWhereStripe_SetupAttemptPaymentMethodDetailsInput>;
  setup_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  status?: InputMaybe<TsWhereStringInput>;
  usage?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupAttemptPaymentMethodDetailsInput = {
  bancontact?: InputMaybe<TsWhereStripe_SetupAttemptPaymentMethodDetailsBancontactInput>;
  card?: InputMaybe<TsWhereStripe_SetupAttemptPaymentMethodDetailsCardInput>;
  ideal?: InputMaybe<TsWhereStripe_SetupAttemptPaymentMethodDetailsIdealInput>;
  sofort?: InputMaybe<TsWhereStripe_SetupAttemptPaymentMethodDetailsSofortInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupAttemptPaymentMethodDetailsBancontactInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  preferred_language?: InputMaybe<TsWhereInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupAttemptPaymentMethodDetailsCardInput = {
  three_d_secure?: InputMaybe<TsWhereStripe_ThreeDSecureDetailsInput>;
};

export type TsWhereStripe_ThreeDSecureDetailsInput = {
  authentication_flow?: InputMaybe<TsWhereInput>;
  result?: InputMaybe<TsWhereInput>;
  result_reason?: InputMaybe<TsWhereInput>;
  version?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SetupAttemptPaymentMethodDetailsIdealInput = {
  bank?: InputMaybe<TsWhereInput>;
  bic?: InputMaybe<TsWhereInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupAttemptPaymentMethodDetailsSofortInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  preferred_language?: InputMaybe<TsWhereInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_MandateWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  customer_acceptance?: InputMaybe<TsWhereStripe_CustomerAcceptanceInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  payment_method_details?: InputMaybe<TsWhereStripe_MandatePaymentMethodDetailsInput>;
  single_use?: InputMaybe<TsWhereStripe_MandateSingleUseInput>;
  status?: InputMaybe<TsWhereInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_CustomerAcceptanceInput = {
  accepted_at?: InputMaybe<TsWhereIntegerInput>;
  online?: InputMaybe<TsWhereStripe_OnlineAcceptanceInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_OnlineAcceptanceInput = {
  ip_address?: InputMaybe<TsWhereStringInput>;
  user_agent?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_MandatePaymentMethodDetailsInput = {
  acss_debit?: InputMaybe<TsWhereStripe_MandateAcssDebitInput>;
  au_becs_debit?: InputMaybe<TsWhereStripe_MandateAuBecsDebitInput>;
  bacs_debit?: InputMaybe<TsWhereStripe_MandateBacsDebitInput>;
  sepa_debit?: InputMaybe<TsWhereStripe_MandateSepaDebitInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_MandateAcssDebitInput = {
  interval_description?: InputMaybe<TsWhereStringInput>;
  payment_schedule?: InputMaybe<TsWhereInput>;
  transaction_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_MandateAuBecsDebitInput = {
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_MandateBacsDebitInput = {
  network_status?: InputMaybe<TsWhereInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_MandateSepaDebitInput = {
  reference?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_MandateSingleUseInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupIntentNextActionInput = {
  redirect_to_url?: InputMaybe<TsWhereStripe_SetupIntentNextActionRedirectToUrlInput>;
  type?: InputMaybe<TsWhereStringInput>;
  verify_with_microdeposits?: InputMaybe<TsWhereStripe_SetupIntentNextActionVerifyWithMicrodepositsInput>;
};

export type TsWhereStripe_SetupIntentNextActionRedirectToUrlInput = {
  return_url?: InputMaybe<TsWhereStringInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_SetupIntentNextActionVerifyWithMicrodepositsInput = {
  arrival_date?: InputMaybe<TsWhereIntegerInput>;
  hosted_verification_url?: InputMaybe<TsWhereStringInput>;
  microdeposit_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SetupIntentPaymentMethodOptionsInput = {
  acss_debit?: InputMaybe<TsWhere6c955fa05d8df9184cc18d8841c3705dUnionInput>;
  card?: InputMaybe<TsWhereStripe_SetupIntentPaymentMethodOptionsCardInput>;
  sepa_debit?: InputMaybe<TsWhere256af04705b008a07ca5c137b490ba88UnionInput>;
  us_bank_account?: InputMaybe<TsWhere5e84458a02fb07e8c3d5d9b0bb3e5d99UnionInput>;
};

export type TsWhere6c955fa05d8df9184cc18d8841c3705dUnionInput = {
  currency?: InputMaybe<TsWhereInput>;
  mandate_options?: InputMaybe<TsWhereStripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitInput>;
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitInput = {
  custom_mandate_url?: InputMaybe<TsWhereStringInput>;
  interval_description?: InputMaybe<TsWhereStringInput>;
  payment_schedule?: InputMaybe<TsWhereInput>;
  transaction_type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SetupIntentPaymentMethodOptionsCardInput = {
  mandate_options?: InputMaybe<TsWhereStripe_SetupIntentPaymentMethodOptionsCardMandateOptionsInput>;
  request_three_d_secure?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_SetupIntentPaymentMethodOptionsCardMandateOptionsInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_type?: InputMaybe<TsWhereInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  end_date?: InputMaybe<TsWhereIntegerInput>;
  interval?: InputMaybe<TsWhereInput>;
  interval_count?: InputMaybe<TsWhereIntegerInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  start_date?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhere256af04705b008a07ca5c137b490ba88UnionInput = {
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhere5e84458a02fb07e8c3d5d9b0bb3e5d99UnionInput = {
  verification_method?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_BankAccountStripe_CardStripe_SourceUnionInput = {
  account_holder_name?: InputMaybe<TsWhereStringInput>;
  account_holder_type?: InputMaybe<TsWhereStringInput>;
  account_type?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  default_for_currency?: InputMaybe<TsWhereBooleanInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereStringInput>;
  address_city?: InputMaybe<TsWhereStringInput>;
  address_country?: InputMaybe<TsWhereStringInput>;
  address_line1?: InputMaybe<TsWhereStringInput>;
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_line2?: InputMaybe<TsWhereStringInput>;
  address_state?: InputMaybe<TsWhereStringInput>;
  address_zip?: InputMaybe<TsWhereStringInput>;
  address_zip_check?: InputMaybe<TsWhereStringInput>;
  brand?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  tokenization_method?: InputMaybe<TsWhereStringInput>;
  ach_credit_transfer?: InputMaybe<TsWhereStripe_SourceTypeAchCreditTransferInput>;
  ach_debit?: InputMaybe<TsWhereStripe_SourceTypeAchDebitInput>;
  acss_debit?: InputMaybe<TsWhereStripe_SourceTypeAcssDebitInput>;
  alipay?: InputMaybe<TsWhereStripe_SourceTypeAlipayInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  au_becs_debit?: InputMaybe<TsWhereStripe_SourceTypeAuBecsDebitInput>;
  bancontact?: InputMaybe<TsWhereStripe_SourceTypeBancontactInput>;
  card?: InputMaybe<TsWhereStripe_SourceTypeCardInput>;
  card_present?: InputMaybe<TsWhereStripe_SourceTypeCardPresentInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  code_verification?: InputMaybe<TsWhereStripe_SourceCodeVerificationFlowInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  eps?: InputMaybe<TsWhereStripe_SourceTypeEpsInput>;
  flow?: InputMaybe<TsWhereStringInput>;
  giropay?: InputMaybe<TsWhereStripe_SourceTypeGiropayInput>;
  ideal?: InputMaybe<TsWhereStripe_SourceTypeIdealInput>;
  klarna?: InputMaybe<TsWhereStripe_SourceTypeKlarnaInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  multibanco?: InputMaybe<TsWhereStripe_SourceTypeMultibancoInput>;
  owner?: InputMaybe<TsWhereStripe_SourceOwnerInput>;
  p24?: InputMaybe<TsWhereStripe_SourceTypeP24Input>;
  receiver?: InputMaybe<TsWhereStripe_SourceReceiverFlowInput>;
  redirect?: InputMaybe<TsWhereStripe_SourceRedirectFlowInput>;
  sepa_debit?: InputMaybe<TsWhereStripe_SourceTypeSepaDebitInput>;
  sofort?: InputMaybe<TsWhereStripe_SourceTypeSofortInput>;
  source_order?: InputMaybe<TsWhereStripe_SourceOrderInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  three_d_secure?: InputMaybe<TsWhereStripe_SourceTypeThreeDSecureInput>;
  type?: InputMaybe<TsWhereInput>;
  usage?: InputMaybe<TsWhereStringInput>;
  wechat?: InputMaybe<TsWhereStripe_SourceTypeWechatInput>;
};

export type TsWhereStripe_InvoiceLinesInput = {
  data?: InputMaybe<TsWhereStripe_LineItemInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_LineItemInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  discount_amounts?: InputMaybe<TsWhereStripe_DiscountsResourceDiscountAmountInput>;
  discountable?: InputMaybe<TsWhereBooleanInput>;
  discounts?: InputMaybe<TsWhereStripe_InvoiceDiscountsInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice_item?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  period?: InputMaybe<TsWhereStripe_InvoiceLineItemPeriodInput>;
  price?: InputMaybe<TsWhereStripe_PriceInput>;
  proration?: InputMaybe<TsWhereBooleanInput>;
  proration_details?: InputMaybe<TsWhereStripe_InvoicesLineItemsProrationDetailsInput>;
  quantity?: InputMaybe<TsWhereIntegerInput>;
  subscription?: InputMaybe<TsWhereStringInput>;
  subscription_item?: InputMaybe<TsWhereStringInput>;
  tax_amounts?: InputMaybe<TsWhereStripe_InvoiceTaxAmountInput>;
  tax_rates?: InputMaybe<TsWhereStripe_TaxRateInput>;
  type?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_DiscountsResourceDiscountAmountInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_InvoicesLineItemsProrationDetailsInput = {
  credited_items?: InputMaybe<TsWhereStripe_InvoicesLineItemsCreditedItemsInput>;
};

export type TsWhereStripe_InvoicesLineItemsCreditedItemsInput = {
  invoice?: InputMaybe<TsWhereStringInput>;
  invoice_line_items?: InputMaybe<TsWhereStripe_InvoiceInvoiceLineItemsInput>;
};

export type TsWhereStripe_InvoiceInvoiceLineItemsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_InvoiceTaxAmountInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  inclusive?: InputMaybe<TsWhereBooleanInput>;
};

export type TsWhereStripe_InvoicesPaymentSettingsInput = {
  payment_method_options?: InputMaybe<TsWhereStripe_InvoicesPaymentMethodOptionsInput>;
};

export type TsWhereStripe_InvoicesPaymentMethodOptionsInput = {
  acss_debit?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsAcssDebitInput>;
  bancontact?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsBancontactInput>;
  card?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsCardInput>;
  customer_balance?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsCustomerBalanceInput>;
  us_bank_account?: InputMaybe<TsWhereStripe_InvoicePaymentMethodOptionsUsBankAccountInput>;
};

export type TsWhereStripe_InvoicePaymentMethodOptionsCardInput = {
  request_three_d_secure?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_InvoicesStatusTransitionsInput = {
  finalized_at?: InputMaybe<TsWhereIntegerInput>;
  marked_uncollectible_at?: InputMaybe<TsWhereIntegerInput>;
  paid_at?: InputMaybe<TsWhereIntegerInput>;
  voided_at?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_InvoiceThresholdReasonInput = {
  amount_gte?: InputMaybe<TsWhereIntegerInput>;
  item_reasons?: InputMaybe<TsWhereStripe_InvoiceItemThresholdReasonInput>;
};

export type TsWhereStripe_InvoiceItemThresholdReasonInput = {
  line_item_ids?: InputMaybe<TsWhereStripe_InvoiceLineItemIdsInput>;
  usage_gte?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_InvoiceLineItemIdsInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_InvoiceTransferDataInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_OrderWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_returned?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStringInput>;
  application_fee?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  external_coupon_code?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  items?: InputMaybe<TsWhereStripe_OrderItemInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  returns?: InputMaybe<TsWhereStripe_OrderReturnsInput>;
  selected_shipping_method?: InputMaybe<TsWhereStringInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  shipping_methods?: InputMaybe<TsWhereStripe_ShippingMethodInput>;
  status?: InputMaybe<TsWhereStringInput>;
  status_transitions?: InputMaybe<TsWhereStripe_StatusTransitionsInput>;
  updated?: InputMaybe<TsWhereIntegerInput>;
  upstream_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_OrderItemInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
  quantity?: InputMaybe<TsWhereIntegerInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_OrderReturnsInput = {
  data?: InputMaybe<TsWhereStripe_OrderReturnInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_OrderReturnInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  items?: InputMaybe<TsWhereStripe_OrderItemInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_ShippingMethodInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  delivery_estimate?: InputMaybe<TsWhereStripe_DeliveryEstimateInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_DeliveryEstimateInput = {
  date?: InputMaybe<TsWhereStringInput>;
  earliest?: InputMaybe<TsWhereStringInput>;
  latest?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_StatusTransitionsInput = {
  canceled?: InputMaybe<TsWhereIntegerInput>;
  fulfiled?: InputMaybe<TsWhereIntegerInput>;
  paid?: InputMaybe<TsWhereIntegerInput>;
  returned?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_ChargeOutcomeInput = {
  network_status?: InputMaybe<TsWhereStringInput>;
  reason?: InputMaybe<TsWhereStringInput>;
  risk_level?: InputMaybe<TsWhereStringInput>;
  risk_score?: InputMaybe<TsWhereIntegerInput>;
  rule?: InputMaybe<TsWhereStripe_RuleWrappedStringUnionInput>;
  seller_message?: InputMaybe<TsWhereStringInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_RuleWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  action?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  predicate?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_capturable?: InputMaybe<TsWhereIntegerInput>;
  amount_details?: InputMaybe<TsWhereStripe_PaymentFlowsAmountDetailsInput>;
  amount_received?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStripe_ApplicationWrappedStringUnionInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  automatic_payment_methods?: InputMaybe<TsWhereStripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntentInput>;
  canceled_at?: InputMaybe<TsWhereIntegerInput>;
  cancellation_reason?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  charges?: InputMaybe<TsWhereStripe_PaymentIntentChargesInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  confirmation_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStripe_InvoiceWrappedStringUnionInput>;
  last_payment_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_action?: InputMaybe<TsWhereStripe_PaymentIntentNextActionInput>;
  object?: InputMaybe<TsWhereInput>;
  on_behalf_of?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
  payment_method?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  payment_method_options?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodOptionsInput>;
  payment_method_types?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodTypesInput>;
  processing?: InputMaybe<TsWhereStripe_PaymentIntentProcessingInput>;
  receipt_email?: InputMaybe<TsWhereStringInput>;
  review?: InputMaybe<TsWhereStripe_ReviewWrappedStringUnionInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_suffix?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_TransferDataInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
  invoiceItems?: InputMaybe<TsWhereStripe_InvoiceitemInput>;
  sessionItems?: InputMaybe<TsWhereStripe_ItemInput>;
  shipment?: InputMaybe<TsWhereShipEngine_LabelInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
};

export type TsWhereStripe_PaymentMethodDetailsInput = {
  ach_credit_transfer?: InputMaybe<TsWhereStripe_PaymentMethodDetailsAchCreditTransferInput>;
  ach_debit?: InputMaybe<TsWhereStripe_PaymentMethodDetailsAchDebitInput>;
  acss_debit?: InputMaybe<TsWhereStripe_PaymentMethodDetailsAcssDebitInput>;
  afterpay_clearpay?: InputMaybe<TsWhereStripe_PaymentMethodDetailsAfterpayClearpayInput>;
  alipay?: InputMaybe<TsWhereStripe_PaymentFlowsPrivatePaymentMethodsAlipayDetailsInput>;
  au_becs_debit?: InputMaybe<TsWhereStripe_PaymentMethodDetailsAuBecsDebitInput>;
  bacs_debit?: InputMaybe<TsWhereStripe_PaymentMethodDetailsBacsDebitInput>;
  bancontact?: InputMaybe<TsWhereStripe_PaymentMethodDetailsBancontactInput>;
  boleto?: InputMaybe<TsWhereStripe_PaymentMethodDetailsBoletoInput>;
  card?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardInput>;
  card_present?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardPresentInput>;
  eps?: InputMaybe<TsWhereStripe_PaymentMethodDetailsEpsInput>;
  fpx?: InputMaybe<TsWhereStripe_PaymentMethodDetailsFpxInput>;
  giropay?: InputMaybe<TsWhereStripe_PaymentMethodDetailsGiropayInput>;
  grabpay?: InputMaybe<TsWhereStripe_PaymentMethodDetailsGrabpayInput>;
  ideal?: InputMaybe<TsWhereStripe_PaymentMethodDetailsIdealInput>;
  interac_present?: InputMaybe<TsWhereStripe_PaymentMethodDetailsInteracPresentInput>;
  klarna?: InputMaybe<TsWhereStripe_PaymentMethodDetailsKlarnaInput>;
  konbini?: InputMaybe<TsWhereStripe_PaymentMethodDetailsKonbiniInput>;
  multibanco?: InputMaybe<TsWhereStripe_PaymentMethodDetailsMultibancoInput>;
  oxxo?: InputMaybe<TsWhereStripe_PaymentMethodDetailsOxxoInput>;
  p24?: InputMaybe<TsWhereStripe_PaymentMethodDetailsP24Input>;
  paynow?: InputMaybe<TsWhereStripe_PaymentMethodDetailsPaynowInput>;
  sepa_debit?: InputMaybe<TsWhereStripe_PaymentMethodDetailsSepaDebitInput>;
  sofort?: InputMaybe<TsWhereStripe_PaymentMethodDetailsSofortInput>;
  type?: InputMaybe<TsWhereStringInput>;
  us_bank_account?: InputMaybe<TsWhereStripe_PaymentMethodDetailsUsBankAccountInput>;
  wechat_pay?: InputMaybe<TsWhereStripe_PaymentMethodDetailsWechatPayInput>;
};

export type TsWhereStripe_PaymentMethodDetailsAchCreditTransferInput = {
  account_number?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
  swift_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsAchDebitInput = {
  account_holder_type?: InputMaybe<TsWhereInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsAcssDebitInput = {
  bank_name?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  institution_number?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  mandate?: InputMaybe<TsWhereStringInput>;
  transit_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsAfterpayClearpayInput = {
  reference?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentFlowsPrivatePaymentMethodsAlipayDetailsInput = {
  buyer_id?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  transaction_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsAuBecsDebitInput = {
  bsb_number?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  mandate?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsBacsDebitInput = {
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  mandate?: InputMaybe<TsWhereStringInput>;
  sort_code?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsBancontactInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  generated_sepa_debit?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  generated_sepa_debit_mandate?: InputMaybe<TsWhereStripe_MandateWrappedStringUnionInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  preferred_language?: InputMaybe<TsWhereInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsBoletoInput = {
  tax_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardInput = {
  brand?: InputMaybe<TsWhereStringInput>;
  checks?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardChecksInput>;
  country?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  installments?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardInstallmentsInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  mandate?: InputMaybe<TsWhereStringInput>;
  network?: InputMaybe<TsWhereStringInput>;
  three_d_secure?: InputMaybe<TsWhereStripe_ThreeDSecureDetailsInput>;
  wallet?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardWalletInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardChecksInput = {
  address_line1_check?: InputMaybe<TsWhereStringInput>;
  address_postal_code_check?: InputMaybe<TsWhereStringInput>;
  cvc_check?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardInstallmentsInput = {
  plan?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardInstallmentsPlanInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardWalletInput = {
  dynamic_last4?: InputMaybe<TsWhereStringInput>;
  masterpass?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardWalletMasterpassInput>;
  type?: InputMaybe<TsWhereInput>;
  visa_checkout?: InputMaybe<TsWhereStripe_PaymentMethodDetailsCardWalletVisaCheckoutInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardWalletMasterpassInput = {
  billing_address?: InputMaybe<TsWhereStripe_AddressInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  shipping_address?: InputMaybe<TsWhereStripe_AddressInput>;
};

export type TsWhereStripe_PaymentMethodDetailsCardWalletVisaCheckoutInput = {
  billing_address?: InputMaybe<TsWhereStripe_AddressInput>;
  email?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  shipping_address?: InputMaybe<TsWhereStripe_AddressInput>;
};

export type TsWhereStripe_PaymentMethodDetailsEpsInput = {
  bank?: InputMaybe<TsWhereInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsFpxInput = {
  bank?: InputMaybe<TsWhereInput>;
  transaction_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsGiropayInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsGrabpayInput = {
  transaction_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsIdealInput = {
  bank?: InputMaybe<TsWhereInput>;
  bic?: InputMaybe<TsWhereInput>;
  generated_sepa_debit?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  generated_sepa_debit_mandate?: InputMaybe<TsWhereStripe_MandateWrappedStringUnionInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsInteracPresentInput = {
  brand?: InputMaybe<TsWhereStringInput>;
  cardholder_name?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  emv_auth_data?: InputMaybe<TsWhereStringInput>;
  exp_month?: InputMaybe<TsWhereIntegerInput>;
  exp_year?: InputMaybe<TsWhereIntegerInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  funding?: InputMaybe<TsWhereStringInput>;
  generated_card?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  network?: InputMaybe<TsWhereStringInput>;
  preferred_locales?: InputMaybe<TsWhereStripe_PaymentIntentPreferredLocalesInput>;
  read_method?: InputMaybe<TsWhereInput>;
  receipt?: InputMaybe<TsWhereStripe_PaymentMethodDetailsInteracPresentReceiptInput>;
};

export type TsWhereStripe_PaymentIntentPreferredLocalesInput = {
  /** Exact match */
  eq?: InputMaybe<Scalars['String']>;
  /** Array of possible exact match values. */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** Full text searching with fuzzy matching. */
  match?: InputMaybe<Scalars['String']>;
  /** Regular expression string matching. Use of * wildcards could degrade performance. */
  regexp?: InputMaybe<Scalars['String']>;
};

export type TsWhereStripe_PaymentMethodDetailsInteracPresentReceiptInput = {
  account_type?: InputMaybe<TsWhereInput>;
  application_cryptogram?: InputMaybe<TsWhereStringInput>;
  application_preferred_name?: InputMaybe<TsWhereStringInput>;
  authorization_code?: InputMaybe<TsWhereStringInput>;
  authorization_response_code?: InputMaybe<TsWhereStringInput>;
  cardholder_verification_method?: InputMaybe<TsWhereStringInput>;
  dedicated_file_name?: InputMaybe<TsWhereStringInput>;
  terminal_verification_results?: InputMaybe<TsWhereStringInput>;
  transaction_status_information?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsKlarnaInput = {
  payment_method_category?: InputMaybe<TsWhereStringInput>;
  preferred_locale?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsKonbiniInput = {
  store?: InputMaybe<TsWhereStripe_PaymentMethodDetailsKonbiniStoreInput>;
};

export type TsWhereStripe_PaymentMethodDetailsKonbiniStoreInput = {
  chain?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_PaymentMethodDetailsMultibancoInput = {
  entity?: InputMaybe<TsWhereStringInput>;
  reference?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsOxxoInput = {
  number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsP24Input = {
  bank?: InputMaybe<TsWhereInput>;
  reference?: InputMaybe<TsWhereStringInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsPaynowInput = {
  reference?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsSepaDebitInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  branch_code?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  mandate?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsSofortInput = {
  bank_code?: InputMaybe<TsWhereStringInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  bic?: InputMaybe<TsWhereStringInput>;
  country?: InputMaybe<TsWhereStringInput>;
  generated_sepa_debit?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  generated_sepa_debit_mandate?: InputMaybe<TsWhereStripe_MandateWrappedStringUnionInput>;
  iban_last4?: InputMaybe<TsWhereStringInput>;
  preferred_language?: InputMaybe<TsWhereInput>;
  verified_name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsUsBankAccountInput = {
  account_holder_type?: InputMaybe<TsWhereInput>;
  account_type?: InputMaybe<TsWhereInput>;
  bank_name?: InputMaybe<TsWhereStringInput>;
  fingerprint?: InputMaybe<TsWhereStringInput>;
  last4?: InputMaybe<TsWhereStringInput>;
  routing_number?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentMethodDetailsWechatPayInput = {
  fingerprint?: InputMaybe<TsWhereStringInput>;
  transaction_id?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_PaymentIntentRefundsInput = {
  data?: InputMaybe<TsWhereStripe_RefundInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_RefundInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  balance_transaction?: InputMaybe<TsWhereStripe_BalanceTransactionWrappedStringUnionInput>;
  charge?: InputMaybe<TsWhereStripe_ChargeWrappedStringUnionInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  failure_balance_transaction?: InputMaybe<TsWhereStripe_BalanceTransactionWrappedStringUnionInput>;
  failure_reason?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  next_action?: InputMaybe<TsWhereStripe_RefundNextActionInput>;
  object?: InputMaybe<TsWhereInput>;
  payment_intent?: InputMaybe<TsWhereStripe_PaymentIntentWrappedStringUnionInput>;
  reason?: InputMaybe<TsWhereInput>;
  receipt_number?: InputMaybe<TsWhereStringInput>;
  source_transfer_reversal?: InputMaybe<TsWhereStripe_TransferReversalWrappedStringUnionInput>;
  status?: InputMaybe<TsWhereStringInput>;
  transfer_reversal?: InputMaybe<TsWhereStripe_TransferReversalWrappedStringUnionInput>;
};

export type TsWhereStripe_ChargeWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_captured?: InputMaybe<TsWhereIntegerInput>;
  amount_refunded?: InputMaybe<TsWhereIntegerInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  billing_details?: InputMaybe<TsWhereStripe_BillingDetailsInput>;
  calculated_statement_descriptor?: InputMaybe<TsWhereStringInput>;
  captured?: InputMaybe<TsWhereBooleanInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  disputed?: InputMaybe<TsWhereBooleanInput>;
  failure_code?: InputMaybe<TsWhereStringInput>;
  failure_message?: InputMaybe<TsWhereStringInput>;
  fraud_details?: InputMaybe<TsWhereStripe_ChargeFraudDetailsInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  outcome?: InputMaybe<TsWhereStripe_ChargeOutcomeInput>;
  paid?: InputMaybe<TsWhereBooleanInput>;
  payment_method?: InputMaybe<TsWhereStringInput>;
  payment_method_details?: InputMaybe<TsWhereStripe_PaymentMethodDetailsInput>;
  receipt_email?: InputMaybe<TsWhereStringInput>;
  receipt_number?: InputMaybe<TsWhereStringInput>;
  receipt_url?: InputMaybe<TsWhereStringInput>;
  refunded?: InputMaybe<TsWhereBooleanInput>;
  refunds?: InputMaybe<TsWhereStripe_ChargeRefundsInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_suffix?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_ChargeTransferDataInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ChargeRefundsInput = {
  data?: InputMaybe<TsWhereStripe_RefundInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_ChargeTransferDataInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  destination?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
};

export type TsWhereStripe_RefundNextActionInput = {
  display_details?: InputMaybe<TsWhereStripe_RefundNextActionDisplayDetailsInput>;
  type?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_RefundNextActionDisplayDetailsInput = {
  email_sent?: InputMaybe<TsWhereStripe_EmailSentInput>;
  expires_at?: InputMaybe<TsWhereIntegerInput>;
};

export type TsWhereStripe_EmailSentInput = {
  email_sent_at?: InputMaybe<TsWhereIntegerInput>;
  email_sent_to?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TransferReversalWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
};

export type TsWhereStripe_TransferWrappedStringUnionInput = {
  value?: InputMaybe<TsWhereStringInput>;
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_reversed?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  reversals?: InputMaybe<TsWhereStripe_TransferReversalsInput>;
  reversed?: InputMaybe<TsWhereBooleanInput>;
  source_type?: InputMaybe<TsWhereStringInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TransferReversalsInput = {
  data?: InputMaybe<TsWhereStripe_TransferReversalInput>;
  has_more?: InputMaybe<TsWhereBooleanInput>;
  object?: InputMaybe<TsWhereInput>;
  url?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereStripe_TransferReversalInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  object?: InputMaybe<TsWhereInput>;
};

export type TsWhereAssetRelationshipInput = {
  title?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  filename?: InputMaybe<TsWhereStringInput>;
  caption?: InputMaybe<TsWhereDraftjsInput>;
  credit?: InputMaybe<TsWhereDraftjsInput>;
  path?: InputMaybe<TsWhereStringInput>;
  mimeType?: InputMaybe<TsWhereStringInput>;
  sourceUrl?: InputMaybe<TsWhereStringInput>;
  uploadStatus?: InputMaybe<TsWhereStringInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  s3Key?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationDataLinksInput = {
  categories?: InputMaybe<TsWhereNavigationDataLinksCategoriesInput>;
  pages?: InputMaybe<TsWhereNavigationDataLinksPagesInput>;
};

export type TsWhereNavigationDataLinksCategoriesInput = {
  name?: InputMaybe<TsWhereStringInput>;
  featured?: InputMaybe<TsWhereNavigationDataLinksCategoriesFeaturedInput>;
  collection?: InputMaybe<TsWhereNavigationDataLinksCategoriesCollectionInput>;
  categories?: InputMaybe<TsWhereNavigationDataLinksCategoriesCategoriesInput>;
  brands?: InputMaybe<TsWhereNavigationDataLinksCategoriesBrandsInput>;
};

export type TsWhereNavigationDataLinksCategoriesFeaturedInput = {
  name?: InputMaybe<TsWhereStringInput>;
  href?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationDataLinksCategoriesCollectionInput = {
  name?: InputMaybe<TsWhereStringInput>;
  href?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationDataLinksCategoriesCategoriesInput = {
  href?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationDataLinksCategoriesBrandsInput = {
  name?: InputMaybe<TsWhereStringInput>;
  href?: InputMaybe<TsWhereStringInput>;
};

export type TsWhereNavigationDataLinksPagesInput = {
  name?: InputMaybe<TsWhereStringInput>;
  href?: InputMaybe<TsWhereStringInput>;
};

export type Profile = TsSearchable & {
  __typename?: 'Profile';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  avatar?: Maybe<Asset>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  stripeCustomer?: Maybe<Stripe_Customer>;
  loyaltyCard?: Maybe<Voucherify_LoyaltyCard>;
  orders?: Maybe<Array<Maybe<Stripe_Invoice>>>;
  _shapeId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};


export type ProfileAvatarArgs = {
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Stripe_Customer = {
  __typename?: 'Stripe_Customer';
  address?: Maybe<Stripe_Address>;
  /** Current balance, if any, being stored on the customer. If negative, the customer has credit to apply to their next invoice. If positive, the customer has an amount owed that will be added to their next invoice. The balance does not refer to any unpaid invoices; it solely takes into account amounts that have yet to be successfully applied to any invoice. This balance is only taken into account as invoices are finalized. */
  balance?: Maybe<Scalars['Int']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) the customer can be charged in for recurring billing purposes. */
  currency?: Maybe<Scalars['String']>;
  default_source?: Maybe<Stripe_CustomerDefaultSourceProperty>;
  /**
   * When the customer's latest invoice is billed by charging automatically, `delinquent` is `true` if the invoice's latest charge failed. When the customer's latest invoice is billed by sending an invoice, `delinquent` is `true` if the invoice isn't paid by its due date.
   *
   * If an invoice is marked uncollectible by [dunning](https://stripe.com/docs/billing/automatic-collection), `delinquent` doesn't get reset to `false`.
   */
  delinquent?: Maybe<Scalars['Boolean']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Stripe_Discount>;
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The prefix for the customer used to generate unique invoice numbers. */
  invoice_prefix?: Maybe<Scalars['String']>;
  invoice_settings?: Maybe<Stripe_InvoiceSettingCustomerSetting>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The customer's full name or business name. */
  name?: Maybe<Scalars['String']>;
  /** The suffix of the customer's next invoice number, e.g., 0001. */
  next_invoice_sequence?: Maybe<Scalars['Int']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_CustomerObjectProperty>;
  /** The customer's phone number. */
  phone?: Maybe<Scalars['String']>;
  /** The customer's preferred locales (languages), ordered by preference. */
  preferred_locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  shipping?: Maybe<Stripe_Shipping>;
  /** The customer's payment sources, if any. */
  sources?: Maybe<Stripe_CustomerSourcesProperty>;
  /** The customer's current subscriptions, if any. */
  subscriptions?: Maybe<Stripe_CustomerSubscriptionsProperty>;
  tax?: Maybe<Stripe_CustomerTax>;
  /** Describes the customer's tax exemption status. One of `none`, `exempt`, or `reverse`. When set to `reverse`, invoice and receipt PDFs include the text **"Reverse charge"**. */
  tax_exempt?: Maybe<Stripe_CustomerTaxExemptProperty>;
  /** The customer's tax IDs. */
  tax_ids?: Maybe<Stripe_CustomerTaxIdsProperty>;
  test_clock?: Maybe<Stripe_CustomerTestClockProperty>;
};

export type Stripe_Address = {
  __typename?: 'Stripe_Address';
  /** City, district, suburb, town, or village. */
  city?: Maybe<Scalars['String']>;
  /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
  country?: Maybe<Scalars['String']>;
  /** Address line 1 (e.g., street, PO Box, or company name). */
  line1?: Maybe<Scalars['String']>;
  /** Address line 2 (e.g., apartment, suite, unit, or building). */
  line2?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  postal_code?: Maybe<Scalars['String']>;
  /** State, county, province, or region. */
  state?: Maybe<Scalars['String']>;
};

export type Stripe_CustomerDefaultSourceProperty = WrappedString | Stripe_AlipayAccount | Stripe_BankAccount | Stripe_BitcoinReceiver | Stripe_Card | Stripe_Source;

export type Stripe_AlipayAccount = {
  __typename?: 'Stripe_AlipayAccount';
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  customer?: Maybe<Scalars['String']>;
  /** Uniquely identifies the account and will be the same across all Alipay account objects that are linked to the same Alipay account. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_AlipayAccountObjectProperty>;
  /** If the Alipay account object is not reusable, the exact amount that you can create a charge for. */
  payment_amount?: Maybe<Scalars['Int']>;
  /** If the Alipay account object is not reusable, the exact currency that you can create a charge for. */
  payment_currency?: Maybe<Scalars['String']>;
  /** True if you can create multiple payments using this account. If the account is reusable, then you can freely choose the amount of each payment. */
  reusable?: Maybe<Scalars['Boolean']>;
  /** Whether this Alipay account object has ever been used for a payment. */
  used?: Maybe<Scalars['Boolean']>;
  /** The username for the Alipay account. */
  username?: Maybe<Scalars['String']>;
};

export enum Stripe_AlipayAccountObjectProperty {
  AlipayAccount = 'alipay_account'
}

export type Stripe_BankAccount = {
  __typename?: 'Stripe_BankAccount';
  account?: Maybe<Stripe_BankAccountAccountProperty>;
  /** The name of the person or business that owns the bank account. */
  account_holder_name?: Maybe<Scalars['String']>;
  /** The type of entity that holds the account. This can be either `individual` or `company`. */
  account_holder_type?: Maybe<Scalars['String']>;
  /** The bank account type. This can only be `checking` or `savings` in most countries. In Japan, this can only be `futsu` or `toza`. */
  account_type?: Maybe<Scalars['String']>;
  /** A set of available payout methods for this bank account. Only values from this set should be passed as the `method` when creating a payout. */
  available_payout_methods?: Maybe<Array<Maybe<Stripe_BankAccountAvailablePayoutMethodsProperty>>>;
  /** Name of the bank associated with the routing number (e.g., `WELLS FARGO`). */
  bank_name?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Scalars['String']>;
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** Whether this bank account is the default external account for its currency. */
  default_for_currency?: Maybe<Scalars['Boolean']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_BankAccountObjectProperty>;
  /** The routing transit number for the bank account. */
  routing_number?: Maybe<Scalars['String']>;
  /**
   * For bank accounts, possible values are `new`, `validated`, `verified`, `verification_failed`, or `errored`. A bank account that hasn't had any activity or validation performed is `new`. If Stripe can determine that the bank account exists, its status will be `validated`. Note that there often isn’t enough information to know (e.g., for smaller credit unions), and the validation is not always run. If customer bank account verification has succeeded, the bank account status will be `verified`. If the verification failed for any reason, such as microdeposit failure, the status will be `verification_failed`. If a transfer sent to this bank account fails, we'll set the status to `errored` and will not continue to send transfers until the bank details are updated.
   *
   * For external accounts, possible values are `new` and `errored`. Validations aren't run against external accounts because they're only used for payouts. This means the other statuses don't apply. If a transfer fails, the status is set to `errored` and transfers are stopped until account details are updated.
   */
  status?: Maybe<Scalars['String']>;
};

export type Stripe_BankAccountAccountProperty = WrappedString | Stripe_Account;

export type Stripe_Account = {
  __typename?: 'Stripe_Account';
  business_profile?: Maybe<Stripe_AccountBusinessProfile>;
  /** The business type. */
  business_type?: Maybe<Stripe_AccountBusinessTypeProperty>;
  capabilities?: Maybe<Stripe_AccountCapabilities>;
  /** Whether the account can create live charges. */
  charges_enabled?: Maybe<Scalars['Boolean']>;
  company?: Maybe<Stripe_LegalEntityCompany>;
  controller?: Maybe<Stripe_AccountUnificationAccountController>;
  /** The account's country. */
  country?: Maybe<Scalars['String']>;
  /** Time at which the account was connected. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter ISO currency code representing the default currency for the account. This must be a currency that [Stripe supports in the account's country](https://stripe.com/docs/payouts). */
  default_currency?: Maybe<Scalars['String']>;
  /** Whether account details have been submitted. Standard accounts cannot receive payouts before this is true. */
  details_submitted?: Maybe<Scalars['Boolean']>;
  /** An email address associated with the account. You can treat this as metadata: it is not used for authentication or messaging account holders. */
  email?: Maybe<Scalars['String']>;
  /** External accounts (bank accounts and debit cards) currently attached to this account */
  external_accounts?: Maybe<Stripe_AccountExternalAccountsProperty>;
  future_requirements?: Maybe<Stripe_AccountFutureRequirements>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  individual?: Maybe<Stripe_Person>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_AccountObjectProperty>;
  /** Whether Stripe can send payouts to this account. */
  payouts_enabled?: Maybe<Scalars['Boolean']>;
  requirements?: Maybe<Stripe_AccountRequirements>;
  settings?: Maybe<Stripe_AccountSettings>;
  tos_acceptance?: Maybe<Stripe_AccountTosAcceptance>;
  /** The Stripe account type. Can be `standard`, `express`, or `custom`. */
  type?: Maybe<Stripe_AccountTypeProperty>;
};

export type Stripe_AccountBusinessProfile = {
  __typename?: 'Stripe_AccountBusinessProfile';
  /** [The merchant category code for the account](https://stripe.com/docs/connect/setting-mcc). MCCs are used to classify businesses based on the goods or services they provide. */
  mcc?: Maybe<Scalars['String']>;
  /** The customer-facing business name. */
  name?: Maybe<Scalars['String']>;
  /** Internal-only description of the product sold or service provided by the business. It's used by Stripe for risk and underwriting purposes. */
  product_description?: Maybe<Scalars['String']>;
  support_address?: Maybe<Stripe_Address>;
  /** A publicly available email address for sending support issues to. */
  support_email?: Maybe<Scalars['String']>;
  /** A publicly available phone number to call with support issues. */
  support_phone?: Maybe<Scalars['String']>;
  /** A publicly available website for handling support issues. */
  support_url?: Maybe<Scalars['String']>;
  /** The business's publicly available website. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_AccountBusinessTypeProperty {
  Company = 'company',
  GovernmentEntity = 'government_entity',
  Individual = 'individual',
  NonProfit = 'non_profit'
}

export type Stripe_AccountCapabilities = {
  __typename?: 'Stripe_AccountCapabilities';
  /** The status of the Canadian pre-authorized debits payments capability of the account, or whether the account can directly process Canadian pre-authorized debits charges. */
  acss_debit_payments?: Maybe<Stripe_AccountCapabilitiesAcssDebitPaymentsProperty>;
  /** The status of the Afterpay Clearpay capability of the account, or whether the account can directly process Afterpay Clearpay charges. */
  afterpay_clearpay_payments?: Maybe<Stripe_AccountCapabilitiesAfterpayClearpayPaymentsProperty>;
  /** The status of the BECS Direct Debit (AU) payments capability of the account, or whether the account can directly process BECS Direct Debit (AU) charges. */
  au_becs_debit_payments?: Maybe<Stripe_AccountCapabilitiesAuBecsDebitPaymentsProperty>;
  /** The status of the Bacs Direct Debits payments capability of the account, or whether the account can directly process Bacs Direct Debits charges. */
  bacs_debit_payments?: Maybe<Stripe_AccountCapabilitiesBacsDebitPaymentsProperty>;
  /** The status of the Bancontact payments capability of the account, or whether the account can directly process Bancontact charges. */
  bancontact_payments?: Maybe<Stripe_AccountCapabilitiesBancontactPaymentsProperty>;
  /** The status of the customer_balance payments capability of the account, or whether the account can directly process customer_balance charges. */
  bank_transfer_payments?: Maybe<Stripe_AccountCapabilitiesBankTransferPaymentsProperty>;
  /** The status of the boleto payments capability of the account, or whether the account can directly process boleto charges. */
  boleto_payments?: Maybe<Stripe_AccountCapabilitiesBoletoPaymentsProperty>;
  /** The status of the card issuing capability of the account, or whether you can use Issuing to distribute funds on cards */
  card_issuing?: Maybe<Stripe_AccountCapabilitiesCardIssuingProperty>;
  /** The status of the card payments capability of the account, or whether the account can directly process credit and debit card charges. */
  card_payments?: Maybe<Stripe_AccountCapabilitiesCardPaymentsProperty>;
  /** The status of the Cartes Bancaires payments capability of the account, or whether the account can directly process Cartes Bancaires card charges in EUR currency. */
  cartes_bancaires_payments?: Maybe<Stripe_AccountCapabilitiesCartesBancairesPaymentsProperty>;
  /** The status of the EPS payments capability of the account, or whether the account can directly process EPS charges. */
  eps_payments?: Maybe<Stripe_AccountCapabilitiesEpsPaymentsProperty>;
  /** The status of the FPX payments capability of the account, or whether the account can directly process FPX charges. */
  fpx_payments?: Maybe<Stripe_AccountCapabilitiesFpxPaymentsProperty>;
  /** The status of the giropay payments capability of the account, or whether the account can directly process giropay charges. */
  giropay_payments?: Maybe<Stripe_AccountCapabilitiesGiropayPaymentsProperty>;
  /** The status of the GrabPay payments capability of the account, or whether the account can directly process GrabPay charges. */
  grabpay_payments?: Maybe<Stripe_AccountCapabilitiesGrabpayPaymentsProperty>;
  /** The status of the iDEAL payments capability of the account, or whether the account can directly process iDEAL charges. */
  ideal_payments?: Maybe<Stripe_AccountCapabilitiesIdealPaymentsProperty>;
  /** The status of the JCB payments capability of the account, or whether the account (Japan only) can directly process JCB credit card charges in JPY currency. */
  jcb_payments?: Maybe<Stripe_AccountCapabilitiesJcbPaymentsProperty>;
  /** The status of the Klarna payments capability of the account, or whether the account can directly process Klarna charges. */
  klarna_payments?: Maybe<Stripe_AccountCapabilitiesKlarnaPaymentsProperty>;
  /** The status of the konbini payments capability of the account, or whether the account can directly process konbini charges. */
  konbini_payments?: Maybe<Stripe_AccountCapabilitiesKonbiniPaymentsProperty>;
  /** The status of the legacy payments capability of the account. */
  legacy_payments?: Maybe<Stripe_AccountCapabilitiesLegacyPaymentsProperty>;
  /** The status of the OXXO payments capability of the account, or whether the account can directly process OXXO charges. */
  oxxo_payments?: Maybe<Stripe_AccountCapabilitiesOxxoPaymentsProperty>;
  /** The status of the P24 payments capability of the account, or whether the account can directly process P24 charges. */
  p24_payments?: Maybe<Stripe_AccountCapabilitiesP24PaymentsProperty>;
  /** The status of the paynow payments capability of the account, or whether the account can directly process paynow charges. */
  paynow_payments?: Maybe<Stripe_AccountCapabilitiesPaynowPaymentsProperty>;
  /** The status of the SEPA Direct Debits payments capability of the account, or whether the account can directly process SEPA Direct Debits charges. */
  sepa_debit_payments?: Maybe<Stripe_AccountCapabilitiesSepaDebitPaymentsProperty>;
  /** The status of the Sofort payments capability of the account, or whether the account can directly process Sofort charges. */
  sofort_payments?: Maybe<Stripe_AccountCapabilitiesSofortPaymentsProperty>;
  /** The status of the tax reporting 1099-K (US) capability of the account. */
  tax_reporting_us_1099_k?: Maybe<Stripe_AccountCapabilitiesTaxReportingUs1099KProperty>;
  /** The status of the tax reporting 1099-MISC (US) capability of the account. */
  tax_reporting_us_1099_misc?: Maybe<Stripe_AccountCapabilitiesTaxReportingUs1099MiscProperty>;
  /** The status of the transfers capability of the account, or whether your platform can transfer funds to the account. */
  transfers?: Maybe<Stripe_AccountCapabilitiesTransfersProperty>;
  /** The status of the US bank account ACH payments capability of the account, or whether the account can directly process US bank account charges. */
  us_bank_account_ach_payments?: Maybe<Stripe_AccountCapabilitiesUsBankAccountAchPaymentsProperty>;
};

export enum Stripe_AccountCapabilitiesAcssDebitPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesAfterpayClearpayPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesAuBecsDebitPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesBacsDebitPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesBancontactPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesBankTransferPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesBoletoPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesCardIssuingProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesCardPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesCartesBancairesPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesEpsPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesFpxPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesGiropayPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesGrabpayPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesIdealPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesJcbPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesKlarnaPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesKonbiniPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesLegacyPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesOxxoPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesP24PaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesPaynowPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesSepaDebitPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesSofortPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesTaxReportingUs1099KProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesTaxReportingUs1099MiscProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesTransfersProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_AccountCapabilitiesUsBankAccountAchPaymentsProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export type Stripe_LegalEntityCompany = {
  __typename?: 'Stripe_LegalEntityCompany';
  address?: Maybe<Stripe_Address>;
  address_kana?: Maybe<Stripe_LegalEntityJapanAddress>;
  address_kanji?: Maybe<Stripe_LegalEntityJapanAddress>;
  /** Whether the company's directors have been provided. This Boolean will be `true` if you've manually indicated that all directors are provided via [the `directors_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-directors_provided). */
  directors_provided?: Maybe<Scalars['Boolean']>;
  /** Whether the company's executives have been provided. This Boolean will be `true` if you've manually indicated that all executives are provided via [the `executives_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-executives_provided), or if Stripe determined that sufficient executives were provided. */
  executives_provided?: Maybe<Scalars['Boolean']>;
  /** The company's legal name. */
  name?: Maybe<Scalars['String']>;
  /** The Kana variation of the company's legal name (Japan only). */
  name_kana?: Maybe<Scalars['String']>;
  /** The Kanji variation of the company's legal name (Japan only). */
  name_kanji?: Maybe<Scalars['String']>;
  /** Whether the company's owners have been provided. This Boolean will be `true` if you've manually indicated that all owners are provided via [the `owners_provided` parameter](https://stripe.com/docs/api/accounts/update#update_account-company-owners_provided), or if Stripe determined that sufficient owners were provided. Stripe determines ownership requirements using both the number of owners provided and their total percent ownership (calculated by adding the `percent_ownership` of each owner together). */
  owners_provided?: Maybe<Scalars['Boolean']>;
  ownership_declaration?: Maybe<Stripe_LegalEntityUboDeclaration>;
  /** The company's phone number (used for verification). */
  phone?: Maybe<Scalars['String']>;
  /** The category identifying the legal structure of the company or legal entity. See [Business structure](https://stripe.com/docs/connect/identity-verification#business-structure) for more details. */
  structure?: Maybe<Stripe_LegalEntityCompanyStructureProperty>;
  /** Whether the company's business ID number was provided. */
  tax_id_provided?: Maybe<Scalars['Boolean']>;
  /** The jurisdiction in which the `tax_id` is registered (Germany-based companies only). */
  tax_id_registrar?: Maybe<Scalars['String']>;
  /** Whether the company's business VAT number was provided. */
  vat_id_provided?: Maybe<Scalars['Boolean']>;
  verification?: Maybe<Stripe_LegalEntityCompanyVerification>;
};

export type Stripe_LegalEntityJapanAddress = {
  __typename?: 'Stripe_LegalEntityJapanAddress';
  /** City/Ward. */
  city?: Maybe<Scalars['String']>;
  /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
  country?: Maybe<Scalars['String']>;
  /** Block/Building number. */
  line1?: Maybe<Scalars['String']>;
  /** Building details. */
  line2?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  postal_code?: Maybe<Scalars['String']>;
  /** Prefecture. */
  state?: Maybe<Scalars['String']>;
  /** Town/cho-me. */
  town?: Maybe<Scalars['String']>;
};

export type Stripe_LegalEntityUboDeclaration = {
  __typename?: 'Stripe_LegalEntityUboDeclaration';
  /** The Unix timestamp marking when the beneficial owner attestation was made. */
  date?: Maybe<Scalars['Int']>;
  /** The IP address from which the beneficial owner attestation was made. */
  ip?: Maybe<Scalars['String']>;
  /** The user-agent string from the browser where the beneficial owner attestation was made. */
  user_agent?: Maybe<Scalars['String']>;
};

export enum Stripe_LegalEntityCompanyStructureProperty {
  FreeZoneEstablishment = 'free_zone_establishment',
  FreeZoneLlc = 'free_zone_llc',
  GovernmentInstrumentality = 'government_instrumentality',
  GovernmentalUnit = 'governmental_unit',
  IncorporatedNonProfit = 'incorporated_non_profit',
  LimitedLiabilityPartnership = 'limited_liability_partnership',
  Llc = 'llc',
  MultiMemberLlc = 'multi_member_llc',
  PrivateCompany = 'private_company',
  PrivateCorporation = 'private_corporation',
  PrivatePartnership = 'private_partnership',
  PublicCompany = 'public_company',
  PublicCorporation = 'public_corporation',
  PublicPartnership = 'public_partnership',
  SingleMemberLlc = 'single_member_llc',
  SoleEstablishment = 'sole_establishment',
  SoleProprietorship = 'sole_proprietorship',
  TaxExemptGovernmentInstrumentality = 'tax_exempt_government_instrumentality',
  UnincorporatedAssociation = 'unincorporated_association',
  UnincorporatedNonProfit = 'unincorporated_non_profit'
}

export type Stripe_LegalEntityCompanyVerification = {
  __typename?: 'Stripe_LegalEntityCompanyVerification';
  document?: Maybe<Stripe_LegalEntityCompanyVerificationDocument>;
};

export type Stripe_LegalEntityCompanyVerificationDocument = {
  __typename?: 'Stripe_LegalEntityCompanyVerificationDocument';
  back?: Maybe<Stripe_LegalEntityCompanyVerificationDocumentBackProperty>;
  /** A user-displayable string describing the verification state of this document. */
  details?: Maybe<Scalars['String']>;
  /** One of `document_corrupt`, `document_expired`, `document_failed_copy`, `document_failed_greyscale`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_not_readable`, `document_not_uploaded`, `document_type_not_supported`, or `document_too_large`. A machine-readable code specifying the verification state for this document. */
  details_code?: Maybe<Scalars['String']>;
  front?: Maybe<Stripe_LegalEntityCompanyVerificationDocumentFrontProperty>;
};

export type Stripe_LegalEntityCompanyVerificationDocumentBackProperty = WrappedString | Stripe_File;

export type Stripe_File = {
  __typename?: 'Stripe_File';
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** The time at which the file expires and is no longer available in epoch seconds. */
  expires_at?: Maybe<Scalars['Int']>;
  /** A filename for the file, suitable for saving to a filesystem. */
  filename?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** A list of [file links](https://stripe.com/docs/api#file_links) that point at this file. */
  links?: Maybe<Stripe_FileLinksProperty>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_FileObjectProperty>;
  /** The [purpose](https://stripe.com/docs/file-upload#uploading-a-file) of the uploaded file. */
  purpose?: Maybe<Stripe_FilePurposeProperty>;
  /** The size in bytes of the file object. */
  size?: Maybe<Scalars['Int']>;
  /** A user friendly title for the document. */
  title?: Maybe<Scalars['String']>;
  /** The type of the file returned (e.g., `csv`, `pdf`, `jpg`, or `png`). */
  type?: Maybe<Scalars['String']>;
  /** The URL from which the file can be downloaded using your live secret API key. */
  url?: Maybe<Scalars['String']>;
};

/** A list of [file links](https://stripe.com/docs/api#file_links) that point at this file. */
export type Stripe_FileLinksProperty = {
  __typename?: 'Stripe_FileLinksProperty';
  /** Details about each object. */
  data: Array<Stripe_FileLink>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_FileLinksObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_FileLink = {
  __typename?: 'Stripe_FileLink';
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Whether this link is already expired. */
  expired?: Maybe<Scalars['Boolean']>;
  /** Time at which the link expires. */
  expires_at?: Maybe<Scalars['Int']>;
  file?: Maybe<Stripe_FileLinkFileProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_FileLinkObjectProperty>;
  /** The publicly accessible URL to download the file. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_FileLinkFileProperty = WrappedString | Stripe_File;

export enum Stripe_FileLinkObjectProperty {
  FileLink = 'file_link'
}

export enum Stripe_FileLinksObjectProperty {
  List = 'list'
}

export enum Stripe_FileObjectProperty {
  File = 'file'
}

export enum Stripe_FilePurposeProperty {
  AccountRequirement = 'account_requirement',
  AdditionalVerification = 'additional_verification',
  BusinessIcon = 'business_icon',
  BusinessLogo = 'business_logo',
  CustomerSignature = 'customer_signature',
  DisputeEvidence = 'dispute_evidence',
  DocumentProviderIdentityDocument = 'document_provider_identity_document',
  FinanceReportRun = 'finance_report_run',
  IdentityDocument = 'identity_document',
  IdentityDocumentDownloadable = 'identity_document_downloadable',
  PciDocument = 'pci_document',
  Selfie = 'selfie',
  SigmaScheduledQuery = 'sigma_scheduled_query',
  TaxDocumentUserUpload = 'tax_document_user_upload'
}

export type Stripe_LegalEntityCompanyVerificationDocumentFrontProperty = WrappedString | Stripe_File;

export type Stripe_AccountUnificationAccountController = {
  __typename?: 'Stripe_AccountUnificationAccountController';
  /** `true` if the Connect application retrieving the resource controls the account and can therefore exercise [platform controls](https://stripe.com/docs/connect/platform-controls-for-standard-accounts). Otherwise, this field is null. */
  is_controller?: Maybe<Scalars['Boolean']>;
  /** The controller type. Can be `application`, if a Connect application controls the account, or `account`, if the account controls itself. */
  type?: Maybe<Stripe_AccountUnificationAccountControllerTypeProperty>;
};

export enum Stripe_AccountUnificationAccountControllerTypeProperty {
  Account = 'account',
  Application = 'application'
}

/** External accounts (bank accounts and debit cards) currently attached to this account */
export type Stripe_AccountExternalAccountsProperty = {
  __typename?: 'Stripe_AccountExternalAccountsProperty';
  /** The list contains all external accounts that have been attached to the Stripe account. These may be bank accounts or cards. */
  data: Array<Stripe_AccountExternalAccountsDataProperty>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_AccountExternalAccountsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_AccountExternalAccountsDataProperty = Stripe_BankAccount | Stripe_Card;

export type Stripe_Card = {
  __typename?: 'Stripe_Card';
  account?: Maybe<Stripe_CardAccountProperty>;
  /** City/District/Suburb/Town/Village. */
  address_city?: Maybe<Scalars['String']>;
  /** Billing address country, if provided when creating card. */
  address_country?: Maybe<Scalars['String']>;
  /** Address line 1 (Street address/PO Box/Company name). */
  address_line1?: Maybe<Scalars['String']>;
  /** If `address_line1` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. */
  address_line1_check?: Maybe<Scalars['String']>;
  /** Address line 2 (Apartment/Suite/Unit/Building). */
  address_line2?: Maybe<Scalars['String']>;
  /** State/County/Province/Region. */
  address_state?: Maybe<Scalars['String']>;
  /** ZIP or postal code. */
  address_zip?: Maybe<Scalars['String']>;
  /** If `address_zip` was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. */
  address_zip_check?: Maybe<Scalars['String']>;
  /** A set of available payout methods for this card. Only values from this set should be passed as the `method` when creating a payout. */
  available_payout_methods?: Maybe<Array<Maybe<Stripe_CardAvailablePayoutMethodsProperty>>>;
  /** Card brand. Can be `American Express`, `Diners Club`, `Discover`, `JCB`, `MasterCard`, `UnionPay`, `Visa`, or `Unknown`. */
  brand?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
  country?: Maybe<Scalars['String']>;
  /** Three-letter [ISO code for currency](https://stripe.com/docs/payouts). Only applicable on accounts (not customers or recipients). The card can be used as a transfer destination for funds in this currency. */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** If a CVC was provided, results of the check: `pass`, `fail`, `unavailable`, or `unchecked`. A result of unchecked indicates that CVC was provided but hasn't been checked yet. Checks are typically performed when attaching a card to a Customer object, or when creating a charge. For more details, see [Check if a card is valid without a charge](https://support.stripe.com/questions/check-if-a-card-is-valid-without-a-charge). */
  cvc_check?: Maybe<Scalars['String']>;
  /** Whether this card is the default external account for its currency. */
  default_for_currency?: Maybe<Scalars['Boolean']>;
  /** (For tokenized numbers only.) The last four digits of the device account number. */
  dynamic_last4?: Maybe<Scalars['String']>;
  /** Two-digit number representing the card's expiration month. */
  exp_month?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card's expiration year. */
  exp_year?: Maybe<Scalars['Int']>;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
   */
  fingerprint?: Maybe<Scalars['String']>;
  /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
  funding?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The last four digits of the card. */
  last4?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** Cardholder name. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_CardObjectProperty>;
  recipient?: Maybe<Stripe_CardRecipientProperty>;
  /** For external accounts, possible values are `new` and `errored`. If a transfer fails, the status is set to `errored` and transfers are stopped until account details are updated. */
  status?: Maybe<Scalars['String']>;
  /** If the card number is tokenized, this is the method that was used. Can be `android_pay` (includes Google Pay), `apple_pay`, `masterpass`, `visa_checkout`, or null. */
  tokenization_method?: Maybe<Scalars['String']>;
};

export type Stripe_CardAccountProperty = WrappedString | Stripe_Account;

export enum Stripe_CardAvailablePayoutMethodsProperty {
  Instant = 'instant',
  Standard = 'standard'
}

export enum Stripe_CardObjectProperty {
  Card = 'card'
}

export type Stripe_CardRecipientProperty = WrappedString | Stripe_Recipient;

export type Stripe_Recipient = {
  __typename?: 'Stripe_Recipient';
  active_account?: Maybe<Stripe_BankAccount>;
  cards?: Maybe<Stripe_RecipientCardsProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  default_card?: Maybe<Stripe_RecipientDefaultCardProperty>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  migrated_to?: Maybe<Stripe_RecipientMigratedToProperty>;
  /** Full, legal name of the recipient. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_RecipientObjectProperty>;
  rolled_back_from?: Maybe<Stripe_RecipientRolledBackFromProperty>;
  /** Type of the recipient, one of `individual` or `corporation`. */
  type?: Maybe<Scalars['String']>;
};

export type Stripe_RecipientCardsProperty = {
  __typename?: 'Stripe_RecipientCardsProperty';
  data: Array<Stripe_Card>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_RecipientCardsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_RecipientCardsObjectProperty {
  List = 'list'
}

export type Stripe_RecipientDefaultCardProperty = WrappedString | Stripe_Card;

export type Stripe_RecipientMigratedToProperty = WrappedString | Stripe_Account;

export enum Stripe_RecipientObjectProperty {
  Recipient = 'recipient'
}

export type Stripe_RecipientRolledBackFromProperty = WrappedString | Stripe_Account;

export enum Stripe_AccountExternalAccountsObjectProperty {
  List = 'list'
}

export type Stripe_AccountFutureRequirements = {
  __typename?: 'Stripe_AccountFutureRequirements';
  /** Fields that are due and can be satisfied by providing the corresponding alternative fields instead. */
  alternatives?: Maybe<Array<Maybe<Stripe_AccountRequirementsAlternative>>>;
  /** Date on which `future_requirements` merges with the main `requirements` hash and `future_requirements` becomes empty. After the transition, `currently_due` requirements may immediately become `past_due`, but the account may also be given a grace period depending on its enablement state prior to transitioning. */
  current_deadline?: Maybe<Scalars['Int']>;
  /** Fields that need to be collected to keep the account enabled. If not collected by `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash. */
  currently_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** This is typed as a string for consistency with `requirements.disabled_reason`, but it safe to assume `future_requirements.disabled_reason` is empty because fields in `future_requirements` will never disable the account. */
  disabled_reason?: Maybe<Scalars['String']>;
  /** Fields that are `currently_due` and need to be collected again because validation or verification failed. */
  errors?: Maybe<Array<Maybe<Stripe_AccountRequirementsError>>>;
  /** Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well. */
  eventually_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that weren't collected by `requirements.current_deadline`. These fields need to be collected to enable the capability on the account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`. */
  past_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. */
  pending_verification?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Stripe_AccountRequirementsAlternative = {
  __typename?: 'Stripe_AccountRequirementsAlternative';
  /** Fields that can be provided to satisfy all fields in `original_fields_due`. */
  alternative_fields_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that are due and can be satisfied by providing all fields in `alternative_fields_due`. */
  original_fields_due?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Stripe_AccountRequirementsError = {
  __typename?: 'Stripe_AccountRequirementsError';
  /** The code for the type of error. */
  code?: Maybe<Stripe_AccountRequirementsErrorCodeProperty>;
  /** An informative message that indicates the error type and provides additional details about the error. */
  reason?: Maybe<Scalars['String']>;
  /** The specific user onboarding requirement field (in the requirements hash) that needs to be resolved. */
  requirement?: Maybe<Scalars['String']>;
};

export enum Stripe_AccountRequirementsErrorCodeProperty {
  InvalidAddressCityStatePostalCode = 'invalid_address_city_state_postal_code',
  InvalidStreetAddress = 'invalid_street_address',
  InvalidValueOther = 'invalid_value_other',
  VerificationDocumentAddressMismatch = 'verification_document_address_mismatch',
  VerificationDocumentAddressMissing = 'verification_document_address_missing',
  VerificationDocumentCorrupt = 'verification_document_corrupt',
  VerificationDocumentCountryNotSupported = 'verification_document_country_not_supported',
  VerificationDocumentDobMismatch = 'verification_document_dob_mismatch',
  VerificationDocumentDuplicateType = 'verification_document_duplicate_type',
  VerificationDocumentExpired = 'verification_document_expired',
  VerificationDocumentFailedCopy = 'verification_document_failed_copy',
  VerificationDocumentFailedGreyscale = 'verification_document_failed_greyscale',
  VerificationDocumentFailedOther = 'verification_document_failed_other',
  VerificationDocumentFailedTestMode = 'verification_document_failed_test_mode',
  VerificationDocumentFraudulent = 'verification_document_fraudulent',
  VerificationDocumentIdNumberMismatch = 'verification_document_id_number_mismatch',
  VerificationDocumentIdNumberMissing = 'verification_document_id_number_missing',
  VerificationDocumentIncomplete = 'verification_document_incomplete',
  VerificationDocumentInvalid = 'verification_document_invalid',
  VerificationDocumentIssueOrExpiryDateMissing = 'verification_document_issue_or_expiry_date_missing',
  VerificationDocumentManipulated = 'verification_document_manipulated',
  VerificationDocumentMissingBack = 'verification_document_missing_back',
  VerificationDocumentMissingFront = 'verification_document_missing_front',
  VerificationDocumentNameMismatch = 'verification_document_name_mismatch',
  VerificationDocumentNameMissing = 'verification_document_name_missing',
  VerificationDocumentNationalityMismatch = 'verification_document_nationality_mismatch',
  VerificationDocumentNotReadable = 'verification_document_not_readable',
  VerificationDocumentNotSigned = 'verification_document_not_signed',
  VerificationDocumentNotUploaded = 'verification_document_not_uploaded',
  VerificationDocumentPhotoMismatch = 'verification_document_photo_mismatch',
  VerificationDocumentTooLarge = 'verification_document_too_large',
  VerificationDocumentTypeNotSupported = 'verification_document_type_not_supported',
  VerificationFailedAddressMatch = 'verification_failed_address_match',
  VerificationFailedBusinessIecNumber = 'verification_failed_business_iec_number',
  VerificationFailedDocumentMatch = 'verification_failed_document_match',
  VerificationFailedIdNumberMatch = 'verification_failed_id_number_match',
  VerificationFailedKeyedIdentity = 'verification_failed_keyed_identity',
  VerificationFailedKeyedMatch = 'verification_failed_keyed_match',
  VerificationFailedNameMatch = 'verification_failed_name_match',
  VerificationFailedOther = 'verification_failed_other',
  VerificationFailedTaxIdMatch = 'verification_failed_tax_id_match',
  VerificationFailedTaxIdNotIssued = 'verification_failed_tax_id_not_issued',
  VerificationMissingExecutives = 'verification_missing_executives',
  VerificationMissingOwners = 'verification_missing_owners',
  VerificationRequiresAdditionalMemorandumOfAssociations = 'verification_requires_additional_memorandum_of_associations'
}

export type Stripe_Person = {
  __typename?: 'Stripe_Person';
  /** The account the person is associated with. */
  account?: Maybe<Scalars['String']>;
  address?: Maybe<Stripe_Address>;
  address_kana?: Maybe<Stripe_LegalEntityJapanAddress>;
  address_kanji?: Maybe<Stripe_LegalEntityJapanAddress>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  dob?: Maybe<Stripe_LegalEntityDob>;
  /** The person's email address. */
  email?: Maybe<Scalars['String']>;
  /** The person's first name. */
  first_name?: Maybe<Scalars['String']>;
  /** The Kana variation of the person's first name (Japan only). */
  first_name_kana?: Maybe<Scalars['String']>;
  /** The Kanji variation of the person's first name (Japan only). */
  first_name_kanji?: Maybe<Scalars['String']>;
  /** A list of alternate names or aliases that the person is known by. */
  full_name_aliases?: Maybe<Array<Maybe<Scalars['String']>>>;
  future_requirements?: Maybe<Stripe_PersonFutureRequirements>;
  /** The person's gender (International regulations require either "male" or "female"). */
  gender?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Whether the person's `id_number` was provided. */
  id_number_provided?: Maybe<Scalars['Boolean']>;
  /** The person's last name. */
  last_name?: Maybe<Scalars['String']>;
  /** The Kana variation of the person's last name (Japan only). */
  last_name_kana?: Maybe<Scalars['String']>;
  /** The Kanji variation of the person's last name (Japan only). */
  last_name_kanji?: Maybe<Scalars['String']>;
  /** The person's maiden name. */
  maiden_name?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The country where the person is a national. */
  nationality?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PersonObjectProperty>;
  /** The person's phone number. */
  phone?: Maybe<Scalars['String']>;
  /** Indicates if the person or any of their representatives, family members, or other closely related persons, declares that they hold or have held an important public job or function, in any jurisdiction. */
  political_exposure?: Maybe<Stripe_PersonPoliticalExposureProperty>;
  relationship?: Maybe<Stripe_PersonRelationship>;
  requirements?: Maybe<Stripe_PersonRequirements>;
  /** Whether the last four digits of the person's Social Security number have been provided (U.S. only). */
  ssn_last_4_provided?: Maybe<Scalars['Boolean']>;
  verification?: Maybe<Stripe_LegalEntityPersonVerification>;
};

export type Stripe_LegalEntityDob = {
  __typename?: 'Stripe_LegalEntityDob';
  /** The day of birth, between 1 and 31. */
  day?: Maybe<Scalars['Int']>;
  /** The month of birth, between 1 and 12. */
  month?: Maybe<Scalars['Int']>;
  /** The four-digit year of birth. */
  year?: Maybe<Scalars['Int']>;
};

export type Stripe_PersonFutureRequirements = {
  __typename?: 'Stripe_PersonFutureRequirements';
  /** Fields that are due and can be satisfied by providing the corresponding alternative fields instead. */
  alternatives?: Maybe<Array<Maybe<Stripe_AccountRequirementsAlternative>>>;
  /** Fields that need to be collected to keep the person's account enabled. If not collected by the account's `future_requirements[current_deadline]`, these fields will transition to the main `requirements` hash, and may immediately become `past_due`, but the account may also be given a grace period depending on the account's enablement state prior to transition. */
  currently_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that are `currently_due` and need to be collected again because validation or verification failed. */
  errors?: Maybe<Array<Maybe<Stripe_AccountRequirementsError>>>;
  /** Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `future_requirements[current_deadline]` becomes set. */
  eventually_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that weren't collected by the account's `requirements.current_deadline`. These fields need to be collected to enable the person's account. New fields will never appear here; `future_requirements.past_due` will always be a subset of `requirements.past_due`. */
  past_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due` or `currently_due`. */
  pending_verification?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Stripe_PersonObjectProperty {
  Person = 'person'
}

export enum Stripe_PersonPoliticalExposureProperty {
  Existing = 'existing',
  None = 'none'
}

export type Stripe_PersonRelationship = {
  __typename?: 'Stripe_PersonRelationship';
  /** Whether the person is a director of the account's legal entity. Directors are typically members of the governing board of the company, or responsible for ensuring the company meets its regulatory obligations. */
  director?: Maybe<Scalars['Boolean']>;
  /** Whether the person has significant responsibility to control, manage, or direct the organization. */
  executive?: Maybe<Scalars['Boolean']>;
  /** Whether the person is an owner of the account’s legal entity. */
  owner?: Maybe<Scalars['Boolean']>;
  /** The percent owned by the person of the account's legal entity. */
  percent_ownership?: Maybe<Scalars['Float']>;
  /** Whether the person is authorized as the primary representative of the account. This is the person nominated by the business to provide information about themselves, and general information about the account. There can only be one representative at any given time. At the time the account is created, this person should be set to the person responsible for opening the account. */
  representative?: Maybe<Scalars['Boolean']>;
  /** The person's title (e.g., CEO, Support Engineer). */
  title?: Maybe<Scalars['String']>;
};

export type Stripe_PersonRequirements = {
  __typename?: 'Stripe_PersonRequirements';
  /** Fields that are due and can be satisfied by providing the corresponding alternative fields instead. */
  alternatives?: Maybe<Array<Maybe<Stripe_AccountRequirementsAlternative>>>;
  /** Fields that need to be collected to keep the person's account enabled. If not collected by the account's `current_deadline`, these fields appear in `past_due` as well, and the account is disabled. */
  currently_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that are `currently_due` and need to be collected again because validation or verification failed. */
  errors?: Maybe<Array<Maybe<Stripe_AccountRequirementsError>>>;
  /** Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and the account's `current_deadline` becomes set. */
  eventually_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that weren't collected by the account's `current_deadline`. These fields need to be collected to enable the person's account. */
  past_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. */
  pending_verification?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Stripe_LegalEntityPersonVerification = {
  __typename?: 'Stripe_LegalEntityPersonVerification';
  additional_document?: Maybe<Stripe_LegalEntityPersonVerificationDocument>;
  /** A user-displayable string describing the verification state for the person. For example, this may say "Provided identity information could not be verified". */
  details?: Maybe<Scalars['String']>;
  /** One of `document_address_mismatch`, `document_dob_mismatch`, `document_duplicate_type`, `document_id_number_mismatch`, `document_name_mismatch`, `document_nationality_mismatch`, `failed_keyed_identity`, or `failed_other`. A machine-readable code specifying the verification state for the person. */
  details_code?: Maybe<Scalars['String']>;
  document?: Maybe<Stripe_LegalEntityPersonVerificationDocument>;
  /** The state of verification for the person. Possible values are `unverified`, `pending`, or `verified`. */
  status?: Maybe<Scalars['String']>;
};

export type Stripe_LegalEntityPersonVerificationDocument = {
  __typename?: 'Stripe_LegalEntityPersonVerificationDocument';
  back?: Maybe<Stripe_LegalEntityPersonVerificationDocumentBackProperty>;
  /** A user-displayable string describing the verification state of this document. For example, if a document is uploaded and the picture is too fuzzy, this may say "Identity document is too unclear to read". */
  details?: Maybe<Scalars['String']>;
  /** One of `document_corrupt`, `document_country_not_supported`, `document_expired`, `document_failed_copy`, `document_failed_other`, `document_failed_test_mode`, `document_fraudulent`, `document_failed_greyscale`, `document_incomplete`, `document_invalid`, `document_manipulated`, `document_missing_back`, `document_missing_front`, `document_not_readable`, `document_not_uploaded`, `document_photo_mismatch`, `document_too_large`, or `document_type_not_supported`. A machine-readable code specifying the verification state for this document. */
  details_code?: Maybe<Scalars['String']>;
  front?: Maybe<Stripe_LegalEntityPersonVerificationDocumentFrontProperty>;
};

export type Stripe_LegalEntityPersonVerificationDocumentBackProperty = WrappedString | Stripe_File;

export type Stripe_LegalEntityPersonVerificationDocumentFrontProperty = WrappedString | Stripe_File;

export enum Stripe_AccountObjectProperty {
  Account = 'account'
}

export type Stripe_AccountRequirements = {
  __typename?: 'Stripe_AccountRequirements';
  /** Fields that are due and can be satisfied by providing the corresponding alternative fields instead. */
  alternatives?: Maybe<Array<Maybe<Stripe_AccountRequirementsAlternative>>>;
  /** Date by which the fields in `currently_due` must be collected to keep the account enabled. These fields may disable the account sooner if the next threshold is reached before they are collected. */
  current_deadline?: Maybe<Scalars['Int']>;
  /** Fields that need to be collected to keep the account enabled. If not collected by `current_deadline`, these fields appear in `past_due` as well, and the account is disabled. */
  currently_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** If the account is disabled, this string describes why. Can be `requirements.past_due`, `requirements.pending_verification`, `listed`, `platform_paused`, `rejected.fraud`, `rejected.listed`, `rejected.terms_of_service`, `rejected.other`, `under_review`, or `other`. */
  disabled_reason?: Maybe<Scalars['String']>;
  /** Fields that are `currently_due` and need to be collected again because validation or verification failed. */
  errors?: Maybe<Array<Maybe<Stripe_AccountRequirementsError>>>;
  /** Fields that need to be collected assuming all volume thresholds are reached. As they become required, they appear in `currently_due` as well, and `current_deadline` becomes set. */
  eventually_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that weren't collected by `current_deadline`. These fields need to be collected to enable the account. */
  past_due?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Fields that may become required depending on the results of verification or review. Will be an empty array unless an asynchronous verification is pending. If verification fails, these fields move to `eventually_due`, `currently_due`, or `past_due`. */
  pending_verification?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Stripe_AccountSettings = {
  __typename?: 'Stripe_AccountSettings';
  bacs_debit_payments?: Maybe<Stripe_AccountBacsDebitPaymentsSettings>;
  branding?: Maybe<Stripe_AccountBrandingSettings>;
  card_issuing?: Maybe<Stripe_AccountCardIssuingSettings>;
  card_payments?: Maybe<Stripe_AccountCardPaymentsSettings>;
  dashboard?: Maybe<Stripe_AccountDashboardSettings>;
  payments?: Maybe<Stripe_AccountPaymentsSettings>;
  payouts?: Maybe<Stripe_AccountPayoutSettings>;
  sepa_debit_payments?: Maybe<Stripe_AccountSepaDebitPaymentsSettings>;
};

export type Stripe_AccountBacsDebitPaymentsSettings = {
  __typename?: 'Stripe_AccountBacsDebitPaymentsSettings';
  /** The Bacs Direct Debit Display Name for this account. For payments made with Bacs Direct Debit, this will appear on the mandate, and as the statement descriptor. */
  display_name?: Maybe<Scalars['String']>;
};

export type Stripe_AccountBrandingSettings = {
  __typename?: 'Stripe_AccountBrandingSettings';
  icon?: Maybe<Stripe_AccountBrandingSettingsIconProperty>;
  logo?: Maybe<Stripe_AccountBrandingSettingsLogoProperty>;
  /** A CSS hex color value representing the primary branding color for this account */
  primary_color?: Maybe<Scalars['String']>;
  /** A CSS hex color value representing the secondary branding color for this account */
  secondary_color?: Maybe<Scalars['String']>;
};

export type Stripe_AccountBrandingSettingsIconProperty = WrappedString | Stripe_File;

export type Stripe_AccountBrandingSettingsLogoProperty = WrappedString | Stripe_File;

export type Stripe_AccountCardIssuingSettings = {
  __typename?: 'Stripe_AccountCardIssuingSettings';
  tos_acceptance?: Maybe<Stripe_CardIssuingAccountTermsOfService>;
};

export type Stripe_CardIssuingAccountTermsOfService = {
  __typename?: 'Stripe_CardIssuingAccountTermsOfService';
  /** The Unix timestamp marking when the account representative accepted the service agreement. */
  date?: Maybe<Scalars['Int']>;
  /** The IP address from which the account representative accepted the service agreement. */
  ip?: Maybe<Scalars['String']>;
  /** The user agent of the browser from which the account representative accepted the service agreement. */
  user_agent?: Maybe<Scalars['String']>;
};

export type Stripe_AccountCardPaymentsSettings = {
  __typename?: 'Stripe_AccountCardPaymentsSettings';
  decline_on?: Maybe<Stripe_AccountDeclineChargeOn>;
  /** The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. `statement_descriptor_prefix` is useful for maximizing descriptor space for the dynamic portion. */
  statement_descriptor_prefix?: Maybe<Scalars['String']>;
};

export type Stripe_AccountDeclineChargeOn = {
  __typename?: 'Stripe_AccountDeclineChargeOn';
  /** Whether Stripe automatically declines charges with an incorrect ZIP or postal code. This setting only applies when a ZIP or postal code is provided and they fail bank verification. */
  avs_failure?: Maybe<Scalars['Boolean']>;
  /** Whether Stripe automatically declines charges with an incorrect CVC. This setting only applies when a CVC is provided and it fails bank verification. */
  cvc_failure?: Maybe<Scalars['Boolean']>;
};

export type Stripe_AccountDashboardSettings = {
  __typename?: 'Stripe_AccountDashboardSettings';
  /** The display name for this account. This is used on the Stripe Dashboard to differentiate between accounts. */
  display_name?: Maybe<Scalars['String']>;
  /** The timezone used in the Stripe Dashboard for this account. A list of possible time zone values is maintained at the [IANA Time Zone Database](http://www.iana.org/time-zones). */
  timezone?: Maybe<Scalars['String']>;
};

export type Stripe_AccountPaymentsSettings = {
  __typename?: 'Stripe_AccountPaymentsSettings';
  /** The default text that appears on credit card statements when a charge is made. This field prefixes any dynamic `statement_descriptor` specified on the charge. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** The Kana variation of the default text that appears on credit card statements when a charge is made (Japan only) */
  statement_descriptor_kana?: Maybe<Scalars['String']>;
  /** The Kanji variation of the default text that appears on credit card statements when a charge is made (Japan only) */
  statement_descriptor_kanji?: Maybe<Scalars['String']>;
};

export type Stripe_AccountPayoutSettings = {
  __typename?: 'Stripe_AccountPayoutSettings';
  /** A Boolean indicating if Stripe should try to reclaim negative balances from an attached bank account. See our [Understanding Connect Account Balances](https://stripe.com/docs/connect/account-balances) documentation for details. Default value is `false` for Custom accounts, otherwise `true`. */
  debit_negative_balances?: Maybe<Scalars['Boolean']>;
  schedule?: Maybe<Stripe_TransferSchedule>;
  /** The text that appears on the bank account statement for payouts. If not set, this defaults to the platform's bank descriptor as set in the Dashboard. */
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_TransferSchedule = {
  __typename?: 'Stripe_TransferSchedule';
  /** The number of days charges for the account will be held before being paid out. */
  delay_days?: Maybe<Scalars['Int']>;
  /** How frequently funds will be paid out. One of `manual` (payouts only created via API call), `daily`, `weekly`, or `monthly`. */
  interval?: Maybe<Scalars['String']>;
  /** The day of the month funds will be paid out. Only shown if `interval` is monthly. Payouts scheduled between the 29th and 31st of the month are sent on the last day of shorter months. */
  monthly_anchor?: Maybe<Scalars['Int']>;
  /** The day of the week funds will be paid out, of the style 'monday', 'tuesday', etc. Only shown if `interval` is weekly. */
  weekly_anchor?: Maybe<Scalars['String']>;
};

export type Stripe_AccountSepaDebitPaymentsSettings = {
  __typename?: 'Stripe_AccountSepaDebitPaymentsSettings';
  /** SEPA creditor identifier that identifies the company making the payment. */
  creditor_id?: Maybe<Scalars['String']>;
};

export type Stripe_AccountTosAcceptance = {
  __typename?: 'Stripe_AccountTosAcceptance';
  /** The Unix timestamp marking when the account representative accepted their service agreement */
  date?: Maybe<Scalars['Int']>;
  /** The IP address from which the account representative accepted their service agreement */
  ip?: Maybe<Scalars['String']>;
  /** The user's service agreement type */
  service_agreement?: Maybe<Scalars['String']>;
  /** The user agent of the browser from which the account representative accepted their service agreement */
  user_agent?: Maybe<Scalars['String']>;
};

export enum Stripe_AccountTypeProperty {
  Custom = 'custom',
  Express = 'express',
  Standard = 'standard'
}

export enum Stripe_BankAccountAvailablePayoutMethodsProperty {
  Instant = 'instant',
  Standard = 'standard'
}

export enum Stripe_BankAccountObjectProperty {
  BankAccount = 'bank_account'
}

export type Stripe_BitcoinReceiver = {
  __typename?: 'Stripe_BitcoinReceiver';
  /** True when this bitcoin receiver has received a non-zero amount of bitcoin. */
  active?: Maybe<Scalars['Boolean']>;
  /** The amount of `currency` that you are collecting as payment. */
  amount?: Maybe<Scalars['Int']>;
  /** The amount of `currency` to which `bitcoin_amount_received` has been converted. */
  amount_received?: Maybe<Scalars['Int']>;
  /** The amount of bitcoin that the customer should send to fill the receiver. The `bitcoin_amount` is denominated in Satoshi: there are 10^8 Satoshi in one bitcoin. */
  bitcoin_amount?: Maybe<Scalars['Int']>;
  /** The amount of bitcoin that has been sent by the customer to this receiver. */
  bitcoin_amount_received?: Maybe<Scalars['Int']>;
  /** This URI can be displayed to the customer as a clickable link (to activate their bitcoin client) or as a QR code (for mobile wallets). */
  bitcoin_uri?: Maybe<Scalars['String']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which the bitcoin will be converted. */
  currency?: Maybe<Scalars['String']>;
  /** The customer ID of the bitcoin receiver. */
  customer?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** The customer's email address, set by the API call that creates the receiver. */
  email?: Maybe<Scalars['String']>;
  /** This flag is initially false and updates to true when the customer sends the `bitcoin_amount` to this receiver. */
  filled?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** A bitcoin address that is specific to this receiver. The customer can send bitcoin to this address to fill the receiver. */
  inbound_address?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_BitcoinReceiverObjectProperty>;
  /** The ID of the payment created from the receiver, if any. Hidden when viewing the receiver with a publishable key. */
  payment?: Maybe<Scalars['String']>;
  /** The refund address of this bitcoin receiver. */
  refund_address?: Maybe<Scalars['String']>;
  /** A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the receiver with a publishable key. */
  transactions?: Maybe<Stripe_BitcoinReceiverTransactionsProperty>;
  /** This receiver contains uncaptured funds that can be used for a payment or refunded. */
  uncaptured_funds?: Maybe<Scalars['Boolean']>;
  /** Indicate if this source is used for payment. */
  used_for_payment?: Maybe<Scalars['Boolean']>;
};

export enum Stripe_BitcoinReceiverObjectProperty {
  BitcoinReceiver = 'bitcoin_receiver'
}

/** A list with one entry for each time that the customer sent bitcoin to the receiver. Hidden when viewing the receiver with a publishable key. */
export type Stripe_BitcoinReceiverTransactionsProperty = {
  __typename?: 'Stripe_BitcoinReceiverTransactionsProperty';
  /** Details about each object. */
  data: Array<Stripe_BitcoinTransaction>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_BitcoinReceiverTransactionsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_BitcoinTransaction = {
  __typename?: 'Stripe_BitcoinTransaction';
  /** The amount of `currency` that the transaction was converted to in real-time. */
  amount?: Maybe<Scalars['Int']>;
  /** The amount of bitcoin contained in the transaction. */
  bitcoin_amount?: Maybe<Scalars['Int']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) to which this transaction was converted. */
  currency?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_BitcoinTransactionObjectProperty>;
  /** The receiver to which this transaction was sent. */
  receiver?: Maybe<Scalars['String']>;
};

export enum Stripe_BitcoinTransactionObjectProperty {
  BitcoinTransaction = 'bitcoin_transaction'
}

export enum Stripe_BitcoinReceiverTransactionsObjectProperty {
  List = 'list'
}

export type Stripe_Source = {
  __typename?: 'Stripe_Source';
  ach_credit_transfer?: Maybe<Stripe_SourceTypeAchCreditTransfer>;
  ach_debit?: Maybe<Stripe_SourceTypeAchDebit>;
  acss_debit?: Maybe<Stripe_SourceTypeAcssDebit>;
  alipay?: Maybe<Stripe_SourceTypeAlipay>;
  /** A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount associated with the source. This is the amount for which the source will be chargeable once ready. Required for `single_use` sources. */
  amount?: Maybe<Scalars['Int']>;
  au_becs_debit?: Maybe<Stripe_SourceTypeAuBecsDebit>;
  bancontact?: Maybe<Stripe_SourceTypeBancontact>;
  card?: Maybe<Stripe_SourceTypeCard>;
  card_present?: Maybe<Stripe_SourceTypeCardPresent>;
  /** The client secret of the source. Used for client-side retrieval using a publishable key. */
  client_secret?: Maybe<Scalars['String']>;
  code_verification?: Maybe<Stripe_SourceCodeVerificationFlow>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/currencies) associated with the source. This is the currency for which the source will be chargeable once ready. Required for `single_use` sources. */
  currency?: Maybe<Scalars['String']>;
  /** The ID of the customer to which this source is attached. This will not be present when the source has not been attached to a customer. */
  customer?: Maybe<Scalars['String']>;
  eps?: Maybe<Stripe_SourceTypeEps>;
  /** The authentication `flow` of the source. `flow` is one of `redirect`, `receiver`, `code_verification`, `none`. */
  flow?: Maybe<Scalars['String']>;
  giropay?: Maybe<Stripe_SourceTypeGiropay>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  ideal?: Maybe<Stripe_SourceTypeIdeal>;
  klarna?: Maybe<Stripe_SourceTypeKlarna>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  multibanco?: Maybe<Stripe_SourceTypeMultibanco>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SourceObjectProperty>;
  owner?: Maybe<Stripe_SourceOwner>;
  p24?: Maybe<Stripe_SourceTypeP24>;
  receiver?: Maybe<Stripe_SourceReceiverFlow>;
  redirect?: Maybe<Stripe_SourceRedirectFlow>;
  sepa_debit?: Maybe<Stripe_SourceTypeSepaDebit>;
  sofort?: Maybe<Stripe_SourceTypeSofort>;
  source_order?: Maybe<Stripe_SourceOrder>;
  /** Extra information about a source. This will appear on your customer's statement every time you charge the source. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** The status of the source, one of `canceled`, `chargeable`, `consumed`, `failed`, or `pending`. Only `chargeable` sources can be used to create a charge. */
  status?: Maybe<Scalars['String']>;
  three_d_secure?: Maybe<Stripe_SourceTypeThreeDSecure>;
  /** The `type` of the source. The `type` is a payment method, one of `ach_credit_transfer`, `ach_debit`, `alipay`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `multibanco`, `klarna`, `p24`, `sepa_debit`, `sofort`, `three_d_secure`, or `wechat`. An additional hash is included on the source with a name matching this value. It contains additional information specific to the [payment method](https://stripe.com/docs/sources) used. */
  type?: Maybe<Stripe_SourceTypeProperty>;
  /** Either `reusable` or `single_use`. Whether this source should be reusable or not. Some source types may or may not be reusable by construction, while others may leave the option at creation. If an incompatible value is passed, an error will be returned. */
  usage?: Maybe<Scalars['String']>;
  wechat?: Maybe<Stripe_SourceTypeWechat>;
};

export type Stripe_SourceTypeAchCreditTransfer = {
  __typename?: 'Stripe_SourceTypeAchCreditTransfer';
  account_number?: Maybe<Scalars['String']>;
  bank_name?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  refund_account_holder_name?: Maybe<Scalars['String']>;
  refund_account_holder_type?: Maybe<Scalars['String']>;
  refund_routing_number?: Maybe<Scalars['String']>;
  routing_number?: Maybe<Scalars['String']>;
  swift_code?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeAchDebit = {
  __typename?: 'Stripe_SourceTypeAchDebit';
  bank_name?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  routing_number?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeAcssDebit = {
  __typename?: 'Stripe_SourceTypeAcssDebit';
  bank_address_city?: Maybe<Scalars['String']>;
  bank_address_line_1?: Maybe<Scalars['String']>;
  bank_address_line_2?: Maybe<Scalars['String']>;
  bank_address_postal_code?: Maybe<Scalars['String']>;
  bank_name?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  routing_number?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeAlipay = {
  __typename?: 'Stripe_SourceTypeAlipay';
  data_string?: Maybe<Scalars['String']>;
  native_url?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeAuBecsDebit = {
  __typename?: 'Stripe_SourceTypeAuBecsDebit';
  bsb_number?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeBancontact = {
  __typename?: 'Stripe_SourceTypeBancontact';
  bank_code?: Maybe<Scalars['String']>;
  bank_name?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  iban_last4?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeCard = {
  __typename?: 'Stripe_SourceTypeCard';
  address_line1_check?: Maybe<Scalars['String']>;
  address_zip_check?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cvc_check?: Maybe<Scalars['String']>;
  dynamic_last4?: Maybe<Scalars['String']>;
  exp_month?: Maybe<Scalars['Int']>;
  exp_year?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  three_d_secure?: Maybe<Scalars['String']>;
  tokenization_method?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeCardPresent = {
  __typename?: 'Stripe_SourceTypeCardPresent';
  application_cryptogram?: Maybe<Scalars['String']>;
  application_preferred_name?: Maybe<Scalars['String']>;
  authorization_code?: Maybe<Scalars['String']>;
  authorization_response_code?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  cvm_type?: Maybe<Scalars['String']>;
  data_type?: Maybe<Scalars['String']>;
  dedicated_file_name?: Maybe<Scalars['String']>;
  emv_auth_data?: Maybe<Scalars['String']>;
  evidence_customer_signature?: Maybe<Scalars['String']>;
  evidence_transaction_certificate?: Maybe<Scalars['String']>;
  exp_month?: Maybe<Scalars['Int']>;
  exp_year?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  pos_device_id?: Maybe<Scalars['String']>;
  pos_entry_mode?: Maybe<Scalars['String']>;
  read_method?: Maybe<Scalars['String']>;
  reader?: Maybe<Scalars['String']>;
  terminal_verification_results?: Maybe<Scalars['String']>;
  transaction_status_information?: Maybe<Scalars['String']>;
};

export type Stripe_SourceCodeVerificationFlow = {
  __typename?: 'Stripe_SourceCodeVerificationFlow';
  /** The number of attempts remaining to authenticate the source object with a verification code. */
  attempts_remaining?: Maybe<Scalars['Int']>;
  /** The status of the code verification, either `pending` (awaiting verification, `attempts_remaining` should be greater than 0), `succeeded` (successful verification) or `failed` (failed verification, cannot be verified anymore as `attempts_remaining` should be 0). */
  status?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeEps = {
  __typename?: 'Stripe_SourceTypeEps';
  reference?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeGiropay = {
  __typename?: 'Stripe_SourceTypeGiropay';
  bank_code?: Maybe<Scalars['String']>;
  bank_name?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeIdeal = {
  __typename?: 'Stripe_SourceTypeIdeal';
  bank?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  iban_last4?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeKlarna = {
  __typename?: 'Stripe_SourceTypeKlarna';
  background_image_url?: Maybe<Scalars['String']>;
  client_token?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
  logo_url?: Maybe<Scalars['String']>;
  page_title?: Maybe<Scalars['String']>;
  pay_later_asset_urls_descriptive?: Maybe<Scalars['String']>;
  pay_later_asset_urls_standard?: Maybe<Scalars['String']>;
  pay_later_name?: Maybe<Scalars['String']>;
  pay_later_redirect_url?: Maybe<Scalars['String']>;
  pay_now_asset_urls_descriptive?: Maybe<Scalars['String']>;
  pay_now_asset_urls_standard?: Maybe<Scalars['String']>;
  pay_now_name?: Maybe<Scalars['String']>;
  pay_now_redirect_url?: Maybe<Scalars['String']>;
  pay_over_time_asset_urls_descriptive?: Maybe<Scalars['String']>;
  pay_over_time_asset_urls_standard?: Maybe<Scalars['String']>;
  pay_over_time_name?: Maybe<Scalars['String']>;
  pay_over_time_redirect_url?: Maybe<Scalars['String']>;
  payment_method_categories?: Maybe<Scalars['String']>;
  purchase_country?: Maybe<Scalars['String']>;
  purchase_type?: Maybe<Scalars['String']>;
  redirect_url?: Maybe<Scalars['String']>;
  shipping_delay?: Maybe<Scalars['Int']>;
  shipping_first_name?: Maybe<Scalars['String']>;
  shipping_last_name?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeMultibanco = {
  __typename?: 'Stripe_SourceTypeMultibanco';
  entity?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
  refund_account_holder_address_city?: Maybe<Scalars['String']>;
  refund_account_holder_address_country?: Maybe<Scalars['String']>;
  refund_account_holder_address_line1?: Maybe<Scalars['String']>;
  refund_account_holder_address_line2?: Maybe<Scalars['String']>;
  refund_account_holder_address_postal_code?: Maybe<Scalars['String']>;
  refund_account_holder_address_state?: Maybe<Scalars['String']>;
  refund_account_holder_name?: Maybe<Scalars['String']>;
  refund_iban?: Maybe<Scalars['String']>;
};

export enum Stripe_SourceObjectProperty {
  Source = 'source'
}

export type Stripe_SourceOwner = {
  __typename?: 'Stripe_SourceOwner';
  address?: Maybe<Stripe_Address>;
  /** Owner's email address. */
  email?: Maybe<Scalars['String']>;
  /** Owner's full name. */
  name?: Maybe<Scalars['String']>;
  /** Owner's phone number (including extension). */
  phone?: Maybe<Scalars['String']>;
  verified_address?: Maybe<Stripe_Address>;
  /** Verified owner's email address. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  verified_email?: Maybe<Scalars['String']>;
  /** Verified owner's full name. Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  verified_name?: Maybe<Scalars['String']>;
  /** Verified owner's phone number (including extension). Verified values are verified or provided by the payment method directly (and if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  verified_phone?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeP24 = {
  __typename?: 'Stripe_SourceTypeP24';
  reference?: Maybe<Scalars['String']>;
};

export type Stripe_SourceReceiverFlow = {
  __typename?: 'Stripe_SourceReceiverFlow';
  /** The address of the receiver source. This is the value that should be communicated to the customer to send their funds to. */
  address?: Maybe<Scalars['String']>;
  /** The total amount that was moved to your balance. This is almost always equal to the amount charged. In rare cases when customers deposit excess funds and we are unable to refund those, those funds get moved to your balance and show up in amount_charged as well. The amount charged is expressed in the source's currency. */
  amount_charged?: Maybe<Scalars['Int']>;
  /** The total amount received by the receiver source. `amount_received = amount_returned + amount_charged` should be true for consumed sources unless customers deposit excess funds. The amount received is expressed in the source's currency. */
  amount_received?: Maybe<Scalars['Int']>;
  /** The total amount that was returned to the customer. The amount returned is expressed in the source's currency. */
  amount_returned?: Maybe<Scalars['Int']>;
  /** Type of refund attribute method, one of `email`, `manual`, or `none`. */
  refund_attributes_method?: Maybe<Scalars['String']>;
  /** Type of refund attribute status, one of `missing`, `requested`, or `available`. */
  refund_attributes_status?: Maybe<Scalars['String']>;
};

export type Stripe_SourceRedirectFlow = {
  __typename?: 'Stripe_SourceRedirectFlow';
  /** The failure reason for the redirect, either `user_abort` (the customer aborted or dropped out of the redirect flow), `declined` (the authentication failed or the transaction was declined), or `processing_error` (the redirect failed due to a technical error). Present only if the redirect status is `failed`. */
  failure_reason?: Maybe<Scalars['String']>;
  /** The URL you provide to redirect the customer to after they authenticated their payment. */
  return_url?: Maybe<Scalars['String']>;
  /** The status of the redirect, either `pending` (ready to be used by your customer to authenticate the transaction), `succeeded` (succesful authentication, cannot be reused) or `not_required` (redirect should not be used) or `failed` (failed authentication, cannot be reused). */
  status?: Maybe<Scalars['String']>;
  /** The URL provided to you to redirect a customer to as part of a `redirect` authentication flow. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeSepaDebit = {
  __typename?: 'Stripe_SourceTypeSepaDebit';
  bank_code?: Maybe<Scalars['String']>;
  branch_code?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  fingerprint?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  mandate_reference?: Maybe<Scalars['String']>;
  mandate_url?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeSofort = {
  __typename?: 'Stripe_SourceTypeSofort';
  bank_code?: Maybe<Scalars['String']>;
  bank_name?: Maybe<Scalars['String']>;
  bic?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  iban_last4?: Maybe<Scalars['String']>;
  preferred_language?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_SourceOrder = {
  __typename?: 'Stripe_SourceOrder';
  /** A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** The email address of the customer placing the order. */
  email?: Maybe<Scalars['String']>;
  /** List of items constituting the order. */
  items?: Maybe<Array<Maybe<Stripe_SourceOrderItem>>>;
  shipping?: Maybe<Stripe_Shipping>;
};

export type Stripe_SourceOrderItem = {
  __typename?: 'Stripe_SourceOrderItem';
  /** The amount (price) for this order item. */
  amount?: Maybe<Scalars['Int']>;
  /** This currency of this order item. Required when `amount` is present. */
  currency?: Maybe<Scalars['String']>;
  /** Human-readable description for this order item. */
  description?: Maybe<Scalars['String']>;
  /** The ID of the associated object for this line item. Expandable if not null (e.g., expandable to a SKU). */
  parent?: Maybe<Scalars['String']>;
  /** The quantity of this order item. When type is `sku`, this is the number of instances of the SKU to be ordered. */
  quantity?: Maybe<Scalars['Int']>;
  /** The type of this order item. Must be `sku`, `tax`, or `shipping`. */
  type?: Maybe<Scalars['String']>;
};

export type Stripe_Shipping = {
  __typename?: 'Stripe_Shipping';
  address?: Maybe<Stripe_Address>;
  /** The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. */
  carrier?: Maybe<Scalars['String']>;
  /** Recipient name. */
  name?: Maybe<Scalars['String']>;
  /** Recipient phone (including extension). */
  phone?: Maybe<Scalars['String']>;
  /** The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas. */
  tracking_number?: Maybe<Scalars['String']>;
};

export type Stripe_SourceTypeThreeDSecure = {
  __typename?: 'Stripe_SourceTypeThreeDSecure';
  address_line1_check?: Maybe<Scalars['String']>;
  address_zip_check?: Maybe<Scalars['String']>;
  authenticated?: Maybe<Scalars['Boolean']>;
  brand?: Maybe<Scalars['String']>;
  card?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  cvc_check?: Maybe<Scalars['String']>;
  dynamic_last4?: Maybe<Scalars['String']>;
  exp_month?: Maybe<Scalars['Int']>;
  exp_year?: Maybe<Scalars['Int']>;
  fingerprint?: Maybe<Scalars['String']>;
  funding?: Maybe<Scalars['String']>;
  last4?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  three_d_secure?: Maybe<Scalars['String']>;
  tokenization_method?: Maybe<Scalars['String']>;
};

export enum Stripe_SourceTypeProperty {
  AchCreditTransfer = 'ach_credit_transfer',
  AchDebit = 'ach_debit',
  AcssDebit = 'acss_debit',
  Alipay = 'alipay',
  AuBecsDebit = 'au_becs_debit',
  Bancontact = 'bancontact',
  Card = 'card',
  CardPresent = 'card_present',
  Eps = 'eps',
  Giropay = 'giropay',
  Ideal = 'ideal',
  Klarna = 'klarna',
  Multibanco = 'multibanco',
  P24 = 'p24',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  ThreeDSecure = 'three_d_secure',
  Wechat = 'wechat'
}

export type Stripe_SourceTypeWechat = {
  __typename?: 'Stripe_SourceTypeWechat';
  prepay_id?: Maybe<Scalars['String']>;
  qr_code_url?: Maybe<Scalars['String']>;
  statement_descriptor?: Maybe<Scalars['String']>;
};

export type Stripe_Discount = {
  __typename?: 'Stripe_Discount';
  /** The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode. */
  checkout_session?: Maybe<Scalars['String']>;
  coupon?: Maybe<Stripe_Coupon>;
  customer?: Maybe<Scalars['String']>;
  /** If the coupon has a duration of `repeating`, the date that this discount will end. If the coupon has a duration of `once` or `forever`, this attribute will be null. */
  end?: Maybe<Scalars['Int']>;
  /** The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array. */
  id?: Maybe<Scalars['String']>;
  /** The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. */
  invoice?: Maybe<Scalars['String']>;
  /** The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. */
  invoice_item?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DiscountObjectProperty>;
  promotion_code?: Maybe<Stripe_DiscountPromotionCodeProperty>;
  /** Date that the coupon was applied. */
  start?: Maybe<Scalars['Int']>;
  /** The subscription that this coupon is applied to, if it is applied to a particular subscription. */
  subscription?: Maybe<Scalars['String']>;
};

export type Stripe_Coupon = {
  __typename?: 'Stripe_Coupon';
  /** Amount (in the `currency` specified) that will be taken off the subtotal of any invoices for this customer. */
  amount_off?: Maybe<Scalars['Int']>;
  applies_to?: Maybe<Stripe_CouponAppliesTo>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** If `amount_off` has been set, the three-letter [ISO code for the currency](https://stripe.com/docs/currencies) of the amount to take off. */
  currency?: Maybe<Scalars['String']>;
  /** One of `forever`, `once`, and `repeating`. Describes how long a customer who applies this coupon will get the discount. */
  duration?: Maybe<Stripe_CouponDurationProperty>;
  /** If `duration` is `repeating`, the number of months the coupon applies. Null if coupon `duration` is `forever` or `once`. */
  duration_in_months?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Maximum number of times this coupon can be redeemed, in total, across all customers, before it is no longer valid. */
  max_redemptions?: Maybe<Scalars['Int']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** Name of the coupon displayed to customers on for instance invoices or receipts. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_CouponObjectProperty>;
  /** Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a %s100 invoice %s50 instead. */
  percent_off?: Maybe<Scalars['Float']>;
  /** Date after which the coupon can no longer be redeemed. */
  redeem_by?: Maybe<Scalars['Int']>;
  /** Number of times this coupon has been applied to a customer. */
  times_redeemed?: Maybe<Scalars['Int']>;
  /** Taking account of the above properties, whether this coupon can still be applied to a customer. */
  valid?: Maybe<Scalars['Boolean']>;
};

export type Stripe_CouponAppliesTo = {
  __typename?: 'Stripe_CouponAppliesTo';
  /** A list of product IDs this coupon applies to */
  products?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum Stripe_CouponDurationProperty {
  Forever = 'forever',
  Once = 'once',
  Repeating = 'repeating'
}

export enum Stripe_CouponObjectProperty {
  Coupon = 'coupon'
}

export enum Stripe_DiscountObjectProperty {
  Discount = 'discount'
}

export type Stripe_DiscountPromotionCodeProperty = WrappedString | Stripe_PromotionCode;

export type Stripe_PromotionCode = {
  __typename?: 'Stripe_PromotionCode';
  /** Whether the promotion code is currently active. A promotion code is only active if the coupon is also valid. */
  active?: Maybe<Scalars['Boolean']>;
  /** The customer-facing code. Regardless of case, this code must be unique across all active promotion codes for each customer. */
  code?: Maybe<Scalars['String']>;
  coupon?: Maybe<Stripe_Coupon>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  customer?: Maybe<Stripe_PromotionCodeCustomerProperty>;
  /** Date at which the promotion code can no longer be redeemed. */
  expires_at?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Maximum number of times this promotion code can be redeemed. */
  max_redemptions?: Maybe<Scalars['Int']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PromotionCodeObjectProperty>;
  restrictions?: Maybe<Stripe_PromotionCodesResourceRestrictions>;
  /** Number of times this promotion code has been used. */
  times_redeemed?: Maybe<Scalars['Int']>;
};

export type Stripe_PromotionCodeCustomerProperty = WrappedString | Stripe_Customer | Stripe_DeletedCustomer;

export type Stripe_DeletedCustomer = {
  __typename?: 'Stripe_DeletedCustomer';
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedCustomerObjectProperty>;
};

export enum Stripe_DeletedCustomerObjectProperty {
  Customer = 'customer'
}

export enum Stripe_PromotionCodeObjectProperty {
  PromotionCode = 'promotion_code'
}

export type Stripe_PromotionCodesResourceRestrictions = {
  __typename?: 'Stripe_PromotionCodesResourceRestrictions';
  /** A Boolean indicating if the Promotion Code should only be redeemed for Customers without any successful payments or invoices */
  first_time_transaction?: Maybe<Scalars['Boolean']>;
  /** Minimum amount required to redeem this Promotion Code into a Coupon (e.g., a purchase must be $100 or more to work). */
  minimum_amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO code](https://stripe.com/docs/currencies) for minimum_amount */
  minimum_amount_currency?: Maybe<Scalars['String']>;
};

export type Stripe_InvoiceSettingCustomerSetting = {
  __typename?: 'Stripe_InvoiceSettingCustomerSetting';
  /** Default custom fields to be displayed on invoices for this customer. */
  custom_fields?: Maybe<Array<Maybe<Stripe_InvoiceSettingCustomField>>>;
  default_payment_method?: Maybe<Stripe_InvoiceSettingCustomerSettingDefaultPaymentMethodProperty>;
  /** Default footer to be displayed on invoices for this customer. */
  footer?: Maybe<Scalars['String']>;
};

export type Stripe_InvoiceSettingCustomField = {
  __typename?: 'Stripe_InvoiceSettingCustomField';
  /** The name of the custom field. */
  name?: Maybe<Scalars['String']>;
  /** The value of the custom field. */
  value?: Maybe<Scalars['String']>;
};

export type Stripe_InvoiceSettingCustomerSettingDefaultPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_PaymentMethod = {
  __typename?: 'Stripe_PaymentMethod';
  acss_debit?: Maybe<Stripe_PaymentMethodAcssDebit>;
  afterpay_clearpay?: Maybe<Stripe_PaymentMethodAfterpayClearpay>;
  alipay?: Maybe<Stripe_PaymentFlowsPrivatePaymentMethodsAlipay>;
  au_becs_debit?: Maybe<Stripe_PaymentMethodAuBecsDebit>;
  bacs_debit?: Maybe<Stripe_PaymentMethodBacsDebit>;
  bancontact?: Maybe<Stripe_PaymentMethodBancontact>;
  billing_details?: Maybe<Stripe_BillingDetails>;
  boleto?: Maybe<Stripe_PaymentMethodBoleto>;
  card?: Maybe<Stripe_PaymentMethodCard>;
  card_present?: Maybe<Stripe_PaymentMethodCardPresent>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  customer?: Maybe<Stripe_PaymentMethodCustomerProperty>;
  customer_balance?: Maybe<Stripe_PaymentMethodCustomerBalance>;
  eps?: Maybe<Stripe_PaymentMethodEps>;
  fpx?: Maybe<Stripe_PaymentMethodFpx>;
  giropay?: Maybe<Stripe_PaymentMethodGiropay>;
  grabpay?: Maybe<Stripe_PaymentMethodGrabpay>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  ideal?: Maybe<Stripe_PaymentMethodIdeal>;
  interac_present?: Maybe<Stripe_PaymentMethodInteracPresent>;
  klarna?: Maybe<Stripe_PaymentMethodKlarna>;
  konbini?: Maybe<Stripe_PaymentMethodKonbini>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PaymentMethodObjectProperty>;
  oxxo?: Maybe<Stripe_PaymentMethodOxxo>;
  p24?: Maybe<Stripe_PaymentMethodP24>;
  paynow?: Maybe<Stripe_PaymentMethodPaynow>;
  sepa_debit?: Maybe<Stripe_PaymentMethodSepaDebit>;
  sofort?: Maybe<Stripe_PaymentMethodSofort>;
  /** The type of the PaymentMethod. An additional hash is included on the PaymentMethod with a name matching this value. It contains additional information specific to the PaymentMethod type. */
  type?: Maybe<Stripe_PaymentMethodTypeProperty>;
  us_bank_account?: Maybe<Stripe_PaymentMethodUsBankAccount>;
  wechat_pay?: Maybe<Stripe_PaymentMethodWechatPay>;
};

export type Stripe_PaymentMethodAcssDebit = {
  __typename?: 'Stripe_PaymentMethodAcssDebit';
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Institution number of the bank account. */
  institution_number?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** Transit number of the bank account. */
  transit_number?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodAfterpayClearpay = {
  __typename?: 'Stripe_PaymentMethodAfterpayClearpay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentFlowsPrivatePaymentMethodsAlipay = {
  __typename?: 'Stripe_PaymentFlowsPrivatePaymentMethodsAlipay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodAuBecsDebit = {
  __typename?: 'Stripe_PaymentMethodAuBecsDebit';
  /** Six-digit number identifying bank and branch associated with this bank account. */
  bsb_number?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodBacsDebit = {
  __typename?: 'Stripe_PaymentMethodBacsDebit';
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** Sort code of the bank account. (e.g., `10-20-30`) */
  sort_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodBancontact = {
  __typename?: 'Stripe_PaymentMethodBancontact';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_BillingDetails = {
  __typename?: 'Stripe_BillingDetails';
  address?: Maybe<Stripe_Address>;
  /** Email address. */
  email?: Maybe<Scalars['String']>;
  /** Full name. */
  name?: Maybe<Scalars['String']>;
  /** Billing phone number (including extension). */
  phone?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodBoleto = {
  __typename?: 'Stripe_PaymentMethodBoleto';
  /** Uniquely identifies the customer tax id (CNPJ or CPF) */
  tax_id?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodCard = {
  __typename?: 'Stripe_PaymentMethodCard';
  /** Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
  brand?: Maybe<Scalars['String']>;
  checks?: Maybe<Stripe_PaymentMethodCardChecks>;
  /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
  country?: Maybe<Scalars['String']>;
  /** Two-digit number representing the card's expiration month. */
  exp_month?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card's expiration year. */
  exp_year?: Maybe<Scalars['Int']>;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
   */
  fingerprint?: Maybe<Scalars['String']>;
  /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
  funding?: Maybe<Scalars['String']>;
  generated_from?: Maybe<Stripe_PaymentMethodCardGeneratedCard>;
  /** The last four digits of the card. */
  last4?: Maybe<Scalars['String']>;
  networks?: Maybe<Stripe_Networks>;
  three_d_secure_usage?: Maybe<Stripe_ThreeDSecureUsage>;
  wallet?: Maybe<Stripe_PaymentMethodCardWallet>;
};

export type Stripe_PaymentMethodCardChecks = {
  __typename?: 'Stripe_PaymentMethodCardChecks';
  /** If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`. */
  address_line1_check?: Maybe<Scalars['String']>;
  /** If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`. */
  address_postal_code_check?: Maybe<Scalars['String']>;
  /** If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`. */
  cvc_check?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodCardGeneratedCard = {
  __typename?: 'Stripe_PaymentMethodCardGeneratedCard';
  /** The charge that created this object. */
  charge?: Maybe<Scalars['String']>;
  payment_method_details?: Maybe<Stripe_CardGeneratedFromPaymentMethodDetails>;
  setup_attempt?: Maybe<Stripe_PaymentMethodCardGeneratedCardSetupAttemptProperty>;
};

export type Stripe_CardGeneratedFromPaymentMethodDetails = {
  __typename?: 'Stripe_CardGeneratedFromPaymentMethodDetails';
  card_present?: Maybe<Stripe_PaymentMethodDetailsCardPresent>;
  /** The type of payment method transaction-specific details from the transaction that generated this `card` payment method. Always `card_present`. */
  type?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsCardPresent = {
  __typename?: 'Stripe_PaymentMethodDetailsCardPresent';
  /** The authorized amount */
  amount_authorized?: Maybe<Scalars['Int']>;
  /** Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
  brand?: Maybe<Scalars['String']>;
  /** When using manual capture, a future timestamp after which the charge will be automatically refunded if uncaptured. */
  capture_before?: Maybe<Scalars['Int']>;
  /** The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay. */
  cardholder_name?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
  country?: Maybe<Scalars['String']>;
  /** Authorization response cryptogram. */
  emv_auth_data?: Maybe<Scalars['String']>;
  /** Two-digit number representing the card's expiration month. */
  exp_month?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card's expiration year. */
  exp_year?: Maybe<Scalars['Int']>;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
   */
  fingerprint?: Maybe<Scalars['String']>;
  /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
  funding?: Maybe<Scalars['String']>;
  /** ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod. */
  generated_card?: Maybe<Scalars['String']>;
  /** Whether this [PaymentIntent](https://stripe.com/docs/api/payment_intents) is eligible for incremental authorizations. Request support using [request_incremental_authorization_support](https://stripe.com/docs/api/payment_intents/create#create_payment_intent-payment_method_options-card_present-request_incremental_authorization_support). */
  incremental_authorization_supported?: Maybe<Scalars['Boolean']>;
  /** The last four digits of the card. */
  last4?: Maybe<Scalars['String']>;
  /** Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
  network?: Maybe<Scalars['String']>;
  /** Defines whether the authorized amount can be over-captured or not */
  overcapture_supported?: Maybe<Scalars['Boolean']>;
  /** How card details were read in this transaction. */
  read_method?: Maybe<Stripe_PaymentMethodDetailsCardPresentReadMethodProperty>;
  receipt?: Maybe<Stripe_PaymentMethodDetailsCardPresentReceipt>;
};

export enum Stripe_PaymentMethodDetailsCardPresentReadMethodProperty {
  ContactEmv = 'contact_emv',
  ContactlessEmv = 'contactless_emv',
  ContactlessMagstripeMode = 'contactless_magstripe_mode',
  MagneticStripeFallback = 'magnetic_stripe_fallback',
  MagneticStripeTrack2 = 'magnetic_stripe_track2'
}

export type Stripe_PaymentMethodDetailsCardPresentReceipt = {
  __typename?: 'Stripe_PaymentMethodDetailsCardPresentReceipt';
  /** The type of account being debited or credited */
  account_type?: Maybe<Stripe_PaymentMethodDetailsCardPresentReceiptAccountTypeProperty>;
  /** EMV tag 9F26, cryptogram generated by the integrated circuit chip. */
  application_cryptogram?: Maybe<Scalars['String']>;
  /** Mnenomic of the Application Identifier. */
  application_preferred_name?: Maybe<Scalars['String']>;
  /** Identifier for this transaction. */
  authorization_code?: Maybe<Scalars['String']>;
  /** EMV tag 8A. A code returned by the card issuer. */
  authorization_response_code?: Maybe<Scalars['String']>;
  /** How the cardholder verified ownership of the card. */
  cardholder_verification_method?: Maybe<Scalars['String']>;
  /** EMV tag 84. Similar to the application identifier stored on the integrated circuit chip. */
  dedicated_file_name?: Maybe<Scalars['String']>;
  /** The outcome of a series of EMV functions performed by the card reader. */
  terminal_verification_results?: Maybe<Scalars['String']>;
  /** An indication of various EMV functions performed during the transaction. */
  transaction_status_information?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsCardPresentReceiptAccountTypeProperty {
  Checking = 'checking',
  Credit = 'credit',
  Prepaid = 'prepaid',
  Unknown = 'unknown'
}

export type Stripe_PaymentMethodCardGeneratedCardSetupAttemptProperty = WrappedString | Stripe_SetupAttempt;

export type Stripe_SetupAttempt = {
  __typename?: 'Stripe_SetupAttempt';
  application?: Maybe<Stripe_SetupAttemptApplicationProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  customer?: Maybe<Stripe_SetupAttemptCustomerProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SetupAttemptObjectProperty>;
  on_behalf_of?: Maybe<Stripe_SetupAttemptOnBehalfOfProperty>;
  payment_method?: Maybe<Stripe_SetupAttemptPaymentMethodProperty>;
  payment_method_details?: Maybe<Stripe_SetupAttemptPaymentMethodDetails>;
  setup_error?: Maybe<Stripe_ApiErrors>;
  setup_intent?: Maybe<Stripe_SetupAttemptSetupIntentProperty>;
  /** Status of this SetupAttempt, one of `requires_confirmation`, `requires_action`, `processing`, `succeeded`, `failed`, or `abandoned`. */
  status?: Maybe<Scalars['String']>;
  /** The value of [usage](https://stripe.com/docs/api/setup_intents/object#setup_intent_object-usage) on the SetupIntent at the time of this confirmation, one of `off_session` or `on_session`. */
  usage?: Maybe<Scalars['String']>;
};

export type Stripe_SetupAttemptApplicationProperty = WrappedString | Stripe_Application;

export type Stripe_Application = {
  __typename?: 'Stripe_Application';
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The name of the application. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ApplicationObjectProperty>;
};

export enum Stripe_ApplicationObjectProperty {
  Application = 'application'
}

export type Stripe_SetupAttemptCustomerProperty = WrappedString | Stripe_Customer | Stripe_DeletedCustomer;

export enum Stripe_SetupAttemptObjectProperty {
  SetupAttempt = 'setup_attempt'
}

export type Stripe_SetupAttemptOnBehalfOfProperty = WrappedString | Stripe_Account;

export type Stripe_SetupAttemptPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SetupAttemptPaymentMethodDetails = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetails';
  acss_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsAcssDebit>;
  au_becs_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsAuBecsDebit>;
  bacs_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsBacsDebit>;
  bancontact?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsBancontact>;
  boleto?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsBoleto>;
  card?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsCard>;
  card_present?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsCardPresent>;
  ideal?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsIdeal>;
  sepa_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsSepaDebit>;
  sofort?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsSofort>;
  /** The type of the payment method used in the SetupIntent (e.g., `card`). An additional hash is included on `payment_method_details` with a name matching this value. It contains confirmation-specific information for the payment method. */
  type?: Maybe<Scalars['String']>;
  us_bank_account?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsUsBankAccount>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsAcssDebit = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsAcssDebit';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsAuBecsDebit = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsAuBecsDebit';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsBacsDebit = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsBacsDebit';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsBancontact = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsBancontact';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Bank Identifier Code of the bank associated with the bank account. */
  bic?: Maybe<Scalars['String']>;
  generated_sepa_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitProperty>;
  generated_sepa_debit_mandate?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandateProperty>;
  /** Last four characters of the IBAN. */
  iban_last4?: Maybe<Scalars['String']>;
  /**
   * Preferred language of the Bancontact authorization page that the customer is redirected to.
   * Can be one of `en`, `de`, `fr`, or `nl`
   */
  preferred_language?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsBancontactPreferredLanguageProperty>;
  /**
   * Owner's verified full name. Values are verified or provided by Bancontact directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SetupAttemptPaymentMethodDetailsBancontactGeneratedSepaDebitMandateProperty = WrappedString | Stripe_Mandate;

export type Stripe_Mandate = {
  __typename?: 'Stripe_Mandate';
  customer_acceptance?: Maybe<Stripe_CustomerAcceptance>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  multi_use?: Maybe<Stripe_MandateMultiUse>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_MandateObjectProperty>;
  payment_method?: Maybe<Stripe_MandatePaymentMethodProperty>;
  payment_method_details?: Maybe<Stripe_MandatePaymentMethodDetails>;
  single_use?: Maybe<Stripe_MandateSingleUse>;
  /** The status of the mandate, which indicates whether it can be used to initiate a payment. */
  status?: Maybe<Stripe_MandateStatusProperty>;
  /** The type of the mandate. */
  type?: Maybe<Stripe_MandateTypeProperty>;
};

export type Stripe_CustomerAcceptance = {
  __typename?: 'Stripe_CustomerAcceptance';
  /** The time at which the customer accepted the Mandate. */
  accepted_at?: Maybe<Scalars['Int']>;
  offline?: Maybe<Stripe_OfflineAcceptance>;
  online?: Maybe<Stripe_OnlineAcceptance>;
  /** The type of customer acceptance information included with the Mandate. One of `online` or `offline`. */
  type?: Maybe<Stripe_CustomerAcceptanceTypeProperty>;
};

export type Stripe_OfflineAcceptance = {
  __typename?: 'Stripe_OfflineAcceptance';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_OnlineAcceptance = {
  __typename?: 'Stripe_OnlineAcceptance';
  /** The IP address from which the Mandate was accepted by the customer. */
  ip_address?: Maybe<Scalars['String']>;
  /** The user agent of the browser from which the Mandate was accepted by the customer. */
  user_agent?: Maybe<Scalars['String']>;
};

export enum Stripe_CustomerAcceptanceTypeProperty {
  Offline = 'offline',
  Online = 'online'
}

export type Stripe_MandateMultiUse = {
  __typename?: 'Stripe_MandateMultiUse';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_MandateObjectProperty {
  Mandate = 'mandate'
}

export type Stripe_MandatePaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_MandatePaymentMethodDetails = {
  __typename?: 'Stripe_MandatePaymentMethodDetails';
  acss_debit?: Maybe<Stripe_MandateAcssDebit>;
  au_becs_debit?: Maybe<Stripe_MandateAuBecsDebit>;
  bacs_debit?: Maybe<Stripe_MandateBacsDebit>;
  card?: Maybe<Stripe_CardMandatePaymentMethodDetails>;
  sepa_debit?: Maybe<Stripe_MandateSepaDebit>;
  /** The type of the payment method associated with this mandate. An additional hash is included on `payment_method_details` with a name matching this value. It contains mandate information specific to the payment method. */
  type?: Maybe<Scalars['String']>;
  us_bank_account?: Maybe<Stripe_MandateUsBankAccount>;
};

export type Stripe_MandateAcssDebit = {
  __typename?: 'Stripe_MandateAcssDebit';
  /** List of Stripe products where this mandate can be selected automatically. */
  default_for?: Maybe<Array<Maybe<Stripe_MandateAcssDebitDefaultForProperty>>>;
  /** Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'. */
  interval_description?: Maybe<Scalars['String']>;
  /** Payment schedule for the mandate. */
  payment_schedule?: Maybe<Stripe_MandateAcssDebitPaymentScheduleProperty>;
  /** Transaction type of the mandate. */
  transaction_type?: Maybe<Stripe_MandateAcssDebitTransactionTypeProperty>;
};

export enum Stripe_MandateAcssDebitDefaultForProperty {
  Invoice = 'invoice',
  Subscription = 'subscription'
}

export enum Stripe_MandateAcssDebitPaymentScheduleProperty {
  Combined = 'combined',
  Interval = 'interval',
  Sporadic = 'sporadic'
}

export enum Stripe_MandateAcssDebitTransactionTypeProperty {
  Business = 'business',
  Personal = 'personal'
}

export type Stripe_MandateAuBecsDebit = {
  __typename?: 'Stripe_MandateAuBecsDebit';
  /** The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_MandateBacsDebit = {
  __typename?: 'Stripe_MandateBacsDebit';
  /** The status of the mandate on the Bacs network. Can be one of `pending`, `revoked`, `refused`, or `accepted`. */
  network_status?: Maybe<Stripe_MandateBacsDebitNetworkStatusProperty>;
  /** The unique reference identifying the mandate on the Bacs network. */
  reference?: Maybe<Scalars['String']>;
  /** The URL that will contain the mandate that the customer has signed. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_MandateBacsDebitNetworkStatusProperty {
  Accepted = 'accepted',
  Pending = 'pending',
  Refused = 'refused',
  Revoked = 'revoked'
}

export type Stripe_CardMandatePaymentMethodDetails = {
  __typename?: 'Stripe_CardMandatePaymentMethodDetails';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_MandateSepaDebit = {
  __typename?: 'Stripe_MandateSepaDebit';
  /** The unique reference of the mandate. */
  reference?: Maybe<Scalars['String']>;
  /** The URL of the mandate. This URL generally contains sensitive information about the customer and should be shared with them exclusively. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_MandateUsBankAccount = {
  __typename?: 'Stripe_MandateUsBankAccount';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_MandateSingleUse = {
  __typename?: 'Stripe_MandateSingleUse';
  /** On a single use mandate, the amount of the payment. */
  amount?: Maybe<Scalars['Int']>;
  /** On a single use mandate, the currency of the payment. */
  currency?: Maybe<Scalars['String']>;
};

export enum Stripe_MandateStatusProperty {
  Active = 'active',
  Inactive = 'inactive',
  Pending = 'pending'
}

export enum Stripe_MandateTypeProperty {
  MultiUse = 'multi_use',
  SingleUse = 'single_use'
}

export enum Stripe_SetupAttemptPaymentMethodDetailsBancontactPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Fr = 'fr',
  Nl = 'nl'
}

export type Stripe_SetupAttemptPaymentMethodDetailsBoleto = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsBoleto';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsCard = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsCard';
  three_d_secure?: Maybe<Stripe_ThreeDSecureDetails>;
};

export type Stripe_ThreeDSecureDetails = {
  __typename?: 'Stripe_ThreeDSecureDetails';
  /**
   * For authenticated transactions: how the customer was authenticated by
   * the issuing bank.
   */
  authentication_flow?: Maybe<Stripe_ThreeDSecureDetailsAuthenticationFlowProperty>;
  /** Indicates the outcome of 3D Secure authentication. */
  result?: Maybe<Stripe_ThreeDSecureDetailsResultProperty>;
  /**
   * Additional information about why 3D Secure succeeded or failed based
   * on the `result`.
   */
  result_reason?: Maybe<Stripe_ThreeDSecureDetailsResultReasonProperty>;
  /** The version of 3D Secure that was used. */
  version?: Maybe<Stripe_ThreeDSecureDetailsVersionProperty>;
};

export enum Stripe_ThreeDSecureDetailsAuthenticationFlowProperty {
  Challenge = 'challenge',
  Frictionless = 'frictionless'
}

export enum Stripe_ThreeDSecureDetailsResultProperty {
  AttemptAcknowledged = 'attempt_acknowledged',
  Authenticated = 'authenticated',
  Failed = 'failed',
  NotSupported = 'not_supported',
  ProcessingError = 'processing_error'
}

export enum Stripe_ThreeDSecureDetailsResultReasonProperty {
  Abandoned = 'abandoned',
  Bypassed = 'bypassed',
  Canceled = 'canceled',
  CardNotEnrolled = 'card_not_enrolled',
  NetworkNotSupported = 'network_not_supported',
  ProtocolError = 'protocol_error',
  Rejected = 'rejected'
}

export enum Stripe_ThreeDSecureDetailsVersionProperty {
  Onedot0Dot2 = 'ONEDOT0DOT2',
  Twodot1Dot0 = 'TWODOT1DOT0',
  Twodot2Dot0 = 'TWODOT2DOT0'
}

export type Stripe_SetupAttemptPaymentMethodDetailsCardPresent = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsCardPresent';
  generated_card?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsCardPresentGeneratedCardProperty>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsCardPresentGeneratedCardProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SetupAttemptPaymentMethodDetailsIdeal = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsIdeal';
  /** The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, or `van_lanschot`. */
  bank?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsIdealBankProperty>;
  /** The Bank Identifier Code of the customer's bank. */
  bic?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsIdealBicProperty>;
  generated_sepa_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsIdealGeneratedSepaDebitProperty>;
  generated_sepa_debit_mandate?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsIdealGeneratedSepaDebitMandateProperty>;
  /** Last four characters of the IBAN. */
  iban_last4?: Maybe<Scalars['String']>;
  /**
   * Owner's verified full name. Values are verified or provided by iDEAL directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export enum Stripe_SetupAttemptPaymentMethodDetailsIdealBankProperty {
  AbnAmro = 'abn_amro',
  AsnBank = 'asn_bank',
  Bunq = 'bunq',
  Handelsbanken = 'handelsbanken',
  Ing = 'ing',
  Knab = 'knab',
  Moneyou = 'moneyou',
  Rabobank = 'rabobank',
  Regiobank = 'regiobank',
  Revolut = 'revolut',
  SnsBank = 'sns_bank',
  TriodosBank = 'triodos_bank',
  VanLanschot = 'van_lanschot'
}

export enum Stripe_SetupAttemptPaymentMethodDetailsIdealBicProperty {
  Abnanl2A = 'ABNANL2A',
  Asnbnl21 = 'ASNBNL21',
  Bunqnl2A = 'BUNQNL2A',
  Fvlbnl22 = 'FVLBNL22',
  Handnl2A = 'HANDNL2A',
  Ingbnl2A = 'INGBNL2A',
  Knabnl2H = 'KNABNL2H',
  Moyonl21 = 'MOYONL21',
  Rabonl2U = 'RABONL2U',
  Rbrbnl21 = 'RBRBNL21',
  Revolt21 = 'REVOLT21',
  Snsbnl2A = 'SNSBNL2A',
  Trionl2U = 'TRIONL2U'
}

export type Stripe_SetupAttemptPaymentMethodDetailsIdealGeneratedSepaDebitProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SetupAttemptPaymentMethodDetailsIdealGeneratedSepaDebitMandateProperty = WrappedString | Stripe_Mandate;

export type Stripe_SetupAttemptPaymentMethodDetailsSepaDebit = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsSepaDebit';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsSofort = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsSofort';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Bank Identifier Code of the bank associated with the bank account. */
  bic?: Maybe<Scalars['String']>;
  generated_sepa_debit?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsSofortGeneratedSepaDebitProperty>;
  generated_sepa_debit_mandate?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsSofortGeneratedSepaDebitMandateProperty>;
  /** Last four characters of the IBAN. */
  iban_last4?: Maybe<Scalars['String']>;
  /**
   * Preferred language of the Sofort authorization page that the customer is redirected to.
   * Can be one of `en`, `de`, `fr`, or `nl`
   */
  preferred_language?: Maybe<Stripe_SetupAttemptPaymentMethodDetailsSofortPreferredLanguageProperty>;
  /**
   * Owner's verified full name. Values are verified or provided by Sofort directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export type Stripe_SetupAttemptPaymentMethodDetailsSofortGeneratedSepaDebitProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SetupAttemptPaymentMethodDetailsSofortGeneratedSepaDebitMandateProperty = WrappedString | Stripe_Mandate;

export enum Stripe_SetupAttemptPaymentMethodDetailsSofortPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Fr = 'fr',
  Nl = 'nl'
}

export type Stripe_SetupAttemptPaymentMethodDetailsUsBankAccount = {
  __typename?: 'Stripe_SetupAttemptPaymentMethodDetailsUsBankAccount';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_ApiErrors = {
  __typename?: 'Stripe_ApiErrors';
  /** For card errors, the ID of the failed charge. */
  charge?: Maybe<Scalars['String']>;
  /** For some errors that could be handled programmatically, a short string indicating the [error code](https://stripe.com/docs/error-codes) reported. */
  code?: Maybe<Scalars['String']>;
  /** For card errors resulting from a card issuer decline, a short string indicating the [card issuer's reason for the decline](https://stripe.com/docs/declines#issuer-declines) if they provide one. */
  decline_code?: Maybe<Scalars['String']>;
  /** A URL to more information about the [error code](https://stripe.com/docs/error-codes) reported. */
  doc_url?: Maybe<Scalars['String']>;
  /** A human-readable message providing more details about the error. For card errors, these messages can be shown to your users. */
  message?: Maybe<Scalars['String']>;
  /** If the error is parameter-specific, the parameter related to the error. For example, you can use this to display a message near the correct form field. */
  param?: Maybe<Scalars['String']>;
  payment_intent?: Maybe<Stripe_PaymentIntent>;
  payment_method?: Maybe<Stripe_PaymentMethod>;
  /** If the error is specific to the type of payment method, the payment method type that had a problem. This field is only populated for invoice-related errors. */
  payment_method_type?: Maybe<Scalars['String']>;
  setup_intent?: Maybe<Stripe_SetupIntent>;
  source?: Maybe<Stripe_ApiErrorsSourceProperty>;
  /** The type of error returned. One of `api_error`, `card_error`, `idempotency_error`, or `invalid_request_error` */
  type?: Maybe<Stripe_ApiErrorsTypeProperty>;
};

export type Stripe_PaymentIntent = TsSearchable & {
  __typename?: 'Stripe_PaymentIntent';
  /** Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99). */
  amount?: Maybe<Scalars['Int']>;
  /** Amount that can be captured from this PaymentIntent. */
  amount_capturable?: Maybe<Scalars['Int']>;
  amount_details?: Maybe<Stripe_PaymentFlowsAmountDetails>;
  /** Amount that was collected by this PaymentIntent. */
  amount_received?: Maybe<Scalars['Int']>;
  application?: Maybe<Stripe_PaymentIntentApplicationProperty>;
  /** The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. The amount of the application fee collected will be capped at the total payment amount. For more information, see the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts). */
  application_fee_amount?: Maybe<Scalars['Int']>;
  automatic_payment_methods?: Maybe<Stripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntent>;
  /** Populated when `status` is `canceled`, this is the time at which the PaymentIntent was canceled. Measured in seconds since the Unix epoch. */
  canceled_at?: Maybe<Scalars['Int']>;
  /** Reason for cancellation of this PaymentIntent, either user-provided (`duplicate`, `fraudulent`, `requested_by_customer`, or `abandoned`) or generated by Stripe internally (`failed_invoice`, `void_invoice`, or `automatic`). */
  cancellation_reason?: Maybe<Stripe_PaymentIntentCancellationReasonProperty>;
  /** Controls when the funds will be captured from the customer's account. */
  capture_method?: Maybe<Stripe_PaymentIntentCaptureMethodProperty>;
  /** Charges that were created by this PaymentIntent, if any. */
  charges?: Maybe<Stripe_PaymentIntentChargesProperty>;
  /**
   * The client secret of this PaymentIntent. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete a payment from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   *
   * Refer to our docs to [accept a payment](https://stripe.com/docs/payments/accept-a-payment?ui=elements) and learn about how `client_secret` should be handled.
   */
  client_secret?: Maybe<Scalars['String']>;
  confirmation_method?: Maybe<Stripe_PaymentIntentConfirmationMethodProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  invoice?: Maybe<Stripe_PaymentIntentInvoiceProperty>;
  last_payment_error?: Maybe<Stripe_ApiErrors>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. For more information, see the [documentation](https://stripe.com/docs/payments/payment-intents/creating-payment-intents#storing-information-in-metadata). */
  metadata?: Maybe<Scalars['JSONObject']>;
  next_action?: Maybe<Stripe_PaymentIntentNextAction>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PaymentIntentObjectProperty>;
  on_behalf_of?: Maybe<Stripe_PaymentIntentOnBehalfOfProperty>;
  payment_method?: Maybe<Stripe_PaymentIntentPaymentMethodProperty>;
  payment_method_options?: Maybe<Stripe_PaymentIntentPaymentMethodOptions>;
  /** The list of payment method types (e.g. card) that this PaymentIntent is allowed to use. */
  payment_method_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  processing?: Maybe<Stripe_PaymentIntentProcessing>;
  /** Email address that the receipt for the resulting payment will be sent to. If `receipt_email` is specified for a payment in live mode, a receipt will be sent regardless of your [email settings](https://dashboard.stripe.com/account/emails). */
  receipt_email?: Maybe<Scalars['String']>;
  review?: Maybe<Stripe_PaymentIntentReviewProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentSetupFutureUsageProperty>;
  shipping?: Maybe<Stripe_Shipping>;
  /** For non-card charges, you can use this value as the complete description that appears on your customers’ statements. Must contain at least one letter, maximum 22 characters. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** Provides information about a card payment that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor. */
  statement_descriptor_suffix?: Maybe<Scalars['String']>;
  /** Status of this PaymentIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `requires_capture`, `canceled`, or `succeeded`. Read more about each PaymentIntent [status](https://stripe.com/docs/payments/intents#intent-statuses). */
  status?: Maybe<Stripe_PaymentIntentStatusProperty>;
  transfer_data?: Maybe<Stripe_TransferData>;
  /** A string that identifies the resulting payment as part of a group. See the PaymentIntents [use case for connected accounts](https://stripe.com/docs/payments/connected-accounts) for details. */
  transfer_group?: Maybe<Scalars['String']>;
  invoiceItems?: Maybe<Array<Maybe<Stripe_Invoiceitem>>>;
  /** The Stripe checkout session associated with this payment. */
  sessionItems?: Maybe<Array<Maybe<Stripe_Item>>>;
  /** The ShipEngine label associated with this payment. */
  shipment?: Maybe<ShipEngine_Label>;
  _shapeId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentFlowsAmountDetails = {
  __typename?: 'Stripe_PaymentFlowsAmountDetails';
  tip?: Maybe<Stripe_PaymentFlowsAmountDetailsResourceTip>;
};

export type Stripe_PaymentFlowsAmountDetailsResourceTip = {
  __typename?: 'Stripe_PaymentFlowsAmountDetailsResourceTip';
  /** Portion of the amount that corresponds to a tip. */
  amount?: Maybe<Scalars['Int']>;
};

export type Stripe_PaymentIntentApplicationProperty = WrappedString | Stripe_Application;

export type Stripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntent = {
  __typename?: 'Stripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntent';
  /** Automatically calculates compatible payment methods */
  enabled?: Maybe<Scalars['Boolean']>;
};

export enum Stripe_PaymentIntentCancellationReasonProperty {
  Abandoned = 'abandoned',
  Automatic = 'automatic',
  Duplicate = 'duplicate',
  FailedInvoice = 'failed_invoice',
  Fraudulent = 'fraudulent',
  RequestedByCustomer = 'requested_by_customer',
  VoidInvoice = 'void_invoice'
}

export enum Stripe_PaymentIntentCaptureMethodProperty {
  Automatic = 'automatic',
  Manual = 'manual'
}

/** Charges that were created by this PaymentIntent, if any. */
export type Stripe_PaymentIntentChargesProperty = {
  __typename?: 'Stripe_PaymentIntentChargesProperty';
  /** This list only contains the latest charge, even if there were previously multiple unsuccessful charges. To view all previous charges for a PaymentIntent, you can filter the charges list using the `payment_intent` [parameter](https://stripe.com/docs/api/charges/list#list_charges-payment_intent). */
  data: Array<Stripe_Charge>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_PaymentIntentChargesObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_Charge = {
  __typename?: 'Stripe_Charge';
  /** Amount intended to be collected by this payment. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99). */
  amount?: Maybe<Scalars['Int']>;
  /** Amount in %s captured (can be less than the amount attribute on the charge if a partial capture was made). */
  amount_captured?: Maybe<Scalars['Int']>;
  /** Amount in %s refunded (can be less than the amount attribute on the charge if a partial refund was issued). */
  amount_refunded?: Maybe<Scalars['Int']>;
  application?: Maybe<Stripe_ChargeApplicationProperty>;
  application_fee?: Maybe<Stripe_ChargeApplicationFeeProperty>;
  /** The amount of the application fee (if any) requested for the charge. [See the Connect documentation](https://stripe.com/docs/connect/direct-charges#collecting-fees) for details. */
  application_fee_amount?: Maybe<Scalars['Int']>;
  balance_transaction?: Maybe<Stripe_ChargeBalanceTransactionProperty>;
  billing_details?: Maybe<Stripe_BillingDetails>;
  /** The full statement descriptor that is passed to card networks, and that is displayed on your customers' credit card and bank statements. Allows you to see what the statement descriptor looks like after the static and dynamic portions are combined. */
  calculated_statement_descriptor?: Maybe<Scalars['String']>;
  /** If the charge was created without capturing, this Boolean represents whether it is still uncaptured or has since been captured. */
  captured?: Maybe<Scalars['Boolean']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Whether the charge has been disputed. */
  disputed?: Maybe<Scalars['Boolean']>;
  failure_balance_transaction?: Maybe<Stripe_ChargeFailureBalanceTransactionProperty>;
  /** Error code explaining reason for charge failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes). */
  failure_code?: Maybe<Scalars['String']>;
  /** Message to user further explaining reason for charge failure if available. */
  failure_message?: Maybe<Scalars['String']>;
  fraud_details?: Maybe<Stripe_ChargeFraudDetails>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  invoice?: Maybe<Stripe_ChargeInvoiceProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ChargeObjectProperty>;
  on_behalf_of?: Maybe<Stripe_ChargeOnBehalfOfProperty>;
  order?: Maybe<Stripe_ChargeOrderProperty>;
  outcome?: Maybe<Stripe_ChargeOutcome>;
  /** `true` if the charge succeeded, or was successfully authorized for later capture. */
  paid?: Maybe<Scalars['Boolean']>;
  payment_intent?: Maybe<Stripe_ChargePaymentIntentProperty>;
  /** ID of the payment method used in this charge. */
  payment_method?: Maybe<Scalars['String']>;
  payment_method_details?: Maybe<Stripe_PaymentMethodDetails>;
  /** This is the email address that the receipt for this charge was sent to. */
  receipt_email?: Maybe<Scalars['String']>;
  /** This is the transaction number that appears on email receipts sent for this charge. This attribute will be `null` until a receipt has been sent. */
  receipt_number?: Maybe<Scalars['String']>;
  /** This is the URL to view the receipt for this charge. The receipt is kept up-to-date to the latest state of the charge, including any refunds. If the charge is for an Invoice, the receipt will be stylized as an Invoice receipt. */
  receipt_url?: Maybe<Scalars['String']>;
  /** Whether the charge has been fully refunded. If the charge is only partially refunded, this attribute will still be false. */
  refunded?: Maybe<Scalars['Boolean']>;
  /** A list of refunds that have been applied to the charge. */
  refunds?: Maybe<Stripe_ChargeRefundsProperty>;
  review?: Maybe<Stripe_ChargeReviewProperty>;
  shipping?: Maybe<Stripe_Shipping>;
  source_transfer?: Maybe<Stripe_ChargeSourceTransferProperty>;
  /** For card charges, use `statement_descriptor_suffix` instead. Otherwise, you can use this value as the complete description of a charge on your customers’ statements. Must contain at least one letter, maximum 22 characters. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** Provides information about the charge that customers see on their statements. Concatenated with the prefix (shortened descriptor) or statement descriptor that’s set on the account to form the complete statement descriptor. Maximum 22 characters for the concatenated descriptor. */
  statement_descriptor_suffix?: Maybe<Scalars['String']>;
  /** The status of the payment is either `succeeded`, `pending`, or `failed`. */
  status?: Maybe<Stripe_ChargeStatusProperty>;
  transfer?: Maybe<Stripe_ChargeTransferProperty>;
  transfer_data?: Maybe<Stripe_ChargeTransferData>;
  /** A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details. */
  transfer_group?: Maybe<Scalars['String']>;
};

export type Stripe_ChargeApplicationProperty = WrappedString | Stripe_Application;

export type Stripe_ChargeApplicationFeeProperty = WrappedString | Stripe_ApplicationFee;

export type Stripe_ApplicationFee = {
  __typename?: 'Stripe_ApplicationFee';
  account?: Maybe<Stripe_ApplicationFeeAccountProperty>;
  /** Amount earned, in %s. */
  amount?: Maybe<Scalars['Int']>;
  /** Amount in %s refunded (can be less than the amount attribute on the fee if a partial refund was issued) */
  amount_refunded?: Maybe<Scalars['Int']>;
  application?: Maybe<Stripe_ApplicationFeeApplicationProperty>;
  balance_transaction?: Maybe<Stripe_ApplicationFeeBalanceTransactionProperty>;
  charge?: Maybe<Stripe_ApplicationFeeChargeProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ApplicationFeeObjectProperty>;
  originating_transaction?: Maybe<Stripe_ApplicationFeeOriginatingTransactionProperty>;
  /** Whether the fee has been fully refunded. If the fee is only partially refunded, this attribute will still be false. */
  refunded?: Maybe<Scalars['Boolean']>;
  /** A list of refunds that have been applied to the fee. */
  refunds?: Maybe<Stripe_ApplicationFeeRefundsProperty>;
};

export type Stripe_ApplicationFeeAccountProperty = WrappedString | Stripe_Account;

export type Stripe_ApplicationFeeApplicationProperty = WrappedString | Stripe_Application;

export type Stripe_ApplicationFeeBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_BalanceTransaction = {
  __typename?: 'Stripe_BalanceTransaction';
  /** Gross amount of the transaction, in %s. */
  amount?: Maybe<Scalars['Int']>;
  /** The date the transaction's net funds will become available in the Stripe balance. */
  available_on?: Maybe<Scalars['Int']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** The exchange rate used, if applicable, for this transaction. Specifically, if money was converted from currency A to currency B, then the `amount` in currency A, times `exchange_rate`, would be the `amount` in currency B. For example, suppose you charged a customer 10.00 EUR. Then the PaymentIntent's `amount` would be `1000` and `currency` would be `eur`. Suppose this was converted into 12.34 USD in your Stripe account. Then the BalanceTransaction's `amount` would be `1234`, `currency` would be `usd`, and `exchange_rate` would be `1.234`. */
  exchange_rate?: Maybe<Scalars['Float']>;
  /** Fees (in %s) paid for this transaction. */
  fee?: Maybe<Scalars['Int']>;
  /** Detailed breakdown of fees (in %s) paid for this transaction. */
  fee_details?: Maybe<Array<Maybe<Stripe_Fee>>>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Net amount of the transaction, in %s. */
  net?: Maybe<Scalars['Int']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_BalanceTransactionObjectProperty>;
  /** [Learn more](https://stripe.com/docs/reports/reporting-categories) about how reporting categories can help you understand balance transactions from an accounting perspective. */
  reporting_category?: Maybe<Scalars['String']>;
  source?: Maybe<Stripe_BalanceTransactionSourceProperty>;
  /** If the transaction's net funds are available in the Stripe balance yet. Either `available` or `pending`. */
  status?: Maybe<Scalars['String']>;
  /** Transaction type: `adjustment`, `advance`, `advance_funding`, `anticipation_repayment`, `application_fee`, `application_fee_refund`, `charge`, `connect_collection_transfer`, `contribution`, `issuing_authorization_hold`, `issuing_authorization_release`, `issuing_dispute`, `issuing_transaction`, `payment`, `payment_failure_refund`, `payment_refund`, `payout`, `payout_cancel`, `payout_failure`, `refund`, `refund_failure`, `reserve_transaction`, `reserved_funds`, `stripe_fee`, `stripe_fx_fee`, `tax_fee`, `topup`, `topup_reversal`, `transfer`, `transfer_cancel`, `transfer_failure`, or `transfer_refund`. [Learn more](https://stripe.com/docs/reports/balance-transaction-types) about balance transaction types and what they represent. If you are looking to classify transactions for accounting purposes, you might want to consider `reporting_category` instead. */
  type?: Maybe<Stripe_BalanceTransactionTypeProperty>;
};

export type Stripe_Fee = {
  __typename?: 'Stripe_Fee';
  /** Amount of the fee, in cents. */
  amount?: Maybe<Scalars['Int']>;
  /** ID of the Connect application that earned the fee. */
  application?: Maybe<Scalars['String']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Type of the fee, one of: `application_fee`, `stripe_fee` or `tax`. */
  type?: Maybe<Scalars['String']>;
};

export enum Stripe_BalanceTransactionObjectProperty {
  BalanceTransaction = 'balance_transaction'
}

export type Stripe_BalanceTransactionSourceProperty = WrappedString | Stripe_ApplicationFee | Stripe_Charge | Stripe_ConnectCollectionTransfer | Stripe_Dispute | Stripe_FeeRefund | Stripe_IssuingAuthorization | Stripe_IssuingDispute | Stripe_IssuingTransaction | Stripe_Payout | Stripe_PlatformTaxFee | Stripe_Refund | Stripe_ReserveTransaction | Stripe_TaxDeductedAtSource | Stripe_Topup | Stripe_Transfer | Stripe_TransferReversal;

export type Stripe_ConnectCollectionTransfer = {
  __typename?: 'Stripe_ConnectCollectionTransfer';
  /** Amount transferred, in %s. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  destination?: Maybe<Stripe_ConnectCollectionTransferDestinationProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ConnectCollectionTransferObjectProperty>;
};

export type Stripe_ConnectCollectionTransferDestinationProperty = WrappedString | Stripe_Account;

export enum Stripe_ConnectCollectionTransferObjectProperty {
  ConnectCollectionTransfer = 'connect_collection_transfer'
}

export type Stripe_Dispute = {
  __typename?: 'Stripe_Dispute';
  /** Disputed amount. Usually the amount of the charge, but can differ (usually because of currency fluctuation or because only part of the order is disputed). */
  amount?: Maybe<Scalars['Int']>;
  /** List of zero, one, or two balance transactions that show funds withdrawn and reinstated to your Stripe account as a result of this dispute. */
  balance_transactions?: Maybe<Array<Maybe<Stripe_BalanceTransaction>>>;
  charge?: Maybe<Stripe_DisputeChargeProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  evidence?: Maybe<Stripe_DisputeEvidence>;
  evidence_details?: Maybe<Stripe_DisputeEvidenceDetails>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** If true, it is still possible to refund the disputed payment. Once the payment has been fully refunded, no further funds will be withdrawn from your Stripe account as a result of this dispute. */
  is_charge_refundable?: Maybe<Scalars['Boolean']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DisputeObjectProperty>;
  payment_intent?: Maybe<Stripe_DisputePaymentIntentProperty>;
  /** Reason given by cardholder for dispute. Possible values are `bank_cannot_process`, `check_returned`, `credit_not_processed`, `customer_initiated`, `debit_not_authorized`, `duplicate`, `fraudulent`, `general`, `incorrect_account_details`, `insufficient_funds`, `product_not_received`, `product_unacceptable`, `subscription_canceled`, or `unrecognized`. Read more about [dispute reasons](https://stripe.com/docs/disputes/categories). */
  reason?: Maybe<Scalars['String']>;
  /** Current status of dispute. Possible values are `warning_needs_response`, `warning_under_review`, `warning_closed`, `needs_response`, `under_review`, `charge_refunded`, `won`, or `lost`. */
  status?: Maybe<Stripe_DisputeStatusProperty>;
};

export type Stripe_DisputeChargeProperty = WrappedString | Stripe_Charge;

export type Stripe_DisputeEvidence = {
  __typename?: 'Stripe_DisputeEvidence';
  /** Any server or activity logs showing proof that the customer accessed or downloaded the purchased digital product. This information should include IP addresses, corresponding timestamps, and any detailed recorded activity. */
  access_activity_log?: Maybe<Scalars['String']>;
  /** The billing address provided by the customer. */
  billing_address?: Maybe<Scalars['String']>;
  cancellation_policy?: Maybe<Stripe_DisputeEvidenceCancellationPolicyProperty>;
  /** An explanation of how and when the customer was shown your refund policy prior to purchase. */
  cancellation_policy_disclosure?: Maybe<Scalars['String']>;
  /** A justification for why the customer's subscription was not canceled. */
  cancellation_rebuttal?: Maybe<Scalars['String']>;
  customer_communication?: Maybe<Stripe_DisputeEvidenceCustomerCommunicationProperty>;
  /** The email address of the customer. */
  customer_email_address?: Maybe<Scalars['String']>;
  /** The name of the customer. */
  customer_name?: Maybe<Scalars['String']>;
  /** The IP address that the customer used when making the purchase. */
  customer_purchase_ip?: Maybe<Scalars['String']>;
  customer_signature?: Maybe<Stripe_DisputeEvidenceCustomerSignatureProperty>;
  duplicate_charge_documentation?: Maybe<Stripe_DisputeEvidenceDuplicateChargeDocumentationProperty>;
  /** An explanation of the difference between the disputed charge versus the prior charge that appears to be a duplicate. */
  duplicate_charge_explanation?: Maybe<Scalars['String']>;
  /** The Stripe ID for the prior charge which appears to be a duplicate of the disputed charge. */
  duplicate_charge_id?: Maybe<Scalars['String']>;
  /** A description of the product or service that was sold. */
  product_description?: Maybe<Scalars['String']>;
  receipt?: Maybe<Stripe_DisputeEvidenceReceiptProperty>;
  refund_policy?: Maybe<Stripe_DisputeEvidenceRefundPolicyProperty>;
  /** Documentation demonstrating that the customer was shown your refund policy prior to purchase. */
  refund_policy_disclosure?: Maybe<Scalars['String']>;
  /** A justification for why the customer is not entitled to a refund. */
  refund_refusal_explanation?: Maybe<Scalars['String']>;
  /** The date on which the customer received or began receiving the purchased service, in a clear human-readable format. */
  service_date?: Maybe<Scalars['String']>;
  service_documentation?: Maybe<Stripe_DisputeEvidenceServiceDocumentationProperty>;
  /** The address to which a physical product was shipped. You should try to include as complete address information as possible. */
  shipping_address?: Maybe<Scalars['String']>;
  /** The delivery service that shipped a physical product, such as Fedex, UPS, USPS, etc. If multiple carriers were used for this purchase, please separate them with commas. */
  shipping_carrier?: Maybe<Scalars['String']>;
  /** The date on which a physical product began its route to the shipping address, in a clear human-readable format. */
  shipping_date?: Maybe<Scalars['String']>;
  shipping_documentation?: Maybe<Stripe_DisputeEvidenceShippingDocumentationProperty>;
  /** The tracking number for a physical product, obtained from the delivery service. If multiple tracking numbers were generated for this purchase, please separate them with commas. */
  shipping_tracking_number?: Maybe<Scalars['String']>;
  uncategorized_file?: Maybe<Stripe_DisputeEvidenceUncategorizedFileProperty>;
  /** Any additional evidence or statements. */
  uncategorized_text?: Maybe<Scalars['String']>;
};

export type Stripe_DisputeEvidenceCancellationPolicyProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceCustomerCommunicationProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceCustomerSignatureProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceDuplicateChargeDocumentationProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceReceiptProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceRefundPolicyProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceServiceDocumentationProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceShippingDocumentationProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceUncategorizedFileProperty = WrappedString | Stripe_File;

export type Stripe_DisputeEvidenceDetails = {
  __typename?: 'Stripe_DisputeEvidenceDetails';
  /** Date by which evidence must be submitted in order to successfully challenge dispute. Will be null if the customer's bank or credit card company doesn't allow a response for this particular dispute. */
  due_by?: Maybe<Scalars['Int']>;
  /** Whether evidence has been staged for this dispute. */
  has_evidence?: Maybe<Scalars['Boolean']>;
  /** Whether the last evidence submission was submitted past the due date. Defaults to `false` if no evidence submissions have occurred. If `true`, then delivery of the latest evidence is *not* guaranteed. */
  past_due?: Maybe<Scalars['Boolean']>;
  /** The number of times evidence has been submitted. Typically, you may only submit evidence once. */
  submission_count?: Maybe<Scalars['Int']>;
};

export enum Stripe_DisputeObjectProperty {
  Dispute = 'dispute'
}

export type Stripe_DisputePaymentIntentProperty = WrappedString | Stripe_PaymentIntent;

export enum Stripe_DisputeStatusProperty {
  ChargeRefunded = 'charge_refunded',
  Lost = 'lost',
  NeedsResponse = 'needs_response',
  UnderReview = 'under_review',
  WarningClosed = 'warning_closed',
  WarningNeedsResponse = 'warning_needs_response',
  WarningUnderReview = 'warning_under_review',
  Won = 'won'
}

export type Stripe_FeeRefund = {
  __typename?: 'Stripe_FeeRefund';
  /** Amount, in %s. */
  amount?: Maybe<Scalars['Int']>;
  balance_transaction?: Maybe<Stripe_FeeRefundBalanceTransactionProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  fee?: Maybe<Stripe_FeeRefundFeeProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_FeeRefundObjectProperty>;
};

export type Stripe_FeeRefundBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_FeeRefundFeeProperty = WrappedString | Stripe_ApplicationFee;

export enum Stripe_FeeRefundObjectProperty {
  FeeRefund = 'fee_refund'
}

export type Stripe_IssuingAuthorization = {
  __typename?: 'Stripe_IssuingAuthorization';
  /** The total amount that was authorized or rejected. This amount is in the card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
  amount?: Maybe<Scalars['Int']>;
  amount_details?: Maybe<Stripe_IssuingAuthorizationAmountDetails>;
  /** Whether the authorization has been approved. */
  approved?: Maybe<Scalars['Boolean']>;
  /** How the card details were provided. */
  authorization_method?: Maybe<Stripe_IssuingAuthorizationAuthorizationMethodProperty>;
  /** List of balance transactions associated with this authorization. */
  balance_transactions?: Maybe<Array<Maybe<Stripe_BalanceTransaction>>>;
  card?: Maybe<Stripe_IssuingCard>;
  cardholder?: Maybe<Stripe_IssuingAuthorizationCardholderProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** The total amount that was authorized or rejected. This amount is in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
  merchant_amount?: Maybe<Scalars['Int']>;
  /** The currency that was presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  merchant_currency?: Maybe<Scalars['String']>;
  merchant_data?: Maybe<Stripe_IssuingAuthorizationMerchantData>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_IssuingAuthorizationObjectProperty>;
  pending_request?: Maybe<Stripe_IssuingAuthorizationPendingRequest>;
  /** History of every time `pending_request` was approved/denied, either by you directly or by Stripe (e.g. based on your `spending_controls`). If the merchant changes the authorization by performing an [incremental authorization](https://stripe.com/docs/issuing/purchases/authorizations), you can look at this field to see the previous requests for the authorization. */
  request_history?: Maybe<Array<Maybe<Stripe_IssuingAuthorizationRequest>>>;
  /** The current status of the authorization in its lifecycle. */
  status?: Maybe<Stripe_IssuingAuthorizationStatusProperty>;
  /** List of [transactions](https://stripe.com/docs/api/issuing/transactions) associated with this authorization. */
  transactions?: Maybe<Array<Maybe<Stripe_IssuingTransaction>>>;
  verification_data?: Maybe<Stripe_IssuingAuthorizationVerificationData>;
  /** The digital wallet used for this authorization. One of `apple_pay`, `google_pay`, or `samsung_pay`. */
  wallet?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingAuthorizationAmountDetails = {
  __typename?: 'Stripe_IssuingAuthorizationAmountDetails';
  /** The fee charged by the ATM for the cash withdrawal. */
  atm_fee?: Maybe<Scalars['Int']>;
};

export enum Stripe_IssuingAuthorizationAuthorizationMethodProperty {
  Chip = 'chip',
  Contactless = 'contactless',
  KeyedIn = 'keyed_in',
  Online = 'online',
  Swipe = 'swipe'
}

export type Stripe_IssuingCard = {
  __typename?: 'Stripe_IssuingCard';
  /** The brand of the card. */
  brand?: Maybe<Scalars['String']>;
  /** The reason why the card was canceled. */
  cancellation_reason?: Maybe<Stripe_IssuingCardCancellationReasonProperty>;
  cardholder?: Maybe<Stripe_IssuingCardholder>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** The card's CVC. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint. */
  cvc?: Maybe<Scalars['String']>;
  /** The expiration month of the card. */
  exp_month?: Maybe<Scalars['Int']>;
  /** The expiration year of the card. */
  exp_year?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The last 4 digits of the card number. */
  last4?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The full unredacted card number. For security reasons, this is only available for virtual cards, and will be omitted unless you explicitly request it with [the `expand` parameter](https://stripe.com/docs/api/expanding_objects). Additionally, it's only available via the ["Retrieve a card" endpoint](https://stripe.com/docs/api/issuing/cards/retrieve), not via "List all cards" or any other endpoint. */
  number?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_IssuingCardObjectProperty>;
  replaced_by?: Maybe<Stripe_IssuingCardReplacedByProperty>;
  replacement_for?: Maybe<Stripe_IssuingCardReplacementForProperty>;
  /** The reason why the previous card needed to be replaced. */
  replacement_reason?: Maybe<Stripe_IssuingCardReplacementReasonProperty>;
  shipping?: Maybe<Stripe_IssuingCardShipping>;
  spending_controls?: Maybe<Stripe_IssuingCardAuthorizationControls>;
  /** Whether authorizations can be approved on this card. */
  status?: Maybe<Stripe_IssuingCardStatusProperty>;
  /** The type of the card. */
  type?: Maybe<Stripe_IssuingCardTypeProperty>;
  wallets?: Maybe<Stripe_IssuingCardWallets>;
};

export enum Stripe_IssuingCardCancellationReasonProperty {
  Lost = 'lost',
  Stolen = 'stolen'
}

export type Stripe_IssuingCardholder = {
  __typename?: 'Stripe_IssuingCardholder';
  billing?: Maybe<Stripe_IssuingCardholderAddress>;
  company?: Maybe<Stripe_IssuingCardholderCompany>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** The cardholder's email address. */
  email?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  individual?: Maybe<Stripe_IssuingCardholderIndividual>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The cardholder's name. This will be printed on cards issued to them. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_IssuingCardholderObjectProperty>;
  /** The cardholder's phone number. This is required for all cardholders who will be creating EU cards. See the [3D Secure documentation](https://stripe.com/docs/issuing/3d-secure#when-is-3d-secure-applied) for more details. */
  phone_number?: Maybe<Scalars['String']>;
  requirements?: Maybe<Stripe_IssuingCardholderRequirements>;
  spending_controls?: Maybe<Stripe_IssuingCardholderAuthorizationControls>;
  /** Specifies whether to permit authorizations on this cardholder's cards. */
  status?: Maybe<Stripe_IssuingCardholderStatusProperty>;
  /** One of `individual` or `company`. */
  type?: Maybe<Stripe_IssuingCardholderTypeProperty>;
};

export type Stripe_IssuingCardholderAddress = {
  __typename?: 'Stripe_IssuingCardholderAddress';
  address?: Maybe<Stripe_Address>;
};

export type Stripe_IssuingCardholderCompany = {
  __typename?: 'Stripe_IssuingCardholderCompany';
  /** Whether the company's business ID number was provided. */
  tax_id_provided?: Maybe<Scalars['Boolean']>;
};

export type Stripe_IssuingCardholderIndividual = {
  __typename?: 'Stripe_IssuingCardholderIndividual';
  dob?: Maybe<Stripe_IssuingCardholderIndividualDob>;
  /** The first name of this cardholder. */
  first_name?: Maybe<Scalars['String']>;
  /** The last name of this cardholder. */
  last_name?: Maybe<Scalars['String']>;
  verification?: Maybe<Stripe_IssuingCardholderVerification>;
};

export type Stripe_IssuingCardholderIndividualDob = {
  __typename?: 'Stripe_IssuingCardholderIndividualDob';
  /** The day of birth, between 1 and 31. */
  day?: Maybe<Scalars['Int']>;
  /** The month of birth, between 1 and 12. */
  month?: Maybe<Scalars['Int']>;
  /** The four-digit year of birth. */
  year?: Maybe<Scalars['Int']>;
};

export type Stripe_IssuingCardholderVerification = {
  __typename?: 'Stripe_IssuingCardholderVerification';
  document?: Maybe<Stripe_IssuingCardholderIdDocument>;
};

export type Stripe_IssuingCardholderIdDocument = {
  __typename?: 'Stripe_IssuingCardholderIdDocument';
  back?: Maybe<Stripe_IssuingCardholderIdDocumentBackProperty>;
  front?: Maybe<Stripe_IssuingCardholderIdDocumentFrontProperty>;
};

export type Stripe_IssuingCardholderIdDocumentBackProperty = WrappedString | Stripe_File;

export type Stripe_IssuingCardholderIdDocumentFrontProperty = WrappedString | Stripe_File;

export enum Stripe_IssuingCardholderObjectProperty {
  IssuingDoTcardholder = 'issuingDOTcardholder'
}

export type Stripe_IssuingCardholderRequirements = {
  __typename?: 'Stripe_IssuingCardholderRequirements';
  /** If `disabled_reason` is present, all cards will decline authorizations with `cardholder_verification_required` reason. */
  disabled_reason?: Maybe<Stripe_IssuingCardholderRequirementsDisabledReasonProperty>;
  /** Array of fields that need to be collected in order to verify and re-enable the cardholder. */
  past_due?: Maybe<Array<Maybe<Stripe_IssuingCardholderRequirementsPastDueProperty>>>;
};

export enum Stripe_IssuingCardholderRequirementsDisabledReasonProperty {
  Listed = 'listed',
  RejectedDoTlisted = 'rejectedDOTlisted',
  UnderReview = 'under_review'
}

export enum Stripe_IssuingCardholderRequirementsPastDueProperty {
  CompanyDoTtaxId = 'companyDOTtax_id',
  IndividualDoTdobDoTday = 'individualDOTdobDOTday',
  IndividualDoTdobDoTmonth = 'individualDOTdobDOTmonth',
  IndividualDoTdobDoTyear = 'individualDOTdobDOTyear',
  IndividualDoTfirstName = 'individualDOTfirst_name',
  IndividualDoTlastName = 'individualDOTlast_name',
  IndividualDoTverificationDoTdocument = 'individualDOTverificationDOTdocument'
}

export type Stripe_IssuingCardholderAuthorizationControls = {
  __typename?: 'Stripe_IssuingCardholderAuthorizationControls';
  /** Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to allow. All other categories will be blocked. Cannot be set with `blocked_categories`. */
  allowed_categories?: Maybe<Array<Maybe<Stripe_IssuingCardholderAuthorizationControlsAllowedCategoriesProperty>>>;
  /** Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to decline. All other categories will be allowed. Cannot be set with `allowed_categories`. */
  blocked_categories?: Maybe<Array<Maybe<Stripe_IssuingCardholderAuthorizationControlsBlockedCategoriesProperty>>>;
  /** Limit spending with amount-based rules that apply across this cardholder's cards. */
  spending_limits?: Maybe<Array<Maybe<Stripe_IssuingCardholderSpendingLimit>>>;
  /** Currency of the amounts within `spending_limits`. */
  spending_limits_currency?: Maybe<Scalars['String']>;
};

export enum Stripe_IssuingCardholderAuthorizationControlsAllowedCategoriesProperty {
  AcRefrigerationRepair = 'ac_refrigeration_repair',
  AccountingBookkeepingServices = 'accounting_bookkeeping_services',
  AdvertisingServices = 'advertising_services',
  AgriculturalCooperative = 'agricultural_cooperative',
  AirlinesAirCarriers = 'airlines_air_carriers',
  AirportsFlyingFields = 'airports_flying_fields',
  AmbulanceServices = 'ambulance_services',
  AmusementParksCarnivals = 'amusement_parks_carnivals',
  AntiqueReproductions = 'antique_reproductions',
  AntiqueShops = 'antique_shops',
  Aquariums = 'aquariums',
  ArchitecturalSurveyingServices = 'architectural_surveying_services',
  ArtDealersAndGalleries = 'art_dealers_and_galleries',
  ArtistsSupplyAndCraftShops = 'artists_supply_and_craft_shops',
  AutoAndHomeSupplyStores = 'auto_and_home_supply_stores',
  AutoBodyRepairShops = 'auto_body_repair_shops',
  AutoPaintShops = 'auto_paint_shops',
  AutoServiceShops = 'auto_service_shops',
  AutomatedCashDisburse = 'automated_cash_disburse',
  AutomatedFuelDispensers = 'automated_fuel_dispensers',
  AutomobileAssociations = 'automobile_associations',
  AutomotivePartsAndAccessoriesStores = 'automotive_parts_and_accessories_stores',
  AutomotiveTireStores = 'automotive_tire_stores',
  BailAndBondPayments = 'bail_and_bond_payments',
  Bakeries = 'bakeries',
  BandsOrchestras = 'bands_orchestras',
  BarberAndBeautyShops = 'barber_and_beauty_shops',
  BettingCasinoGambling = 'betting_casino_gambling',
  BicycleShops = 'bicycle_shops',
  BilliardPoolEstablishments = 'billiard_pool_establishments',
  BoatDealers = 'boat_dealers',
  BoatRentalsAndLeases = 'boat_rentals_and_leases',
  BookStores = 'book_stores',
  BooksPeriodicalsAndNewspapers = 'books_periodicals_and_newspapers',
  BowlingAlleys = 'bowling_alleys',
  BusLines = 'bus_lines',
  BusinessSecretarialSchools = 'business_secretarial_schools',
  BuyingShoppingServices = 'buying_shopping_services',
  CableSatelliteAndOtherPayTelevisionAndRadio = 'cable_satellite_and_other_pay_television_and_radio',
  CameraAndPhotographicSupplyStores = 'camera_and_photographic_supply_stores',
  CandyNutAndConfectioneryStores = 'candy_nut_and_confectionery_stores',
  CarAndTruckDealersNewUsed = 'car_and_truck_dealers_new_used',
  CarAndTruckDealersUsedOnly = 'car_and_truck_dealers_used_only',
  CarRentalAgencies = 'car_rental_agencies',
  CarWashes = 'car_washes',
  CarpentryServices = 'carpentry_services',
  CarpetUpholsteryCleaning = 'carpet_upholstery_cleaning',
  Caterers = 'caterers',
  CharitableAndSocialServiceOrganizationsFundraising = 'charitable_and_social_service_organizations_fundraising',
  ChemicalsAndAlliedProducts = 'chemicals_and_allied_products',
  ChildCareServices = 'child_care_services',
  ChildrensAndInfantsWearStores = 'childrens_and_infants_wear_stores',
  ChiropodistsPodiatrists = 'chiropodists_podiatrists',
  Chiropractors = 'chiropractors',
  CigarStoresAndStands = 'cigar_stores_and_stands',
  CivicSocialFraternalAssociations = 'civic_social_fraternal_associations',
  CleaningAndMaintenance = 'cleaning_and_maintenance',
  ClothingRental = 'clothing_rental',
  CollegesUniversities = 'colleges_universities',
  CommercialEquipment = 'commercial_equipment',
  CommercialFootwear = 'commercial_footwear',
  CommercialPhotographyArtAndGraphics = 'commercial_photography_art_and_graphics',
  CommuterTransportAndFerries = 'commuter_transport_and_ferries',
  ComputerNetworkServices = 'computer_network_services',
  ComputerProgramming = 'computer_programming',
  ComputerRepair = 'computer_repair',
  ComputerSoftwareStores = 'computer_software_stores',
  ComputersPeripheralsAndSoftware = 'computers_peripherals_and_software',
  ConcreteWorkServices = 'concrete_work_services',
  ConstructionMaterials = 'construction_materials',
  ConsultingPublicRelations = 'consulting_public_relations',
  CorrespondenceSchools = 'correspondence_schools',
  CosmeticStores = 'cosmetic_stores',
  CounselingServices = 'counseling_services',
  CountryClubs = 'country_clubs',
  CourierServices = 'courier_services',
  CourtCosts = 'court_costs',
  CreditReportingAgencies = 'credit_reporting_agencies',
  CruiseLines = 'cruise_lines',
  DairyProductsStores = 'dairy_products_stores',
  DanceHallStudiosSchools = 'dance_hall_studios_schools',
  DatingEscortServices = 'dating_escort_services',
  DentistsOrthodontists = 'dentists_orthodontists',
  DepartmentStores = 'department_stores',
  DetectiveAgencies = 'detective_agencies',
  DigitalGoodsApplications = 'digital_goods_applications',
  DigitalGoodsGames = 'digital_goods_games',
  DigitalGoodsLargeVolume = 'digital_goods_large_volume',
  DigitalGoodsMedia = 'digital_goods_media',
  DirectMarketingCatalogMerchant = 'direct_marketing_catalog_merchant',
  DirectMarketingCombinationCatalogAndRetailMerchant = 'direct_marketing_combination_catalog_and_retail_merchant',
  DirectMarketingInboundTelemarketing = 'direct_marketing_inbound_telemarketing',
  DirectMarketingInsuranceServices = 'direct_marketing_insurance_services',
  DirectMarketingOther = 'direct_marketing_other',
  DirectMarketingOutboundTelemarketing = 'direct_marketing_outbound_telemarketing',
  DirectMarketingSubscription = 'direct_marketing_subscription',
  DirectMarketingTravel = 'direct_marketing_travel',
  DiscountStores = 'discount_stores',
  Doctors = 'doctors',
  DoorToDoorSales = 'door_to_door_sales',
  DraperyWindowCoveringAndUpholsteryStores = 'drapery_window_covering_and_upholstery_stores',
  DrinkingPlaces = 'drinking_places',
  DrugStoresAndPharmacies = 'drug_stores_and_pharmacies',
  DrugsDrugProprietariesAndDruggistSundries = 'drugs_drug_proprietaries_and_druggist_sundries',
  DryCleaners = 'dry_cleaners',
  DurableGoods = 'durable_goods',
  DutyFreeStores = 'duty_free_stores',
  EatingPlacesRestaurants = 'eating_places_restaurants',
  EducationalServices = 'educational_services',
  ElectricRazorStores = 'electric_razor_stores',
  ElectricalPartsAndEquipment = 'electrical_parts_and_equipment',
  ElectricalServices = 'electrical_services',
  ElectronicsRepairShops = 'electronics_repair_shops',
  ElectronicsStores = 'electronics_stores',
  ElementarySecondarySchools = 'elementary_secondary_schools',
  EmploymentTempAgencies = 'employment_temp_agencies',
  EquipmentRental = 'equipment_rental',
  ExterminatingServices = 'exterminating_services',
  FamilyClothingStores = 'family_clothing_stores',
  FastFoodRestaurants = 'fast_food_restaurants',
  FinancialInstitutions = 'financial_institutions',
  FinesGovernmentAdministrativeEntities = 'fines_government_administrative_entities',
  FireplaceFireplaceScreensAndAccessoriesStores = 'fireplace_fireplace_screens_and_accessories_stores',
  FloorCoveringStores = 'floor_covering_stores',
  Florists = 'florists',
  FloristsSuppliesNurseryStockAndFlowers = 'florists_supplies_nursery_stock_and_flowers',
  FreezerAndLockerMeatProvisioners = 'freezer_and_locker_meat_provisioners',
  FuelDealersNonAutomotive = 'fuel_dealers_non_automotive',
  FuneralServicesCrematories = 'funeral_services_crematories',
  FurnitureHomeFurnishingsAndEquipmentStoresExceptAppliances = 'furniture_home_furnishings_and_equipment_stores_except_appliances',
  FurnitureRepairRefinishing = 'furniture_repair_refinishing',
  FurriersAndFurShops = 'furriers_and_fur_shops',
  GeneralServices = 'general_services',
  GiftCardNoveltyAndSouvenirShops = 'gift_card_novelty_and_souvenir_shops',
  GlassPaintAndWallpaperStores = 'glass_paint_and_wallpaper_stores',
  GlasswareCrystalStores = 'glassware_crystal_stores',
  GolfCoursesPublic = 'golf_courses_public',
  GovernmentServices = 'government_services',
  GroceryStoresSupermarkets = 'grocery_stores_supermarkets',
  HardwareEquipmentAndSupplies = 'hardware_equipment_and_supplies',
  HardwareStores = 'hardware_stores',
  HealthAndBeautySpas = 'health_and_beauty_spas',
  HearingAidsSalesAndSupplies = 'hearing_aids_sales_and_supplies',
  HeatingPlumbingAC = 'heating_plumbing_a_c',
  HobbyToyAndGameShops = 'hobby_toy_and_game_shops',
  HomeSupplyWarehouseStores = 'home_supply_warehouse_stores',
  Hospitals = 'hospitals',
  HotelsMotelsAndResorts = 'hotels_motels_and_resorts',
  HouseholdApplianceStores = 'household_appliance_stores',
  IndustrialSupplies = 'industrial_supplies',
  InformationRetrievalServices = 'information_retrieval_services',
  InsuranceDefault = 'insurance_default',
  InsuranceUnderwritingPremiums = 'insurance_underwriting_premiums',
  IntraCompanyPurchases = 'intra_company_purchases',
  JewelryStoresWatchesClocksAndSilverwareStores = 'jewelry_stores_watches_clocks_and_silverware_stores',
  LandscapingServices = 'landscaping_services',
  Laundries = 'laundries',
  LaundryCleaningServices = 'laundry_cleaning_services',
  LegalServicesAttorneys = 'legal_services_attorneys',
  LuggageAndLeatherGoodsStores = 'luggage_and_leather_goods_stores',
  LumberBuildingMaterialsStores = 'lumber_building_materials_stores',
  ManualCashDisburse = 'manual_cash_disburse',
  MarinasServiceAndSupplies = 'marinas_service_and_supplies',
  MasonryStoneworkAndPlaster = 'masonry_stonework_and_plaster',
  MassageParlors = 'massage_parlors',
  MedicalAndDentalLabs = 'medical_and_dental_labs',
  MedicalDentalOphthalmicAndHospitalEquipmentAndSupplies = 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies',
  MedicalServices = 'medical_services',
  MembershipOrganizations = 'membership_organizations',
  MensAndBoysClothingAndAccessoriesStores = 'mens_and_boys_clothing_and_accessories_stores',
  MensWomensClothingStores = 'mens_womens_clothing_stores',
  MetalServiceCenters = 'metal_service_centers',
  Miscellaneous = 'miscellaneous',
  MiscellaneousApparelAndAccessoryShops = 'miscellaneous_apparel_and_accessory_shops',
  MiscellaneousAutoDealers = 'miscellaneous_auto_dealers',
  MiscellaneousBusinessServices = 'miscellaneous_business_services',
  MiscellaneousFoodStores = 'miscellaneous_food_stores',
  MiscellaneousGeneralMerchandise = 'miscellaneous_general_merchandise',
  MiscellaneousGeneralServices = 'miscellaneous_general_services',
  MiscellaneousHomeFurnishingSpecialtyStores = 'miscellaneous_home_furnishing_specialty_stores',
  MiscellaneousPublishingAndPrinting = 'miscellaneous_publishing_and_printing',
  MiscellaneousRecreationServices = 'miscellaneous_recreation_services',
  MiscellaneousRepairShops = 'miscellaneous_repair_shops',
  MiscellaneousSpecialtyRetail = 'miscellaneous_specialty_retail',
  MobileHomeDealers = 'mobile_home_dealers',
  MotionPictureTheaters = 'motion_picture_theaters',
  MotorFreightCarriersAndTrucking = 'motor_freight_carriers_and_trucking',
  MotorHomesDealers = 'motor_homes_dealers',
  MotorVehicleSuppliesAndNewParts = 'motor_vehicle_supplies_and_new_parts',
  MotorcycleShopsAndDealers = 'motorcycle_shops_and_dealers',
  MotorcycleShopsDealers = 'motorcycle_shops_dealers',
  MusicStoresMusicalInstrumentsPianosAndSheetMusic = 'music_stores_musical_instruments_pianos_and_sheet_music',
  NewsDealersAndNewsstands = 'news_dealers_and_newsstands',
  NonFiMoneyOrders = 'non_fi_money_orders',
  NonFiStoredValueCardPurchaseLoad = 'non_fi_stored_value_card_purchase_load',
  NondurableGoods = 'nondurable_goods',
  NurseriesLawnAndGardenSupplyStores = 'nurseries_lawn_and_garden_supply_stores',
  NursingPersonalCare = 'nursing_personal_care',
  OfficeAndCommercialFurniture = 'office_and_commercial_furniture',
  OpticiansEyeglasses = 'opticians_eyeglasses',
  OptometristsOphthalmologist = 'optometrists_ophthalmologist',
  OrthopedicGoodsProstheticDevices = 'orthopedic_goods_prosthetic_devices',
  Osteopaths = 'osteopaths',
  PackageStoresBeerWineAndLiquor = 'package_stores_beer_wine_and_liquor',
  PaintsVarnishesAndSupplies = 'paints_varnishes_and_supplies',
  ParkingLotsGarages = 'parking_lots_garages',
  PassengerRailways = 'passenger_railways',
  PawnShops = 'pawn_shops',
  PetShopsPetFoodAndSupplies = 'pet_shops_pet_food_and_supplies',
  PetroleumAndPetroleumProducts = 'petroleum_and_petroleum_products',
  PhotoDeveloping = 'photo_developing',
  PhotographicPhotocopyMicrofilmEquipmentAndSupplies = 'photographic_photocopy_microfilm_equipment_and_supplies',
  PhotographicStudios = 'photographic_studios',
  PictureVideoProduction = 'picture_video_production',
  PieceGoodsNotionsAndOtherDryGoods = 'piece_goods_notions_and_other_dry_goods',
  PlumbingHeatingEquipmentAndSupplies = 'plumbing_heating_equipment_and_supplies',
  PoliticalOrganizations = 'political_organizations',
  PostalServicesGovernmentOnly = 'postal_services_government_only',
  PreciousStonesAndMetalsWatchesAndJewelry = 'precious_stones_and_metals_watches_and_jewelry',
  ProfessionalServices = 'professional_services',
  PublicWarehousingAndStorage = 'public_warehousing_and_storage',
  QuickCopyReproAndBlueprint = 'quick_copy_repro_and_blueprint',
  Railroads = 'railroads',
  RealEstateAgentsAndManagersRentals = 'real_estate_agents_and_managers_rentals',
  RecordStores = 'record_stores',
  RecreationalVehicleRentals = 'recreational_vehicle_rentals',
  ReligiousGoodsStores = 'religious_goods_stores',
  ReligiousOrganizations = 'religious_organizations',
  RoofingSidingSheetMetal = 'roofing_siding_sheet_metal',
  SecretarialSupportServices = 'secretarial_support_services',
  SecurityBrokersDealers = 'security_brokers_dealers',
  ServiceStations = 'service_stations',
  SewingNeedleworkFabricAndPieceGoodsStores = 'sewing_needlework_fabric_and_piece_goods_stores',
  ShoeRepairHatCleaning = 'shoe_repair_hat_cleaning',
  ShoeStores = 'shoe_stores',
  SmallApplianceRepair = 'small_appliance_repair',
  SnowmobileDealers = 'snowmobile_dealers',
  SpecialTradeServices = 'special_trade_services',
  SpecialtyCleaning = 'specialty_cleaning',
  SportingGoodsStores = 'sporting_goods_stores',
  SportingRecreationCamps = 'sporting_recreation_camps',
  SportsAndRidingApparelStores = 'sports_and_riding_apparel_stores',
  SportsClubsFields = 'sports_clubs_fields',
  StampAndCoinStores = 'stamp_and_coin_stores',
  StationaryOfficeSuppliesPrintingAndWritingPaper = 'stationary_office_supplies_printing_and_writing_paper',
  StationeryStoresOfficeAndSchoolSupplyStores = 'stationery_stores_office_and_school_supply_stores',
  SwimmingPoolsSales = 'swimming_pools_sales',
  TUiTravelGermany = 't_ui_travel_germany',
  TailorsAlterations = 'tailors_alterations',
  TaxPaymentsGovernmentAgencies = 'tax_payments_government_agencies',
  TaxPreparationServices = 'tax_preparation_services',
  TaxicabsLimousines = 'taxicabs_limousines',
  TelecommunicationEquipmentAndTelephoneSales = 'telecommunication_equipment_and_telephone_sales',
  TelecommunicationServices = 'telecommunication_services',
  TelegraphServices = 'telegraph_services',
  TentAndAwningShops = 'tent_and_awning_shops',
  TestingLaboratories = 'testing_laboratories',
  TheatricalTicketAgencies = 'theatrical_ticket_agencies',
  Timeshares = 'timeshares',
  TireRetreadingAndRepair = 'tire_retreading_and_repair',
  TollsBridgeFees = 'tolls_bridge_fees',
  TouristAttractionsAndExhibits = 'tourist_attractions_and_exhibits',
  TowingServices = 'towing_services',
  TrailerParksCampgrounds = 'trailer_parks_campgrounds',
  TransportationServices = 'transportation_services',
  TravelAgenciesTourOperators = 'travel_agencies_tour_operators',
  TruckStopIteration = 'truck_stop_iteration',
  TruckUtilityTrailerRentals = 'truck_utility_trailer_rentals',
  TypesettingPlateMakingAndRelatedServices = 'typesetting_plate_making_and_related_services',
  TypewriterStores = 'typewriter_stores',
  USFederalGovernmentAgenciesOrDepartments = 'u_s_federal_government_agencies_or_departments',
  UniformsCommercialClothing = 'uniforms_commercial_clothing',
  UsedMerchandiseAndSecondhandStores = 'used_merchandise_and_secondhand_stores',
  Utilities = 'utilities',
  VarietyStores = 'variety_stores',
  VeterinaryServices = 'veterinary_services',
  VideoAmusementGameSupplies = 'video_amusement_game_supplies',
  VideoGameArcades = 'video_game_arcades',
  VideoTapeRentalStores = 'video_tape_rental_stores',
  VocationalTradeSchools = 'vocational_trade_schools',
  WatchJewelryRepair = 'watch_jewelry_repair',
  WeldingRepair = 'welding_repair',
  WholesaleClubs = 'wholesale_clubs',
  WigAndToupeeStores = 'wig_and_toupee_stores',
  WiresMoneyOrders = 'wires_money_orders',
  WomensAccessoryAndSpecialtyShops = 'womens_accessory_and_specialty_shops',
  WomensReadyToWearStores = 'womens_ready_to_wear_stores',
  WreckingAndSalvageYards = 'wrecking_and_salvage_yards'
}

export enum Stripe_IssuingCardholderAuthorizationControlsBlockedCategoriesProperty {
  AcRefrigerationRepair = 'ac_refrigeration_repair',
  AccountingBookkeepingServices = 'accounting_bookkeeping_services',
  AdvertisingServices = 'advertising_services',
  AgriculturalCooperative = 'agricultural_cooperative',
  AirlinesAirCarriers = 'airlines_air_carriers',
  AirportsFlyingFields = 'airports_flying_fields',
  AmbulanceServices = 'ambulance_services',
  AmusementParksCarnivals = 'amusement_parks_carnivals',
  AntiqueReproductions = 'antique_reproductions',
  AntiqueShops = 'antique_shops',
  Aquariums = 'aquariums',
  ArchitecturalSurveyingServices = 'architectural_surveying_services',
  ArtDealersAndGalleries = 'art_dealers_and_galleries',
  ArtistsSupplyAndCraftShops = 'artists_supply_and_craft_shops',
  AutoAndHomeSupplyStores = 'auto_and_home_supply_stores',
  AutoBodyRepairShops = 'auto_body_repair_shops',
  AutoPaintShops = 'auto_paint_shops',
  AutoServiceShops = 'auto_service_shops',
  AutomatedCashDisburse = 'automated_cash_disburse',
  AutomatedFuelDispensers = 'automated_fuel_dispensers',
  AutomobileAssociations = 'automobile_associations',
  AutomotivePartsAndAccessoriesStores = 'automotive_parts_and_accessories_stores',
  AutomotiveTireStores = 'automotive_tire_stores',
  BailAndBondPayments = 'bail_and_bond_payments',
  Bakeries = 'bakeries',
  BandsOrchestras = 'bands_orchestras',
  BarberAndBeautyShops = 'barber_and_beauty_shops',
  BettingCasinoGambling = 'betting_casino_gambling',
  BicycleShops = 'bicycle_shops',
  BilliardPoolEstablishments = 'billiard_pool_establishments',
  BoatDealers = 'boat_dealers',
  BoatRentalsAndLeases = 'boat_rentals_and_leases',
  BookStores = 'book_stores',
  BooksPeriodicalsAndNewspapers = 'books_periodicals_and_newspapers',
  BowlingAlleys = 'bowling_alleys',
  BusLines = 'bus_lines',
  BusinessSecretarialSchools = 'business_secretarial_schools',
  BuyingShoppingServices = 'buying_shopping_services',
  CableSatelliteAndOtherPayTelevisionAndRadio = 'cable_satellite_and_other_pay_television_and_radio',
  CameraAndPhotographicSupplyStores = 'camera_and_photographic_supply_stores',
  CandyNutAndConfectioneryStores = 'candy_nut_and_confectionery_stores',
  CarAndTruckDealersNewUsed = 'car_and_truck_dealers_new_used',
  CarAndTruckDealersUsedOnly = 'car_and_truck_dealers_used_only',
  CarRentalAgencies = 'car_rental_agencies',
  CarWashes = 'car_washes',
  CarpentryServices = 'carpentry_services',
  CarpetUpholsteryCleaning = 'carpet_upholstery_cleaning',
  Caterers = 'caterers',
  CharitableAndSocialServiceOrganizationsFundraising = 'charitable_and_social_service_organizations_fundraising',
  ChemicalsAndAlliedProducts = 'chemicals_and_allied_products',
  ChildCareServices = 'child_care_services',
  ChildrensAndInfantsWearStores = 'childrens_and_infants_wear_stores',
  ChiropodistsPodiatrists = 'chiropodists_podiatrists',
  Chiropractors = 'chiropractors',
  CigarStoresAndStands = 'cigar_stores_and_stands',
  CivicSocialFraternalAssociations = 'civic_social_fraternal_associations',
  CleaningAndMaintenance = 'cleaning_and_maintenance',
  ClothingRental = 'clothing_rental',
  CollegesUniversities = 'colleges_universities',
  CommercialEquipment = 'commercial_equipment',
  CommercialFootwear = 'commercial_footwear',
  CommercialPhotographyArtAndGraphics = 'commercial_photography_art_and_graphics',
  CommuterTransportAndFerries = 'commuter_transport_and_ferries',
  ComputerNetworkServices = 'computer_network_services',
  ComputerProgramming = 'computer_programming',
  ComputerRepair = 'computer_repair',
  ComputerSoftwareStores = 'computer_software_stores',
  ComputersPeripheralsAndSoftware = 'computers_peripherals_and_software',
  ConcreteWorkServices = 'concrete_work_services',
  ConstructionMaterials = 'construction_materials',
  ConsultingPublicRelations = 'consulting_public_relations',
  CorrespondenceSchools = 'correspondence_schools',
  CosmeticStores = 'cosmetic_stores',
  CounselingServices = 'counseling_services',
  CountryClubs = 'country_clubs',
  CourierServices = 'courier_services',
  CourtCosts = 'court_costs',
  CreditReportingAgencies = 'credit_reporting_agencies',
  CruiseLines = 'cruise_lines',
  DairyProductsStores = 'dairy_products_stores',
  DanceHallStudiosSchools = 'dance_hall_studios_schools',
  DatingEscortServices = 'dating_escort_services',
  DentistsOrthodontists = 'dentists_orthodontists',
  DepartmentStores = 'department_stores',
  DetectiveAgencies = 'detective_agencies',
  DigitalGoodsApplications = 'digital_goods_applications',
  DigitalGoodsGames = 'digital_goods_games',
  DigitalGoodsLargeVolume = 'digital_goods_large_volume',
  DigitalGoodsMedia = 'digital_goods_media',
  DirectMarketingCatalogMerchant = 'direct_marketing_catalog_merchant',
  DirectMarketingCombinationCatalogAndRetailMerchant = 'direct_marketing_combination_catalog_and_retail_merchant',
  DirectMarketingInboundTelemarketing = 'direct_marketing_inbound_telemarketing',
  DirectMarketingInsuranceServices = 'direct_marketing_insurance_services',
  DirectMarketingOther = 'direct_marketing_other',
  DirectMarketingOutboundTelemarketing = 'direct_marketing_outbound_telemarketing',
  DirectMarketingSubscription = 'direct_marketing_subscription',
  DirectMarketingTravel = 'direct_marketing_travel',
  DiscountStores = 'discount_stores',
  Doctors = 'doctors',
  DoorToDoorSales = 'door_to_door_sales',
  DraperyWindowCoveringAndUpholsteryStores = 'drapery_window_covering_and_upholstery_stores',
  DrinkingPlaces = 'drinking_places',
  DrugStoresAndPharmacies = 'drug_stores_and_pharmacies',
  DrugsDrugProprietariesAndDruggistSundries = 'drugs_drug_proprietaries_and_druggist_sundries',
  DryCleaners = 'dry_cleaners',
  DurableGoods = 'durable_goods',
  DutyFreeStores = 'duty_free_stores',
  EatingPlacesRestaurants = 'eating_places_restaurants',
  EducationalServices = 'educational_services',
  ElectricRazorStores = 'electric_razor_stores',
  ElectricalPartsAndEquipment = 'electrical_parts_and_equipment',
  ElectricalServices = 'electrical_services',
  ElectronicsRepairShops = 'electronics_repair_shops',
  ElectronicsStores = 'electronics_stores',
  ElementarySecondarySchools = 'elementary_secondary_schools',
  EmploymentTempAgencies = 'employment_temp_agencies',
  EquipmentRental = 'equipment_rental',
  ExterminatingServices = 'exterminating_services',
  FamilyClothingStores = 'family_clothing_stores',
  FastFoodRestaurants = 'fast_food_restaurants',
  FinancialInstitutions = 'financial_institutions',
  FinesGovernmentAdministrativeEntities = 'fines_government_administrative_entities',
  FireplaceFireplaceScreensAndAccessoriesStores = 'fireplace_fireplace_screens_and_accessories_stores',
  FloorCoveringStores = 'floor_covering_stores',
  Florists = 'florists',
  FloristsSuppliesNurseryStockAndFlowers = 'florists_supplies_nursery_stock_and_flowers',
  FreezerAndLockerMeatProvisioners = 'freezer_and_locker_meat_provisioners',
  FuelDealersNonAutomotive = 'fuel_dealers_non_automotive',
  FuneralServicesCrematories = 'funeral_services_crematories',
  FurnitureHomeFurnishingsAndEquipmentStoresExceptAppliances = 'furniture_home_furnishings_and_equipment_stores_except_appliances',
  FurnitureRepairRefinishing = 'furniture_repair_refinishing',
  FurriersAndFurShops = 'furriers_and_fur_shops',
  GeneralServices = 'general_services',
  GiftCardNoveltyAndSouvenirShops = 'gift_card_novelty_and_souvenir_shops',
  GlassPaintAndWallpaperStores = 'glass_paint_and_wallpaper_stores',
  GlasswareCrystalStores = 'glassware_crystal_stores',
  GolfCoursesPublic = 'golf_courses_public',
  GovernmentServices = 'government_services',
  GroceryStoresSupermarkets = 'grocery_stores_supermarkets',
  HardwareEquipmentAndSupplies = 'hardware_equipment_and_supplies',
  HardwareStores = 'hardware_stores',
  HealthAndBeautySpas = 'health_and_beauty_spas',
  HearingAidsSalesAndSupplies = 'hearing_aids_sales_and_supplies',
  HeatingPlumbingAC = 'heating_plumbing_a_c',
  HobbyToyAndGameShops = 'hobby_toy_and_game_shops',
  HomeSupplyWarehouseStores = 'home_supply_warehouse_stores',
  Hospitals = 'hospitals',
  HotelsMotelsAndResorts = 'hotels_motels_and_resorts',
  HouseholdApplianceStores = 'household_appliance_stores',
  IndustrialSupplies = 'industrial_supplies',
  InformationRetrievalServices = 'information_retrieval_services',
  InsuranceDefault = 'insurance_default',
  InsuranceUnderwritingPremiums = 'insurance_underwriting_premiums',
  IntraCompanyPurchases = 'intra_company_purchases',
  JewelryStoresWatchesClocksAndSilverwareStores = 'jewelry_stores_watches_clocks_and_silverware_stores',
  LandscapingServices = 'landscaping_services',
  Laundries = 'laundries',
  LaundryCleaningServices = 'laundry_cleaning_services',
  LegalServicesAttorneys = 'legal_services_attorneys',
  LuggageAndLeatherGoodsStores = 'luggage_and_leather_goods_stores',
  LumberBuildingMaterialsStores = 'lumber_building_materials_stores',
  ManualCashDisburse = 'manual_cash_disburse',
  MarinasServiceAndSupplies = 'marinas_service_and_supplies',
  MasonryStoneworkAndPlaster = 'masonry_stonework_and_plaster',
  MassageParlors = 'massage_parlors',
  MedicalAndDentalLabs = 'medical_and_dental_labs',
  MedicalDentalOphthalmicAndHospitalEquipmentAndSupplies = 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies',
  MedicalServices = 'medical_services',
  MembershipOrganizations = 'membership_organizations',
  MensAndBoysClothingAndAccessoriesStores = 'mens_and_boys_clothing_and_accessories_stores',
  MensWomensClothingStores = 'mens_womens_clothing_stores',
  MetalServiceCenters = 'metal_service_centers',
  Miscellaneous = 'miscellaneous',
  MiscellaneousApparelAndAccessoryShops = 'miscellaneous_apparel_and_accessory_shops',
  MiscellaneousAutoDealers = 'miscellaneous_auto_dealers',
  MiscellaneousBusinessServices = 'miscellaneous_business_services',
  MiscellaneousFoodStores = 'miscellaneous_food_stores',
  MiscellaneousGeneralMerchandise = 'miscellaneous_general_merchandise',
  MiscellaneousGeneralServices = 'miscellaneous_general_services',
  MiscellaneousHomeFurnishingSpecialtyStores = 'miscellaneous_home_furnishing_specialty_stores',
  MiscellaneousPublishingAndPrinting = 'miscellaneous_publishing_and_printing',
  MiscellaneousRecreationServices = 'miscellaneous_recreation_services',
  MiscellaneousRepairShops = 'miscellaneous_repair_shops',
  MiscellaneousSpecialtyRetail = 'miscellaneous_specialty_retail',
  MobileHomeDealers = 'mobile_home_dealers',
  MotionPictureTheaters = 'motion_picture_theaters',
  MotorFreightCarriersAndTrucking = 'motor_freight_carriers_and_trucking',
  MotorHomesDealers = 'motor_homes_dealers',
  MotorVehicleSuppliesAndNewParts = 'motor_vehicle_supplies_and_new_parts',
  MotorcycleShopsAndDealers = 'motorcycle_shops_and_dealers',
  MotorcycleShopsDealers = 'motorcycle_shops_dealers',
  MusicStoresMusicalInstrumentsPianosAndSheetMusic = 'music_stores_musical_instruments_pianos_and_sheet_music',
  NewsDealersAndNewsstands = 'news_dealers_and_newsstands',
  NonFiMoneyOrders = 'non_fi_money_orders',
  NonFiStoredValueCardPurchaseLoad = 'non_fi_stored_value_card_purchase_load',
  NondurableGoods = 'nondurable_goods',
  NurseriesLawnAndGardenSupplyStores = 'nurseries_lawn_and_garden_supply_stores',
  NursingPersonalCare = 'nursing_personal_care',
  OfficeAndCommercialFurniture = 'office_and_commercial_furniture',
  OpticiansEyeglasses = 'opticians_eyeglasses',
  OptometristsOphthalmologist = 'optometrists_ophthalmologist',
  OrthopedicGoodsProstheticDevices = 'orthopedic_goods_prosthetic_devices',
  Osteopaths = 'osteopaths',
  PackageStoresBeerWineAndLiquor = 'package_stores_beer_wine_and_liquor',
  PaintsVarnishesAndSupplies = 'paints_varnishes_and_supplies',
  ParkingLotsGarages = 'parking_lots_garages',
  PassengerRailways = 'passenger_railways',
  PawnShops = 'pawn_shops',
  PetShopsPetFoodAndSupplies = 'pet_shops_pet_food_and_supplies',
  PetroleumAndPetroleumProducts = 'petroleum_and_petroleum_products',
  PhotoDeveloping = 'photo_developing',
  PhotographicPhotocopyMicrofilmEquipmentAndSupplies = 'photographic_photocopy_microfilm_equipment_and_supplies',
  PhotographicStudios = 'photographic_studios',
  PictureVideoProduction = 'picture_video_production',
  PieceGoodsNotionsAndOtherDryGoods = 'piece_goods_notions_and_other_dry_goods',
  PlumbingHeatingEquipmentAndSupplies = 'plumbing_heating_equipment_and_supplies',
  PoliticalOrganizations = 'political_organizations',
  PostalServicesGovernmentOnly = 'postal_services_government_only',
  PreciousStonesAndMetalsWatchesAndJewelry = 'precious_stones_and_metals_watches_and_jewelry',
  ProfessionalServices = 'professional_services',
  PublicWarehousingAndStorage = 'public_warehousing_and_storage',
  QuickCopyReproAndBlueprint = 'quick_copy_repro_and_blueprint',
  Railroads = 'railroads',
  RealEstateAgentsAndManagersRentals = 'real_estate_agents_and_managers_rentals',
  RecordStores = 'record_stores',
  RecreationalVehicleRentals = 'recreational_vehicle_rentals',
  ReligiousGoodsStores = 'religious_goods_stores',
  ReligiousOrganizations = 'religious_organizations',
  RoofingSidingSheetMetal = 'roofing_siding_sheet_metal',
  SecretarialSupportServices = 'secretarial_support_services',
  SecurityBrokersDealers = 'security_brokers_dealers',
  ServiceStations = 'service_stations',
  SewingNeedleworkFabricAndPieceGoodsStores = 'sewing_needlework_fabric_and_piece_goods_stores',
  ShoeRepairHatCleaning = 'shoe_repair_hat_cleaning',
  ShoeStores = 'shoe_stores',
  SmallApplianceRepair = 'small_appliance_repair',
  SnowmobileDealers = 'snowmobile_dealers',
  SpecialTradeServices = 'special_trade_services',
  SpecialtyCleaning = 'specialty_cleaning',
  SportingGoodsStores = 'sporting_goods_stores',
  SportingRecreationCamps = 'sporting_recreation_camps',
  SportsAndRidingApparelStores = 'sports_and_riding_apparel_stores',
  SportsClubsFields = 'sports_clubs_fields',
  StampAndCoinStores = 'stamp_and_coin_stores',
  StationaryOfficeSuppliesPrintingAndWritingPaper = 'stationary_office_supplies_printing_and_writing_paper',
  StationeryStoresOfficeAndSchoolSupplyStores = 'stationery_stores_office_and_school_supply_stores',
  SwimmingPoolsSales = 'swimming_pools_sales',
  TUiTravelGermany = 't_ui_travel_germany',
  TailorsAlterations = 'tailors_alterations',
  TaxPaymentsGovernmentAgencies = 'tax_payments_government_agencies',
  TaxPreparationServices = 'tax_preparation_services',
  TaxicabsLimousines = 'taxicabs_limousines',
  TelecommunicationEquipmentAndTelephoneSales = 'telecommunication_equipment_and_telephone_sales',
  TelecommunicationServices = 'telecommunication_services',
  TelegraphServices = 'telegraph_services',
  TentAndAwningShops = 'tent_and_awning_shops',
  TestingLaboratories = 'testing_laboratories',
  TheatricalTicketAgencies = 'theatrical_ticket_agencies',
  Timeshares = 'timeshares',
  TireRetreadingAndRepair = 'tire_retreading_and_repair',
  TollsBridgeFees = 'tolls_bridge_fees',
  TouristAttractionsAndExhibits = 'tourist_attractions_and_exhibits',
  TowingServices = 'towing_services',
  TrailerParksCampgrounds = 'trailer_parks_campgrounds',
  TransportationServices = 'transportation_services',
  TravelAgenciesTourOperators = 'travel_agencies_tour_operators',
  TruckStopIteration = 'truck_stop_iteration',
  TruckUtilityTrailerRentals = 'truck_utility_trailer_rentals',
  TypesettingPlateMakingAndRelatedServices = 'typesetting_plate_making_and_related_services',
  TypewriterStores = 'typewriter_stores',
  USFederalGovernmentAgenciesOrDepartments = 'u_s_federal_government_agencies_or_departments',
  UniformsCommercialClothing = 'uniforms_commercial_clothing',
  UsedMerchandiseAndSecondhandStores = 'used_merchandise_and_secondhand_stores',
  Utilities = 'utilities',
  VarietyStores = 'variety_stores',
  VeterinaryServices = 'veterinary_services',
  VideoAmusementGameSupplies = 'video_amusement_game_supplies',
  VideoGameArcades = 'video_game_arcades',
  VideoTapeRentalStores = 'video_tape_rental_stores',
  VocationalTradeSchools = 'vocational_trade_schools',
  WatchJewelryRepair = 'watch_jewelry_repair',
  WeldingRepair = 'welding_repair',
  WholesaleClubs = 'wholesale_clubs',
  WigAndToupeeStores = 'wig_and_toupee_stores',
  WiresMoneyOrders = 'wires_money_orders',
  WomensAccessoryAndSpecialtyShops = 'womens_accessory_and_specialty_shops',
  WomensReadyToWearStores = 'womens_ready_to_wear_stores',
  WreckingAndSalvageYards = 'wrecking_and_salvage_yards'
}

export type Stripe_IssuingCardholderSpendingLimit = {
  __typename?: 'Stripe_IssuingCardholderSpendingLimit';
  /** Maximum amount allowed to spend per interval. */
  amount?: Maybe<Scalars['Int']>;
  /** Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) this limit applies to. Omitting this field will apply the limit to all categories. */
  categories?: Maybe<Array<Maybe<Stripe_IssuingCardholderSpendingLimitCategoriesProperty>>>;
  /** Interval (or event) to which the amount applies. */
  interval?: Maybe<Stripe_IssuingCardholderSpendingLimitIntervalProperty>;
};

export enum Stripe_IssuingCardholderSpendingLimitCategoriesProperty {
  AcRefrigerationRepair = 'ac_refrigeration_repair',
  AccountingBookkeepingServices = 'accounting_bookkeeping_services',
  AdvertisingServices = 'advertising_services',
  AgriculturalCooperative = 'agricultural_cooperative',
  AirlinesAirCarriers = 'airlines_air_carriers',
  AirportsFlyingFields = 'airports_flying_fields',
  AmbulanceServices = 'ambulance_services',
  AmusementParksCarnivals = 'amusement_parks_carnivals',
  AntiqueReproductions = 'antique_reproductions',
  AntiqueShops = 'antique_shops',
  Aquariums = 'aquariums',
  ArchitecturalSurveyingServices = 'architectural_surveying_services',
  ArtDealersAndGalleries = 'art_dealers_and_galleries',
  ArtistsSupplyAndCraftShops = 'artists_supply_and_craft_shops',
  AutoAndHomeSupplyStores = 'auto_and_home_supply_stores',
  AutoBodyRepairShops = 'auto_body_repair_shops',
  AutoPaintShops = 'auto_paint_shops',
  AutoServiceShops = 'auto_service_shops',
  AutomatedCashDisburse = 'automated_cash_disburse',
  AutomatedFuelDispensers = 'automated_fuel_dispensers',
  AutomobileAssociations = 'automobile_associations',
  AutomotivePartsAndAccessoriesStores = 'automotive_parts_and_accessories_stores',
  AutomotiveTireStores = 'automotive_tire_stores',
  BailAndBondPayments = 'bail_and_bond_payments',
  Bakeries = 'bakeries',
  BandsOrchestras = 'bands_orchestras',
  BarberAndBeautyShops = 'barber_and_beauty_shops',
  BettingCasinoGambling = 'betting_casino_gambling',
  BicycleShops = 'bicycle_shops',
  BilliardPoolEstablishments = 'billiard_pool_establishments',
  BoatDealers = 'boat_dealers',
  BoatRentalsAndLeases = 'boat_rentals_and_leases',
  BookStores = 'book_stores',
  BooksPeriodicalsAndNewspapers = 'books_periodicals_and_newspapers',
  BowlingAlleys = 'bowling_alleys',
  BusLines = 'bus_lines',
  BusinessSecretarialSchools = 'business_secretarial_schools',
  BuyingShoppingServices = 'buying_shopping_services',
  CableSatelliteAndOtherPayTelevisionAndRadio = 'cable_satellite_and_other_pay_television_and_radio',
  CameraAndPhotographicSupplyStores = 'camera_and_photographic_supply_stores',
  CandyNutAndConfectioneryStores = 'candy_nut_and_confectionery_stores',
  CarAndTruckDealersNewUsed = 'car_and_truck_dealers_new_used',
  CarAndTruckDealersUsedOnly = 'car_and_truck_dealers_used_only',
  CarRentalAgencies = 'car_rental_agencies',
  CarWashes = 'car_washes',
  CarpentryServices = 'carpentry_services',
  CarpetUpholsteryCleaning = 'carpet_upholstery_cleaning',
  Caterers = 'caterers',
  CharitableAndSocialServiceOrganizationsFundraising = 'charitable_and_social_service_organizations_fundraising',
  ChemicalsAndAlliedProducts = 'chemicals_and_allied_products',
  ChildCareServices = 'child_care_services',
  ChildrensAndInfantsWearStores = 'childrens_and_infants_wear_stores',
  ChiropodistsPodiatrists = 'chiropodists_podiatrists',
  Chiropractors = 'chiropractors',
  CigarStoresAndStands = 'cigar_stores_and_stands',
  CivicSocialFraternalAssociations = 'civic_social_fraternal_associations',
  CleaningAndMaintenance = 'cleaning_and_maintenance',
  ClothingRental = 'clothing_rental',
  CollegesUniversities = 'colleges_universities',
  CommercialEquipment = 'commercial_equipment',
  CommercialFootwear = 'commercial_footwear',
  CommercialPhotographyArtAndGraphics = 'commercial_photography_art_and_graphics',
  CommuterTransportAndFerries = 'commuter_transport_and_ferries',
  ComputerNetworkServices = 'computer_network_services',
  ComputerProgramming = 'computer_programming',
  ComputerRepair = 'computer_repair',
  ComputerSoftwareStores = 'computer_software_stores',
  ComputersPeripheralsAndSoftware = 'computers_peripherals_and_software',
  ConcreteWorkServices = 'concrete_work_services',
  ConstructionMaterials = 'construction_materials',
  ConsultingPublicRelations = 'consulting_public_relations',
  CorrespondenceSchools = 'correspondence_schools',
  CosmeticStores = 'cosmetic_stores',
  CounselingServices = 'counseling_services',
  CountryClubs = 'country_clubs',
  CourierServices = 'courier_services',
  CourtCosts = 'court_costs',
  CreditReportingAgencies = 'credit_reporting_agencies',
  CruiseLines = 'cruise_lines',
  DairyProductsStores = 'dairy_products_stores',
  DanceHallStudiosSchools = 'dance_hall_studios_schools',
  DatingEscortServices = 'dating_escort_services',
  DentistsOrthodontists = 'dentists_orthodontists',
  DepartmentStores = 'department_stores',
  DetectiveAgencies = 'detective_agencies',
  DigitalGoodsApplications = 'digital_goods_applications',
  DigitalGoodsGames = 'digital_goods_games',
  DigitalGoodsLargeVolume = 'digital_goods_large_volume',
  DigitalGoodsMedia = 'digital_goods_media',
  DirectMarketingCatalogMerchant = 'direct_marketing_catalog_merchant',
  DirectMarketingCombinationCatalogAndRetailMerchant = 'direct_marketing_combination_catalog_and_retail_merchant',
  DirectMarketingInboundTelemarketing = 'direct_marketing_inbound_telemarketing',
  DirectMarketingInsuranceServices = 'direct_marketing_insurance_services',
  DirectMarketingOther = 'direct_marketing_other',
  DirectMarketingOutboundTelemarketing = 'direct_marketing_outbound_telemarketing',
  DirectMarketingSubscription = 'direct_marketing_subscription',
  DirectMarketingTravel = 'direct_marketing_travel',
  DiscountStores = 'discount_stores',
  Doctors = 'doctors',
  DoorToDoorSales = 'door_to_door_sales',
  DraperyWindowCoveringAndUpholsteryStores = 'drapery_window_covering_and_upholstery_stores',
  DrinkingPlaces = 'drinking_places',
  DrugStoresAndPharmacies = 'drug_stores_and_pharmacies',
  DrugsDrugProprietariesAndDruggistSundries = 'drugs_drug_proprietaries_and_druggist_sundries',
  DryCleaners = 'dry_cleaners',
  DurableGoods = 'durable_goods',
  DutyFreeStores = 'duty_free_stores',
  EatingPlacesRestaurants = 'eating_places_restaurants',
  EducationalServices = 'educational_services',
  ElectricRazorStores = 'electric_razor_stores',
  ElectricalPartsAndEquipment = 'electrical_parts_and_equipment',
  ElectricalServices = 'electrical_services',
  ElectronicsRepairShops = 'electronics_repair_shops',
  ElectronicsStores = 'electronics_stores',
  ElementarySecondarySchools = 'elementary_secondary_schools',
  EmploymentTempAgencies = 'employment_temp_agencies',
  EquipmentRental = 'equipment_rental',
  ExterminatingServices = 'exterminating_services',
  FamilyClothingStores = 'family_clothing_stores',
  FastFoodRestaurants = 'fast_food_restaurants',
  FinancialInstitutions = 'financial_institutions',
  FinesGovernmentAdministrativeEntities = 'fines_government_administrative_entities',
  FireplaceFireplaceScreensAndAccessoriesStores = 'fireplace_fireplace_screens_and_accessories_stores',
  FloorCoveringStores = 'floor_covering_stores',
  Florists = 'florists',
  FloristsSuppliesNurseryStockAndFlowers = 'florists_supplies_nursery_stock_and_flowers',
  FreezerAndLockerMeatProvisioners = 'freezer_and_locker_meat_provisioners',
  FuelDealersNonAutomotive = 'fuel_dealers_non_automotive',
  FuneralServicesCrematories = 'funeral_services_crematories',
  FurnitureHomeFurnishingsAndEquipmentStoresExceptAppliances = 'furniture_home_furnishings_and_equipment_stores_except_appliances',
  FurnitureRepairRefinishing = 'furniture_repair_refinishing',
  FurriersAndFurShops = 'furriers_and_fur_shops',
  GeneralServices = 'general_services',
  GiftCardNoveltyAndSouvenirShops = 'gift_card_novelty_and_souvenir_shops',
  GlassPaintAndWallpaperStores = 'glass_paint_and_wallpaper_stores',
  GlasswareCrystalStores = 'glassware_crystal_stores',
  GolfCoursesPublic = 'golf_courses_public',
  GovernmentServices = 'government_services',
  GroceryStoresSupermarkets = 'grocery_stores_supermarkets',
  HardwareEquipmentAndSupplies = 'hardware_equipment_and_supplies',
  HardwareStores = 'hardware_stores',
  HealthAndBeautySpas = 'health_and_beauty_spas',
  HearingAidsSalesAndSupplies = 'hearing_aids_sales_and_supplies',
  HeatingPlumbingAC = 'heating_plumbing_a_c',
  HobbyToyAndGameShops = 'hobby_toy_and_game_shops',
  HomeSupplyWarehouseStores = 'home_supply_warehouse_stores',
  Hospitals = 'hospitals',
  HotelsMotelsAndResorts = 'hotels_motels_and_resorts',
  HouseholdApplianceStores = 'household_appliance_stores',
  IndustrialSupplies = 'industrial_supplies',
  InformationRetrievalServices = 'information_retrieval_services',
  InsuranceDefault = 'insurance_default',
  InsuranceUnderwritingPremiums = 'insurance_underwriting_premiums',
  IntraCompanyPurchases = 'intra_company_purchases',
  JewelryStoresWatchesClocksAndSilverwareStores = 'jewelry_stores_watches_clocks_and_silverware_stores',
  LandscapingServices = 'landscaping_services',
  Laundries = 'laundries',
  LaundryCleaningServices = 'laundry_cleaning_services',
  LegalServicesAttorneys = 'legal_services_attorneys',
  LuggageAndLeatherGoodsStores = 'luggage_and_leather_goods_stores',
  LumberBuildingMaterialsStores = 'lumber_building_materials_stores',
  ManualCashDisburse = 'manual_cash_disburse',
  MarinasServiceAndSupplies = 'marinas_service_and_supplies',
  MasonryStoneworkAndPlaster = 'masonry_stonework_and_plaster',
  MassageParlors = 'massage_parlors',
  MedicalAndDentalLabs = 'medical_and_dental_labs',
  MedicalDentalOphthalmicAndHospitalEquipmentAndSupplies = 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies',
  MedicalServices = 'medical_services',
  MembershipOrganizations = 'membership_organizations',
  MensAndBoysClothingAndAccessoriesStores = 'mens_and_boys_clothing_and_accessories_stores',
  MensWomensClothingStores = 'mens_womens_clothing_stores',
  MetalServiceCenters = 'metal_service_centers',
  Miscellaneous = 'miscellaneous',
  MiscellaneousApparelAndAccessoryShops = 'miscellaneous_apparel_and_accessory_shops',
  MiscellaneousAutoDealers = 'miscellaneous_auto_dealers',
  MiscellaneousBusinessServices = 'miscellaneous_business_services',
  MiscellaneousFoodStores = 'miscellaneous_food_stores',
  MiscellaneousGeneralMerchandise = 'miscellaneous_general_merchandise',
  MiscellaneousGeneralServices = 'miscellaneous_general_services',
  MiscellaneousHomeFurnishingSpecialtyStores = 'miscellaneous_home_furnishing_specialty_stores',
  MiscellaneousPublishingAndPrinting = 'miscellaneous_publishing_and_printing',
  MiscellaneousRecreationServices = 'miscellaneous_recreation_services',
  MiscellaneousRepairShops = 'miscellaneous_repair_shops',
  MiscellaneousSpecialtyRetail = 'miscellaneous_specialty_retail',
  MobileHomeDealers = 'mobile_home_dealers',
  MotionPictureTheaters = 'motion_picture_theaters',
  MotorFreightCarriersAndTrucking = 'motor_freight_carriers_and_trucking',
  MotorHomesDealers = 'motor_homes_dealers',
  MotorVehicleSuppliesAndNewParts = 'motor_vehicle_supplies_and_new_parts',
  MotorcycleShopsAndDealers = 'motorcycle_shops_and_dealers',
  MotorcycleShopsDealers = 'motorcycle_shops_dealers',
  MusicStoresMusicalInstrumentsPianosAndSheetMusic = 'music_stores_musical_instruments_pianos_and_sheet_music',
  NewsDealersAndNewsstands = 'news_dealers_and_newsstands',
  NonFiMoneyOrders = 'non_fi_money_orders',
  NonFiStoredValueCardPurchaseLoad = 'non_fi_stored_value_card_purchase_load',
  NondurableGoods = 'nondurable_goods',
  NurseriesLawnAndGardenSupplyStores = 'nurseries_lawn_and_garden_supply_stores',
  NursingPersonalCare = 'nursing_personal_care',
  OfficeAndCommercialFurniture = 'office_and_commercial_furniture',
  OpticiansEyeglasses = 'opticians_eyeglasses',
  OptometristsOphthalmologist = 'optometrists_ophthalmologist',
  OrthopedicGoodsProstheticDevices = 'orthopedic_goods_prosthetic_devices',
  Osteopaths = 'osteopaths',
  PackageStoresBeerWineAndLiquor = 'package_stores_beer_wine_and_liquor',
  PaintsVarnishesAndSupplies = 'paints_varnishes_and_supplies',
  ParkingLotsGarages = 'parking_lots_garages',
  PassengerRailways = 'passenger_railways',
  PawnShops = 'pawn_shops',
  PetShopsPetFoodAndSupplies = 'pet_shops_pet_food_and_supplies',
  PetroleumAndPetroleumProducts = 'petroleum_and_petroleum_products',
  PhotoDeveloping = 'photo_developing',
  PhotographicPhotocopyMicrofilmEquipmentAndSupplies = 'photographic_photocopy_microfilm_equipment_and_supplies',
  PhotographicStudios = 'photographic_studios',
  PictureVideoProduction = 'picture_video_production',
  PieceGoodsNotionsAndOtherDryGoods = 'piece_goods_notions_and_other_dry_goods',
  PlumbingHeatingEquipmentAndSupplies = 'plumbing_heating_equipment_and_supplies',
  PoliticalOrganizations = 'political_organizations',
  PostalServicesGovernmentOnly = 'postal_services_government_only',
  PreciousStonesAndMetalsWatchesAndJewelry = 'precious_stones_and_metals_watches_and_jewelry',
  ProfessionalServices = 'professional_services',
  PublicWarehousingAndStorage = 'public_warehousing_and_storage',
  QuickCopyReproAndBlueprint = 'quick_copy_repro_and_blueprint',
  Railroads = 'railroads',
  RealEstateAgentsAndManagersRentals = 'real_estate_agents_and_managers_rentals',
  RecordStores = 'record_stores',
  RecreationalVehicleRentals = 'recreational_vehicle_rentals',
  ReligiousGoodsStores = 'religious_goods_stores',
  ReligiousOrganizations = 'religious_organizations',
  RoofingSidingSheetMetal = 'roofing_siding_sheet_metal',
  SecretarialSupportServices = 'secretarial_support_services',
  SecurityBrokersDealers = 'security_brokers_dealers',
  ServiceStations = 'service_stations',
  SewingNeedleworkFabricAndPieceGoodsStores = 'sewing_needlework_fabric_and_piece_goods_stores',
  ShoeRepairHatCleaning = 'shoe_repair_hat_cleaning',
  ShoeStores = 'shoe_stores',
  SmallApplianceRepair = 'small_appliance_repair',
  SnowmobileDealers = 'snowmobile_dealers',
  SpecialTradeServices = 'special_trade_services',
  SpecialtyCleaning = 'specialty_cleaning',
  SportingGoodsStores = 'sporting_goods_stores',
  SportingRecreationCamps = 'sporting_recreation_camps',
  SportsAndRidingApparelStores = 'sports_and_riding_apparel_stores',
  SportsClubsFields = 'sports_clubs_fields',
  StampAndCoinStores = 'stamp_and_coin_stores',
  StationaryOfficeSuppliesPrintingAndWritingPaper = 'stationary_office_supplies_printing_and_writing_paper',
  StationeryStoresOfficeAndSchoolSupplyStores = 'stationery_stores_office_and_school_supply_stores',
  SwimmingPoolsSales = 'swimming_pools_sales',
  TUiTravelGermany = 't_ui_travel_germany',
  TailorsAlterations = 'tailors_alterations',
  TaxPaymentsGovernmentAgencies = 'tax_payments_government_agencies',
  TaxPreparationServices = 'tax_preparation_services',
  TaxicabsLimousines = 'taxicabs_limousines',
  TelecommunicationEquipmentAndTelephoneSales = 'telecommunication_equipment_and_telephone_sales',
  TelecommunicationServices = 'telecommunication_services',
  TelegraphServices = 'telegraph_services',
  TentAndAwningShops = 'tent_and_awning_shops',
  TestingLaboratories = 'testing_laboratories',
  TheatricalTicketAgencies = 'theatrical_ticket_agencies',
  Timeshares = 'timeshares',
  TireRetreadingAndRepair = 'tire_retreading_and_repair',
  TollsBridgeFees = 'tolls_bridge_fees',
  TouristAttractionsAndExhibits = 'tourist_attractions_and_exhibits',
  TowingServices = 'towing_services',
  TrailerParksCampgrounds = 'trailer_parks_campgrounds',
  TransportationServices = 'transportation_services',
  TravelAgenciesTourOperators = 'travel_agencies_tour_operators',
  TruckStopIteration = 'truck_stop_iteration',
  TruckUtilityTrailerRentals = 'truck_utility_trailer_rentals',
  TypesettingPlateMakingAndRelatedServices = 'typesetting_plate_making_and_related_services',
  TypewriterStores = 'typewriter_stores',
  USFederalGovernmentAgenciesOrDepartments = 'u_s_federal_government_agencies_or_departments',
  UniformsCommercialClothing = 'uniforms_commercial_clothing',
  UsedMerchandiseAndSecondhandStores = 'used_merchandise_and_secondhand_stores',
  Utilities = 'utilities',
  VarietyStores = 'variety_stores',
  VeterinaryServices = 'veterinary_services',
  VideoAmusementGameSupplies = 'video_amusement_game_supplies',
  VideoGameArcades = 'video_game_arcades',
  VideoTapeRentalStores = 'video_tape_rental_stores',
  VocationalTradeSchools = 'vocational_trade_schools',
  WatchJewelryRepair = 'watch_jewelry_repair',
  WeldingRepair = 'welding_repair',
  WholesaleClubs = 'wholesale_clubs',
  WigAndToupeeStores = 'wig_and_toupee_stores',
  WiresMoneyOrders = 'wires_money_orders',
  WomensAccessoryAndSpecialtyShops = 'womens_accessory_and_specialty_shops',
  WomensReadyToWearStores = 'womens_ready_to_wear_stores',
  WreckingAndSalvageYards = 'wrecking_and_salvage_yards'
}

export enum Stripe_IssuingCardholderSpendingLimitIntervalProperty {
  AllTime = 'all_time',
  Daily = 'daily',
  Monthly = 'monthly',
  PerAuthorization = 'per_authorization',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export enum Stripe_IssuingCardholderStatusProperty {
  Active = 'active',
  Blocked = 'blocked',
  Inactive = 'inactive'
}

export enum Stripe_IssuingCardholderTypeProperty {
  Company = 'company',
  Individual = 'individual'
}

export enum Stripe_IssuingCardObjectProperty {
  IssuingDoTcard = 'issuingDOTcard'
}

export type Stripe_IssuingCardReplacedByProperty = WrappedString | Stripe_IssuingCard;

export type Stripe_IssuingCardReplacementForProperty = WrappedString | Stripe_IssuingCard;

export enum Stripe_IssuingCardReplacementReasonProperty {
  Damaged = 'damaged',
  Expired = 'expired',
  Lost = 'lost',
  Stolen = 'stolen'
}

export type Stripe_IssuingCardShipping = {
  __typename?: 'Stripe_IssuingCardShipping';
  address?: Maybe<Stripe_Address>;
  /** The delivery company that shipped a card. */
  carrier?: Maybe<Stripe_IssuingCardShippingCarrierProperty>;
  /** A unix timestamp representing a best estimate of when the card will be delivered. */
  eta?: Maybe<Scalars['Int']>;
  /** Recipient name. */
  name?: Maybe<Scalars['String']>;
  /** Shipment service, such as `standard` or `express`. */
  service?: Maybe<Stripe_IssuingCardShippingServiceProperty>;
  /** The delivery status of the card. */
  status?: Maybe<Stripe_IssuingCardShippingStatusProperty>;
  /** A tracking number for a card shipment. */
  tracking_number?: Maybe<Scalars['String']>;
  /** A link to the shipping carrier's site where you can view detailed information about a card shipment. */
  tracking_url?: Maybe<Scalars['String']>;
  /** Packaging options. */
  type?: Maybe<Stripe_IssuingCardShippingTypeProperty>;
};

export enum Stripe_IssuingCardShippingCarrierProperty {
  Dhl = 'dhl',
  Fedex = 'fedex',
  RoyalMail = 'royal_mail',
  Usps = 'usps'
}

export enum Stripe_IssuingCardShippingServiceProperty {
  Express = 'express',
  Priority = 'priority',
  Standard = 'standard'
}

export enum Stripe_IssuingCardShippingStatusProperty {
  Canceled = 'canceled',
  Delivered = 'delivered',
  Failure = 'failure',
  Pending = 'pending',
  Returned = 'returned',
  Shipped = 'shipped'
}

export enum Stripe_IssuingCardShippingTypeProperty {
  Bulk = 'bulk',
  Individual = 'individual'
}

export type Stripe_IssuingCardAuthorizationControls = {
  __typename?: 'Stripe_IssuingCardAuthorizationControls';
  /** Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to allow. All other categories will be blocked. Cannot be set with `blocked_categories`. */
  allowed_categories?: Maybe<Array<Maybe<Stripe_IssuingCardAuthorizationControlsAllowedCategoriesProperty>>>;
  /** Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) of authorizations to decline. All other categories will be allowed. Cannot be set with `allowed_categories`. */
  blocked_categories?: Maybe<Array<Maybe<Stripe_IssuingCardAuthorizationControlsBlockedCategoriesProperty>>>;
  /** Limit spending with amount-based rules that apply across any cards this card replaced (i.e., its `replacement_for` card and _that_ card's `replacement_for` card, up the chain). */
  spending_limits?: Maybe<Array<Maybe<Stripe_IssuingCardSpendingLimit>>>;
  /** Currency of the amounts within `spending_limits`. Always the same as the currency of the card. */
  spending_limits_currency?: Maybe<Scalars['String']>;
};

export enum Stripe_IssuingCardAuthorizationControlsAllowedCategoriesProperty {
  AcRefrigerationRepair = 'ac_refrigeration_repair',
  AccountingBookkeepingServices = 'accounting_bookkeeping_services',
  AdvertisingServices = 'advertising_services',
  AgriculturalCooperative = 'agricultural_cooperative',
  AirlinesAirCarriers = 'airlines_air_carriers',
  AirportsFlyingFields = 'airports_flying_fields',
  AmbulanceServices = 'ambulance_services',
  AmusementParksCarnivals = 'amusement_parks_carnivals',
  AntiqueReproductions = 'antique_reproductions',
  AntiqueShops = 'antique_shops',
  Aquariums = 'aquariums',
  ArchitecturalSurveyingServices = 'architectural_surveying_services',
  ArtDealersAndGalleries = 'art_dealers_and_galleries',
  ArtistsSupplyAndCraftShops = 'artists_supply_and_craft_shops',
  AutoAndHomeSupplyStores = 'auto_and_home_supply_stores',
  AutoBodyRepairShops = 'auto_body_repair_shops',
  AutoPaintShops = 'auto_paint_shops',
  AutoServiceShops = 'auto_service_shops',
  AutomatedCashDisburse = 'automated_cash_disburse',
  AutomatedFuelDispensers = 'automated_fuel_dispensers',
  AutomobileAssociations = 'automobile_associations',
  AutomotivePartsAndAccessoriesStores = 'automotive_parts_and_accessories_stores',
  AutomotiveTireStores = 'automotive_tire_stores',
  BailAndBondPayments = 'bail_and_bond_payments',
  Bakeries = 'bakeries',
  BandsOrchestras = 'bands_orchestras',
  BarberAndBeautyShops = 'barber_and_beauty_shops',
  BettingCasinoGambling = 'betting_casino_gambling',
  BicycleShops = 'bicycle_shops',
  BilliardPoolEstablishments = 'billiard_pool_establishments',
  BoatDealers = 'boat_dealers',
  BoatRentalsAndLeases = 'boat_rentals_and_leases',
  BookStores = 'book_stores',
  BooksPeriodicalsAndNewspapers = 'books_periodicals_and_newspapers',
  BowlingAlleys = 'bowling_alleys',
  BusLines = 'bus_lines',
  BusinessSecretarialSchools = 'business_secretarial_schools',
  BuyingShoppingServices = 'buying_shopping_services',
  CableSatelliteAndOtherPayTelevisionAndRadio = 'cable_satellite_and_other_pay_television_and_radio',
  CameraAndPhotographicSupplyStores = 'camera_and_photographic_supply_stores',
  CandyNutAndConfectioneryStores = 'candy_nut_and_confectionery_stores',
  CarAndTruckDealersNewUsed = 'car_and_truck_dealers_new_used',
  CarAndTruckDealersUsedOnly = 'car_and_truck_dealers_used_only',
  CarRentalAgencies = 'car_rental_agencies',
  CarWashes = 'car_washes',
  CarpentryServices = 'carpentry_services',
  CarpetUpholsteryCleaning = 'carpet_upholstery_cleaning',
  Caterers = 'caterers',
  CharitableAndSocialServiceOrganizationsFundraising = 'charitable_and_social_service_organizations_fundraising',
  ChemicalsAndAlliedProducts = 'chemicals_and_allied_products',
  ChildCareServices = 'child_care_services',
  ChildrensAndInfantsWearStores = 'childrens_and_infants_wear_stores',
  ChiropodistsPodiatrists = 'chiropodists_podiatrists',
  Chiropractors = 'chiropractors',
  CigarStoresAndStands = 'cigar_stores_and_stands',
  CivicSocialFraternalAssociations = 'civic_social_fraternal_associations',
  CleaningAndMaintenance = 'cleaning_and_maintenance',
  ClothingRental = 'clothing_rental',
  CollegesUniversities = 'colleges_universities',
  CommercialEquipment = 'commercial_equipment',
  CommercialFootwear = 'commercial_footwear',
  CommercialPhotographyArtAndGraphics = 'commercial_photography_art_and_graphics',
  CommuterTransportAndFerries = 'commuter_transport_and_ferries',
  ComputerNetworkServices = 'computer_network_services',
  ComputerProgramming = 'computer_programming',
  ComputerRepair = 'computer_repair',
  ComputerSoftwareStores = 'computer_software_stores',
  ComputersPeripheralsAndSoftware = 'computers_peripherals_and_software',
  ConcreteWorkServices = 'concrete_work_services',
  ConstructionMaterials = 'construction_materials',
  ConsultingPublicRelations = 'consulting_public_relations',
  CorrespondenceSchools = 'correspondence_schools',
  CosmeticStores = 'cosmetic_stores',
  CounselingServices = 'counseling_services',
  CountryClubs = 'country_clubs',
  CourierServices = 'courier_services',
  CourtCosts = 'court_costs',
  CreditReportingAgencies = 'credit_reporting_agencies',
  CruiseLines = 'cruise_lines',
  DairyProductsStores = 'dairy_products_stores',
  DanceHallStudiosSchools = 'dance_hall_studios_schools',
  DatingEscortServices = 'dating_escort_services',
  DentistsOrthodontists = 'dentists_orthodontists',
  DepartmentStores = 'department_stores',
  DetectiveAgencies = 'detective_agencies',
  DigitalGoodsApplications = 'digital_goods_applications',
  DigitalGoodsGames = 'digital_goods_games',
  DigitalGoodsLargeVolume = 'digital_goods_large_volume',
  DigitalGoodsMedia = 'digital_goods_media',
  DirectMarketingCatalogMerchant = 'direct_marketing_catalog_merchant',
  DirectMarketingCombinationCatalogAndRetailMerchant = 'direct_marketing_combination_catalog_and_retail_merchant',
  DirectMarketingInboundTelemarketing = 'direct_marketing_inbound_telemarketing',
  DirectMarketingInsuranceServices = 'direct_marketing_insurance_services',
  DirectMarketingOther = 'direct_marketing_other',
  DirectMarketingOutboundTelemarketing = 'direct_marketing_outbound_telemarketing',
  DirectMarketingSubscription = 'direct_marketing_subscription',
  DirectMarketingTravel = 'direct_marketing_travel',
  DiscountStores = 'discount_stores',
  Doctors = 'doctors',
  DoorToDoorSales = 'door_to_door_sales',
  DraperyWindowCoveringAndUpholsteryStores = 'drapery_window_covering_and_upholstery_stores',
  DrinkingPlaces = 'drinking_places',
  DrugStoresAndPharmacies = 'drug_stores_and_pharmacies',
  DrugsDrugProprietariesAndDruggistSundries = 'drugs_drug_proprietaries_and_druggist_sundries',
  DryCleaners = 'dry_cleaners',
  DurableGoods = 'durable_goods',
  DutyFreeStores = 'duty_free_stores',
  EatingPlacesRestaurants = 'eating_places_restaurants',
  EducationalServices = 'educational_services',
  ElectricRazorStores = 'electric_razor_stores',
  ElectricalPartsAndEquipment = 'electrical_parts_and_equipment',
  ElectricalServices = 'electrical_services',
  ElectronicsRepairShops = 'electronics_repair_shops',
  ElectronicsStores = 'electronics_stores',
  ElementarySecondarySchools = 'elementary_secondary_schools',
  EmploymentTempAgencies = 'employment_temp_agencies',
  EquipmentRental = 'equipment_rental',
  ExterminatingServices = 'exterminating_services',
  FamilyClothingStores = 'family_clothing_stores',
  FastFoodRestaurants = 'fast_food_restaurants',
  FinancialInstitutions = 'financial_institutions',
  FinesGovernmentAdministrativeEntities = 'fines_government_administrative_entities',
  FireplaceFireplaceScreensAndAccessoriesStores = 'fireplace_fireplace_screens_and_accessories_stores',
  FloorCoveringStores = 'floor_covering_stores',
  Florists = 'florists',
  FloristsSuppliesNurseryStockAndFlowers = 'florists_supplies_nursery_stock_and_flowers',
  FreezerAndLockerMeatProvisioners = 'freezer_and_locker_meat_provisioners',
  FuelDealersNonAutomotive = 'fuel_dealers_non_automotive',
  FuneralServicesCrematories = 'funeral_services_crematories',
  FurnitureHomeFurnishingsAndEquipmentStoresExceptAppliances = 'furniture_home_furnishings_and_equipment_stores_except_appliances',
  FurnitureRepairRefinishing = 'furniture_repair_refinishing',
  FurriersAndFurShops = 'furriers_and_fur_shops',
  GeneralServices = 'general_services',
  GiftCardNoveltyAndSouvenirShops = 'gift_card_novelty_and_souvenir_shops',
  GlassPaintAndWallpaperStores = 'glass_paint_and_wallpaper_stores',
  GlasswareCrystalStores = 'glassware_crystal_stores',
  GolfCoursesPublic = 'golf_courses_public',
  GovernmentServices = 'government_services',
  GroceryStoresSupermarkets = 'grocery_stores_supermarkets',
  HardwareEquipmentAndSupplies = 'hardware_equipment_and_supplies',
  HardwareStores = 'hardware_stores',
  HealthAndBeautySpas = 'health_and_beauty_spas',
  HearingAidsSalesAndSupplies = 'hearing_aids_sales_and_supplies',
  HeatingPlumbingAC = 'heating_plumbing_a_c',
  HobbyToyAndGameShops = 'hobby_toy_and_game_shops',
  HomeSupplyWarehouseStores = 'home_supply_warehouse_stores',
  Hospitals = 'hospitals',
  HotelsMotelsAndResorts = 'hotels_motels_and_resorts',
  HouseholdApplianceStores = 'household_appliance_stores',
  IndustrialSupplies = 'industrial_supplies',
  InformationRetrievalServices = 'information_retrieval_services',
  InsuranceDefault = 'insurance_default',
  InsuranceUnderwritingPremiums = 'insurance_underwriting_premiums',
  IntraCompanyPurchases = 'intra_company_purchases',
  JewelryStoresWatchesClocksAndSilverwareStores = 'jewelry_stores_watches_clocks_and_silverware_stores',
  LandscapingServices = 'landscaping_services',
  Laundries = 'laundries',
  LaundryCleaningServices = 'laundry_cleaning_services',
  LegalServicesAttorneys = 'legal_services_attorneys',
  LuggageAndLeatherGoodsStores = 'luggage_and_leather_goods_stores',
  LumberBuildingMaterialsStores = 'lumber_building_materials_stores',
  ManualCashDisburse = 'manual_cash_disburse',
  MarinasServiceAndSupplies = 'marinas_service_and_supplies',
  MasonryStoneworkAndPlaster = 'masonry_stonework_and_plaster',
  MassageParlors = 'massage_parlors',
  MedicalAndDentalLabs = 'medical_and_dental_labs',
  MedicalDentalOphthalmicAndHospitalEquipmentAndSupplies = 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies',
  MedicalServices = 'medical_services',
  MembershipOrganizations = 'membership_organizations',
  MensAndBoysClothingAndAccessoriesStores = 'mens_and_boys_clothing_and_accessories_stores',
  MensWomensClothingStores = 'mens_womens_clothing_stores',
  MetalServiceCenters = 'metal_service_centers',
  Miscellaneous = 'miscellaneous',
  MiscellaneousApparelAndAccessoryShops = 'miscellaneous_apparel_and_accessory_shops',
  MiscellaneousAutoDealers = 'miscellaneous_auto_dealers',
  MiscellaneousBusinessServices = 'miscellaneous_business_services',
  MiscellaneousFoodStores = 'miscellaneous_food_stores',
  MiscellaneousGeneralMerchandise = 'miscellaneous_general_merchandise',
  MiscellaneousGeneralServices = 'miscellaneous_general_services',
  MiscellaneousHomeFurnishingSpecialtyStores = 'miscellaneous_home_furnishing_specialty_stores',
  MiscellaneousPublishingAndPrinting = 'miscellaneous_publishing_and_printing',
  MiscellaneousRecreationServices = 'miscellaneous_recreation_services',
  MiscellaneousRepairShops = 'miscellaneous_repair_shops',
  MiscellaneousSpecialtyRetail = 'miscellaneous_specialty_retail',
  MobileHomeDealers = 'mobile_home_dealers',
  MotionPictureTheaters = 'motion_picture_theaters',
  MotorFreightCarriersAndTrucking = 'motor_freight_carriers_and_trucking',
  MotorHomesDealers = 'motor_homes_dealers',
  MotorVehicleSuppliesAndNewParts = 'motor_vehicle_supplies_and_new_parts',
  MotorcycleShopsAndDealers = 'motorcycle_shops_and_dealers',
  MotorcycleShopsDealers = 'motorcycle_shops_dealers',
  MusicStoresMusicalInstrumentsPianosAndSheetMusic = 'music_stores_musical_instruments_pianos_and_sheet_music',
  NewsDealersAndNewsstands = 'news_dealers_and_newsstands',
  NonFiMoneyOrders = 'non_fi_money_orders',
  NonFiStoredValueCardPurchaseLoad = 'non_fi_stored_value_card_purchase_load',
  NondurableGoods = 'nondurable_goods',
  NurseriesLawnAndGardenSupplyStores = 'nurseries_lawn_and_garden_supply_stores',
  NursingPersonalCare = 'nursing_personal_care',
  OfficeAndCommercialFurniture = 'office_and_commercial_furniture',
  OpticiansEyeglasses = 'opticians_eyeglasses',
  OptometristsOphthalmologist = 'optometrists_ophthalmologist',
  OrthopedicGoodsProstheticDevices = 'orthopedic_goods_prosthetic_devices',
  Osteopaths = 'osteopaths',
  PackageStoresBeerWineAndLiquor = 'package_stores_beer_wine_and_liquor',
  PaintsVarnishesAndSupplies = 'paints_varnishes_and_supplies',
  ParkingLotsGarages = 'parking_lots_garages',
  PassengerRailways = 'passenger_railways',
  PawnShops = 'pawn_shops',
  PetShopsPetFoodAndSupplies = 'pet_shops_pet_food_and_supplies',
  PetroleumAndPetroleumProducts = 'petroleum_and_petroleum_products',
  PhotoDeveloping = 'photo_developing',
  PhotographicPhotocopyMicrofilmEquipmentAndSupplies = 'photographic_photocopy_microfilm_equipment_and_supplies',
  PhotographicStudios = 'photographic_studios',
  PictureVideoProduction = 'picture_video_production',
  PieceGoodsNotionsAndOtherDryGoods = 'piece_goods_notions_and_other_dry_goods',
  PlumbingHeatingEquipmentAndSupplies = 'plumbing_heating_equipment_and_supplies',
  PoliticalOrganizations = 'political_organizations',
  PostalServicesGovernmentOnly = 'postal_services_government_only',
  PreciousStonesAndMetalsWatchesAndJewelry = 'precious_stones_and_metals_watches_and_jewelry',
  ProfessionalServices = 'professional_services',
  PublicWarehousingAndStorage = 'public_warehousing_and_storage',
  QuickCopyReproAndBlueprint = 'quick_copy_repro_and_blueprint',
  Railroads = 'railroads',
  RealEstateAgentsAndManagersRentals = 'real_estate_agents_and_managers_rentals',
  RecordStores = 'record_stores',
  RecreationalVehicleRentals = 'recreational_vehicle_rentals',
  ReligiousGoodsStores = 'religious_goods_stores',
  ReligiousOrganizations = 'religious_organizations',
  RoofingSidingSheetMetal = 'roofing_siding_sheet_metal',
  SecretarialSupportServices = 'secretarial_support_services',
  SecurityBrokersDealers = 'security_brokers_dealers',
  ServiceStations = 'service_stations',
  SewingNeedleworkFabricAndPieceGoodsStores = 'sewing_needlework_fabric_and_piece_goods_stores',
  ShoeRepairHatCleaning = 'shoe_repair_hat_cleaning',
  ShoeStores = 'shoe_stores',
  SmallApplianceRepair = 'small_appliance_repair',
  SnowmobileDealers = 'snowmobile_dealers',
  SpecialTradeServices = 'special_trade_services',
  SpecialtyCleaning = 'specialty_cleaning',
  SportingGoodsStores = 'sporting_goods_stores',
  SportingRecreationCamps = 'sporting_recreation_camps',
  SportsAndRidingApparelStores = 'sports_and_riding_apparel_stores',
  SportsClubsFields = 'sports_clubs_fields',
  StampAndCoinStores = 'stamp_and_coin_stores',
  StationaryOfficeSuppliesPrintingAndWritingPaper = 'stationary_office_supplies_printing_and_writing_paper',
  StationeryStoresOfficeAndSchoolSupplyStores = 'stationery_stores_office_and_school_supply_stores',
  SwimmingPoolsSales = 'swimming_pools_sales',
  TUiTravelGermany = 't_ui_travel_germany',
  TailorsAlterations = 'tailors_alterations',
  TaxPaymentsGovernmentAgencies = 'tax_payments_government_agencies',
  TaxPreparationServices = 'tax_preparation_services',
  TaxicabsLimousines = 'taxicabs_limousines',
  TelecommunicationEquipmentAndTelephoneSales = 'telecommunication_equipment_and_telephone_sales',
  TelecommunicationServices = 'telecommunication_services',
  TelegraphServices = 'telegraph_services',
  TentAndAwningShops = 'tent_and_awning_shops',
  TestingLaboratories = 'testing_laboratories',
  TheatricalTicketAgencies = 'theatrical_ticket_agencies',
  Timeshares = 'timeshares',
  TireRetreadingAndRepair = 'tire_retreading_and_repair',
  TollsBridgeFees = 'tolls_bridge_fees',
  TouristAttractionsAndExhibits = 'tourist_attractions_and_exhibits',
  TowingServices = 'towing_services',
  TrailerParksCampgrounds = 'trailer_parks_campgrounds',
  TransportationServices = 'transportation_services',
  TravelAgenciesTourOperators = 'travel_agencies_tour_operators',
  TruckStopIteration = 'truck_stop_iteration',
  TruckUtilityTrailerRentals = 'truck_utility_trailer_rentals',
  TypesettingPlateMakingAndRelatedServices = 'typesetting_plate_making_and_related_services',
  TypewriterStores = 'typewriter_stores',
  USFederalGovernmentAgenciesOrDepartments = 'u_s_federal_government_agencies_or_departments',
  UniformsCommercialClothing = 'uniforms_commercial_clothing',
  UsedMerchandiseAndSecondhandStores = 'used_merchandise_and_secondhand_stores',
  Utilities = 'utilities',
  VarietyStores = 'variety_stores',
  VeterinaryServices = 'veterinary_services',
  VideoAmusementGameSupplies = 'video_amusement_game_supplies',
  VideoGameArcades = 'video_game_arcades',
  VideoTapeRentalStores = 'video_tape_rental_stores',
  VocationalTradeSchools = 'vocational_trade_schools',
  WatchJewelryRepair = 'watch_jewelry_repair',
  WeldingRepair = 'welding_repair',
  WholesaleClubs = 'wholesale_clubs',
  WigAndToupeeStores = 'wig_and_toupee_stores',
  WiresMoneyOrders = 'wires_money_orders',
  WomensAccessoryAndSpecialtyShops = 'womens_accessory_and_specialty_shops',
  WomensReadyToWearStores = 'womens_ready_to_wear_stores',
  WreckingAndSalvageYards = 'wrecking_and_salvage_yards'
}

export enum Stripe_IssuingCardAuthorizationControlsBlockedCategoriesProperty {
  AcRefrigerationRepair = 'ac_refrigeration_repair',
  AccountingBookkeepingServices = 'accounting_bookkeeping_services',
  AdvertisingServices = 'advertising_services',
  AgriculturalCooperative = 'agricultural_cooperative',
  AirlinesAirCarriers = 'airlines_air_carriers',
  AirportsFlyingFields = 'airports_flying_fields',
  AmbulanceServices = 'ambulance_services',
  AmusementParksCarnivals = 'amusement_parks_carnivals',
  AntiqueReproductions = 'antique_reproductions',
  AntiqueShops = 'antique_shops',
  Aquariums = 'aquariums',
  ArchitecturalSurveyingServices = 'architectural_surveying_services',
  ArtDealersAndGalleries = 'art_dealers_and_galleries',
  ArtistsSupplyAndCraftShops = 'artists_supply_and_craft_shops',
  AutoAndHomeSupplyStores = 'auto_and_home_supply_stores',
  AutoBodyRepairShops = 'auto_body_repair_shops',
  AutoPaintShops = 'auto_paint_shops',
  AutoServiceShops = 'auto_service_shops',
  AutomatedCashDisburse = 'automated_cash_disburse',
  AutomatedFuelDispensers = 'automated_fuel_dispensers',
  AutomobileAssociations = 'automobile_associations',
  AutomotivePartsAndAccessoriesStores = 'automotive_parts_and_accessories_stores',
  AutomotiveTireStores = 'automotive_tire_stores',
  BailAndBondPayments = 'bail_and_bond_payments',
  Bakeries = 'bakeries',
  BandsOrchestras = 'bands_orchestras',
  BarberAndBeautyShops = 'barber_and_beauty_shops',
  BettingCasinoGambling = 'betting_casino_gambling',
  BicycleShops = 'bicycle_shops',
  BilliardPoolEstablishments = 'billiard_pool_establishments',
  BoatDealers = 'boat_dealers',
  BoatRentalsAndLeases = 'boat_rentals_and_leases',
  BookStores = 'book_stores',
  BooksPeriodicalsAndNewspapers = 'books_periodicals_and_newspapers',
  BowlingAlleys = 'bowling_alleys',
  BusLines = 'bus_lines',
  BusinessSecretarialSchools = 'business_secretarial_schools',
  BuyingShoppingServices = 'buying_shopping_services',
  CableSatelliteAndOtherPayTelevisionAndRadio = 'cable_satellite_and_other_pay_television_and_radio',
  CameraAndPhotographicSupplyStores = 'camera_and_photographic_supply_stores',
  CandyNutAndConfectioneryStores = 'candy_nut_and_confectionery_stores',
  CarAndTruckDealersNewUsed = 'car_and_truck_dealers_new_used',
  CarAndTruckDealersUsedOnly = 'car_and_truck_dealers_used_only',
  CarRentalAgencies = 'car_rental_agencies',
  CarWashes = 'car_washes',
  CarpentryServices = 'carpentry_services',
  CarpetUpholsteryCleaning = 'carpet_upholstery_cleaning',
  Caterers = 'caterers',
  CharitableAndSocialServiceOrganizationsFundraising = 'charitable_and_social_service_organizations_fundraising',
  ChemicalsAndAlliedProducts = 'chemicals_and_allied_products',
  ChildCareServices = 'child_care_services',
  ChildrensAndInfantsWearStores = 'childrens_and_infants_wear_stores',
  ChiropodistsPodiatrists = 'chiropodists_podiatrists',
  Chiropractors = 'chiropractors',
  CigarStoresAndStands = 'cigar_stores_and_stands',
  CivicSocialFraternalAssociations = 'civic_social_fraternal_associations',
  CleaningAndMaintenance = 'cleaning_and_maintenance',
  ClothingRental = 'clothing_rental',
  CollegesUniversities = 'colleges_universities',
  CommercialEquipment = 'commercial_equipment',
  CommercialFootwear = 'commercial_footwear',
  CommercialPhotographyArtAndGraphics = 'commercial_photography_art_and_graphics',
  CommuterTransportAndFerries = 'commuter_transport_and_ferries',
  ComputerNetworkServices = 'computer_network_services',
  ComputerProgramming = 'computer_programming',
  ComputerRepair = 'computer_repair',
  ComputerSoftwareStores = 'computer_software_stores',
  ComputersPeripheralsAndSoftware = 'computers_peripherals_and_software',
  ConcreteWorkServices = 'concrete_work_services',
  ConstructionMaterials = 'construction_materials',
  ConsultingPublicRelations = 'consulting_public_relations',
  CorrespondenceSchools = 'correspondence_schools',
  CosmeticStores = 'cosmetic_stores',
  CounselingServices = 'counseling_services',
  CountryClubs = 'country_clubs',
  CourierServices = 'courier_services',
  CourtCosts = 'court_costs',
  CreditReportingAgencies = 'credit_reporting_agencies',
  CruiseLines = 'cruise_lines',
  DairyProductsStores = 'dairy_products_stores',
  DanceHallStudiosSchools = 'dance_hall_studios_schools',
  DatingEscortServices = 'dating_escort_services',
  DentistsOrthodontists = 'dentists_orthodontists',
  DepartmentStores = 'department_stores',
  DetectiveAgencies = 'detective_agencies',
  DigitalGoodsApplications = 'digital_goods_applications',
  DigitalGoodsGames = 'digital_goods_games',
  DigitalGoodsLargeVolume = 'digital_goods_large_volume',
  DigitalGoodsMedia = 'digital_goods_media',
  DirectMarketingCatalogMerchant = 'direct_marketing_catalog_merchant',
  DirectMarketingCombinationCatalogAndRetailMerchant = 'direct_marketing_combination_catalog_and_retail_merchant',
  DirectMarketingInboundTelemarketing = 'direct_marketing_inbound_telemarketing',
  DirectMarketingInsuranceServices = 'direct_marketing_insurance_services',
  DirectMarketingOther = 'direct_marketing_other',
  DirectMarketingOutboundTelemarketing = 'direct_marketing_outbound_telemarketing',
  DirectMarketingSubscription = 'direct_marketing_subscription',
  DirectMarketingTravel = 'direct_marketing_travel',
  DiscountStores = 'discount_stores',
  Doctors = 'doctors',
  DoorToDoorSales = 'door_to_door_sales',
  DraperyWindowCoveringAndUpholsteryStores = 'drapery_window_covering_and_upholstery_stores',
  DrinkingPlaces = 'drinking_places',
  DrugStoresAndPharmacies = 'drug_stores_and_pharmacies',
  DrugsDrugProprietariesAndDruggistSundries = 'drugs_drug_proprietaries_and_druggist_sundries',
  DryCleaners = 'dry_cleaners',
  DurableGoods = 'durable_goods',
  DutyFreeStores = 'duty_free_stores',
  EatingPlacesRestaurants = 'eating_places_restaurants',
  EducationalServices = 'educational_services',
  ElectricRazorStores = 'electric_razor_stores',
  ElectricalPartsAndEquipment = 'electrical_parts_and_equipment',
  ElectricalServices = 'electrical_services',
  ElectronicsRepairShops = 'electronics_repair_shops',
  ElectronicsStores = 'electronics_stores',
  ElementarySecondarySchools = 'elementary_secondary_schools',
  EmploymentTempAgencies = 'employment_temp_agencies',
  EquipmentRental = 'equipment_rental',
  ExterminatingServices = 'exterminating_services',
  FamilyClothingStores = 'family_clothing_stores',
  FastFoodRestaurants = 'fast_food_restaurants',
  FinancialInstitutions = 'financial_institutions',
  FinesGovernmentAdministrativeEntities = 'fines_government_administrative_entities',
  FireplaceFireplaceScreensAndAccessoriesStores = 'fireplace_fireplace_screens_and_accessories_stores',
  FloorCoveringStores = 'floor_covering_stores',
  Florists = 'florists',
  FloristsSuppliesNurseryStockAndFlowers = 'florists_supplies_nursery_stock_and_flowers',
  FreezerAndLockerMeatProvisioners = 'freezer_and_locker_meat_provisioners',
  FuelDealersNonAutomotive = 'fuel_dealers_non_automotive',
  FuneralServicesCrematories = 'funeral_services_crematories',
  FurnitureHomeFurnishingsAndEquipmentStoresExceptAppliances = 'furniture_home_furnishings_and_equipment_stores_except_appliances',
  FurnitureRepairRefinishing = 'furniture_repair_refinishing',
  FurriersAndFurShops = 'furriers_and_fur_shops',
  GeneralServices = 'general_services',
  GiftCardNoveltyAndSouvenirShops = 'gift_card_novelty_and_souvenir_shops',
  GlassPaintAndWallpaperStores = 'glass_paint_and_wallpaper_stores',
  GlasswareCrystalStores = 'glassware_crystal_stores',
  GolfCoursesPublic = 'golf_courses_public',
  GovernmentServices = 'government_services',
  GroceryStoresSupermarkets = 'grocery_stores_supermarkets',
  HardwareEquipmentAndSupplies = 'hardware_equipment_and_supplies',
  HardwareStores = 'hardware_stores',
  HealthAndBeautySpas = 'health_and_beauty_spas',
  HearingAidsSalesAndSupplies = 'hearing_aids_sales_and_supplies',
  HeatingPlumbingAC = 'heating_plumbing_a_c',
  HobbyToyAndGameShops = 'hobby_toy_and_game_shops',
  HomeSupplyWarehouseStores = 'home_supply_warehouse_stores',
  Hospitals = 'hospitals',
  HotelsMotelsAndResorts = 'hotels_motels_and_resorts',
  HouseholdApplianceStores = 'household_appliance_stores',
  IndustrialSupplies = 'industrial_supplies',
  InformationRetrievalServices = 'information_retrieval_services',
  InsuranceDefault = 'insurance_default',
  InsuranceUnderwritingPremiums = 'insurance_underwriting_premiums',
  IntraCompanyPurchases = 'intra_company_purchases',
  JewelryStoresWatchesClocksAndSilverwareStores = 'jewelry_stores_watches_clocks_and_silverware_stores',
  LandscapingServices = 'landscaping_services',
  Laundries = 'laundries',
  LaundryCleaningServices = 'laundry_cleaning_services',
  LegalServicesAttorneys = 'legal_services_attorneys',
  LuggageAndLeatherGoodsStores = 'luggage_and_leather_goods_stores',
  LumberBuildingMaterialsStores = 'lumber_building_materials_stores',
  ManualCashDisburse = 'manual_cash_disburse',
  MarinasServiceAndSupplies = 'marinas_service_and_supplies',
  MasonryStoneworkAndPlaster = 'masonry_stonework_and_plaster',
  MassageParlors = 'massage_parlors',
  MedicalAndDentalLabs = 'medical_and_dental_labs',
  MedicalDentalOphthalmicAndHospitalEquipmentAndSupplies = 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies',
  MedicalServices = 'medical_services',
  MembershipOrganizations = 'membership_organizations',
  MensAndBoysClothingAndAccessoriesStores = 'mens_and_boys_clothing_and_accessories_stores',
  MensWomensClothingStores = 'mens_womens_clothing_stores',
  MetalServiceCenters = 'metal_service_centers',
  Miscellaneous = 'miscellaneous',
  MiscellaneousApparelAndAccessoryShops = 'miscellaneous_apparel_and_accessory_shops',
  MiscellaneousAutoDealers = 'miscellaneous_auto_dealers',
  MiscellaneousBusinessServices = 'miscellaneous_business_services',
  MiscellaneousFoodStores = 'miscellaneous_food_stores',
  MiscellaneousGeneralMerchandise = 'miscellaneous_general_merchandise',
  MiscellaneousGeneralServices = 'miscellaneous_general_services',
  MiscellaneousHomeFurnishingSpecialtyStores = 'miscellaneous_home_furnishing_specialty_stores',
  MiscellaneousPublishingAndPrinting = 'miscellaneous_publishing_and_printing',
  MiscellaneousRecreationServices = 'miscellaneous_recreation_services',
  MiscellaneousRepairShops = 'miscellaneous_repair_shops',
  MiscellaneousSpecialtyRetail = 'miscellaneous_specialty_retail',
  MobileHomeDealers = 'mobile_home_dealers',
  MotionPictureTheaters = 'motion_picture_theaters',
  MotorFreightCarriersAndTrucking = 'motor_freight_carriers_and_trucking',
  MotorHomesDealers = 'motor_homes_dealers',
  MotorVehicleSuppliesAndNewParts = 'motor_vehicle_supplies_and_new_parts',
  MotorcycleShopsAndDealers = 'motorcycle_shops_and_dealers',
  MotorcycleShopsDealers = 'motorcycle_shops_dealers',
  MusicStoresMusicalInstrumentsPianosAndSheetMusic = 'music_stores_musical_instruments_pianos_and_sheet_music',
  NewsDealersAndNewsstands = 'news_dealers_and_newsstands',
  NonFiMoneyOrders = 'non_fi_money_orders',
  NonFiStoredValueCardPurchaseLoad = 'non_fi_stored_value_card_purchase_load',
  NondurableGoods = 'nondurable_goods',
  NurseriesLawnAndGardenSupplyStores = 'nurseries_lawn_and_garden_supply_stores',
  NursingPersonalCare = 'nursing_personal_care',
  OfficeAndCommercialFurniture = 'office_and_commercial_furniture',
  OpticiansEyeglasses = 'opticians_eyeglasses',
  OptometristsOphthalmologist = 'optometrists_ophthalmologist',
  OrthopedicGoodsProstheticDevices = 'orthopedic_goods_prosthetic_devices',
  Osteopaths = 'osteopaths',
  PackageStoresBeerWineAndLiquor = 'package_stores_beer_wine_and_liquor',
  PaintsVarnishesAndSupplies = 'paints_varnishes_and_supplies',
  ParkingLotsGarages = 'parking_lots_garages',
  PassengerRailways = 'passenger_railways',
  PawnShops = 'pawn_shops',
  PetShopsPetFoodAndSupplies = 'pet_shops_pet_food_and_supplies',
  PetroleumAndPetroleumProducts = 'petroleum_and_petroleum_products',
  PhotoDeveloping = 'photo_developing',
  PhotographicPhotocopyMicrofilmEquipmentAndSupplies = 'photographic_photocopy_microfilm_equipment_and_supplies',
  PhotographicStudios = 'photographic_studios',
  PictureVideoProduction = 'picture_video_production',
  PieceGoodsNotionsAndOtherDryGoods = 'piece_goods_notions_and_other_dry_goods',
  PlumbingHeatingEquipmentAndSupplies = 'plumbing_heating_equipment_and_supplies',
  PoliticalOrganizations = 'political_organizations',
  PostalServicesGovernmentOnly = 'postal_services_government_only',
  PreciousStonesAndMetalsWatchesAndJewelry = 'precious_stones_and_metals_watches_and_jewelry',
  ProfessionalServices = 'professional_services',
  PublicWarehousingAndStorage = 'public_warehousing_and_storage',
  QuickCopyReproAndBlueprint = 'quick_copy_repro_and_blueprint',
  Railroads = 'railroads',
  RealEstateAgentsAndManagersRentals = 'real_estate_agents_and_managers_rentals',
  RecordStores = 'record_stores',
  RecreationalVehicleRentals = 'recreational_vehicle_rentals',
  ReligiousGoodsStores = 'religious_goods_stores',
  ReligiousOrganizations = 'religious_organizations',
  RoofingSidingSheetMetal = 'roofing_siding_sheet_metal',
  SecretarialSupportServices = 'secretarial_support_services',
  SecurityBrokersDealers = 'security_brokers_dealers',
  ServiceStations = 'service_stations',
  SewingNeedleworkFabricAndPieceGoodsStores = 'sewing_needlework_fabric_and_piece_goods_stores',
  ShoeRepairHatCleaning = 'shoe_repair_hat_cleaning',
  ShoeStores = 'shoe_stores',
  SmallApplianceRepair = 'small_appliance_repair',
  SnowmobileDealers = 'snowmobile_dealers',
  SpecialTradeServices = 'special_trade_services',
  SpecialtyCleaning = 'specialty_cleaning',
  SportingGoodsStores = 'sporting_goods_stores',
  SportingRecreationCamps = 'sporting_recreation_camps',
  SportsAndRidingApparelStores = 'sports_and_riding_apparel_stores',
  SportsClubsFields = 'sports_clubs_fields',
  StampAndCoinStores = 'stamp_and_coin_stores',
  StationaryOfficeSuppliesPrintingAndWritingPaper = 'stationary_office_supplies_printing_and_writing_paper',
  StationeryStoresOfficeAndSchoolSupplyStores = 'stationery_stores_office_and_school_supply_stores',
  SwimmingPoolsSales = 'swimming_pools_sales',
  TUiTravelGermany = 't_ui_travel_germany',
  TailorsAlterations = 'tailors_alterations',
  TaxPaymentsGovernmentAgencies = 'tax_payments_government_agencies',
  TaxPreparationServices = 'tax_preparation_services',
  TaxicabsLimousines = 'taxicabs_limousines',
  TelecommunicationEquipmentAndTelephoneSales = 'telecommunication_equipment_and_telephone_sales',
  TelecommunicationServices = 'telecommunication_services',
  TelegraphServices = 'telegraph_services',
  TentAndAwningShops = 'tent_and_awning_shops',
  TestingLaboratories = 'testing_laboratories',
  TheatricalTicketAgencies = 'theatrical_ticket_agencies',
  Timeshares = 'timeshares',
  TireRetreadingAndRepair = 'tire_retreading_and_repair',
  TollsBridgeFees = 'tolls_bridge_fees',
  TouristAttractionsAndExhibits = 'tourist_attractions_and_exhibits',
  TowingServices = 'towing_services',
  TrailerParksCampgrounds = 'trailer_parks_campgrounds',
  TransportationServices = 'transportation_services',
  TravelAgenciesTourOperators = 'travel_agencies_tour_operators',
  TruckStopIteration = 'truck_stop_iteration',
  TruckUtilityTrailerRentals = 'truck_utility_trailer_rentals',
  TypesettingPlateMakingAndRelatedServices = 'typesetting_plate_making_and_related_services',
  TypewriterStores = 'typewriter_stores',
  USFederalGovernmentAgenciesOrDepartments = 'u_s_federal_government_agencies_or_departments',
  UniformsCommercialClothing = 'uniforms_commercial_clothing',
  UsedMerchandiseAndSecondhandStores = 'used_merchandise_and_secondhand_stores',
  Utilities = 'utilities',
  VarietyStores = 'variety_stores',
  VeterinaryServices = 'veterinary_services',
  VideoAmusementGameSupplies = 'video_amusement_game_supplies',
  VideoGameArcades = 'video_game_arcades',
  VideoTapeRentalStores = 'video_tape_rental_stores',
  VocationalTradeSchools = 'vocational_trade_schools',
  WatchJewelryRepair = 'watch_jewelry_repair',
  WeldingRepair = 'welding_repair',
  WholesaleClubs = 'wholesale_clubs',
  WigAndToupeeStores = 'wig_and_toupee_stores',
  WiresMoneyOrders = 'wires_money_orders',
  WomensAccessoryAndSpecialtyShops = 'womens_accessory_and_specialty_shops',
  WomensReadyToWearStores = 'womens_ready_to_wear_stores',
  WreckingAndSalvageYards = 'wrecking_and_salvage_yards'
}

export type Stripe_IssuingCardSpendingLimit = {
  __typename?: 'Stripe_IssuingCardSpendingLimit';
  /** Maximum amount allowed to spend per interval. */
  amount?: Maybe<Scalars['Int']>;
  /** Array of strings containing [categories](https://stripe.com/docs/api#issuing_authorization_object-merchant_data-category) this limit applies to. Omitting this field will apply the limit to all categories. */
  categories?: Maybe<Array<Maybe<Stripe_IssuingCardSpendingLimitCategoriesProperty>>>;
  /** Interval (or event) to which the amount applies. */
  interval?: Maybe<Stripe_IssuingCardSpendingLimitIntervalProperty>;
};

export enum Stripe_IssuingCardSpendingLimitCategoriesProperty {
  AcRefrigerationRepair = 'ac_refrigeration_repair',
  AccountingBookkeepingServices = 'accounting_bookkeeping_services',
  AdvertisingServices = 'advertising_services',
  AgriculturalCooperative = 'agricultural_cooperative',
  AirlinesAirCarriers = 'airlines_air_carriers',
  AirportsFlyingFields = 'airports_flying_fields',
  AmbulanceServices = 'ambulance_services',
  AmusementParksCarnivals = 'amusement_parks_carnivals',
  AntiqueReproductions = 'antique_reproductions',
  AntiqueShops = 'antique_shops',
  Aquariums = 'aquariums',
  ArchitecturalSurveyingServices = 'architectural_surveying_services',
  ArtDealersAndGalleries = 'art_dealers_and_galleries',
  ArtistsSupplyAndCraftShops = 'artists_supply_and_craft_shops',
  AutoAndHomeSupplyStores = 'auto_and_home_supply_stores',
  AutoBodyRepairShops = 'auto_body_repair_shops',
  AutoPaintShops = 'auto_paint_shops',
  AutoServiceShops = 'auto_service_shops',
  AutomatedCashDisburse = 'automated_cash_disburse',
  AutomatedFuelDispensers = 'automated_fuel_dispensers',
  AutomobileAssociations = 'automobile_associations',
  AutomotivePartsAndAccessoriesStores = 'automotive_parts_and_accessories_stores',
  AutomotiveTireStores = 'automotive_tire_stores',
  BailAndBondPayments = 'bail_and_bond_payments',
  Bakeries = 'bakeries',
  BandsOrchestras = 'bands_orchestras',
  BarberAndBeautyShops = 'barber_and_beauty_shops',
  BettingCasinoGambling = 'betting_casino_gambling',
  BicycleShops = 'bicycle_shops',
  BilliardPoolEstablishments = 'billiard_pool_establishments',
  BoatDealers = 'boat_dealers',
  BoatRentalsAndLeases = 'boat_rentals_and_leases',
  BookStores = 'book_stores',
  BooksPeriodicalsAndNewspapers = 'books_periodicals_and_newspapers',
  BowlingAlleys = 'bowling_alleys',
  BusLines = 'bus_lines',
  BusinessSecretarialSchools = 'business_secretarial_schools',
  BuyingShoppingServices = 'buying_shopping_services',
  CableSatelliteAndOtherPayTelevisionAndRadio = 'cable_satellite_and_other_pay_television_and_radio',
  CameraAndPhotographicSupplyStores = 'camera_and_photographic_supply_stores',
  CandyNutAndConfectioneryStores = 'candy_nut_and_confectionery_stores',
  CarAndTruckDealersNewUsed = 'car_and_truck_dealers_new_used',
  CarAndTruckDealersUsedOnly = 'car_and_truck_dealers_used_only',
  CarRentalAgencies = 'car_rental_agencies',
  CarWashes = 'car_washes',
  CarpentryServices = 'carpentry_services',
  CarpetUpholsteryCleaning = 'carpet_upholstery_cleaning',
  Caterers = 'caterers',
  CharitableAndSocialServiceOrganizationsFundraising = 'charitable_and_social_service_organizations_fundraising',
  ChemicalsAndAlliedProducts = 'chemicals_and_allied_products',
  ChildCareServices = 'child_care_services',
  ChildrensAndInfantsWearStores = 'childrens_and_infants_wear_stores',
  ChiropodistsPodiatrists = 'chiropodists_podiatrists',
  Chiropractors = 'chiropractors',
  CigarStoresAndStands = 'cigar_stores_and_stands',
  CivicSocialFraternalAssociations = 'civic_social_fraternal_associations',
  CleaningAndMaintenance = 'cleaning_and_maintenance',
  ClothingRental = 'clothing_rental',
  CollegesUniversities = 'colleges_universities',
  CommercialEquipment = 'commercial_equipment',
  CommercialFootwear = 'commercial_footwear',
  CommercialPhotographyArtAndGraphics = 'commercial_photography_art_and_graphics',
  CommuterTransportAndFerries = 'commuter_transport_and_ferries',
  ComputerNetworkServices = 'computer_network_services',
  ComputerProgramming = 'computer_programming',
  ComputerRepair = 'computer_repair',
  ComputerSoftwareStores = 'computer_software_stores',
  ComputersPeripheralsAndSoftware = 'computers_peripherals_and_software',
  ConcreteWorkServices = 'concrete_work_services',
  ConstructionMaterials = 'construction_materials',
  ConsultingPublicRelations = 'consulting_public_relations',
  CorrespondenceSchools = 'correspondence_schools',
  CosmeticStores = 'cosmetic_stores',
  CounselingServices = 'counseling_services',
  CountryClubs = 'country_clubs',
  CourierServices = 'courier_services',
  CourtCosts = 'court_costs',
  CreditReportingAgencies = 'credit_reporting_agencies',
  CruiseLines = 'cruise_lines',
  DairyProductsStores = 'dairy_products_stores',
  DanceHallStudiosSchools = 'dance_hall_studios_schools',
  DatingEscortServices = 'dating_escort_services',
  DentistsOrthodontists = 'dentists_orthodontists',
  DepartmentStores = 'department_stores',
  DetectiveAgencies = 'detective_agencies',
  DigitalGoodsApplications = 'digital_goods_applications',
  DigitalGoodsGames = 'digital_goods_games',
  DigitalGoodsLargeVolume = 'digital_goods_large_volume',
  DigitalGoodsMedia = 'digital_goods_media',
  DirectMarketingCatalogMerchant = 'direct_marketing_catalog_merchant',
  DirectMarketingCombinationCatalogAndRetailMerchant = 'direct_marketing_combination_catalog_and_retail_merchant',
  DirectMarketingInboundTelemarketing = 'direct_marketing_inbound_telemarketing',
  DirectMarketingInsuranceServices = 'direct_marketing_insurance_services',
  DirectMarketingOther = 'direct_marketing_other',
  DirectMarketingOutboundTelemarketing = 'direct_marketing_outbound_telemarketing',
  DirectMarketingSubscription = 'direct_marketing_subscription',
  DirectMarketingTravel = 'direct_marketing_travel',
  DiscountStores = 'discount_stores',
  Doctors = 'doctors',
  DoorToDoorSales = 'door_to_door_sales',
  DraperyWindowCoveringAndUpholsteryStores = 'drapery_window_covering_and_upholstery_stores',
  DrinkingPlaces = 'drinking_places',
  DrugStoresAndPharmacies = 'drug_stores_and_pharmacies',
  DrugsDrugProprietariesAndDruggistSundries = 'drugs_drug_proprietaries_and_druggist_sundries',
  DryCleaners = 'dry_cleaners',
  DurableGoods = 'durable_goods',
  DutyFreeStores = 'duty_free_stores',
  EatingPlacesRestaurants = 'eating_places_restaurants',
  EducationalServices = 'educational_services',
  ElectricRazorStores = 'electric_razor_stores',
  ElectricalPartsAndEquipment = 'electrical_parts_and_equipment',
  ElectricalServices = 'electrical_services',
  ElectronicsRepairShops = 'electronics_repair_shops',
  ElectronicsStores = 'electronics_stores',
  ElementarySecondarySchools = 'elementary_secondary_schools',
  EmploymentTempAgencies = 'employment_temp_agencies',
  EquipmentRental = 'equipment_rental',
  ExterminatingServices = 'exterminating_services',
  FamilyClothingStores = 'family_clothing_stores',
  FastFoodRestaurants = 'fast_food_restaurants',
  FinancialInstitutions = 'financial_institutions',
  FinesGovernmentAdministrativeEntities = 'fines_government_administrative_entities',
  FireplaceFireplaceScreensAndAccessoriesStores = 'fireplace_fireplace_screens_and_accessories_stores',
  FloorCoveringStores = 'floor_covering_stores',
  Florists = 'florists',
  FloristsSuppliesNurseryStockAndFlowers = 'florists_supplies_nursery_stock_and_flowers',
  FreezerAndLockerMeatProvisioners = 'freezer_and_locker_meat_provisioners',
  FuelDealersNonAutomotive = 'fuel_dealers_non_automotive',
  FuneralServicesCrematories = 'funeral_services_crematories',
  FurnitureHomeFurnishingsAndEquipmentStoresExceptAppliances = 'furniture_home_furnishings_and_equipment_stores_except_appliances',
  FurnitureRepairRefinishing = 'furniture_repair_refinishing',
  FurriersAndFurShops = 'furriers_and_fur_shops',
  GeneralServices = 'general_services',
  GiftCardNoveltyAndSouvenirShops = 'gift_card_novelty_and_souvenir_shops',
  GlassPaintAndWallpaperStores = 'glass_paint_and_wallpaper_stores',
  GlasswareCrystalStores = 'glassware_crystal_stores',
  GolfCoursesPublic = 'golf_courses_public',
  GovernmentServices = 'government_services',
  GroceryStoresSupermarkets = 'grocery_stores_supermarkets',
  HardwareEquipmentAndSupplies = 'hardware_equipment_and_supplies',
  HardwareStores = 'hardware_stores',
  HealthAndBeautySpas = 'health_and_beauty_spas',
  HearingAidsSalesAndSupplies = 'hearing_aids_sales_and_supplies',
  HeatingPlumbingAC = 'heating_plumbing_a_c',
  HobbyToyAndGameShops = 'hobby_toy_and_game_shops',
  HomeSupplyWarehouseStores = 'home_supply_warehouse_stores',
  Hospitals = 'hospitals',
  HotelsMotelsAndResorts = 'hotels_motels_and_resorts',
  HouseholdApplianceStores = 'household_appliance_stores',
  IndustrialSupplies = 'industrial_supplies',
  InformationRetrievalServices = 'information_retrieval_services',
  InsuranceDefault = 'insurance_default',
  InsuranceUnderwritingPremiums = 'insurance_underwriting_premiums',
  IntraCompanyPurchases = 'intra_company_purchases',
  JewelryStoresWatchesClocksAndSilverwareStores = 'jewelry_stores_watches_clocks_and_silverware_stores',
  LandscapingServices = 'landscaping_services',
  Laundries = 'laundries',
  LaundryCleaningServices = 'laundry_cleaning_services',
  LegalServicesAttorneys = 'legal_services_attorneys',
  LuggageAndLeatherGoodsStores = 'luggage_and_leather_goods_stores',
  LumberBuildingMaterialsStores = 'lumber_building_materials_stores',
  ManualCashDisburse = 'manual_cash_disburse',
  MarinasServiceAndSupplies = 'marinas_service_and_supplies',
  MasonryStoneworkAndPlaster = 'masonry_stonework_and_plaster',
  MassageParlors = 'massage_parlors',
  MedicalAndDentalLabs = 'medical_and_dental_labs',
  MedicalDentalOphthalmicAndHospitalEquipmentAndSupplies = 'medical_dental_ophthalmic_and_hospital_equipment_and_supplies',
  MedicalServices = 'medical_services',
  MembershipOrganizations = 'membership_organizations',
  MensAndBoysClothingAndAccessoriesStores = 'mens_and_boys_clothing_and_accessories_stores',
  MensWomensClothingStores = 'mens_womens_clothing_stores',
  MetalServiceCenters = 'metal_service_centers',
  Miscellaneous = 'miscellaneous',
  MiscellaneousApparelAndAccessoryShops = 'miscellaneous_apparel_and_accessory_shops',
  MiscellaneousAutoDealers = 'miscellaneous_auto_dealers',
  MiscellaneousBusinessServices = 'miscellaneous_business_services',
  MiscellaneousFoodStores = 'miscellaneous_food_stores',
  MiscellaneousGeneralMerchandise = 'miscellaneous_general_merchandise',
  MiscellaneousGeneralServices = 'miscellaneous_general_services',
  MiscellaneousHomeFurnishingSpecialtyStores = 'miscellaneous_home_furnishing_specialty_stores',
  MiscellaneousPublishingAndPrinting = 'miscellaneous_publishing_and_printing',
  MiscellaneousRecreationServices = 'miscellaneous_recreation_services',
  MiscellaneousRepairShops = 'miscellaneous_repair_shops',
  MiscellaneousSpecialtyRetail = 'miscellaneous_specialty_retail',
  MobileHomeDealers = 'mobile_home_dealers',
  MotionPictureTheaters = 'motion_picture_theaters',
  MotorFreightCarriersAndTrucking = 'motor_freight_carriers_and_trucking',
  MotorHomesDealers = 'motor_homes_dealers',
  MotorVehicleSuppliesAndNewParts = 'motor_vehicle_supplies_and_new_parts',
  MotorcycleShopsAndDealers = 'motorcycle_shops_and_dealers',
  MotorcycleShopsDealers = 'motorcycle_shops_dealers',
  MusicStoresMusicalInstrumentsPianosAndSheetMusic = 'music_stores_musical_instruments_pianos_and_sheet_music',
  NewsDealersAndNewsstands = 'news_dealers_and_newsstands',
  NonFiMoneyOrders = 'non_fi_money_orders',
  NonFiStoredValueCardPurchaseLoad = 'non_fi_stored_value_card_purchase_load',
  NondurableGoods = 'nondurable_goods',
  NurseriesLawnAndGardenSupplyStores = 'nurseries_lawn_and_garden_supply_stores',
  NursingPersonalCare = 'nursing_personal_care',
  OfficeAndCommercialFurniture = 'office_and_commercial_furniture',
  OpticiansEyeglasses = 'opticians_eyeglasses',
  OptometristsOphthalmologist = 'optometrists_ophthalmologist',
  OrthopedicGoodsProstheticDevices = 'orthopedic_goods_prosthetic_devices',
  Osteopaths = 'osteopaths',
  PackageStoresBeerWineAndLiquor = 'package_stores_beer_wine_and_liquor',
  PaintsVarnishesAndSupplies = 'paints_varnishes_and_supplies',
  ParkingLotsGarages = 'parking_lots_garages',
  PassengerRailways = 'passenger_railways',
  PawnShops = 'pawn_shops',
  PetShopsPetFoodAndSupplies = 'pet_shops_pet_food_and_supplies',
  PetroleumAndPetroleumProducts = 'petroleum_and_petroleum_products',
  PhotoDeveloping = 'photo_developing',
  PhotographicPhotocopyMicrofilmEquipmentAndSupplies = 'photographic_photocopy_microfilm_equipment_and_supplies',
  PhotographicStudios = 'photographic_studios',
  PictureVideoProduction = 'picture_video_production',
  PieceGoodsNotionsAndOtherDryGoods = 'piece_goods_notions_and_other_dry_goods',
  PlumbingHeatingEquipmentAndSupplies = 'plumbing_heating_equipment_and_supplies',
  PoliticalOrganizations = 'political_organizations',
  PostalServicesGovernmentOnly = 'postal_services_government_only',
  PreciousStonesAndMetalsWatchesAndJewelry = 'precious_stones_and_metals_watches_and_jewelry',
  ProfessionalServices = 'professional_services',
  PublicWarehousingAndStorage = 'public_warehousing_and_storage',
  QuickCopyReproAndBlueprint = 'quick_copy_repro_and_blueprint',
  Railroads = 'railroads',
  RealEstateAgentsAndManagersRentals = 'real_estate_agents_and_managers_rentals',
  RecordStores = 'record_stores',
  RecreationalVehicleRentals = 'recreational_vehicle_rentals',
  ReligiousGoodsStores = 'religious_goods_stores',
  ReligiousOrganizations = 'religious_organizations',
  RoofingSidingSheetMetal = 'roofing_siding_sheet_metal',
  SecretarialSupportServices = 'secretarial_support_services',
  SecurityBrokersDealers = 'security_brokers_dealers',
  ServiceStations = 'service_stations',
  SewingNeedleworkFabricAndPieceGoodsStores = 'sewing_needlework_fabric_and_piece_goods_stores',
  ShoeRepairHatCleaning = 'shoe_repair_hat_cleaning',
  ShoeStores = 'shoe_stores',
  SmallApplianceRepair = 'small_appliance_repair',
  SnowmobileDealers = 'snowmobile_dealers',
  SpecialTradeServices = 'special_trade_services',
  SpecialtyCleaning = 'specialty_cleaning',
  SportingGoodsStores = 'sporting_goods_stores',
  SportingRecreationCamps = 'sporting_recreation_camps',
  SportsAndRidingApparelStores = 'sports_and_riding_apparel_stores',
  SportsClubsFields = 'sports_clubs_fields',
  StampAndCoinStores = 'stamp_and_coin_stores',
  StationaryOfficeSuppliesPrintingAndWritingPaper = 'stationary_office_supplies_printing_and_writing_paper',
  StationeryStoresOfficeAndSchoolSupplyStores = 'stationery_stores_office_and_school_supply_stores',
  SwimmingPoolsSales = 'swimming_pools_sales',
  TUiTravelGermany = 't_ui_travel_germany',
  TailorsAlterations = 'tailors_alterations',
  TaxPaymentsGovernmentAgencies = 'tax_payments_government_agencies',
  TaxPreparationServices = 'tax_preparation_services',
  TaxicabsLimousines = 'taxicabs_limousines',
  TelecommunicationEquipmentAndTelephoneSales = 'telecommunication_equipment_and_telephone_sales',
  TelecommunicationServices = 'telecommunication_services',
  TelegraphServices = 'telegraph_services',
  TentAndAwningShops = 'tent_and_awning_shops',
  TestingLaboratories = 'testing_laboratories',
  TheatricalTicketAgencies = 'theatrical_ticket_agencies',
  Timeshares = 'timeshares',
  TireRetreadingAndRepair = 'tire_retreading_and_repair',
  TollsBridgeFees = 'tolls_bridge_fees',
  TouristAttractionsAndExhibits = 'tourist_attractions_and_exhibits',
  TowingServices = 'towing_services',
  TrailerParksCampgrounds = 'trailer_parks_campgrounds',
  TransportationServices = 'transportation_services',
  TravelAgenciesTourOperators = 'travel_agencies_tour_operators',
  TruckStopIteration = 'truck_stop_iteration',
  TruckUtilityTrailerRentals = 'truck_utility_trailer_rentals',
  TypesettingPlateMakingAndRelatedServices = 'typesetting_plate_making_and_related_services',
  TypewriterStores = 'typewriter_stores',
  USFederalGovernmentAgenciesOrDepartments = 'u_s_federal_government_agencies_or_departments',
  UniformsCommercialClothing = 'uniforms_commercial_clothing',
  UsedMerchandiseAndSecondhandStores = 'used_merchandise_and_secondhand_stores',
  Utilities = 'utilities',
  VarietyStores = 'variety_stores',
  VeterinaryServices = 'veterinary_services',
  VideoAmusementGameSupplies = 'video_amusement_game_supplies',
  VideoGameArcades = 'video_game_arcades',
  VideoTapeRentalStores = 'video_tape_rental_stores',
  VocationalTradeSchools = 'vocational_trade_schools',
  WatchJewelryRepair = 'watch_jewelry_repair',
  WeldingRepair = 'welding_repair',
  WholesaleClubs = 'wholesale_clubs',
  WigAndToupeeStores = 'wig_and_toupee_stores',
  WiresMoneyOrders = 'wires_money_orders',
  WomensAccessoryAndSpecialtyShops = 'womens_accessory_and_specialty_shops',
  WomensReadyToWearStores = 'womens_ready_to_wear_stores',
  WreckingAndSalvageYards = 'wrecking_and_salvage_yards'
}

export enum Stripe_IssuingCardSpendingLimitIntervalProperty {
  AllTime = 'all_time',
  Daily = 'daily',
  Monthly = 'monthly',
  PerAuthorization = 'per_authorization',
  Weekly = 'weekly',
  Yearly = 'yearly'
}

export enum Stripe_IssuingCardStatusProperty {
  Active = 'active',
  Canceled = 'canceled',
  Inactive = 'inactive'
}

export enum Stripe_IssuingCardTypeProperty {
  Physical = 'physical',
  Virtual = 'virtual'
}

export type Stripe_IssuingCardWallets = {
  __typename?: 'Stripe_IssuingCardWallets';
  apple_pay?: Maybe<Stripe_IssuingCardApplePay>;
  google_pay?: Maybe<Stripe_IssuingCardGooglePay>;
  /** Unique identifier for a card used with digital wallets */
  primary_account_identifier?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingCardApplePay = {
  __typename?: 'Stripe_IssuingCardApplePay';
  /** Apple Pay Eligibility */
  eligible?: Maybe<Scalars['Boolean']>;
  /** Reason the card is ineligible for Apple Pay */
  ineligible_reason?: Maybe<Stripe_IssuingCardApplePayIneligibleReasonProperty>;
};

export enum Stripe_IssuingCardApplePayIneligibleReasonProperty {
  MissingAgreement = 'missing_agreement',
  MissingCardholderContact = 'missing_cardholder_contact',
  UnsupportedRegion = 'unsupported_region'
}

export type Stripe_IssuingCardGooglePay = {
  __typename?: 'Stripe_IssuingCardGooglePay';
  /** Google Pay Eligibility */
  eligible?: Maybe<Scalars['Boolean']>;
  /** Reason the card is ineligible for Google Pay */
  ineligible_reason?: Maybe<Stripe_IssuingCardGooglePayIneligibleReasonProperty>;
};

export enum Stripe_IssuingCardGooglePayIneligibleReasonProperty {
  MissingAgreement = 'missing_agreement',
  MissingCardholderContact = 'missing_cardholder_contact',
  UnsupportedRegion = 'unsupported_region'
}

export type Stripe_IssuingAuthorizationCardholderProperty = WrappedString | Stripe_IssuingCardholder;

export type Stripe_IssuingAuthorizationMerchantData = {
  __typename?: 'Stripe_IssuingAuthorizationMerchantData';
  /** A categorization of the seller's type of business. See our [merchant categories guide](https://stripe.com/docs/issuing/merchant-categories) for a list of possible values. */
  category?: Maybe<Scalars['String']>;
  /** The merchant category code for the seller’s business */
  category_code?: Maybe<Scalars['String']>;
  /** City where the seller is located */
  city?: Maybe<Scalars['String']>;
  /** Country where the seller is located */
  country?: Maybe<Scalars['String']>;
  /** Name of the seller */
  name?: Maybe<Scalars['String']>;
  /** Identifier assigned to the seller by the card brand */
  network_id?: Maybe<Scalars['String']>;
  /** Postal code where the seller is located */
  postal_code?: Maybe<Scalars['String']>;
  /** State where the seller is located */
  state?: Maybe<Scalars['String']>;
};

export enum Stripe_IssuingAuthorizationObjectProperty {
  IssuingDoTauthorization = 'issuingDOTauthorization'
}

export type Stripe_IssuingAuthorizationPendingRequest = {
  __typename?: 'Stripe_IssuingAuthorizationPendingRequest';
  /** The additional amount Stripe will hold if the authorization is approved, in the card's [currency](https://stripe.com/docs/api#issuing_authorization_object-pending-request-currency) and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
  amount?: Maybe<Scalars['Int']>;
  amount_details?: Maybe<Stripe_IssuingAuthorizationAmountDetails>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** If set `true`, you may provide [amount](https://stripe.com/docs/api/issuing/authorizations/approve#approve_issuing_authorization-amount) to control how much to hold for the authorization. */
  is_amount_controllable?: Maybe<Scalars['Boolean']>;
  /** The amount the merchant is requesting to be authorized in the `merchant_currency`. The amount is in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
  merchant_amount?: Maybe<Scalars['Int']>;
  /** The local currency the merchant is requesting to authorize. */
  merchant_currency?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingAuthorizationRequest = {
  __typename?: 'Stripe_IssuingAuthorizationRequest';
  /** The `pending_request.amount` at the time of the request, presented in your card's currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). Stripe held this amount from your account to fund the authorization if the request was approved. */
  amount?: Maybe<Scalars['Int']>;
  amount_details?: Maybe<Stripe_IssuingAuthorizationAmountDetails>;
  /** Whether this request was approved. */
  approved?: Maybe<Scalars['Boolean']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** The `pending_request.merchant_amount` at the time of the request, presented in the `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
  merchant_amount?: Maybe<Scalars['Int']>;
  /** The currency that was collected by the merchant and presented to the cardholder for the authorization. Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  merchant_currency?: Maybe<Scalars['String']>;
  /** The reason for the approval or decline. */
  reason?: Maybe<Stripe_IssuingAuthorizationRequestReasonProperty>;
};

export enum Stripe_IssuingAuthorizationRequestReasonProperty {
  AccountDisabled = 'account_disabled',
  CardActive = 'card_active',
  CardInactive = 'card_inactive',
  CardholderInactive = 'cardholder_inactive',
  CardholderVerificationRequired = 'cardholder_verification_required',
  InsufficientFunds = 'insufficient_funds',
  NotAllowed = 'not_allowed',
  SpendingControls = 'spending_controls',
  SuspectedFraud = 'suspected_fraud',
  VerificationFailed = 'verification_failed',
  WebhookApproved = 'webhook_approved',
  WebhookDeclined = 'webhook_declined',
  WebhookTimeout = 'webhook_timeout'
}

export enum Stripe_IssuingAuthorizationStatusProperty {
  Closed = 'closed',
  Pending = 'pending',
  Reversed = 'reversed'
}

export type Stripe_IssuingTransaction = {
  __typename?: 'Stripe_IssuingTransaction';
  /** The transaction amount, which will be reflected in your balance. This amount is in your currency and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). */
  amount?: Maybe<Scalars['Int']>;
  amount_details?: Maybe<Stripe_IssuingTransactionAmountDetails>;
  authorization?: Maybe<Stripe_IssuingTransactionAuthorizationProperty>;
  balance_transaction?: Maybe<Stripe_IssuingTransactionBalanceTransactionProperty>;
  card?: Maybe<Stripe_IssuingTransactionCardProperty>;
  cardholder?: Maybe<Stripe_IssuingTransactionCardholderProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  dispute?: Maybe<Stripe_IssuingTransactionDisputeProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** The amount that the merchant will receive, denominated in `merchant_currency` and in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal). It will be different from `amount` if the merchant is taking payment in a different currency. */
  merchant_amount?: Maybe<Scalars['Int']>;
  /** The currency with which the merchant is taking payment. */
  merchant_currency?: Maybe<Scalars['String']>;
  merchant_data?: Maybe<Stripe_IssuingAuthorizationMerchantData>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_IssuingTransactionObjectProperty>;
  purchase_details?: Maybe<Stripe_IssuingTransactionPurchaseDetails>;
  /** The nature of the transaction. */
  type?: Maybe<Stripe_IssuingTransactionTypeProperty>;
  /** The digital wallet used for this transaction. One of `apple_pay`, `google_pay`, or `samsung_pay`. */
  wallet?: Maybe<Stripe_IssuingTransactionWalletProperty>;
};

export type Stripe_IssuingTransactionAmountDetails = {
  __typename?: 'Stripe_IssuingTransactionAmountDetails';
  /** The fee charged by the ATM for the cash withdrawal. */
  atm_fee?: Maybe<Scalars['Int']>;
};

export type Stripe_IssuingTransactionAuthorizationProperty = WrappedString | Stripe_IssuingAuthorization;

export type Stripe_IssuingTransactionBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_IssuingTransactionCardProperty = WrappedString | Stripe_IssuingCard;

export type Stripe_IssuingTransactionCardholderProperty = WrappedString | Stripe_IssuingCardholder;

export type Stripe_IssuingTransactionDisputeProperty = WrappedString | Stripe_IssuingDispute;

export type Stripe_IssuingDispute = {
  __typename?: 'Stripe_IssuingDispute';
  /** Disputed amount. Usually the amount of the `transaction`, but can differ (usually because of currency fluctuation). */
  amount?: Maybe<Scalars['Int']>;
  /** List of balance transactions associated with the dispute. */
  balance_transactions?: Maybe<Array<Maybe<Stripe_BalanceTransaction>>>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** The currency the `transaction` was made in. */
  currency?: Maybe<Scalars['String']>;
  evidence?: Maybe<Stripe_IssuingDisputeEvidence>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_IssuingDisputeObjectProperty>;
  /** Current status of the dispute. */
  status?: Maybe<Stripe_IssuingDisputeStatusProperty>;
  transaction?: Maybe<Stripe_IssuingDisputeTransactionProperty>;
};

export type Stripe_IssuingDisputeEvidence = {
  __typename?: 'Stripe_IssuingDisputeEvidence';
  canceled?: Maybe<Stripe_IssuingDisputeCanceledEvidence>;
  duplicate?: Maybe<Stripe_IssuingDisputeDuplicateEvidence>;
  fraudulent?: Maybe<Stripe_IssuingDisputeFraudulentEvidence>;
  merchandise_not_as_described?: Maybe<Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidence>;
  not_received?: Maybe<Stripe_IssuingDisputeNotReceivedEvidence>;
  other?: Maybe<Stripe_IssuingDisputeOtherEvidence>;
  /** The reason for filing the dispute. Its value will match the field containing the evidence. */
  reason?: Maybe<Stripe_IssuingDisputeEvidenceReasonProperty>;
  service_not_as_described?: Maybe<Stripe_IssuingDisputeServiceNotAsDescribedEvidence>;
};

export type Stripe_IssuingDisputeCanceledEvidence = {
  __typename?: 'Stripe_IssuingDisputeCanceledEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeCanceledEvidenceAdditionalDocumentationProperty>;
  /** Date when order was canceled. */
  canceled_at?: Maybe<Scalars['Int']>;
  /** Whether the cardholder was provided with a cancellation policy. */
  cancellation_policy_provided?: Maybe<Scalars['Boolean']>;
  /** Reason for canceling the order. */
  cancellation_reason?: Maybe<Scalars['String']>;
  /** Date when the cardholder expected to receive the product. */
  expected_at?: Maybe<Scalars['Int']>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
  /** Description of the merchandise or service that was purchased. */
  product_description?: Maybe<Scalars['String']>;
  /** Whether the product was a merchandise or service. */
  product_type?: Maybe<Stripe_IssuingDisputeCanceledEvidenceProductTypeProperty>;
  /** Result of cardholder's attempt to return the product. */
  return_status?: Maybe<Stripe_IssuingDisputeCanceledEvidenceReturnStatusProperty>;
  /** Date when the product was returned or attempted to be returned. */
  returned_at?: Maybe<Scalars['Int']>;
};

export type Stripe_IssuingDisputeCanceledEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export enum Stripe_IssuingDisputeCanceledEvidenceProductTypeProperty {
  Merchandise = 'merchandise',
  Service = 'service'
}

export enum Stripe_IssuingDisputeCanceledEvidenceReturnStatusProperty {
  MerchantRejected = 'merchant_rejected',
  Successful = 'successful'
}

export type Stripe_IssuingDisputeDuplicateEvidence = {
  __typename?: 'Stripe_IssuingDisputeDuplicateEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeDuplicateEvidenceAdditionalDocumentationProperty>;
  card_statement?: Maybe<Stripe_IssuingDisputeDuplicateEvidenceCardStatementProperty>;
  cash_receipt?: Maybe<Stripe_IssuingDisputeDuplicateEvidenceCashReceiptProperty>;
  check_image?: Maybe<Stripe_IssuingDisputeDuplicateEvidenceCheckImageProperty>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
  /** Transaction (e.g., ipi_...) that the disputed transaction is a duplicate of. Of the two or more transactions that are copies of each other, this is original undisputed one. */
  original_transaction?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingDisputeDuplicateEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export type Stripe_IssuingDisputeDuplicateEvidenceCardStatementProperty = WrappedString | Stripe_File;

export type Stripe_IssuingDisputeDuplicateEvidenceCashReceiptProperty = WrappedString | Stripe_File;

export type Stripe_IssuingDisputeDuplicateEvidenceCheckImageProperty = WrappedString | Stripe_File;

export type Stripe_IssuingDisputeFraudulentEvidence = {
  __typename?: 'Stripe_IssuingDisputeFraudulentEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeFraudulentEvidenceAdditionalDocumentationProperty>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingDisputeFraudulentEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export type Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidence = {
  __typename?: 'Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidenceAdditionalDocumentationProperty>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
  /** Date when the product was received. */
  received_at?: Maybe<Scalars['Int']>;
  /** Description of the cardholder's attempt to return the product. */
  return_description?: Maybe<Scalars['String']>;
  /** Result of cardholder's attempt to return the product. */
  return_status?: Maybe<Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidenceReturnStatusProperty>;
  /** Date when the product was returned or attempted to be returned. */
  returned_at?: Maybe<Scalars['Int']>;
};

export type Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export enum Stripe_IssuingDisputeMerchandiseNotAsDescribedEvidenceReturnStatusProperty {
  MerchantRejected = 'merchant_rejected',
  Successful = 'successful'
}

export type Stripe_IssuingDisputeNotReceivedEvidence = {
  __typename?: 'Stripe_IssuingDisputeNotReceivedEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeNotReceivedEvidenceAdditionalDocumentationProperty>;
  /** Date when the cardholder expected to receive the product. */
  expected_at?: Maybe<Scalars['Int']>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
  /** Description of the merchandise or service that was purchased. */
  product_description?: Maybe<Scalars['String']>;
  /** Whether the product was a merchandise or service. */
  product_type?: Maybe<Stripe_IssuingDisputeNotReceivedEvidenceProductTypeProperty>;
};

export type Stripe_IssuingDisputeNotReceivedEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export enum Stripe_IssuingDisputeNotReceivedEvidenceProductTypeProperty {
  Merchandise = 'merchandise',
  Service = 'service'
}

export type Stripe_IssuingDisputeOtherEvidence = {
  __typename?: 'Stripe_IssuingDisputeOtherEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeOtherEvidenceAdditionalDocumentationProperty>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
  /** Description of the merchandise or service that was purchased. */
  product_description?: Maybe<Scalars['String']>;
  /** Whether the product was a merchandise or service. */
  product_type?: Maybe<Stripe_IssuingDisputeOtherEvidenceProductTypeProperty>;
};

export type Stripe_IssuingDisputeOtherEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export enum Stripe_IssuingDisputeOtherEvidenceProductTypeProperty {
  Merchandise = 'merchandise',
  Service = 'service'
}

export enum Stripe_IssuingDisputeEvidenceReasonProperty {
  Canceled = 'canceled',
  Duplicate = 'duplicate',
  Fraudulent = 'fraudulent',
  MerchandiseNotAsDescribed = 'merchandise_not_as_described',
  NotReceived = 'not_received',
  Other = 'other',
  ServiceNotAsDescribed = 'service_not_as_described'
}

export type Stripe_IssuingDisputeServiceNotAsDescribedEvidence = {
  __typename?: 'Stripe_IssuingDisputeServiceNotAsDescribedEvidence';
  additional_documentation?: Maybe<Stripe_IssuingDisputeServiceNotAsDescribedEvidenceAdditionalDocumentationProperty>;
  /** Date when order was canceled. */
  canceled_at?: Maybe<Scalars['Int']>;
  /** Reason for canceling the order. */
  cancellation_reason?: Maybe<Scalars['String']>;
  /** Explanation of why the cardholder is disputing this transaction. */
  explanation?: Maybe<Scalars['String']>;
  /** Date when the product was received. */
  received_at?: Maybe<Scalars['Int']>;
};

export type Stripe_IssuingDisputeServiceNotAsDescribedEvidenceAdditionalDocumentationProperty = WrappedString | Stripe_File;

export enum Stripe_IssuingDisputeObjectProperty {
  IssuingDoTdispute = 'issuingDOTdispute'
}

export enum Stripe_IssuingDisputeStatusProperty {
  Expired = 'expired',
  Lost = 'lost',
  Submitted = 'submitted',
  Unsubmitted = 'unsubmitted',
  Won = 'won'
}

export type Stripe_IssuingDisputeTransactionProperty = WrappedString | Stripe_IssuingTransaction;

export enum Stripe_IssuingTransactionObjectProperty {
  IssuingDoTtransaction = 'issuingDOTtransaction'
}

export type Stripe_IssuingTransactionPurchaseDetails = {
  __typename?: 'Stripe_IssuingTransactionPurchaseDetails';
  flight?: Maybe<Stripe_IssuingTransactionFlightData>;
  fuel?: Maybe<Stripe_IssuingTransactionFuelData>;
  lodging?: Maybe<Stripe_IssuingTransactionLodgingData>;
  /** The line items in the purchase. */
  receipt?: Maybe<Array<Maybe<Stripe_IssuingTransactionReceiptData>>>;
  /** A merchant-specific order number. */
  reference?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingTransactionFlightData = {
  __typename?: 'Stripe_IssuingTransactionFlightData';
  /** The time that the flight departed. */
  departure_at?: Maybe<Scalars['Int']>;
  /** The name of the passenger. */
  passenger_name?: Maybe<Scalars['String']>;
  /** Whether the ticket is refundable. */
  refundable?: Maybe<Scalars['Boolean']>;
  /** The legs of the trip. */
  segments?: Maybe<Array<Maybe<Stripe_IssuingTransactionFlightDataLeg>>>;
  /** The travel agency that issued the ticket. */
  travel_agency?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingTransactionFlightDataLeg = {
  __typename?: 'Stripe_IssuingTransactionFlightDataLeg';
  /** The three-letter IATA airport code of the flight's destination. */
  arrival_airport_code?: Maybe<Scalars['String']>;
  /** The airline carrier code. */
  carrier?: Maybe<Scalars['String']>;
  /** The three-letter IATA airport code that the flight departed from. */
  departure_airport_code?: Maybe<Scalars['String']>;
  /** The flight number. */
  flight_number?: Maybe<Scalars['String']>;
  /** The flight's service class. */
  service_class?: Maybe<Scalars['String']>;
  /** Whether a stopover is allowed on this flight. */
  stopover_allowed?: Maybe<Scalars['Boolean']>;
};

export type Stripe_IssuingTransactionFuelData = {
  __typename?: 'Stripe_IssuingTransactionFuelData';
  /** The type of fuel that was purchased. One of `diesel`, `unleaded_plus`, `unleaded_regular`, `unleaded_super`, or `other`. */
  type?: Maybe<Scalars['String']>;
  /** The units for `volume_decimal`. One of `us_gallon` or `liter`. */
  unit?: Maybe<Scalars['String']>;
  /** The cost in cents per each unit of fuel, represented as a decimal string with at most 12 decimal places. */
  unit_cost_decimal?: Maybe<Scalars['String']>;
  /** The volume of the fuel that was pumped, represented as a decimal string with at most 12 decimal places. */
  volume_decimal?: Maybe<Scalars['String']>;
};

export type Stripe_IssuingTransactionLodgingData = {
  __typename?: 'Stripe_IssuingTransactionLodgingData';
  /** The time of checking into the lodging. */
  check_in_at?: Maybe<Scalars['Int']>;
  /** The number of nights stayed at the lodging. */
  nights?: Maybe<Scalars['Int']>;
};

export type Stripe_IssuingTransactionReceiptData = {
  __typename?: 'Stripe_IssuingTransactionReceiptData';
  /** The description of the item. The maximum length of this field is 26 characters. */
  description?: Maybe<Scalars['String']>;
  /** The quantity of the item. */
  quantity?: Maybe<Scalars['Float']>;
  /** The total for this line item in cents. */
  total?: Maybe<Scalars['Int']>;
  /** The unit cost of the item in cents. */
  unit_cost?: Maybe<Scalars['Int']>;
};

export enum Stripe_IssuingTransactionTypeProperty {
  Capture = 'capture',
  Refund = 'refund'
}

export enum Stripe_IssuingTransactionWalletProperty {
  ApplePay = 'apple_pay',
  GooglePay = 'google_pay',
  SamsungPay = 'samsung_pay'
}

export type Stripe_IssuingAuthorizationVerificationData = {
  __typename?: 'Stripe_IssuingAuthorizationVerificationData';
  /** Whether the cardholder provided an address first line and if it matched the cardholder’s `billing.address.line1`. */
  address_line1_check?: Maybe<Stripe_IssuingAuthorizationVerificationDataAddressLine1CheckProperty>;
  /** Whether the cardholder provided a postal code and if it matched the cardholder’s `billing.address.postal_code`. */
  address_postal_code_check?: Maybe<Stripe_IssuingAuthorizationVerificationDataAddressPostalCodeCheckProperty>;
  /** Whether the cardholder provided a CVC and if it matched Stripe’s record. */
  cvc_check?: Maybe<Stripe_IssuingAuthorizationVerificationDataCvcCheckProperty>;
  /** Whether the cardholder provided an expiry date and if it matched Stripe’s record. */
  expiry_check?: Maybe<Stripe_IssuingAuthorizationVerificationDataExpiryCheckProperty>;
};

export enum Stripe_IssuingAuthorizationVerificationDataAddressLine1CheckProperty {
  Match = 'match',
  Mismatch = 'mismatch',
  NotProvided = 'not_provided'
}

export enum Stripe_IssuingAuthorizationVerificationDataAddressPostalCodeCheckProperty {
  Match = 'match',
  Mismatch = 'mismatch',
  NotProvided = 'not_provided'
}

export enum Stripe_IssuingAuthorizationVerificationDataCvcCheckProperty {
  Match = 'match',
  Mismatch = 'mismatch',
  NotProvided = 'not_provided'
}

export enum Stripe_IssuingAuthorizationVerificationDataExpiryCheckProperty {
  Match = 'match',
  Mismatch = 'mismatch',
  NotProvided = 'not_provided'
}

export type Stripe_Payout = {
  __typename?: 'Stripe_Payout';
  /** Amount (in %s) to be transferred to your bank account or debit card. */
  amount?: Maybe<Scalars['Int']>;
  /** Date the payout is expected to arrive in the bank. This factors in delays like weekends or bank holidays. */
  arrival_date?: Maybe<Scalars['Int']>;
  /** Returns `true` if the payout was created by an [automated payout schedule](https://stripe.com/docs/payouts#payout-schedule), and `false` if it was [requested manually](https://stripe.com/docs/payouts#manual-payouts). */
  automatic?: Maybe<Scalars['Boolean']>;
  balance_transaction?: Maybe<Stripe_PayoutBalanceTransactionProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Stripe_PayoutDestinationProperty>;
  failure_balance_transaction?: Maybe<Stripe_PayoutFailureBalanceTransactionProperty>;
  /** Error code explaining reason for payout failure if available. See [Types of payout failures](https://stripe.com/docs/api#payout_failures) for a list of failure codes. */
  failure_code?: Maybe<Scalars['String']>;
  /** Message to user further explaining reason for payout failure if available. */
  failure_message?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The method used to send this payout, which can be `standard` or `instant`. `instant` is only supported for payouts to debit cards. (See [Instant payouts for marketplaces](https://stripe.com/blog/instant-payouts-for-marketplaces) for more information.) */
  method?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PayoutObjectProperty>;
  original_payout?: Maybe<Stripe_PayoutOriginalPayoutProperty>;
  reversed_by?: Maybe<Stripe_PayoutReversedByProperty>;
  /** The source balance this payout came from. One of `card`, `fpx`, or `bank_account`. */
  source_type?: Maybe<Scalars['String']>;
  /** Extra information about a payout to be displayed on the user's bank statement. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** Current status of the payout: `paid`, `pending`, `in_transit`, `canceled` or `failed`. A payout is `pending` until it is submitted to the bank, when it becomes `in_transit`. The status then changes to `paid` if the transaction goes through, or to `failed` or `canceled` (within 5 business days). Some failed payouts may initially show as `paid` but then change to `failed`. */
  status?: Maybe<Scalars['String']>;
  /** Can be `bank_account` or `card`. */
  type?: Maybe<Stripe_PayoutTypeProperty>;
};

export type Stripe_PayoutBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_PayoutDestinationProperty = WrappedString | Stripe_BankAccount | Stripe_Card | Stripe_DeletedBankAccount | Stripe_DeletedCard;

export type Stripe_DeletedBankAccount = {
  __typename?: 'Stripe_DeletedBankAccount';
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. */
  currency?: Maybe<Scalars['String']>;
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedBankAccountObjectProperty>;
};

export enum Stripe_DeletedBankAccountObjectProperty {
  BankAccount = 'bank_account'
}

export type Stripe_DeletedCard = {
  __typename?: 'Stripe_DeletedCard';
  /** Three-letter [ISO code for the currency](https://stripe.com/docs/payouts) paid out to the bank account. */
  currency?: Maybe<Scalars['String']>;
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedCardObjectProperty>;
};

export enum Stripe_DeletedCardObjectProperty {
  Card = 'card'
}

export type Stripe_PayoutFailureBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export enum Stripe_PayoutObjectProperty {
  Payout = 'payout'
}

export type Stripe_PayoutOriginalPayoutProperty = WrappedString | Stripe_Payout;

export type Stripe_PayoutReversedByProperty = WrappedString | Stripe_Payout;

export enum Stripe_PayoutTypeProperty {
  BankAccount = 'bank_account',
  Card = 'card'
}

export type Stripe_PlatformTaxFee = {
  __typename?: 'Stripe_PlatformTaxFee';
  /** The Connected account that incurred this charge. */
  account?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PlatformTaxFeeObjectProperty>;
  /** The payment object that caused this tax to be inflicted. */
  source_transaction?: Maybe<Scalars['String']>;
  /** The type of tax (VAT). */
  type?: Maybe<Scalars['String']>;
};

export enum Stripe_PlatformTaxFeeObjectProperty {
  PlatformTaxFee = 'platform_tax_fee'
}

export type Stripe_Refund = {
  __typename?: 'Stripe_Refund';
  /** Amount, in %s. */
  amount?: Maybe<Scalars['Int']>;
  balance_transaction?: Maybe<Stripe_RefundBalanceTransactionProperty>;
  charge?: Maybe<Stripe_RefundChargeProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. (Available on non-card refunds only) */
  description?: Maybe<Scalars['String']>;
  failure_balance_transaction?: Maybe<Stripe_RefundFailureBalanceTransactionProperty>;
  /** If the refund failed, the reason for refund failure if known. Possible values are `lost_or_stolen_card`, `expired_or_canceled_card`, or `unknown`. */
  failure_reason?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  next_action?: Maybe<Stripe_RefundNextAction>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_RefundObjectProperty>;
  payment_intent?: Maybe<Stripe_RefundPaymentIntentProperty>;
  /** Reason for the refund, either user-provided (`duplicate`, `fraudulent`, or `requested_by_customer`) or generated by Stripe internally (`expired_uncaptured_charge`). */
  reason?: Maybe<Stripe_RefundReasonProperty>;
  /** This is the transaction number that appears on email receipts sent for this refund. */
  receipt_number?: Maybe<Scalars['String']>;
  source_transfer_reversal?: Maybe<Stripe_RefundSourceTransferReversalProperty>;
  /** Status of the refund. For credit card refunds, this can be `pending`, `succeeded`, or `failed`. For other types of refunds, it can be `pending`, `succeeded`, `failed`, or `canceled`. Refer to our [refunds](https://stripe.com/docs/refunds#failed-refunds) documentation for more details. */
  status?: Maybe<Scalars['String']>;
  transfer_reversal?: Maybe<Stripe_RefundTransferReversalProperty>;
};

export type Stripe_RefundBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_RefundChargeProperty = WrappedString | Stripe_Charge;

export type Stripe_RefundFailureBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_RefundNextAction = {
  __typename?: 'Stripe_RefundNextAction';
  display_details?: Maybe<Stripe_RefundNextActionDisplayDetails>;
  /** Type of the next action to perform. */
  type?: Maybe<Scalars['String']>;
};

export type Stripe_RefundNextActionDisplayDetails = {
  __typename?: 'Stripe_RefundNextActionDisplayDetails';
  email_sent?: Maybe<Stripe_EmailSent>;
  /** The expiry timestamp. */
  expires_at?: Maybe<Scalars['Int']>;
};

export type Stripe_EmailSent = {
  __typename?: 'Stripe_EmailSent';
  /** The timestamp when the email was sent. */
  email_sent_at?: Maybe<Scalars['Int']>;
  /** The recipient's email address. */
  email_sent_to?: Maybe<Scalars['String']>;
};

export enum Stripe_RefundObjectProperty {
  Refund = 'refund'
}

export type Stripe_RefundPaymentIntentProperty = WrappedString | Stripe_PaymentIntent;

export enum Stripe_RefundReasonProperty {
  Duplicate = 'duplicate',
  ExpiredUncapturedCharge = 'expired_uncaptured_charge',
  Fraudulent = 'fraudulent',
  RequestedByCustomer = 'requested_by_customer'
}

export type Stripe_RefundSourceTransferReversalProperty = WrappedString | Stripe_TransferReversal;

export type Stripe_TransferReversal = {
  __typename?: 'Stripe_TransferReversal';
  /** Amount, in %s. */
  amount?: Maybe<Scalars['Int']>;
  balance_transaction?: Maybe<Stripe_TransferReversalBalanceTransactionProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  destination_payment_refund?: Maybe<Stripe_TransferReversalDestinationPaymentRefundProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TransferReversalObjectProperty>;
  source_refund?: Maybe<Stripe_TransferReversalSourceRefundProperty>;
  transfer?: Maybe<Stripe_TransferReversalTransferProperty>;
};

export type Stripe_TransferReversalBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_TransferReversalDestinationPaymentRefundProperty = WrappedString | Stripe_Refund;

export enum Stripe_TransferReversalObjectProperty {
  TransferReversal = 'transfer_reversal'
}

export type Stripe_TransferReversalSourceRefundProperty = WrappedString | Stripe_Refund;

export type Stripe_TransferReversalTransferProperty = WrappedString | Stripe_Transfer;

export type Stripe_Transfer = {
  __typename?: 'Stripe_Transfer';
  /** Amount in %s to be transferred. */
  amount?: Maybe<Scalars['Int']>;
  /** Amount in %s reversed (can be less than the amount attribute on the transfer if a partial reversal was issued). */
  amount_reversed?: Maybe<Scalars['Int']>;
  balance_transaction?: Maybe<Stripe_TransferBalanceTransactionProperty>;
  /** Time that this record of the transfer was first created. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  destination?: Maybe<Stripe_TransferDestinationProperty>;
  destination_payment?: Maybe<Stripe_TransferDestinationPaymentProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TransferObjectProperty>;
  /** A list of reversals that have been applied to the transfer. */
  reversals?: Maybe<Stripe_TransferReversalsProperty>;
  /** Whether the transfer has been fully reversed. If the transfer is only partially reversed, this attribute will still be false. */
  reversed?: Maybe<Scalars['Boolean']>;
  source_transaction?: Maybe<Stripe_TransferSourceTransactionProperty>;
  /** The source balance this transfer came from. One of `card`, `fpx`, or `bank_account`. */
  source_type?: Maybe<Scalars['String']>;
  /** A string that identifies this transaction as part of a group. See the [Connect documentation](https://stripe.com/docs/connect/charges-transfers#transfer-options) for details. */
  transfer_group?: Maybe<Scalars['String']>;
};

export type Stripe_TransferBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_TransferDestinationProperty = WrappedString | Stripe_Account;

export type Stripe_TransferDestinationPaymentProperty = WrappedString | Stripe_Charge;

export enum Stripe_TransferObjectProperty {
  Transfer = 'transfer'
}

/** A list of reversals that have been applied to the transfer. */
export type Stripe_TransferReversalsProperty = {
  __typename?: 'Stripe_TransferReversalsProperty';
  /** Details about each object. */
  data: Array<Stripe_TransferReversal>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_TransferReversalsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_TransferReversalsObjectProperty {
  List = 'list'
}

export type Stripe_TransferSourceTransactionProperty = WrappedString | Stripe_Charge;

export type Stripe_RefundTransferReversalProperty = WrappedString | Stripe_TransferReversal;

export type Stripe_ReserveTransaction = {
  __typename?: 'Stripe_ReserveTransaction';
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ReserveTransactionObjectProperty>;
};

export enum Stripe_ReserveTransactionObjectProperty {
  ReserveTransaction = 'reserve_transaction'
}

export type Stripe_TaxDeductedAtSource = {
  __typename?: 'Stripe_TaxDeductedAtSource';
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TaxDeductedAtSourceObjectProperty>;
  /** The end of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period. */
  period_end?: Maybe<Scalars['Int']>;
  /** The start of the invoicing period. This TDS applies to Stripe fees collected during this invoicing period. */
  period_start?: Maybe<Scalars['Int']>;
  /** The TAN that was supplied to Stripe when TDS was assessed */
  tax_deduction_account_number?: Maybe<Scalars['String']>;
};

export enum Stripe_TaxDeductedAtSourceObjectProperty {
  TaxDeductedAtSource = 'tax_deducted_at_source'
}

export type Stripe_Topup = {
  __typename?: 'Stripe_Topup';
  /** Amount transferred. */
  amount?: Maybe<Scalars['Int']>;
  balance_transaction?: Maybe<Stripe_TopupBalanceTransactionProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Date the funds are expected to arrive in your Stripe account for payouts. This factors in delays like weekends or bank holidays. May not be specified depending on status of top-up. */
  expected_availability_date?: Maybe<Scalars['Int']>;
  /** Error code explaining reason for top-up failure if available (see [the errors section](https://stripe.com/docs/api#errors) for a list of codes). */
  failure_code?: Maybe<Scalars['String']>;
  /** Message to user further explaining reason for top-up failure if available. */
  failure_message?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TopupObjectProperty>;
  source?: Maybe<Stripe_Source>;
  /** Extra information about a top-up. This will appear on your source's bank statement. It must contain at least one letter. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** The status of the top-up is either `canceled`, `failed`, `pending`, `reversed`, or `succeeded`. */
  status?: Maybe<Stripe_TopupStatusProperty>;
  /** A string that identifies this top-up as part of a group. */
  transfer_group?: Maybe<Scalars['String']>;
};

export type Stripe_TopupBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export enum Stripe_TopupObjectProperty {
  Topup = 'topup'
}

export enum Stripe_TopupStatusProperty {
  Canceled = 'canceled',
  Failed = 'failed',
  Pending = 'pending',
  Reversed = 'reversed',
  Succeeded = 'succeeded'
}

export enum Stripe_BalanceTransactionTypeProperty {
  Adjustment = 'adjustment',
  Advance = 'advance',
  AdvanceFunding = 'advance_funding',
  AnticipationRepayment = 'anticipation_repayment',
  ApplicationFee = 'application_fee',
  ApplicationFeeRefund = 'application_fee_refund',
  Charge = 'charge',
  ConnectCollectionTransfer = 'connect_collection_transfer',
  Contribution = 'contribution',
  IssuingAuthorizationHold = 'issuing_authorization_hold',
  IssuingAuthorizationRelease = 'issuing_authorization_release',
  IssuingDispute = 'issuing_dispute',
  IssuingTransaction = 'issuing_transaction',
  Payment = 'payment',
  PaymentFailureRefund = 'payment_failure_refund',
  PaymentRefund = 'payment_refund',
  Payout = 'payout',
  PayoutCancel = 'payout_cancel',
  PayoutFailure = 'payout_failure',
  Refund = 'refund',
  RefundFailure = 'refund_failure',
  ReserveTransaction = 'reserve_transaction',
  ReservedFunds = 'reserved_funds',
  StripeFee = 'stripe_fee',
  StripeFxFee = 'stripe_fx_fee',
  TaxFee = 'tax_fee',
  Topup = 'topup',
  TopupReversal = 'topup_reversal',
  Transfer = 'transfer',
  TransferCancel = 'transfer_cancel',
  TransferFailure = 'transfer_failure',
  TransferRefund = 'transfer_refund'
}

export type Stripe_ApplicationFeeChargeProperty = WrappedString | Stripe_Charge;

export enum Stripe_ApplicationFeeObjectProperty {
  ApplicationFee = 'application_fee'
}

export type Stripe_ApplicationFeeOriginatingTransactionProperty = WrappedString | Stripe_Charge;

/** A list of refunds that have been applied to the fee. */
export type Stripe_ApplicationFeeRefundsProperty = {
  __typename?: 'Stripe_ApplicationFeeRefundsProperty';
  /** Details about each object. */
  data: Array<Stripe_FeeRefund>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_ApplicationFeeRefundsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_ApplicationFeeRefundsObjectProperty {
  List = 'list'
}

export type Stripe_ChargeBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_ChargeFailureBalanceTransactionProperty = WrappedString | Stripe_BalanceTransaction;

export type Stripe_ChargeFraudDetails = {
  __typename?: 'Stripe_ChargeFraudDetails';
  /** Assessments from Stripe. If set, the value is `fraudulent`. */
  stripe_report?: Maybe<Scalars['String']>;
  /** Assessments reported by you. If set, possible values of are `safe` and `fraudulent`. */
  user_report?: Maybe<Scalars['String']>;
};

export type Stripe_ChargeInvoiceProperty = WrappedString | Stripe_Invoice;

export type Stripe_Invoice = {
  __typename?: 'Stripe_Invoice';
  /** The country of the business associated with this invoice, most often the business creating the invoice. */
  account_country?: Maybe<Scalars['String']>;
  /** The public name of the business associated with this invoice, most often the business creating the invoice. */
  account_name?: Maybe<Scalars['String']>;
  /** The account tax IDs associated with the invoice. Only editable when the invoice is a draft. */
  account_tax_ids?: Maybe<Array<Maybe<Stripe_InvoiceAccountTaxIdsProperty>>>;
  /** Final amount due at this time for this invoice. If the invoice's total is smaller than the minimum charge amount, for example, or if there is account credit that can be applied to the invoice, the `amount_due` may be 0. If there is a positive `starting_balance` for the invoice (the customer owes money), the `amount_due` will also take that into account. The charge that gets generated for the invoice will be for the amount specified in `amount_due`. */
  amount_due?: Maybe<Scalars['Int']>;
  /** The amount, in %s, that was paid. */
  amount_paid?: Maybe<Scalars['Int']>;
  /** The amount remaining, in %s, that is due. */
  amount_remaining?: Maybe<Scalars['Int']>;
  /** The fee in %s that will be applied to the invoice and transferred to the application owner's Stripe account when the invoice is paid. */
  application_fee_amount?: Maybe<Scalars['Int']>;
  /** Number of payment attempts made for this invoice, from the perspective of the payment retry schedule. Any payment attempt counts as the first attempt, and subsequently only automatic retries increment the attempt count. In other words, manual payment attempts after the first attempt do not affect the retry schedule. */
  attempt_count?: Maybe<Scalars['Int']>;
  /** Whether an attempt has been made to pay the invoice. An invoice is not attempted until 1 hour after the `invoice.created` webhook, for example, so you might not want to display that invoice as unpaid to your users. */
  attempted?: Maybe<Scalars['Boolean']>;
  /** Controls whether Stripe will perform [automatic collection](https://stripe.com/docs/billing/invoices/workflow/#auto_advance) of the invoice. When `false`, the invoice's state will not automatically advance without an explicit action. */
  auto_advance?: Maybe<Scalars['Boolean']>;
  automatic_tax?: Maybe<Stripe_AutomaticTax>;
  /** Indicates the reason why the invoice was created. `subscription_cycle` indicates an invoice created by a subscription advancing into a new period. `subscription_create` indicates an invoice created due to creating a subscription. `subscription_update` indicates an invoice created due to updating a subscription. `subscription` is set for all old invoices to indicate either a change to a subscription or a period advancement. `manual` is set for all invoices unrelated to a subscription (for example: created via the invoice editor). The `upcoming` value is reserved for simulated invoices per the upcoming invoice endpoint. `subscription_threshold` indicates an invoice created due to a billing threshold being reached. */
  billing_reason?: Maybe<Stripe_InvoiceBillingReasonProperty>;
  charge?: Maybe<Stripe_InvoiceChargeProperty>;
  /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this invoice using the default source attached to the customer. When sending an invoice, Stripe will email this invoice to the customer with payment instructions. */
  collection_method?: Maybe<Stripe_InvoiceCollectionMethodProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Custom fields displayed on the invoice. */
  custom_fields?: Maybe<Array<Maybe<Stripe_InvoiceSettingCustomField>>>;
  customer?: Maybe<Scalars['String']>;
  customer_address?: Maybe<Stripe_Address>;
  /** The customer's email. Until the invoice is finalized, this field will equal `customer.email`. Once the invoice is finalized, this field will no longer be updated. */
  customer_email?: Maybe<Scalars['String']>;
  /** The customer's name. Until the invoice is finalized, this field will equal `customer.name`. Once the invoice is finalized, this field will no longer be updated. */
  customer_name?: Maybe<Scalars['String']>;
  /** The customer's phone number. Until the invoice is finalized, this field will equal `customer.phone`. Once the invoice is finalized, this field will no longer be updated. */
  customer_phone?: Maybe<Scalars['String']>;
  customer_shipping?: Maybe<Stripe_Shipping>;
  /** The customer's tax exempt status. Until the invoice is finalized, this field will equal `customer.tax_exempt`. Once the invoice is finalized, this field will no longer be updated. */
  customer_tax_exempt?: Maybe<Stripe_InvoiceCustomerTaxExemptProperty>;
  /** The customer's tax IDs. Until the invoice is finalized, this field will contain the same tax IDs as `customer.tax_ids`. Once the invoice is finalized, this field will no longer be updated. */
  customer_tax_ids?: Maybe<Array<Maybe<Stripe_InvoicesResourceInvoiceTaxId>>>;
  default_payment_method?: Maybe<Stripe_InvoiceDefaultPaymentMethodProperty>;
  default_source?: Maybe<Stripe_InvoiceDefaultSourceProperty>;
  /** The tax rates applied to this invoice, if any. */
  default_tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. Referenced as 'memo' in the Dashboard. */
  description?: Maybe<Scalars['String']>;
  discount?: Maybe<Stripe_Discount>;
  discounts?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The date on which payment for this invoice is due. This value will be `null` for invoices where `collection_method=charge_automatically`. */
  due_date?: Maybe<Scalars['Int']>;
  /** Ending customer balance after the invoice is finalized. Invoices are finalized approximately an hour after successful webhook delivery or when payment collection is attempted for the invoice. If the invoice has not been finalized yet, this will be null. */
  ending_balance?: Maybe<Scalars['Int']>;
  /** Footer displayed on the invoice. */
  footer?: Maybe<Scalars['String']>;
  /** The URL for the hosted invoice page, which allows customers to view and pay an invoice. If the invoice has not been finalized yet, this will be null. */
  hosted_invoice_url?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The link to download the PDF for the invoice. If the invoice has not been finalized yet, this will be null. */
  invoice_pdf?: Maybe<Scalars['String']>;
  last_finalization_error?: Maybe<Stripe_ApiErrors>;
  /** The individual line items that make up the invoice. `lines` is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any. */
  lines?: Maybe<Stripe_InvoiceLinesProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The time at which payment will next be attempted. This value will be `null` for invoices where `collection_method=send_invoice`. */
  next_payment_attempt?: Maybe<Scalars['Int']>;
  /** A unique, identifying string that appears on emails sent to the customer for this invoice. This starts with the customer's unique invoice_prefix if it is specified. */
  number?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_InvoiceObjectProperty>;
  on_behalf_of?: Maybe<Stripe_InvoiceOnBehalfOfProperty>;
  /** Whether payment was successfully collected for this invoice. An invoice can be paid (most commonly) with a charge or with credit from the customer's account balance. */
  paid?: Maybe<Scalars['Boolean']>;
  /** Returns true if the invoice was manually marked paid, returns false if the invoice hasn't been paid yet or was paid on Stripe. */
  paid_out_of_band?: Maybe<Scalars['Boolean']>;
  payment_intent?: Maybe<Stripe_InvoicePaymentIntentProperty>;
  payment_settings?: Maybe<Stripe_InvoicesPaymentSettings>;
  /** End of the usage period during which invoice items were added to this invoice. */
  period_end?: Maybe<Scalars['Int']>;
  /** Start of the usage period during which invoice items were added to this invoice. */
  period_start?: Maybe<Scalars['Int']>;
  /** Total amount of all post-payment credit notes issued for this invoice. */
  post_payment_credit_notes_amount?: Maybe<Scalars['Int']>;
  /** Total amount of all pre-payment credit notes issued for this invoice. */
  pre_payment_credit_notes_amount?: Maybe<Scalars['Int']>;
  quote?: Maybe<Stripe_InvoiceQuoteProperty>;
  /** This is the transaction number that appears on email receipts sent for this invoice. */
  receipt_number?: Maybe<Scalars['String']>;
  /** Starting customer balance before the invoice is finalized. If the invoice has not been finalized yet, this will be the current customer balance. */
  starting_balance?: Maybe<Scalars['Int']>;
  /** Extra information about an invoice for the customer's credit card statement. */
  statement_descriptor?: Maybe<Scalars['String']>;
  /** The status of the invoice, one of `draft`, `open`, `paid`, `uncollectible`, or `void`. [Learn more](https://stripe.com/docs/billing/invoices/workflow#workflow-overview) */
  status?: Maybe<Stripe_InvoiceStatusProperty>;
  status_transitions?: Maybe<Stripe_InvoicesStatusTransitions>;
  subscription?: Maybe<Stripe_InvoiceSubscriptionProperty>;
  /** Only set for upcoming invoices that preview prorations. The time used to calculate prorations. */
  subscription_proration_date?: Maybe<Scalars['Int']>;
  /** Total of all subscriptions, invoice items, and prorations on the invoice before any invoice level discount or tax is applied. Item discounts are already incorporated */
  subtotal?: Maybe<Scalars['Int']>;
  /** The amount of tax on this invoice. This is the sum of all the tax amounts on this invoice. */
  tax?: Maybe<Scalars['Int']>;
  test_clock?: Maybe<Stripe_InvoiceTestClockProperty>;
  threshold_reason?: Maybe<Stripe_InvoiceThresholdReason>;
  /** Total after discounts and taxes. */
  total?: Maybe<Scalars['Int']>;
  /** The aggregate amounts calculated per discount across all line items. */
  total_discount_amounts?: Maybe<Array<Maybe<Stripe_DiscountsResourceDiscountAmount>>>;
  /** The aggregate amounts calculated per tax rate for all line items. */
  total_tax_amounts?: Maybe<Array<Maybe<Stripe_InvoiceTaxAmount>>>;
  transfer_data?: Maybe<Stripe_InvoiceTransferData>;
  /** Invoices are automatically paid or sent 1 hour after webhooks are delivered, or until all webhook delivery attempts have [been exhausted](https://stripe.com/docs/billing/webhooks#understand). This field tracks the time when webhooks for this invoice were successfully delivered. If the invoice had no webhooks to deliver, this will be set while the invoice is being created. */
  webhooks_delivered_at?: Maybe<Scalars['Int']>;
};

export type Stripe_InvoiceAccountTaxIdsProperty = WrappedString | Stripe_TaxId;

export type Stripe_TaxId = {
  __typename?: 'Stripe_TaxId';
  /** Two-letter ISO code representing the country of the tax ID. */
  country?: Maybe<Scalars['String']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  customer?: Maybe<Stripe_TaxIdCustomerProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TaxIdObjectProperty>;
  /** Type of the tax ID, one of `ae_trn`, `au_abn`, `au_arn`, `bg_uic`, `br_cnpj`, `br_cpf`, `ca_bn`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `ca_qst`, `ch_vat`, `cl_tin`, `es_cif`, `eu_vat`, `gb_vat`, `ge_vat`, `hk_br`, `hu_tin`, `id_npwp`, `il_vat`, `in_gst`, `is_vat`, `jp_cn`, `jp_rn`, `kr_brn`, `li_uid`, `mx_rfc`, `my_frp`, `my_itn`, `my_sst`, `no_vat`, `nz_gst`, `ru_inn`, `ru_kpp`, `sa_vat`, `sg_gst`, `sg_uen`, `si_tin`, `th_vat`, `tw_vat`, `ua_vat`, `us_ein`, or `za_vat`. Note that some legacy tax IDs have type `unknown` */
  type?: Maybe<Stripe_TaxIdTypeProperty>;
  /** Value of the tax ID. */
  value?: Maybe<Scalars['String']>;
  verification?: Maybe<Stripe_TaxIdVerification>;
};

export type Stripe_TaxIdCustomerProperty = WrappedString | Stripe_Customer;

export enum Stripe_TaxIdObjectProperty {
  TaxId = 'tax_id'
}

export enum Stripe_TaxIdTypeProperty {
  AeTrn = 'ae_trn',
  AuAbn = 'au_abn',
  AuArn = 'au_arn',
  BgUic = 'bg_uic',
  BrCnpj = 'br_cnpj',
  BrCpf = 'br_cpf',
  CaBn = 'ca_bn',
  CaGstHst = 'ca_gst_hst',
  CaPstBc = 'ca_pst_bc',
  CaPstMb = 'ca_pst_mb',
  CaPstSk = 'ca_pst_sk',
  CaQst = 'ca_qst',
  ChVat = 'ch_vat',
  ClTin = 'cl_tin',
  EsCif = 'es_cif',
  EuVat = 'eu_vat',
  GbVat = 'gb_vat',
  GeVat = 'ge_vat',
  HkBr = 'hk_br',
  HuTin = 'hu_tin',
  IdNpwp = 'id_npwp',
  IlVat = 'il_vat',
  InGst = 'in_gst',
  IsVat = 'is_vat',
  JpCn = 'jp_cn',
  JpRn = 'jp_rn',
  KrBrn = 'kr_brn',
  LiUid = 'li_uid',
  MxRfc = 'mx_rfc',
  MyFrp = 'my_frp',
  MyItn = 'my_itn',
  MySst = 'my_sst',
  NoVat = 'no_vat',
  NzGst = 'nz_gst',
  RuInn = 'ru_inn',
  RuKpp = 'ru_kpp',
  SaVat = 'sa_vat',
  SgGst = 'sg_gst',
  SgUen = 'sg_uen',
  SiTin = 'si_tin',
  ThVat = 'th_vat',
  TwVat = 'tw_vat',
  UaVat = 'ua_vat',
  Unknown = 'unknown',
  UsEin = 'us_ein',
  ZaVat = 'za_vat'
}

export type Stripe_TaxIdVerification = {
  __typename?: 'Stripe_TaxIdVerification';
  /** Verification status, one of `pending`, `verified`, `unverified`, or `unavailable`. */
  status?: Maybe<Stripe_TaxIdVerificationStatusProperty>;
  /** Verified address. */
  verified_address?: Maybe<Scalars['String']>;
  /** Verified name. */
  verified_name?: Maybe<Scalars['String']>;
};

export enum Stripe_TaxIdVerificationStatusProperty {
  Pending = 'pending',
  Unavailable = 'unavailable',
  Unverified = 'unverified',
  Verified = 'verified'
}

export type Stripe_AutomaticTax = {
  __typename?: 'Stripe_AutomaticTax';
  /** Whether Stripe automatically computes tax on this invoice. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The status of the most recent automated tax calculation for this invoice. */
  status?: Maybe<Stripe_AutomaticTaxStatusProperty>;
};

export enum Stripe_AutomaticTaxStatusProperty {
  Complete = 'complete',
  Failed = 'failed',
  RequiresLocationInputs = 'requires_location_inputs'
}

export enum Stripe_InvoiceBillingReasonProperty {
  AutomaticPendingInvoiceItemInvoice = 'automatic_pending_invoice_item_invoice',
  Manual = 'manual',
  QuoteAccept = 'quote_accept',
  Subscription = 'subscription',
  SubscriptionCreate = 'subscription_create',
  SubscriptionCycle = 'subscription_cycle',
  SubscriptionThreshold = 'subscription_threshold',
  SubscriptionUpdate = 'subscription_update',
  Upcoming = 'upcoming'
}

export type Stripe_InvoiceChargeProperty = WrappedString | Stripe_Charge;

export enum Stripe_InvoiceCollectionMethodProperty {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice'
}

export enum Stripe_InvoiceCustomerTaxExemptProperty {
  Exempt = 'exempt',
  None = 'none',
  Reverse = 'reverse'
}

export type Stripe_InvoicesResourceInvoiceTaxId = {
  __typename?: 'Stripe_InvoicesResourceInvoiceTaxId';
  /** The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, or `unknown` */
  type?: Maybe<Stripe_InvoicesResourceInvoiceTaxIdTypeProperty>;
  /** The value of the tax ID. */
  value?: Maybe<Scalars['String']>;
};

export enum Stripe_InvoicesResourceInvoiceTaxIdTypeProperty {
  AeTrn = 'ae_trn',
  AuAbn = 'au_abn',
  AuArn = 'au_arn',
  BgUic = 'bg_uic',
  BrCnpj = 'br_cnpj',
  BrCpf = 'br_cpf',
  CaBn = 'ca_bn',
  CaGstHst = 'ca_gst_hst',
  CaPstBc = 'ca_pst_bc',
  CaPstMb = 'ca_pst_mb',
  CaPstSk = 'ca_pst_sk',
  CaQst = 'ca_qst',
  ChVat = 'ch_vat',
  ClTin = 'cl_tin',
  EsCif = 'es_cif',
  EuVat = 'eu_vat',
  GbVat = 'gb_vat',
  GeVat = 'ge_vat',
  HkBr = 'hk_br',
  HuTin = 'hu_tin',
  IdNpwp = 'id_npwp',
  IlVat = 'il_vat',
  InGst = 'in_gst',
  IsVat = 'is_vat',
  JpCn = 'jp_cn',
  JpRn = 'jp_rn',
  KrBrn = 'kr_brn',
  LiUid = 'li_uid',
  MxRfc = 'mx_rfc',
  MyFrp = 'my_frp',
  MyItn = 'my_itn',
  MySst = 'my_sst',
  NoVat = 'no_vat',
  NzGst = 'nz_gst',
  RuInn = 'ru_inn',
  RuKpp = 'ru_kpp',
  SaVat = 'sa_vat',
  SgGst = 'sg_gst',
  SgUen = 'sg_uen',
  SiTin = 'si_tin',
  ThVat = 'th_vat',
  TwVat = 'tw_vat',
  UaVat = 'ua_vat',
  Unknown = 'unknown',
  UsEin = 'us_ein',
  ZaVat = 'za_vat'
}

export type Stripe_InvoiceDefaultPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_InvoiceDefaultSourceProperty = WrappedString | Stripe_AlipayAccount | Stripe_BankAccount | Stripe_BitcoinReceiver | Stripe_Card | Stripe_Source;

export type Stripe_TaxRate = {
  __typename?: 'Stripe_TaxRate';
  /** Defaults to `true`. When set to `false`, this tax rate cannot be used with new applications or Checkout Sessions, but will still work for subscriptions and invoices that already have it set. */
  active?: Maybe<Scalars['Boolean']>;
  /** Two-letter country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
  country?: Maybe<Scalars['String']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** An arbitrary string attached to the tax rate for your internal use only. It will not be visible to your customers. */
  description?: Maybe<Scalars['String']>;
  /** The display name of the tax rates as it will appear to your customer on their receipt email, PDF, and the hosted invoice page. */
  display_name?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** This specifies if the tax rate is inclusive or exclusive. */
  inclusive?: Maybe<Scalars['Boolean']>;
  /** The jurisdiction for the tax rate. You can use this label field for tax reporting purposes. It also appears on your customer’s invoice. */
  jurisdiction?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TaxRateObjectProperty>;
  /** This represents the tax rate percent out of 100. */
  percentage?: Maybe<Scalars['Float']>;
  /** [ISO 3166-2 subdivision code](https://en.wikipedia.org/wiki/ISO_3166-2:US), without country prefix. For example, "NY" for New York, United States. */
  state?: Maybe<Scalars['String']>;
  /** The high-level tax type, such as `vat` or `sales_tax`. */
  tax_type?: Maybe<Stripe_TaxRateTaxTypeProperty>;
};

export enum Stripe_TaxRateObjectProperty {
  TaxRate = 'tax_rate'
}

export enum Stripe_TaxRateTaxTypeProperty {
  Gst = 'gst',
  Hst = 'hst',
  Jct = 'jct',
  Pst = 'pst',
  Qst = 'qst',
  Rst = 'rst',
  SalesTax = 'sales_tax',
  Vat = 'vat'
}

/** The individual line items that make up the invoice. `lines` is sorted as follows: invoice items in reverse chronological order, followed by the subscription, if any. */
export type Stripe_InvoiceLinesProperty = {
  __typename?: 'Stripe_InvoiceLinesProperty';
  /** Details about each object. */
  data: Array<Stripe_LineItem>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_InvoiceLinesObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_LineItem = {
  __typename?: 'Stripe_LineItem';
  /** The amount, in %s. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** The amount of discount calculated per discount for this line item. */
  discount_amounts?: Maybe<Array<Maybe<Stripe_DiscountsResourceDiscountAmount>>>;
  /** If true, discounts will apply to this line item. Always false for prorations. */
  discountable?: Maybe<Scalars['Boolean']>;
  /** The discounts applied to the invoice line item. Line item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount. */
  discounts?: Maybe<Array<Maybe<Stripe_LineItemDiscountsProperty>>>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The ID of the [invoice item](https://stripe.com/docs/api/invoiceitems) associated with this line item if any. */
  invoice_item?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. Note that for line items with `type=subscription` this will reflect the metadata of the subscription that caused the line item to be created. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_LineItemObjectProperty>;
  period?: Maybe<Stripe_InvoiceLineItemPeriod>;
  price?: Maybe<Stripe_Price>;
  /** Whether this is a proration. */
  proration?: Maybe<Scalars['Boolean']>;
  proration_details?: Maybe<Stripe_InvoicesLineItemsProrationDetails>;
  /** The quantity of the subscription, if the line item is a subscription or a proration. */
  quantity?: Maybe<Scalars['Int']>;
  /** The subscription that the invoice item pertains to, if any. */
  subscription?: Maybe<Scalars['String']>;
  /** The subscription item that generated this invoice item. Left empty if the line item is not an explicit result of a subscription. */
  subscription_item?: Maybe<Scalars['String']>;
  /** The amount of tax calculated per tax rate for this line item */
  tax_amounts?: Maybe<Array<Maybe<Stripe_InvoiceTaxAmount>>>;
  /** The tax rates which apply to the line item. */
  tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
  /** A string identifying the type of the source of this line item, either an `invoiceitem` or a `subscription`. */
  type?: Maybe<Stripe_LineItemTypeProperty>;
};

export type Stripe_DiscountsResourceDiscountAmount = {
  __typename?: 'Stripe_DiscountsResourceDiscountAmount';
  /** The amount, in %s, of the discount. */
  amount?: Maybe<Scalars['Int']>;
  discount?: Maybe<Stripe_DiscountsResourceDiscountAmountDiscountProperty>;
};

export type Stripe_DiscountsResourceDiscountAmountDiscountProperty = WrappedString | Stripe_Discount | Stripe_DeletedDiscount;

export type Stripe_DeletedDiscount = {
  __typename?: 'Stripe_DeletedDiscount';
  /** The Checkout session that this coupon is applied to, if it is applied to a particular session in payment mode. Will not be present for subscription mode. */
  checkout_session?: Maybe<Scalars['String']>;
  coupon?: Maybe<Stripe_Coupon>;
  customer?: Maybe<Scalars['String']>;
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** The ID of the discount object. Discounts cannot be fetched by ID. Use `expand[]=discounts` in API calls to expand discount IDs in an array. */
  id?: Maybe<Scalars['String']>;
  /** The invoice that the discount's coupon was applied to, if it was applied directly to a particular invoice. */
  invoice?: Maybe<Scalars['String']>;
  /** The invoice item `id` (or invoice line item `id` for invoice line items of type='subscription') that the discount's coupon was applied to, if it was applied directly to a particular invoice item or invoice line item. */
  invoice_item?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedDiscountObjectProperty>;
  promotion_code?: Maybe<Stripe_DeletedDiscountPromotionCodeProperty>;
  /** Date that the coupon was applied. */
  start?: Maybe<Scalars['Int']>;
  /** The subscription that this coupon is applied to, if it is applied to a particular subscription. */
  subscription?: Maybe<Scalars['String']>;
};

export enum Stripe_DeletedDiscountObjectProperty {
  Discount = 'discount'
}

export type Stripe_DeletedDiscountPromotionCodeProperty = WrappedString | Stripe_PromotionCode;

export type Stripe_LineItemDiscountsProperty = WrappedString | Stripe_Discount;

export enum Stripe_LineItemObjectProperty {
  LineItem = 'line_item'
}

export type Stripe_InvoiceLineItemPeriod = {
  __typename?: 'Stripe_InvoiceLineItemPeriod';
  /** The end of the period, which must be greater than or equal to the start. */
  end?: Maybe<Scalars['Int']>;
  /** The start of the period. */
  start?: Maybe<Scalars['Int']>;
};

export type Stripe_InvoicesLineItemsProrationDetails = {
  __typename?: 'Stripe_InvoicesLineItemsProrationDetails';
  credited_items?: Maybe<Stripe_InvoicesLineItemsCreditedItems>;
};

export type Stripe_InvoicesLineItemsCreditedItems = {
  __typename?: 'Stripe_InvoicesLineItemsCreditedItems';
  /** Invoice containing the credited invoice line items */
  invoice?: Maybe<Scalars['String']>;
  /** Credited invoice line items */
  invoice_line_items?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type Stripe_InvoiceTaxAmount = {
  __typename?: 'Stripe_InvoiceTaxAmount';
  /** The amount, in %s, of the tax. */
  amount?: Maybe<Scalars['Int']>;
  /** Whether this tax amount is inclusive or exclusive. */
  inclusive?: Maybe<Scalars['Boolean']>;
  tax_rate?: Maybe<Stripe_InvoiceTaxAmountTaxRateProperty>;
};

export type Stripe_InvoiceTaxAmountTaxRateProperty = WrappedString | Stripe_TaxRate;

export enum Stripe_LineItemTypeProperty {
  Invoiceitem = 'invoiceitem',
  Subscription = 'subscription'
}

export enum Stripe_InvoiceLinesObjectProperty {
  List = 'list'
}

export enum Stripe_InvoiceObjectProperty {
  Invoice = 'invoice'
}

export type Stripe_InvoiceOnBehalfOfProperty = WrappedString | Stripe_Account;

export type Stripe_InvoicePaymentIntentProperty = WrappedString | Stripe_PaymentIntent;

export type Stripe_InvoicesPaymentSettings = {
  __typename?: 'Stripe_InvoicesPaymentSettings';
  payment_method_options?: Maybe<Stripe_InvoicesPaymentMethodOptions>;
  /** The list of payment method types (e.g. card) to provide to the invoice’s PaymentIntent. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice). */
  payment_method_types?: Maybe<Array<Maybe<Stripe_InvoicesPaymentSettingsPaymentMethodTypesProperty>>>;
};

export type Stripe_InvoicesPaymentMethodOptions = {
  __typename?: 'Stripe_InvoicesPaymentMethodOptions';
  acss_debit?: Maybe<Stripe_InvoicePaymentMethodOptionsAcssDebit>;
  bancontact?: Maybe<Stripe_InvoicePaymentMethodOptionsBancontact>;
  card?: Maybe<Stripe_InvoicePaymentMethodOptionsCard>;
  customer_balance?: Maybe<Stripe_InvoicePaymentMethodOptionsCustomerBalance>;
  konbini?: Maybe<Stripe_InvoicePaymentMethodOptionsKonbini>;
  us_bank_account?: Maybe<Stripe_InvoicePaymentMethodOptionsUsBankAccount>;
};

export type Stripe_InvoicePaymentMethodOptionsAcssDebit = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsAcssDebit';
  mandate_options?: Maybe<Stripe_InvoicePaymentMethodOptionsAcssDebitMandateOptions>;
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_InvoicePaymentMethodOptionsAcssDebitVerificationMethodProperty>;
};

export type Stripe_InvoicePaymentMethodOptionsAcssDebitMandateOptions = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsAcssDebitMandateOptions';
  /** Transaction type of the mandate. */
  transaction_type?: Maybe<Stripe_InvoicePaymentMethodOptionsAcssDebitMandateOptionsTransactionTypeProperty>;
};

export enum Stripe_InvoicePaymentMethodOptionsAcssDebitMandateOptionsTransactionTypeProperty {
  Business = 'business',
  Personal = 'personal'
}

export enum Stripe_InvoicePaymentMethodOptionsAcssDebitVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_InvoicePaymentMethodOptionsBancontact = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsBancontact';
  /** Preferred language of the Bancontact authorization page that the customer is redirected to. */
  preferred_language?: Maybe<Stripe_InvoicePaymentMethodOptionsBancontactPreferredLanguageProperty>;
};

export enum Stripe_InvoicePaymentMethodOptionsBancontactPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Fr = 'fr',
  Nl = 'nl'
}

export type Stripe_InvoicePaymentMethodOptionsCard = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsCard';
  /** We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine. */
  request_three_d_secure?: Maybe<Stripe_InvoicePaymentMethodOptionsCardRequestThreeDSecureProperty>;
};

export enum Stripe_InvoicePaymentMethodOptionsCardRequestThreeDSecureProperty {
  Any = 'any',
  Automatic = 'automatic'
}

export type Stripe_InvoicePaymentMethodOptionsCustomerBalance = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsCustomerBalance';
  bank_transfer?: Maybe<Stripe_InvoicePaymentMethodOptionsCustomerBalanceBankTransfer>;
  /** The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`. */
  funding_type?: Maybe<Stripe_InvoicePaymentMethodOptionsCustomerBalanceFundingTypeProperty>;
};

export type Stripe_InvoicePaymentMethodOptionsCustomerBalanceBankTransfer = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsCustomerBalanceBankTransfer';
  /** The bank transfer type that can be used for funding. Permitted values include: `us_bank_account`, `eu_bank_account`, `id_bank_account`, `gb_bank_account`, `jp_bank_account`, `mx_bank_account`, `eu_bank_transfer`, `gb_bank_transfer`, `id_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`. */
  type?: Maybe<Scalars['String']>;
};

export enum Stripe_InvoicePaymentMethodOptionsCustomerBalanceFundingTypeProperty {
  BankTransfer = 'bank_transfer'
}

export type Stripe_InvoicePaymentMethodOptionsKonbini = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsKonbini';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_InvoicePaymentMethodOptionsUsBankAccount = {
  __typename?: 'Stripe_InvoicePaymentMethodOptionsUsBankAccount';
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_InvoicePaymentMethodOptionsUsBankAccountVerificationMethodProperty>;
};

export enum Stripe_InvoicePaymentMethodOptionsUsBankAccountVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export enum Stripe_InvoicesPaymentSettingsPaymentMethodTypesProperty {
  AchCreditTransfer = 'ach_credit_transfer',
  AchDebit = 'ach_debit',
  AcssDebit = 'acss_debit',
  AuBecsDebit = 'au_becs_debit',
  BacsDebit = 'bacs_debit',
  Bancontact = 'bancontact',
  Boleto = 'boleto',
  Card = 'card',
  CustomerBalance = 'customer_balance',
  Fpx = 'fpx',
  Giropay = 'giropay',
  Grabpay = 'grabpay',
  Ideal = 'ideal',
  Konbini = 'konbini',
  Paynow = 'paynow',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  UsBankAccount = 'us_bank_account',
  WechatPay = 'wechat_pay'
}

export type Stripe_InvoiceQuoteProperty = WrappedString | Stripe_Quote;

export type Stripe_Quote = {
  __typename?: 'Stripe_Quote';
  /** Total before any discounts or taxes are applied. */
  amount_subtotal?: Maybe<Scalars['Int']>;
  /** Total after discounts and taxes are applied. */
  amount_total?: Maybe<Scalars['Int']>;
  /** The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. Only applicable if there are no line items with recurring prices on the quote. */
  application_fee_amount?: Maybe<Scalars['Int']>;
  /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. Only applicable if there are line items with recurring prices on the quote. */
  application_fee_percent?: Maybe<Scalars['Float']>;
  automatic_tax?: Maybe<Stripe_QuotesResourceAutomaticTax>;
  /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay invoices at the end of the subscription cycle or on finalization using the default payment method attached to the subscription or customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. Defaults to `charge_automatically`. */
  collection_method?: Maybe<Stripe_QuoteCollectionMethodProperty>;
  computed?: Maybe<Stripe_QuotesResourceComputed>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** The tax rates applied to this quote. */
  default_tax_rates?: Maybe<Array<Maybe<Stripe_QuoteDefaultTaxRatesProperty>>>;
  /** A description that will be displayed on the quote PDF. */
  description?: Maybe<Scalars['String']>;
  /** The discounts applied to this quote. */
  discounts?: Maybe<Array<Maybe<Stripe_QuoteDiscountsProperty>>>;
  /** The date on which the quote will be canceled if in `open` or `draft` status. Measured in seconds since the Unix epoch. */
  expires_at?: Maybe<Scalars['Int']>;
  /** A footer that will be displayed on the quote PDF. */
  footer?: Maybe<Scalars['String']>;
  from_quote?: Maybe<Stripe_QuotesResourceFromQuote>;
  /** A header that will be displayed on the quote PDF. */
  header?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  invoice?: Maybe<Stripe_QuoteInvoiceProperty>;
  invoice_settings?: Maybe<Stripe_InvoiceSettingQuoteSetting>;
  /** A list of items the customer is being quoted for. */
  line_items?: Maybe<Stripe_QuoteLineItemsProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** A unique number that identifies this particular quote. This number is assigned once the quote is [finalized](https://stripe.com/docs/quotes/overview#finalize). */
  number?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_QuoteObjectProperty>;
  on_behalf_of?: Maybe<Stripe_QuoteOnBehalfOfProperty>;
  /** The status of the quote. */
  status?: Maybe<Stripe_QuoteStatusProperty>;
  status_transitions?: Maybe<Stripe_QuotesResourceStatusTransitions>;
  subscription?: Maybe<Stripe_QuoteSubscriptionProperty>;
  subscription_data?: Maybe<Stripe_QuotesResourceSubscriptionData>;
  subscription_schedule?: Maybe<Stripe_QuoteSubscriptionScheduleProperty>;
  test_clock?: Maybe<Stripe_QuoteTestClockProperty>;
  total_details?: Maybe<Stripe_QuotesResourceTotalDetails>;
  transfer_data?: Maybe<Stripe_QuotesResourceTransferData>;
};

export type Stripe_QuotesResourceAutomaticTax = {
  __typename?: 'Stripe_QuotesResourceAutomaticTax';
  /** Automatically calculate taxes */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The status of the most recent automated tax calculation for this quote. */
  status?: Maybe<Stripe_QuotesResourceAutomaticTaxStatusProperty>;
};

export enum Stripe_QuotesResourceAutomaticTaxStatusProperty {
  Complete = 'complete',
  Failed = 'failed',
  RequiresLocationInputs = 'requires_location_inputs'
}

export enum Stripe_QuoteCollectionMethodProperty {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice'
}

export type Stripe_QuotesResourceComputed = {
  __typename?: 'Stripe_QuotesResourceComputed';
  recurring?: Maybe<Stripe_QuotesResourceRecurring>;
  upfront?: Maybe<Stripe_QuotesResourceUpfront>;
};

export type Stripe_QuotesResourceRecurring = {
  __typename?: 'Stripe_QuotesResourceRecurring';
  /** Total before any discounts or taxes are applied. */
  amount_subtotal?: Maybe<Scalars['Int']>;
  /** Total after discounts and taxes are applied. */
  amount_total?: Maybe<Scalars['Int']>;
  /** The frequency at which a subscription is billed. One of `day`, `week`, `month` or `year`. */
  interval?: Maybe<Stripe_QuotesResourceRecurringIntervalProperty>;
  /** The number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months. */
  interval_count?: Maybe<Scalars['Int']>;
  total_details?: Maybe<Stripe_QuotesResourceTotalDetails>;
};

export enum Stripe_QuotesResourceRecurringIntervalProperty {
  Day = 'day',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type Stripe_QuotesResourceTotalDetails = {
  __typename?: 'Stripe_QuotesResourceTotalDetails';
  /** This is the sum of all the discounts. */
  amount_discount?: Maybe<Scalars['Int']>;
  /** This is the sum of all the shipping amounts. */
  amount_shipping?: Maybe<Scalars['Int']>;
  /** This is the sum of all the tax amounts. */
  amount_tax?: Maybe<Scalars['Int']>;
  breakdown?: Maybe<Stripe_QuotesResourceTotalDetailsResourceBreakdown>;
};

export type Stripe_QuotesResourceTotalDetailsResourceBreakdown = {
  __typename?: 'Stripe_QuotesResourceTotalDetailsResourceBreakdown';
  /** The aggregated discounts. */
  discounts?: Maybe<Array<Maybe<Stripe_LineItemsDiscountAmount>>>;
  /** The aggregated tax amounts by rate. */
  taxes?: Maybe<Array<Maybe<Stripe_LineItemsTaxAmount>>>;
};

export type Stripe_LineItemsDiscountAmount = {
  __typename?: 'Stripe_LineItemsDiscountAmount';
  /** The amount discounted. */
  amount?: Maybe<Scalars['Int']>;
  discount?: Maybe<Stripe_Discount>;
};

export type Stripe_LineItemsTaxAmount = {
  __typename?: 'Stripe_LineItemsTaxAmount';
  /** Amount of tax applied for this rate. */
  amount?: Maybe<Scalars['Int']>;
  rate?: Maybe<Stripe_TaxRate>;
};

export type Stripe_QuotesResourceUpfront = {
  __typename?: 'Stripe_QuotesResourceUpfront';
  /** Total before any discounts or taxes are applied. */
  amount_subtotal?: Maybe<Scalars['Int']>;
  /** Total after discounts and taxes are applied. */
  amount_total?: Maybe<Scalars['Int']>;
  /** The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice. */
  line_items?: Maybe<Stripe_QuotesResourceUpfrontLineItemsProperty>;
  total_details?: Maybe<Stripe_QuotesResourceTotalDetails>;
};

/** The line items that will appear on the next invoice after this quote is accepted. This does not include pending invoice items that exist on the customer but may still be included in the next invoice. */
export type Stripe_QuotesResourceUpfrontLineItemsProperty = {
  __typename?: 'Stripe_QuotesResourceUpfrontLineItemsProperty';
  /** Details about each object. */
  data: Array<Stripe_Item>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_QuotesResourceUpfrontLineItemsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_Item = {
  __typename?: 'Stripe_Item';
  /** Total before any discounts or taxes are applied. */
  amount_subtotal?: Maybe<Scalars['Int']>;
  /** Total after discounts and taxes. */
  amount_total?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. Defaults to product name. */
  description?: Maybe<Scalars['String']>;
  /** The discounts applied to the line item. */
  discounts?: Maybe<Array<Maybe<Stripe_LineItemsDiscountAmount>>>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ItemObjectProperty>;
  price?: Maybe<Stripe_Price>;
  /** The quantity of products being purchased. */
  quantity?: Maybe<Scalars['Int']>;
  /** The taxes applied to the line item. */
  taxes?: Maybe<Array<Maybe<Stripe_LineItemsTaxAmount>>>;
};

export enum Stripe_ItemObjectProperty {
  Item = 'item'
}

export enum Stripe_QuotesResourceUpfrontLineItemsObjectProperty {
  List = 'list'
}

export type Stripe_QuoteDefaultTaxRatesProperty = WrappedString | Stripe_TaxRate;

export type Stripe_QuoteDiscountsProperty = WrappedString | Stripe_Discount;

export type Stripe_QuotesResourceFromQuote = {
  __typename?: 'Stripe_QuotesResourceFromQuote';
  /** Whether this quote is a revision of a different quote. */
  is_revision?: Maybe<Scalars['Boolean']>;
  quote?: Maybe<Stripe_QuotesResourceFromQuoteQuoteProperty>;
};

export type Stripe_QuotesResourceFromQuoteQuoteProperty = WrappedString | Stripe_Quote;

export type Stripe_QuoteInvoiceProperty = WrappedString | Stripe_Invoice | Stripe_DeletedInvoice;

export type Stripe_DeletedInvoice = {
  __typename?: 'Stripe_DeletedInvoice';
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedInvoiceObjectProperty>;
};

export enum Stripe_DeletedInvoiceObjectProperty {
  Invoice = 'invoice'
}

export type Stripe_InvoiceSettingQuoteSetting = {
  __typename?: 'Stripe_InvoiceSettingQuoteSetting';
  /** Number of days within which a customer must pay invoices generated by this quote. This value will be `null` for quotes where `collection_method=charge_automatically`. */
  days_until_due?: Maybe<Scalars['Int']>;
};

/** A list of items the customer is being quoted for. */
export type Stripe_QuoteLineItemsProperty = {
  __typename?: 'Stripe_QuoteLineItemsProperty';
  /** Details about each object. */
  data: Array<Stripe_Item>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_QuoteLineItemsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_QuoteLineItemsObjectProperty {
  List = 'list'
}

export enum Stripe_QuoteObjectProperty {
  Quote = 'quote'
}

export type Stripe_QuoteOnBehalfOfProperty = WrappedString | Stripe_Account;

export enum Stripe_QuoteStatusProperty {
  Accepted = 'accepted',
  Canceled = 'canceled',
  Draft = 'draft',
  Open = 'open'
}

export type Stripe_QuotesResourceStatusTransitions = {
  __typename?: 'Stripe_QuotesResourceStatusTransitions';
  /** The time that the quote was accepted. Measured in seconds since Unix epoch. */
  accepted_at?: Maybe<Scalars['Int']>;
  /** The time that the quote was canceled. Measured in seconds since Unix epoch. */
  canceled_at?: Maybe<Scalars['Int']>;
  /** The time that the quote was finalized. Measured in seconds since Unix epoch. */
  finalized_at?: Maybe<Scalars['Int']>;
};

export type Stripe_QuoteSubscriptionProperty = WrappedString | Stripe_Subscription;

export type Stripe_Subscription = {
  __typename?: 'Stripe_Subscription';
  /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. */
  application_fee_percent?: Maybe<Scalars['Float']>;
  automatic_tax?: Maybe<Stripe_SubscriptionAutomaticTax>;
  /** Determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. */
  billing_cycle_anchor?: Maybe<Scalars['Int']>;
  billing_thresholds?: Maybe<Stripe_SubscriptionBillingThresholds>;
  /** A date in the future at which the subscription will automatically get canceled */
  cancel_at?: Maybe<Scalars['Int']>;
  /** If the subscription has been canceled with the `at_period_end` flag set to `true`, `cancel_at_period_end` on the subscription will be true. You can use this attribute to determine whether a subscription that has a status of active is scheduled to be canceled at the end of the current period. */
  cancel_at_period_end?: Maybe<Scalars['Boolean']>;
  /** If the subscription has been canceled, the date of that cancellation. If the subscription was canceled with `cancel_at_period_end`, `canceled_at` will reflect the time of the most recent update request, not the end of the subscription period when the subscription is automatically moved to a canceled state. */
  canceled_at?: Maybe<Scalars['Int']>;
  /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay this subscription at the end of the cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. */
  collection_method?: Maybe<Stripe_SubscriptionCollectionMethodProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** End of the current period that the subscription has been invoiced for. At the end of this period, a new invoice will be created. */
  current_period_end?: Maybe<Scalars['Int']>;
  /** Start of the current period that the subscription has been invoiced for. */
  current_period_start?: Maybe<Scalars['Int']>;
  customer?: Maybe<Scalars['String']>;
  /** Number of days a customer has to pay invoices generated by this subscription. This value will be `null` for subscriptions where `collection_method=charge_automatically`. */
  days_until_due?: Maybe<Scalars['Int']>;
  default_payment_method?: Maybe<Stripe_SubscriptionDefaultPaymentMethodProperty>;
  default_source?: Maybe<Stripe_SubscriptionDefaultSourceProperty>;
  /** The tax rates that will apply to any subscription item that does not have `tax_rates` set. Invoices created will have their `default_tax_rates` populated from the subscription. */
  default_tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
  discount?: Maybe<Stripe_Discount>;
  /** If the subscription has ended, the date the subscription ended. */
  ended_at?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** List of subscription items, each with an attached price. */
  items?: Maybe<Stripe_SubscriptionItemsProperty>;
  latest_invoice?: Maybe<Stripe_SubscriptionLatestInvoiceProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** Specifies the approximate timestamp on which any pending invoice items will be billed according to the schedule provided at `pending_invoice_item_interval`. */
  next_pending_invoice_item_invoice?: Maybe<Scalars['Int']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SubscriptionObjectProperty>;
  pause_collection?: Maybe<Stripe_SubscriptionsResourcePauseCollection>;
  payment_settings?: Maybe<Stripe_SubscriptionsResourcePaymentSettings>;
  pending_invoice_item_interval?: Maybe<Stripe_SubscriptionPendingInvoiceItemInterval>;
  pending_setup_intent?: Maybe<Stripe_SubscriptionPendingSetupIntentProperty>;
  pending_update?: Maybe<Stripe_SubscriptionsResourcePendingUpdate>;
  schedule?: Maybe<Stripe_SubscriptionScheduleProperty>;
  /** Date when the subscription was first created. The date might differ from the `created` date due to backdating. */
  start_date?: Maybe<Scalars['Int']>;
  /**
   * Possible values are `incomplete`, `incomplete_expired`, `trialing`, `active`, `past_due`, `canceled`, or `unpaid`.
   *
   * For `collection_method=charge_automatically` a subscription moves into `incomplete` if the initial payment attempt fails. A subscription in this state can only have metadata and default_source updated. Once the first invoice is paid, the subscription moves into an `active` state. If the first invoice is not paid within 23 hours, the subscription transitions to `incomplete_expired`. This is a terminal state, the open invoice will be voided and no further invoices will be generated.
   *
   * A subscription that is currently in a trial period is `trialing` and moves to `active` when the trial period is over.
   *
   * If subscription `collection_method=charge_automatically` it becomes `past_due` when payment to renew it fails and `canceled` or `unpaid` (depending on your subscriptions settings) when Stripe has exhausted all payment retry attempts.
   *
   * If subscription `collection_method=send_invoice` it becomes `past_due` when its invoice is not paid by the due date, and `canceled` or `unpaid` if it is still not paid by an additional deadline after that. Note that when a subscription has a status of `unpaid`, no subsequent invoices will be attempted (invoices will be created, but then immediately automatically closed). After receiving updated payment information from a customer, you may choose to reopen and pay their closed invoices.
   */
  status?: Maybe<Stripe_SubscriptionStatusProperty>;
  test_clock?: Maybe<Stripe_SubscriptionTestClockProperty>;
  transfer_data?: Maybe<Stripe_SubscriptionTransferData>;
  /** If the subscription has a trial, the end of that trial. */
  trial_end?: Maybe<Scalars['Int']>;
  /** If the subscription has a trial, the beginning of that trial. */
  trial_start?: Maybe<Scalars['Int']>;
};

export type Stripe_SubscriptionAutomaticTax = {
  __typename?: 'Stripe_SubscriptionAutomaticTax';
  /** Whether Stripe automatically computes tax on this subscription. */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type Stripe_SubscriptionBillingThresholds = {
  __typename?: 'Stripe_SubscriptionBillingThresholds';
  /** Monetary threshold that triggers the subscription to create an invoice */
  amount_gte?: Maybe<Scalars['Int']>;
  /** Indicates if the `billing_cycle_anchor` should be reset when a threshold is reached. If true, `billing_cycle_anchor` will be updated to the date/time the threshold was last reached; otherwise, the value will remain unchanged. This value may not be `true` if the subscription contains items with plans that have `aggregate_usage=last_ever`. */
  reset_billing_cycle_anchor?: Maybe<Scalars['Boolean']>;
};

export enum Stripe_SubscriptionCollectionMethodProperty {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice'
}

export type Stripe_SubscriptionDefaultPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SubscriptionDefaultSourceProperty = WrappedString | Stripe_AlipayAccount | Stripe_BankAccount | Stripe_BitcoinReceiver | Stripe_Card | Stripe_Source;

/** List of subscription items, each with an attached price. */
export type Stripe_SubscriptionItemsProperty = {
  __typename?: 'Stripe_SubscriptionItemsProperty';
  /** Details about each object. */
  data: Array<Stripe_SubscriptionItem>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_SubscriptionItemsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_SubscriptionItem = {
  __typename?: 'Stripe_SubscriptionItem';
  billing_thresholds?: Maybe<Stripe_SubscriptionItemBillingThresholds>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SubscriptionItemObjectProperty>;
  price?: Maybe<Stripe_Price>;
  /** The [quantity](https://stripe.com/docs/subscriptions/quantities) of the plan to which the customer should be subscribed. */
  quantity?: Maybe<Scalars['Int']>;
  /** The `subscription` this `subscription_item` belongs to. */
  subscription?: Maybe<Scalars['String']>;
  /** The tax rates which apply to this `subscription_item`. When set, the `default_tax_rates` on the subscription do not apply to this `subscription_item`. */
  tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
};

export type Stripe_SubscriptionItemBillingThresholds = {
  __typename?: 'Stripe_SubscriptionItemBillingThresholds';
  /** Usage threshold that triggers the subscription to create an invoice */
  usage_gte?: Maybe<Scalars['Int']>;
};

export enum Stripe_SubscriptionItemObjectProperty {
  SubscriptionItem = 'subscription_item'
}

export enum Stripe_SubscriptionItemsObjectProperty {
  List = 'list'
}

export type Stripe_SubscriptionLatestInvoiceProperty = WrappedString | Stripe_Invoice;

export enum Stripe_SubscriptionObjectProperty {
  Subscription = 'subscription'
}

export type Stripe_SubscriptionsResourcePauseCollection = {
  __typename?: 'Stripe_SubscriptionsResourcePauseCollection';
  /** The payment collection behavior for this subscription while paused. One of `keep_as_draft`, `mark_uncollectible`, or `void`. */
  behavior?: Maybe<Stripe_SubscriptionsResourcePauseCollectionBehaviorProperty>;
  /** The time after which the subscription will resume collecting payments. */
  resumes_at?: Maybe<Scalars['Int']>;
};

export enum Stripe_SubscriptionsResourcePauseCollectionBehaviorProperty {
  KeepAsDraft = 'keep_as_draft',
  MarkUncollectible = 'mark_uncollectible',
  Void = 'void'
}

export type Stripe_SubscriptionsResourcePaymentSettings = {
  __typename?: 'Stripe_SubscriptionsResourcePaymentSettings';
  payment_method_options?: Maybe<Stripe_SubscriptionsResourcePaymentMethodOptions>;
  /** The list of payment method types to provide to every invoice created by the subscription. If not set, Stripe attempts to automatically determine the types to use by looking at the invoice’s default payment method, the subscription’s default payment method, the customer’s default payment method, and your [invoice template settings](https://dashboard.stripe.com/settings/billing/invoice). */
  payment_method_types?: Maybe<Array<Maybe<Stripe_SubscriptionsResourcePaymentSettingsPaymentMethodTypesProperty>>>;
};

export type Stripe_SubscriptionsResourcePaymentMethodOptions = {
  __typename?: 'Stripe_SubscriptionsResourcePaymentMethodOptions';
  acss_debit?: Maybe<Stripe_InvoicePaymentMethodOptionsAcssDebit>;
  bancontact?: Maybe<Stripe_InvoicePaymentMethodOptionsBancontact>;
  card?: Maybe<Stripe_SubscriptionPaymentMethodOptionsCard>;
  customer_balance?: Maybe<Stripe_InvoicePaymentMethodOptionsCustomerBalance>;
  konbini?: Maybe<Stripe_InvoicePaymentMethodOptionsKonbini>;
  us_bank_account?: Maybe<Stripe_InvoicePaymentMethodOptionsUsBankAccount>;
};

export type Stripe_SubscriptionPaymentMethodOptionsCard = {
  __typename?: 'Stripe_SubscriptionPaymentMethodOptionsCard';
  mandate_options?: Maybe<Stripe_InvoiceMandateOptionsCard>;
  /** We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine. */
  request_three_d_secure?: Maybe<Stripe_SubscriptionPaymentMethodOptionsCardRequestThreeDSecureProperty>;
};

export type Stripe_InvoiceMandateOptionsCard = {
  __typename?: 'Stripe_InvoiceMandateOptionsCard';
  /** Amount to be charged for future payments. */
  amount?: Maybe<Scalars['Int']>;
  /** One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param. */
  amount_type?: Maybe<Stripe_InvoiceMandateOptionsCardAmountTypeProperty>;
  /** A description of the mandate or subscription that is meant to be displayed to the customer. */
  description?: Maybe<Scalars['String']>;
};

export enum Stripe_InvoiceMandateOptionsCardAmountTypeProperty {
  Fixed = 'fixed',
  Maximum = 'maximum'
}

export enum Stripe_SubscriptionPaymentMethodOptionsCardRequestThreeDSecureProperty {
  Any = 'any',
  Automatic = 'automatic'
}

export enum Stripe_SubscriptionsResourcePaymentSettingsPaymentMethodTypesProperty {
  AchCreditTransfer = 'ach_credit_transfer',
  AchDebit = 'ach_debit',
  AcssDebit = 'acss_debit',
  AuBecsDebit = 'au_becs_debit',
  BacsDebit = 'bacs_debit',
  Bancontact = 'bancontact',
  Boleto = 'boleto',
  Card = 'card',
  CustomerBalance = 'customer_balance',
  Fpx = 'fpx',
  Giropay = 'giropay',
  Grabpay = 'grabpay',
  Ideal = 'ideal',
  Konbini = 'konbini',
  Paynow = 'paynow',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  UsBankAccount = 'us_bank_account',
  WechatPay = 'wechat_pay'
}

export type Stripe_SubscriptionPendingInvoiceItemInterval = {
  __typename?: 'Stripe_SubscriptionPendingInvoiceItemInterval';
  /** Specifies invoicing frequency. Either `day`, `week`, `month` or `year`. */
  interval?: Maybe<Stripe_SubscriptionPendingInvoiceItemIntervalIntervalProperty>;
  /** The number of intervals between invoices. For example, `interval=month` and `interval_count=3` bills every 3 months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). */
  interval_count?: Maybe<Scalars['Int']>;
};

export enum Stripe_SubscriptionPendingInvoiceItemIntervalIntervalProperty {
  Day = 'day',
  Month = 'month',
  Week = 'week',
  Year = 'year'
}

export type Stripe_SubscriptionPendingSetupIntentProperty = WrappedString | Stripe_SetupIntent;

export type Stripe_SetupIntent = {
  __typename?: 'Stripe_SetupIntent';
  application?: Maybe<Stripe_SetupIntentApplicationProperty>;
  /** Reason for cancellation of this SetupIntent, one of `abandoned`, `requested_by_customer`, or `duplicate`. */
  cancellation_reason?: Maybe<Stripe_SetupIntentCancellationReasonProperty>;
  /**
   * The client secret of this SetupIntent. Used for client-side retrieval using a publishable key.
   *
   * The client secret can be used to complete payment setup from your frontend. It should not be stored, logged, or exposed to anyone other than the customer. Make sure that you have TLS enabled on any page that includes the client secret.
   */
  client_secret?: Maybe<Scalars['String']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  customer?: Maybe<Scalars['String']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  last_setup_error?: Maybe<Stripe_ApiErrors>;
  latest_attempt?: Maybe<Stripe_SetupIntentLatestAttemptProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  mandate?: Maybe<Stripe_SetupIntentMandateProperty>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  next_action?: Maybe<Stripe_SetupIntentNextAction>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SetupIntentObjectProperty>;
  on_behalf_of?: Maybe<Stripe_SetupIntentOnBehalfOfProperty>;
  payment_method?: Maybe<Stripe_SetupIntentPaymentMethodProperty>;
  payment_method_options?: Maybe<Stripe_SetupIntentPaymentMethodOptions>;
  /** The list of payment method types (e.g. card) that this SetupIntent is allowed to set up. */
  payment_method_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  single_use_mandate?: Maybe<Stripe_SetupIntentSingleUseMandateProperty>;
  /** [Status](https://stripe.com/docs/payments/intents#intent-statuses) of this SetupIntent, one of `requires_payment_method`, `requires_confirmation`, `requires_action`, `processing`, `canceled`, or `succeeded`. */
  status?: Maybe<Stripe_SetupIntentStatusProperty>;
  /**
   * Indicates how the payment method is intended to be used in the future.
   *
   * Use `on_session` if you intend to only reuse the payment method when the customer is in your checkout flow. Use `off_session` if your customer may or may not be in your checkout flow. If not provided, this value defaults to `off_session`.
   */
  usage?: Maybe<Scalars['String']>;
};

export type Stripe_SetupIntentApplicationProperty = WrappedString | Stripe_Application;

export enum Stripe_SetupIntentCancellationReasonProperty {
  Abandoned = 'abandoned',
  Duplicate = 'duplicate',
  RequestedByCustomer = 'requested_by_customer'
}

export type Stripe_SetupIntentLatestAttemptProperty = WrappedString | Stripe_SetupAttempt;

export type Stripe_SetupIntentMandateProperty = WrappedString | Stripe_Mandate;

export type Stripe_SetupIntentNextAction = {
  __typename?: 'Stripe_SetupIntentNextAction';
  redirect_to_url?: Maybe<Stripe_SetupIntentNextActionRedirectToUrl>;
  /** Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`. */
  type?: Maybe<Scalars['String']>;
  /** When confirming a SetupIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js. */
  use_stripe_sdk?: Maybe<Scalars['JSONObject']>;
  verify_with_microdeposits?: Maybe<Stripe_SetupIntentNextActionVerifyWithMicrodeposits>;
};

export type Stripe_SetupIntentNextActionRedirectToUrl = {
  __typename?: 'Stripe_SetupIntentNextActionRedirectToUrl';
  /** If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion. */
  return_url?: Maybe<Scalars['String']>;
  /** The URL you must redirect your customer to in order to authenticate. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_SetupIntentNextActionVerifyWithMicrodeposits = {
  __typename?: 'Stripe_SetupIntentNextActionVerifyWithMicrodeposits';
  /** The timestamp when the microdeposits are expected to land. */
  arrival_date?: Maybe<Scalars['Int']>;
  /** The URL for the hosted verification page, which allows customers to verify their bank account. */
  hosted_verification_url?: Maybe<Scalars['String']>;
  /** The type of the microdeposit sent to the customer. Used to distinguish between different verification methods. */
  microdeposit_type?: Maybe<Stripe_SetupIntentNextActionVerifyWithMicrodepositsMicrodepositTypeProperty>;
};

export enum Stripe_SetupIntentNextActionVerifyWithMicrodepositsMicrodepositTypeProperty {
  Amounts = 'amounts',
  DescriptorCode = 'descriptor_code'
}

export enum Stripe_SetupIntentObjectProperty {
  SetupIntent = 'setup_intent'
}

export type Stripe_SetupIntentOnBehalfOfProperty = WrappedString | Stripe_Account;

export type Stripe_SetupIntentPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SetupIntentPaymentMethodOptions = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptions';
  acss_debit?: Maybe<Stripe_SetupIntentPaymentMethodOptionsAcssDebitProperty>;
  card?: Maybe<Stripe_SetupIntentPaymentMethodOptionsCard>;
  sepa_debit?: Maybe<Stripe_SetupIntentPaymentMethodOptionsSepaDebitProperty>;
  us_bank_account?: Maybe<Stripe_SetupIntentPaymentMethodOptionsUsBankAccountProperty>;
};

export type Stripe_SetupIntentPaymentMethodOptionsAcssDebitProperty = Stripe_SetupIntentPaymentMethodOptionsAcssDebit | Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_SetupIntentPaymentMethodOptionsAcssDebit = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsAcssDebit';
  /** Currency supported by the bank account */
  currency?: Maybe<Stripe_SetupIntentPaymentMethodOptionsAcssDebitCurrencyProperty>;
  mandate_options?: Maybe<Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit>;
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_SetupIntentPaymentMethodOptionsAcssDebitVerificationMethodProperty>;
};

export enum Stripe_SetupIntentPaymentMethodOptionsAcssDebitCurrencyProperty {
  Cad = 'cad',
  Usd = 'usd'
}

export type Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebit';
  /** A URL for custom mandate text */
  custom_mandate_url?: Maybe<Scalars['String']>;
  /** List of Stripe products where this mandate can be selected automatically. */
  default_for?: Maybe<Array<Maybe<Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitDefaultForProperty>>>;
  /** Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'. */
  interval_description?: Maybe<Scalars['String']>;
  /** Payment schedule for the mandate. */
  payment_schedule?: Maybe<Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitPaymentScheduleProperty>;
  /** Transaction type of the mandate. */
  transaction_type?: Maybe<Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitTransactionTypeProperty>;
};

export enum Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitDefaultForProperty {
  Invoice = 'invoice',
  Subscription = 'subscription'
}

export enum Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitPaymentScheduleProperty {
  Combined = 'combined',
  Interval = 'interval',
  Sporadic = 'sporadic'
}

export enum Stripe_SetupIntentPaymentMethodOptionsMandateOptionsAcssDebitTransactionTypeProperty {
  Business = 'business',
  Personal = 'personal'
}

export enum Stripe_SetupIntentPaymentMethodOptionsAcssDebitVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClient = {
  __typename?: 'Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClient';
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClientVerificationMethodProperty>;
};

export enum Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClientVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_SetupIntentPaymentMethodOptionsCard = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsCard';
  mandate_options?: Maybe<Stripe_SetupIntentPaymentMethodOptionsCardMandateOptions>;
  /** We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine. */
  request_three_d_secure?: Maybe<Stripe_SetupIntentPaymentMethodOptionsCardRequestThreeDSecureProperty>;
};

export type Stripe_SetupIntentPaymentMethodOptionsCardMandateOptions = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsCardMandateOptions';
  /** Amount to be charged for future payments. */
  amount?: Maybe<Scalars['Int']>;
  /** One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param. */
  amount_type?: Maybe<Stripe_SetupIntentPaymentMethodOptionsCardMandateOptionsAmountTypeProperty>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** A description of the mandate or subscription that is meant to be displayed to the customer. */
  description?: Maybe<Scalars['String']>;
  /** End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date. */
  end_date?: Maybe<Scalars['Int']>;
  /** Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`. */
  interval?: Maybe<Stripe_SetupIntentPaymentMethodOptionsCardMandateOptionsIntervalProperty>;
  /** The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`. */
  interval_count?: Maybe<Scalars['Int']>;
  /** Unique identifier for the mandate or subscription. */
  reference?: Maybe<Scalars['String']>;
  /** Start date of the mandate or subscription. Start date should not be lesser than yesterday. */
  start_date?: Maybe<Scalars['Int']>;
  /** Specifies the type of mandates supported. Possible values are `india`. */
  supported_types?: Maybe<Array<Maybe<Stripe_SetupIntentPaymentMethodOptionsCardMandateOptionsSupportedTypesProperty>>>;
};

export enum Stripe_SetupIntentPaymentMethodOptionsCardMandateOptionsAmountTypeProperty {
  Fixed = 'fixed',
  Maximum = 'maximum'
}

export enum Stripe_SetupIntentPaymentMethodOptionsCardMandateOptionsIntervalProperty {
  Day = 'day',
  Month = 'month',
  Sporadic = 'sporadic',
  Week = 'week',
  Year = 'year'
}

export enum Stripe_SetupIntentPaymentMethodOptionsCardMandateOptionsSupportedTypesProperty {
  India = 'india'
}

export enum Stripe_SetupIntentPaymentMethodOptionsCardRequestThreeDSecureProperty {
  Any = 'any',
  Automatic = 'automatic',
  ChallengeOnly = 'challenge_only'
}

export type Stripe_SetupIntentPaymentMethodOptionsSepaDebitProperty = Stripe_SetupIntentPaymentMethodOptionsSepaDebit | Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_SetupIntentPaymentMethodOptionsSepaDebit = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsSepaDebit';
  mandate_options?: Maybe<Stripe_SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit>;
};

export type Stripe_SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsMandateOptionsSepaDebit';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_SetupIntentPaymentMethodOptionsUsBankAccountProperty = Stripe_SetupIntentPaymentMethodOptionsUsBankAccount | Stripe_SetupIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_SetupIntentPaymentMethodOptionsUsBankAccount = {
  __typename?: 'Stripe_SetupIntentPaymentMethodOptionsUsBankAccount';
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_SetupIntentPaymentMethodOptionsUsBankAccountVerificationMethodProperty>;
};

export enum Stripe_SetupIntentPaymentMethodOptionsUsBankAccountVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_SetupIntentSingleUseMandateProperty = WrappedString | Stripe_Mandate;

export enum Stripe_SetupIntentStatusProperty {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export type Stripe_SubscriptionsResourcePendingUpdate = {
  __typename?: 'Stripe_SubscriptionsResourcePendingUpdate';
  /** If the update is applied, determines the date of the first full invoice, and, for plans with `month` or `year` intervals, the day of the month for subsequent invoices. */
  billing_cycle_anchor?: Maybe<Scalars['Int']>;
  /** The point after which the changes reflected by this update will be discarded and no longer applied. */
  expires_at?: Maybe<Scalars['Int']>;
  /** List of subscription items, each with an attached plan, that will be set if the update is applied. */
  subscription_items?: Maybe<Array<Maybe<Stripe_SubscriptionItem>>>;
  /** Unix timestamp representing the end of the trial period the customer will get before being charged for the first time, if the update is applied. */
  trial_end?: Maybe<Scalars['Int']>;
  /** Indicates if a plan's `trial_period_days` should be applied to the subscription. Setting `trial_end` per subscription is preferred, and this defaults to `false`. Setting this flag to `true` together with `trial_end` is not allowed. See [Using trial periods on subscriptions](https://stripe.com/docs/billing/subscriptions/trials) to learn more. */
  trial_from_plan?: Maybe<Scalars['Boolean']>;
};

export type Stripe_SubscriptionScheduleProperty = WrappedString | Stripe_SubscriptionSchedule;

export type Stripe_SubscriptionSchedule = {
  __typename?: 'Stripe_SubscriptionSchedule';
  /** Time at which the subscription schedule was canceled. Measured in seconds since the Unix epoch. */
  canceled_at?: Maybe<Scalars['Int']>;
  /** Time at which the subscription schedule was completed. Measured in seconds since the Unix epoch. */
  completed_at?: Maybe<Scalars['Int']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  current_phase?: Maybe<Stripe_SubscriptionScheduleCurrentPhase>;
  customer?: Maybe<Stripe_SubscriptionScheduleCustomerProperty>;
  default_settings?: Maybe<Stripe_SubscriptionSchedulesResourceDefaultSettings>;
  /** Behavior of the subscription schedule and underlying subscription when it ends. Possible values are `release` and `cancel`. */
  end_behavior?: Maybe<Stripe_SubscriptionScheduleEndBehaviorProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SubscriptionScheduleObjectProperty>;
  /** Configuration for the subscription schedule's phases. */
  phases?: Maybe<Array<Maybe<Stripe_SubscriptionSchedulePhaseConfiguration>>>;
  /** Time at which the subscription schedule was released. Measured in seconds since the Unix epoch. */
  released_at?: Maybe<Scalars['Int']>;
  /** ID of the subscription once managed by the subscription schedule (if it is released). */
  released_subscription?: Maybe<Scalars['String']>;
  /** The present status of the subscription schedule. Possible values are `not_started`, `active`, `completed`, `released`, and `canceled`. You can read more about the different states in our [behavior guide](https://stripe.com/docs/billing/subscriptions/subscription-schedules). */
  status?: Maybe<Stripe_SubscriptionScheduleStatusProperty>;
  subscription?: Maybe<Stripe_SubscriptionScheduleSubscriptionProperty>;
  test_clock?: Maybe<Stripe_SubscriptionScheduleTestClockProperty>;
};

export type Stripe_SubscriptionScheduleCurrentPhase = {
  __typename?: 'Stripe_SubscriptionScheduleCurrentPhase';
  /** The end of this phase of the subscription schedule. */
  end_date?: Maybe<Scalars['Int']>;
  /** The start of this phase of the subscription schedule. */
  start_date?: Maybe<Scalars['Int']>;
};

export type Stripe_SubscriptionScheduleCustomerProperty = WrappedString | Stripe_Customer | Stripe_DeletedCustomer;

export type Stripe_SubscriptionSchedulesResourceDefaultSettings = {
  __typename?: 'Stripe_SubscriptionSchedulesResourceDefaultSettings';
  /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule. */
  application_fee_percent?: Maybe<Scalars['Float']>;
  automatic_tax?: Maybe<Stripe_SubscriptionSchedulesResourceDefaultSettingsAutomaticTax>;
  /** Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle). */
  billing_cycle_anchor?: Maybe<Stripe_SubscriptionSchedulesResourceDefaultSettingsBillingCycleAnchorProperty>;
  billing_thresholds?: Maybe<Stripe_SubscriptionBillingThresholds>;
  /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. */
  collection_method?: Maybe<Stripe_SubscriptionSchedulesResourceDefaultSettingsCollectionMethodProperty>;
  default_payment_method?: Maybe<Stripe_SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethodProperty>;
  invoice_settings?: Maybe<Stripe_InvoiceSettingSubscriptionScheduleSetting>;
  transfer_data?: Maybe<Stripe_SubscriptionTransferData>;
};

export type Stripe_SubscriptionSchedulesResourceDefaultSettingsAutomaticTax = {
  __typename?: 'Stripe_SubscriptionSchedulesResourceDefaultSettingsAutomaticTax';
  /** Whether Stripe automatically computes tax on invoices created during this phase. */
  enabled?: Maybe<Scalars['Boolean']>;
};

export enum Stripe_SubscriptionSchedulesResourceDefaultSettingsBillingCycleAnchorProperty {
  Automatic = 'automatic',
  PhaseStart = 'phase_start'
}

export enum Stripe_SubscriptionSchedulesResourceDefaultSettingsCollectionMethodProperty {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice'
}

export type Stripe_SubscriptionSchedulesResourceDefaultSettingsDefaultPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_InvoiceSettingSubscriptionScheduleSetting = {
  __typename?: 'Stripe_InvoiceSettingSubscriptionScheduleSetting';
  /** Number of days within which a customer must pay invoices generated by this subscription schedule. This value will be `null` for subscription schedules where `billing=charge_automatically`. */
  days_until_due?: Maybe<Scalars['Int']>;
};

export type Stripe_SubscriptionTransferData = {
  __typename?: 'Stripe_SubscriptionTransferData';
  /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount is transferred to the destination. */
  amount_percent?: Maybe<Scalars['Float']>;
  destination?: Maybe<Stripe_SubscriptionTransferDataDestinationProperty>;
};

export type Stripe_SubscriptionTransferDataDestinationProperty = WrappedString | Stripe_Account;

export enum Stripe_SubscriptionScheduleEndBehaviorProperty {
  Cancel = 'cancel',
  None = 'none',
  Release = 'release',
  Renew = 'renew'
}

export enum Stripe_SubscriptionScheduleObjectProperty {
  SubscriptionSchedule = 'subscription_schedule'
}

export type Stripe_SubscriptionSchedulePhaseConfiguration = {
  __typename?: 'Stripe_SubscriptionSchedulePhaseConfiguration';
  /** A list of prices and quantities that will generate invoice items appended to the first invoice for this phase. */
  add_invoice_items?: Maybe<Array<Maybe<Stripe_SubscriptionScheduleAddInvoiceItem>>>;
  /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account during this phase of the schedule. */
  application_fee_percent?: Maybe<Scalars['Float']>;
  automatic_tax?: Maybe<Stripe_SchedulesPhaseAutomaticTax>;
  /** Possible values are `phase_start` or `automatic`. If `phase_start` then billing cycle anchor of the subscription is set to the start of the phase when entering the phase. If `automatic` then the billing cycle anchor is automatically modified as needed when entering the phase. For more information, see the billing cycle [documentation](https://stripe.com/docs/billing/subscriptions/billing-cycle). */
  billing_cycle_anchor?: Maybe<Stripe_SubscriptionSchedulePhaseConfigurationBillingCycleAnchorProperty>;
  billing_thresholds?: Maybe<Stripe_SubscriptionBillingThresholds>;
  /** Either `charge_automatically`, or `send_invoice`. When charging automatically, Stripe will attempt to pay the underlying subscription at the end of each billing cycle using the default source attached to the customer. When sending an invoice, Stripe will email your customer an invoice with payment instructions. */
  collection_method?: Maybe<Stripe_SubscriptionSchedulePhaseConfigurationCollectionMethodProperty>;
  coupon?: Maybe<Stripe_SubscriptionSchedulePhaseConfigurationCouponProperty>;
  default_payment_method?: Maybe<Stripe_SubscriptionSchedulePhaseConfigurationDefaultPaymentMethodProperty>;
  /** The default tax rates to apply to the subscription during this phase of the subscription schedule. */
  default_tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
  /** The end of this phase of the subscription schedule. */
  end_date?: Maybe<Scalars['Int']>;
  invoice_settings?: Maybe<Stripe_InvoiceSettingSubscriptionScheduleSetting>;
  /** Subscription items to configure the subscription to during this phase of the subscription schedule. */
  items?: Maybe<Array<Maybe<Stripe_SubscriptionScheduleConfigurationItem>>>;
  /** If the subscription schedule will prorate when transitioning to this phase. Possible values are `create_prorations` and `none`. */
  proration_behavior?: Maybe<Stripe_SubscriptionSchedulePhaseConfigurationProrationBehaviorProperty>;
  /** The start of this phase of the subscription schedule. */
  start_date?: Maybe<Scalars['Int']>;
  transfer_data?: Maybe<Stripe_SubscriptionTransferData>;
  /** When the trial ends within the phase. */
  trial_end?: Maybe<Scalars['Int']>;
};

export type Stripe_SubscriptionScheduleAddInvoiceItem = {
  __typename?: 'Stripe_SubscriptionScheduleAddInvoiceItem';
  price?: Maybe<Stripe_SubscriptionScheduleAddInvoiceItemPriceProperty>;
  /** The quantity of the invoice item. */
  quantity?: Maybe<Scalars['Int']>;
  /** The tax rates which apply to the item. When set, the `default_tax_rates` do not apply to this item. */
  tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
};

export type Stripe_SubscriptionScheduleAddInvoiceItemPriceProperty = WrappedString | Stripe_Price | Stripe_DeletedPrice;

export type Stripe_DeletedPrice = {
  __typename?: 'Stripe_DeletedPrice';
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedPriceObjectProperty>;
};

export enum Stripe_DeletedPriceObjectProperty {
  Price = 'price'
}

export type Stripe_SchedulesPhaseAutomaticTax = {
  __typename?: 'Stripe_SchedulesPhaseAutomaticTax';
  /** Whether Stripe automatically computes tax on invoices created during this phase. */
  enabled?: Maybe<Scalars['Boolean']>;
};

export enum Stripe_SubscriptionSchedulePhaseConfigurationBillingCycleAnchorProperty {
  Automatic = 'automatic',
  PhaseStart = 'phase_start'
}

export enum Stripe_SubscriptionSchedulePhaseConfigurationCollectionMethodProperty {
  ChargeAutomatically = 'charge_automatically',
  SendInvoice = 'send_invoice'
}

export type Stripe_SubscriptionSchedulePhaseConfigurationCouponProperty = WrappedString | Stripe_Coupon | Stripe_DeletedCoupon;

export type Stripe_DeletedCoupon = {
  __typename?: 'Stripe_DeletedCoupon';
  /** Always true for a deleted object */
  deleted?: Maybe<Scalars['Boolean']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_DeletedCouponObjectProperty>;
};

export enum Stripe_DeletedCouponObjectProperty {
  Coupon = 'coupon'
}

export type Stripe_SubscriptionSchedulePhaseConfigurationDefaultPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_SubscriptionScheduleConfigurationItem = {
  __typename?: 'Stripe_SubscriptionScheduleConfigurationItem';
  billing_thresholds?: Maybe<Stripe_SubscriptionItemBillingThresholds>;
  price?: Maybe<Stripe_SubscriptionScheduleConfigurationItemPriceProperty>;
  /** Quantity of the plan to which the customer should be subscribed. */
  quantity?: Maybe<Scalars['Int']>;
  /** The tax rates which apply to this `phase_item`. When set, the `default_tax_rates` on the phase do not apply to this `phase_item`. */
  tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
};

export type Stripe_SubscriptionScheduleConfigurationItemPriceProperty = WrappedString | Stripe_Price | Stripe_DeletedPrice;

export enum Stripe_SubscriptionSchedulePhaseConfigurationProrationBehaviorProperty {
  AlwaysInvoice = 'always_invoice',
  CreateProrations = 'create_prorations',
  None = 'none'
}

export enum Stripe_SubscriptionScheduleStatusProperty {
  Active = 'active',
  Canceled = 'canceled',
  Completed = 'completed',
  NotStarted = 'not_started',
  Released = 'released'
}

export type Stripe_SubscriptionScheduleSubscriptionProperty = WrappedString | Stripe_Subscription;

export type Stripe_SubscriptionScheduleTestClockProperty = WrappedString | Stripe_TestHelpersTestClock;

export type Stripe_TestHelpersTestClock = {
  __typename?: 'Stripe_TestHelpersTestClock';
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Time at which this clock is scheduled to auto delete. */
  deletes_after?: Maybe<Scalars['Int']>;
  /** Time at which all objects belonging to this clock are frozen. */
  frozen_time?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** The custom name supplied at creation. */
  name?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_TestHelpersTestClockObjectProperty>;
  /** The status of the Test Clock. */
  status?: Maybe<Stripe_TestHelpersTestClockStatusProperty>;
};

export enum Stripe_TestHelpersTestClockObjectProperty {
  TestHelpersDoTtestClock = 'test_helpersDOTtest_clock'
}

export enum Stripe_TestHelpersTestClockStatusProperty {
  Advancing = 'advancing',
  InternalFailure = 'internal_failure',
  Ready = 'ready'
}

export enum Stripe_SubscriptionStatusProperty {
  Active = 'active',
  Canceled = 'canceled',
  Incomplete = 'incomplete',
  IncompleteExpired = 'incomplete_expired',
  PastDue = 'past_due',
  Trialing = 'trialing',
  Unpaid = 'unpaid'
}

export type Stripe_SubscriptionTestClockProperty = WrappedString | Stripe_TestHelpersTestClock;

export type Stripe_QuotesResourceSubscriptionData = {
  __typename?: 'Stripe_QuotesResourceSubscriptionData';
  /** When creating a new subscription, the date of which the subscription schedule will start after the quote is accepted. This date is ignored if it is in the past when the quote is accepted. Measured in seconds since the Unix epoch. */
  effective_date?: Maybe<Scalars['Int']>;
  /** Integer representing the number of trial period days before the customer is charged for the first time. */
  trial_period_days?: Maybe<Scalars['Int']>;
};

export type Stripe_QuoteSubscriptionScheduleProperty = WrappedString | Stripe_SubscriptionSchedule;

export type Stripe_QuoteTestClockProperty = WrappedString | Stripe_TestHelpersTestClock;

export type Stripe_QuotesResourceTransferData = {
  __typename?: 'Stripe_QuotesResourceTransferData';
  /** The amount in %s that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination. */
  amount?: Maybe<Scalars['Int']>;
  /** A non-negative decimal between 0 and 100, with at most two decimal places. This represents the percentage of the subscription invoice subtotal that will be transferred to the destination account. By default, the entire amount will be transferred to the destination. */
  amount_percent?: Maybe<Scalars['Float']>;
  destination?: Maybe<Stripe_QuotesResourceTransferDataDestinationProperty>;
};

export type Stripe_QuotesResourceTransferDataDestinationProperty = WrappedString | Stripe_Account;

export enum Stripe_InvoiceStatusProperty {
  Deleted = 'deleted',
  Draft = 'draft',
  Open = 'open',
  Paid = 'paid',
  Uncollectible = 'uncollectible',
  Void = 'void'
}

export type Stripe_InvoicesStatusTransitions = {
  __typename?: 'Stripe_InvoicesStatusTransitions';
  /** The time that the invoice draft was finalized. */
  finalized_at?: Maybe<Scalars['Int']>;
  /** The time that the invoice was marked uncollectible. */
  marked_uncollectible_at?: Maybe<Scalars['Int']>;
  /** The time that the invoice was paid. */
  paid_at?: Maybe<Scalars['Int']>;
  /** The time that the invoice was voided. */
  voided_at?: Maybe<Scalars['Int']>;
};

export type Stripe_InvoiceSubscriptionProperty = WrappedString | Stripe_Subscription;

export type Stripe_InvoiceTestClockProperty = WrappedString | Stripe_TestHelpersTestClock;

export type Stripe_InvoiceThresholdReason = {
  __typename?: 'Stripe_InvoiceThresholdReason';
  /** The total invoice amount threshold boundary if it triggered the threshold invoice. */
  amount_gte?: Maybe<Scalars['Int']>;
  /** Indicates which line items triggered a threshold invoice. */
  item_reasons?: Maybe<Array<Maybe<Stripe_InvoiceItemThresholdReason>>>;
};

export type Stripe_InvoiceItemThresholdReason = {
  __typename?: 'Stripe_InvoiceItemThresholdReason';
  /** The IDs of the line items that triggered the threshold invoice. */
  line_item_ids?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The quantity threshold boundary that applied to the given line item. */
  usage_gte?: Maybe<Scalars['Int']>;
};

export type Stripe_InvoiceTransferData = {
  __typename?: 'Stripe_InvoiceTransferData';
  /** The amount in %s that will be transferred to the destination account when the invoice is paid. By default, the entire amount is transferred to the destination. */
  amount?: Maybe<Scalars['Int']>;
  destination?: Maybe<Stripe_InvoiceTransferDataDestinationProperty>;
};

export type Stripe_InvoiceTransferDataDestinationProperty = WrappedString | Stripe_Account;

export enum Stripe_ChargeObjectProperty {
  Charge = 'charge'
}

export type Stripe_ChargeOnBehalfOfProperty = WrappedString | Stripe_Account;

export type Stripe_ChargeOrderProperty = WrappedString | Stripe_Order;

export type Stripe_Order = {
  __typename?: 'Stripe_Order';
  /** A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the order. */
  amount?: Maybe<Scalars['Int']>;
  /** The total amount that was returned to the customer. */
  amount_returned?: Maybe<Scalars['Int']>;
  /** ID of the Connect Application that created the order. */
  application?: Maybe<Scalars['String']>;
  /** A fee in cents that will be applied to the order and transferred to the application owner’s Stripe account. The request must be made with an OAuth key or the Stripe-Account header in order to take an application fee. For more information, see the application fees documentation. */
  application_fee?: Maybe<Scalars['Int']>;
  charge?: Maybe<Stripe_OrderChargeProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** The email address of the customer placing the order. */
  email?: Maybe<Scalars['String']>;
  /** External coupon code to load for this order. */
  external_coupon_code?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** List of items constituting the order. An order can have up to 25 items. */
  items?: Maybe<Array<Maybe<Stripe_OrderItem>>>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_OrderObjectProperty>;
  /** A list of returns that have taken place for this order. */
  returns?: Maybe<Stripe_OrderReturnsProperty>;
  /** The shipping method that is currently selected for this order, if any. If present, it is equal to one of the `id`s of shipping methods in the `shipping_methods` array. At order creation time, if there are multiple shipping methods, Stripe will automatically selected the first method. */
  selected_shipping_method?: Maybe<Scalars['String']>;
  shipping?: Maybe<Stripe_Shipping>;
  /** A list of supported shipping methods for this order. The desired shipping method can be specified either by updating the order, or when paying it. */
  shipping_methods?: Maybe<Array<Maybe<Stripe_ShippingMethod>>>;
  /** Current order status. One of `created`, `paid`, `canceled`, `fulfilled`, or `returned`. More details in the [Orders Guide](https://stripe.com/docs/orders/guide#understanding-order-statuses). */
  status?: Maybe<Scalars['String']>;
  status_transitions?: Maybe<Stripe_StatusTransitions>;
  /** Time at which the object was last updated. Measured in seconds since the Unix epoch. */
  updated?: Maybe<Scalars['Int']>;
  /** The user's order ID if it is different from the Stripe order ID. */
  upstream_id?: Maybe<Scalars['String']>;
};

export type Stripe_OrderChargeProperty = WrappedString | Stripe_Charge;

export type Stripe_OrderItem = {
  __typename?: 'Stripe_OrderItem';
  /** A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Description of the line item, meant to be displayable to the user (e.g., `"Express shipping"`). */
  description?: Maybe<Scalars['String']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_OrderItemObjectProperty>;
  parent?: Maybe<Stripe_OrderItemParentProperty>;
  /** A positive integer representing the number of instances of `parent` that are included in this order item. Applicable/present only if `type` is `sku`. */
  quantity?: Maybe<Scalars['Int']>;
  /** The type of line item. One of `sku`, `tax`, `shipping`, or `discount`. */
  type?: Maybe<Scalars['String']>;
};

export enum Stripe_OrderItemObjectProperty {
  OrderItem = 'order_item'
}

export type Stripe_OrderItemParentProperty = WrappedString | Stripe_Sku;

export type Stripe_Sku = {
  __typename?: 'Stripe_Sku';
  /** Whether the SKU is available for purchase. */
  active?: Maybe<Scalars['Boolean']>;
  /** A dictionary of attributes and values for the attributes defined by the product. If, for example, a product's attributes are `["size", "gender"]`, a valid SKU has the following dictionary of attributes: `{"size": "Medium", "gender": "Unisex"}`. */
  attributes?: Maybe<Scalars['JSONObject']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The URL of an image for this SKU, meant to be displayable to the customer. */
  image?: Maybe<Scalars['String']>;
  inventory?: Maybe<Stripe_SkuInventory>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_SkuObjectProperty>;
  package_dimensions?: Maybe<Stripe_PackageDimensions>;
  /** The cost of the item as a positive integer in the smallest currency unit (that is, 100 cents to charge $1.00, or 100 to charge ¥100, Japanese Yen being a zero-decimal currency). */
  price?: Maybe<Scalars['Int']>;
  product?: Maybe<Stripe_SkuProductProperty>;
  /** Time at which the object was last updated. Measured in seconds since the Unix epoch. */
  updated?: Maybe<Scalars['Int']>;
};

export type Stripe_SkuInventory = {
  __typename?: 'Stripe_SkuInventory';
  /** The count of inventory available. Will be present if and only if `type` is `finite`. */
  quantity?: Maybe<Scalars['Int']>;
  /** Inventory type. Possible values are `finite`, `bucket` (not quantified), and `infinite`. */
  type?: Maybe<Scalars['String']>;
  /** An indicator of the inventory available. Possible values are `in_stock`, `limited`, and `out_of_stock`. Will be present if and only if `type` is `bucket`. */
  value?: Maybe<Scalars['String']>;
};

export enum Stripe_SkuObjectProperty {
  Sku = 'sku'
}

export type Stripe_SkuProductProperty = WrappedString | Stripe_Product;

export enum Stripe_OrderObjectProperty {
  Order = 'order'
}

/** A list of returns that have taken place for this order. */
export type Stripe_OrderReturnsProperty = {
  __typename?: 'Stripe_OrderReturnsProperty';
  /** Details about each object. */
  data: Array<Stripe_OrderReturn>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_OrderReturnsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_OrderReturn = {
  __typename?: 'Stripe_OrderReturn';
  /** A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the returned line item. */
  amount?: Maybe<Scalars['Int']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The items included in this order return. */
  items?: Maybe<Array<Maybe<Stripe_OrderItem>>>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_OrderReturnObjectProperty>;
  order?: Maybe<Stripe_OrderReturnOrderProperty>;
  refund?: Maybe<Stripe_OrderReturnRefundProperty>;
};

export enum Stripe_OrderReturnObjectProperty {
  OrderReturn = 'order_return'
}

export type Stripe_OrderReturnOrderProperty = WrappedString | Stripe_Order;

export type Stripe_OrderReturnRefundProperty = WrappedString | Stripe_Refund;

export enum Stripe_OrderReturnsObjectProperty {
  List = 'list'
}

export type Stripe_ShippingMethod = {
  __typename?: 'Stripe_ShippingMethod';
  /** A positive integer in the smallest currency unit (that is, 100 cents for $1.00, or 1 for ¥1, Japanese Yen being a zero-decimal currency) representing the total amount for the line item. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  delivery_estimate?: Maybe<Stripe_DeliveryEstimate>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
};

export type Stripe_DeliveryEstimate = {
  __typename?: 'Stripe_DeliveryEstimate';
  /** If `type` is `"exact"`, `date` will be the expected delivery date in the format YYYY-MM-DD. */
  date?: Maybe<Scalars['String']>;
  /** If `type` is `"range"`, `earliest` will be be the earliest delivery date in the format YYYY-MM-DD. */
  earliest?: Maybe<Scalars['String']>;
  /** If `type` is `"range"`, `latest` will be the latest delivery date in the format YYYY-MM-DD. */
  latest?: Maybe<Scalars['String']>;
  /** The type of estimate. Must be either `"range"` or `"exact"`. */
  type?: Maybe<Scalars['String']>;
};

export type Stripe_StatusTransitions = {
  __typename?: 'Stripe_StatusTransitions';
  /** The time that the order was canceled. */
  canceled?: Maybe<Scalars['Int']>;
  /** The time that the order was fulfilled. */
  fulfiled?: Maybe<Scalars['Int']>;
  /** The time that the order was paid. */
  paid?: Maybe<Scalars['Int']>;
  /** The time that the order was returned. */
  returned?: Maybe<Scalars['Int']>;
};

export type Stripe_ChargeOutcome = {
  __typename?: 'Stripe_ChargeOutcome';
  /** Possible values are `approved_by_network`, `declined_by_network`, `not_sent_to_network`, and `reversed_after_approval`. The value `reversed_after_approval` indicates the payment was [blocked by Stripe](https://stripe.com/docs/declines#blocked-payments) after bank authorization, and may temporarily appear as "pending" on a cardholder's statement. */
  network_status?: Maybe<Scalars['String']>;
  /** An enumerated value providing a more detailed explanation of the outcome's `type`. Charges blocked by Radar's default block rule have the value `highest_risk_level`. Charges placed in review by Radar's default review rule have the value `elevated_risk_level`. Charges authorized, blocked, or placed in review by custom rules have the value `rule`. See [understanding declines](https://stripe.com/docs/declines) for more details. */
  reason?: Maybe<Scalars['String']>;
  /** Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are `normal`, `elevated`, `highest`. For non-card payments, and card-based payments predating the public assignment of risk levels, this field will have the value `not_assessed`. In the event of an error in the evaluation, this field will have the value `unknown`. This field is only available with Radar. */
  risk_level?: Maybe<Scalars['String']>;
  /** Stripe Radar's evaluation of the riskiness of the payment. Possible values for evaluated payments are between 0 and 100. For non-card payments, card-based payments predating the public assignment of risk scores, or in the event of an error during evaluation, this field will not be present. This field is only available with Radar for Fraud Teams. */
  risk_score?: Maybe<Scalars['Int']>;
  rule?: Maybe<Stripe_ChargeOutcomeRuleProperty>;
  /** A human-readable description of the outcome type and reason, designed for you (the recipient of the payment), not your customer. */
  seller_message?: Maybe<Scalars['String']>;
  /** Possible values are `authorized`, `manual_review`, `issuer_declined`, `blocked`, and `invalid`. See [understanding declines](https://stripe.com/docs/declines) and [Radar reviews](https://stripe.com/docs/radar/reviews) for details. */
  type?: Maybe<Scalars['String']>;
};

export type Stripe_ChargeOutcomeRuleProperty = WrappedString | Stripe_Rule;

export type Stripe_Rule = {
  __typename?: 'Stripe_Rule';
  /** The action taken on the payment. */
  action?: Maybe<Scalars['String']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The predicate to evaluate the payment against. */
  predicate?: Maybe<Scalars['String']>;
};

export type Stripe_ChargePaymentIntentProperty = WrappedString | Stripe_PaymentIntent;

export type Stripe_PaymentMethodDetails = {
  __typename?: 'Stripe_PaymentMethodDetails';
  ach_credit_transfer?: Maybe<Stripe_PaymentMethodDetailsAchCreditTransfer>;
  ach_debit?: Maybe<Stripe_PaymentMethodDetailsAchDebit>;
  acss_debit?: Maybe<Stripe_PaymentMethodDetailsAcssDebit>;
  afterpay_clearpay?: Maybe<Stripe_PaymentMethodDetailsAfterpayClearpay>;
  alipay?: Maybe<Stripe_PaymentFlowsPrivatePaymentMethodsAlipayDetails>;
  au_becs_debit?: Maybe<Stripe_PaymentMethodDetailsAuBecsDebit>;
  bacs_debit?: Maybe<Stripe_PaymentMethodDetailsBacsDebit>;
  bancontact?: Maybe<Stripe_PaymentMethodDetailsBancontact>;
  boleto?: Maybe<Stripe_PaymentMethodDetailsBoleto>;
  card?: Maybe<Stripe_PaymentMethodDetailsCard>;
  card_present?: Maybe<Stripe_PaymentMethodDetailsCardPresent>;
  customer_balance?: Maybe<Stripe_PaymentMethodDetailsCustomerBalance>;
  eps?: Maybe<Stripe_PaymentMethodDetailsEps>;
  fpx?: Maybe<Stripe_PaymentMethodDetailsFpx>;
  giropay?: Maybe<Stripe_PaymentMethodDetailsGiropay>;
  grabpay?: Maybe<Stripe_PaymentMethodDetailsGrabpay>;
  ideal?: Maybe<Stripe_PaymentMethodDetailsIdeal>;
  interac_present?: Maybe<Stripe_PaymentMethodDetailsInteracPresent>;
  klarna?: Maybe<Stripe_PaymentMethodDetailsKlarna>;
  konbini?: Maybe<Stripe_PaymentMethodDetailsKonbini>;
  multibanco?: Maybe<Stripe_PaymentMethodDetailsMultibanco>;
  oxxo?: Maybe<Stripe_PaymentMethodDetailsOxxo>;
  p24?: Maybe<Stripe_PaymentMethodDetailsP24>;
  paynow?: Maybe<Stripe_PaymentMethodDetailsPaynow>;
  sepa_debit?: Maybe<Stripe_PaymentMethodDetailsSepaDebit>;
  sofort?: Maybe<Stripe_PaymentMethodDetailsSofort>;
  stripe_account?: Maybe<Stripe_PaymentMethodDetailsStripeAccount>;
  /**
   * The type of transaction-specific details of the payment method used in the payment, one of `ach_credit_transfer`, `ach_debit`, `acss_debit`, `alipay`, `au_becs_debit`, `bancontact`, `card`, `card_present`, `eps`, `giropay`, `ideal`, `klarna`, `multibanco`, `p24`, `sepa_debit`, `sofort`, `stripe_account`, or `wechat`.
   * An additional hash is included on `payment_method_details` with a name matching this value.
   * It contains information specific to the payment method.
   */
  type?: Maybe<Scalars['String']>;
  us_bank_account?: Maybe<Stripe_PaymentMethodDetailsUsBankAccount>;
  wechat?: Maybe<Stripe_PaymentMethodDetailsWechat>;
  wechat_pay?: Maybe<Stripe_PaymentMethodDetailsWechatPay>;
};

export type Stripe_PaymentMethodDetailsAchCreditTransfer = {
  __typename?: 'Stripe_PaymentMethodDetailsAchCreditTransfer';
  /** Account number to transfer funds to. */
  account_number?: Maybe<Scalars['String']>;
  /** Name of the bank associated with the routing number. */
  bank_name?: Maybe<Scalars['String']>;
  /** Routing transit number for the bank account to transfer funds to. */
  routing_number?: Maybe<Scalars['String']>;
  /** SWIFT code of the bank associated with the routing number. */
  swift_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsAchDebit = {
  __typename?: 'Stripe_PaymentMethodDetailsAchDebit';
  /** Type of entity that holds the account. This can be either `individual` or `company`. */
  account_holder_type?: Maybe<Stripe_PaymentMethodDetailsAchDebitAccountHolderTypeProperty>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** Routing transit number of the bank account. */
  routing_number?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsAchDebitAccountHolderTypeProperty {
  Company = 'company',
  Individual = 'individual'
}

export type Stripe_PaymentMethodDetailsAcssDebit = {
  __typename?: 'Stripe_PaymentMethodDetailsAcssDebit';
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Institution number of the bank account */
  institution_number?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** ID of the mandate used to make this payment. */
  mandate?: Maybe<Scalars['String']>;
  /** Transit number of the bank account. */
  transit_number?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsAfterpayClearpay = {
  __typename?: 'Stripe_PaymentMethodDetailsAfterpayClearpay';
  /** Order identifier shown to the merchant in Afterpay’s online portal. */
  reference?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentFlowsPrivatePaymentMethodsAlipayDetails = {
  __typename?: 'Stripe_PaymentFlowsPrivatePaymentMethodsAlipayDetails';
  /** Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same. */
  buyer_id?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular Alipay account. You can use this attribute to check whether two Alipay accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Transaction ID of this particular Alipay transaction. */
  transaction_id?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsAuBecsDebit = {
  __typename?: 'Stripe_PaymentMethodDetailsAuBecsDebit';
  /** Bank-State-Branch number of the bank account. */
  bsb_number?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** ID of the mandate used to make this payment. */
  mandate?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsBacsDebit = {
  __typename?: 'Stripe_PaymentMethodDetailsBacsDebit';
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** ID of the mandate used to make this payment. */
  mandate?: Maybe<Scalars['String']>;
  /** Sort code of the bank account. (e.g., `10-20-30`) */
  sort_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsBancontact = {
  __typename?: 'Stripe_PaymentMethodDetailsBancontact';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Bank Identifier Code of the bank associated with the bank account. */
  bic?: Maybe<Scalars['String']>;
  generated_sepa_debit?: Maybe<Stripe_PaymentMethodDetailsBancontactGeneratedSepaDebitProperty>;
  generated_sepa_debit_mandate?: Maybe<Stripe_PaymentMethodDetailsBancontactGeneratedSepaDebitMandateProperty>;
  /** Last four characters of the IBAN. */
  iban_last4?: Maybe<Scalars['String']>;
  /**
   * Preferred language of the Bancontact authorization page that the customer is redirected to.
   * Can be one of `en`, `de`, `fr`, or `nl`
   */
  preferred_language?: Maybe<Stripe_PaymentMethodDetailsBancontactPreferredLanguageProperty>;
  /**
   * Owner's verified full name. Values are verified or provided by Bancontact directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsBancontactGeneratedSepaDebitProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_PaymentMethodDetailsBancontactGeneratedSepaDebitMandateProperty = WrappedString | Stripe_Mandate;

export enum Stripe_PaymentMethodDetailsBancontactPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Fr = 'fr',
  Nl = 'nl'
}

export type Stripe_PaymentMethodDetailsBoleto = {
  __typename?: 'Stripe_PaymentMethodDetailsBoleto';
  /** The tax ID of the customer (CPF for individuals consumers or CNPJ for businesses consumers) */
  tax_id?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsCard = {
  __typename?: 'Stripe_PaymentMethodDetailsCard';
  /** Card brand. Can be `amex`, `diners`, `discover`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
  brand?: Maybe<Scalars['String']>;
  checks?: Maybe<Stripe_PaymentMethodDetailsCardChecks>;
  /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
  country?: Maybe<Scalars['String']>;
  /** Two-digit number representing the card's expiration month. */
  exp_month?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card's expiration year. */
  exp_year?: Maybe<Scalars['Int']>;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
   */
  fingerprint?: Maybe<Scalars['String']>;
  /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
  funding?: Maybe<Scalars['String']>;
  installments?: Maybe<Stripe_PaymentMethodDetailsCardInstallments>;
  /** The last four digits of the card. */
  last4?: Maybe<Scalars['String']>;
  /** ID of the mandate used to make this payment or created by it. */
  mandate?: Maybe<Scalars['String']>;
  /** Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
  network?: Maybe<Scalars['String']>;
  three_d_secure?: Maybe<Stripe_ThreeDSecureDetails>;
  wallet?: Maybe<Stripe_PaymentMethodDetailsCardWallet>;
};

export type Stripe_PaymentMethodDetailsCardChecks = {
  __typename?: 'Stripe_PaymentMethodDetailsCardChecks';
  /** If a address line1 was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`. */
  address_line1_check?: Maybe<Scalars['String']>;
  /** If a address postal code was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`. */
  address_postal_code_check?: Maybe<Scalars['String']>;
  /** If a CVC was provided, results of the check, one of `pass`, `fail`, `unavailable`, or `unchecked`. */
  cvc_check?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsCardInstallments = {
  __typename?: 'Stripe_PaymentMethodDetailsCardInstallments';
  plan?: Maybe<Stripe_PaymentMethodDetailsCardInstallmentsPlan>;
};

export type Stripe_PaymentMethodDetailsCardInstallmentsPlan = {
  __typename?: 'Stripe_PaymentMethodDetailsCardInstallmentsPlan';
  /** For `fixed_count` installment plans, this is the number of installment payments your customer will make to their credit card. */
  count?: Maybe<Scalars['Int']>;
  /**
   * For `fixed_count` installment plans, this is the interval between installment payments your customer will make to their credit card.
   * One of `month`.
   */
  interval?: Maybe<Stripe_PaymentMethodDetailsCardInstallmentsPlanIntervalProperty>;
  /** Type of installment plan, one of `fixed_count`. */
  type?: Maybe<Stripe_PaymentMethodDetailsCardInstallmentsPlanTypeProperty>;
};

export enum Stripe_PaymentMethodDetailsCardInstallmentsPlanIntervalProperty {
  Month = 'month'
}

export enum Stripe_PaymentMethodDetailsCardInstallmentsPlanTypeProperty {
  FixedCount = 'fixed_count'
}

export type Stripe_PaymentMethodDetailsCardWallet = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWallet';
  amex_express_checkout?: Maybe<Stripe_PaymentMethodDetailsCardWalletAmexExpressCheckout>;
  apple_pay?: Maybe<Stripe_PaymentMethodDetailsCardWalletApplePay>;
  /** (For tokenized numbers only.) The last four digits of the device account number. */
  dynamic_last4?: Maybe<Scalars['String']>;
  google_pay?: Maybe<Stripe_PaymentMethodDetailsCardWalletGooglePay>;
  masterpass?: Maybe<Stripe_PaymentMethodDetailsCardWalletMasterpass>;
  samsung_pay?: Maybe<Stripe_PaymentMethodDetailsCardWalletSamsungPay>;
  /** The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type. */
  type?: Maybe<Stripe_PaymentMethodDetailsCardWalletTypeProperty>;
  visa_checkout?: Maybe<Stripe_PaymentMethodDetailsCardWalletVisaCheckout>;
};

export type Stripe_PaymentMethodDetailsCardWalletAmexExpressCheckout = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWalletAmexExpressCheckout';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodDetailsCardWalletApplePay = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWalletApplePay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodDetailsCardWalletGooglePay = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWalletGooglePay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodDetailsCardWalletMasterpass = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWalletMasterpass';
  billing_address?: Maybe<Stripe_Address>;
  /** Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  email?: Maybe<Scalars['String']>;
  /** Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  name?: Maybe<Scalars['String']>;
  shipping_address?: Maybe<Stripe_Address>;
};

export type Stripe_PaymentMethodDetailsCardWalletSamsungPay = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWalletSamsungPay';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_PaymentMethodDetailsCardWalletTypeProperty {
  AmexExpressCheckout = 'amex_express_checkout',
  ApplePay = 'apple_pay',
  GooglePay = 'google_pay',
  Masterpass = 'masterpass',
  SamsungPay = 'samsung_pay',
  VisaCheckout = 'visa_checkout'
}

export type Stripe_PaymentMethodDetailsCardWalletVisaCheckout = {
  __typename?: 'Stripe_PaymentMethodDetailsCardWalletVisaCheckout';
  billing_address?: Maybe<Stripe_Address>;
  /** Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  email?: Maybe<Scalars['String']>;
  /** Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  name?: Maybe<Scalars['String']>;
  shipping_address?: Maybe<Stripe_Address>;
};

export type Stripe_PaymentMethodDetailsCustomerBalance = {
  __typename?: 'Stripe_PaymentMethodDetailsCustomerBalance';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodDetailsEps = {
  __typename?: 'Stripe_PaymentMethodDetailsEps';
  /** The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`. */
  bank?: Maybe<Stripe_PaymentMethodDetailsEpsBankProperty>;
  /**
   * Owner's verified full name. Values are verified or provided by EPS directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   * EPS rarely provides this information so the attribute is usually empty.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsEpsBankProperty {
  ArzteUndApothekerBank = 'arzte_und_apotheker_bank',
  AustrianAnadiBankAg = 'austrian_anadi_bank_ag',
  BankAustria = 'bank_austria',
  BankhausCarlSpangler = 'bankhaus_carl_spangler',
  BankhausSchelhammerUndSchatteraAg = 'bankhaus_schelhammer_und_schattera_ag',
  BawagPskAg = 'bawag_psk_ag',
  BksBankAg = 'bks_bank_ag',
  BrullKallmusBankAg = 'brull_kallmus_bank_ag',
  BtvVierLanderBank = 'btv_vier_lander_bank',
  CapitalBankGraweGruppeAg = 'capital_bank_grawe_gruppe_ag',
  Dolomitenbank = 'dolomitenbank',
  EasybankAg = 'easybank_ag',
  ErsteBankUndSparkassen = 'erste_bank_und_sparkassen',
  HypoAlpeadriabankInternationalAg = 'hypo_alpeadriabank_international_ag',
  HypoBankBurgenlandAktiengesellschaft = 'hypo_bank_burgenland_aktiengesellschaft',
  HypoNoeLbFurNiederosterreichUWien = 'hypo_noe_lb_fur_niederosterreich_u_wien',
  HypoOberosterreichSalzburgSteiermark = 'hypo_oberosterreich_salzburg_steiermark',
  HypoTirolBankAg = 'hypo_tirol_bank_ag',
  HypoVorarlbergBankAg = 'hypo_vorarlberg_bank_ag',
  MarchfelderBank = 'marchfelder_bank',
  OberbankAg = 'oberbank_ag',
  RaiffeisenBankengruppeOsterreich = 'raiffeisen_bankengruppe_osterreich',
  SchoellerbankAg = 'schoellerbank_ag',
  SpardaBankWien = 'sparda_bank_wien',
  VolksbankGruppe = 'volksbank_gruppe',
  VolkskreditbankAg = 'volkskreditbank_ag',
  VrBankBraunau = 'vr_bank_braunau'
}

export type Stripe_PaymentMethodDetailsFpx = {
  __typename?: 'Stripe_PaymentMethodDetailsFpx';
  /** The customer's bank. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, or `pb_enterprise`. */
  bank?: Maybe<Stripe_PaymentMethodDetailsFpxBankProperty>;
  /** Unique transaction id generated by FPX for every request from the merchant */
  transaction_id?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsFpxBankProperty {
  AffinBank = 'affin_bank',
  Agrobank = 'agrobank',
  AllianceBank = 'alliance_bank',
  Ambank = 'ambank',
  BankIslam = 'bank_islam',
  BankMuamalat = 'bank_muamalat',
  BankRakyat = 'bank_rakyat',
  Bsn = 'bsn',
  Cimb = 'cimb',
  DeutscheBank = 'deutsche_bank',
  HongLeongBank = 'hong_leong_bank',
  Hsbc = 'hsbc',
  Kfh = 'kfh',
  Maybank2e = 'maybank2e',
  Maybank2u = 'maybank2u',
  Ocbc = 'ocbc',
  PbEnterprise = 'pb_enterprise',
  PublicBank = 'public_bank',
  Rhb = 'rhb',
  StandardChartered = 'standard_chartered',
  Uob = 'uob'
}

export type Stripe_PaymentMethodDetailsGiropay = {
  __typename?: 'Stripe_PaymentMethodDetailsGiropay';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Bank Identifier Code of the bank associated with the bank account. */
  bic?: Maybe<Scalars['String']>;
  /**
   * Owner's verified full name. Values are verified or provided by Giropay directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   * Giropay rarely provides this information so the attribute is usually empty.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsGrabpay = {
  __typename?: 'Stripe_PaymentMethodDetailsGrabpay';
  /** Unique transaction id generated by GrabPay */
  transaction_id?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsIdeal = {
  __typename?: 'Stripe_PaymentMethodDetailsIdeal';
  /** The customer's bank. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, or `van_lanschot`. */
  bank?: Maybe<Stripe_PaymentMethodDetailsIdealBankProperty>;
  /** The Bank Identifier Code of the customer's bank. */
  bic?: Maybe<Stripe_PaymentMethodDetailsIdealBicProperty>;
  generated_sepa_debit?: Maybe<Stripe_PaymentMethodDetailsIdealGeneratedSepaDebitProperty>;
  generated_sepa_debit_mandate?: Maybe<Stripe_PaymentMethodDetailsIdealGeneratedSepaDebitMandateProperty>;
  /** Last four characters of the IBAN. */
  iban_last4?: Maybe<Scalars['String']>;
  /**
   * Owner's verified full name. Values are verified or provided by iDEAL directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsIdealBankProperty {
  AbnAmro = 'abn_amro',
  AsnBank = 'asn_bank',
  Bunq = 'bunq',
  Handelsbanken = 'handelsbanken',
  Ing = 'ing',
  Knab = 'knab',
  Moneyou = 'moneyou',
  Rabobank = 'rabobank',
  Regiobank = 'regiobank',
  Revolut = 'revolut',
  SnsBank = 'sns_bank',
  TriodosBank = 'triodos_bank',
  VanLanschot = 'van_lanschot'
}

export enum Stripe_PaymentMethodDetailsIdealBicProperty {
  Abnanl2A = 'ABNANL2A',
  Asnbnl21 = 'ASNBNL21',
  Bunqnl2A = 'BUNQNL2A',
  Fvlbnl22 = 'FVLBNL22',
  Handnl2A = 'HANDNL2A',
  Ingbnl2A = 'INGBNL2A',
  Knabnl2H = 'KNABNL2H',
  Moyonl21 = 'MOYONL21',
  Rabonl2U = 'RABONL2U',
  Rbrbnl21 = 'RBRBNL21',
  Revolt21 = 'REVOLT21',
  Snsbnl2A = 'SNSBNL2A',
  Trionl2U = 'TRIONL2U'
}

export type Stripe_PaymentMethodDetailsIdealGeneratedSepaDebitProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_PaymentMethodDetailsIdealGeneratedSepaDebitMandateProperty = WrappedString | Stripe_Mandate;

export type Stripe_PaymentMethodDetailsInteracPresent = {
  __typename?: 'Stripe_PaymentMethodDetailsInteracPresent';
  /** Card brand. Can be `interac`, `mastercard` or `visa`. */
  brand?: Maybe<Scalars['String']>;
  /** The cardholder name as read from the card, in [ISO 7813](https://en.wikipedia.org/wiki/ISO/IEC_7813) format. May include alphanumeric characters, special characters and first/last name separator (`/`). In some cases, the cardholder name may not be available depending on how the issuer has configured the card. Cardholder name is typically not available on swipe or contactless payments, such as those made with Apple Pay and Google Pay. */
  cardholder_name?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country of the card. You could use this attribute to get a sense of the international breakdown of cards you've collected. */
  country?: Maybe<Scalars['String']>;
  /** Authorization response cryptogram. */
  emv_auth_data?: Maybe<Scalars['String']>;
  /** Two-digit number representing the card's expiration month. */
  exp_month?: Maybe<Scalars['Int']>;
  /** Four-digit number representing the card's expiration year. */
  exp_year?: Maybe<Scalars['Int']>;
  /**
   * Uniquely identifies this particular card number. You can use this attribute to check whether two customers who’ve signed up with you are using the same card number, for example. For payment methods that tokenize card information (Apple Pay, Google Pay), the tokenized number might be provided instead of the underlying card number.
   *
   * *Starting May 1, 2021, card fingerprint in India for Connect will change to allow two fingerprints for the same card --- one for India and one for the rest of the world.*
   */
  fingerprint?: Maybe<Scalars['String']>;
  /** Card funding type. Can be `credit`, `debit`, `prepaid`, or `unknown`. */
  funding?: Maybe<Scalars['String']>;
  /** ID of a card PaymentMethod generated from the card_present PaymentMethod that may be attached to a Customer for future transactions. Only present if it was possible to generate a card PaymentMethod. */
  generated_card?: Maybe<Scalars['String']>;
  /** The last four digits of the card. */
  last4?: Maybe<Scalars['String']>;
  /** Identifies which network this charge was processed on. Can be `amex`, `cartes_bancaires`, `diners`, `discover`, `interac`, `jcb`, `mastercard`, `unionpay`, `visa`, or `unknown`. */
  network?: Maybe<Scalars['String']>;
  /** EMV tag 5F2D. Preferred languages specified by the integrated circuit chip. */
  preferred_locales?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** How card details were read in this transaction. */
  read_method?: Maybe<Stripe_PaymentMethodDetailsInteracPresentReadMethodProperty>;
  receipt?: Maybe<Stripe_PaymentMethodDetailsInteracPresentReceipt>;
};

export enum Stripe_PaymentMethodDetailsInteracPresentReadMethodProperty {
  ContactEmv = 'contact_emv',
  ContactlessEmv = 'contactless_emv',
  ContactlessMagstripeMode = 'contactless_magstripe_mode',
  MagneticStripeFallback = 'magnetic_stripe_fallback',
  MagneticStripeTrack2 = 'magnetic_stripe_track2'
}

export type Stripe_PaymentMethodDetailsInteracPresentReceipt = {
  __typename?: 'Stripe_PaymentMethodDetailsInteracPresentReceipt';
  /** The type of account being debited or credited */
  account_type?: Maybe<Stripe_PaymentMethodDetailsInteracPresentReceiptAccountTypeProperty>;
  /** EMV tag 9F26, cryptogram generated by the integrated circuit chip. */
  application_cryptogram?: Maybe<Scalars['String']>;
  /** Mnenomic of the Application Identifier. */
  application_preferred_name?: Maybe<Scalars['String']>;
  /** Identifier for this transaction. */
  authorization_code?: Maybe<Scalars['String']>;
  /** EMV tag 8A. A code returned by the card issuer. */
  authorization_response_code?: Maybe<Scalars['String']>;
  /** How the cardholder verified ownership of the card. */
  cardholder_verification_method?: Maybe<Scalars['String']>;
  /** EMV tag 84. Similar to the application identifier stored on the integrated circuit chip. */
  dedicated_file_name?: Maybe<Scalars['String']>;
  /** The outcome of a series of EMV functions performed by the card reader. */
  terminal_verification_results?: Maybe<Scalars['String']>;
  /** An indication of various EMV functions performed during the transaction. */
  transaction_status_information?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsInteracPresentReceiptAccountTypeProperty {
  Checking = 'checking',
  Savings = 'savings',
  Unknown = 'unknown'
}

export type Stripe_PaymentMethodDetailsKlarna = {
  __typename?: 'Stripe_PaymentMethodDetailsKlarna';
  /**
   * The Klarna payment method used for this transaction.
   * Can be one of `pay_later`, `pay_now`, `pay_with_financing`, or `pay_in_installments`
   */
  payment_method_category?: Maybe<Scalars['String']>;
  /**
   * Preferred language of the Klarna authorization page that the customer is redirected to.
   * Can be one of `de-AT`, `en-AT`, `nl-BE`, `fr-BE`, `en-BE`, `de-DE`, `en-DE`, `da-DK`, `en-DK`, `es-ES`, `en-ES`, `fi-FI`, `sv-FI`, `en-FI`, `en-GB`, `en-IE`, `it-IT`, `en-IT`, `nl-NL`, `en-NL`, `nb-NO`, `en-NO`, `sv-SE`, `en-SE`, `en-US`, `es-US`, `fr-FR`, or `en-FR`
   */
  preferred_locale?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsKonbini = {
  __typename?: 'Stripe_PaymentMethodDetailsKonbini';
  store?: Maybe<Stripe_PaymentMethodDetailsKonbiniStore>;
};

export type Stripe_PaymentMethodDetailsKonbiniStore = {
  __typename?: 'Stripe_PaymentMethodDetailsKonbiniStore';
  /** The name of the convenience store chain where the payment was completed. */
  chain?: Maybe<Stripe_PaymentMethodDetailsKonbiniStoreChainProperty>;
};

export enum Stripe_PaymentMethodDetailsKonbiniStoreChainProperty {
  Familymart = 'familymart',
  Lawson = 'lawson',
  Ministop = 'ministop',
  Seicomart = 'seicomart'
}

export type Stripe_PaymentMethodDetailsMultibanco = {
  __typename?: 'Stripe_PaymentMethodDetailsMultibanco';
  /** Entity number associated with this Multibanco payment. */
  entity?: Maybe<Scalars['String']>;
  /** Reference number associated with this Multibanco payment. */
  reference?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsOxxo = {
  __typename?: 'Stripe_PaymentMethodDetailsOxxo';
  /** OXXO reference number */
  number?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsP24 = {
  __typename?: 'Stripe_PaymentMethodDetailsP24';
  /** The customer's bank. Can be one of `ing`, `citi_handlowy`, `tmobile_usbugi_bankowe`, `plus_bank`, `etransfer_pocztowy24`, `banki_spbdzielcze`, `bank_nowy_bfg_sa`, `getin_bank`, `blik`, `noble_pay`, `ideabank`, `envelobank`, `santander_przelew24`, `nest_przelew`, `mbank_mtransfer`, `inteligo`, `pbac_z_ipko`, `bnp_paribas`, `credit_agricole`, `toyota_bank`, `bank_pekao_sa`, `volkswagen_bank`, `bank_millennium`, `alior_bank`, or `boz`. */
  bank?: Maybe<Stripe_PaymentMethodDetailsP24BankProperty>;
  /** Unique reference for this Przelewy24 payment. */
  reference?: Maybe<Scalars['String']>;
  /**
   * Owner's verified full name. Values are verified or provided by Przelewy24 directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   * Przelewy24 rarely provides this information so the attribute is usually empty.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsP24BankProperty {
  AliorBank = 'alior_bank',
  BankMillennium = 'bank_millennium',
  BankNowyBfgSa = 'bank_nowy_bfg_sa',
  BankPekaoSa = 'bank_pekao_sa',
  BankiSpbdzielcze = 'banki_spbdzielcze',
  Blik = 'blik',
  BnpParibas = 'bnp_paribas',
  Boz = 'boz',
  CitiHandlowy = 'citi_handlowy',
  CreditAgricole = 'credit_agricole',
  Envelobank = 'envelobank',
  EtransferPocztowy24 = 'etransfer_pocztowy24',
  GetinBank = 'getin_bank',
  Ideabank = 'ideabank',
  Ing = 'ing',
  Inteligo = 'inteligo',
  MbankMtransfer = 'mbank_mtransfer',
  NestPrzelew = 'nest_przelew',
  NoblePay = 'noble_pay',
  PbacZIpko = 'pbac_z_ipko',
  PlusBank = 'plus_bank',
  SantanderPrzelew24 = 'santander_przelew24',
  TmobileUsbugiBankowe = 'tmobile_usbugi_bankowe',
  ToyotaBank = 'toyota_bank',
  VolkswagenBank = 'volkswagen_bank'
}

export type Stripe_PaymentMethodDetailsPaynow = {
  __typename?: 'Stripe_PaymentMethodDetailsPaynow';
  /** Reference number associated with this PayNow payment */
  reference?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsSepaDebit = {
  __typename?: 'Stripe_PaymentMethodDetailsSepaDebit';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Branch code of bank associated with the bank account. */
  branch_code?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four characters of the IBAN. */
  last4?: Maybe<Scalars['String']>;
  /** ID of the mandate used to make this payment. */
  mandate?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsSofort = {
  __typename?: 'Stripe_PaymentMethodDetailsSofort';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Bank Identifier Code of the bank associated with the bank account. */
  bic?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Scalars['String']>;
  generated_sepa_debit?: Maybe<Stripe_PaymentMethodDetailsSofortGeneratedSepaDebitProperty>;
  generated_sepa_debit_mandate?: Maybe<Stripe_PaymentMethodDetailsSofortGeneratedSepaDebitMandateProperty>;
  /** Last four characters of the IBAN. */
  iban_last4?: Maybe<Scalars['String']>;
  /**
   * Preferred language of the SOFORT authorization page that the customer is redirected to.
   * Can be one of `de`, `en`, `es`, `fr`, `it`, `nl`, or `pl`
   */
  preferred_language?: Maybe<Stripe_PaymentMethodDetailsSofortPreferredLanguageProperty>;
  /**
   * Owner's verified full name. Values are verified or provided by SOFORT directly
   * (if supported) at the time of authorization or settlement. They cannot be set or mutated.
   */
  verified_name?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentMethodDetailsSofortGeneratedSepaDebitProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_PaymentMethodDetailsSofortGeneratedSepaDebitMandateProperty = WrappedString | Stripe_Mandate;

export enum Stripe_PaymentMethodDetailsSofortPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  It = 'it',
  Nl = 'nl',
  Pl = 'pl'
}

export type Stripe_PaymentMethodDetailsStripeAccount = {
  __typename?: 'Stripe_PaymentMethodDetailsStripeAccount';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodDetailsUsBankAccount = {
  __typename?: 'Stripe_PaymentMethodDetailsUsBankAccount';
  /** Account holder type: individual or company. */
  account_holder_type?: Maybe<Stripe_PaymentMethodDetailsUsBankAccountAccountHolderTypeProperty>;
  /** Account type: checkings or savings. Defaults to checking if omitted. */
  account_type?: Maybe<Stripe_PaymentMethodDetailsUsBankAccountAccountTypeProperty>;
  /** Name of the bank associated with the bank account. */
  bank_name?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** Routing number of the bank account. */
  routing_number?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodDetailsUsBankAccountAccountHolderTypeProperty {
  Company = 'company',
  Individual = 'individual'
}

export enum Stripe_PaymentMethodDetailsUsBankAccountAccountTypeProperty {
  Checking = 'checking',
  Savings = 'savings'
}

export type Stripe_PaymentMethodDetailsWechat = {
  __typename?: 'Stripe_PaymentMethodDetailsWechat';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodDetailsWechatPay = {
  __typename?: 'Stripe_PaymentMethodDetailsWechatPay';
  /** Uniquely identifies this particular WeChat Pay account. You can use this attribute to check whether two WeChat accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Transaction ID of this particular WeChat Pay transaction. */
  transaction_id?: Maybe<Scalars['String']>;
};

/** A list of refunds that have been applied to the charge. */
export type Stripe_ChargeRefundsProperty = {
  __typename?: 'Stripe_ChargeRefundsProperty';
  /** Details about each object. */
  data: Array<Stripe_Refund>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_ChargeRefundsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_ChargeRefundsObjectProperty {
  List = 'list'
}

export type Stripe_ChargeReviewProperty = WrappedString | Stripe_Review;

export type Stripe_Review = {
  __typename?: 'Stripe_Review';
  /** The ZIP or postal code of the card used, if applicable. */
  billing_zip?: Maybe<Scalars['String']>;
  charge?: Maybe<Stripe_ReviewChargeProperty>;
  /** The reason the review was closed, or null if it has not yet been closed. One of `approved`, `refunded`, `refunded_as_fraud`, `disputed`, or `redacted`. */
  closed_reason?: Maybe<Stripe_ReviewClosedReasonProperty>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The IP address where the payment originated. */
  ip_address?: Maybe<Scalars['String']>;
  ip_address_location?: Maybe<Stripe_RadarReviewResourceLocation>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ReviewObjectProperty>;
  /** If `true`, the review needs action. */
  open?: Maybe<Scalars['Boolean']>;
  /** The reason the review was opened. One of `rule` or `manual`. */
  opened_reason?: Maybe<Stripe_ReviewOpenedReasonProperty>;
  payment_intent?: Maybe<Stripe_ReviewPaymentIntentProperty>;
  /** The reason the review is currently open or closed. One of `rule`, `manual`, `approved`, `refunded`, `refunded_as_fraud`, `disputed`, or `redacted`. */
  reason?: Maybe<Scalars['String']>;
  session?: Maybe<Stripe_RadarReviewResourceSession>;
};

export type Stripe_ReviewChargeProperty = WrappedString | Stripe_Charge;

export enum Stripe_ReviewClosedReasonProperty {
  Approved = 'approved',
  Disputed = 'disputed',
  Redacted = 'redacted',
  Refunded = 'refunded',
  RefundedAsFraud = 'refunded_as_fraud'
}

export type Stripe_RadarReviewResourceLocation = {
  __typename?: 'Stripe_RadarReviewResourceLocation';
  /** The city where the payment originated. */
  city?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country where the payment originated. */
  country?: Maybe<Scalars['String']>;
  /** The geographic latitude where the payment originated. */
  latitude?: Maybe<Scalars['Float']>;
  /** The geographic longitude where the payment originated. */
  longitude?: Maybe<Scalars['Float']>;
  /** The state/county/province/region where the payment originated. */
  region?: Maybe<Scalars['String']>;
};

export enum Stripe_ReviewObjectProperty {
  Review = 'review'
}

export enum Stripe_ReviewOpenedReasonProperty {
  Manual = 'manual',
  Rule = 'rule'
}

export type Stripe_ReviewPaymentIntentProperty = WrappedString | Stripe_PaymentIntent;

export type Stripe_RadarReviewResourceSession = {
  __typename?: 'Stripe_RadarReviewResourceSession';
  /** The browser used in this browser session (e.g., `Chrome`). */
  browser?: Maybe<Scalars['String']>;
  /** Information about the device used for the browser session (e.g., `Samsung SM-G930T`). */
  device?: Maybe<Scalars['String']>;
  /** The platform for the browser session (e.g., `Macintosh`). */
  platform?: Maybe<Scalars['String']>;
  /** The version for the browser session (e.g., `61.0.3163.100`). */
  version?: Maybe<Scalars['String']>;
};

export type Stripe_ChargeSourceTransferProperty = WrappedString | Stripe_Transfer;

export enum Stripe_ChargeStatusProperty {
  Failed = 'failed',
  Pending = 'pending',
  Succeeded = 'succeeded'
}

export type Stripe_ChargeTransferProperty = WrappedString | Stripe_Transfer;

export type Stripe_ChargeTransferData = {
  __typename?: 'Stripe_ChargeTransferData';
  /** The amount transferred to the destination account, if specified. By default, the entire charge amount is transferred to the destination account. */
  amount?: Maybe<Scalars['Int']>;
  destination?: Maybe<Stripe_ChargeTransferDataDestinationProperty>;
};

export type Stripe_ChargeTransferDataDestinationProperty = WrappedString | Stripe_Account;

export enum Stripe_PaymentIntentChargesObjectProperty {
  List = 'list'
}

export enum Stripe_PaymentIntentConfirmationMethodProperty {
  Automatic = 'automatic',
  Manual = 'manual'
}

export type Stripe_PaymentIntentInvoiceProperty = WrappedString | Stripe_Invoice;

export type Stripe_PaymentIntentNextAction = {
  __typename?: 'Stripe_PaymentIntentNextAction';
  alipay_handle_redirect?: Maybe<Stripe_PaymentIntentNextActionAlipayHandleRedirect>;
  boleto_display_details?: Maybe<Stripe_PaymentIntentNextActionBoleto>;
  card_await_notification?: Maybe<Stripe_PaymentIntentNextActionCardAwaitNotification>;
  display_bank_transfer_instructions?: Maybe<Stripe_PaymentIntentNextActionDisplayBankTransferInstructions>;
  konbini_display_details?: Maybe<Stripe_PaymentIntentNextActionKonbini>;
  oxxo_display_details?: Maybe<Stripe_PaymentIntentNextActionDisplayOxxoDetails>;
  paynow_display_qr_code?: Maybe<Stripe_PaymentIntentNextActionPaynowDisplayQrCode>;
  redirect_to_url?: Maybe<Stripe_PaymentIntentNextActionRedirectToUrl>;
  /** Type of the next action to perform, one of `redirect_to_url`, `use_stripe_sdk`, `alipay_handle_redirect`, `oxxo_display_details`, or `verify_with_microdeposits`. */
  type?: Maybe<Scalars['String']>;
  /** When confirming a PaymentIntent with Stripe.js, Stripe.js depends on the contents of this dictionary to invoke authentication flows. The shape of the contents is subject to change and is only intended to be used by Stripe.js. */
  use_stripe_sdk?: Maybe<Scalars['JSONObject']>;
  verify_with_microdeposits?: Maybe<Stripe_PaymentIntentNextActionVerifyWithMicrodeposits>;
  wechat_pay_display_qr_code?: Maybe<Stripe_PaymentIntentNextActionWechatPayDisplayQrCode>;
  wechat_pay_redirect_to_android_app?: Maybe<Stripe_PaymentIntentNextActionWechatPayRedirectToAndroidApp>;
  wechat_pay_redirect_to_ios_app?: Maybe<Stripe_PaymentIntentNextActionWechatPayRedirectToIosApp>;
};

export type Stripe_PaymentIntentNextActionAlipayHandleRedirect = {
  __typename?: 'Stripe_PaymentIntentNextActionAlipayHandleRedirect';
  /** The native data to be used with Alipay SDK you must redirect your customer to in order to authenticate the payment in an Android App. */
  native_data?: Maybe<Scalars['String']>;
  /** The native URL you must redirect your customer to in order to authenticate the payment in an iOS App. */
  native_url?: Maybe<Scalars['String']>;
  /** If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion. */
  return_url?: Maybe<Scalars['String']>;
  /** The URL you must redirect your customer to in order to authenticate the payment. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionBoleto = {
  __typename?: 'Stripe_PaymentIntentNextActionBoleto';
  /** The timestamp after which the boleto expires. */
  expires_at?: Maybe<Scalars['Int']>;
  /** The URL to the hosted boleto voucher page, which allows customers to view the boleto voucher. */
  hosted_voucher_url?: Maybe<Scalars['String']>;
  /** The boleto number. */
  number?: Maybe<Scalars['String']>;
  /** The URL to the downloadable boleto voucher PDF. */
  pdf?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionCardAwaitNotification = {
  __typename?: 'Stripe_PaymentIntentNextActionCardAwaitNotification';
  /** The time that payment will be attempted. If customer approval is required, they need to provide approval before this time. */
  charge_attempt_at?: Maybe<Scalars['Int']>;
  /** For payments greater than INR 5000, the customer must provide explicit approval of the payment with their bank. For payments of lower amount, no customer action is required. */
  customer_approval_required?: Maybe<Scalars['Boolean']>;
};

export type Stripe_PaymentIntentNextActionDisplayBankTransferInstructions = {
  __typename?: 'Stripe_PaymentIntentNextActionDisplayBankTransferInstructions';
  /** The remaining amount that needs to be transferred to complete the payment. */
  amount_remaining?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  /** A list of financial addresses that can be used to fund the customer balance */
  financial_addresses?: Maybe<Array<Maybe<Stripe_FundingInstructionsBankTransferFinancialAddress>>>;
  /** A string identifying this payment. Instruct your customer to include this code in the reference or memo field of their bank transfer. */
  reference?: Maybe<Scalars['String']>;
  /** Type of bank transfer */
  type?: Maybe<Stripe_PaymentIntentNextActionDisplayBankTransferInstructionsTypeProperty>;
};

export type Stripe_FundingInstructionsBankTransferFinancialAddress = {
  __typename?: 'Stripe_FundingInstructionsBankTransferFinancialAddress';
  /** The payment networks supported by this FinancialAddress */
  supported_networks?: Maybe<Array<Maybe<Stripe_FundingInstructionsBankTransferFinancialAddressSupportedNetworksProperty>>>;
  /** The type of financial address */
  type?: Maybe<Stripe_FundingInstructionsBankTransferFinancialAddressTypeProperty>;
  zengin?: Maybe<Stripe_FundingInstructionsBankTransferZenginRecord>;
};

export enum Stripe_FundingInstructionsBankTransferFinancialAddressSupportedNetworksProperty {
  Sepa = 'sepa',
  Zengin = 'zengin'
}

export enum Stripe_FundingInstructionsBankTransferFinancialAddressTypeProperty {
  Iban = 'iban',
  Zengin = 'zengin'
}

export type Stripe_FundingInstructionsBankTransferZenginRecord = {
  __typename?: 'Stripe_FundingInstructionsBankTransferZenginRecord';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_PaymentIntentNextActionDisplayBankTransferInstructionsTypeProperty {
  JpBankTransfer = 'jp_bank_transfer'
}

export type Stripe_PaymentIntentNextActionKonbini = {
  __typename?: 'Stripe_PaymentIntentNextActionKonbini';
  /** The timestamp at which the pending Konbini payment expires. */
  expires_at?: Maybe<Scalars['Int']>;
  /** The URL for the Konbini payment instructions page, which allows customers to view and print a Konbini voucher. */
  hosted_voucher_url?: Maybe<Scalars['String']>;
  stores?: Maybe<Stripe_PaymentIntentNextActionKonbiniStores>;
};

export type Stripe_PaymentIntentNextActionKonbiniStores = {
  __typename?: 'Stripe_PaymentIntentNextActionKonbiniStores';
  familymart?: Maybe<Stripe_PaymentIntentNextActionKonbiniFamilymart>;
  lawson?: Maybe<Stripe_PaymentIntentNextActionKonbiniLawson>;
  ministop?: Maybe<Stripe_PaymentIntentNextActionKonbiniMinistop>;
  seicomart?: Maybe<Stripe_PaymentIntentNextActionKonbiniSeicomart>;
};

export type Stripe_PaymentIntentNextActionKonbiniFamilymart = {
  __typename?: 'Stripe_PaymentIntentNextActionKonbiniFamilymart';
  /** The confirmation number. */
  confirmation_number?: Maybe<Scalars['String']>;
  /** The payment code. */
  payment_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionKonbiniLawson = {
  __typename?: 'Stripe_PaymentIntentNextActionKonbiniLawson';
  /** The confirmation number. */
  confirmation_number?: Maybe<Scalars['String']>;
  /** The payment code. */
  payment_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionKonbiniMinistop = {
  __typename?: 'Stripe_PaymentIntentNextActionKonbiniMinistop';
  /** The confirmation number. */
  confirmation_number?: Maybe<Scalars['String']>;
  /** The payment code. */
  payment_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionKonbiniSeicomart = {
  __typename?: 'Stripe_PaymentIntentNextActionKonbiniSeicomart';
  /** The confirmation number. */
  confirmation_number?: Maybe<Scalars['String']>;
  /** The payment code. */
  payment_code?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionDisplayOxxoDetails = {
  __typename?: 'Stripe_PaymentIntentNextActionDisplayOxxoDetails';
  /** The timestamp after which the OXXO voucher expires. */
  expires_after?: Maybe<Scalars['Int']>;
  /** The URL for the hosted OXXO voucher page, which allows customers to view and print an OXXO voucher. */
  hosted_voucher_url?: Maybe<Scalars['String']>;
  /** OXXO reference number. */
  number?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionPaynowDisplayQrCode = {
  __typename?: 'Stripe_PaymentIntentNextActionPaynowDisplayQrCode';
  /** The raw data string used to generate QR code, it should be used together with QR code library. */
  data?: Maybe<Scalars['String']>;
  /** The image_url_png string used to render QR code */
  image_url_png?: Maybe<Scalars['String']>;
  /** The image_url_svg string used to render QR code */
  image_url_svg?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionRedirectToUrl = {
  __typename?: 'Stripe_PaymentIntentNextActionRedirectToUrl';
  /** If the customer does not exit their browser while authenticating, they will be redirected to this specified URL after completion. */
  return_url?: Maybe<Scalars['String']>;
  /** The URL you must redirect your customer to in order to authenticate the payment. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionVerifyWithMicrodeposits = {
  __typename?: 'Stripe_PaymentIntentNextActionVerifyWithMicrodeposits';
  /** The timestamp when the microdeposits are expected to land. */
  arrival_date?: Maybe<Scalars['Int']>;
  /** The URL for the hosted verification page, which allows customers to verify their bank account. */
  hosted_verification_url?: Maybe<Scalars['String']>;
  /** The type of the microdeposit sent to the customer. Used to distinguish between different verification methods. */
  microdeposit_type?: Maybe<Stripe_PaymentIntentNextActionVerifyWithMicrodepositsMicrodepositTypeProperty>;
};

export enum Stripe_PaymentIntentNextActionVerifyWithMicrodepositsMicrodepositTypeProperty {
  Amounts = 'amounts',
  DescriptorCode = 'descriptor_code'
}

export type Stripe_PaymentIntentNextActionWechatPayDisplayQrCode = {
  __typename?: 'Stripe_PaymentIntentNextActionWechatPayDisplayQrCode';
  /** The data being used to generate QR code */
  data?: Maybe<Scalars['String']>;
  /** The base64 image data for a pre-generated QR code */
  image_data_url?: Maybe<Scalars['String']>;
  /** The image_url_png string used to render QR code */
  image_url_png?: Maybe<Scalars['String']>;
  /** The image_url_svg string used to render QR code */
  image_url_svg?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionWechatPayRedirectToAndroidApp = {
  __typename?: 'Stripe_PaymentIntentNextActionWechatPayRedirectToAndroidApp';
  /** app_id is the APP ID registered on WeChat open platform */
  app_id?: Maybe<Scalars['String']>;
  /** nonce_str is a random string */
  nonce_str?: Maybe<Scalars['String']>;
  /** package is static value */
  package?: Maybe<Scalars['String']>;
  /** an unique merchant ID assigned by WeChat Pay */
  partner_id?: Maybe<Scalars['String']>;
  /** an unique trading ID assigned by WeChat Pay */
  prepay_id?: Maybe<Scalars['String']>;
  /** A signature */
  sign?: Maybe<Scalars['String']>;
  /** Specifies the current time in epoch format */
  timestamp?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentNextActionWechatPayRedirectToIosApp = {
  __typename?: 'Stripe_PaymentIntentNextActionWechatPayRedirectToIosApp';
  /** An universal link that redirect to WeChat Pay app */
  native_url?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentIntentObjectProperty {
  PaymentIntent = 'payment_intent'
}

export type Stripe_PaymentIntentOnBehalfOfProperty = WrappedString | Stripe_Account;

export type Stripe_PaymentIntentPaymentMethodProperty = WrappedString | Stripe_PaymentMethod;

export type Stripe_PaymentIntentPaymentMethodOptions = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptions';
  acss_debit?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAcssDebitProperty>;
  afterpay_clearpay?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAfterpayClearpayProperty>;
  alipay?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAlipayProperty>;
  au_becs_debit?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebitProperty>;
  bacs_debit?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsBacsDebitProperty>;
  bancontact?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsBancontactProperty>;
  boleto?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsBoletoProperty>;
  card?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCardProperty>;
  card_present?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCardPresentProperty>;
  customer_balance?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCustomerBalanceProperty>;
  eps?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsEpsProperty>;
  fpx?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsFpxProperty>;
  giropay?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsGiropayProperty>;
  grabpay?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsGrabpayProperty>;
  ideal?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsIdealProperty>;
  interac_present?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsInteracPresentProperty>;
  klarna?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsKlarnaProperty>;
  konbini?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsKonbiniProperty>;
  oxxo?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsOxxoProperty>;
  p24?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsP24Property>;
  paynow?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsPaynowProperty>;
  sepa_debit?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsSepaDebitProperty>;
  sofort?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsSofortProperty>;
  us_bank_account?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsUsBankAccountProperty>;
  wechat_pay?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsWechatPayProperty>;
};

export type Stripe_PaymentIntentPaymentMethodOptionsAcssDebitProperty = Stripe_PaymentIntentPaymentMethodOptionsAcssDebit | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentIntentPaymentMethodOptionsAcssDebit = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsAcssDebit';
  mandate_options?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAcssDebitSetupFutureUsageProperty>;
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAcssDebitVerificationMethodProperty>;
};

export type Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebit';
  /** A URL for custom mandate text */
  custom_mandate_url?: Maybe<Scalars['String']>;
  /** Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'. */
  interval_description?: Maybe<Scalars['String']>;
  /** Payment schedule for the mandate. */
  payment_schedule?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitPaymentScheduleProperty>;
  /** Transaction type of the mandate. */
  transaction_type?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitTransactionTypeProperty>;
};

export enum Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitPaymentScheduleProperty {
  Combined = 'combined',
  Interval = 'interval',
  Sporadic = 'sporadic'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsAcssDebitTransactionTypeProperty {
  Business = 'business',
  Personal = 'personal'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsAcssDebitSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsAcssDebitVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient = {
  __typename?: 'Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient';
  /** Controls when the funds will be captured from the customer's account. */
  capture_method?: Maybe<Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClientCaptureMethodProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClientSetupFutureUsageProperty>;
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClientVerificationMethodProperty>;
};

export enum Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClientCaptureMethodProperty {
  Manual = 'manual'
}

export enum Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClientSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export enum Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClientVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_PaymentIntentPaymentMethodOptionsAfterpayClearpayProperty = Stripe_PaymentMethodOptionsAfterpayClearpay | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsAfterpayClearpay = {
  __typename?: 'Stripe_PaymentMethodOptionsAfterpayClearpay';
  /** Controls when the funds will be captured from the customer's account. */
  capture_method?: Maybe<Stripe_PaymentMethodOptionsAfterpayClearpayCaptureMethodProperty>;
  /**
   * Order identifier shown to the customer in Afterpay’s online portal. We recommend using a value that helps you answer any questions a customer might have about
   * the payment. The identifier is limited to 128 characters and may contain only letters, digits, underscores, backslashes and dashes.
   */
  reference?: Maybe<Scalars['String']>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsAfterpayClearpaySetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsAfterpayClearpayCaptureMethodProperty {
  Manual = 'manual'
}

export enum Stripe_PaymentMethodOptionsAfterpayClearpaySetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsAlipayProperty = Stripe_PaymentMethodOptionsAlipay | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsAlipay = {
  __typename?: 'Stripe_PaymentMethodOptionsAlipay';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsAlipaySetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsAlipaySetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebitProperty = Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebit | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebit = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebit';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebitSetupFutureUsageProperty>;
};

export enum Stripe_PaymentIntentPaymentMethodOptionsAuBecsDebitSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsBacsDebitProperty = Stripe_PaymentMethodOptionsBacsDebit | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsBacsDebit = {
  __typename?: 'Stripe_PaymentMethodOptionsBacsDebit';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsBacsDebitSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsBacsDebitSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsBancontactProperty = Stripe_PaymentMethodOptionsBancontact | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsBancontact = {
  __typename?: 'Stripe_PaymentMethodOptionsBancontact';
  /** Preferred language of the Bancontact authorization page that the customer is redirected to. */
  preferred_language?: Maybe<Stripe_PaymentMethodOptionsBancontactPreferredLanguageProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsBancontactSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsBancontactPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Fr = 'fr',
  Nl = 'nl'
}

export enum Stripe_PaymentMethodOptionsBancontactSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsBoletoProperty = Stripe_PaymentMethodOptionsBoleto | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsBoleto = {
  __typename?: 'Stripe_PaymentMethodOptionsBoleto';
  /** The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time. */
  expires_after_days?: Maybe<Scalars['Int']>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsBoletoSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsBoletoSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsCardProperty = Stripe_PaymentIntentPaymentMethodOptionsCard | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentIntentPaymentMethodOptionsCard = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsCard';
  /** Controls when the funds will be captured from the customer's account. */
  capture_method?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCardCaptureMethodProperty>;
  installments?: Maybe<Stripe_PaymentMethodOptionsCardInstallments>;
  mandate_options?: Maybe<Stripe_PaymentMethodOptionsCardMandateOptions>;
  /** Selected network to process this payment intent on. Depends on the available networks of the card attached to the payment intent. Can be only set confirm-time. */
  network?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCardNetworkProperty>;
  /** We strongly recommend that you rely on our SCA Engine to automatically prompt your customers for authentication based on risk level and [other requirements](https://stripe.com/docs/strong-customer-authentication). However, if you wish to request 3D Secure based on logic from your own fraud engine, provide this option. Permitted values include: `automatic` or `any`. If not provided, defaults to `automatic`. Read our guide on [manually requesting 3D Secure](https://stripe.com/docs/payments/3d-secure#manual-three-ds) for more information on how this configuration interacts with Radar and our SCA Engine. */
  request_three_d_secure?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCardRequestThreeDSecureProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsCardSetupFutureUsageProperty>;
};

export enum Stripe_PaymentIntentPaymentMethodOptionsCardCaptureMethodProperty {
  Manual = 'manual'
}

export type Stripe_PaymentMethodOptionsCardInstallments = {
  __typename?: 'Stripe_PaymentMethodOptionsCardInstallments';
  /** Installment plans that may be selected for this PaymentIntent. */
  available_plans?: Maybe<Array<Maybe<Stripe_PaymentMethodDetailsCardInstallmentsPlan>>>;
  /** Whether Installments are enabled for this PaymentIntent. */
  enabled?: Maybe<Scalars['Boolean']>;
  plan?: Maybe<Stripe_PaymentMethodDetailsCardInstallmentsPlan>;
};

export type Stripe_PaymentMethodOptionsCardMandateOptions = {
  __typename?: 'Stripe_PaymentMethodOptionsCardMandateOptions';
  /** Amount to be charged for future payments. */
  amount?: Maybe<Scalars['Int']>;
  /** One of `fixed` or `maximum`. If `fixed`, the `amount` param refers to the exact amount to be charged in future payments. If `maximum`, the amount charged can be up to the value passed for the `amount` param. */
  amount_type?: Maybe<Stripe_PaymentMethodOptionsCardMandateOptionsAmountTypeProperty>;
  /** A description of the mandate or subscription that is meant to be displayed to the customer. */
  description?: Maybe<Scalars['String']>;
  /** End date of the mandate or subscription. If not provided, the mandate will be active until canceled. If provided, end date should be after start date. */
  end_date?: Maybe<Scalars['Int']>;
  /** Specifies payment frequency. One of `day`, `week`, `month`, `year`, or `sporadic`. */
  interval?: Maybe<Stripe_PaymentMethodOptionsCardMandateOptionsIntervalProperty>;
  /** The number of intervals between payments. For example, `interval=month` and `interval_count=3` indicates one payment every three months. Maximum of one year interval allowed (1 year, 12 months, or 52 weeks). This parameter is optional when `interval=sporadic`. */
  interval_count?: Maybe<Scalars['Int']>;
  /** Unique identifier for the mandate or subscription. */
  reference?: Maybe<Scalars['String']>;
  /** Start date of the mandate or subscription. Start date should not be lesser than yesterday. */
  start_date?: Maybe<Scalars['Int']>;
  /** Specifies the type of mandates supported. Possible values are `india`. */
  supported_types?: Maybe<Array<Maybe<Stripe_PaymentMethodOptionsCardMandateOptionsSupportedTypesProperty>>>;
};

export enum Stripe_PaymentMethodOptionsCardMandateOptionsAmountTypeProperty {
  Fixed = 'fixed',
  Maximum = 'maximum'
}

export enum Stripe_PaymentMethodOptionsCardMandateOptionsIntervalProperty {
  Day = 'day',
  Month = 'month',
  Sporadic = 'sporadic',
  Week = 'week',
  Year = 'year'
}

export enum Stripe_PaymentMethodOptionsCardMandateOptionsSupportedTypesProperty {
  India = 'india'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsCardNetworkProperty {
  Amex = 'amex',
  CartesBancaires = 'cartes_bancaires',
  Diners = 'diners',
  Discover = 'discover',
  Interac = 'interac',
  Jcb = 'jcb',
  Mastercard = 'mastercard',
  Unionpay = 'unionpay',
  Unknown = 'unknown',
  Visa = 'visa'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsCardRequestThreeDSecureProperty {
  Any = 'any',
  Automatic = 'automatic',
  ChallengeOnly = 'challenge_only'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsCardSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsCardPresentProperty = Stripe_PaymentMethodOptionsCardPresent | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsCardPresent = {
  __typename?: 'Stripe_PaymentMethodOptionsCardPresent';
  /** Request ability to capture this payment beyond the standard [authorization validity window](https://stripe.com/docs/terminal/features/extended-authorizations#authorization-validity) */
  request_extended_authorization?: Maybe<Scalars['Boolean']>;
  /** Request ability to [increment](https://stripe.com/docs/terminal/features/incremental-authorizations) this PaymentIntent if the combination of MCC and card brand is eligible. Check [incremental_authorization_supported](https://stripe.com/docs/api/charges/object#charge_object-payment_method_details-card_present-incremental_authorization_supported) in the [Confirm](https://stripe.com/docs/api/payment_intents/confirm) response to verify support. */
  request_incremental_authorization_support?: Maybe<Scalars['Boolean']>;
};

export type Stripe_PaymentIntentPaymentMethodOptionsCustomerBalanceProperty = Stripe_PaymentMethodOptionsCustomerBalance | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsCustomerBalance = {
  __typename?: 'Stripe_PaymentMethodOptionsCustomerBalance';
  bank_transfer?: Maybe<Stripe_PaymentMethodOptionsCustomerBalanceBankTransfer>;
  /** The funding method type to be used when there are not enough funds in the customer balance. Permitted values include: `bank_transfer`. */
  funding_type?: Maybe<Stripe_PaymentMethodOptionsCustomerBalanceFundingTypeProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsCustomerBalanceSetupFutureUsageProperty>;
};

export type Stripe_PaymentMethodOptionsCustomerBalanceBankTransfer = {
  __typename?: 'Stripe_PaymentMethodOptionsCustomerBalanceBankTransfer';
  /**
   * List of address types that should be returned in the financial_addresses response. If not specified, all valid types will be returned.
   *
   * Permitted values include: `zengin`.
   */
  requested_address_types?: Maybe<Array<Maybe<Stripe_PaymentMethodOptionsCustomerBalanceBankTransferRequestedAddressTypesProperty>>>;
  /** The bank transfer type that this PaymentIntent is allowed to use for funding. Permitted values include: `us_bank_account`, `eu_bank_account`, `id_bank_account`, `gb_bank_account`, `jp_bank_account`, `mx_bank_account`, `eu_bank_transfer`, `gb_bank_transfer`, `id_bank_transfer`, `jp_bank_transfer`, `mx_bank_transfer`, or `us_bank_transfer`. */
  type?: Maybe<Stripe_PaymentMethodOptionsCustomerBalanceBankTransferTypeProperty>;
};

export enum Stripe_PaymentMethodOptionsCustomerBalanceBankTransferRequestedAddressTypesProperty {
  Zengin = 'zengin'
}

export enum Stripe_PaymentMethodOptionsCustomerBalanceBankTransferTypeProperty {
  EuBankAccount = 'eu_bank_account',
  EuBankTransfer = 'eu_bank_transfer',
  GbBankAccount = 'gb_bank_account',
  GbBankTransfer = 'gb_bank_transfer',
  IdBankAccount = 'id_bank_account',
  IdBankTransfer = 'id_bank_transfer',
  JpBankAccount = 'jp_bank_account',
  JpBankTransfer = 'jp_bank_transfer',
  MxBankAccount = 'mx_bank_account',
  MxBankTransfer = 'mx_bank_transfer',
  UsBankAccount = 'us_bank_account',
  UsBankTransfer = 'us_bank_transfer'
}

export enum Stripe_PaymentMethodOptionsCustomerBalanceFundingTypeProperty {
  BankTransfer = 'bank_transfer'
}

export enum Stripe_PaymentMethodOptionsCustomerBalanceSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsEpsProperty = Stripe_PaymentIntentPaymentMethodOptionsEps | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentIntentPaymentMethodOptionsEps = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsEps';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsEpsSetupFutureUsageProperty>;
};

export enum Stripe_PaymentIntentPaymentMethodOptionsEpsSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsFpxProperty = Stripe_PaymentMethodOptionsFpx | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsFpx = {
  __typename?: 'Stripe_PaymentMethodOptionsFpx';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsFpxSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsFpxSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsGiropayProperty = Stripe_PaymentMethodOptionsGiropay | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsGiropay = {
  __typename?: 'Stripe_PaymentMethodOptionsGiropay';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsGiropaySetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsGiropaySetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsGrabpayProperty = Stripe_PaymentMethodOptionsGrabpay | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsGrabpay = {
  __typename?: 'Stripe_PaymentMethodOptionsGrabpay';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsGrabpaySetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsGrabpaySetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsIdealProperty = Stripe_PaymentMethodOptionsIdeal | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsIdeal = {
  __typename?: 'Stripe_PaymentMethodOptionsIdeal';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsIdealSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsIdealSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsInteracPresentProperty = Stripe_PaymentMethodOptionsInteracPresent | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsInteracPresent = {
  __typename?: 'Stripe_PaymentMethodOptionsInteracPresent';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentIntentPaymentMethodOptionsKlarnaProperty = Stripe_PaymentMethodOptionsKlarna | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsKlarna = {
  __typename?: 'Stripe_PaymentMethodOptionsKlarna';
  /** Controls when the funds will be captured from the customer's account. */
  capture_method?: Maybe<Stripe_PaymentMethodOptionsKlarnaCaptureMethodProperty>;
  /** Preferred locale of the Klarna checkout page that the customer is redirected to. */
  preferred_locale?: Maybe<Scalars['String']>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsKlarnaSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsKlarnaCaptureMethodProperty {
  Manual = 'manual'
}

export enum Stripe_PaymentMethodOptionsKlarnaSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsKonbiniProperty = Stripe_PaymentMethodOptionsKonbini | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsKonbini = {
  __typename?: 'Stripe_PaymentMethodOptionsKonbini';
  /** An optional 10 to 11 digit numeric-only string determining the confirmation code at applicable convenience stores. */
  confirmation_number?: Maybe<Scalars['String']>;
  /** The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. */
  expires_after_days?: Maybe<Scalars['Int']>;
  /** The timestamp at which the Konbini payment instructions will expire. Only one of `expires_after_days` or `expires_at` may be set. */
  expires_at?: Maybe<Scalars['Int']>;
  /** A product descriptor of up to 22 characters, which will appear to customers at the convenience store. */
  product_description?: Maybe<Scalars['String']>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsKonbiniSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsKonbiniSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsOxxoProperty = Stripe_PaymentMethodOptionsOxxo | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsOxxo = {
  __typename?: 'Stripe_PaymentMethodOptionsOxxo';
  /** The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time. */
  expires_after_days?: Maybe<Scalars['Int']>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsOxxoSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsOxxoSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsP24Property = Stripe_PaymentMethodOptionsP24 | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsP24 = {
  __typename?: 'Stripe_PaymentMethodOptionsP24';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsP24SetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsP24SetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsPaynowProperty = Stripe_PaymentMethodOptionsPaynow | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsPaynow = {
  __typename?: 'Stripe_PaymentMethodOptionsPaynow';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsPaynowSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsPaynowSetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentPaymentMethodOptionsSepaDebitProperty = Stripe_PaymentIntentPaymentMethodOptionsSepaDebit | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentIntentPaymentMethodOptionsSepaDebit = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsSepaDebit';
  mandate_options?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsSepaDebitSetupFutureUsageProperty>;
};

export type Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsMandateOptionsSepaDebit';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_PaymentIntentPaymentMethodOptionsSepaDebitSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsSofortProperty = Stripe_PaymentMethodOptionsSofort | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsSofort = {
  __typename?: 'Stripe_PaymentMethodOptionsSofort';
  /** Preferred language of the SOFORT authorization page that the customer is redirected to. */
  preferred_language?: Maybe<Stripe_PaymentMethodOptionsSofortPreferredLanguageProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsSofortSetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsSofortPreferredLanguageProperty {
  De = 'de',
  En = 'en',
  Es = 'es',
  Fr = 'fr',
  It = 'it',
  Nl = 'nl',
  Pl = 'pl'
}

export enum Stripe_PaymentMethodOptionsSofortSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session'
}

export type Stripe_PaymentIntentPaymentMethodOptionsUsBankAccountProperty = Stripe_PaymentIntentPaymentMethodOptionsUsBankAccount | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentIntentPaymentMethodOptionsUsBankAccount = {
  __typename?: 'Stripe_PaymentIntentPaymentMethodOptionsUsBankAccount';
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsUsBankAccountSetupFutureUsageProperty>;
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_PaymentIntentPaymentMethodOptionsUsBankAccountVerificationMethodProperty>;
};

export enum Stripe_PaymentIntentPaymentMethodOptionsUsBankAccountSetupFutureUsageProperty {
  None = 'none',
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export enum Stripe_PaymentIntentPaymentMethodOptionsUsBankAccountVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_PaymentIntentPaymentMethodOptionsWechatPayProperty = Stripe_PaymentMethodOptionsWechatPay | Stripe_PaymentIntentTypeSpecificPaymentMethodOptionsClient;

export type Stripe_PaymentMethodOptionsWechatPay = {
  __typename?: 'Stripe_PaymentMethodOptionsWechatPay';
  /** The app ID registered with WeChat Pay. Only required when client is ios or android. */
  app_id?: Maybe<Scalars['String']>;
  /** The client type that the end customer will pay from */
  client?: Maybe<Stripe_PaymentMethodOptionsWechatPayClientProperty>;
  /**
   * Indicates that you intend to make future payments with this PaymentIntent's payment method.
   *
   * Providing this parameter will [attach the payment method](https://stripe.com/docs/payments/save-during-payment) to the PaymentIntent's Customer, if present, after the PaymentIntent is confirmed and any required actions from the user are complete. If no Customer was provided, the payment method can still be [attached](https://stripe.com/docs/api/payment_methods/attach) to a Customer after the transaction completes.
   *
   * When processing card payments, Stripe also uses `setup_future_usage` to dynamically optimize your payment flow and comply with regional legislation and network rules, such as [SCA](https://stripe.com/docs/strong-customer-authentication).
   */
  setup_future_usage?: Maybe<Stripe_PaymentMethodOptionsWechatPaySetupFutureUsageProperty>;
};

export enum Stripe_PaymentMethodOptionsWechatPayClientProperty {
  Android = 'android',
  Ios = 'ios',
  Web = 'web'
}

export enum Stripe_PaymentMethodOptionsWechatPaySetupFutureUsageProperty {
  None = 'none'
}

export type Stripe_PaymentIntentProcessing = {
  __typename?: 'Stripe_PaymentIntentProcessing';
  card?: Maybe<Stripe_PaymentIntentCardProcessing>;
  /** Type of the payment method for which payment is in `processing` state, one of `card`. */
  type?: Maybe<Stripe_PaymentIntentProcessingTypeProperty>;
};

export type Stripe_PaymentIntentCardProcessing = {
  __typename?: 'Stripe_PaymentIntentCardProcessing';
  customer_notification?: Maybe<Stripe_PaymentIntentProcessingCustomerNotification>;
};

export type Stripe_PaymentIntentProcessingCustomerNotification = {
  __typename?: 'Stripe_PaymentIntentProcessingCustomerNotification';
  /** Whether customer approval has been requested for this payment. For payments greater than INR 5000 or mandate amount, the customer must provide explicit approval of the payment with their bank. */
  approval_requested?: Maybe<Scalars['Boolean']>;
  /** If customer approval is required, they need to provide approval before this time. */
  completes_at?: Maybe<Scalars['Int']>;
};

export enum Stripe_PaymentIntentProcessingTypeProperty {
  Card = 'card'
}

export type Stripe_PaymentIntentReviewProperty = WrappedString | Stripe_Review;

export enum Stripe_PaymentIntentSetupFutureUsageProperty {
  OffSession = 'off_session',
  OnSession = 'on_session'
}

export enum Stripe_PaymentIntentStatusProperty {
  Canceled = 'canceled',
  Processing = 'processing',
  RequiresAction = 'requires_action',
  RequiresCapture = 'requires_capture',
  RequiresConfirmation = 'requires_confirmation',
  RequiresPaymentMethod = 'requires_payment_method',
  Succeeded = 'succeeded'
}

export type Stripe_TransferData = {
  __typename?: 'Stripe_TransferData';
  /** Amount intended to be collected by this PaymentIntent. A positive integer representing how much to charge in the [smallest currency unit](https://stripe.com/docs/currencies#zero-decimal) (e.g., 100 cents to charge $1.00 or 100 to charge ¥100, a zero-decimal currency). The minimum amount is $0.50 US or [equivalent in charge currency](https://stripe.com/docs/currencies#minimum-and-maximum-charge-amounts). The amount value supports up to eight digits (e.g., a value of 99999999 for a USD charge of $999,999.99). */
  amount?: Maybe<Scalars['Int']>;
  destination?: Maybe<Stripe_TransferDataDestinationProperty>;
};

export type Stripe_TransferDataDestinationProperty = WrappedString | Stripe_Account;

export type Stripe_Invoiceitem = {
  __typename?: 'Stripe_Invoiceitem';
  /** Amount (in the `currency` specified) of the invoice item. This should always be equal to `unit_amount * quantity`. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  date?: Maybe<Scalars['Int']>;
  /** An arbitrary string attached to the object. Often useful for displaying to users. */
  description?: Maybe<Scalars['String']>;
  /** If true, discounts will apply to this invoice item. Always false for prorations. */
  discountable?: Maybe<Scalars['Boolean']>;
  /** The discounts which apply to the invoice item. Item discounts are applied before invoice discounts. Use `expand[]=discounts` to expand each discount. */
  discounts?: Maybe<Array<Maybe<Stripe_InvoiceitemDiscountsProperty>>>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  invoice?: Maybe<Stripe_InvoiceitemInvoiceProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_InvoiceitemObjectProperty>;
  period?: Maybe<Stripe_InvoiceLineItemPeriod>;
  price?: Maybe<Stripe_Price>;
  /** Whether the invoice item was created automatically as a proration adjustment when the customer switched plans. */
  proration?: Maybe<Scalars['Boolean']>;
  /** Quantity of units for the invoice item. If the invoice item is a proration, the quantity of the subscription that the proration was computed for. */
  quantity?: Maybe<Scalars['Int']>;
  subscription?: Maybe<Stripe_InvoiceitemSubscriptionProperty>;
  /** The subscription item that this invoice item has been created for, if any. */
  subscription_item?: Maybe<Scalars['String']>;
  /** The tax rates which apply to the invoice item. When set, the `default_tax_rates` on the invoice do not apply to this invoice item. */
  tax_rates?: Maybe<Array<Maybe<Stripe_TaxRate>>>;
  test_clock?: Maybe<Stripe_InvoiceitemTestClockProperty>;
  /** Unit amount (in the `currency` specified) of the invoice item. */
  unit_amount?: Maybe<Scalars['Int']>;
  /** Same as `unit_amount`, but contains a decimal value with at most 12 decimal places. */
  unit_amount_decimal?: Maybe<Scalars['String']>;
};

export type Stripe_InvoiceitemDiscountsProperty = WrappedString | Stripe_Discount;

export type Stripe_InvoiceitemInvoiceProperty = WrappedString | Stripe_Invoice;

export enum Stripe_InvoiceitemObjectProperty {
  Invoiceitem = 'invoiceitem'
}

export type Stripe_InvoiceitemSubscriptionProperty = WrappedString | Stripe_Subscription;

export type Stripe_InvoiceitemTestClockProperty = WrappedString | Stripe_TestHelpersTestClock;

export type ShipEngine_Label = {
  __typename?: 'ShipEngine_Label';
  label_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  shipment_id?: Maybe<Scalars['String']>;
  ship_date?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['String']>;
  tracking_number?: Maybe<Scalars['String']>;
  batch_id?: Maybe<Scalars['String']>;
  carrier_id?: Maybe<Scalars['String']>;
  charge_event?: Maybe<Scalars['String']>;
  service_code?: Maybe<Scalars['String']>;
  package_code?: Maybe<Scalars['String']>;
  voided_at?: Maybe<Scalars['String']>;
  label_format?: Maybe<Scalars['String']>;
  display_scheme?: Maybe<Scalars['String']>;
  label_layout?: Maybe<Scalars['String']>;
  label_image_id?: Maybe<Scalars['String']>;
  carrier_code?: Maybe<Scalars['String']>;
  tracking_status?: Maybe<Scalars['String']>;
  label_download?: Maybe<ShipEngine_LabelDownload>;
  trackable?: Maybe<Scalars['Boolean']>;
  packages?: Maybe<Array<Maybe<ShipEngine_Package>>>;
};

export type ShipEngine_LabelDownload = {
  __typename?: 'ShipEngine_LabelDownload';
  href?: Maybe<Scalars['String']>;
  pdf?: Maybe<Scalars['String']>;
  png?: Maybe<Scalars['String']>;
  zpl?: Maybe<Scalars['String']>;
};

export type ShipEngine_Package = {
  __typename?: 'ShipEngine_Package';
  package_id?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  package_code?: Maybe<Scalars['String']>;
  tracking_number?: Maybe<Scalars['String']>;
  label_download?: Maybe<ShipEngine_LabelDownload>;
  weight?: Maybe<ShipEngine_Weight>;
  dimensions?: Maybe<ShipEngine_Dimensions>;
};

export type ShipEngine_Weight = {
  __typename?: 'ShipEngine_Weight';
  value?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type ShipEngine_Dimensions = {
  __typename?: 'ShipEngine_Dimensions';
  length?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type Stripe_ApiErrorsSourceProperty = Stripe_BankAccount | Stripe_Card | Stripe_Source;

export enum Stripe_ApiErrorsTypeProperty {
  ApiError = 'api_error',
  CardError = 'card_error',
  IdempotencyError = 'idempotency_error',
  InvalidRequestError = 'invalid_request_error'
}

export type Stripe_SetupAttemptSetupIntentProperty = WrappedString | Stripe_SetupIntent;

export type Stripe_Networks = {
  __typename?: 'Stripe_Networks';
  /** All available networks for the card. */
  available?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The preferred network for the card. */
  preferred?: Maybe<Scalars['String']>;
};

export type Stripe_ThreeDSecureUsage = {
  __typename?: 'Stripe_ThreeDSecureUsage';
  /** Whether 3D Secure is supported on this card. */
  supported?: Maybe<Scalars['Boolean']>;
};

export type Stripe_PaymentMethodCardWallet = {
  __typename?: 'Stripe_PaymentMethodCardWallet';
  amex_express_checkout?: Maybe<Stripe_PaymentMethodCardWalletAmexExpressCheckout>;
  apple_pay?: Maybe<Stripe_PaymentMethodCardWalletApplePay>;
  /** (For tokenized numbers only.) The last four digits of the device account number. */
  dynamic_last4?: Maybe<Scalars['String']>;
  google_pay?: Maybe<Stripe_PaymentMethodCardWalletGooglePay>;
  masterpass?: Maybe<Stripe_PaymentMethodCardWalletMasterpass>;
  samsung_pay?: Maybe<Stripe_PaymentMethodCardWalletSamsungPay>;
  /** The type of the card wallet, one of `amex_express_checkout`, `apple_pay`, `google_pay`, `masterpass`, `samsung_pay`, or `visa_checkout`. An additional hash is included on the Wallet subhash with a name matching this value. It contains additional information specific to the card wallet type. */
  type?: Maybe<Stripe_PaymentMethodCardWalletTypeProperty>;
  visa_checkout?: Maybe<Stripe_PaymentMethodCardWalletVisaCheckout>;
};

export type Stripe_PaymentMethodCardWalletAmexExpressCheckout = {
  __typename?: 'Stripe_PaymentMethodCardWalletAmexExpressCheckout';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodCardWalletApplePay = {
  __typename?: 'Stripe_PaymentMethodCardWalletApplePay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodCardWalletGooglePay = {
  __typename?: 'Stripe_PaymentMethodCardWalletGooglePay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodCardWalletMasterpass = {
  __typename?: 'Stripe_PaymentMethodCardWalletMasterpass';
  billing_address?: Maybe<Stripe_Address>;
  /** Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  email?: Maybe<Scalars['String']>;
  /** Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  name?: Maybe<Scalars['String']>;
  shipping_address?: Maybe<Stripe_Address>;
};

export type Stripe_PaymentMethodCardWalletSamsungPay = {
  __typename?: 'Stripe_PaymentMethodCardWalletSamsungPay';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_PaymentMethodCardWalletTypeProperty {
  AmexExpressCheckout = 'amex_express_checkout',
  ApplePay = 'apple_pay',
  GooglePay = 'google_pay',
  Masterpass = 'masterpass',
  SamsungPay = 'samsung_pay',
  VisaCheckout = 'visa_checkout'
}

export type Stripe_PaymentMethodCardWalletVisaCheckout = {
  __typename?: 'Stripe_PaymentMethodCardWalletVisaCheckout';
  billing_address?: Maybe<Stripe_Address>;
  /** Owner's verified email. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  email?: Maybe<Scalars['String']>;
  /** Owner's verified full name. Values are verified or provided by the wallet directly (if supported) at the time of authorization or settlement. They cannot be set or mutated. */
  name?: Maybe<Scalars['String']>;
  shipping_address?: Maybe<Stripe_Address>;
};

export type Stripe_PaymentMethodCardPresent = {
  __typename?: 'Stripe_PaymentMethodCardPresent';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodCustomerProperty = WrappedString | Stripe_Customer;

export type Stripe_PaymentMethodCustomerBalance = {
  __typename?: 'Stripe_PaymentMethodCustomerBalance';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodEps = {
  __typename?: 'Stripe_PaymentMethodEps';
  /** The customer's bank. Should be one of `arzte_und_apotheker_bank`, `austrian_anadi_bank_ag`, `bank_austria`, `bankhaus_carl_spangler`, `bankhaus_schelhammer_und_schattera_ag`, `bawag_psk_ag`, `bks_bank_ag`, `brull_kallmus_bank_ag`, `btv_vier_lander_bank`, `capital_bank_grawe_gruppe_ag`, `dolomitenbank`, `easybank_ag`, `erste_bank_und_sparkassen`, `hypo_alpeadriabank_international_ag`, `hypo_noe_lb_fur_niederosterreich_u_wien`, `hypo_oberosterreich_salzburg_steiermark`, `hypo_tirol_bank_ag`, `hypo_vorarlberg_bank_ag`, `hypo_bank_burgenland_aktiengesellschaft`, `marchfelder_bank`, `oberbank_ag`, `raiffeisen_bankengruppe_osterreich`, `schoellerbank_ag`, `sparda_bank_wien`, `volksbank_gruppe`, `volkskreditbank_ag`, or `vr_bank_braunau`. */
  bank?: Maybe<Stripe_PaymentMethodEpsBankProperty>;
};

export enum Stripe_PaymentMethodEpsBankProperty {
  ArzteUndApothekerBank = 'arzte_und_apotheker_bank',
  AustrianAnadiBankAg = 'austrian_anadi_bank_ag',
  BankAustria = 'bank_austria',
  BankhausCarlSpangler = 'bankhaus_carl_spangler',
  BankhausSchelhammerUndSchatteraAg = 'bankhaus_schelhammer_und_schattera_ag',
  BawagPskAg = 'bawag_psk_ag',
  BksBankAg = 'bks_bank_ag',
  BrullKallmusBankAg = 'brull_kallmus_bank_ag',
  BtvVierLanderBank = 'btv_vier_lander_bank',
  CapitalBankGraweGruppeAg = 'capital_bank_grawe_gruppe_ag',
  Dolomitenbank = 'dolomitenbank',
  EasybankAg = 'easybank_ag',
  ErsteBankUndSparkassen = 'erste_bank_und_sparkassen',
  HypoAlpeadriabankInternationalAg = 'hypo_alpeadriabank_international_ag',
  HypoBankBurgenlandAktiengesellschaft = 'hypo_bank_burgenland_aktiengesellschaft',
  HypoNoeLbFurNiederosterreichUWien = 'hypo_noe_lb_fur_niederosterreich_u_wien',
  HypoOberosterreichSalzburgSteiermark = 'hypo_oberosterreich_salzburg_steiermark',
  HypoTirolBankAg = 'hypo_tirol_bank_ag',
  HypoVorarlbergBankAg = 'hypo_vorarlberg_bank_ag',
  MarchfelderBank = 'marchfelder_bank',
  OberbankAg = 'oberbank_ag',
  RaiffeisenBankengruppeOsterreich = 'raiffeisen_bankengruppe_osterreich',
  SchoellerbankAg = 'schoellerbank_ag',
  SpardaBankWien = 'sparda_bank_wien',
  VolksbankGruppe = 'volksbank_gruppe',
  VolkskreditbankAg = 'volkskreditbank_ag',
  VrBankBraunau = 'vr_bank_braunau'
}

export type Stripe_PaymentMethodFpx = {
  __typename?: 'Stripe_PaymentMethodFpx';
  /** The customer's bank, if provided. Can be one of `affin_bank`, `agrobank`, `alliance_bank`, `ambank`, `bank_islam`, `bank_muamalat`, `bank_rakyat`, `bsn`, `cimb`, `hong_leong_bank`, `hsbc`, `kfh`, `maybank2u`, `ocbc`, `public_bank`, `rhb`, `standard_chartered`, `uob`, `deutsche_bank`, `maybank2e`, or `pb_enterprise`. */
  bank?: Maybe<Stripe_PaymentMethodFpxBankProperty>;
};

export enum Stripe_PaymentMethodFpxBankProperty {
  AffinBank = 'affin_bank',
  Agrobank = 'agrobank',
  AllianceBank = 'alliance_bank',
  Ambank = 'ambank',
  BankIslam = 'bank_islam',
  BankMuamalat = 'bank_muamalat',
  BankRakyat = 'bank_rakyat',
  Bsn = 'bsn',
  Cimb = 'cimb',
  DeutscheBank = 'deutsche_bank',
  HongLeongBank = 'hong_leong_bank',
  Hsbc = 'hsbc',
  Kfh = 'kfh',
  Maybank2e = 'maybank2e',
  Maybank2u = 'maybank2u',
  Ocbc = 'ocbc',
  PbEnterprise = 'pb_enterprise',
  PublicBank = 'public_bank',
  Rhb = 'rhb',
  StandardChartered = 'standard_chartered',
  Uob = 'uob'
}

export type Stripe_PaymentMethodGiropay = {
  __typename?: 'Stripe_PaymentMethodGiropay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodGrabpay = {
  __typename?: 'Stripe_PaymentMethodGrabpay';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodIdeal = {
  __typename?: 'Stripe_PaymentMethodIdeal';
  /** The customer's bank, if provided. Can be one of `abn_amro`, `asn_bank`, `bunq`, `handelsbanken`, `ing`, `knab`, `moneyou`, `rabobank`, `regiobank`, `revolut`, `sns_bank`, `triodos_bank`, or `van_lanschot`. */
  bank?: Maybe<Stripe_PaymentMethodIdealBankProperty>;
  /** The Bank Identifier Code of the customer's bank, if the bank was provided. */
  bic?: Maybe<Stripe_PaymentMethodIdealBicProperty>;
};

export enum Stripe_PaymentMethodIdealBankProperty {
  AbnAmro = 'abn_amro',
  AsnBank = 'asn_bank',
  Bunq = 'bunq',
  Handelsbanken = 'handelsbanken',
  Ing = 'ing',
  Knab = 'knab',
  Moneyou = 'moneyou',
  Rabobank = 'rabobank',
  Regiobank = 'regiobank',
  Revolut = 'revolut',
  SnsBank = 'sns_bank',
  TriodosBank = 'triodos_bank',
  VanLanschot = 'van_lanschot'
}

export enum Stripe_PaymentMethodIdealBicProperty {
  Abnanl2A = 'ABNANL2A',
  Asnbnl21 = 'ASNBNL21',
  Bunqnl2A = 'BUNQNL2A',
  Fvlbnl22 = 'FVLBNL22',
  Handnl2A = 'HANDNL2A',
  Ingbnl2A = 'INGBNL2A',
  Knabnl2H = 'KNABNL2H',
  Moyonl21 = 'MOYONL21',
  Rabonl2U = 'RABONL2U',
  Rbrbnl21 = 'RBRBNL21',
  Revolt21 = 'REVOLT21',
  Snsbnl2A = 'SNSBNL2A',
  Trionl2U = 'TRIONL2U'
}

export type Stripe_PaymentMethodInteracPresent = {
  __typename?: 'Stripe_PaymentMethodInteracPresent';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodKlarna = {
  __typename?: 'Stripe_PaymentMethodKlarna';
  dob?: Maybe<Stripe_PaymentFlowsPrivatePaymentMethodsKlarnaDob>;
};

export type Stripe_PaymentFlowsPrivatePaymentMethodsKlarnaDob = {
  __typename?: 'Stripe_PaymentFlowsPrivatePaymentMethodsKlarnaDob';
  /** The day of birth, between 1 and 31. */
  day?: Maybe<Scalars['Int']>;
  /** The month of birth, between 1 and 12. */
  month?: Maybe<Scalars['Int']>;
  /** The four-digit year of birth. */
  year?: Maybe<Scalars['Int']>;
};

export type Stripe_PaymentMethodKonbini = {
  __typename?: 'Stripe_PaymentMethodKonbini';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_PaymentMethodObjectProperty {
  PaymentMethod = 'payment_method'
}

export type Stripe_PaymentMethodOxxo = {
  __typename?: 'Stripe_PaymentMethodOxxo';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodP24 = {
  __typename?: 'Stripe_PaymentMethodP24';
  /** The customer's bank, if provided. */
  bank?: Maybe<Stripe_PaymentMethodP24BankProperty>;
};

export enum Stripe_PaymentMethodP24BankProperty {
  AliorBank = 'alior_bank',
  BankMillennium = 'bank_millennium',
  BankNowyBfgSa = 'bank_nowy_bfg_sa',
  BankPekaoSa = 'bank_pekao_sa',
  BankiSpbdzielcze = 'banki_spbdzielcze',
  Blik = 'blik',
  BnpParibas = 'bnp_paribas',
  Boz = 'boz',
  CitiHandlowy = 'citi_handlowy',
  CreditAgricole = 'credit_agricole',
  Envelobank = 'envelobank',
  EtransferPocztowy24 = 'etransfer_pocztowy24',
  GetinBank = 'getin_bank',
  Ideabank = 'ideabank',
  Ing = 'ing',
  Inteligo = 'inteligo',
  MbankMtransfer = 'mbank_mtransfer',
  NestPrzelew = 'nest_przelew',
  NoblePay = 'noble_pay',
  PbacZIpko = 'pbac_z_ipko',
  PlusBank = 'plus_bank',
  SantanderPrzelew24 = 'santander_przelew24',
  TmobileUsbugiBankowe = 'tmobile_usbugi_bankowe',
  ToyotaBank = 'toyota_bank',
  VolkswagenBank = 'volkswagen_bank'
}

export type Stripe_PaymentMethodPaynow = {
  __typename?: 'Stripe_PaymentMethodPaynow';
  result?: Maybe<Scalars['JSONObject']>;
};

export type Stripe_PaymentMethodSepaDebit = {
  __typename?: 'Stripe_PaymentMethodSepaDebit';
  /** Bank code of bank associated with the bank account. */
  bank_code?: Maybe<Scalars['String']>;
  /** Branch code of bank associated with the bank account. */
  branch_code?: Maybe<Scalars['String']>;
  /** Two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  generated_from?: Maybe<Stripe_SepaDebitGeneratedFrom>;
  /** Last four characters of the IBAN. */
  last4?: Maybe<Scalars['String']>;
};

export type Stripe_SepaDebitGeneratedFrom = {
  __typename?: 'Stripe_SepaDebitGeneratedFrom';
  charge?: Maybe<Stripe_SepaDebitGeneratedFromChargeProperty>;
  setup_attempt?: Maybe<Stripe_SepaDebitGeneratedFromSetupAttemptProperty>;
};

export type Stripe_SepaDebitGeneratedFromChargeProperty = WrappedString | Stripe_Charge;

export type Stripe_SepaDebitGeneratedFromSetupAttemptProperty = WrappedString | Stripe_SetupAttempt;

export type Stripe_PaymentMethodSofort = {
  __typename?: 'Stripe_PaymentMethodSofort';
  /** Two-letter ISO code representing the country the bank account is located in. */
  country?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodTypeProperty {
  AcssDebit = 'acss_debit',
  AfterpayClearpay = 'afterpay_clearpay',
  Alipay = 'alipay',
  AuBecsDebit = 'au_becs_debit',
  BacsDebit = 'bacs_debit',
  Bancontact = 'bancontact',
  Boleto = 'boleto',
  Card = 'card',
  CardPresent = 'card_present',
  CustomerBalance = 'customer_balance',
  Eps = 'eps',
  Fpx = 'fpx',
  Giropay = 'giropay',
  Grabpay = 'grabpay',
  Ideal = 'ideal',
  InteracPresent = 'interac_present',
  Klarna = 'klarna',
  Konbini = 'konbini',
  Oxxo = 'oxxo',
  P24 = 'p24',
  Paynow = 'paynow',
  SepaDebit = 'sepa_debit',
  Sofort = 'sofort',
  UsBankAccount = 'us_bank_account',
  WechatPay = 'wechat_pay'
}

export type Stripe_PaymentMethodUsBankAccount = {
  __typename?: 'Stripe_PaymentMethodUsBankAccount';
  /** Account holder type: individual or company. */
  account_holder_type?: Maybe<Stripe_PaymentMethodUsBankAccountAccountHolderTypeProperty>;
  /** Account type: checkings or savings. Defaults to checking if omitted. */
  account_type?: Maybe<Stripe_PaymentMethodUsBankAccountAccountTypeProperty>;
  /** The name of the bank. */
  bank_name?: Maybe<Scalars['String']>;
  /** Uniquely identifies this particular bank account. You can use this attribute to check whether two bank accounts are the same. */
  fingerprint?: Maybe<Scalars['String']>;
  /** Last four digits of the bank account number. */
  last4?: Maybe<Scalars['String']>;
  /** Routing number of the bank account. */
  routing_number?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentMethodUsBankAccountAccountHolderTypeProperty {
  Company = 'company',
  Individual = 'individual'
}

export enum Stripe_PaymentMethodUsBankAccountAccountTypeProperty {
  Checking = 'checking',
  Savings = 'savings'
}

export type Stripe_PaymentMethodWechatPay = {
  __typename?: 'Stripe_PaymentMethodWechatPay';
  result?: Maybe<Scalars['JSONObject']>;
};

export enum Stripe_CustomerObjectProperty {
  Customer = 'customer'
}

/** The customer's payment sources, if any. */
export type Stripe_CustomerSourcesProperty = {
  __typename?: 'Stripe_CustomerSourcesProperty';
  /** Details about each object. */
  data: Array<Stripe_CustomerSourcesDataProperty>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_CustomerSourcesObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export type Stripe_CustomerSourcesDataProperty = Stripe_AlipayAccount | Stripe_BankAccount | Stripe_BitcoinReceiver | Stripe_Card | Stripe_Source;

export enum Stripe_CustomerSourcesObjectProperty {
  List = 'list'
}

/** The customer's current subscriptions, if any. */
export type Stripe_CustomerSubscriptionsProperty = {
  __typename?: 'Stripe_CustomerSubscriptionsProperty';
  /** Details about each object. */
  data: Array<Stripe_Subscription>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_CustomerSubscriptionsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_CustomerSubscriptionsObjectProperty {
  List = 'list'
}

export type Stripe_CustomerTax = {
  __typename?: 'Stripe_CustomerTax';
  /** Surfaces if automatic tax computation is possible given the current customer location information. */
  automatic_tax?: Maybe<Stripe_CustomerTaxAutomaticTaxProperty>;
  /** A recent IP address of the customer used for tax reporting and tax location inference. */
  ip_address?: Maybe<Scalars['String']>;
  location?: Maybe<Stripe_CustomerTaxLocation>;
};

export enum Stripe_CustomerTaxAutomaticTaxProperty {
  Failed = 'failed',
  NotCollecting = 'not_collecting',
  Supported = 'supported',
  UnrecognizedLocation = 'unrecognized_location'
}

export type Stripe_CustomerTaxLocation = {
  __typename?: 'Stripe_CustomerTaxLocation';
  /** The customer's country as identified by Stripe Tax. */
  country?: Maybe<Scalars['String']>;
  /** The data source used to infer the customer's location. */
  source?: Maybe<Stripe_CustomerTaxLocationSourceProperty>;
  /** The customer's state, county, province, or region as identified by Stripe Tax. */
  state?: Maybe<Scalars['String']>;
};

export enum Stripe_CustomerTaxLocationSourceProperty {
  BillingAddress = 'billing_address',
  IpAddress = 'ip_address',
  PaymentMethod = 'payment_method',
  ShippingDestination = 'shipping_destination'
}

export enum Stripe_CustomerTaxExemptProperty {
  Exempt = 'exempt',
  None = 'none',
  Reverse = 'reverse'
}

/** The customer's tax IDs. */
export type Stripe_CustomerTaxIdsProperty = {
  __typename?: 'Stripe_CustomerTaxIdsProperty';
  /** Details about each object. */
  data: Array<Stripe_TaxId>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_CustomerTaxIdsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_CustomerTaxIdsObjectProperty {
  List = 'list'
}

export type Stripe_CustomerTestClockProperty = WrappedString | Stripe_TestHelpersTestClock;

export type Voucherify_LoyaltyCard = {
  __typename?: 'Voucherify_LoyaltyCard';
  id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  campaign?: Maybe<Scalars['String']>;
  campaign_id?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  loyalty_card?: Maybe<Voucherify_LoyaltyCardStats>;
  active?: Maybe<Scalars['Boolean']>;
  assets?: Maybe<Voucherify_LoyaltyCardAssets>;
};

export type Voucherify_LoyaltyCardStats = {
  __typename?: 'Voucherify_LoyaltyCardStats';
  points?: Maybe<Scalars['Int']>;
  balance?: Maybe<Scalars['Int']>;
};

export type Voucherify_LoyaltyCardAssets = {
  __typename?: 'Voucherify_LoyaltyCardAssets';
  qr?: Maybe<Voucherify_LoyaltyCardAsset>;
  barcode?: Maybe<Voucherify_LoyaltyCardAsset>;
};

export type Voucherify_LoyaltyCardAsset = {
  __typename?: 'Voucherify_LoyaltyCardAsset';
  id?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentIntentPaginatedList = {
  __typename?: 'Stripe_PaymentIntentPaginatedList';
  items: Array<Stripe_PaymentIntent>;
  total: Scalars['Int'];
};

export type TsWhereStripePaymentIntentInput = {
  amount?: InputMaybe<TsWhereIntegerInput>;
  amount_capturable?: InputMaybe<TsWhereIntegerInput>;
  amount_details?: InputMaybe<TsWhereStripe_PaymentFlowsAmountDetailsInput>;
  amount_received?: InputMaybe<TsWhereIntegerInput>;
  application?: InputMaybe<TsWhereStripe_ApplicationWrappedStringUnionInput>;
  application_fee_amount?: InputMaybe<TsWhereIntegerInput>;
  automatic_payment_methods?: InputMaybe<TsWhereStripe_PaymentFlowsAutomaticPaymentMethodsPaymentIntentInput>;
  canceled_at?: InputMaybe<TsWhereIntegerInput>;
  cancellation_reason?: InputMaybe<TsWhereInput>;
  capture_method?: InputMaybe<TsWhereInput>;
  charges?: InputMaybe<TsWhereStripe_PaymentIntentChargesInput>;
  client_secret?: InputMaybe<TsWhereStringInput>;
  confirmation_method?: InputMaybe<TsWhereInput>;
  created?: InputMaybe<TsWhereIntegerInput>;
  currency?: InputMaybe<TsWhereStringInput>;
  customer?: InputMaybe<TsWhereStringInput>;
  description?: InputMaybe<TsWhereStringInput>;
  id?: InputMaybe<TsWhereStringInput>;
  invoice?: InputMaybe<TsWhereStripe_InvoiceWrappedStringUnionInput>;
  last_payment_error?: InputMaybe<TsWhereStripe_ApiErrorsInput>;
  livemode?: InputMaybe<TsWhereBooleanInput>;
  next_action?: InputMaybe<TsWhereStripe_PaymentIntentNextActionInput>;
  object?: InputMaybe<TsWhereInput>;
  on_behalf_of?: InputMaybe<TsWhereStripe_AccountWrappedStringUnionInput>;
  payment_method?: InputMaybe<TsWhereStripe_PaymentMethodWrappedStringUnionInput>;
  payment_method_options?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodOptionsInput>;
  payment_method_types?: InputMaybe<TsWhereStripe_PaymentIntentPaymentMethodTypesInput>;
  processing?: InputMaybe<TsWhereStripe_PaymentIntentProcessingInput>;
  receipt_email?: InputMaybe<TsWhereStringInput>;
  review?: InputMaybe<TsWhereStripe_ReviewWrappedStringUnionInput>;
  setup_future_usage?: InputMaybe<TsWhereInput>;
  shipping?: InputMaybe<TsWhereStripe_ShippingInput>;
  statement_descriptor?: InputMaybe<TsWhereStringInput>;
  statement_descriptor_suffix?: InputMaybe<TsWhereStringInput>;
  status?: InputMaybe<TsWhereInput>;
  transfer_data?: InputMaybe<TsWhereStripe_TransferDataInput>;
  transfer_group?: InputMaybe<TsWhereStringInput>;
  invoiceItems?: InputMaybe<TsWhereStripe_InvoiceitemInput>;
  sessionItems?: InputMaybe<TsWhereStripe_ItemInput>;
  shipment?: InputMaybe<TsWhereShipEngine_LabelInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  AND?: InputMaybe<Array<InputMaybe<TsWhereStripePaymentIntentInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereStripePaymentIntentInput>>>;
  NOT?: InputMaybe<TsWhereStripePaymentIntentInput>;
};

export type ProfilePaginatedList = {
  __typename?: 'ProfilePaginatedList';
  items: Array<Profile>;
  total: Scalars['Int'];
};

export type TsWhereProfileInput = {
  id?: InputMaybe<TsWhereStringInput>;
  name?: InputMaybe<TsWhereStringInput>;
  email?: InputMaybe<TsWhereStringInput>;
  bio?: InputMaybe<TsWhereStringInput>;
  avatar?: InputMaybe<TsWhereAssetRelationshipInput>;
  stripeCustomerId?: InputMaybe<TsWhereStringInput>;
  _shapeId?: InputMaybe<TsWhereIdInput>;
  _id?: InputMaybe<TsWhereIdInput>;
  _version?: InputMaybe<TsWhereIntegerInput>;
  _shapeName?: InputMaybe<TsWhereStringInput>;
  _createdAt?: InputMaybe<TsWhereDateInput>;
  _updatedAt?: InputMaybe<TsWhereDateInput>;
  _schemaVersion?: InputMaybe<TsWhereNumberInput>;
  _status?: InputMaybe<TsWhereWorkflowInput>;
  _contentTypeId?: InputMaybe<TsWhereIdInput>;
  _contentTypeName?: InputMaybe<TsWhereStringInput>;
  AND?: InputMaybe<Array<InputMaybe<TsWhereProfileInput>>>;
  OR?: InputMaybe<Array<InputMaybe<TsWhereProfileInput>>>;
  NOT?: InputMaybe<TsWhereProfileInput>;
};

export type Stripe_ListProductsResponse = {
  __typename?: 'Stripe_ListProductsResponse';
  /** Details about each object. */
  data?: Maybe<Array<Maybe<Stripe_Product>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object?: Maybe<Stripe_ListProductsResponseObjectProperty>;
  /** The URL where this list can be accessed. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_ListProductsResponseObjectProperty {
  List = 'list'
}

export type ProfileNewsletterStatus = {
  __typename?: 'ProfileNewsletterStatus';
  listId?: Maybe<Scalars['String']>;
  listName?: Maybe<Scalars['String']>;
  subscribed?: Maybe<Scalars['Boolean']>;
};

export type Stripe_ListInvoiceLinesResponse = {
  __typename?: 'Stripe_ListInvoiceLinesResponse';
  /** Details about each object. */
  data?: Maybe<Array<Maybe<Stripe_LineItem>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object?: Maybe<Stripe_ListInvoiceLinesResponseObjectProperty>;
  /** The URL where this list can be accessed. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_ListInvoiceLinesResponseObjectProperty {
  List = 'list'
}

export type Stripe_ListPaymentIntentsResponse = {
  __typename?: 'Stripe_ListPaymentIntentsResponse';
  data?: Maybe<Array<Maybe<Stripe_PaymentIntent>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object?: Maybe<Stripe_ListPaymentIntentsResponseObjectProperty>;
  /** The URL where this list can be accessed. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_ListPaymentIntentsResponseObjectProperty {
  List = 'list'
}

export type NavigationData = TsSearchable & {
  __typename?: 'NavigationData';
  links?: Maybe<NavigationDataLinks>;
  _shapeId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ID']>;
  _version?: Maybe<Scalars['Int']>;
  _shapeName?: Maybe<Scalars['String']>;
  _createdAt?: Maybe<Scalars['String']>;
  _createdBy?: Maybe<TsUser>;
  _updatedAt?: Maybe<Scalars['String']>;
  _updatedBy?: Maybe<TsUser>;
  _schemaVersion?: Maybe<Scalars['Float']>;
  /** @deprecated Use _status instead */
  _enabled?: Maybe<Scalars['Boolean']>;
  /** @deprecated Use a custom date field instead */
  _enabledAt?: Maybe<Scalars['String']>;
  _status?: Maybe<DefaultWorkflow>;
  _contentTypeId?: Maybe<Scalars['String']>;
  _contentTypeName?: Maybe<Scalars['String']>;
  searchSummary?: Maybe<Scalars['String']>;
};

export type NavigationDataLinks = {
  __typename?: 'NavigationDataLinks';
  categories?: Maybe<Array<Maybe<NavigationDataLinksCategories>>>;
  pages?: Maybe<Array<Maybe<NavigationDataLinksPages>>>;
};

export type NavigationDataLinksCategories = {
  __typename?: 'NavigationDataLinksCategories';
  name?: Maybe<Scalars['String']>;
  featured?: Maybe<Array<Maybe<NavigationDataLinksCategoriesFeatured>>>;
  collection?: Maybe<Array<Maybe<NavigationDataLinksCategoriesCollection>>>;
  categories?: Maybe<Array<Maybe<NavigationDataLinksCategoriesCategories>>>;
  brands?: Maybe<Array<Maybe<NavigationDataLinksCategoriesBrands>>>;
};

export type NavigationDataLinksCategoriesFeatured = {
  __typename?: 'NavigationDataLinksCategoriesFeatured';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type NavigationDataLinksCategoriesCollection = {
  __typename?: 'NavigationDataLinksCategoriesCollection';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type NavigationDataLinksCategoriesCategories = {
  __typename?: 'NavigationDataLinksCategoriesCategories';
  href?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type NavigationDataLinksCategoriesBrands = {
  __typename?: 'NavigationDataLinksCategoriesBrands';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

export type NavigationDataLinksPages = {
  __typename?: 'NavigationDataLinksPages';
  name?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['String']>;
};

/** Asset search results */
export type AssetSearchResults = {
  __typename?: 'AssetSearchResults';
  results: Array<Asset>;
  total: Scalars['Int'];
};

/** TsStaticSite search results */
export type TsStaticSiteSearchResults = {
  __typename?: 'TsStaticSiteSearchResults';
  results: Array<TsStaticSite>;
  total: Scalars['Int'];
};

/** Profile search results */
export type ProfileSearchResults = {
  __typename?: 'ProfileSearchResults';
  results: Array<Profile>;
  total: Scalars['Int'];
};

/** TSSearchable search results */
export type TsSearchableSearchResults = {
  __typename?: 'TSSearchableSearchResults';
  results: Array<TsSearchable>;
  total: Scalars['Int'];
};

/** This query allow you to pass context to your queries */
export type WithContext = {
  __typename?: 'WithContext';
  taxonomySuggest?: Maybe<TsSuggestionPaginatedList>;
  /** List Versions for a piece of content */
  getContentVersion?: Maybe<TsVersionResponse>;
  /** List Versions for a piece of content */
  getContentVersionList?: Maybe<TsVersionsPaginatedList>;
  /** Get a Asset by ID */
  getAsset?: Maybe<Asset>;
  /** Returns a list Asset in natural order. */
  getAssetList?: Maybe<AssetPaginatedList>;
  /** Get a TsStaticSite by ID */
  getTsStaticSite?: Maybe<TsStaticSite>;
  /** Returns a list TsStaticSite in natural order. */
  getTsStaticSiteList?: Maybe<TsStaticSitePaginatedList>;
  ReviewsIo_listProductReviews?: Maybe<ReviewsIo_ListProductReviewsResponse>;
  /** Get Stripe products from the TakeShape API Index */
  getIndexedProductList?: Maybe<Stripe_ProductPaginatedList>;
  /** Get the signed in user's profile from ShapeDB */
  getMyProfile?: Maybe<Profile>;
  /** Get the signed in user's subscriptions from Stripe */
  getMySubscriptions?: Maybe<Array<Maybe<Stripe_Subscription>>>;
  /** Get the signed-in user's payments from Stripe */
  getMyPayments_UNINDEXED?: Maybe<Array<Maybe<Stripe_PaymentIntent>>>;
  /** Get the signed-in user's payments from Stripe */
  getMyPayments_INDEXED?: Maybe<Stripe_PaymentIntentPaginatedList>;
  /** Get the signed-in user's payments from Stripe */
  getMyPayments?: Maybe<Array<Maybe<Stripe_PaymentIntent>>>;
  /** Get the signed-in user's payments from Stripe */
  getMyPaymentsIndexed?: Maybe<Stripe_PaymentIntentPaginatedList>;
  /** Get a profile by ID */
  getProfile?: Maybe<Profile>;
  /** Returns a list of profiles in natural order. */
  getProfileList?: Maybe<ProfilePaginatedList>;
  /** <p>Returns a list of your products. The products are returned sorted by creation date, with the most recently created products appearing first.</p> */
  Stripe_listProducts?: Maybe<Stripe_ListProductsResponse>;
  /** <p>Retrieves the details of an existing product. Supply the unique product ID from either a product creation request or the product list, and Stripe will return the corresponding product information.</p> */
  Stripe_getProduct?: Maybe<Stripe_Product>;
  /** Get a loyalty card from Voucherify */
  getMyLoyaltyCard?: Maybe<Voucherify_LoyaltyCard>;
  getMyNewsletterSubscriptions?: Maybe<Array<Maybe<ProfileNewsletterStatus>>>;
  /** <p>When retrieving an invoice, you’ll get a <strong>lines</strong> property containing the total count of line items and the first handful of those items. There is also a URL where you can retrieve the full (paginated) list of line items.</p> */
  Stripe_listInvoiceLines?: Maybe<Stripe_ListInvoiceLinesResponse>;
  /** <p>Returns a list of PaymentIntents.</p> */
  Stripe_listPaymentIntents?: Maybe<Stripe_ListPaymentIntentsResponse>;
  /** Get a NavigationData by ID */
  getNavigationData?: Maybe<NavigationData>;
  searchAssetIndex?: Maybe<AssetSearchResults>;
  searchTsStaticSiteIndex?: Maybe<TsStaticSiteSearchResults>;
  searchProfileIndex?: Maybe<ProfileSearchResults>;
  search?: Maybe<TsSearchableSearchResults>;
};


/** This query allow you to pass context to your queries */
export type WithContextTaxonomySuggestArgs = {
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  terms?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSON']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSort>>>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionArgs = {
  id: Scalars['ID'];
  version: Scalars['Int'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetContentVersionListArgs = {
  id: Scalars['ID'];
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetArgs = {
  _id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetAssetListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteArgs = {
  _id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetTsStaticSiteListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextReviewsIo_ListProductReviewsArgs = {
  sku?: InputMaybe<Scalars['String']>;
  mpn?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  per_page?: InputMaybe<Scalars['String']>;
  photos?: InputMaybe<Scalars['Int']>;
  verified_only?: InputMaybe<Scalars['Int']>;
  comments_only?: InputMaybe<Scalars['Int']>;
  minRating?: InputMaybe<Scalars['Int']>;
  include_unpublished_images?: InputMaybe<Scalars['Int']>;
  include_moderated?: InputMaybe<Scalars['Int']>;
  order_id?: InputMaybe<Scalars['String']>;
  min_date?: InputMaybe<Scalars['String']>;
  max_date?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetIndexedProductListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereStripeProductInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetMySubscriptionsArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetMyPayments_UnindexedArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['JSON']>;
  startingAfter?: InputMaybe<Scalars['String']>;
  endingBefore?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetMyPayments_IndexedArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereStripePaymentIntentInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetMyPaymentsArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Float']>;
  created?: InputMaybe<Scalars['JSON']>;
  startingAfter?: InputMaybe<Scalars['String']>;
  endingBefore?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetMyPaymentsIndexedArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereStripePaymentIntentInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProfileArgs = {
  _id: Scalars['ID'];
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetProfileListArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  onlyEnabled?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereProfileInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextStripe_ListProductsArgs = {
  active?: InputMaybe<Scalars['Boolean']>;
  created?: InputMaybe<Scalars['JSON']>;
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  shippable?: InputMaybe<Scalars['Boolean']>;
  starting_after?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextStripe_GetProductArgs = {
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  id: Scalars['String'];
};


/** This query allow you to pass context to your queries */
export type WithContextStripe_ListInvoiceLinesArgs = {
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  invoice: Scalars['String'];
  limit?: InputMaybe<Scalars['Int']>;
  starting_after?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextStripe_ListPaymentIntentsArgs = {
  created?: InputMaybe<Scalars['JSON']>;
  customer?: InputMaybe<Scalars['String']>;
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  starting_after?: InputMaybe<Scalars['String']>;
};


/** This query allow you to pass context to your queries */
export type WithContextGetNavigationDataArgs = {
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchAssetIndexArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereAssetInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchTsStaticSiteIndexArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereTsStaticSiteInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchProfileIndexArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  where?: InputMaybe<TsWhereProfileInput>;
};


/** This query allow you to pass context to your queries */
export type WithContextSearchArgs = {
  terms?: InputMaybe<Scalars['String']>;
  from?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<Scalars['JSONObject']>;
  sort?: InputMaybe<Array<InputMaybe<TsSearchSortInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
  shapeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  shapeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeNames?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  contentTypeIds?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  where?: InputMaybe<TsWhereInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Initiate upload process for asset(s) */
  uploadAssets?: Maybe<Array<Maybe<Upload>>>;
  /** Replace an asset file */
  replaceAsset?: Maybe<Upload>;
  /** Update Asset */
  updateAsset?: Maybe<UpdateAssetResult>;
  /** Create Asset */
  createAsset?: Maybe<CreateAssetResult>;
  /** Duplicate Asset */
  duplicateAsset?: Maybe<DuplicateAssetResult>;
  /** Delete Asset */
  deleteAsset?: Maybe<DeleteAssetResult>;
  /** Update TsStaticSite */
  updateTsStaticSite?: Maybe<UpdateTsStaticSiteResult>;
  /** Create TsStaticSite */
  createTsStaticSite?: Maybe<CreateTsStaticSiteResult>;
  /** Duplicate TsStaticSite */
  duplicateTsStaticSite?: Maybe<DuplicateTsStaticSiteResult>;
  /** Delete TsStaticSite */
  deleteTsStaticSite?: Maybe<DeleteTsStaticSiteResult>;
  /** Create a shipment with ShipEngine. */
  createShipment?: Maybe<ShipEngine_Label>;
  /** Upsert the signed-in user's profile, updating ShapeDB and Stripe */
  upsertMyProfile?: Maybe<Profile>;
  /** Upsert the signed-in user's Stripe customer */
  upsertMyCustomer?: Maybe<Stripe_Customer>;
  /** Delete the signed-in user's subscription in Stripe */
  deleteMySubscription?: Maybe<Stripe_Subscription>;
  /** Create a Stripe checkout session for the signed-in user */
  createMyCheckoutSession?: Maybe<Stripe_CheckoutSession>;
  /** Update Profile */
  updateProfile?: Maybe<UpdateProfileResult>;
  /** Create Profile */
  createProfile?: Maybe<CreateProfileResult>;
  /** Duplicate Profile */
  duplicateProfile?: Maybe<DuplicateProfileResult>;
  /** Delete Profile */
  deleteProfile?: Maybe<DeleteProfileResult>;
  /** Create an order in Voucherify */
  Voucherify_createOrder?: Maybe<Voucherify_Order>;
  Klaviyo_addMembers?: Maybe<Klaviyo_AddMembersResponse>;
  Klaviyo_removeMembers?: Maybe<Klaviyo_200Ok>;
  /** <p>Returns a list of Checkout Sessions.</p> */
  listCheckoutSessions?: Maybe<Stripe_ListCheckoutSessionsResponse>;
  ReviewsIo_createInvitation?: Maybe<ReviewsIo_CreateInvitationResponse>;
  /** Update NavigationData */
  updateNavigationData?: Maybe<UpdateNavigationDataResult>;
};


export type MutationUploadAssetsArgs = {
  projectId?: InputMaybe<Scalars['ID']>;
  files: Array<InputMaybe<TsFile>>;
};


export type MutationReplaceAssetArgs = {
  projectId?: InputMaybe<Scalars['ID']>;
  _id: Scalars['ID'];
  _version: Scalars['Int'];
  file: TsFile;
};


export type MutationUpdateAssetArgs = {
  input: UpdateAssetInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateAssetArgs = {
  input: CreateAssetInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateAssetArgs = {
  input: DuplicateAssetInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteAssetArgs = {
  input: DeleteAssetInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTsStaticSiteArgs = {
  input: UpdateTsStaticSiteInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateTsStaticSiteArgs = {
  input: CreateTsStaticSiteInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateTsStaticSiteArgs = {
  input: DuplicateTsStaticSiteInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteTsStaticSiteArgs = {
  input: DeleteTsStaticSiteInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
};


export type MutationCreateShipmentArgs = {
  shipment_id?: InputMaybe<Scalars['String']>;
  carrier_id?: InputMaybe<Scalars['String']>;
  service_code?: InputMaybe<Scalars['String']>;
  external_order_id?: InputMaybe<Scalars['String']>;
  external_shipment_id?: InputMaybe<Scalars['String']>;
  ship_date?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['String']>;
  modified_at?: InputMaybe<Scalars['String']>;
  shipment_status?: InputMaybe<Scalars['String']>;
  origin_type?: InputMaybe<Scalars['String']>;
  insurance_provider?: InputMaybe<Scalars['String']>;
  order_source_code?: InputMaybe<Scalars['String']>;
  packages?: InputMaybe<Array<InputMaybe<ShipEngine_PackageInput>>>;
  ship_to?: InputMaybe<ShipEngine_AddressInput>;
  ship_from?: InputMaybe<ShipEngine_AddressInput>;
};


export type MutationUpsertMyProfileArgs = {
  name?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  avatarId?: InputMaybe<Scalars['String']>;
};


export type MutationUpsertMyCustomerArgs = {
  name?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  address?: InputMaybe<UpsertMyCustomerPropertiesAddressPropertyInput>;
};


export type MutationDeleteMySubscriptionArgs = {
  subscriptionId: Scalars['String'];
};


export type MutationCreateMyCheckoutSessionArgs = {
  redirectUrl: Scalars['String'];
  mode: Scalars['String'];
  lineItems: Array<CreateMyCheckoutSessionPropertiesLineItemsItemsPropertyInput>;
};


export type MutationUpdateProfileArgs = {
  input: UpdateProfileInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


export type MutationCreateProfileArgs = {
  input: CreateProfileInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
};


export type MutationDuplicateProfileArgs = {
  input: DuplicateProfileInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};


export type MutationDeleteProfileArgs = {
  input: DeleteProfileInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
};


export type MutationVoucherify_CreateOrderArgs = {
  email?: InputMaybe<Scalars['String']>;
  amount?: InputMaybe<Scalars['Float']>;
  status?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<Voucherify_OrderItemInput>>>;
};


export type MutationKlaviyo_AddMembersArgs = {
  input?: InputMaybe<AddListMembersInput>;
  list_id: Scalars['String'];
};


export type MutationKlaviyo_RemoveMembersArgs = {
  input?: InputMaybe<Klaviyo_RemoveMembersPropertiesPropertyInput>;
  list_id: Scalars['String'];
};


export type MutationListCheckoutSessionsArgs = {
  ending_before?: InputMaybe<Scalars['String']>;
  expand?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  limit?: InputMaybe<Scalars['Int']>;
  payment_intent?: InputMaybe<Scalars['String']>;
  starting_after?: InputMaybe<Scalars['String']>;
  subscription?: InputMaybe<Scalars['String']>;
};


export type MutationReviewsIo_CreateInvitationArgs = {
  input?: InputMaybe<ReviewsIo_CreateInvitationPropertiesPropertyInput>;
};


export type MutationUpdateNavigationDataArgs = {
  input: UpdateNavigationDataInput;
  clientMutationId?: InputMaybe<Scalars['String']>;
  structure?: InputMaybe<Array<InputMaybe<ContentStructureInput>>>;
  locale?: InputMaybe<Scalars['String']>;
  enableLocaleFallback?: InputMaybe<Scalars['Boolean']>;
};

/** A project file stored on s3 */
export type Upload = {
  __typename?: 'Upload';
  uploadUrl?: Maybe<Scalars['ID']>;
  asset?: Maybe<Asset>;
};

export type TsFile = {
  name: Scalars['String'];
  type: Scalars['String'];
};

export type UpdateAssetResult = {
  __typename?: 'UpdateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** update Asset input */
export type UpdateAssetInput = {
  _id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
};

/** Describes a structural update to an array of data. */
export type ContentStructureInput = {
  /** A deep path to the array being updated (e.g. a.b[1].c). */
  path: Scalars['String'];
  /** An array where the indices represent the to index, and the values represent the from index.For example to transform ["a","b","c","d"] into ["c","a"], this value would be [2,0]. */
  structure?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type CreateAssetResult = {
  __typename?: 'CreateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** create Asset input */
export type CreateAssetInput = {
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  filename: Scalars['String'];
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  path: Scalars['String'];
  mimeType?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
};

export type DuplicateAssetResult = {
  __typename?: 'DuplicateAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Asset>;
};

/** duplicate Asset input */
export type DuplicateAssetInput = {
  _id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  filename?: InputMaybe<Scalars['String']>;
  caption?: InputMaybe<Scalars['JSON']>;
  credit?: InputMaybe<Scalars['JSON']>;
  path?: InputMaybe<Scalars['String']>;
  mimeType?: InputMaybe<Scalars['String']>;
  sourceUrl?: InputMaybe<Scalars['String']>;
  uploadStatus?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
  s3Key?: InputMaybe<Scalars['String']>;
};

export type DeleteAssetResult = {
  __typename?: 'DeleteAssetResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Asset input */
export type DeleteAssetInput = {
  _id: Scalars['ID'];
};

export type UpdateTsStaticSiteResult = {
  __typename?: 'UpdateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** update TsStaticSite input */
export type UpdateTsStaticSiteInput = {
  _id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  idKey?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
  templateHash?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type TsStaticSiteEnvironmentVariablesInput = {
  name?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type TsStaticSiteTriggersInput = {
  contentTypeId?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

export type CreateTsStaticSiteResult = {
  __typename?: 'CreateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** create TsStaticSite input */
export type CreateTsStaticSiteInput = {
  title: Scalars['String'];
  baseUrl?: InputMaybe<Scalars['String']>;
  provider?: Scalars['String'];
  idKey?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  destination: Scalars['String'];
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
  templateHash?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type DuplicateTsStaticSiteResult = {
  __typename?: 'DuplicateTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<TsStaticSite>;
};

/** duplicate TsStaticSite input */
export type DuplicateTsStaticSiteInput = {
  _id: Scalars['ID'];
  title?: InputMaybe<Scalars['String']>;
  baseUrl?: InputMaybe<Scalars['String']>;
  provider?: InputMaybe<Scalars['String']>;
  idKey?: InputMaybe<Scalars['String']>;
  secretKey?: InputMaybe<Scalars['String']>;
  destination?: InputMaybe<Scalars['String']>;
  privateAcl?: InputMaybe<Scalars['Boolean']>;
  environmentVariables?: InputMaybe<Array<InputMaybe<TsStaticSiteEnvironmentVariablesInput>>>;
  triggers?: InputMaybe<Array<InputMaybe<TsStaticSiteTriggersInput>>>;
  templateHash?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type DeleteTsStaticSiteResult = {
  __typename?: 'DeleteTsStaticSiteResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete TsStaticSite input */
export type DeleteTsStaticSiteInput = {
  _id: Scalars['ID'];
};

export type ShipEngine_PackageInput = {
  package_id?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  package_code?: InputMaybe<Scalars['String']>;
  tracking_number?: InputMaybe<Scalars['String']>;
  label_download?: InputMaybe<ShipEngine_LabelDownloadInput>;
  weight?: InputMaybe<ShipEngine_WeightInput>;
  dimensions?: InputMaybe<ShipEngine_DimensionsInput>;
};

export type ShipEngine_LabelDownloadInput = {
  href?: InputMaybe<Scalars['String']>;
  pdf?: InputMaybe<Scalars['String']>;
  png?: InputMaybe<Scalars['String']>;
  zpl?: InputMaybe<Scalars['String']>;
};

export type ShipEngine_WeightInput = {
  value?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type ShipEngine_DimensionsInput = {
  length?: InputMaybe<Scalars['Float']>;
  width?: InputMaybe<Scalars['Float']>;
  height?: InputMaybe<Scalars['Float']>;
  unit?: InputMaybe<Scalars['String']>;
};

export type ShipEngine_AddressInput = {
  name?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  address_line1?: InputMaybe<Scalars['String']>;
  address_line2?: InputMaybe<Scalars['String']>;
  city_locality?: InputMaybe<Scalars['String']>;
  state_province?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  address_residential_indicator?: InputMaybe<Scalars['String']>;
};

export type UpsertMyCustomerPropertiesAddressPropertyInput = {
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  postal_code?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
};

export type Stripe_CheckoutSession = {
  __typename?: 'Stripe_CheckoutSession';
  after_expiration?: Maybe<Stripe_PaymentPagesCheckoutSessionAfterExpiration>;
  /** Enables user redeemable promotion codes. */
  allow_promotion_codes?: Maybe<Scalars['Boolean']>;
  /** Total of all items before discounts or taxes are applied. */
  amount_subtotal?: Maybe<Scalars['Int']>;
  /** Total of all items after discounts and taxes are applied. */
  amount_total?: Maybe<Scalars['Int']>;
  automatic_tax?: Maybe<Stripe_PaymentPagesCheckoutSessionAutomaticTax>;
  /** Describes whether Checkout should collect the customer's billing address. */
  billing_address_collection?: Maybe<Stripe_CheckoutSessionBillingAddressCollectionProperty>;
  /** The URL the customer will be directed to if they decide to cancel payment and return to your website. */
  cancel_url?: Maybe<Scalars['String']>;
  /**
   * A unique string to reference the Checkout Session. This can be a
   * customer ID, a cart ID, or similar, and can be used to reconcile the
   * Session with your internal systems.
   */
  client_reference_id?: Maybe<Scalars['String']>;
  consent?: Maybe<Stripe_PaymentPagesCheckoutSessionConsent>;
  consent_collection?: Maybe<Stripe_PaymentPagesCheckoutSessionConsentCollection>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
  customer?: Maybe<Scalars['String']>;
  /** Configure whether a Checkout Session creates a Customer when the Checkout Session completes. */
  customer_creation?: Maybe<Stripe_CheckoutSessionCustomerCreationProperty>;
  customer_details?: Maybe<Stripe_PaymentPagesCheckoutSessionCustomerDetails>;
  /**
   * If provided, this value will be used when the Customer object is created.
   * If not provided, customers will be asked to enter their email address.
   * Use this parameter to prefill customer data if you already have an email
   * on file. To access information about the customer once the payment flow is
   * complete, use the `customer` attribute.
   */
  customer_email?: Maybe<Scalars['String']>;
  /** The timestamp at which the Checkout Session will expire. */
  expires_at?: Maybe<Scalars['Int']>;
  /**
   * Unique identifier for the object. Used to pass to `redirectToCheckout`
   * in Stripe.js.
   */
  id?: Maybe<Scalars['String']>;
  /** The line items purchased by the customer. */
  line_items?: Maybe<Stripe_CheckoutSessionLineItemsProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** The IETF language tag of the locale Checkout is displayed in. If blank or `auto`, the browser's locale is used. */
  locale?: Maybe<Stripe_CheckoutSessionLocaleProperty>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** The mode of the Checkout Session. */
  mode?: Maybe<Stripe_CheckoutSessionModeProperty>;
  object?: Maybe<Scalars['String']>;
  payment_intent?: Maybe<Stripe_CheckoutSessionPaymentIntentProperty>;
  payment_link?: Maybe<Stripe_CheckoutSessionPaymentLinkProperty>;
  payment_method_options?: Maybe<Stripe_CheckoutSessionPaymentMethodOptions>;
  /**
   * A list of the types of payment methods (e.g. card) this Checkout
   * Session is allowed to accept.
   */
  payment_method_types?: Maybe<Array<Maybe<Scalars['String']>>>;
  /**
   * The payment status of the Checkout Session, one of `paid`, `unpaid`, or `no_payment_required`.
   * You can use this value to decide when to fulfill your customer's order.
   */
  payment_status?: Maybe<Stripe_CheckoutSessionPaymentStatusProperty>;
  phone_number_collection?: Maybe<Stripe_PaymentPagesCheckoutSessionPhoneNumberCollection>;
  /** The ID of the original expired Checkout Session that triggered the recovery flow. */
  recovered_from?: Maybe<Scalars['String']>;
  setup_intent?: Maybe<Stripe_CheckoutSessionSetupIntentProperty>;
  shipping?: Maybe<Stripe_Shipping>;
  shipping_address_collection?: Maybe<Stripe_PaymentPagesCheckoutSessionShippingAddressCollection>;
  /** The shipping rate options applied to this Session. */
  shipping_options?: Maybe<Array<Maybe<Stripe_PaymentPagesCheckoutSessionShippingOption>>>;
  shipping_rate?: Maybe<Stripe_CheckoutSessionShippingRateProperty>;
  /** The status of the Checkout Session, one of `open`, `complete`, or `expired`. */
  status?: Maybe<Stripe_CheckoutSessionStatusProperty>;
  /**
   * Describes the type of transaction being performed by Checkout in order to customize
   * relevant text on the page, such as the submit button. `submit_type` can only be
   * specified on Checkout Sessions in `payment` mode, but not Checkout Sessions
   * in `subscription` or `setup` mode.
   */
  submit_type?: Maybe<Stripe_CheckoutSessionSubmitTypeProperty>;
  subscription?: Maybe<Stripe_CheckoutSessionSubscriptionProperty>;
  /**
   * The URL the customer will be directed to after the payment or
   * subscription creation is successful.
   */
  success_url?: Maybe<Scalars['String']>;
  tax_id_collection?: Maybe<Stripe_PaymentPagesCheckoutSessionTaxIdCollection>;
  total_details?: Maybe<Stripe_PaymentPagesCheckoutSessionTotalDetails>;
  /** The URL to the Checkout Session. Redirect customers to this URL to take them to Checkout. If you’re using [Custom Domains](https://stripe.com/docs/payments/checkout/custom-domains), the URL will use your subdomain. Otherwise, it’ll use `checkout.stripe.com.` */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentPagesCheckoutSessionAfterExpiration = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionAfterExpiration';
  recovery?: Maybe<Stripe_PaymentPagesCheckoutSessionAfterExpirationRecovery>;
};

export type Stripe_PaymentPagesCheckoutSessionAfterExpirationRecovery = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionAfterExpirationRecovery';
  /** Enables user redeemable promotion codes on the recovered Checkout Sessions. Defaults to `false` */
  allow_promotion_codes?: Maybe<Scalars['Boolean']>;
  /**
   * If `true`, a recovery url will be generated to recover this Checkout Session if it
   * expires before a transaction is completed. It will be attached to the
   * Checkout Session object upon expiration.
   */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The timestamp at which the recovery URL will expire. */
  expires_at?: Maybe<Scalars['Int']>;
  /** URL that creates a new Checkout Session when clicked that is a copy of this expired Checkout Session */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentPagesCheckoutSessionAutomaticTax = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionAutomaticTax';
  /** Indicates whether automatic tax is enabled for the session */
  enabled?: Maybe<Scalars['Boolean']>;
  /** The status of the most recent automated tax calculation for this session. */
  status?: Maybe<Stripe_PaymentPagesCheckoutSessionAutomaticTaxStatusProperty>;
};

export enum Stripe_PaymentPagesCheckoutSessionAutomaticTaxStatusProperty {
  Complete = 'complete',
  Failed = 'failed',
  RequiresLocationInputs = 'requires_location_inputs'
}

export enum Stripe_CheckoutSessionBillingAddressCollectionProperty {
  Auto = 'auto',
  Required = 'required'
}

export type Stripe_PaymentPagesCheckoutSessionConsent = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionConsent';
  /**
   * If `opt_in`, the customer consents to receiving promotional communications
   * from the merchant about this Checkout Session.
   */
  promotions?: Maybe<Stripe_PaymentPagesCheckoutSessionConsentPromotionsProperty>;
};

export enum Stripe_PaymentPagesCheckoutSessionConsentPromotionsProperty {
  OptIn = 'opt_in',
  OptOut = 'opt_out'
}

export type Stripe_PaymentPagesCheckoutSessionConsentCollection = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionConsentCollection';
  /**
   * If set to `auto`, enables the collection of customer consent for promotional communications. The Checkout
   * Session will determine whether to display an option to opt into promotional communication
   * from the merchant depending on the customer's locale. Only available to US merchants.
   */
  promotions?: Maybe<Stripe_PaymentPagesCheckoutSessionConsentCollectionPromotionsProperty>;
};

export enum Stripe_PaymentPagesCheckoutSessionConsentCollectionPromotionsProperty {
  Auto = 'auto'
}

export enum Stripe_CheckoutSessionCustomerCreationProperty {
  Always = 'always',
  IfRequired = 'if_required'
}

export type Stripe_PaymentPagesCheckoutSessionCustomerDetails = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionCustomerDetails';
  address?: Maybe<Stripe_Address>;
  /**
   * The email associated with the Customer, if one exists, on the Checkout Session at the time of checkout or at time of session expiry.
   * Otherwise, if the customer has consented to promotional content, this value is the most recent valid email provided by the customer on the Checkout form.
   */
  email?: Maybe<Scalars['String']>;
  /** The customer's name at the time of checkout. Note: This property is populated only for sessions on or after March 30, 2022. */
  name?: Maybe<Scalars['String']>;
  /** The customer's phone number at the time of checkout */
  phone?: Maybe<Scalars['String']>;
  /** The customer’s tax exempt status at time of checkout. */
  tax_exempt?: Maybe<Stripe_PaymentPagesCheckoutSessionCustomerDetailsTaxExemptProperty>;
  /** The customer’s tax IDs at time of checkout. */
  tax_ids?: Maybe<Array<Maybe<Stripe_PaymentPagesCheckoutSessionTaxId>>>;
};

export enum Stripe_PaymentPagesCheckoutSessionCustomerDetailsTaxExemptProperty {
  Exempt = 'exempt',
  None = 'none',
  Reverse = 'reverse'
}

export type Stripe_PaymentPagesCheckoutSessionTaxId = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionTaxId';
  /** The type of the tax ID, one of `eu_vat`, `br_cnpj`, `br_cpf`, `gb_vat`, `nz_gst`, `au_abn`, `au_arn`, `in_gst`, `no_vat`, `za_vat`, `ch_vat`, `mx_rfc`, `sg_uen`, `ru_inn`, `ru_kpp`, `ca_bn`, `hk_br`, `es_cif`, `tw_vat`, `th_vat`, `jp_cn`, `jp_rn`, `li_uid`, `my_itn`, `us_ein`, `kr_brn`, `ca_qst`, `ca_gst_hst`, `ca_pst_bc`, `ca_pst_mb`, `ca_pst_sk`, `my_sst`, `sg_gst`, `ae_trn`, `cl_tin`, `sa_vat`, `id_npwp`, `my_frp`, `il_vat`, `ge_vat`, `ua_vat`, `is_vat`, `bg_uic`, `hu_tin`, `si_tin`, or `unknown` */
  type?: Maybe<Stripe_PaymentPagesCheckoutSessionTaxIdTypeProperty>;
  /** The value of the tax ID. */
  value?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentPagesCheckoutSessionTaxIdTypeProperty {
  AeTrn = 'ae_trn',
  AuAbn = 'au_abn',
  AuArn = 'au_arn',
  BgUic = 'bg_uic',
  BrCnpj = 'br_cnpj',
  BrCpf = 'br_cpf',
  CaBn = 'ca_bn',
  CaGstHst = 'ca_gst_hst',
  CaPstBc = 'ca_pst_bc',
  CaPstMb = 'ca_pst_mb',
  CaPstSk = 'ca_pst_sk',
  CaQst = 'ca_qst',
  ChVat = 'ch_vat',
  ClTin = 'cl_tin',
  EsCif = 'es_cif',
  EuVat = 'eu_vat',
  GbVat = 'gb_vat',
  GeVat = 'ge_vat',
  HkBr = 'hk_br',
  HuTin = 'hu_tin',
  IdNpwp = 'id_npwp',
  IlVat = 'il_vat',
  InGst = 'in_gst',
  IsVat = 'is_vat',
  JpCn = 'jp_cn',
  JpRn = 'jp_rn',
  KrBrn = 'kr_brn',
  LiUid = 'li_uid',
  MxRfc = 'mx_rfc',
  MyFrp = 'my_frp',
  MyItn = 'my_itn',
  MySst = 'my_sst',
  NoVat = 'no_vat',
  NzGst = 'nz_gst',
  RuInn = 'ru_inn',
  RuKpp = 'ru_kpp',
  SaVat = 'sa_vat',
  SgGst = 'sg_gst',
  SgUen = 'sg_uen',
  SiTin = 'si_tin',
  ThVat = 'th_vat',
  TwVat = 'tw_vat',
  UaVat = 'ua_vat',
  Unknown = 'unknown',
  UsEin = 'us_ein',
  ZaVat = 'za_vat'
}

/** The line items purchased by the customer. */
export type Stripe_CheckoutSessionLineItemsProperty = {
  __typename?: 'Stripe_CheckoutSessionLineItemsProperty';
  /** Details about each object. */
  data: Array<Stripe_Item>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_CheckoutSessionLineItemsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_CheckoutSessionLineItemsObjectProperty {
  List = 'list'
}

export enum Stripe_CheckoutSessionLocaleProperty {
  Auto = 'auto',
  Bg = 'bg',
  Cs = 'cs',
  Da = 'da',
  De = 'de',
  El = 'el',
  En = 'en',
  EnDashgb = 'enDASHGB',
  Es = 'es',
  EsDash419 = 'esDASH419',
  Et = 'et',
  Fi = 'fi',
  Fil = 'fil',
  Fr = 'fr',
  FrDashca = 'frDASHCA',
  Hr = 'hr',
  Hu = 'hu',
  Id = 'id',
  It = 'it',
  Ja = 'ja',
  Ko = 'ko',
  Lt = 'lt',
  Lv = 'lv',
  Ms = 'ms',
  Mt = 'mt',
  Nb = 'nb',
  Nl = 'nl',
  Pl = 'pl',
  Pt = 'pt',
  PtDashbr = 'ptDASHBR',
  Ro = 'ro',
  Ru = 'ru',
  Sk = 'sk',
  Sl = 'sl',
  Sv = 'sv',
  Th = 'th',
  Tr = 'tr',
  Vi = 'vi',
  Zh = 'zh',
  ZhDashhk = 'zhDASHHK',
  ZhDashtw = 'zhDASHTW'
}

export enum Stripe_CheckoutSessionModeProperty {
  Payment = 'payment',
  Setup = 'setup',
  Subscription = 'subscription'
}

export type Stripe_CheckoutSessionPaymentIntentProperty = WrappedString | Stripe_PaymentIntent;

export type Stripe_CheckoutSessionPaymentLinkProperty = WrappedString | Stripe_PaymentLink;

export type Stripe_PaymentLink = {
  __typename?: 'Stripe_PaymentLink';
  /** Whether the payment link's `url` is active. If `false`, customers visiting the URL will be shown a page saying that the link has been deactivated. */
  active?: Maybe<Scalars['Boolean']>;
  after_completion?: Maybe<Stripe_PaymentLinksResourceAfterCompletion>;
  /** Whether user redeemable promotion codes are enabled. */
  allow_promotion_codes?: Maybe<Scalars['Boolean']>;
  /** The amount of the application fee (if any) that will be requested to be applied to the payment and transferred to the application owner's Stripe account. */
  application_fee_amount?: Maybe<Scalars['Int']>;
  /** This represents the percentage of the subscription invoice subtotal that will be transferred to the application owner's Stripe account. */
  application_fee_percent?: Maybe<Scalars['Float']>;
  automatic_tax?: Maybe<Stripe_PaymentLinksResourceAutomaticTax>;
  /** Configuration for collecting the customer's billing address. */
  billing_address_collection?: Maybe<Stripe_PaymentLinkBillingAddressCollectionProperty>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** The line items representing what is being sold. */
  line_items?: Maybe<Stripe_PaymentLinkLineItemsProperty>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_PaymentLinkObjectProperty>;
  on_behalf_of?: Maybe<Stripe_PaymentLinkOnBehalfOfProperty>;
  /** The list of payment method types that customers can use. When `null`, Stripe will dynamically show relevant payment methods you've enabled in your [payment method settings](https://dashboard.stripe.com/settings/payment_methods). */
  payment_method_types?: Maybe<Array<Maybe<Stripe_PaymentLinkPaymentMethodTypesProperty>>>;
  phone_number_collection?: Maybe<Stripe_PaymentLinksResourcePhoneNumberCollection>;
  shipping_address_collection?: Maybe<Stripe_PaymentLinksResourceShippingAddressCollection>;
  subscription_data?: Maybe<Stripe_PaymentLinksResourceSubscriptionData>;
  transfer_data?: Maybe<Stripe_PaymentLinksResourceTransferData>;
  /** The public URL that can be shared with customers. */
  url?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentLinksResourceAfterCompletion = {
  __typename?: 'Stripe_PaymentLinksResourceAfterCompletion';
  hosted_confirmation?: Maybe<Stripe_PaymentLinksResourceCompletionBehaviorConfirmationPage>;
  redirect?: Maybe<Stripe_PaymentLinksResourceCompletionBehaviorRedirect>;
  /** The specified behavior after the purchase is complete. */
  type?: Maybe<Stripe_PaymentLinksResourceAfterCompletionTypeProperty>;
};

export type Stripe_PaymentLinksResourceCompletionBehaviorConfirmationPage = {
  __typename?: 'Stripe_PaymentLinksResourceCompletionBehaviorConfirmationPage';
  /** The custom message that is displayed to the customer after the purchase is complete. */
  custom_message?: Maybe<Scalars['String']>;
};

export type Stripe_PaymentLinksResourceCompletionBehaviorRedirect = {
  __typename?: 'Stripe_PaymentLinksResourceCompletionBehaviorRedirect';
  /** The URL the customer will be redirected to after the purchase is complete. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_PaymentLinksResourceAfterCompletionTypeProperty {
  HostedConfirmation = 'hosted_confirmation',
  Redirect = 'redirect'
}

export type Stripe_PaymentLinksResourceAutomaticTax = {
  __typename?: 'Stripe_PaymentLinksResourceAutomaticTax';
  /** If `true`, tax will be calculated automatically using the customer's location. */
  enabled?: Maybe<Scalars['Boolean']>;
};

export enum Stripe_PaymentLinkBillingAddressCollectionProperty {
  Auto = 'auto',
  Required = 'required'
}

/** The line items representing what is being sold. */
export type Stripe_PaymentLinkLineItemsProperty = {
  __typename?: 'Stripe_PaymentLinkLineItemsProperty';
  /** Details about each object. */
  data: Array<Stripe_Item>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more: Scalars['Boolean'];
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object: Stripe_PaymentLinkLineItemsObjectProperty;
  /** The URL where this list can be accessed. */
  url: Scalars['String'];
};

export enum Stripe_PaymentLinkLineItemsObjectProperty {
  List = 'list'
}

export enum Stripe_PaymentLinkObjectProperty {
  PaymentLink = 'payment_link'
}

export type Stripe_PaymentLinkOnBehalfOfProperty = WrappedString | Stripe_Account;

export enum Stripe_PaymentLinkPaymentMethodTypesProperty {
  Card = 'card'
}

export type Stripe_PaymentLinksResourcePhoneNumberCollection = {
  __typename?: 'Stripe_PaymentLinksResourcePhoneNumberCollection';
  /** If `true`, a phone number will be collected during checkout. */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type Stripe_PaymentLinksResourceShippingAddressCollection = {
  __typename?: 'Stripe_PaymentLinksResourceShippingAddressCollection';
  /** An array of two-letter ISO country codes representing which countries Checkout should provide as options for shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`. */
  allowed_countries?: Maybe<Array<Maybe<Stripe_PaymentLinksResourceShippingAddressCollectionAllowedCountriesProperty>>>;
};

export enum Stripe_PaymentLinksResourceShippingAddressCollectionAllowedCountriesProperty {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cv = 'CV',
  Cw = 'CW',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sz = 'SZ',
  Ta = 'TA',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
  Zz = 'ZZ'
}

export type Stripe_PaymentLinksResourceSubscriptionData = {
  __typename?: 'Stripe_PaymentLinksResourceSubscriptionData';
  /** Integer representing the number of trial period days before the customer is charged for the first time. */
  trial_period_days?: Maybe<Scalars['Int']>;
};

export type Stripe_PaymentLinksResourceTransferData = {
  __typename?: 'Stripe_PaymentLinksResourceTransferData';
  /** The amount in %s that will be transferred to the destination account. By default, the entire amount is transferred to the destination. */
  amount?: Maybe<Scalars['Int']>;
  destination?: Maybe<Stripe_PaymentLinksResourceTransferDataDestinationProperty>;
};

export type Stripe_PaymentLinksResourceTransferDataDestinationProperty = WrappedString | Stripe_Account;

export type Stripe_CheckoutSessionPaymentMethodOptions = {
  __typename?: 'Stripe_CheckoutSessionPaymentMethodOptions';
  acss_debit?: Maybe<Stripe_CheckoutAcssDebitPaymentMethodOptions>;
  boleto?: Maybe<Stripe_CheckoutBoletoPaymentMethodOptions>;
  konbini?: Maybe<Stripe_CheckoutKonbiniPaymentMethodOptions>;
  oxxo?: Maybe<Stripe_CheckoutOxxoPaymentMethodOptions>;
  us_bank_account?: Maybe<Stripe_CheckoutUsBankAccountPaymentMethodOptions>;
};

export type Stripe_CheckoutAcssDebitPaymentMethodOptions = {
  __typename?: 'Stripe_CheckoutAcssDebitPaymentMethodOptions';
  /** Currency supported by the bank account. Returned when the Session is in `setup` mode. */
  currency?: Maybe<Stripe_CheckoutAcssDebitPaymentMethodOptionsCurrencyProperty>;
  mandate_options?: Maybe<Stripe_CheckoutAcssDebitMandateOptions>;
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_CheckoutAcssDebitPaymentMethodOptionsVerificationMethodProperty>;
};

export enum Stripe_CheckoutAcssDebitPaymentMethodOptionsCurrencyProperty {
  Cad = 'cad',
  Usd = 'usd'
}

export type Stripe_CheckoutAcssDebitMandateOptions = {
  __typename?: 'Stripe_CheckoutAcssDebitMandateOptions';
  /** A URL for custom mandate text */
  custom_mandate_url?: Maybe<Scalars['String']>;
  /** List of Stripe products where this mandate can be selected automatically. Returned when the Session is in `setup` mode. */
  default_for?: Maybe<Array<Maybe<Stripe_CheckoutAcssDebitMandateOptionsDefaultForProperty>>>;
  /** Description of the interval. Only required if the 'payment_schedule' parameter is 'interval' or 'combined'. */
  interval_description?: Maybe<Scalars['String']>;
  /** Payment schedule for the mandate. */
  payment_schedule?: Maybe<Stripe_CheckoutAcssDebitMandateOptionsPaymentScheduleProperty>;
  /** Transaction type of the mandate. */
  transaction_type?: Maybe<Stripe_CheckoutAcssDebitMandateOptionsTransactionTypeProperty>;
};

export enum Stripe_CheckoutAcssDebitMandateOptionsDefaultForProperty {
  Invoice = 'invoice',
  Subscription = 'subscription'
}

export enum Stripe_CheckoutAcssDebitMandateOptionsPaymentScheduleProperty {
  Combined = 'combined',
  Interval = 'interval',
  Sporadic = 'sporadic'
}

export enum Stripe_CheckoutAcssDebitMandateOptionsTransactionTypeProperty {
  Business = 'business',
  Personal = 'personal'
}

export enum Stripe_CheckoutAcssDebitPaymentMethodOptionsVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant',
  Microdeposits = 'microdeposits'
}

export type Stripe_CheckoutBoletoPaymentMethodOptions = {
  __typename?: 'Stripe_CheckoutBoletoPaymentMethodOptions';
  /** The number of calendar days before a Boleto voucher expires. For example, if you create a Boleto voucher on Monday and you set expires_after_days to 2, the Boleto voucher will expire on Wednesday at 23:59 America/Sao_Paulo time. */
  expires_after_days?: Maybe<Scalars['Int']>;
};

export type Stripe_CheckoutKonbiniPaymentMethodOptions = {
  __typename?: 'Stripe_CheckoutKonbiniPaymentMethodOptions';
  /** The number of calendar days (between 1 and 60) after which Konbini payment instructions will expire. For example, if a PaymentIntent is confirmed with Konbini and `expires_after_days` set to 2 on Monday JST, the instructions will expire on Wednesday 23:59:59 JST. */
  expires_after_days?: Maybe<Scalars['Int']>;
};

export type Stripe_CheckoutOxxoPaymentMethodOptions = {
  __typename?: 'Stripe_CheckoutOxxoPaymentMethodOptions';
  /** The number of calendar days before an OXXO invoice expires. For example, if you create an OXXO invoice on Monday and you set expires_after_days to 2, the OXXO invoice will expire on Wednesday at 23:59 America/Mexico_City time. */
  expires_after_days?: Maybe<Scalars['Int']>;
};

export type Stripe_CheckoutUsBankAccountPaymentMethodOptions = {
  __typename?: 'Stripe_CheckoutUsBankAccountPaymentMethodOptions';
  /** Bank account verification method. */
  verification_method?: Maybe<Stripe_CheckoutUsBankAccountPaymentMethodOptionsVerificationMethodProperty>;
};

export enum Stripe_CheckoutUsBankAccountPaymentMethodOptionsVerificationMethodProperty {
  Automatic = 'automatic',
  Instant = 'instant'
}

export enum Stripe_CheckoutSessionPaymentStatusProperty {
  NoPaymentRequired = 'no_payment_required',
  Paid = 'paid',
  Unpaid = 'unpaid'
}

export type Stripe_PaymentPagesCheckoutSessionPhoneNumberCollection = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionPhoneNumberCollection';
  /** Indicates whether phone number collection is enabled for the session */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type Stripe_CheckoutSessionSetupIntentProperty = WrappedString | Stripe_SetupIntent;

export type Stripe_PaymentPagesCheckoutSessionShippingAddressCollection = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionShippingAddressCollection';
  /**
   * An array of two-letter ISO country codes representing which countries Checkout should provide as options for
   * shipping locations. Unsupported country codes: `AS, CX, CC, CU, HM, IR, KP, MH, FM, NF, MP, PW, SD, SY, UM, VI`.
   */
  allowed_countries?: Maybe<Array<Maybe<Stripe_PaymentPagesCheckoutSessionShippingAddressCollectionAllowedCountriesProperty>>>;
};

export enum Stripe_PaymentPagesCheckoutSessionShippingAddressCollectionAllowedCountriesProperty {
  Ac = 'AC',
  Ad = 'AD',
  Ae = 'AE',
  Af = 'AF',
  Ag = 'AG',
  Ai = 'AI',
  Al = 'AL',
  Am = 'AM',
  Ao = 'AO',
  Aq = 'AQ',
  Ar = 'AR',
  At = 'AT',
  Au = 'AU',
  Aw = 'AW',
  Ax = 'AX',
  Az = 'AZ',
  Ba = 'BA',
  Bb = 'BB',
  Bd = 'BD',
  Be = 'BE',
  Bf = 'BF',
  Bg = 'BG',
  Bh = 'BH',
  Bi = 'BI',
  Bj = 'BJ',
  Bl = 'BL',
  Bm = 'BM',
  Bn = 'BN',
  Bo = 'BO',
  Bq = 'BQ',
  Br = 'BR',
  Bs = 'BS',
  Bt = 'BT',
  Bv = 'BV',
  Bw = 'BW',
  By = 'BY',
  Bz = 'BZ',
  Ca = 'CA',
  Cd = 'CD',
  Cf = 'CF',
  Cg = 'CG',
  Ch = 'CH',
  Ci = 'CI',
  Ck = 'CK',
  Cl = 'CL',
  Cm = 'CM',
  Cn = 'CN',
  Co = 'CO',
  Cr = 'CR',
  Cv = 'CV',
  Cw = 'CW',
  Cy = 'CY',
  Cz = 'CZ',
  De = 'DE',
  Dj = 'DJ',
  Dk = 'DK',
  Dm = 'DM',
  Do = 'DO',
  Dz = 'DZ',
  Ec = 'EC',
  Ee = 'EE',
  Eg = 'EG',
  Eh = 'EH',
  Er = 'ER',
  Es = 'ES',
  Et = 'ET',
  Fi = 'FI',
  Fj = 'FJ',
  Fk = 'FK',
  Fo = 'FO',
  Fr = 'FR',
  Ga = 'GA',
  Gb = 'GB',
  Gd = 'GD',
  Ge = 'GE',
  Gf = 'GF',
  Gg = 'GG',
  Gh = 'GH',
  Gi = 'GI',
  Gl = 'GL',
  Gm = 'GM',
  Gn = 'GN',
  Gp = 'GP',
  Gq = 'GQ',
  Gr = 'GR',
  Gs = 'GS',
  Gt = 'GT',
  Gu = 'GU',
  Gw = 'GW',
  Gy = 'GY',
  Hk = 'HK',
  Hn = 'HN',
  Hr = 'HR',
  Ht = 'HT',
  Hu = 'HU',
  Id = 'ID',
  Ie = 'IE',
  Il = 'IL',
  Im = 'IM',
  In = 'IN',
  Io = 'IO',
  Iq = 'IQ',
  Is = 'IS',
  It = 'IT',
  Je = 'JE',
  Jm = 'JM',
  Jo = 'JO',
  Jp = 'JP',
  Ke = 'KE',
  Kg = 'KG',
  Kh = 'KH',
  Ki = 'KI',
  Km = 'KM',
  Kn = 'KN',
  Kr = 'KR',
  Kw = 'KW',
  Ky = 'KY',
  Kz = 'KZ',
  La = 'LA',
  Lb = 'LB',
  Lc = 'LC',
  Li = 'LI',
  Lk = 'LK',
  Lr = 'LR',
  Ls = 'LS',
  Lt = 'LT',
  Lu = 'LU',
  Lv = 'LV',
  Ly = 'LY',
  Ma = 'MA',
  Mc = 'MC',
  Md = 'MD',
  Me = 'ME',
  Mf = 'MF',
  Mg = 'MG',
  Mk = 'MK',
  Ml = 'ML',
  Mm = 'MM',
  Mn = 'MN',
  Mo = 'MO',
  Mq = 'MQ',
  Mr = 'MR',
  Ms = 'MS',
  Mt = 'MT',
  Mu = 'MU',
  Mv = 'MV',
  Mw = 'MW',
  Mx = 'MX',
  My = 'MY',
  Mz = 'MZ',
  Na = 'NA',
  Nc = 'NC',
  Ne = 'NE',
  Ng = 'NG',
  Ni = 'NI',
  Nl = 'NL',
  No = 'NO',
  Np = 'NP',
  Nr = 'NR',
  Nu = 'NU',
  Nz = 'NZ',
  Om = 'OM',
  Pa = 'PA',
  Pe = 'PE',
  Pf = 'PF',
  Pg = 'PG',
  Ph = 'PH',
  Pk = 'PK',
  Pl = 'PL',
  Pm = 'PM',
  Pn = 'PN',
  Pr = 'PR',
  Ps = 'PS',
  Pt = 'PT',
  Py = 'PY',
  Qa = 'QA',
  Re = 'RE',
  Ro = 'RO',
  Rs = 'RS',
  Ru = 'RU',
  Rw = 'RW',
  Sa = 'SA',
  Sb = 'SB',
  Sc = 'SC',
  Se = 'SE',
  Sg = 'SG',
  Sh = 'SH',
  Si = 'SI',
  Sj = 'SJ',
  Sk = 'SK',
  Sl = 'SL',
  Sm = 'SM',
  Sn = 'SN',
  So = 'SO',
  Sr = 'SR',
  Ss = 'SS',
  St = 'ST',
  Sv = 'SV',
  Sx = 'SX',
  Sz = 'SZ',
  Ta = 'TA',
  Tc = 'TC',
  Td = 'TD',
  Tf = 'TF',
  Tg = 'TG',
  Th = 'TH',
  Tj = 'TJ',
  Tk = 'TK',
  Tl = 'TL',
  Tm = 'TM',
  Tn = 'TN',
  To = 'TO',
  Tr = 'TR',
  Tt = 'TT',
  Tv = 'TV',
  Tw = 'TW',
  Tz = 'TZ',
  Ua = 'UA',
  Ug = 'UG',
  Us = 'US',
  Uy = 'UY',
  Uz = 'UZ',
  Va = 'VA',
  Vc = 'VC',
  Ve = 'VE',
  Vg = 'VG',
  Vn = 'VN',
  Vu = 'VU',
  Wf = 'WF',
  Ws = 'WS',
  Xk = 'XK',
  Ye = 'YE',
  Yt = 'YT',
  Za = 'ZA',
  Zm = 'ZM',
  Zw = 'ZW',
  Zz = 'ZZ'
}

export type Stripe_PaymentPagesCheckoutSessionShippingOption = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionShippingOption';
  /** A non-negative integer in cents representing how much to charge. */
  shipping_amount?: Maybe<Scalars['Int']>;
  shipping_rate?: Maybe<Stripe_PaymentPagesCheckoutSessionShippingOptionShippingRateProperty>;
};

export type Stripe_PaymentPagesCheckoutSessionShippingOptionShippingRateProperty = WrappedString | Stripe_ShippingRate;

export type Stripe_ShippingRate = {
  __typename?: 'Stripe_ShippingRate';
  /** Whether the shipping rate can be used for new purchases. Defaults to `true`. */
  active?: Maybe<Scalars['Boolean']>;
  /** Time at which the object was created. Measured in seconds since the Unix epoch. */
  created?: Maybe<Scalars['Int']>;
  delivery_estimate?: Maybe<Stripe_ShippingRateDeliveryEstimate>;
  /** The name of the shipping rate, meant to be displayable to the customer. This will appear on CheckoutSessions. */
  display_name?: Maybe<Scalars['String']>;
  fixed_amount?: Maybe<Stripe_ShippingRateFixedAmount>;
  /** Unique identifier for the object. */
  id?: Maybe<Scalars['String']>;
  /** Has the value `true` if the object exists in live mode or the value `false` if the object exists in test mode. */
  livemode?: Maybe<Scalars['Boolean']>;
  /** Set of [key-value pairs](https://stripe.com/docs/api/metadata) that you can attach to an object. This can be useful for storing additional information about the object in a structured format. */
  metadata?: Maybe<Scalars['JSONObject']>;
  /** String representing the object's type. Objects of the same type share the same value. */
  object?: Maybe<Stripe_ShippingRateObjectProperty>;
  /** Specifies whether the rate is considered inclusive of taxes or exclusive of taxes. One of `inclusive`, `exclusive`, or `unspecified`. */
  tax_behavior?: Maybe<Stripe_ShippingRateTaxBehaviorProperty>;
  tax_code?: Maybe<Stripe_ShippingRateTaxCodeProperty>;
  /** The type of calculation to use on the shipping rate. Can only be `fixed_amount` for now. */
  type?: Maybe<Stripe_ShippingRateTypeProperty>;
};

export type Stripe_ShippingRateDeliveryEstimate = {
  __typename?: 'Stripe_ShippingRateDeliveryEstimate';
  maximum?: Maybe<Stripe_ShippingRateDeliveryEstimateBound>;
  minimum?: Maybe<Stripe_ShippingRateDeliveryEstimateBound>;
};

export type Stripe_ShippingRateDeliveryEstimateBound = {
  __typename?: 'Stripe_ShippingRateDeliveryEstimateBound';
  /** A unit of time. */
  unit?: Maybe<Stripe_ShippingRateDeliveryEstimateBoundUnitProperty>;
  /** Must be greater than 0. */
  value?: Maybe<Scalars['Int']>;
};

export enum Stripe_ShippingRateDeliveryEstimateBoundUnitProperty {
  BusinessDay = 'business_day',
  Day = 'day',
  Hour = 'hour',
  Month = 'month',
  Week = 'week'
}

export type Stripe_ShippingRateFixedAmount = {
  __typename?: 'Stripe_ShippingRateFixedAmount';
  /** A non-negative integer in cents representing how much to charge. */
  amount?: Maybe<Scalars['Int']>;
  /** Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies). */
  currency?: Maybe<Scalars['String']>;
};

export enum Stripe_ShippingRateObjectProperty {
  ShippingRate = 'shipping_rate'
}

export enum Stripe_ShippingRateTaxBehaviorProperty {
  Exclusive = 'exclusive',
  Inclusive = 'inclusive',
  Unspecified = 'unspecified'
}

export type Stripe_ShippingRateTaxCodeProperty = WrappedString | Stripe_TaxCode;

export enum Stripe_ShippingRateTypeProperty {
  FixedAmount = 'fixed_amount'
}

export type Stripe_CheckoutSessionShippingRateProperty = WrappedString | Stripe_ShippingRate;

export enum Stripe_CheckoutSessionStatusProperty {
  Complete = 'complete',
  Expired = 'expired',
  Open = 'open'
}

export enum Stripe_CheckoutSessionSubmitTypeProperty {
  Auto = 'auto',
  Book = 'book',
  Donate = 'donate',
  Pay = 'pay'
}

export type Stripe_CheckoutSessionSubscriptionProperty = WrappedString | Stripe_Subscription;

export type Stripe_PaymentPagesCheckoutSessionTaxIdCollection = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionTaxIdCollection';
  /** Indicates whether tax ID collection is enabled for the session */
  enabled?: Maybe<Scalars['Boolean']>;
};

export type Stripe_PaymentPagesCheckoutSessionTotalDetails = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionTotalDetails';
  /** This is the sum of all the discounts. */
  amount_discount?: Maybe<Scalars['Int']>;
  /** This is the sum of all the shipping amounts. */
  amount_shipping?: Maybe<Scalars['Int']>;
  /** This is the sum of all the tax amounts. */
  amount_tax?: Maybe<Scalars['Int']>;
  breakdown?: Maybe<Stripe_PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown>;
};

export type Stripe_PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown = {
  __typename?: 'Stripe_PaymentPagesCheckoutSessionTotalDetailsResourceBreakdown';
  /** The aggregated discounts. */
  discounts?: Maybe<Array<Maybe<Stripe_LineItemsDiscountAmount>>>;
  /** The aggregated tax amounts by rate. */
  taxes?: Maybe<Array<Maybe<Stripe_LineItemsTaxAmount>>>;
};

export type CreateMyCheckoutSessionPropertiesLineItemsItemsPropertyInput = {
  price?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
};

export type UpdateProfileResult = {
  __typename?: 'UpdateProfileResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Profile>;
};

/** update Profile input */
export type UpdateProfileInput = {
  _id: Scalars['ID'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<TsRelationshipInput>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type TsRelationshipInput = {
  shapeId?: InputMaybe<Scalars['String']>;
  shapeName?: InputMaybe<Scalars['String']>;
  contentTypeId?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
};

export type CreateProfileResult = {
  __typename?: 'CreateProfileResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Profile>;
};

/** create Profile input */
export type CreateProfileInput = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<TsRelationshipInput>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type DuplicateProfileResult = {
  __typename?: 'DuplicateProfileResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Profile>;
};

/** duplicate Profile input */
export type DuplicateProfileInput = {
  _id: Scalars['ID'];
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  avatar?: InputMaybe<TsRelationshipInput>;
  stripeCustomerId?: InputMaybe<Scalars['String']>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type DeleteProfileResult = {
  __typename?: 'DeleteProfileResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<Scalars['Boolean']>;
};

/** delete Profile input */
export type DeleteProfileInput = {
  _id: Scalars['ID'];
};

export type Voucherify_Order = {
  __typename?: 'Voucherify_Order';
  id?: Maybe<Scalars['String']>;
};

export type Voucherify_OrderItemInput = {
  name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  quantity?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Int']>;
};

export type Klaviyo_AddMembersResponse = {
  __typename?: 'Klaviyo_AddMembersResponse';
  items?: Maybe<Array<Maybe<Klaviyo_AddMembersResponseItemsProperty>>>;
};

export type Klaviyo_AddMembersResponseItemsProperty = {
  __typename?: 'Klaviyo_AddMembersResponseItemsProperty';
  id?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['String']>;
};

export type AddListMembersInput = {
  profiles: Array<Klaviyo_AddMembersPropertiesPropertiesProfilesItemsPropertyInput>;
};

export type Klaviyo_AddMembersPropertiesPropertiesProfilesItemsPropertyInput = {
  email?: InputMaybe<Scalars['String']>;
};

export type Klaviyo_200Ok = {
  __typename?: 'Klaviyo_200Ok';
  result?: Maybe<Scalars['JSONObject']>;
};

/**
 *
 * The profiles that you would like to remove from the list.
 *
 * Example:
 *
 * {
 *   "emails":["george.washington@klaviyo.com","abraham.lincoln@klaviyo.com"],
 *   "phone_numbers":["+13239169023"],
 *   "push_tokens":["03df25c845d460bcdad7802d2vf6fc1dfde97283bf75cc993eb6dca835ea2e2r"]
 * }
 *
 */
export type Klaviyo_RemoveMembersPropertiesPropertyInput = {
  emails?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phone_numbers?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  push_tokens?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

export type Stripe_ListCheckoutSessionsResponse = {
  __typename?: 'Stripe_ListCheckoutSessionsResponse';
  data?: Maybe<Array<Maybe<Stripe_CheckoutSession>>>;
  /** True if this list has another page of items after this one that can be fetched. */
  has_more?: Maybe<Scalars['Boolean']>;
  /** String representing the object's type. Objects of the same type share the same value. Always has the value `list`. */
  object?: Maybe<Stripe_ListCheckoutSessionsResponseObjectProperty>;
  /** The URL where this list can be accessed. */
  url?: Maybe<Scalars['String']>;
};

export enum Stripe_ListCheckoutSessionsResponseObjectProperty {
  List = 'list'
}

export type ReviewsIo_CreateInvitationResponse = {
  __typename?: 'ReviewsIo_CreateInvitationResponse';
  /** The status of a response */
  status?: Maybe<ReviewsIo_CreateInvitationResponseStatusProperty>;
  message?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum ReviewsIo_CreateInvitationResponseStatusProperty {
  Success = 'success',
  Error = 'error'
}

export type ReviewsIo_CreateInvitationPropertiesPropertyInput = {
  name?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  order_id?: InputMaybe<Scalars['String']>;
  products?: InputMaybe<Array<InputMaybe<ReviewsIo_InvitationProductInput>>>;
  /** Template identifier */
  template_id?: InputMaybe<Scalars['String']>;
  date_send?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
};

export type ReviewsIo_InvitationProductInput = {
  /** Product unique ID */
  sku?: InputMaybe<Scalars['String']>;
  /** Product name */
  name?: InputMaybe<Scalars['String']>;
  /** Product description */
  description?: InputMaybe<Scalars['String']>;
  /** Product image URL */
  image?: InputMaybe<Scalars['String']>;
  /** Product MPN */
  mpn?: InputMaybe<Scalars['String']>;
  /** Product GTIN */
  gtin?: InputMaybe<Scalars['String']>;
  /** Product brand */
  brand?: InputMaybe<Scalars['String']>;
  /** Product category */
  category?: InputMaybe<Scalars['String']>;
  /** Product custom property */
  custom?: InputMaybe<Scalars['String']>;
  /** Product page url */
  pageUrl?: InputMaybe<Scalars['String']>;
};

export type UpdateNavigationDataResult = {
  __typename?: 'UpdateNavigationDataResult';
  clientMutationId?: Maybe<Scalars['String']>;
  result?: Maybe<NavigationData>;
};

/** update NavigationData input */
export type UpdateNavigationDataInput = {
  links?: InputMaybe<NavigationDataLinksInput>;
  _shapeId?: InputMaybe<Scalars['String']>;
  _id?: InputMaybe<Scalars['ID']>;
  _version?: InputMaybe<Scalars['Int']>;
  _shapeName?: InputMaybe<Scalars['String']>;
  _createdAt?: InputMaybe<Scalars['String']>;
  _createdBy?: InputMaybe<Scalars['String']>;
  _updatedAt?: InputMaybe<Scalars['String']>;
  _updatedBy?: InputMaybe<Scalars['String']>;
  _schemaVersion?: InputMaybe<Scalars['Float']>;
  _enabled?: InputMaybe<Scalars['Boolean']>;
  _enabledAt?: InputMaybe<Scalars['String']>;
  _status?: InputMaybe<DefaultWorkflow>;
  _contentTypeId?: InputMaybe<Scalars['String']>;
  _contentTypeName?: InputMaybe<Scalars['String']>;
};

export type NavigationDataLinksInput = {
  categories?: InputMaybe<Array<InputMaybe<NavigationDataLinksCategoriesInput>>>;
  pages?: InputMaybe<Array<InputMaybe<NavigationDataLinksPagesInput>>>;
};

export type NavigationDataLinksCategoriesInput = {
  name?: InputMaybe<Scalars['String']>;
  featured?: InputMaybe<Array<InputMaybe<NavigationDataLinksCategoriesFeaturedInput>>>;
  collection?: InputMaybe<Array<InputMaybe<NavigationDataLinksCategoriesCollectionInput>>>;
  categories?: InputMaybe<Array<InputMaybe<NavigationDataLinksCategoriesCategoriesInput>>>;
  brands?: InputMaybe<Array<InputMaybe<NavigationDataLinksCategoriesBrandsInput>>>;
};

export type NavigationDataLinksCategoriesFeaturedInput = {
  name?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
};

export type NavigationDataLinksCategoriesCollectionInput = {
  name?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
};

export type NavigationDataLinksCategoriesCategoriesInput = {
  href?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

export type NavigationDataLinksCategoriesBrandsInput = {
  name?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
};

export type NavigationDataLinksPagesInput = {
  name?: InputMaybe<Scalars['String']>;
  href?: InputMaybe<Scalars['String']>;
};
