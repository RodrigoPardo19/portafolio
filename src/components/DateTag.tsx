interface Props {
  start: string;
  end?: string;
}

export default function DateTag({ start, end }: Props) {
  return (
    <div className="flex gap-2 w-fit text-green-300 bg-[rgba(154,230,180,0.16)] rounded px-1 text-sm font-semibold lg:p-2 lg:absolute lg:top-0 lg:left-0 lg:translate-x-[calc(-100%-10px)]">
      <p>{start}</p>
      {end ? <p> - {end}</p> : null}
    </div>
  );
}
