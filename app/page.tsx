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
          <div className="flex gap-4">
            <p className="hover:border-b-2 border-b-green-500">home</p>
            <p className="hover:border-b-2 border-b-green-500">About</p>
            <p className="hover:border-b-2 border-b-green-500">Contact</p>
            <p className="hover:border-b-2 border-b-green-500">Blog</p>
            <p className="hover:border-b-2 border-b-green-500">Careers</p>
          </div>
        </button>
        <button className="flex flex-col gap-1  sm:hidden">
          <p className="w-6 bg-black h-[.5px] "></p>
          <p className="w-6  bg-black h-[.5px] "></p>
          <p className="w-6  bg-black h-[1px] "></p>
        </button>
      </div>
      <div className="flex    sm:flex-row flex-col-reverse w-full  justify-between border-2 ">
        {/* text */}
        <div className="flex flex-col top-96 sm:top-20">
          <p className="">Next generation digital banking</p>
          <p className="">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.{" "}
          </p>
          <button> Request Invite</button>
        </div>
        {/* image */}
        <div
          className="  border-2  sm:w-1/2 border-red-400 
        "
        >
          <div className=" sm:hidden relative h-[200px]   ">
            <Image
              className=" z-0    absolute"
              src={bg_intro_mobile}
              alt={""}
            />
            <Image
              className="  absolute  z-10  "
              src={mobile_grouped}
              alt={""}
            />
          </div>

          <div className=" hidden sm:flex min-w-1/2   relative ">
            <Image
              className="hidden sm:flex z-0   "
              src={bg_intro_desktop}
              alt={""}
            />
            <Image
              className="absolute   z-10  "
              src={mobile_grouped}
              alt={""}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
1;
