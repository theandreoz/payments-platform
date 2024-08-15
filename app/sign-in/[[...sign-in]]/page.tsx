import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <SignIn />
    </div>
  );
};

export default SignInPage;
