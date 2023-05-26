import { useEffect } from 'react';

export function useDocTitle(title) {
    useEffect(()=>{
        document.title = `${title} | Shopping Cart`
    }, [title])   
    
    return null
}