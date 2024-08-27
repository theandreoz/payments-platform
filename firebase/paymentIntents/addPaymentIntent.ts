'use server';

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { PaymentIntent } from '@/types/PaymentIntent';

export const addPaymentIntent = async (paymentIntent: PaymentIntent) => {
  try {
    const collectionRef = collection(db, 'paymentIntents');
    const newDocRef = await addDoc(collectionRef, {
      ...paymentIntent,
    });

    const userDocRef = doc(db, 'users', paymentIntent.userId);

    await updateDoc(userDocRef, {
      paymentIntents: arrayUnion(newDocRef.id),
    });

    return {
      message: 'Created new payment intent',
      data: { ...newDocRef },
    };
  } catch (error) {
    return { message: 'Error', error };
  }
};
