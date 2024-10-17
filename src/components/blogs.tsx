import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  return (
    <div className="bg-secondary text-white pb-20">
      <div className="w-11/12 md:w-[70%] mx-auto">
        <h2 className="text-center uppercase font-bold mb-10">
          Featured Blogs
        </h2>

        <p className="text-center font-light text-xl">
          Read more about our AI-driven value-creation work on our Medium blog
          and the New at McKinsey blog.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-14 text-xl font-light">
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/thumb_quantumblack_gettyimages-988177062_1536x1536.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">
              QuantumBlack Medium blog post
            </small>
            <Link
              href={"#"}
              className="gap-1 block my-1 hover:text-primary hover:underline"
            >
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                Six major Gen AI trends that will shape {"2024’s"} agenda
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>
          </div>
          <div className="hover:bg-white hover:text-secondary p-3">
            <Image
              src={"/genaioceans-hero-small-1394021792-1536x864.jpg"}
              alt=""
              width={300}
              height={300}
              className="w-full h-auto mb-3"
            />
            <small className="text-xs font-thin">
              New at McKinsey blog post
            </small>
            <Link href={"#"} className="gap-1 block my-1">
              <span className="font-semibold text-xl hover:text-primary hover:underline">
                With gen AI, helping green businesses strengthen our{" "}
                {"‘blue economy’"}
              </span>

              <IoIosArrowForward className="items-center inline text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
