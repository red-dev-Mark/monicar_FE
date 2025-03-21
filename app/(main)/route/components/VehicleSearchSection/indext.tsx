import { ChangeEvent } from 'react'

import SearchInput from '@/components/common/Input/SearchInput'
import { useQueryParams } from '@/hooks/useQueryParams'
import { validateVehicleNumber } from '@/lib/utils/validation'
interface VehicleSearchSectionProps {
    value: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onError?: (message: string) => void
}

const VehicleSearchSection = ({ value, onChange, onError }: VehicleSearchSectionProps) => {
    const { updateQueries } = useQueryParams()

    const handleInputSubmit = () => {
        const validation = validateVehicleNumber(value)
        if (!validation.isValid) {
            onError?.(validation.message!)
            return
        }
        updateQueries({ vehicleNumber: value }, ['endLat', 'endLng', 'startDate', 'endDate'])
    }

    return (
        <SearchInput
            value={value}
            onChange={onChange}
            onSubmit={handleInputSubmit}
            placeholder='차량번호 검색'
            icon='/icons/pink-search-icon.svg'
            style={{ borderRadius: '8px', boxShadow: 'none' }}
        />
    )
}

export default VehicleSearchSection
