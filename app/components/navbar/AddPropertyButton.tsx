'use client'

import useLoginModal from "@/app/hooks/useLoginModal";
import useAddProcedureModal from "@/app/hooks/useProcedureModal";
import AddProcedureModal from "../modals/AddProcedureModal";

interface AddPropertyButtonProps{
    userId?: string | null;
}


const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({
    userId
}) => {
    const loginModal = useLoginModal();
    const addProcedureModal = useAddProcedureModal();

    const procedureYourTreatment = () => {
        if(userId) {
        addProcedureModal.open()
        } else {
            loginModal.open()
        }
    }
    return (
        <div 
            onClick={procedureYourTreatment}
            className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-200">
            Medic your place
        </div>
    )
}

export default AddPropertyButton;