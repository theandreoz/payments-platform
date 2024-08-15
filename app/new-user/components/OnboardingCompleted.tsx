import { Button } from '@/components/ui/button';
import { useAppSelector } from '@/lib/hooks';
import Link from 'next/link';

const OnboardingCompleted = () => {
  const { onboardingError } = useAppSelector((state) => state.onboarding);

  const headerText = onboardingError
    ? 'Something went wrong'
    : "You're all set!";

  const bodyText = onboardingError
    ? 'There was an error during the onboarding process. Please contact support.'
    : 'Welcome to APP. Click below to go to your dashboard.';

  const href = '/';

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">{headerText}</h1>

        <p className="text-lg font-normal text-slate-400">{bodyText}</p>
      </div>

      <Link href={href}>
        <Button variant="secondary" size="lg" className="w-full">
          Go to dashboard
        </Button>
      </Link>
    </div>
  );
};

export default OnboardingCompleted;
