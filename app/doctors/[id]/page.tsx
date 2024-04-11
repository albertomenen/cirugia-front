import Image from "next/image"

import ContactButton from "@/app/components/ContactButton"
import ProcedureList from "@/app/components/procedures/ProcedureList"
import apiService from "@/app/services/apiService"
import { getUserId } from "@/app/lib/actions"

const DoctorDetailPage = async ({params}: {params: {id:string}}) => {
    const doctor = await apiService.get(`/api/auth/${params.id}`)
    const userId = await getUserId();
    console.log(doctor)

    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <aside className="col-span-1 mb-4">
                    <div className="flex flex-col items-center p-6 rounded-xl border border-gray-3000 shadow-xl">
                        <Image 
                            src={doctor.avatar_url}
                            width={200}
                            height={200}
                            alt= "Proceso"
                            className="rounded-full"
                            />

                            <h1 className="mt-6 text-2xl">{doctor.name}</h1>

                            {userId != params.id && (

                                <ContactButton />

                            )}

                            <ContactButton />
                    </div>
                    doctor hola
                </aside>

                <div className="col-span-1 md:col-span-3 pl-0 md:pl-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <ProcedureList
                            doctor_id={params.id}
                        />
                    </div>
                </div>
            </div>
        </main>
    )

}

export default DoctorDetailPage