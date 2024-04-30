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
    is_favorite: boolean
}

interface ProcedureListProps {
    doctor_id?: string | null
    favorites?:boolean | null;
}

const ProcedureList: React.FC <ProcedureListProps> = ({
    doctor_id,
    favorites

}) => {
    const  [procedures, setProcedures] = useState<ProcedureType[]>([]);

    const markFavorite = (id:string, is_favorite:boolean) => {
        const tmpProcedures = procedures.map((procedures:ProcedureType) => {
            if (procedures.id == id) {
                procedures.is_favorite = is_favorite
            if (is_favorite) {
                console.log("add to the favorite list")
            } else {
                console.log("removed from list")
            }
        }
        return procedures

        })

        setProcedures(tmpProcedures)
    }    
    const getProcedures= async () => {
        let url = '/api/procedures';

        if (doctor_id) {
            url += `?doctor_id=${doctor_id}`

        } else if (favorites) {

            // todo: puede ser que sea is_favorites ? 
            url += '?is_favorites=true'
        }

        const tmpProcedures = await apiService.get(url)

        setProcedures(tmpProcedures.data.map((procedures: ProcedureType) => {
            if (tmpProcedures.favorites.includes(procedures.id)) {
                procedures.is_favorite = true
            } else {
                procedures.is_favorite = false
            }

            return procedures
        }));
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
                        markFavorite={(is_favorite: any) => markFavorite(procedures.id, is_favorite)}
                    />
                )
            })}
            
        </>
    )
}

export default ProcedureList