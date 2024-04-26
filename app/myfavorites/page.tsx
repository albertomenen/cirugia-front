import ProcedureList from "../components/procedures/ProcedureList";
import { getUserId } from "../lib/actions";

const MyFavoritesPage = async () => {
    const userId = await getUserId()
    
    if(!userId) {
        return(
            <main className="max-w-[1500px] max-auto px-6 py-12">
                <p> Necesitas estar registrado con nosotros para poder encontrar tus favoritos</p>
            </main>
        )
    }
    return (
        <main className="max-w-[1500px] max-auto px-6 pb-12">
            <h1 className="my-6 text-2xl"> Mis favoritos</h1>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grids-cols-5 gap-6">
                <ProcedureList
                 favorites={true}
                />
</div>
        </main>

    )
}

export default MyFavoritesPage