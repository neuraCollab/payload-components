// src/blocks/Navbar/Component.tsx
import React from 'react'

type NavbarProps = {
  logoText: string
  links: { text: string; url: string }[]
  avatar: { url: string }
}

export const NavbarBlock: React.FC<NavbarProps> = ({ logoText, links, avatar }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">{logoText}</a>
      </div>
      <div className="flex gap-2">
        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="Avatar" src={avatar.url} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 p-2 shadow"
          >
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
