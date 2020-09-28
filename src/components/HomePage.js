import React from 'react';

function HomePage(props) {
    return (
        <div className="app-body">
            <div className="container">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>About Me</h2>
                            </div>
                        </div>

                        <div>
                            <div>
                                <p>
                                My name is Hunter Gruszczynski, and I've been intereseted in computers since I was a child. I have been working in the IT field for over 2 years as an intern and have been studying a variety of programming languages. Right now I'm taking a course at Uconn, learning Fullstack development of websites. I hope to be able to show off my skills in a variety of fields and learn along the way.
                                </p>

                                <ul className="list-group list-group-flush">
                                    <li>
                                        <strong>Email:</strong>
                                        <a href="mailto:hgruszcz@gmail.com">hgruszcz@gmail.com</a>
                                    </li>
                                    <li>
                                        <strong>Github:</strong>
                                        <a href="https://github.com/Polansia">Github</a>
                                    </li>
                                    <li>
                                        <strong>Linkdin</strong>
                                        <a href="https://www.linkedin.com/in/hunter-g-b3b025138/">Linkdin</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>{' '}
            <div className="container">
                <div className="card border-0 shadow my-5">
                    <div className="card-body p-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>Work Experience</h2>
                            </div>
                        </div>

                        <div>
                        <li>
                        Tolland High School - 2 Years I.T Intern:  Job Responsibilities are to install new computers, manage the servers, and to help teachers with miscellaneous issues.
                    </li>
                    <li>
                    Tolland Public Library (Discovery Center) - 4 Months VR Supervisor Job Responsibilities are to manage the VR equipment, and to help new users with using and operating the VR equipment, as well as the iMac's.
                    </li>
                        </div>
                    </div>
                </div>
            </div>{' '}
        </div>
    );
}
export default HomePage;
