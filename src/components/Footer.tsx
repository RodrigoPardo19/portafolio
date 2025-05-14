interface Props {
  year: number;
}

export default function Footer({ year }: Props) {
  return (
    <footer className="py-8 text-center text-neutral-300">Rodrigo Pardo Gatica © {year}.</footer>
  )
}
