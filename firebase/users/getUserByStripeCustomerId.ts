import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { User } from '@/types/User';

export const getUserByStripeCustomerId = async (stripeCustomerId: string) => {
  try {
    const items: User[] = [];

    const q = query(
      collection(db, 'users'),
      where('stripeCustomerId', '==', stripeCustomerId),
    );

    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      throw new Error('Error getting user by Stripe customer ID');
    }

    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data(), id: doc.id } as unknown as User);
    });

    return { message: 'Success', data: items[0] };
  } catch (error) {
    return { message: 'Error', error };
  }
};
