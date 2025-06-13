import Link from "next/link";

import { Navlinks } from "@/lib/data";

import { Logo, MenuIcon } from "../icons";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 z-50 h-[54.5px] w-full transform-gpu border-b border-white/5 bg-white/5 px-4 backdrop-blur-sm transition-colors duration-200 ease-in sm:px-6 lg:px-8 dark:bg-gray-900/5 dark:shadow-none">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between border-gray-100 md:justify-center md:space-x-12">
        <div className="-mr-4 flex justify-start">
          <Link href="/">
            <div className="inline-flex cursor-pointer items-center text-lg font-bold text-gray-600 dark:text-gray-50">
              <div className="mr-2 text-indigo-500">
                <Logo />
              </div>
              Featurebase
            </div>
          </Link>
        </div>
        <nav className="mx-auto hidden w-full items-center text-gray-300 md:flex md:justify-center dark:text-gray-100">
          <nav
            aria-label="Main"
            data-orientation="horizontal"
            dir="ltr"
            className="z-10 flex max-w-max flex-1 items-center justify-center"
          >
            <div className="relative">
              <ul
                className="group !m-0 flex flex-1 list-none items-center justify-center !p-0"
                data-orientation="horizontal"
                dir="ltr"
              >
                {Navlinks.map((link) => (
                  <li key={link.name}>
                    <Button variant="navlink">{link.name}</Button>
                    <span
                      aria-hidden="true"
                      tabIndex={0}
                      className="sr-only absolute -m-px h-[1px] w-[1px] overflow-hidden bg-red-500 whitespace-nowrap"
                      style={{
                        border: 0,
                        padding: 0,
                        clip: "rect(0,0,0,0)",
                        overflowWrap: "normal",
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* Dropdown Card */}
            {/* <div className="absolute inset-0 top-full flex justify-center">
              <div
                data-state="open"
                data-orientation="horizontal"
                className="origin-top-center NavigationMenuViewport relative -mt-0.5 h-[466px] w-full overflow-hidden rounded-lg border border-gray-100/60 bg-white text-gray-200 shadow-lg md:w-[1216px] dark:border-gray-800 dark:bg-gray-900"
              >
                <SolutionsDropdown />
              </div>
            </div> */}
          </nav>
        </nav>
        <div className="hidden flex-1 flex-shrink-0 items-center justify-end md:flex md:flex-shrink-0">
          <Link href="/">
            <Button variant="def">Login</Button>
          </Link>
          <Link href="/" className="hidden flex-shrink-0 xl:block">
            <Button variant="primary">Start for free</Button>
          </Link>
        </div>
        {/* Nav-2 */}
        <div className="-my-2 -mr-2 md:hidden">
          <Button variant={"icon"}>
            <span className="sr-only">Open menu</span>
            <MenuIcon />
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Header;
