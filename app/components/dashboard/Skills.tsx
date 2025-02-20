import Image from "next/image"

export default function Skills() {
  return (
    <section
      className="py-[37px] lg:py-[72px]"
      id="skills"
    >
      <div className="container">
        <article>
          <h2 className="w-max font-handlee relative bg-pink-500">
            What i do?
          </h2>
          <Image
            className="mt-[14px] w-[39px] h-[22px] lg:w-[77px] lg:h-[45px] -rotate-[95.3deg]"
            src="/svg/arrow.svg"
            width={77}
            height={45}
            alt="arrow.svg"
          ></Image>
        </article>
        <section className="flex flex-col justify-center lg:flex-row gap-x-[38px] gap-y-[22px]">
          <article className="w-screen h-screen max-w-[260px] max-h-[310px] lg:max-w-[377px] lg:max-h-[452px] pt-[41px] lg:pt-[73px] pb-[62px] lg:pb-[120px] flex flex-col items-center justify-between bg-yellow-500 border-[5px] border-yellow-600 rounded-[8px] -rotate-[4deg]">
            <h2 className="self-end -mr-[20px] font-handlee relative bg-blue-500 rotate-[4deg]">
              Pen/Paper
            </h2>
            <div className="mt-[38px] px-[43px]">
              {" "}
              <Image
                src="/icons/pencil.svg"
                width="50"
                height="55"
                alt="pencil"
              ></Image>
              <p className="mt-[24px] lg:mt-[36px] text-[24px] lg:text-[36px] font-medium text-black">
                User Research Design
              </p>
            </div>
          </article>
          <article className="w-screen h-screen max-w-[260px] max-h-[310px] lg:max-w-[377px] lg:max-h-[452px] pb-[62px] lg:pb-[120px] flex flex-col items-center justify-between bg-blue-500 border-[5px] border-blue-600 rounded-[8px] rotate-[5.5deg]">
            <h2 className="self-start lg:self-end ml-[43px] lg:mr-[20px] -mt-[12px] lg:-mt-[15px] font-handlee relative bg-pink-500 lg:-rotate-[5.5deg]">
              Figma
            </h2>
            <div className="mt-[38px] pt-[30px] px-[43px]">
              {" "}
              <Image
                src="/icons/eye.svg"
                width="64"
                height="46"
                alt="eye"
              ></Image>
              <p className="mt-[24px] lg:mt-[36px] text-[24px] lg:text-[36px] font-medium text-black">
                UI & Product Design
              </p>
            </div>
          </article>
          <article className="w-screen h-screen max-w-[260px] max-h-[310px] lg:max-w-[377px] lg:max-h-[452px] pt-[41px] lg:pt-[73px] pb-[62px] lg:pb-[120px] flex flex-col items-center justify-between bg-pink-500 border-[5px] border-pink-600 rounded-[8px] -rotate-[4.76deg] lg:-rotate-[5deg]">
            <h2 className="self-end -mr-[20px] font-handlee relative bg-yellow-500 rotate-[4.76deg] lg:rotate-[5deg]">
              Webflow
            </h2>
            <div className="mt-[38px] px-[43px]">
              {" "}
              <Image
                src="/icons/star.svg"
                width="54"
                height="54"
                alt="star"
              ></Image>
              <p className="mt-[24px] lg:mt-[36px] text-[24px] lg:text-[36px] font-medium text-black">
                No-code Development
              </p>
            </div>
          </article>
        </section>
      </div>
    </section>
  )
}
{
  /* {[
          ["Figma", "pencil.svg", 50, 55, "User Research Design"],
          ["Pen/Paper", "eye.svg", 64, 46, "UI & Product Design"],
          ["Webflow", "star.svg", 54, 54, "No-code Development"],
        ].map(([article, src, width, height, text], i) => {
          return (
            <article key={i}>
              <h2>{article}</h2>
              <Image
                src={`/icons/${src}`}
                width={width}
                height={height}
                alt={src}
              ></Image>
              <p className="">{text}</p>
            </article>
          )
        })} */
}
