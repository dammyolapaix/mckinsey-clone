import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="">
      <div className="h-[300px] md:h-[700px] md:relative top-0 left-0">
        <Image
          src={"/hero-quantumblack-hwhc-1920x960-v2.jpg"}
          alt=""
          width={1000}
          height={700}
          className="h-full w-full object-cover"
        />
        <div className="hidden md:block absolute top-0 left-0 right-0 h-full">
          <div className="flex items-center h-full">
            <div className="w-[70%] mx-auto">
              <div className="w-[30%]">
                <h1 className="font-bold text-7xl">Artificial intelligence</h1>
                <p className="text-2xl font-light my-10">
                  Learn how {`we’re`} helping capture the opportunity of
                  generative AI
                </p>
                <Link href={"#"} className="flex items-center gap-1">
                  <div className="font-semibold text-xl">Learn more</div>
                  <IoIosArrowRoundForward className="text-primary items-center text-3xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden bg-white py-10">
        <div className="w-11/12 mx-auto">
          <h1 className="font-bold text-5xl w-[40%]">
            Artificial intelligence
          </h1>
          <p className="text-3xl font-light my-10">
            Learn how {`we’re`} helping capture the opportunity of generative AI
          </p>
          <Link href={"#"} className="flex items-center">
            <div className="font-semibold text-2xl">Learn more</div>
            <div>
              <IoIosArrowRoundForward className="text-primary text-3xl" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
