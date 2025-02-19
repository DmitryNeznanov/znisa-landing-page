import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header
      className="pt-[48px] pb-[10px] pl-[20px] lg:pl-0"
      id="header"
    >
      <div className="container">
        <nav className="ml-auto max-w-[520px] flex flex-row items-center ">
          <div>
            <Image
              className="w-[76px] h-[24px] lg:w-[136px] lg:h-[49px]"
              src="/svg/logo.svg"
              width={136}
              height={49}
              alt="logo.svg"
            />
          </div>
          <ul className="ml-auto flex flex-row gap-x-[23px] *:nth-[1]:[&>a>span]:hidden lg:gap-x-[32px]">
            {[
              ["projects", "portfolio"],
              ["contact", "hire me"],
            ].map(([href, text], i) => {
              return (
                <li
                  className="capitalize"
                  key={i}
                >
                  <Link
                    className="relative"
                    href={`#${href}`}
                  >
                    {text}
                    <span className="accent accent-pink-500"></span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
