import Image from "next/image";
import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

export default function OurLeadership() {
  return (
    <section className="bg-[#E6E6E6] py-20">
      <div className="w-11/12 md:w-[40%] mx-auto mb-20">
        <h2 className="text-center uppercase font-bold mb-10">
          Our Leadership
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          <div className="bg-white py-10 px-5  hover:shadow-2xl">
            <Image
              src={"/alex_singla-5144_standard_profile_1536x1152.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-full mx-auto w-6/12"
            />
            <Link href={"#"} className="text-center block">
              <h2 className="hover:text-primary hover:underline text-2xl font-bold mb-3">
                Alex Singla
              </h2>
              <div className="font-semibold text-sm">
                Senior Partner, Chicago
              </div>
              <div className="border-b w-[20%] mx-auto my-3"></div>
            </Link>
            <p className="text-center font-light text-sm">
              Global leader of QuantumBlack, AI by McKinsey; advises clients on
              strategy, digital and analytics, operations, enterprise
              transformation, and value creation across industries with a focus
              on financial services and insurance
            </p>
            <div className="flex justify-center items-center gap-10 py-5">
              <div className="hover:bg-primary hover:rounded-full hover:text-white p-3 cursor-pointer">
                <CiMail className="text-2xl" />
              </div>
              <div className="hover:bg-primary hover:rounded-full hover:text-white p-3 cursor-pointer">
                <FaLinkedin className="text-2xl" />
              </div>
              <div className="hover:bg-primary hover:rounded-full hover:text-white p-3 cursor-pointer">
                <RiTwitterXLine className="text-2xl" />
              </div>
            </div>
          </div>
          <div className="bg-white py-10 px-5  hover:shadow-2xl">
            <Image
              src={"/alex_sukharevsky_standard_profile_1536x1152-new.jpg"}
              alt=""
              width={300}
              height={300}
              className="rounded-full mx-auto w-6/12"
            />
            <Link href={"#"} className="text-center block">
              <h2 className="hover:text-primary hover:underline text-2xl font-bold mb-3">
                Alexander Sukharevsky
              </h2>
              <div className="font-semibold text-sm">
                Senior Partner, London
              </div>
              <div className="border-b w-[20%] mx-auto my-3"></div>
            </Link>
            <p className="text-center font-light text-sm">
              Global leader of QuantumBlack, AI by McKinsey, working across
              industries to redefine business models and improve performance
              through the responsible use of artificial intelligence and
              technology
            </p>
            <div className="flex justify-center items-center gap-10 py-5">
              <div className="hover:bg-primary hover:rounded-full hover:text-white p-3 cursor-pointer">
                <CiMail className="text-2xl" />
              </div>
              <div className="hover:bg-primary hover:rounded-full hover:text-white p-3 cursor-pointer">
                <FaLinkedin className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Link
          href={"#"}
          className="border border-primary text-primary py-3 px-7 hover:bg-primary hover:text-white"
        >
          See more people
        </Link>
      </div>
    </section>
  );
}
