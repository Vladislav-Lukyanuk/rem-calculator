import React, {FC, FormEvent, useMemo} from "react";
import { cn } from '@bem-react/classname'
import { v4 } from 'uuid';

import './input.scss';

const input = cn('input')

type Input = {
    label?: string;
    value: string;
    onChange: (value: string) => void;
}

export const Input: FC<Input> = ({ label, value, onChange }) => {
    const id = v4();
    const blockClass = input();
    const labelClass = input('label');
    const nativeClass = input('native');

    const handleChange = useMemo(() =>
        (event: FormEvent<HTMLInputElement>) => {
        onChange(event.currentTarget.value);
    }, [onChange]);

    return (
        <div className={blockClass}>
            {label && <label htmlFor={id} className={labelClass}>{label}</label>}
            <input id={id} className={nativeClass} value={value} onChange={handleChange} />
        </div>
    );
}
