export default function Intro() {
    return (
        <div
            className={"relative flex flex-col items-center text-white justify-center p-4 h-full text-xl font-indieFlower"}
        >
            <div className={"text-3xl"}>Find your next read in seconds!!</div>
            <div>Enter your last read few books or find by genre or author.</div>
            <div>
                All <span
                    className={"text-yellow-500 font-mono border border-yellow-500 px-2 font-normal"}>AI</span> Powered!
            </div>
            <div
                className={"absolute bottom-4 right-4 bg-gray-800 p-2 rounded-lg shadow-lg text-sm"}
            >
                <div className={"font-bold"}>Learning Section</div>
                <ul className={"list-disc pl-5"}>
                    <li><a href="https://www.coursera.org/courses?query=artificial%20intelligence" className={"text-blue-400 hover:underline"}>AI Tutorials</a></li>
                    <li><a href="https://www.freecodecamp.org/" className={"text-blue-400 hover:underline"}>Coding Resources</a></li>
                </ul>
            </div>
        </div>
    );
}
