interface Path {
  name: string;
  url: string;
}

interface Props {
  paths: Path[];
  currentPath: string;
}

export default function Breadcrumbs({ paths, currentPath }: Props) {
  return (
    <nav>
      <ul className="flex gap-2 text-lg flex-wrap">
        {paths.map((path, index) => (
          <li key={path.name}>
            <a
              href={path.url}
              className={
                path.name !== currentPath ? "text-primary" : "text-secondary font-semibold"
              }
            >
              <span className="mr-2">{path.name}</span>
              <span className="text-secondary text-sm">{index < paths.length - 1 ? ">" : ""}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
