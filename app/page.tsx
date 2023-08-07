import Image from "next/image";
import logo from "@/images/logo.svg";
import close from "@/images/icon-close.svg";
import bg_intro_mobile from "@/images/bg-intro-mobile.svg";
import bg_intro_desktop from "@/images/bg-intro-desktop.svg";
import mobile_grouped from "@/images/image-mockups.png";

export default function Home() {
  return (
    <main className="w-full h-screen bg-white gap-4 justify-between">
      <div className="flex justify-between px-2 py-4  bg-white z-20 relative">
        <button>
          {" "}
          <Image src={logo} alt={""} />
        </button>
        <button className="flex flex-col gap-1  ">
          <p className="w-6 bg-black h-[.5px] "></p>
          <p className="w-6  bg-black h-[.5px] "></p>
          <p className="w-6  bg-black h-[1px] "></p>
        </button>
      </div>
      <div className="flex sm:flex-col-reverse">
        <div className="">
          <div className="  ">
            <Image
              className=" z-0 sm:hidden fixed top-[-4px]"
              src={bg_intro_mobile}
              alt={""}
            />
            <Image
              className="fixed   z-10 top-[-75px] w-[95%] left-2"
              src={mobile_grouped}
              alt={""}
            />
          </div>
          <Image
            className="hidden sm:flex z-0 "
            src={bg_intro_desktop}
            alt={""}
          />
        </div>
        <div className="flex flex-col">
          <p className="">Next generation digital banking</p>
          <p className="">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.{" "}
          </p>
          <button> Request Invite</button>
        </div>
      </div>
    </main>
  );
}
