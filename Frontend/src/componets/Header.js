import React from 'react'

const Header = () => {
  return (
    <div>
        <header className="bg-dark py-5 my-3">
                <div className="container px-5">
                    <div className="row gx-5 align-items-center justify-content-center">
                        <div className="col-lg-8 col-xl-7 col-xxl-6">
                            <div className="my-5 text-center text-xl-start">
                                <h1 className="display-5 fw-bolder text-white mb-2">A Online Quiz platform</h1>
                                <p className="lead fw-normal text-white-50 mb-4">Designed for teachers and students for the online evaluation of students!</p>
                                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                    <a className="btn btn-outline-light btn-lg px-4" href="#features">Get Started</a>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-xxl-6 d-none d-xl-block text-center">
                        <img className="img-fluid rounded-3 my-5" src="/images/quiz.png" alt="a quiz image" /></div>
                    </div>
                </div>
            </header>   
    </div>
  )
}

export default Header