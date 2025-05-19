import NestJsLogo from "./logos/NestJsLogo";
import NodeJsLogo from "./logos/NodeJsLogo";
import ReactJsLogo from "./logos/ReactJsLogo";
import TypescriptLogo from "./logos/TypescriptLogo";

interface Technology {
  name: string;
  icon: string;
}

interface Props {
  title: string;
  description: string;
  stack: Technology[];
  image: string;
  url?: string;
}

export default function ProjectCard({ title, description, stack, image, url }: Props) {
  return (
    <a href={url} target="_blank">
      <div className="flex flex-col gap-1">
        <img src={image} alt="soldautos-project" className="rounded-xl object-cover border h-40" />
        <div className="flex flex-col">
          <p className="text-primary font-semibold">{title}</p>
        </div>
        <p className="">{description}</p>
        <ul className="flex gap-2 items-center">
          <li>
            <NestJsLogo width={25} height={25} />
          </li>
          <li>
            <NodeJsLogo width={25} height={25} />
          </li>
          <li>
            <TypescriptLogo width={25} height={25} />
          </li>
          <li>
            <ReactJsLogo width={25} height={25} />
          </li>
          {/* {stack.map((technology) => <li><img src={technology.icon} /></li>)} */}
        </ul>
      </div>
    </a>
  );
}
