import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function OurInsights() {
  return (
    <div className="bg-secondary text-white py-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <h2 className="text-center uppercase font-bold mb-10">Our Insights</h2>

        <p className="text-center font-light text-xl">
          From machine learning operations and organizational change to ethical
          considerations and emerging use cases, our latest thinking on how
          organizations can most effectively and responsibly use AI to create
          business value.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 my-14 text-xl font-light">
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/thumb-gettyimages-1457743520.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Article</small>
            <Link
              href={"#"}
              className="gap-1 block my-1 hover:text-primary hover:underline"
            >
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                What it takes to rewire a CPG company to outcompete in digital
                and AI
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              June 12, 2024 - Answering six specific questions holds the key to
              successful digital and AI transformations for CPG companies.
            </p>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={
                "/the-state-of-ai-in-early-2024-1721657405-thumb-1536x1536.jpg"
              }
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Survey</small>
            <Link href={"#"} className="gap-1 block my-1">
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                The state of AI in early 2024: Gen AI adoption spikes and starts
                to generate value
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              May 30, 2024 - As generative AI adoption accelerates, survey
              respondents report measurable benefits and increased mitigation of
              the risk of inaccuracy. A small group of high performers lead the
              way.
            </p>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/thumb-gettyimages-1551147077.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Article</small>
            <Link href={"#"} className="gap-1 block my-1">
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                Moving past gen {"AI’s"} honeymoon phase: Seven hard truths for
                CIOs to get from pilot to scale
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>

            <p className="leading-8 my-5">
              May 13, 2024 - Getting to scale requires CIOs to focus on fewer
              things but do them better.
            </p>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/perspective-on-ai-for-social-thumb-1536x1536.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">Report</small>
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

        <div className="flex justify-center items-center">
          <Link
            href={"#"}
            className="bg-white text-black py-3 px-7 hover:bg-tertiary"
          >
            Read our insights
          </Link>
        </div>
      </div>
    </div>
  );
}
