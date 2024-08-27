export interface PaymentIntent {
  amount: number;
  amountReceived: number;
  created: number;
  currency: string;
  status: string;
  stripeCustomerId: string | null | unknown;
  stripePaymentIntentId: string;
  stripePaymentMethodId: string | null | unknown;
  userId: string;
}
