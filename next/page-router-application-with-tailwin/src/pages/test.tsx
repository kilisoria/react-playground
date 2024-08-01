import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const Test = () => {
    const [count, setCount] = useState(0);

    return (
            <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1>Testing React on Next.js with Page Router approach</h1>
                <h3>{`Count: ${count}`}</h3>
                <button type="button" value="click" />
            </div>
    </main>
    )
};

export default Test;
