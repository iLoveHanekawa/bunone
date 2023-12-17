import React from 'react';


type ButtonType = {
    children: React.ReactNode;
    isPrimary: boolean;
    isLoading: boolean;
}

export default function Button({ children, isPrimary, isLoading }: ButtonType) {
    return <button disabled={isLoading} className={`${isPrimary? 'primary-button': 'secondary-button'}`}>{children}</button>
}