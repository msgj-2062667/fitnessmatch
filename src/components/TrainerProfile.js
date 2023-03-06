import React from 'react';
import {Link} from 'react-router-dom';
import '../../src/style.css';
import 'bootstrap/dis/css/bootstrap.css';

export function TrainerProfile(props) {
    return (
        <body>
            <div className="container-fluid trainer-profile-container">
            <header>
                <Link to="/homeQuiz"><img className="logo" src="../img/logo.jpg" alt="Logo"/></Link>
                <div class="button no-disp">
                    <Link to="/trainerMatch" className="btn btn-green">Back to Match List</Link>
                </div>
            </header>
            <div id="body-wrapper">
                <main>
                    <div id="body-content">
                        <br/><br/>
                        <div className="container body-content-container">
                            <div className="row row-content-cont">
                                <div className="col-12 col-md-8 col-lg-6">
                                    <h2><span className="heading-color" id="name">trainer's name</span></h2>
                                    <div className="trainer-img-div">
                                        <a><img id="trainerImg" src="" alt="trainer's img"/></a>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4 col-lg-3 mt-2 mt-md-0">
                                    <h2 className="heading-color">About</h2>
                                    <p><span id="experience">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio iure
                                        temporibus nobis, ut quidem asperiores voluptatibus itaque quia exercitationem corrupti.</span></p>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3 mt-2 mt-lg-0">
                                    <h2 className="heading-color">Specialties</h2>
                                    <div id="specialties-container"></div>
                                </div>

                                <div className="buttons schedule-btn">
                                    <Link to="/trainerScheduling" className="btn btn-green">Schedule with Me</Link>
                                </div>
                            </div>
                        </div>
                        <br/><br/>
                    </div>
                </main>
            </div>
            </div>
        </body>
    )
}
