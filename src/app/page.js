'use client'
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const redireccionar = () => {
    router.push('/validator');
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {redireccionar()}
    </main>
  );
}
