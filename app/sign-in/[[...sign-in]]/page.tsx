import { SignIn } from '@clerk/nextjs';

const SignInPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  );
};

export default SignInPage;
