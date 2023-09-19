import React from 'react';



const Container = ({ children }, props) => {

    return (

        <div className='w-1/2 mx-auto mx-auto p-4 flex flex-col bg-purple-300 rounded'>
            <div className='min-h-200 max-h-screen flex flex-col items-center justify-around'>
                {children}
            </div>
        </div>

    )
};

export default Container;
