const NewUserLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="flex h-16 items-center justify-between px-4 text-white">
        LOGO
      </div>

      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};

export default NewUserLayout;
