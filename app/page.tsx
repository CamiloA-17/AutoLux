import { Header, Card } from "@/components";
import { CrudComponent } from "../crudComponent";

export default function Home() {
  return (
    <div>
        <Header />
        <main className="w-full max-w-screen-xl mx-auto flex flex-wrap mt-10 justify-evenly gap-10">
        <CrudComponent /> 
        </main>
    </div>
  );
}