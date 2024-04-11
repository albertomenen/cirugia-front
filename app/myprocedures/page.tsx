import Image from "next/image";

import  { getUserId } from "../lib/actions";
import ProcedureList from "../components/procedures/ProcedureList";

const myProcedures = async () => {
    const userId = await getUserId()

    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="my-6 text-2xl"> Mis procedimientos</h1>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grids-cols-5 gap-6">
                <ProcedureList
                    doctor_id={userId}
                    />
      </div>
        </main>


        
    )
}

export default myProcedures