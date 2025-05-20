interface Props {
  title: string | number;
}

export default function Badge({ title }: Props) {
  return (
    <span className="text-green-300 font-semibold uppercase text-sm bg-[rgba(154,230,180,0.16)] px-1 rounded">
      {title}
    </span>
  );
}
