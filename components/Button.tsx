import React from 'react';


type ButtonType = {
    children: React.ReactNode;
    isPrimary: boolean
}

export default function Button({ children, isPrimary }: ButtonType) {
    return <button className={`${isPrimary? 'primary-button': ''}`}>{children}</button>
}