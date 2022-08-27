import { useActions, useTypedSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-daisyui";
import { HiOutlineMenu, HiOutlineMenuAlt2 } from "react-icons/hi";

const Header = () => {
  const { isOpen } = useTypedSelector((state: RootState) => state.sidebar);

  const { handleSidebar } = useActions();

  const onClickSidebar = () => {
    // @ts-ignore action type
    handleSidebar(!isOpen);
  };

  return (
    <div className="flex flex-col flex-1 relative ">
      <header className="navbar sticky top-0 z-30 shadow-md">
        <Button
          onClick={onClickSidebar}
          startIcon={
            isOpen ? (
              <HiOutlineMenu className="text-lg" />
            ) : (
              <HiOutlineMenuAlt2 className="text-lg" />
            )
          }
          size="sm"
          className="bg-base-100 border-none"
        />

        <div className="flex-1 ml-2">
          <Link href="/">
            <div className="relative flex items-center h-10 w-28 cursor-pointer my-auto">
              <Image
                src="/instance-logo-azul-400.webp"
                layout="fill"
                objectFit="contain"
                objectPosition="left"
              />
            </div>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
