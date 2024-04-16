import Image from "next/image"
import Link from "next/link";
import ReservationSidebar from "@/app/components/procedures/ReservationSidebar"

import apiService from "@/app/services/apiService";
import { getUserId } from "@/app/lib/actions";


const PrecedureDetailPage = async ({params}: {params: {id:string}}) => {
    const procedures = await apiService.get(`/api/procedures/${params.id}`)
    const userId = await getUserId();

    console.log('userid',userId)
    console.log('procedure', params.id)

    return(
        <main className="max-w-[1500px] mx-auto px-6">
            <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
                <Image 
                    fill
                    src='/rino-despues.jpg'
                    className="object-cover w-full h-full"
                    alt="rino despues tratamiento"
                    />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl"> {procedures.title} </h1>

                    <span className="mb-6 block text-lg text-gray-600">
                        {procedures.hospitals}
                    </span>

                    <hr />

                    <Link 
                        href={`/doctors/${procedures.doctor.id}`}
                        className="py-6 flex items-center space-x-4"
                    >
                        {procedures.doctor.avatar_url && (
                        <Image  
                            src={procedures.doctor.avatar_url}
                            width={50}
                            height={50}
                            className="rounded-full"
                            alt="Doctor Puertas"
                            />
                        )}

                        <p><strong>{procedures.doctor.name}</strong> sería tu doctor</p>

                    </Link>

                    <p className="mt-6 text-lg">
                        {procedures.description}
                    </p>

                    <hr />


                </div>

                <ReservationSidebar 
                    procedure={procedures}
                    userId={userId}
                />
            </div>

        </main>
    )
}

export default PrecedureDetailPage