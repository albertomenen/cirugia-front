'use client'

import Image from 'next/image';
import Modal from './Modal';
import { ChangeEvent, useState } from 'react';
import Categories from '../add/Categories';

import useAddProcedureModal from '@/app/hooks/useProcedureModal';
import CustomButton from '../forms/CustomButton';
import SelectCountry, {SelectCountryValue} from '../forms/SelectCountry';

import apiService from '@/app/services/apiService';
import { useRouter } from 'next/navigation';

const AddProcedureModal = () => {

    //

    //States


    const [currentStep, setCurrentStep] = useState(1)
    const [errors, setErrors] =useState<string[]>([])
    const [dataCategory, setDataCategory]=useState('')
    const [dataTitle, setDataTitle] = useState('') //
    const [dataDescription, setDataDescription] = useState('') // descripcion del procedimiento
    const [dataPrice, setDataPrice] = useState('');  // Precio del tratamiento
    const [dataPayment, setDataPayment] = useState(''); // Metodos de pago que acepta en el centro
    const [dataFinance, setDataFinance] = useState('') // Si ofrece financiacion
    const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
    const [dataImage, setDataImage] = useState<File | null>(null);
    const [dataGuests, setDataGuests] = useState('');



    //
    //
    const addProcedureModal = useAddProcedureModal();
    const router = useRouter()

    //
    // Set Data

    const setCategory = (category:string) => {
        setDataCategory(category)
    }

    const setImage = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const tmpImage = event.target.files[0];

            setDataImage(tmpImage);
        }
    }

    //
    // Submit 

    const submitForm = async () => {
        console.log('submitForm');

        if (
            dataTitle &&
            dataDescription &&
            dataPrice &&
            dataPayment &&
            dataCountry &&
            dataImage
        ) {
            const formData = new FormData();
            formData.append('title', dataTitle)
            formData.append('description', dataDescription)
            formData.append('price_per_procedure', dataPrice)
            formData.append('payment', dataPayment)
            formData.append('guests', dataGuests)
            formData.append('country', dataCountry.label)
            formData.append('country_code', dataCountry.value)
            formData.append('image', dataImage)

            const response = await apiService.post('/api/procedures/create/',formData)

            if (response.success) {
                console.log('SUCESS')

                router.push('/');

                addProcedureModal.close();
;
            } else {
                console.log('Error');

                const tmpErrors: string[] = Object.values(response).map((error: any) => {
                    return error;
                })

                setErrors(tmpErrors)
            }
        }
    }

    //
    //

    
    const content = (
            <>
            {currentStep == 1 ? (

                <>

                        <Categories
                            dataCategory={dataCategory}
                            setCategory={(category) => setCategory(category)}

                        />

                     <CustomButton 
                            label='Next'
                            onClick={() => setCurrentStep(2)}
                    
             />

            </>

            ) : currentStep == 2 ? (
               <>

<h2 className='mb-6 text-2xl'>Describe el tratamiento</h2>

<div className='pt-3 pb-6 space-y-4'>
    <div className='flex flex-col space-y-2'>
        <label> Titulo</label>
        <input 
            type="text"
            value={dataTitle}
            onChange={(e)=> setDataTitle(e.target.value)}
            className='w-full p-4 border border-gray-600 rounded-xl'

            />
</div>
<div className='pt-3 pb-6 space-y-4'>
    <div className='flex flex-col space-y-2'>
        <label> Descripcion</label>
        <textarea 
            value={dataDescription}
            onChange={(e)=> setDataDescription(e.target.value)}
            className='w-full h-[200px] p-4 border border-gray-600 rounded-xl'

            ></textarea>
    </div>
</div>
    </div>


               <div className="flex justify-between">
        <CustomButton 
                label='Previous'
                className='bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg'
                onClick={() => setCurrentStep(1)}
        />

        <CustomButton 
                label='Next'
                className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ml-4' // Añadido ml-4 para margen izquierdo
                onClick={() => setCurrentStep(3)}
        />
    </div>


               </>
            ) : currentStep == 3 ? (

                <>
                <h2 className='mb-6 text-2xl'>Precio por cirugia </h2>

                <div className='pt-3 pb-6 space-y-4'>
    <div className='flex flex-col space-y-2'>
        <label> Precio de tratamiento</label>
        <input 
            type="text"
            value={dataPrice}
            onChange={(e)=> setDataPrice(e.target.value)}
            className='w-full p-4 border border-gray-600 rounded-xl'

            />
    </div>

    <div className='flex flex-col space-y-2'>
        <label> Tipo de pago aceptados</label>
        <select 
            value={dataPayment}
            onChange={(e)=> setDataPayment(e.target.value)}
            className='w-full p-4 border border-gray-600 rounded-xl'

            >
            <option value="">Opciones de pago</option>
        <option value="opcion1">Tarjeta</option>
        <option value="opcion2">Efectivo</option>
        <option value="opcion2">Pago online</option>
        </select>
        
    </div>
    <div className='flex flex-col space-y-2'>
        <label> Opción de Financiación</label>
        <select 
        value={dataFinance}
        onChange={(e) => setDataFinance(e.target.value)}
        className='w-full p-4 border border-gray-600 rounded-xl'
    >
        <option value="">Seleccione una opción</option>
        <option value="opcion1">Si</option>
        <option value="opcion2">No</option>
      
        
    </select>
    </div>
            <div className='flex flex-col space-y-2'>
                <label>Maximum number of guests</label>
                    <input
                        type="number"
                        value={dataGuests}
                        onChange={(e) => setDataGuests(e.target.value)}
                        className='w-full p-4 border border-gray-600 rounded-xl'
                        />
            </div>
</div>


                <CustomButton 
                    label='Previous'
                    className='bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-lg'
                    onClick={() => setCurrentStep(2)}
        />

                 <CustomButton 
                    label='Next'
                    className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ml-4' // Añadido ml-4 para margen izquierdo
                    onClick={() => setCurrentStep(4)}
        />
                </>
            
            ) : currentStep == 4 ? (
                <>
                    <h2 className='mb-6 text-2xl'>Location</h2>

                    <div className='pt-3 pb-6 space-y-4'>
                        <SelectCountry 
                            value={dataCountry}
                            onChange={(value) => setDataCountry(value as SelectCountryValue)}
                        />
                    </div>

                    <CustomButton
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(3)}
                    />

                    <CustomButton
                        label='Next'
                        onClick={() => setCurrentStep(5)}
                    />
                </>
            

            ) :  (

                <>
                <h2 className='mb-6 text-2xl'>Imagenes </h2>

                <div className='pt-3 pb-6 space-y-4'>
                    <div className='py-4 px-6 bg-gray-600 text-white rounded-xl'>
                        <input
                            type="file"
                            accept='image/*'
                            onChange={setImage}
                        />
                    </div>

                    {dataImage && (
                        <div className='w-[200px] h-[150px] relative'>
                            <Image 
                                fill
                                alt="Uploaded image"
                                src={URL.createObjectURL(dataImage)}
                                className='w-full h-full object-cover rounded-xl'

                            />
                        
                        </div>
                    )}
                </div>

                {errors.map((error, index) => {
                    return (
                        <div 
                            key={index}
                            className='p-5 mb-4 bg-airbnb-dark text-white rounded-xl opacity-80'
                            >
                                {error}
                            </div>
                    )
                })}

                <CustomButton
                        label='Previous'
                        className='mb-2 bg-black hover:bg-gray-800'
                        onClick={() => setCurrentStep(4)}
                    />

                    <CustomButton
                        label='Submit'
                        onClick={submitForm}
                    />

                </>
            )}
        </>

        
    )

    return(
        <>
            <Modal 
                isOpen={addProcedureModal.isOpen}
                close={addProcedureModal.close}
                label= "Add procedure"
                content={content}
            />
        </>
    )
}

export default AddProcedureModal