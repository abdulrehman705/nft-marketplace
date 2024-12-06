'use client'

import { useState } from 'react'

interface AmountInputProps {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
}

const MarketPrice = ({
  value: initialValue = 1000,
  onChange,
  min = 0,
  max = 1000000,
  step = 100
}: AmountInputProps) => {
  const [value, setValue] = useState(initialValue)

  const handleChange = (newValue: number) => {
    const clampedValue = Math.min(Math.max(newValue, min), max)
    setValue(clampedValue)
    onChange?.(clampedValue)
  }

  return (
    <div className="inline-flex items-center bg-[#0D0D0F] text-white border border-gray-200 rounded-full">
      <button
        onClick={() => handleChange(value - step)}
        disabled={value <= min}
        className="w-8 h-8 flex items-center text-[#BA83FF] font-bold justify-center rounded-full 
                   bg-gray-900 m-2 disabled:opacity-50 disabled:bg-transparent 
                   transition-colors"
        aria-label="Decrease amount"
      >
        -
      </button>
      
      <div className="min-w-[80px] text-center">
        <span className="text-lg font-medium">${value.toLocaleString()}</span>
      </div>
      
      <button
        onClick={() => handleChange(value + step)}
        disabled={value >= max}
        className="w-8 h-8 flex items-center text-[#BA83FF] font-bold justify-center rounded-full 
        bg-gray-900 m-2 disabled:opacity-50 disabled:bg-transparent 
        transition-colors"
        aria-label="Increase amount"
      >
        +
      </button>
    </div>
  )
}

export default MarketPrice