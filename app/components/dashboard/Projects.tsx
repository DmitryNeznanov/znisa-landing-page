import Image from "next/image"

export default function Projects() {
  return (
    <section
      className="py-[37px] lg:py-[72px]"
      id="projects"
    >
      <div className="container pl-[20px] lg:px-[30px]">
        <article className="w-max flex flex-col ">
          <h2 className="w-max font-handlee bg-pink-500">Featured Projects</h2>
          <Image
            className="w-[39px] h-[22px] lg:w-[77px] lg:h-[45px] mt-[30px] self-end -rotate-[139.34deg]"
            src="/svg/arrow.svg"
            width={77}
            height={45}
            alt="arrow.svg"
          ></Image>
          <p className="max-w-[163px] lg:max-w-[253px] mt-[45px]">
            Have designed morethan 20 projects
          </p>
        </article>
        <section>
          {[
            ["project-1.png", "4 style Portfolio design", "No-Code"],
            ["project-2.png", "Color system for app", "UI Design"],
            ["project-3.png", "Onboardingscreen process", ""],
            ["project-4.png", "Finance Landingpage", "UI Design"],
          ].map(([src, title, tag], i) => {
            return (
              <article
                className="w-max px-[17px] py-[16px] lg:px-[19px] lg:py-[19px] bg-white border-[3px] border-black rounded-[6px]"
                key={i}
              >
                <Image
                  className="max-w-[265px] max-h-[159px] lg:max-w-[365px] lg:max-h-[318px]"
                  src={`/png/${src}`}
                  width={365}
                  height={318}
                  alt={src}
                ></Image>
                <div className="mt-[23.5px] lg:mt-[33px] flex flex-row">
                  {" "}
                  <h3 className="font-handlee">{title}</h3>
                  <p className="py-[6.5px] lg:py-[9] pl-[13px] pr-[18px] lg:pl-[13px] lg:pr-[26px] text-[13px] lg:text-[18px] text-white shadow-xl">
                    {tag}
                  </p>
                </div>
              </article>
            )
          })}
        </section>
      </div>
    </section>
  )
}
