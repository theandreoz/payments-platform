import { Button } from '@/components/ui/button';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? '/journal' : '/new-user';

  return (
    <div className="flex h-screen flex-col bg-black">
      <div className="flex h-16 items-center justify-between px-4 text-white">
        LOGO
      </div>

      <div className="flex w-screen flex-1 items-center justify-center bg-black text-white">
        <div className="mx-auto w-full max-w-[600px]">
          <h1 className="mb-4 text-6xl">The Best Payments Platform</h1>
          <p className="mb-4 text-2xl text-white/60">
            This is the only app you need to pay your rent. Period.
          </p>
          <div>
            <Link href={href}>
              <Button variant="default" size="lg">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
