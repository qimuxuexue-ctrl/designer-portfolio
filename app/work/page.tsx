import { SectionIntro } from "@/components/SectionIntro";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata = {
  title: "Work | North Studio Portfolio"
};

export default function WorkPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-20">
      <SectionIntro
        eyebrow="Portfolio"
        title="A focused archive of recent studio projects."
        body="Each project is represented with mock data and placeholder imagery so you can replace the content with your own work later."
      />
      <WorkGrid />
    </main>
  );
}
