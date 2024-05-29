interface BgContainerProps {
  children: React.ReactNode;
}
const BgContainer = ({ children }: BgContainerProps) => {
  return (
    <div className=" h-[100vh] flex justify-evenly items-center ">
      {children}
    </div>
  );
};

export default BgContainer;
