import DevIcon from "./DevIcon";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import BurgerIcon from "@/components/BurgerIcon";
import { useEffect, useState } from "react";

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

  const TAILWIND_SM_SCREEN = 640

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="px-4 py-2 fixed left-1/2 -translate-x-1/2 bg-[#20202380] backdrop-blur-md z-50 max-w-screen-sm w-full border-b rounded sm:flex sm:justify-center">
      <ul className="flex justify-between sm:justify-start sm:gap-2">
        <li>
          <DevIcon />
        </li>
        {windowSize.width <= TAILWIND_SM_SCREEN ? (
          <li>
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger className="flex justify-center items-center border rounded-lg p-2">
                <BurgerIcon />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background text-white">
                {menu.map(option => (<a href={`#${option.url}`} key={option.option}>
                  <DropdownMenuItem >{option.option}</DropdownMenuItem>
                </a>))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        ) :
          menu.map(option => (<a href={`#${option.url}`} key={option.option} className="px-2 hover:underline decoration-primary">
            <li >{option.option}</li>
          </a>))
        }
      </ul>
    </nav>
  )

}
