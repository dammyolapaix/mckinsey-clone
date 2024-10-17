import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function OurImpact() {
  return (
    <div className="bg-secondary text-white pb-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <h2 className="text-center uppercase font-bold">
          EXAMPLES OF OUR IMPACT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-14 text-xl font-light">
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/genaioceans-hero-small-1394021792-1536x864.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Blog Post</small>
            <Link
              href={"#"}
              className="gap-1 block my-1 hover:text-primary hover:underline"
            >
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                With gen AI, helping green businesses strengthen our
                {"‘blue economy’"}
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              March 13, 2024 - Using generative AI technologies, McKinsey is
              helping One Ocean Foundation create an accurate picture of how
              businesses are sustaining our oceans.
            </p>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/illustrations_thumb.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Case Study</small>
            <Link href={"#"} className="gap-1 block my-1">
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                Banking on innovation: How ING uses generative AI to put people
                first
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              January 9, 2024 - The global bank worked closely with
              QuantumBlack, AI by McKinsey, to build, test, and launch a bespoke
              customer-facing chatbot that uses the latest gen AI technology to
              meet customer needs.
            </p>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={
                "/formula-e_hero_jake hughes boards the genbeta_1536x864.jpg"
              }
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Blog Post</small>
            <Link href={"#"} className="gap-1 block my-1">
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                A world record for Formula E, propelled by {"McKinsey’s"} AI
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              August 2, 2023 - McKinsey has partnered with Google Cloud to
              create generative AI capabilities that helped a new electric
              Formula E racecar to set a world record for indoor land speed.
            </p>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/lilli-case-study-thumb-1536x864.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Case Study</small>
            <Link href={"#"} className="gap-1 block my-1">
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                Rewiring the way McKinsey works with Lilli, our generative AI
                platform
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              September 5, 2024 - Learn how we built and scaled Lilli and the
              lessons learned along the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
