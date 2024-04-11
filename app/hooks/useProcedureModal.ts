import {create} from "zustand"

interface AddProcedureModalStore {
    isOpen:boolean;
    open: () => void;
    close: () => void;
}

const useAddProcedureModal = create<AddProcedureModalStore>((set => ({
    isOpen: false,
    open: () => set ({ isOpen:true}),
    close: () => set ({ isOpen:false})
})))

export default useAddProcedureModal