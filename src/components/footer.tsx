import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaRss, FaYoutube } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="my-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <Image
          src={"/mckinsey---company_owler_20190728_090718_original.png"}
          alt=""
          width={500}
          height={300}
          className="w-52 h-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 my-10">
          <div>
            <h3 className="font-bold text-xl">Subscribe</h3>
            <div className="my-5 font-light">
              Select topics and stay current with our latest insights
            </div>
            <div className="flex items-center gap-5 md:w-[70%]">
              <input
                type="text"
                placeholder="Email Address"
                className="border border-black p-3 w-[70%]"
              />
              <Link
                href={"#"}
                className="bg-primary text-white border border-primary py-3 px-7 hover:bg-white hover:text-primary"
              >
                Submit
              </Link>
            </div>
          </div>
          <div>
            <div className="flex items-center md:justify-end gap-5 flex-wrap font-semibold text-sm my-5">
              <Link href={"#"} className="hover:text-primary hover:underline">
                Contact us
              </Link>
              <Link href={"#"} className="hover:text-primary hover:underline">
                FAQ
              </Link>
              <Link href={"#"} className="hover:text-primary hover:underline">
                Privacy policy
              </Link>
              <Link href={"#"} className="hover:text-primary hover:underline">
                Cookie preferences
              </Link>
              <Link href={"#"} className="hover:text-primary hover:underline">
                Terms of use
              </Link>
            </div>
            <div className="flex items-center md:justify-end gap-5 font-semibold text-sm my-5">
              <Link href={"#"} className="hover:text-primary hover:underline">
                Local language information
              </Link>
              <Link href={"#"} className="hover:text-primary hover:underline">
                Accessibility statement
              </Link>
            </div>
            <div className="flex md:justify-end items-center gap-3">
              <div className="cursor-pointer flex items-center hover:text-tertiary">
                <div className="bg-black hover:bg-primary text-white rounded-full hover:text-white p-2">
                  <FaLinkedin className="md:text-xl" />
                </div>
              </div>
              <div className="cursor-pointer flex items-center hover:text-tertiary">
                <div className="bg-black hover:bg-primary text-white rounded-full hover:text-white p-2">
                  <RiTwitterXLine className="md:text-xl" />
                </div>
              </div>
              <div className="cursor-pointer flex items-center hover:text-tertiary">
                <div className="bg-black hover:bg-primary text-white rounded-full hover:text-white p-2">
                  <FaFacebook className="md:text-xl" />
                </div>
              </div>
              <div className="cursor-pointer flex items-center hover:text-tertiary">
                <div className="bg-black hover:bg-primary text-white rounded-full hover:text-white p-2">
                  <FaYoutube className="md:text-xl" />
                </div>
              </div>
              <div className="cursor-pointer flex items-center hover:text-tertiary">
                <div className="bg-black hover:bg-primary text-white rounded-full hover:text-white p-2">
                  <FaRss className="md:text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border"></div>
        <div className="my-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="font-light text-sm">
                McKinsey Insights - Get our latest thinking on your iPhone,
                iPad, or Android device.
              </div>
              <div className="flex gap-3 items-center">
                <Image
                  src={"/appleappstoreuptd.svg"}
                  alt=""
                  width={300}
                  height={200}
                  className="w-auto h-auto"
                />
                <Image
                  src={"/googleplaystoreupdtd.svg"}
                  alt=""
                  width={300}
                  height={200}
                  className="w-auto h-auto"
                />
              </div>
            </div>
            <div className="flex md:justify-end items-center font-light text-sm">
              © 1996-2024 McKinsey & Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
