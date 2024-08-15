import { SignUp } from '@clerk/nextjs';

const SignupPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center bg-black">
      <SignUp />
    </div>
  );
};

export default SignupPage;
