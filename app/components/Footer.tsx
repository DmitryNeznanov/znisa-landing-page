import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="pt-[61px] lg:pt-[95px] pb-[30px] lg:pb-[35px] border-t-[3px] border-t-black"
      id="footer"
    >
      <div className="container flex flex-col lg:flex-row justify-between pl-[10px] lg:pl-[30px]">
        <div>
          <Image
            className="w-[76px] h-[24px] lg:w-[136px] lg:h-[49px]"
            src="/svg/logo.svg"
            width={136}
            height={49}
            alt="logo.svg"
          />
        </div>
        <nav className="w-full max-w-[215px] lg:max-w-[500px] mt-[38px] lg:mt-0">
          <ul className=" flex flex-row justify-between ">
            {[
              ["Twitter X", "x.com"],
              ["LinkdIn", "LinkdIn.com"],
              ["Instagram", "Instagram.com"],
            ].map(([title, href], i) => {
              return (
                <>
                  <li
                    className="w-max bg-black font-handlee text-white text-[16px] lg:text-[32px]"
                    key={i}
                  >
                    <Link href={href}>{title}</Link>
                  </li>
                </>
              )
            })}
          </ul>
          <p className="mt-[11px] lg:mt-[40px] w-max lg:mx-auto text-black text-[15px] lg:text-[24px]">
            Copyright. Portfolio 2024
          </p>
        </nav>
      </div>
    </footer>
  )
}
