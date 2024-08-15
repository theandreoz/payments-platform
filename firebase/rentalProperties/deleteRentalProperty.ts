'use server';

import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebaseConfig';

export const deleteRentalProperty = async (rentalPropertyId: string) => {
  try {
    const docRef = doc(db, 'rentalProperties', rentalPropertyId);

    await deleteDoc(docRef);

    return {
      message: 'Deleted rental property',
      data: { rentalPropertyId },
    };
  } catch (error) {
    return { message: 'Error', error };
  }
};
