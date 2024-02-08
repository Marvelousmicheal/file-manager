import Link from "next/link";
import { auth, UserButton } from "@clerk/nextjs";
import SearchBar from "./SearchBar";
import Navigation from "./Header/Navigation";
import ActionButton from "./Header/ActionButton";

function Header() {
  const { userId } = auth();

  return (
    <>
      {userId ? (
        <header>
          <nav className=" py-4 px-2 flex items-center justify-between ">
            <div className="flex items-center">
              <Link href="/">
                <div className="text-lg uppercase font-bold ">Filey</div>
              </Link>
            </div>
            <div>
              <SearchBar />
            </div>
            <div className="text-black flex gap-2 items-center">
              {!userId && (
                <>
                  <Link href="sign-in" className=" mr-4">
                    Sign-in
                  </Link>
                  <Link href="sign-up" className=" mr-4">
                    Sign-up
                  </Link>
                </>
              )}
              {userId && (
                <>
                  <Link
                    href="profile"
                    className=" rounded text-gray-500 border-2 px-4 py-1 text-sm "
                  >
                    {" "}
                    Profile
                  </Link>
                  <div className=" rounded-md text-gray-500 hover:text-white border-2 px-4 py-1 text-sm hover:bg-blue-700 hover:border-white  transition">
                    upgrade
                  </div>
                </>
              )}
              <div className="ml-auto">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <header
          className="  py-4 px-2 flex items-center justify-between "
        >
          <div className="flex items-center">
            <Link href="/">
              <div className="text-lg uppercase font-bold ">Filey</div>
            </Link>
          </div>
          <Navigation/>
          <ActionButton/>
        </header>
      )}
    </>
  );
}

export default Header;
