'use client';
import apiService from "@/app/services/apiService";

import { useEffect, useState } from "react";

import ProcedureListItem from "./ProcedureListItem";

import { defaultMaxListeners } from "events";

export type ProcedureType = {
    id: string
    title: string
    price_per_procedure: number
    image_url:string
}

interface ProcedureListProps {
    doctor_id?: string | null
}

const ProcedureList: React.FC <ProcedureListProps> = ({
    doctor_id

}) => {
    const  [procedures, setProcedures] = useState<ProcedureType[]>([]);
    const getProcedures= async () => {
        let url = '/api/procedures';

        if (doctor_id) {
            url += `?doctor_id=${doctor_id}`

        }

        const tmpProcedures = await apiService.get(url)

        setProcedures(tmpProcedures.data);
    }

    useEffect(() => {

        getProcedures();
    }, [])
    return (
        <>
            {procedures.map((procedures)=> {
                return (
                    <ProcedureListItem
                        key={procedures.id}
                        procedures={procedures}
                    />
                )
            })}
            
        </>
    )
}

export default ProcedureList