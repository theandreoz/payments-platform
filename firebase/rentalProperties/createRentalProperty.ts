'use server';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { RentalProperty } from '@/types/RentalProperty';

export const createRentalProperty = async (
  newRentalProperty: RentalProperty,
) => {
  try {
    const collectionRef = collection(db, 'rentalProperties');
    const res = await addDoc(collectionRef, {
      ...newRentalProperty,
    });

    return {
      message: 'Created new rental property',
      data: { ...newRentalProperty },
    };
  } catch (error) {
    return { message: 'Error', error };
  }
};
