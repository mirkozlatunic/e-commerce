'use server';

import stripe from '@/lib/stripe';
import { BasketItem } from '@/store/store';

export type Metadata = {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  clerkUserId: string;
};

export type GroupedBasketItem = {
  product: BasketItem['product'];
  quantity: number;
};

export async function createCheckoutSession(
  items: BasketItem[],
  metadata: Metadata
) {
  try {
    const itemsWithoutPrice = items.filter((item) => !item.product.price);
    if (itemsWithoutPrice.length > 0) {
      throw new Error('Some items do not have a price');
    }

    const customer = await stripe.customers.list({
      email: metadata.customerEmail,
      limit: 1,
    });

    let customerId: string | undefined;
    if (customer.data.length > 0) {
      customerId = customer.data[0].id;
    }
  } catch (error) {
    console.log('Error creating checkout session:', error);
    throw error;
  }
}
