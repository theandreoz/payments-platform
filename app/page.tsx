import Link from 'next/link';
import { SignInButton, SignUpButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default async function Home() {
  const { userId } = await auth();

  let href = userId ? '/home' : '/new-user';

  return (
    <div className="flex h-screen flex-col items-center bg-black">
      <div className="flex h-16 w-full items-center justify-between px-4 text-white">
        LOGO
        <div className="flex gap-2">
          {userId ? (
            <Link href="/dashboard">
              <Button
                variant="default"
                className="rounded-lg bg-white px-4 py-2 text-black hover:bg-slate-500"
              >
                Dashboard
              </Button>
            </Link>
          ) : (
            <>
              <div className="rounded-lg bg-white px-4 py-2 text-black hover:bg-slate-500">
                <SignInButton>Log in</SignInButton>
              </div>
              <div className="rounded-lg bg-black px-4 py-2 text-white hover:bg-slate-700">
                <SignUpButton>Create an account</SignUpButton>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="flex h-full w-full justify-center">
        <Tabs defaultValue="payingRent" className="flex h-full w-2/3 flex-col">
          <TabsList className="border border-slate-900 bg-black">
            <TabsTrigger value="payingRent">Paying Rent</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="insider">Insider</TabsTrigger>
          </TabsList>

          <TabsContent value="payingRent" className="h-full">
            <div className="flex h-full justify-between">
              <div className="flex flex-1 items-center justify-start bg-black text-white">
                <div className="flex flex-col gap-2">
                  <h1 className="mb-4 text-6xl">The Best Payments Platform</h1>
                  <div className="flex flex-col">
                    <p className="mb-4 text-2xl text-white/60">
                      This is the only app you need to pay your rent.
                    </p>
                    <p className="mb-4 text-2xl text-white/60">
                      Use your credit card and earn up to 4% back.
                    </p>
                  </div>
                  <div>
                    <Link href={href}>
                      <Button variant="default" size="lg">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="w-1/3 text-white">IMAGE HERE</div>
            </div>
          </TabsContent>

          <TabsContent value="rewards">
            <div className="text-white">Accumulate rewards.</div>
          </TabsContent>

          <TabsContent value="features">
            <div className="text-white">Check out our features.</div>
          </TabsContent>

          <TabsContent value="insider">
            <div className="text-white">For your eyes only.</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
