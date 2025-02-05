import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import DjangoIcon from "@/assets/icons/django.svg";
import PythonIcon from "@/assets/icons/python.svg";
import Postman from "@/assets/icons/postman.svg";
import PostgresSqlIcon from "@/assets/icons/postgresql.svg";
import mapImage from "@/assets/images/map.png";
import smileMemojji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    id: 1,
    title: "Github",
    iconType: GithubIcon,
  },
  {
    id: 2,
    title: "Javascipt",
    iconType: JavaScriptIcon,
  },
  {
    id: 3,
    title: "React",
    iconType: ReactIcon,
  },
  {
    id: 4,
    title: "Python",
    iconType: PythonIcon,
  },
  {
    id: 5,
    title: "Django",
    iconType: DjangoIcon,
  },
  {
    id: 6,
    title: "ReactNative",
    iconType: ReactIcon,
  },
  {
    id: 7,
    title: "Postman",
    iconType: Postman,
  },
  {
    id: 8,
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    id: 9,
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    id: 10,
    title: "PostgresSQL",
    iconType: PostgresSqlIcon,
  },
];

const hobbies = [
  {
    id: 1,
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "5%",
  },
  {
    id: 2,
    title: "Music",
    emoji: "🎧",
    left: "50%",
    top: "5%",
  },
  {
    id: 3,
    title: "Movies",
    emoji: "🎥",
    left: "10%",
    top: "35%",
  },
  {
    id: 4,
    title: "Photography",
    emoji: "📸",
    left: "70%",
    top: "45%",
  },
  {
    id: 5,
    title: "Reading",
    emoji: "📖",
    left: "5%",
    top: "65%",
  },
  {
    id: 6,
    title: "Football",
    emoji: "📖",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse into my world"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My reads"
                description="Explore the books that shape my perspective"
                className="px-6 pt-6"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book cover " />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My toolbox"
                description="Explore the technologies and tools I use to bring dreams to reality"
                className=""
              />
              <ToolboxItems items={toolboxItems} className="" />
              <ToolboxItems
                items={toolboxItems}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interest and hobbies beyond the digital realm"
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.id}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={smileMemojji}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
