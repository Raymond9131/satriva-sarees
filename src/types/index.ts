export type SareeCategory =
  | "Silk Sarees"
  | "Party Wear Sarees"
  | "Traditional Sarees"
  | "Designer Sarees"
  | "Daily Wear Sarees"
  | "Wedding Sarees";

export interface ColorOption {
  name: string;
  hex: string;
  image?: string;
}

export interface SareeProduct {
  id: string;
  slug: string;
  name: string;
  category: SareeCategory;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  rating: number;
  reviewsCount: number;
  description: string;
  fabric: string;
  care: string;
  occasion: string;
  color: string;
  availableColors: ColorOption[];
  images: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestSeller?: boolean;
  sku: string;
  blousePiece: string;
  length: string;
  weaveType: string;
}

export interface CartItem {
  id: string; // unique item id (productId + color)
  product: SareeProduct;
  quantity: number;
  selectedColor: string;
}

export interface WishlistItem {
  productId: string;
  product: SareeProduct;
  addedAt: string;
}

export interface OrderDetails {
  orderId: string;
  date: string;
  customerName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  grandTotal: number;
  paymentMethod: string;
}

