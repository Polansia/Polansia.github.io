import React from 'react';

const Project = ({ project, ...props }) => {
    return (
        <div className="card ">
            <img
                src={project.img}
                className="card-img-top project-image h-100 "
                alt="..."
            />
            <div className="card-body ">
                <h5 className="card-title">
                    <strong>{project.title}</strong>
                    </h5>
                <p className="card-text">
                    {project.disc}
                 </p>

                <div className="row justify-content-around">
                    <a href={project.demo} target="_blank" className=" col-12  btn btn-primary mb-1 ">
                        Live Preview
                    </a>
                    <a href={project.github} target="_blank" className="col-12 btn btn-primary btn-success">
                        Github
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
