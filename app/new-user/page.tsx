import { createUser } from '@/utils/firebase/users/createUser';
import { getUserByClerkId } from '@/utils/firebase/users/getUserByClerkId';
import { currentUser } from '@clerk/nextjs/server';

const createNewUser = async () => {
  const user = await currentUser();

  const match = await getUserByClerkId(user!.id);

  console.log({ match });

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
  return <div>New User</div>;
};

export default NewUser;
