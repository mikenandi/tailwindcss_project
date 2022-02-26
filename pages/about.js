import Head from "next"
import Basics from "./components/useStateBaics"

function About() {
	return (
		<div>
			<main className='flex flex-col items-center justify-center bg-green-50 h-screen '>
				<h1 className='text-gray-800 font-semibold text-2xl '>
					use state basics Example
				</h1>
				<div className='mt-5  p-4 border-gray-300 border-b-2 rounded'>
					<Basics />
				</div>
			</main>
		</div>
	)
}
export default About
