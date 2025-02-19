import Image from "next/image"

export default function Skills() {
  return (
    <section
      className="py-[37px] lg:py-[72px]"
      id="skills"
    >
      <div className="container">
        {" "}
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
        <section className="flex flex-row">
          {/* {[
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
        })} */}
          <article className="w-screen h-screen max-w-[377px] max-h-[452px] px-[43px] flex flex-col items-center justify-center bg-yellow-500 border-[5px] border-yellow-600 rounded-[8px]">
            <h2 className="font-handlee z-10 relative bg-blue-500">Figma</h2>
            <Image
              className="self-start"
              src="/icons/pencil.svg"
              width="50"
              height="55"
              alt="pencil"
            ></Image>
            <p className="mt-[24px] lg:mt-[36px] text-[24px] lg:text-[36px] font-medium text-black">
              User Research Design
            </p>
          </article>
          <article className="w-screen h-screen max-w-[377px] max-h-[452px] px-[43px] flex flex-col items-center justify-center bg-blue-500 border-[5px] border-blue-600 rounded-[8px]">
            <h2 className="font-handlee relative bg-pink-500">Pen/Paper</h2>
            <Image
              className="self-start"
              src="/icons/eye.svg"
              width="64"
              height="46"
              alt="eye"
            ></Image>
            <p className="mt-[24px] lg:mt-[36px] text-[24px] lg:text-[36px] font-medium text-black">
              UI & Product Design
            </p>
          </article>
          <article className="w-screen h-screen max-w-[377px] max-h-[452px] px-[43px] flex flex-col items-center justify-center bg-pink-500 border-[5px] border-pink-600 rounded-[8px]">
            <h2 className="font-handlee relative bg-yellow-500">Webflow</h2>
            <Image
              className="self-start"
              src="/icons/star.svg"
              width="54"
              height="54"
              alt="star"
            ></Image>
            <p className="mt-[24px] lg:mt-[36px] text-[24px] lg:text-[36px] font-medium text-black">
              No-code Development
            </p>
          </article>
        </section>
      </div>
    </section>
  )
}
