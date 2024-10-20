import { IoIosArrowRoundForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function OurApproach() {
  return (
    <div className="bg-secondary text-white pb-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <h2 className="text-center uppercase font-bold">Our Approach</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-14 text-xl font-light">
          <div className="">
            <Image
              src={"/image.jpg"}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-semibold text-4xl">The art of AI</h3>
            <p className="leading-8 my-5">
              When technology and people work together, we can see further—and
              deliver lasting impact that shapes our future. In a creative AI
              experiment to explore human and machine collaboration, artist and
              researcher Sougwen Chung uses a Bayesian probability model
              generated by our CausalNex product.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-sm md:text-xl">
                Learn more about our hybrid intelligence approach
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-14 text-xl font-light">
          <div className="order-2">
            <Image
              src={"/qb-labs_thumb_mckinsey54_1536x11536.jpg"}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div className="order-1">
            <h3 className="font-semibold text-4xl">QuantumBlack Labs</h3>
            <p className="leading-8 my-5">
              Our center of learning dedicated to driving innovation and
              experimentation in AI, QuantumBlack Labs is where technologists,
              designers, and product managers build cutting-edge tools and
              assets that reduce risk and accelerate impact at every stage of
              the AI transformation journey.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-sm md:text-xl">
                Learn more about QuantumBlack Labs
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-14 text-xl font-light">
          <div className="">
            <Image
              src={"/thumb_alliances-inline-19logos_quantumblack_1536x1536.jpg"}
              alt=""
              width={500}
              height={500}
              className="w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-semibold text-4xl">
              Open ecosystem of alliances
            </h3>
            <p className="leading-8 my-5">
              QuantumBlack has developed an open ecosystem of strategic
              alliances that deliver the complex capabilities necessary for
              generative AI implementations.
            </p>
            <Link href={"#"} className="flex items-center gap-1">
              <span className="font-semibold text-sm md:text-xl">
                See all alliances & acquisitions
              </span>
              <IoIosArrowRoundForward className="items-center text-3xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
