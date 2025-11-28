import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T){
    
    const [value, setValue] = useState(initialValue);

    useEffect (() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue] as const;
} 
