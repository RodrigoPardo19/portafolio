interface Props {
  start: string
  end?: string
}

export default function DateTag({ start, end }: Props) {
  return (
    <div className="absolute flex gap-2 w-fit text-primary bg-background border rounded-lg p-2 text-sm top-0 left-0 translate-x-[calc(-100%-10px)]">
      <p className="">{start}</p>
      {end ? (
        <>
          <p>-</p>
          <p>{end}</p>
        </>
      ) : null}
    </div>
  )
}
