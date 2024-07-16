"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Kanit } from "next/font/google";

const menus = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/gallery",
    name: "Gallery",
  },
  {
    link: "/about",
    name: "About",
  },
];

const kanit = Kanit({
  subsets:['latin'],
  weight:['400','700']
});

export default function NavBar() {
  const current = usePathname();
  return (
    <div className={`flex bg-slate-500 gap-3 ${kanit.className}`}>
      {menus.map((menu) => {
        return (
          <Link
            key={menu.name}
            href={menu.link}
            className={clsx("text-white p-3", {
              "bg-yellow-500": current === menu.link,
            })}
          >
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
