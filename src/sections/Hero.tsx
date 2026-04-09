'use client';
import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbit } from "@/components/heroOrbit";

export const HeroSection = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5 overflow-x-clip"
          style={{
            backgroundImage: `url(${grainImage.src})`,
          }}
        ></div>
        <div className=" size-[620px] hero-ring"></div>
        <div className=" size-[820px] hero-ring"></div>
        <div className=" size-[1020px] hero-ring"></div>
        <div className=" size-[1220px] hero-ring"></div>
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration="30s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration="32s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration="36s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={20}
          shouldOrbit
          orbitDuration="38s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration="40s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration="44s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration="48s"
          shouldSpin
          spinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt={"Person working on a laptop"}
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>
        <div className="max-w-lg mx-auto">
          <h1 className=" font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Robust systems
          </h1>
          <p className="mt-4 text-center text-white/70 md:text-lg leading-relaxed max-w-2xl mx-auto">
            <span className="font-semibold text-emerald-300 glow-text">Stanley Boateng</span> is a forward-thinking software developer currently pursuing a Bachelor’s degree in Information Technology at the University of Ghana.<br /><br />
            While specializing in robust backend systems with <span className="font-semibold text-emerald-300">Python</span> and <span className="font-semibold text-emerald-300">Django</span>, he also crafts modern, highly-responsive frontend experiences.<br /><br />
            Stanley leverages <span className="font-semibold text-emerald-300">advanced AI tooling</span> to heavily accelerate his productivity, enabling rapid prototyping, high-velocity coding, and lightning-fast shipping of scalable products.<br /><br />
            <span className="italic text-white/80">He aspires to become a leading tech visionary, discovering and building reliable solutions that address real-world challenges across Africa and beyond.</span>
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl btn-press">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </a>

          <a
            href="https://drive.google.com/file/d/1EQ-XnH8NCzz8vTXYk4WZb5Oszff2jeD_/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-emerald-300/30 bg-emerald-300/10 text-emerald-300 h-12 px-6 rounded-xl btn-press"
          >
            <span className="font-semibold">📄 Download Resume</span>
          </a>

          <a
            href="https://linkedin.com/in/stanley-boateng-"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center border border-white bg-white text-gray-900 h-12 px-6 rounded-xl btn-press"
          >
            <span>👋</span>
            <span className="font-semibold">Let&apos;s connect</span>
          </a>
        </div>
      </div>
    </div>
  );
};
