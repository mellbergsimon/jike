'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import { useTheme } from 'next-themes'


export function Navbar() {
  const pathname = usePathname()
  const { setTheme } = useTheme()

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/">Home</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Link href="/dashboard" prefetch={false}>Dashboard</Link>
        </MenubarTrigger>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>User</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Login
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>

        <MenubarTrigger>Lightmode</MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={() => setTheme("light")}>
            Light
          </MenubarItem>
          <MenubarItem onClick={() => setTheme("dark")}>
            Dark
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>

    </Menubar>



    // <nav className='text-green-400 '>
    //   <ul>
    //     <li>
    //       <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link
    //         className={`link ${pathname === '/dashboard' ? 'active' : ''}`} href="/dashboard">
    //         Dashboard
    //       </Link>
    //     </li>
    //   </ul>
    // </nav>
  )
}