const SearchFilters = () => {
    return (
        <div className="h-[64px] log:h-[64] flex flex-row items-center justify-between border rounded-full">
            <div className="hidden lg:block">
                <div className="flex flex-raw items-center justify-between">
                    <div className="cursor-pointer w- [250px] h-[64px] px-20 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="tex-xs font-semibold">Where</p> 
                        <p className="text-sm"> Wanted location</p>
                    </div>

                    <div className="cursor-pointer h-[64px] log:h-[64] px-20 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="tex-xs font-semibold">Appointment time</p> 
                        <p className="text-sm"> Add dates</p>
                    </div>

                    <div className="cursor-pointer h-[64px] log:h-[64] px-20 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="tex-xs font-semibold">Range appointment</p> 
                        <p className="text-sm"> Add dates</p>
                    </div>

                    <div className="cursor-pointer h-[64px] log:h-[64] px-20 flex flex-col justify-center rounded-full hover:bg-gray-100">
                        <p className="tex-xs font-semibold">Who</p> 
                        <p className="text-sm"> Add people</p>
                    </div>

                </div>
            </div>

            <div className="p-3">
                <div className="cursor-pointer p-2 log:p-4 bg-airbnb-dark hover:bg-airbnb transition rounded-full text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>

                </div>
            </div>
        </div>
    )
}

export default SearchFilters;