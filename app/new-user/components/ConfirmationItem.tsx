import { Dispatch, SetStateAction } from 'react';

interface ConfirmationItemProps {
  header: string;
  value: string | number;
  onboardingStage: string;
  setOnboardingStage: Dispatch<SetStateAction<string>>;
}

const ConfirmationItem = ({
  header,
  value,
  onboardingStage,
  setOnboardingStage,
}: ConfirmationItemProps) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="flex flex-col gap-1 text-start">
        <h3 className="text-lg font-normal text-slate-400">{header}</h3>
        <h2 className="text-xl font-bold text-slate-100">{value}</h2>
      </div>

      <div onClick={() => setOnboardingStage(onboardingStage)}>Edit</div>
    </div>
  );
};

export default ConfirmationItem;
