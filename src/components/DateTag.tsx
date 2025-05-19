interface Props {
  start: string
  end?: string
}

export default function DateTag({ start, end }: Props) {
  return (
    <div className="flex gap-2 w-fit text-primary bg-background border rounded-lg px-2 text-sm lg:p-2 lg:absolute lg:top-0 lg:left-0 lg:translate-x-[calc(-100%-10px)]">
      <p>{start}</p>
      {end ? (
        <p> - {end}</p>
      ) : null}
    </div>
  )
}
