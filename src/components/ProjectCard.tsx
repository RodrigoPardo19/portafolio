import Badge from "./Badge";

interface Technology {
  name: string;
  icon: string;
}

interface Props {
  title: string;
  summary: string;
  stack: Technology[];
  image: string;
  sideProject?: boolean;
}

export default function ProjectCard({ title, summary, stack, image, sideProject }: Props) {
  return (
    <a href={`/portafolio/projects/${title}`}>
      <div className="flex flex-col gap-1">
        <img src={image} alt="soldautos-project" className="rounded-xl object-cover border h-40" />
        <div className="flex flex-col">
          <p className="text-primary font-semibold">
            {title} {sideProject ? <Badge title="sideproject" /> : ""}
          </p>
        </div>
        <p className="">{summary}</p>
        <ul className="flex gap-2 items-center">
          {stack.map((technology) => (
            <li key={technology.name}>
              <img
                src={technology.icon}
                alt={technology.name}
                width={technology.name !== "Next" && technology.name !== "MySQL" ? 30 : 50}
                height={technology.name !== "Next" && technology.name !== "MySQL" ? 30 : 50}
              />
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
