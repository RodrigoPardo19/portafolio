import DevIcon from "./DevIcon";

interface MenuOption {
  option: string;
  url: string;
}

export default function Navbar() {
  const menu: MenuOption[] = [
    { option: 'Perfil', url: 'profile' },
    { option: 'Experiencia', url: 'experience' },
    { option: 'Proyectos', url: 'projects' },
    { option: 'Formación', url: 'formation' },
    { option: 'Contacto', url: 'contact' },
  ]

  return (
    <nav className="px-4 py-2 fixed left-1/2 -translate-x-1/2 bg-[#20202380] backdrop-blur-md z-50 max-w-screen-sm w-full flex justify-center rounded-b">
      <ul className="flex gap-6">
        <li>
          <DevIcon />
        </li>
        {menu.map(option => (<li key={option.option}>
          <a href={`#${option.url}`}>{option.option}</a>
        </li>))}
      </ul>
    </nav>
  )
}
