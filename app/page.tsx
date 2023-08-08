import Image from "next/image";
import logo from "@/images/logo.svg";

import bg_intro_mobile from "@/images/bg-intro-mobile.svg";
import bg_intro_desktop from "@/images/bg-intro-desktop.svg";
import mobile_grouped from "@/images/image-mockups.png";
import api from "@/images/icon-api.svg";
import budgeting from "@/images/icon-budgeting.svg";
import close from "@/images/icon-close.svg";
import facebook from "@/images/icon-facebook.svg";
import hamburger from "@/images/icon-hamburger.svg";
import instagram from "@/images/icon-instagram.svg";
import onbording from "@/images/icon-onboarding.svg";
import online from "@/images/icon-online.svg";
import pinterest from "@/images/icon-pinterest.svg";
import twitter from "@/images/icon-twitter.svg";
import youtube from "@/images/icon-youtube.svg";
import confetti from "@/images/image-confetti.jpg";
import currency from "@/images/image-currency.jpg";
import plane from "@/images/image-plane.jpg";
import restaurant from "@/images/image-restaurant.jpg";

import ContainerType from "@/app/components/IconTextContainer";
import LatestArticles from "@/app/components/LatestArticles";

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
        <div className="flex sm:flex-row  flex-col  p-8">
          <ContainerType
            textBold={"Online Banking "}
            textNormal={
              "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world."
            }
            imageIcon={online}
          />
          <ContainerType
            textBold={"Simple Budgeting"}
            textNormal={
              "See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits. "
            }
            imageIcon={budgeting}
          />
          <ContainerType
            textBold={"Fast Onboarding "}
            textNormal={
              "We don’t do branches. Open your account in minutes online and start taking control of your finances right away. "
            }
            imageIcon={onbording}
          />
          <ContainerType
            textBold={"Open API "}
            textNormal={
              "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier. "
            }
            imageIcon={api}
          />
        </div>
      </div>
      <div className="flex bg-white flex-col ">
        <p className="">Latest Artical</p>
        <div className="sm:flex-row flex-col gap-2">
          <LatestArticles
            Images={currency}
            smallText={"By Claire Robinson"}
            boldText={" Receive money in any currency with no fees"}
            normalText={
              "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …"
            }
          />
          <LatestArticles
            Images={restaurant}
            smallText={"By Wilson Hutton"}
            boldText={"Treat yourself without worrying about money"}
            normalText={
              "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …"
            }
          />
          <LatestArticles
            Images={plane}
            smallText={"By Wilson Hutton "}
            boldText={"Take your Easybank card wherever you go"}
            normalText={
              "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you … "
            }
          />
          <LatestArticles
            Images={confetti}
            smallText={"By Claire Robinson"}
            boldText={"Our invite-only Beta accounts are now live!"}
            normalText={
              "After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ..."
            }
          />
        </div>
      </div>
      <div className="bg-gray-700 flex text-white justify-between p-2">
        <div className="flex flex-col justify-between ">
          <Image src={logo} alt={""} />
          <div className="flex">
            <Image src={facebook} alt={""} />
            <Image src={youtube} alt={""} />
            <Image src={twitter} alt={""} />
            <Image src={pinterest} alt={""} />
            <Image src={instagram} alt={""} />
          </div>
        </div>
        <div className="flex flex-col ">
          <p>About Us</p>
          <p>Contac</p>
          <p>Blog</p>
        </div>
        <div className="flex flex-col">
          <p>Careers </p>
          <p>Support </p>
          <p>Privacy Policy </p>
        </div>
        <div className="flex flex-col">
          <button
            type="button"
            className="bg-gradient-to-r from-[hsl(136,65%,51%)] to-[hsl(192,70%,51%)] hover:from-pink-500 hover:to-yellow-500 py-2 px-4 rounded-3xl"
          >
            Request Invite
          </button>
          <p className="">© Easybank. All Rights Reserved</p>
        </div>
      </div>
    </main>
  );
}
1;
