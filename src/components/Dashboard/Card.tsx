import { HiOutlineDotsHorizontal } from "react-icons/hi";

import { Button } from "react-daisyui";
import { ReactNode } from "react";

type CardProps = {
  title?: string;
  children: ReactNode;
};

const Card: React.FC<CardProps> = ({ title = "", children }) => {
  return (
    <div className="bg-neutral rounded-sm ">
      <div className="flex justify-between mx-2 my-2 items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <Button
          startIcon={<HiOutlineDotsHorizontal className="text-lg" />}
          size="xs"
        />
      </div>
      <div className="mx-2 my-2 flex justify-center">{children}</div>
    </div>
  );
};

export default Card;
