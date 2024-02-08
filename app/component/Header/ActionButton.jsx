import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { UserButton, auth } from "@clerk/nextjs";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

function ActionButton() {
  const { userId } = auth();
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <AlignJustify />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex flex-col space-y-4 items-start w-full text-lg text-black mt-10">
                  {!userId && (
                    <>
                      <Link href="sign-in" className=" mr-4">
                        Sign-in
                      </Link>
                      <Link href="sign-up" className=" mr-4">
                        Sign-up
                      </Link>
                      <Link href="/">Pricing</Link>
                      <Link href="/">Contact</Link>
                      <Link href="/">About</Link>

                      
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
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>


      </div>
        <div className="hidden md:flex md:space-x-4">
                <Button
                className="text-md"
                variant="ghost"
                >
                   <Link href="sign-in" className=" mr-4">
                    Sign-in
                  </Link>
                </Button>
                <Button
                className="text-md bg-blue-500">
                    <Link href="sign-up" className=" mr-4">
                    Sign-up
                  </Link>
                </Button>

            </div>
    </>
  );
}

export default ActionButton;

