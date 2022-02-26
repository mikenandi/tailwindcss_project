import Head from "next/head"

const Listings = () => {
	return (
		<div>
			<Head>
				<title>gud survey listings here</title>
			</Head>
			<main className='bg-green-300 h-screen flex justify-center items-center'>
				<div className='w-2/3 flex flex-col border-2 shadow-lg rounded-lg bg-white'>
					{/*header*/}
					<div className='bg-gray-200 text-gray-700 text-lg px-6 py-4'>
						<h1>The title of the card here</h1>
					</div>
					{/*content section */}
					<div className='flex justify-between items-center px-6 py-4'>
						<div className='font-semibold bg-red-400 text-white h-7 text-xs px-2 py-1 border border-gray-200 rounded-full'>
							UNDER REVIEW
						</div>

						<div className='text-small italic'>May 14,1987</div>
					</div>
					<div className='px-6 py-4 border-t '>
						<div className='bg-pink-300 border border-gray-300 rounded-md text-sm px-3 py-3 font-light text-gray-600  '>
							Here is the short comment about this employee
						</div>
					</div>
					{/* footer */}
					<div className='bg-gray-200 px-6 py-4'>
						<div className='text-xs uppercase text-gray-600 font-bold'>
							Employee
						</div>
						<div className='flex items-center pt-3'>
							<div className='bg-green-700 rounded-full w-12 h-12 flex justify-center items-center p-3 text-white text-3xl mr-2'>
								VG
							</div>
							<div>
								<p>Victor Gonzalez</p>
								<p className='italic text-gray-600 text-sm'>Instructor</p>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	)
}
export default Listings
