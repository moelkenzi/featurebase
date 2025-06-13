import Image from "next/image";

import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main>
      <div className="relative">
        <div className="absolute inset-0 -z-50 h-[1596px] w-full">
          <Image
            src="/image.png"
            alt="Upper section background"
            fill
            priority
            className="object-cover opacity-25"
          />
        </div>
        <div className="absolute inset-0 -z-40 h-full w-full bg-gradient-to-t from-gray-950 to-transparent backdrop-blur-3xl"></div>
      </div>
      <Hero />
    </main>
  );
}
