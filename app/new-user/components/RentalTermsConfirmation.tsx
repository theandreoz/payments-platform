import { useAppSelector } from '@/lib/hooks';
import { Separator } from '@/components/ui/separator';
import { formatAddressString } from '@/utils/formatAddressString';
import { formatCurrency } from '@/utils/formatCurrency';
import { formatPaymentDateForConfirmation } from '@/utils/formatPaymentDateForConfirmation';

import RentalTermsConfirmationItem from './RentalTermsConfirmationItem';

const RentalTermsConfirmation = () => {
  const { address, rentAmount, paymentDate } = useAppSelector(
    (state) => state.onboarding,
  );

  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          Confirm your rental terms
        </h1>

        <p className="text-lg font-normal text-slate-400">
          Please look this over to make sure all the information is correct.
        </p>

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <RentalTermsConfirmationItem
          header="Rental Address"
          value={formatAddressString(address)}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <RentalTermsConfirmationItem
          header="Unit"
          value={address.streetLine2 || 'N/A'}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <RentalTermsConfirmationItem
          header="Monthly Rent"
          value={formatCurrency(rentAmount)}
        />

        <Separator decorative className="mt-4 h-0.5 w-full" />

        <RentalTermsConfirmationItem
          header="Rental Due Date"
          value={formatPaymentDateForConfirmation(paymentDate)}
        />
      </div>
    </div>
  );
};

export default RentalTermsConfirmation;
