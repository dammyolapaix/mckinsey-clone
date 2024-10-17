import Link from "next/link";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";
import { RiDownloadLine, RiTwitterXLine } from "react-icons/ri";

export default function Connect() {
  return (
    <section className="bg-secondary text-white pb-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="md:col-span-2 font-bold text-4xl">
            Connect with QuantumBlack
          </div>
          <div className="col-span-1 w-[80%] md:w-full">
            <Link
              href={"#"}
              className="bg-white text-black py-3 px-7 hover:bg-tertiary block text-center mb-5"
            >
              Contact us
            </Link>
            <Link
              href={"#"}
              className="bg-white text-black py-3 px-7 hover:bg-tertiary block text-center"
            >
              Subscribe to our newsletter
            </Link>
          </div>
        </div>
        <div className="my-5">
          <div className="border border-white"></div>
          <div className="my-10 flex items-center flex-wrap gap-5">
            <div className="cursor-pointer flex items-center gap-3 hover:underline hover:text-tertiary">
              <div className="hover:bg-tertiary bg-white text-black rounded-full hover:text-black p-2">
                <FaLinkedin className="md:text-2xl" />
              </div>
              LinkedIn
            </div>
            <div className="cursor-pointer flex items-center gap-3 hover:underline hover:text-tertiary">
              <div className="hover:bg-tertiary bg-white text-black rounded-full hover:text-black p-2">
                <RiTwitterXLine className="md:text-2xl" />
              </div>
              Twitter
            </div>
            <div className="cursor-pointer flex items-center gap-3 hover:underline hover:text-tertiary">
              <div className="hover:bg-tertiary bg-white text-black rounded-full hover:text-black p-2">
                <FaMedium className="md:text-2xl" />
              </div>
              Medium
            </div>
            <div className="cursor-pointer flex items-center gap-3 hover:underline hover:text-tertiary">
              <div className="hover:bg-tertiary bg-white text-black rounded-full hover:text-black p-2">
                <FaInstagram className="md:text-2xl" />
              </div>
              Instagram
            </div>
          </div>
          <div className="border border-white"></div>
        </div>
        <div className="my-5">
          <h2 className="uppercase font-bold pt-5">Downloads and statements</h2>
          <div className="mt-12 mb-8 font-bold text-4xl">
            Modern Slavery Act
          </div>
          <div className="flex items-center gap-3 hover:underline cursor-pointer">
            <RiDownloadLine className="text-2xl" /> Modern Slavery Act Statement
            2024
          </div>
        </div>
      </div>
    </section>
  );
}
