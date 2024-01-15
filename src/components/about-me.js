import React from "react";
import Image from "next/image";

const AboutMe = () => {
  return (
    <div className="flex lg:flex-row mf:flex-row flex-col items-center justify-around gap-3">
      <div className="lg:w-2/3 md:w-1/2 w-full flex flex-col p-4 bg-slate-200 rounded-md shadow-md items-start justify-center">
        <h1>
          Hello, world! I&apos;m Tausif, a digital architect crafting code with
          passion.
        </h1>
        <br />
        <p>
          I&apos;m a tech enthusiast with a deep fascination for web
          development, machine learning, and the boundless possibilities of AI.
          When I&apos;m not immersed in code, you&apos;ll likely find me
          exploring the latest technological advancements or pondering the next
          big breakthrough.
        </p>
        <br />
        <p>
          I believe code is more than just lines of text, it&apos;s a powerful
          tool to create, innovate, and solve problems. I&apos;m driven by the
          challenge of crafting elegant solutions that seamlessly blend
          functionality with a seamless user experience.
        </p>
      </div>

      <div className="lg:w-2/3 md:w-1/2 w-full justify-center flex items-center">
        <Image
          className="rounded-md shadow-md"
          src="/dp.jpg"
          width={300}
          height={300}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default AboutMe;
