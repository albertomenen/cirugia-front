'use client'

import { useState,useEffect } from "react";
import {Range} from 'react-date-range'
import {differenceInDays, eachDayOfInterval, format} from "date-fns";
import DatePicker from "../forms/Calendar";

import { ProcedureType } from "./ProcedureList";
import apiService from "@/app/services/apiService";
import useLoginModal from "@/app/hooks/useLoginModal";
import { difference } from "next/dist/build/utils";

const initialDateRange = {
     startDate: new Date(),
     endDate: new Date(),
     key:'selection'
}

interface ProcedureProps {
     procedures: ProcedureType
 }

export type Procedures = {
     id: string;
     guests:number;
     description: string;
     price_per_procedure: number;

}

interface ReservationSidebarProps { 
     userId: string | null,
     procedure: Procedures
}


const ReservationSidebar: React.FC<ReservationSidebarProps> = ({
     procedure,
     userId
}) => {
     const loginModal = useLoginModal();


     const [fee, setFee] = useState<number>(0);
     const [totalPrice, setTotalPrice] = useState<number>(0);
     const [dateRange, setDateRange] = useState<Range>(initialDateRange);
     const [bookedDates, setBookedDates] = useState<Date[]>([]);
     const [minDate, setMinDate] = useState<Date>(new Date());
     const [guests, setGuests] = useState<string>('1')
     const guestRange = Array.from({length: procedure.guests}, (_, index) => index +1)

     const performBooking = async () => {
          if(userId) {
               if(dateRange.startDate && dateRange.endDate) {
                    const formData = new FormData();
                    formData.append('guests', guests);
                    formData.append('start_date', format(dateRange.startDate, 'yyyy-MM-dd'));
                    formData.append('end_date', format(dateRange.endDate, 'yyyy-MM-dd'));
                    formData.append('total_price', totalPrice.toString());

                    const response = await apiService.post(`/api/procedures/${procedure.id}/book/`, formData)
                    console.log(response)

                    if (response.success) {
                         console.log('Booking successfully')
                    } else {
                         console.log('Something went wrong')
                    }

               }
          } else {
               loginModal.open();
          }
     }

     const _setDateRange = (selection: any) => {
          const newStartDate = new Date(selection.startDate);
          const newEndDate = new Date(selection.endDate);

          if (newEndDate <= newStartDate) {
               newEndDate.setDate(newStartDate.getDate() + 1);
          }

          setDateRange( {
               ...dateRange,
               startDate: newStartDate,
               endDate: newEndDate
     })
     }

     const getReservations = async () => {
          const reservations = await apiService.get(`/api/procedures/${procedure.id}/reservations`)

          let dates: Date[] = [];

          reservations.forEach((reservation:any) => {
               const range = eachDayOfInterval({ 
                    start: new Date(reservation.start_date),
                    end: new Date(reservation.end_date)
               });

               dates = [...dates, ...range]
          })

          setBookedDates(dates);
     }

     //todo:  Variar estos valores según la estructura de comisiones que tengamos especificada.

     useEffect(() => {
          getReservations();
          if(dateRange.startDate && dateRange.endDate) {
               const dayCount = differenceInDays (
                    dateRange.endDate,
                    dateRange.startDate

               );

               if(dayCount && procedure.price_per_procedure) {
                    const _fee = ((procedure.price_per_procedure) / 100) * 5;

                    setFee(_fee);
                    setTotalPrice((procedure.price_per_procedure) + _fee);
                    
               } else {
                    const _fee = (procedure.price_per_procedure / 100) * 5;

                    setFee(_fee)
                    setTotalPrice(procedure.price_per_procedure + _fee);
               }
               console.log(procedure)
               console.log(procedure.id)
          }

     }, [dateRange])

    return (
        <aside className="mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl pb-6">
           <h2 className="mb-5 text-2xl">{procedure.price_per_procedure}€ procedimiento</h2> 

           <DatePicker 
               value={dateRange}
               bookedDates={bookedDates}
               onChange={(value) => _setDateRange(value.selection)}

               />

           <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label className="mb-2 block font-bold text-xs">Opciones</label>
                <select 
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full ml-1 text-xm"
                    >
                    {guestRange.map(number => (
                         <option key= {number} value={number}>{number}</option>
                    ))}
                </select>
           </div>

           <div 
               onClick={performBooking}
               className="w-full mb-6 py-6 text-center text-white bg-airbnb-color hover:bg-airbnb-boton rounded-xl"
               >
                    Reservar
               </div>

           <div className="mb-4 flex justify-between align-center">
                <p>$ {procedure.price_per_procedure}</p>

                <p>{procedure.description}</p>
           </div>

           <div className="mb-4 flex justify-between align-center">
                <p>$ {fee}</p>

                <p> IVA aplicable  </p>
           </div>

           <hr />

           <div className="mt-4 flex justify-between align-center font-bold">
                <p>Total</p>

                <p> ${totalPrice}</p>
           </div>
        </aside>
    )
}

export default ReservationSidebar