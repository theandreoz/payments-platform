import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? '/journal' : '/new-user';

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black text-white">
      <div className="mx-auto w-full max-w-[600px]">
        <h1 className="mb-4 text-6xl">The Best Payments Platform</h1>
        <p className="mb-4 text-2xl text-white/60">
          This is the best app for paying your rent. Period.
        </p>
        <div>
          <Link href={href}>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-xl">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
