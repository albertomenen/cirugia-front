import Image from 'next/image'

const Categories = () => {
    return (
       <div className="pt3- cursor-pointer pb-6 flex items-center space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-black hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/service2.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Aumento de pecho</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-black hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/service3.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Rinoplastia</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-black hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/service4.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Lifting facial</span>
            </div>

            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-black hover:border-gray-200 hover:opacity-100">
                <Image 
                    src="/service5.png"
                    alt="Category - Aumento"
                    width={40}
                    height={40}
                    />

                    <span className="text-xs"> Liposucción</span>
            </div>

       </div>
    )   
}

export default Categories;