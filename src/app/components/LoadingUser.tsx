'use client'

import { useAuth } from "@kobbleio/next/client"

export default function LoadingUser({
    children
}: Readonly<{
    children: React.ReactNode
}>){
    const {isLoading} = useAuth()

    if (isLoading) return <span>Loading user..</span>

    return (
        <>
             {children}
        </>
    )
}