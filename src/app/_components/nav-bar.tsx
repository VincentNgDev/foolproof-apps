import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "~/lib/utils";
import NavLink from "./nav-link";
import { House } from "lucide-react";
import { SquareUserRound } from "lucide-react";
import { Settings } from "lucide-react";

export default function NavBar() {
  return (
    <div className="flex w-60 flex-col rounded-2xl p-2">
      <div className={cn("flex flex-row items-center space-x-2 px-2 py-5")}>
        <Image alt="" src={"/logo.png"} width={80} height={80} />
        <div className="flex-1 overflow-hidden break-words text-lg font-black">
          Simple Apps
        </div>
      </div>
      <div className="flex-1 flex-grow">
        <ul className="space-y-3 pb-4 pt-2 text-sm">
          <NavLink href="/" name="Overview">
            <House size={24} />
          </NavLink>
          <NavLink href="/dashboard" name="Overview">
            <Image alt="" src={"/logo.png"} width={30} height={30} priority={false}/>
          </NavLink>
        </ul>
      </div>
      <div>
        <ul className="space-y-3 pb-4 pt-2 text-sm">
          <NavLink href="/profile" name="Profile">
            <SquareUserRound size={24} />
          </NavLink>
          <NavLink href="/settings" name="Settings">
            <Settings size={24} />
          </NavLink>
        </ul>
      </div>
    </div>
  );
}
