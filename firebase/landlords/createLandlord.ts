'use server';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { LandlordInformation } from '@/types/LandlordInformation';

export const createLandlord = async (newLandlord: LandlordInformation) => {
  try {
    const collectionRef = collection(db, 'landlords');
    const res = await addDoc(collectionRef, {
      ...newLandlord,
    });

    return {
      message: 'Created new landlord',
      data: { ...newLandlord, id: res.id },
    };
  } catch (error) {
    return { message: 'Error', error };
  }
};
