"use client";

import Link from "next/link"
import { useState } from "react"

export default function PageDashboard() {

    var data = ["gusti", "pangestu", "gus", "pang", "gustipang"];

    const [nama, setNama] = useState("")

    const randomNama = () => {
        setNama(data[Math.floor(Math.random() * (data.length))]);
    }

    return (
        <><h1>Hello, ini adalah halaman dashboard</h1>
            <p className="text-9xl">
                {nama}
            </p>

            <button onClick={randomNama}>
                Change</button>
            <button>
                <Link href="/">Home</Link>
            </button>

        </>

    )
}