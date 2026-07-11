import { Footer } from "@/components/footer";
import Bio from "@/content/bio.mdx";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1 mx-auto max-w-4xl w-full p-6 sm:p-8">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
          0xherve
        </h1>

        <div className="typeset">
          <Bio />
        </div>
      </main>

      <Footer />
    </div>
  );
}
