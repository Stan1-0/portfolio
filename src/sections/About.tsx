import Image from "next/image";
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import JavaScriptIcon from '@/assets/icons/square-js.svg'

const toolboxItems = [
  {
    title: 'Python',
    icon: ''
  },
  {
    title: 'Javascipt',
    icon: ''
  },
  {
    title: 'Django',
    icon: ''
  },
  {
    title: 'React',
    icon: ''
  },
  {
    title: 'ReactNative',
    icon: ''
  },
  {
    title: 'Postman',
    icon: ''
  },
  {
    title: 'Github',
    icon: ''
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

      </div>
    </Card>
    </div>
  </div>
  )
};
