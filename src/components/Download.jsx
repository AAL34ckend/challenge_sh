import React from 'react'
import { app, appstore, playstore } from '../utils'

const Download = () => {
    return (
        <section className="w-full h-screen md:h-72 lg:h-80 bg-primary md:py-10 pb-0 px-6 sm:px-16 relative flex flex-col md:flex-row items-center md:items-start md:justify-between">
            <div className="flex flex-col items-center md:items-start text-center md:text-left mt-10">
                <h2 className="lg:text-4xl md:text-2xl text-xl font-semibold text-white pb-5">More your control for your money</h2>
                <div className="flex gap-7">
                    <img src={playstore} alt="playstore" className="w-24 sm:w-32 cursor-pointer" />
                    <img src={appstore} alt="appstore" className="w-24 sm:w-32 cursor-pointer" />
                </div>
            </div>
            <div className="absolute bottom-0 right-0 md:pt-8 pt-0 md:w-auto sm:w-full w-auto flex justify-center">
                <img src={app} alt="app" className="w-8/12 sm:w-2/5 md:w-8/12 lg:w-8/12" />
            </div>
        </section>

    )
}

export default Download