'use client';

import Select from 'react-select'
import useCountries from '@/app/hooks/useCountries';

export type SelectCountryValue = {
    label: string;
    value: string;
}

interface SelectCountryProps {
    value?: SelectCountryValue;
    onChange: (value:SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> =({
    value,
    onChange
}) => {
    const {getAll} = useCountries()
    return (
        <>
        {/* todo : hacer que solo sean paises de España o limitar los sitios donde aparece la opcion */}
            <Select 
                isClearable
                placeholder="Anywhere"
                options={getAll()}
                value={value}
                onChange={(value) => onChange(value as SelectCountryValue)}
            />

        </>
    )
}

export default SelectCountry
