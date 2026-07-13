import { WorkFilter } from "@/components/WorkFilter";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Hinna | Make things make sense"
};

export default function WorkPage() {
  return <WorkFilter projects={projects} />;
}
