import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-[32px] sm:items-start">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl">a NextJs Starter Project 📦</h1>
          <Button variant={"default"} className="cursor-pointer">
            Get Started 🚀
          </Button>
        </div>
      </main>
    </div>
  );
}
