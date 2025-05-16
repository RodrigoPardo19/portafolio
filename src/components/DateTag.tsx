interface Props {
  start: string
  end?: string
}

export default function DateTag({ start, end }: Props) {
  return (
    <div className="flex gap-2 w-fit text-primary bg-background border rounded-lg p-2 text-sm absolute top-0 -left-36 self-end">
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
