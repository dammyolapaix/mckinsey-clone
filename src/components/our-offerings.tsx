import { IoIosArrowRoundForward } from "react-icons/io";
import Link from "next/link";

export default function OurOfferings() {
  return (
    <div className="bg-secondary text-white pb-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <h2 className="text-center uppercase font-bold">Our offerings</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 my-14 text-xl font-light">
          <div>
            <h3 className="font-semibold text-2xl">Artificial Intelligence</h3>
            <p className="leading-8 my-5">
              We partner with organizations to unleash new possibilities by
              putting the right people, processes, and technology in place to
              scale AI.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-base">
                Learn more about AI
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Data Transformation</h3>
            <p className="leading-8 my-5">
              We help organizations unlock the true value of data and build
              performance by making lasting improvements in technology,
              processes, and capabilities.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-base">
                Learn more about data transformation
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Internet of Things</h3>
            <p className="leading-8 my-5">
              We partner with clients to turn IoT into real business value with
              improved operations, connected products and services, and entirely
              new businesses.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-base">
                Learn more about IoT
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Digital Twins</h3>
            <p className="leading-8 my-5">
              We help organizations to build virtual replicas of their assets,
              processes and people by simulating real situations, allowing them
              to make better decisions.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-base">
                Learn more about Digital Twins
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
