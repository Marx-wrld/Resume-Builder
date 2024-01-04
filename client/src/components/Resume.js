//  Page to display the generated OpenAI API resume as a printable format
import React, { useRef } from 'react';
import ErrorPage from './ErrorPage';
import { useReactToPrint } from "react-to-print";

const Resume = ({result}) => {

    //function to replace the new line with a break tag
    const replaceWithBr = (string) => {
		return string.replace(/\n/g, "<br />");
	};

    const componentRef = useRef();

    //function to handle the printing of the resume of elements within the componentRef
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: `${result.fullName} Resume`,
        onAfterPrint: () => alert("Print successful!"),
    });

    //returns an error page if the result object is empty
    if (JSON.stringify(result) === '{}') {
        return <ErrorPage />;
    }
    

    return (
        <div>
            <button onClick={handlePrint}>Print Page</button>
            <main className='container' ref={componentRef}>
                {/*This code displays the result on the webpage according to the specified layout.  */}
                {/* Function replaceWithBr() replaces the new line character with the HTML break tag. */}
                {/* Function handlePrint() is called when the user clicks the Print Page button. */}
                
                <header className="header">
                    <div>
                        <h1>{result.fullName}</h1>
                        <p className='resumeTitle headerTitle'>
                            {result.currentPosition} ({result.currentTechnologies})
                        </p>
                        <p className='resumeTitle'>
                            {result.currentLength}year(s) work experience
                        </p>
                    </div>
                    <div>
                        <img src={result.image_url} alt={result.fullName} className='resumeImage' />
                    </div>
                </header>
                <div className='resumeBody'>
                    <div>
                        <h2 className='resumeBodyTitle'>
                            PROFILE SUMMARY
                        </h2>
                        <p dangerouslySetInnerHTML={{
                            __html: replaceWithBr(result.objective),
                        }}
                        className='resumeBodyContent'
                        />
                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>
                            WORK EXPERIENCE
                        </h2>
                        {result.workExperience.map((work) => (
                            <p className='resumeBodyContent' key={work.name}>
                                <span style={{fontWeight: 'bold'}}>{work.name}</span> - {" "}
                                    {work.position}
                            </p>
                        ))}
                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>
                            JOB PROFILE
                        </h2>
                        <p dangerouslySetInnerHTML={{
                            __html: replaceWithBr(result.jobResponsibilities),
                        }}
                        className='resumeBodyContent'
                        />
                    </div>
                    <div>
                        <h2 className='resumeBodyTitle'>JOB RESPONSIBILITIES</h2>
                        <p
                            dangerouslySetInnerHTML={{
                                __html: replaceWithBr(result.keypoints),
                            }}
                            className='resumeBodyContent'
                        />
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Resume;