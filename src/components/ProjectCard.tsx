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
          {stack.map((technology) =>
            <li key={technology.name}>
              <img src={technology.icon} alt={technology.name} width={(technology.name !== 'Next' && technology.name !== 'MySQL') ? 30 : 50} height={(technology.name !== 'Next' && technology.name !== 'MySQL') ? 30 : 50} />
            </li>)}
        </ul>
      </div>
    </a>
  );
}
