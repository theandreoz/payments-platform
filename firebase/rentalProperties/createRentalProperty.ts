'use server';

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { RentalProperty } from '@/types/RentalProperty';

export const createRentalProperty = async (
  newRentalProperty: RentalProperty,
  userId: string,
  landlordId: string,
) => {
  try {
    const collectionRef = collection(db, 'rentalProperties');
    const newDocRef = await addDoc(collectionRef, {
      ...newRentalProperty,
      userId,
      landlordId,
    });

    const userDocRef = doc(db, 'users', userId);
    const landlordDocRef = doc(db, 'landlords', landlordId);

    await updateDoc(userDocRef, {
      rentalProperties: arrayUnion(newDocRef.id),
    });

    await updateDoc(landlordDocRef, {
      rentalProperties: arrayUnion(newDocRef.id),
    });

    return {
      message: 'Created new rental property',
      data: { ...newRentalProperty, id: newDocRef.id },
    };
  } catch (error) {
    return { message: 'Error', error };
  }
};
