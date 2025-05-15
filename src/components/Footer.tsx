interface Props {
  year: number;
}

export default function Footer({ year }: Props) {
  return (
    <footer className="text-sm py-8 text-center text-neutral-400">© {year} Rodrigo Pardo. All Rights Reserved.</footer>
  )
}
