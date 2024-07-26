import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { User } from '@/types/User';

export const getUserByClerkId = async (clerkId: string) => {
  try {
    const items: User[] = [];

    const q = query(collection(db, 'users'), where('clerkId', '==', clerkId));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({ ...doc.data() } as unknown as User);
    });

    return { message: 'Success', data: items[0] };
  } catch (error) {
    return { message: 'Error', error };
  }
};
