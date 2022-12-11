export interface Product {
  _id: string;
  img: Array;
  price: number;
  title: string;
  description: string;
  quantity: number;
  category: Array;
  type: Array;
}
export type ProductType = {
  map(arg0: (item: any) => JSX.Element): import("react").ReactNode;
  productId: string;
  name: String | undefined;
  price: number;
  description: number;
  img: Array<any>;
  saleAmount: number | null;
};

export type CartItemType = {
  id: string;
  quantity: number;
};
export type ProductContextType = {
  products: Product[];
};

export type AddressType = {
  country: string;
  district: string;
  khoroo: string;
};

export type UserType = {
  _id: string;
  address: AddressType;
  userName: string;
  password: string;
  isEmailConfirmed: boolean;
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  email: string;
  phoneNumber: number;
};

export type UserContextType = {
  user: UserType | undefined | null;
  setUserData: (user: UserType | null) => void;
};

export type CartContextType = {
  cartQuantity: number;
  cartItems: CartItemType[];
  price: number;
  openCart: () => void;
  closeCart: () => void;
  getItemQuantity: (id: string) => number;
  addPrice: (price: number, quantity: number) => void;
  addInitialPrice: (price: number, quantity: number) => void;
  reducePrice: (price: number, quantity: number) => void;
  increaseQuantity: (id: string, count: number) => void;
  decreaseQuantity: (id: string) => void;
  removeFromCart: (id: string) => void;
};

export enum TabType {
  Accessories = "ACCESSORIES",
  Pyanz = "PYANZ",
}

export enum CartItemHandle {
  Add = "ADD",
  Remove = "REMOVE",
}
export type AuthVerifyTokenSenderInput = {
  email?: InputMaybe<Scalars["String"]>;
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberCode?: InputMaybe<Scalars["String"]>;
};
export type RegisterUserInput = {
  email?: InputMaybe<Scalars["String"]>;
  password: Scalars["String"];
  phoneNumber?: InputMaybe<Scalars["String"]>;
  phoneNumberCode?: InputMaybe<Scalars["String"]>;
};

export enum PaymentMethodEnum {
  MnKhanBank = "MN_KHAN_BANK",
  MnOnepay = "MN_ONEPAY",
  MnQpay = "MN_QPAY",
  MnSpay = "MN_SPAY",
  None = "NONE",
}

export type UserUpdateGuestInput = {
  avatar?: InputMaybe<Scalars["String"]>;
  firstName?: InputMaybe<Scalars["String"]>;
  lastName?: InputMaybe<Scalars["String"]>;
  birthday?: InputMaybe<Scalars["DateTime"]>;
  gender?: InputMaybe<Gender>;
  email?: InputMaybe<Scalars["String"]>;
  number?: CountryPhoneInputValue;
};
