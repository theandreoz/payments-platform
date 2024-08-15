export interface User {
  id?: string;
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  stripeCustomerId: string;
  rentalProperties?: string[];
}
