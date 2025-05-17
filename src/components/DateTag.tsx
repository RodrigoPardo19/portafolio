interface Props {
  start: string
  end?: string
}

export default function DateTag({ start, end }: Props) {
  return (
    <div className="flex gap-2 w-fit text-primary bg-background border rounded-lg px-2 text-sm md:p-2 md:absolute md:top-0 md:left-0 md:translate-x-[calc(-100%-10px)]">
      <p>{start}</p>
      {end ? (
        <p> - {end}</p>
      ) : null}
    </div>
  )
}
