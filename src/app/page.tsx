import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Link href={"/documents/123"}>
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
