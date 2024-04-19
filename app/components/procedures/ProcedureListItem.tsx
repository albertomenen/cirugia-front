import { defaultMaxListeners } from "events";
import Image from "next/image";
import { ProcedureType } from "./ProcedureList";
import { useRouter } from "next/navigation";
import FavoriteButton from "../FavoriteButton";

interface ProcedureProps {
    procedures: ProcedureType
    markFavorite?: (is_favorite: boolean) => void
}

const ProcedureListItem: React.FC<ProcedureProps> = ({
    procedures,
    markFavorite

}) => {
    const router = useRouter();
    return (
        <div 
            className="cursor-pointer"
            onClick={() => router.push(`/procedures/${procedures.id}`)}
        >
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={procedures.image_url}
                    sizes="(max-width: 768px) 768px, (mac-width:1200px): 768px, 768px" 
                    className="hover:scale-110 object-cover transition h-full w-full"
                    alt="Aumento de pecho"
                />

                {markFavorite && (
                    <FavoriteButton
                        id={procedures.id}
                        is_favorite={procedures.is_favorite}
                        markFavorite={(is_favorite)=> markFavorite(is_favorite)}
                    />
                )}
            </div>
            <div className="mt-2">
                <p className="text-lg font-bold">{procedures.title}</p>
            </div>

            <div className="mt-2">
                <p className="text-sm text-gray-500">${procedures.price_per_procedure}<strong> procedimiento</strong></p>
            </div>
        </div>
    )
}

export default ProcedureListItem