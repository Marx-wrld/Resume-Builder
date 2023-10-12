//  Page to display the generated OpenAI API resume a printable format
import React from 'react';
import ErrorPage from './ErrorPage';

const Resume = ({result}) => {
    if (JSON.stringify(result) === '{}') {
        return <ErrorPage />;
    }

    const handlePrint = () => alert("Printing...");
    return (
        <div>
            <button onClick={handlePrint}>Print Page</button>
            <main className='container'>
                <p>Hello!</p>
            </main>
        </div>
    )
};

export default Resume;