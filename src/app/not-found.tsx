import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function NotFound() {
  return (
    <div className="flex flex-col flex-1 text-center justify-center">
      <div>
        <h1 className="inline-block border-r-2 border-r-white/50 pr-6 text-2xl font-semibold leading-10">
          404
        </h1>
        <h2 className="m-0 inline-block pl-6 font-medium leading-10">
          This page could not be found.
        </h2>
      </div>
      <div>
        <Link href="/" className={cn("mt-4", buttonVariants())}>
          Return Home
        </Link>
      </div>
    </div>
  );
}
