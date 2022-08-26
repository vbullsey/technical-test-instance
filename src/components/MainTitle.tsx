import { ReactNode, FC } from "react";

type MainTitleProps = {
  children: ReactNode;
};

const MainTitle: FC<MainTitleProps> = ({ children }) => {
  return (
    <div className="bg-info p-6 rounded-sm flex items-center justify-start">
      {children}
    </div>
  );
};

export default MainTitle;
