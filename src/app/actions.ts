"use server"

import { Kobble } from "@kobbleio/admin"
import { getAuth } from "@kobbleio/next/server"

export default async function incrementJokeQuota(){
    const kobble = new Kobble(process.env.NEXT_PUBLIC_ADMIN_SDK_KEY as string)
    const auth = await getAuth()
    const userId = auth?.session?.user?.id
    if (userId){
        await kobble.users.incrementQuotaUsage(userId, "joke-generated")
    }
}