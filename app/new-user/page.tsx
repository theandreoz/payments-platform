import { createUser } from '@/firebase/users/createUser';
import { getUserByClerkId } from '@/firebase/users/getUserByClerkId';
import { currentUser } from '@clerk/nextjs/server';
import Onboarding from './components/Onboarding';
import {
  createStripeCustomer,
  getStripeCustomerByEmail,
} from '@/utils/api/stripe';

const createNewUser = async () => {
  const user = await currentUser();

  const match = await getUserByClerkId(user!.id);

  if (!match?.data?.clerkId) {
    const email = user!.emailAddresses[0].emailAddress;
    const name = `${user!.firstName} ${user!.lastName}`;

    const stripeCustomer = await getStripeCustomerByEmail(email);

    let stripeCustomerId: string;
    if (stripeCustomer.error) {
      const response = await createStripeCustomer(email, name);
      stripeCustomerId = response.customerId;
    } else {
      stripeCustomerId = stripeCustomer.customer.id;
    }

    createUser({
      clerkId: user!.id,
      email: user!.emailAddresses[0].emailAddress,
      firstName: user!.firstName || '',
      lastName: user!.lastName || '',
      stripeCustomerId,
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
