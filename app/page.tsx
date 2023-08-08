import Image from "next/image";
import logo from "@/images/logo.svg";
import close from "@/images/icon-close.svg";
import bg_intro_mobile from "@/images/bg-intro-mobile.svg";
import bg_intro_desktop from "@/images/bg-intro-desktop.svg";
import mobile_grouped from "@/images/image-mockups.png";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white gap-4 justify-between text-black overflow-auto">
      <div className="flex justify-between px-2 py-4  bg-white z-20 relative">
        <button>
          {" "}
          <Image src={logo} alt={""} />
        </button>
        <div className="sm:flex gap-4 hidden">
          <p className="hover:border-b-2 border-b-green-500">home</p>
          <p className="hover:border-b-2 border-b-green-500">About</p>
          <p className="hover:border-b-2 border-b-green-500">Contact</p>
          <p className="hover:border-b-2 border-b-green-500">Blog</p>
          <p className="hover:border-b-2 border-b-green-500">Careers</p>
        </div>
        <button
          type="button"
          className="sm:flex hidden bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-3xl"
        >
          Request Invite
        </button>
        <button className="flex flex-col gap-1  sm:hidden">
          <p className="w-6 bg-black h-[.5px] "></p>
          <p className="w-6  bg-black h-[.5px] "></p>
          <p className="w-6  bg-black h-[1px] "></p>
        </button>
      </div>
      <div className="flex    sm:flex-row flex-col-reverse w-full  justify-between  gap-32 sm:gap-4">
        {/* text */}
        <div className="flex flex-col top-96 sm:top-20 items-center justify-center p-4 gap-4 sm:p-14">
          <p className="">Next generation digital banking</p>
          <p className="">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.{" "}
          </p>
          <button
            type="button"
            className="bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-3xl"
          >
            Request Invite
          </button>
        </div>
        {/* image */}
        <div
          className="     sm:w-[120%] 
        "
        >
          <div className=" sm:hidden relative h-[200px]   ">
            <Image
              className=" z-0    absolute "
              src={bg_intro_mobile}
              alt={""}
            />
            <Image
              className="  absolute  z-10 mt-[-125px] w-[94%] ml-2"
              src={mobile_grouped}
              alt={""}
            />
          </div>

          <div className=" hidden sm:flex  relative w-[150%] mt-[-150px] ml-[-140px]">
            <Image
              className="hidden sm:flex z-0  ml-20   "
              src={bg_intro_desktop}
              alt={""}
            />
            <Image
              className="absolute   z-10  ml-[230px] w-[67%] mt-16"
              src={mobile_grouped}
              alt={""}
            />
          </div>
        </div>
      </div>

      <div className="bg-[hsl(233,8%,62%)] bg-opacity-30">
        <div className="flex flex-col sm:p-14 w-[68%]">
          <p className="">Who choose Easybank?</p>
          <p className="">
            We leverage Open Banking to turn your bank account into your
            financial hub Control your finances like never before.
          </p>
        </div>
      </div>
    </main>
  );
}
1;
