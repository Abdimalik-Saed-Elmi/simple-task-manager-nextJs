import { Toaster } from "sonner";
import TaskList from "./_components/task-list";

export default function Page() {
  return (
    <main className="p-10">
      <Toaster />
      <TaskList />
    </main>
  );
}
