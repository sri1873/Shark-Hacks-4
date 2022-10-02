import React from "react";
import Mamtha from '../Mamtha.png'
import SriKumar from '../photo.jpeg'

const About = () => {
    return (
        <div id="Aboutus">
            <div className="car">
                <a href="#!">
                    <img
                        className="img-about"
                        src={Mamtha}
                        alt="Mamtha"
                    />
                </a>
                <div className="card-body">
                    <h5 className="card-title" style={{color:'white'}}>
                        Mamtha Patalay
                    </h5>
                    <div className="text-gray-100 text-base mb-4" style={{ color: 'white' }}>
                        <p>Designer</p>
                        <p>
                            Institute of Aeronautical Engineering,
                            Hyderabad, India
                        </p>
                        <p>3rd year</p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/mamtha-patalay/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Connect with me
                        </button>
                    </a>
                </div>
            </div>

            <div className="car">
                <a href="#!">
                    <img
                        className="img-about"
                        src={SriKumar}
                        alt="SriKumar"
                    />
                </a>
                <div className="card-body">
                    <h5 className="card-title" style={{ color: 'white' }}>
                        K S Sri Kumar
                    </h5>
                    <div className="text-gray-100 text-base mb-4" style={{ color: 'white' }}>
                        <p>Front-End Developer</p>
                        <p>Woxsen University, Hyderabad,India</p>
                        <p>3rd Year</p>
                    </div>
                    <a
                        href="https://www.linkedin.com/in/ks-srikumar/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button
                            type="button"
                            className="btn btn-primary"
                        >
                            Connect with me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;