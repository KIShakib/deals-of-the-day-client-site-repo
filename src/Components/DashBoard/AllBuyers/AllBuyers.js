import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Blocks } from 'react-loader-spinner';
import SingleBuyer from './SingleBuyer';

const AllBuyers = () => {
    const { data: allBuyers = [], isLoading, refetch } = useQuery({
        queryKey: ["all-buyers"],
        queryFn: () => fetch(`${process.env.REACT_APP_API_URL}/all-buyers`)
            .then(res => res.json())
    })

    if (isLoading) {
        return <div className='flex justify-center mt-10'>
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </div>
    }

    return (
        <table className="border-collapse w-full lg:mr-20 my-10">
            <thead className='bg-yellow-500'>
                <tr>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Buyer Name</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Buyer Email</th>
                    <th className="p-3 font-bold uppercase text-gray-600 border border-gray-300 hidden lg:table-cell">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBuyers.length < 1 && <h3 className='text-center text-lg h-screen w-full flex justify-center items-center'>No Buyer Here...</h3>
                }
                {
                    allBuyers?.map(buyer => <SingleBuyer key={buyer._id} buyer={buyer}></SingleBuyer>)
                }
            </tbody>
        </table>
    );
};

export default AllBuyers;