
import Image from "next/image"

import apiService from "../services/apiService"
import Link from "next/link"

import { useRouter } from "next/navigation"

import ContactButton from "@/app/components/ContactButton"
import ProcedureList from "@/app/components/procedures/ProcedureList"


const MyReservationsPage = async () => {
    
    const reservations = await apiService.get('/api/auth/myreservations/')
    console.log(reservations);
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <h1 className="mt-6 mb-2 text-2xl">reservation.procedures</h1>

            <div className="space-y-4">
                {reservations.map((reservation: any) => {
                    const defaultImageUrl = '/profile-pic1.png';
                    const imageUrl = reservation.procedures?.image_url ?? defaultImageUrl ;
                      

                    return (
              
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image 
                                fill
                                src={imageUrl}
                                className="hover:scale-110 object-cover transition h-full w-full"
                                alt="Doctor"
                                />

                        </div>
                    </div>  

                    <div className="col-span-1 md:col-span-3 space-y-2">
                        <h2 className="mb-4 text-xl"> Cita programada {reservation.procedure}</h2>

                        <p className="mb-2"><strong> Reserva para</strong> {reservation.start_date}</p>

                        <p className="mb-2"><strong>Reserva confirmada con</strong> Doctor</p>

                        <p className="mb-2"><strong>Precio Aproximado de intervención</strong> {reservation.total_price}</p>


                        <Link 
                                    href={`/procedures/${reservation.id}`}
                                    className="mt-6 inline-block cursor-pointer py-4 px-6 bg-airbnb text-white rounded-xl"
                                >
                                    Go to property
                        </Link>
                    </div> 
                </div>
                    )
                  })}
            </div>
        </main>
    )
}

export default MyReservationsPage