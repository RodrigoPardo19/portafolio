interface MenuOption {
  option: string;
  url: string;
}

export default function Navbar() {
  const menu: MenuOption[] = [
    { option: 'perfil', url: 'profile' },
    { option: 'experiencia', url: 'experience' },
    { option: 'proyectos', url: 'projects' },
    { option: 'formación', url: 'formation' },
    { option: 'contacto', url: 'contact' },
  ]

  return (
    <nav className="flex justify-between items-center py-4">
      {/* <img src="" /> */}
      <p>RP</p>
      <ul className="flex gap-2">
        {menu.map(option => (<li key={option.option}>
          <a href={`#${option.url}`}>{option.option}</a>
        </li>))}
      </ul>
    </nav>
  )
}
