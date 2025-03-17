"use client";
import React from "react";
import Image from "next/image";
import {
  HiOutlineHome,
  HiOutlineCollection,
  HiOutlineShieldCheck,
  HiOutlineExclamationCircle,
} from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
function Sidebar() {
  const Menu = [
    {
      id: 1,
      name: "Home",
      icon: <HiOutlineHome />,
      path: "/dashboard",
    },
    {
      id: 2,
      name: "Explore",
      icon: <HiOutlineCollection />,
      path: "/dashboard/explore",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: <HiOutlineShieldCheck />,
      path: "/dashboard/upgrade",
    },
    {
      id: 4,
      name: "Logout",
      icon: <HiOutlineExclamationCircle />,
      path: "/dashboard/logout",
    },
  ];
  const path = usePathname();
  return (
    <div className="fixed h-full md:w-64 p-5 shadow-md">
      <Image src={"/next.svg"} width={120} height={60} alt="imagee" />
      <hr className="my-5" />

      <ul>
        {Menu.map((item, index) => (
          <Link href={item.path} key={item.id}> 
          <div
            className={`flex items-center gap-2 text-gray-600 
            p-3 cursor-pointer hover:bg-gray-100
             hover:text-black rounded-lg mb-3
             ${item.path == path && "bg-gray-100 text-black"} `}
          >
            <div className="text-2xl">{item.icon}</div>
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))}
      </ul>

      <div className='absolute bottom-10 w-[80%]'>
      {/* <Progress value={33} />
      <h2 className='text-sm my-2'>3 out of 5 course created</h2>
      <h2 className="text-xs text-gray-500">Upgrade your plan</h2> */}

      </div>
    </div>
  );
}

export default Sidebar;
