import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import JavaScriptIcon from '@/assets/icons/square-js.svg'
import CSSIcon from '@/assets/icons/css3.svg'
import ReactIcon from '@/assets/icons/react.svg'
import ChromeIcon from '@/assets/icons/chrome.svg'
import GithubIcon from '@/assets/icons/github.svg'
import DjangoIcon from '@/assets/icons/django.svg'
import PythonIcon from '@/assets/icons/python.svg'
import Postman from '@/assets/icons/postman.svg'
import { TechIcon } from "@/components/Techicon";

const toolboxItems = [
  {
    id: 1,
    title: 'Github',
    iconType: GithubIcon ,
  },
  {
    id: 2,
    title: 'Javascipt',
    iconType: JavaScriptIcon ,
  },
  {
    id: 3,
    title: 'React',
    iconType: ReactIcon ,
  },
  {
    id: 4,
    title: 'Python',
    iconType: PythonIcon 
  },
  {
    id: 5,
    title: 'Django',
    iconType: DjangoIcon 
  },
  {
    id: 6,
    title: 'ReactNative',
    iconType: ReactIcon 
  },
  {
    id: 7,
    title: 'Postman',
    iconType: Postman 
  },
  {
    id: 8,
    title: 'CSS',
    iconType: CSSIcon 
  },
  {
    id: 9,
    title: 'Chrome',
    iconType: ChromeIcon 
  },
]

export const AboutSection = () => {
  return (
  <div className="pb-96">
    <SectionHeader 
    eyebrow="About Me" 
    title="A Glimpse into my world"
    description="Learn more about who I am, what I do, and what inspires me" />
    <div>
    <Card>
      <div>
        <StarIcon />
        <h3>My Reads</h3>
        <p> Explore the books shaping my perspective</p>
      </div>
      <Image src={bookImage} alt="Book cover "/>
    </Card>
    <Card>
      <div>
        <StarIcon />
        <h3>My toolbox</h3>
        <p> Explore the technologies and tools I use</p>
      </div>
      <div>
        {toolboxItems.map(item => (
          <div key={item.id}>
            <TechIcon component={item.iconType} />
            <span>{item.title}</span>

          </div>
        ))}
      </div>
    </Card>
    </div>
  </div>
  )
};
