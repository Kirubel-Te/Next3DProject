import Image from "next/image";

export default function Home() {
  return (
    <main className="relative grid md:grid-cols-2 grid-cols-1 gap-5 w-[80%] mt-12 mb-5 mx-auto">
      <div className="pt-12 px-3">
        <p className="mb-5 uppercase">Your go-to platform for 3D printing files</p>
        <h1 className="text-6xl font-bold mb-8">Discover what's possible with 3D printing</h1>
        <p className="text-xl mb-8">Join our community of creators and explore a vast library of user-submitted models.</p>
        <button className="border-2 px-5 py-2 font-semibold cursor-pointer">Browse Models</button>
      </div>
      <div className="pt-12 px-3 flex justify-center">
        <div className="relative">
          <Image
            src="/hero-image 1.png"
            alt="3D Printing Illustration"
            width={450}
            height={450}
            className="rounded-full object-cover"
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[100px] -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-46 w-46 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
        </div>
      </div>
      
    </main>
  );
}
