"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Prevents SSR rendering

  return (
    <div className="flex justify-between p-5 shadow-sm">
      <Image src={"/next.svg"} width={100} height={100} alt="image" priority />
      <Button>Get Started</Button>
    </div>
  );
}

export default Header;
