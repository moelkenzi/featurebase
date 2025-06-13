import Link from "next/link";

import { Logo } from "../icons";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative container flex min-h-screen flex-col items-center justify-center overflow-hidden overflow-y-auto py-20 sm:py-24 lg:py-32">
      <main className="grid flex-1 items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
        <div className="flex flex-col items-center gap-[32px] sm:items-start">
          <div className="flex flex-col items-center justify-center gap-4">
            <Link href="/">
              <div className="inline-flex cursor-pointer items-center text-lg font-bold text-gray-600 dark:text-gray-50">
                <div className="mr-2 text-indigo-500">
                  <Logo />
                </div>
                Featurebase
              </div>
            </Link>
            <h1 className="text-2xl">a NextJs Starter Project 📦 for </h1>
            <Button variant={"primary"} className="cursor-pointer">
              Get Started 🚀
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Hero;
