import Image from "next/image"
import Link from "next/link"
export default function Hero() {
  return (
    <section
      className="pl-[20px] pt-[60px] lg:pt-[75px] pb-[55px] lg:pb-[37px]"
      id="hero"
    >
      <div className="flex flex-row items-center">
        <Image
          className="w-[56px] h-[53px] lg:w-[109px] lg:h-[102px] -rotate-[7.35deg]"
          src="/svg/znisa-avatar.svg"
          width={109}
          height={102}
          alt="snisa-avatar.svg"
        ></Image>
        <Image
          className="ml-[9px] w-[38px] h-[22px] lg:w-[77px] lg:h-[45px] -rotate-[16.79deg]"
          src="/svg/arrow.svg"
          width={77}
          height={45}
          alt="arrow.svg"
        ></Image>
        <h2 className="ml-[12px] relative font-handlee bg-pink-500 -rotate-[16deg]">
          znisa
        </h2>
      </div>
      <article className="mt-[23px] lg:mt-[32px] lg:flex lg:flex-row lg:justify-between lg:items-center">
        <h1 className="max-w-[240px] lg:max-w-[475px]">
          I <span className="relative accent accent-pink-500 ">design</span> top
          notch websites
        </h1>
        <div className="mt-[17px] lg:mt-0">
          <p className="max-w-[300px] lg:max-w-[477px]">
            I&apos;ll design your website and will develop to land it on
            internet using No-code.
          </p>
          <Link
            className="button-primary mt-[18px] lg:mt-[30px] py-[6px] px-[12px] lg:py-[16px] lg:px-[58px] font-inter"
            href="#contact"
          >
            Hire me
          </Link>
        </div>
      </article>
    </section>
  )
}
