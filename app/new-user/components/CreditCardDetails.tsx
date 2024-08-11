const CreditCardDetails = () => {
  return (
    <div className="flex flex-col items-center gap-8 rounded-lg">
      <div className="flex flex-col gap-1 text-start">
        <h1 className="text-3xl font-bold text-slate-100">
          Please enter your credit card details.
        </h1>

        <p className="text-lg font-normal text-slate-400">
          We will charge your credit card for your rent payment each month.
        </p>
      </div>
    </div>
  );
};

export default CreditCardDetails;
