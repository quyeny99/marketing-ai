declare module 'react-day-picker' {
  export interface DateRange {
    from?: Date;
    to?: Date;
  }

  export interface DayPickerProps {
    mode?: 'single' | 'multiple' | 'range';
    selected?: Date | Date[] | DateRange;
    onSelect?: (value: Date | Date[] | DateRange | undefined) => void;
    showOutsideDays?: boolean;
    className?: string;
    classNames?: Record<string, string>;
    defaultMonth?: Date;
    numberOfMonths?: number;
    initialFocus?: boolean;
    components?: {
      IconLeft?: React.ComponentType<any>;
      IconRight?: React.ComponentType<any>;
    };
    [key: string]: any;
  }

  export const DayPicker: React.ComponentType<DayPickerProps>;
}

