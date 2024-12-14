import Image from "next/image";

export default function Home() {
  return (
    <main className="flex ">
      <h1>welcome to nextjs</h1>
      <Image src="/vercel.svg" alt="Vercel logo" width={72} height={16} />
      </main>
  );
}
