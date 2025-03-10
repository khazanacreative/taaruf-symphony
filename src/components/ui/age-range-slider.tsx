
import React, { useState, useEffect } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { cn } from '@/lib/utils';

interface AgeRangeSliderProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: [number, number];
  value?: [number, number];
  onValueChange?: (value: [number, number]) => void;
  className?: string;
}

const AgeRangeSlider = ({
  min = 18,
  max = 70,
  step = 1,
  defaultValue = [25, 35],
  value,
  onValueChange,
  className,
}: AgeRangeSliderProps) => {
  const [localValue, setLocalValue] = useState<[number, number]>(
    value || defaultValue
  );

  useEffect(() => {
    if (value) {
      setLocalValue(value);
    }
  }, [value]);

  const handleValueChange = (newValue: number[]) => {
    const typedValue = newValue as [number, number];
    setLocalValue(typedValue);
    if (onValueChange) {
      onValueChange(typedValue);
    }
  };

  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex justify-between">
        <span className="text-sm font-medium">Rentang Usia:</span>
        <span className="text-sm font-medium">
          {localValue[0]} - {localValue[1]} tahun
        </span>
      </div>
      <Slider.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={localValue}
        onValueChange={handleValueChange}
        min={min}
        max={max}
        step={step}
        aria-label="Age Range"
      >
        <Slider.Track className="bg-muted relative grow rounded-full h-1.5">
          <Slider.Range className="absolute bg-gradient-to-r from-taaruf-blue to-taaruf-green h-full rounded-full" />
        </Slider.Track>
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-taaruf-blue rounded-full focus:outline-none focus:ring-2 focus:ring-taaruf-blue focus:ring-offset-2 transition-colors"
          aria-label="Min Age"
        />
        <Slider.Thumb
          className="block w-5 h-5 bg-white border-2 border-taaruf-green rounded-full focus:outline-none focus:ring-2 focus:ring-taaruf-green focus:ring-offset-2 transition-colors"
          aria-label="Max Age"
        />
      </Slider.Root>
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{min} tahun</span>
        <span>{max} tahun</span>
      </div>
    </div>
  );
};

export default AgeRangeSlider;
