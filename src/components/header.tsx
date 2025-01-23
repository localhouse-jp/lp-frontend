"use client";

import AnchorLink from "@/app/_components/AnchorLink";
import { Logo } from "@/assets/logo";
import Link from "next/link";
import { FC, ReactNode, useState } from 'react';

export const Header: FC = () => {
  return (
    <header className={"h-[70px] px-2"}>
      <DesktopHeader />
      <MobileHeader />
      <div className={"border-b-[1px] mx-4"}></div>
    </header>
  );
}

const MobileHeader: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className={"h-full flex flex-row justify-between lg:hidden"}>
      <Link href={"/"} className={"grid place-items-baseline p-4"}>
        <Logo className={"fill-current h-full w-auto aspect-[183/59]"} />
      </Link>
      <div className={"grid place-items-center"}>
        <button onClick={toggle} className={"grid place-items-center p-4"}>
          <svg className={"w-6 h-6"} viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? "flex" : "hidden"} fixed top-[70px] w-full h-full left-0 bg-opacity-50 bg-black z-20`} onClick={toggle} />
      <div
        className={`${isOpen ? "flex" : "hidden"} flex-col w-full bg-background fixed top-[70px] left-0 z-20 border-t-[1px] border-b-[1px]`} onClick={toggle}>
        <LinkItem href={"#home"}>Home</LinkItem>
        <LinkItem href={"#why"}>Why</LinkItem>
        <LinkItem href={"#projects"}>Our Projects</LinkItem>
        <LinkItem href={"#sponsors"}>Sponsors</LinkItem>
        <LinkItem href={"#news"}>ニュース</LinkItem>
        <LinkItem href={"#calendar"}>カレンダー</LinkItem>
        <Link className="grid place-items-center p-4 text-sm duration-500 hover:font-bold" href={"https://suite.starthype.co.jp/apps/forms/s/ZrEqkb7i88esd8fszBWQi7NY"}>お問い合わせ</Link>
      </div>
    </div>
  );
}

const DesktopHeader: FC = () => {
  return (
    <div className={"h-full flex-row justify-between hidden lg:flex"}>
      <div className={"flex flex-row align-middle flex-1"}>
        <LinkItem href={"#home"}>Home</LinkItem>
        <LinkItem href={"#why"}>Why</LinkItem>
        <LinkItem href={"#projects"}>Our Projects</LinkItem>
        <LinkItem href={"#sponsors"}>Sponsors</LinkItem>
      </div>
      <div className={"grid place-items-center"}>
        <Link href={"/"}>
          <Logo className={"fill-current"} />
        </Link>
      </div>
      <div className={"flex flex-row align-middle flex-1 justify-end"}>
        <LinkItem href={"#calendar"}>カレンダー</LinkItem>
        <LinkItem href={"#news"}>ニュース</LinkItem>
        <Link className="grid place-items-center p-4 text-sm duration-500 hover:font-bold" href={"https://suite.starthype.co.jp/apps/forms/s/ZrEqkb7i88esd8fszBWQi7NY"}>お問い合わせ</Link>
      </div>
    </div>
  );
}

const LinkItem: FC<{ href: string, children: ReactNode }> = ({ href, children }) => {
  return (
    <AnchorLink href={href} className="grid place-items-center p-4 text-sm duration-500 hover:font-bold">{children}</AnchorLink>
  )
}
