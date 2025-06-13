import Link from "next/link";

import { FooterLinks, FooterSocialLinks } from "@/lib/data";

import { GreenDot, Logo } from "../icons";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-background relative bottom-0 z-50 container mx-auto w-full transform-gpu overflow-y-auto border-t border-white/5 px-4 py-10 backdrop-blur-sm transition-colors duration-200 ease-in dark:bg-transparent dark:shadow-none">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl py-12 sm:py-16">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* Left */}
            <div className="flex flex-col xl:col-span-1">
              <Link href="/" className="flex items-center">
                <div className="inline-flex cursor-pointer items-center text-lg font-bold text-gray-600 dark:text-gray-50">
                  <Logo className="mr-3 self-center text-indigo-500" />
                  Featurebase
                </div>
              </Link>
              <p className="my-5 flex max-w-sm items-center text-base leading-6 text-gray-500 dark:text-gray-200">
                The next-gen support & feedback platform for modern teams.
                Built-in the
              </p>
              {/* <iframe src="/" className="mt-3 -ml-1.5 opacity-[63%]">
                <Link href="/">
                  <div className="mr-2 inline-block h-[18px] w-[18px] text-center leading-none">
                    <GreenDot />
                  </div>
                  <div className="text-[14px] font-medium text-neutral-600 dark:text-white">
                    All services are online
                  </div>
                </Link>
              </iframe> */}

              <Link
                href="/"
                className="inline-flex h-[30px] shrink items-center rounded"
              >
                <div className="mr-2 inline-block h-[18px] w-[18px] text-center leading-none">
                  <GreenDot />
                </div>
                <div className="text-[14px] font-medium text-neutral-600 dark:text-white">
                  All services are online
                </div>
              </Link>
              <div className="mt-16 flex space-x-3">
                {FooterSocialLinks.map((link) => (
                  <Link
                    href={link.href}
                    key={link.id}
                    className="main-transition dark:border-gray-750/60 inline-flex h-9 w-9 items-center justify-center rounded-full border border-gray-100/60 bg-gray-50 text-gray-200 hover:bg-gray-100/60 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <Button variant={"smIcon"}>{<link.icon />}</Button>
                  </Link>
                ))}
              </div>
            </div>
            {/* Center */}
            <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <p className="text-sm leading-5 font-medium tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                    PRODUCTS
                  </p>
                  <ul className="mt-4">
                    {FooterLinks.map((link) => (
                      <li key={link.name} className="mt-4">
                        <Link
                          href={link.href}
                          className="transform text-base leading-6 text-gray-400 duration-300 dark:text-gray-200 dark:hover:text-indigo-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <p className="text-sm leading-5 font-medium tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                    COMPANY
                  </p>
                  <ul className="mt-4">
                    {FooterLinks.map((link) => (
                      <li key={link.name} className="mt-4">
                        <Link
                          href={link.href}
                          className="transform text-base leading-6 text-gray-400 duration-300 dark:text-gray-200 dark:hover:text-indigo-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="md:mt-0">
                  <p className="text-sm leading-5 font-medium tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                    RESOURCES
                  </p>
                  <ul className="mt-4">
                    {FooterLinks.map((link) => (
                      <li key={link.name} className="mt-4">
                        <Link
                          href={link.href}
                          className="transform text-base leading-6 text-gray-400 duration-300 dark:text-gray-200 dark:hover:text-indigo-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <p className="text-sm leading-5 font-medium tracking-wider text-gray-300 uppercase dark:text-gray-200/80">
                    SUPPORT
                  </p>
                  <ul className="mt-4">
                    {FooterLinks.map((link) => (
                      <li key={link.name} className="mt-4">
                        <Link
                          href={link.href}
                          className="transform text-base leading-6 text-gray-400 duration-300 dark:text-gray-200 dark:hover:text-indigo-200"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
