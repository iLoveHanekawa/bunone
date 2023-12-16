import React from 'react';

type RouteProps = {
    path: string;
    element: React.ReactNode
}

export default function Route({ path, element}: RouteProps) {
    return <>
        {element}
    </>
}