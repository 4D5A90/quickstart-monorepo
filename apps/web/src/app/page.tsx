"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Label } from "@monorepo/ui/components/ui/label";

export default function Home() {
  const { isConnected } = useAccount();
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-col justify-center items-center m-auto gap-4">
        <Label>
          <b>
            Hello{" "}
            {isConnected ? (
              <>
                <s>World</s> Web3
              </>
            ) : (
              "World"
            )}
          </b>
        </Label>
        <ConnectButton />
      </main>
    </div>
  );
}
