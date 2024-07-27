import { createUser } from '@/firebase/users/createUser';
import { getUserByClerkId } from '@/firebase/users/getUserByClerkId';
import { currentUser } from '@clerk/nextjs/server';
import Onboarding from './components/Onboarding';

const createNewUser = async () => {
  const user = await currentUser();

  const match = await getUserByClerkId(user!.id);

  if (!match?.data?.clerkId) {
    createUser({
      clerkId: user!.id,
      email: user!.emailAddresses[0].emailAddress,
      firstName: user!.firstName || '',
      lastName: user!.lastName || '',
    });
  }
};

const NewUser = async () => {
  await createNewUser();
  return (
    <div>
      <Onboarding />
    </div>
  );
};

export default NewUser;
