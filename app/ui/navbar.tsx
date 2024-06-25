"use client";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const menus = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/gallery",
    name: "Gallery",
  },
];

export default function NavBar() {
  const current = usePathname();
  return (
    <div className="flex bg-slate-500 gap-3">
      {menus.map((menu) => {
        return (
          <Link
            key={menu.name}
            href={menu.link}
            className={clsx("text-white p-3", {
              "bg-yellow-500 font-bold": current === menu.link,
            })}
          >
            {menu.name}
          </Link>
        );
      })}
    </div>
  );
}
