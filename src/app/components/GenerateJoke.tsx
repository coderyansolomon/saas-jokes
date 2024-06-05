'use client'

import { IsAllowed, IsForbidden, PricingLink } from "@kobbleio/next/client";
import { useState } from "react"
import incrementJokeQuota from "../actions";

const JOKE_GENERATED = 'joke-generated'

const GenerateJoke: React.FC = () => {
    const [joke, setJoke] = useState<string>('')
    const [loadingJoke, setLoadingJoke] = useState<boolean>(false);


    const fetchJoke = async () => {
        setLoadingJoke(true);
        const url = 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random'
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY as string,
                'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
		        accept: 'application/json'
            }
        }

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setJoke(result.value)
        } catch(error){
            console.error(error)
        } finally {
            setLoadingJoke(false)
        }
    }

    const text = loadingJoke ? "Loading joke.." : joke

    const GenerateJokeButton = (
        <>
            <IsAllowed quota={JOKE_GENERATED}>
                <button onClick={() => {
                            fetchJoke();
                            incrementJokeQuota()
                        }}
                        className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800"
                        >
                            Generate Joke
                </button>
            </IsAllowed>
            <IsForbidden quota={JOKE_GENERATED}>
                <button
                disabled
                className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-blue-300 dark:bg-blue-800 rounded-md cursor-not-allowed opacity-50"
                >
                    Upgrade to the premium plan to generate more than 5 jokes per month
                </button>
                <PricingLink>
                    <div className="hover:text-blue-500 dark:hover:text-blue-400 mt-4">
                        View Pricing
                    </div>
                </PricingLink>
            </IsForbidden>
        </>
    )

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
            {
                !loadingJoke && GenerateJokeButton     
            }
            <p className="mt-6 text-xl text-center">{text}</p> 
        </div>
    )
}

export default GenerateJoke