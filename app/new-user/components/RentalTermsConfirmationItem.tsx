interface RentalTermsConfirmationItemProps {
  header: string;
  value: string | number;
}

const RentalTermsConfirmationItem = ({
  header,
  value,
}: RentalTermsConfirmationItemProps) => {
  return (
    <div className="flex flex-col gap-1 text-start">
      <h3 className="text-lg font-normal text-slate-400">{header}</h3>
      <h2 className="text-xl font-bold text-slate-100">{value}</h2>
    </div>
  );
};

export default RentalTermsConfirmationItem;
