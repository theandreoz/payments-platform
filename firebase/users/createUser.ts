'use server';

import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { User } from '@/types/User';

export const createUser = async (newUser: User) => {
  try {
    const collectionRef = collection(db, 'users');
    const res = await addDoc(collectionRef, {
      ...newUser,
    });

    console.log({ res });

    return { message: 'Created new user', data: { ...newUser } };
  } catch (error) {
    return { message: 'Error', error };
  }
};
