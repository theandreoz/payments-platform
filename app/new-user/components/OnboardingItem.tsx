interface OnboardingItemProps {
  icon: string;
  header: string;
  subHeader: string;
  duration: string;
}

const OnboardingItem = ({
  icon,
  header,
  subHeader,
  duration,
}: OnboardingItemProps) => {
  return (
    <div className="flex w-full gap-2 rounded-lg bg-gray-600 px-4 py-2">
      <div>{icon}</div>
      <div className="text-start">
        <h3 className="text-lg font-semibold text-slate-50">{header}</h3>
        <p className="text-md text-slate-400">{subHeader}</p>
        <p className="text-sm text-slate-400">{duration}</p>
      </div>
    </div>
  );
};

export default OnboardingItem;
