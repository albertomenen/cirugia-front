import Categories from "./components/Categories";
import ProcedureList from "./components/procedures/ProcedureList";

export default function Home() {
  return (
    <main className="max-w-[1500px] mx-auto px-6">
      

      <Categories />

      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grids-cols-5 gap-6">
      <ProcedureList />
      </div>

      
    </main>
  );
}
