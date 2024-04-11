import Image from "next/image";

interface CategoriesProps  {
    dataCategory : string;
    setCategory: (category:string) =>void
}

const Categories: React.FC<CategoriesProps> = ({
    dataCategory,
    setCategory
}) => {
    return(
        <>
            <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
            <div
                onClick={() => setCategory('Aumento de pecho')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Aumento' ? 'border-gray-800' :'border-black' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                <Image 

                    src="/service2.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Aumento de pecho</span>
            </div>

            <div
                onClick={() => setCategory('Rinoplastia')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Rinoplastia' ? 'border-gray-800' :'border-black' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                <Image 
                    src="/service3.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Rinoplastia</span>
            </div>

            <div
                onClick={() => setCategory('Lifting')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Lifting Facial' ? 'border-gray-800' :'border-black' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                <Image 
                    src="/service4.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Lifting facial</span>
            </div>

            <div
                onClick={() => setCategory('Liposuccion')}
                className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${dataCategory == 'Liposuccion' ? 'border-gray-800' :'border-black' } opacity-60 hover:border-gray-200 hover:opacity-100`}
                >
                <Image 
                    src="/service5.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Liposucción</span>
            </div>
            </div>
        </>
    )
}

export default Categories