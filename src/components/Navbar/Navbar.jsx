import React from "react";
import Music from "../../assets/sound/sound.mp3";
import { Howl, Howler } from "howler";
import { Nav, Logo, NavLinksWrap, NavLinks } from "./style";

export default function Navbar({ type }) {
  const navbarLinks = [
    { id: 1, to: "product", name: "Product" },
    { id: 2, to: "about", name: "About" },
    { id: 3, to: "services", name: "Services" },
    { id: 4, to: "contact", name: "Contact" },
  ];

  const currentRoute = window.location.pathname.toLowerCase();

  const audioClip = { sound: Music };
  const SoundPlay = (src) => {
    const sound = new Howl({ src });
    sound.play();
  };

  Howler.volume(0.5);
  return (
    <Nav type={type}>
      <Logo>
        LO<span>GO</span>
      </Logo>
      <NavLinksWrap>
        {navbarLinks.map((value) => {
          return (
            <NavLinks
              to={value.to}
              onClick={() => SoundPlay(audioClip.sound)}
              key={value.id}
              className={currentRoute.includes(value.to) ? "active" : ""}
            >
              {value.name}
            </NavLinks>
          );
        })}
      </NavLinksWrap>
    </Nav>
  );
}
