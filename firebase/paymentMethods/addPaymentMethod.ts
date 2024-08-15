'use server';

import {
  addDoc,
  doc,
  collection,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { PaymentMethod } from '@/types/PaymentMethod';

export const addPaymentMethod = async (paymentMethod: PaymentMethod) => {
  try {
    const collectionRef = collection(db, 'paymentMethods');
    const newDocRef = await addDoc(collectionRef, {
      ...paymentMethod,
    });

    const userDocRef = doc(db, 'users', paymentMethod.userId);

    await updateDoc(userDocRef, {
      paymentMethods: arrayUnion(newDocRef.id),
    });

    return {
      message: 'Created new payment method and updated user document',
      data: { ...paymentMethod, paymentMethodId: newDocRef.id },
    };
  } catch (error) {
    return { message: 'Error adding a payment method', error };
  }
};
