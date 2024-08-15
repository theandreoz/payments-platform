import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { LandlordInformation } from '@/types/LandlordInformation';

export const getLandlordByEmail = async (email: string) => {
  try {
    const items: LandlordInformation[] = [];

    const q = query(collection(db, 'landlords'), where('email', '==', email));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      items.push({
        ...doc.data(),
        id: doc.id,
      } as unknown as LandlordInformation);
    });

    return { message: 'Success', data: items[0] };
  } catch (error) {
    return { message: 'Error', error };
  }
};
