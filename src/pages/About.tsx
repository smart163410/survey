const About = () => (<>
<div className='sjs-sidebar'>
            <nav>
                <ul className='sjs-sidebar-ul'>
                    <li className='sjs-sidebar-li'>
                        <a className='sjs-sidebar-a ' href='/'>
                            <svg className='sjs-a-svg' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13866_12356)">
                                    <path className="svg-path" d="M10 2.02C10.31 2.02 10.6 2.06 10.89 2.13L9.5 3.52C8.67 4.35 8.67 5.69 9.5 6.52C9.91 6.93 10.46 7.14 11 7.14C11.54 7.14 12.09 6.93 12.5 6.52L13.89 5.13C13.96 5.42 14 5.71 14 6.02C14 8.23 12.21 10.02 10 10.02C9.15 10.02 8.37 9.75 7.72 9.3L3.21 13.81C3.07 13.95 2.89 14.02 2.71 14.02C2.53 14.02 2.35 13.95 2.21 13.81C1.93 13.53 1.93 13.09 2.21 12.81L6.72 8.3C6.27 7.65 6 6.87 6 6.02C6 3.81 7.79 2.02 10 2.02ZM10 0.52C6.97 0.52 4.5 2.99 4.5 6.02C4.5 6.71 4.63 7.39 4.88 8.02L1.15 11.75C0.73 12.17 0.5 12.72 0.5 13.31C0.5 13.9 0.73 14.45 1.15 14.87C1.57 15.29 2.12 15.52 2.71 15.52C3.3 15.52 3.85 15.29 4.27 14.87L8 11.14C8.63 11.39 9.31 11.52 10 11.52C13.03 11.52 15.5 9.05 15.5 6.02C15.5 5.62 15.45 5.22 15.35 4.79C15.23 4.26 14.83 3.83 14.3 3.68C14.16 3.64 14.02 3.62 13.89 3.62C13.5 3.62 13.11 3.77 12.83 4.06L11.44 5.45C11.28 5.61 11.1 5.63 11 5.63C10.9 5.63 10.72 5.61 10.56 5.45C10.4 5.29 10.38 5.11 10.38 5.01C10.38 4.91 10.4 4.73 10.56 4.57L11.95 3.18C12.34 2.79 12.48 2.23 12.33 1.7C12.18 1.17 11.75 0.77 11.22 0.65C10.79 0.55 10.39 0.5 9.99 0.5L10 0.52Z"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_13866_12356">
                                        <rect width="16" height="16" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>  Surveys</span>
                        </a>
                    </li>
                    <li className='sjs-sidebar-li'>
                        <a className='sjs-sidebar-a sjs-a-active' href='/about'>
                            <svg className='sjs-a-svg' width="16" height="16" viewBox="0 0 16 16" fill='' xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_15243_22796)" fill=''>
                                    <path className="svg-path" d="M2.73 15.75C2.62 15.75 2.52 15.73 2.42 15.68C2.12 15.54 1.95 15.23 1.99 14.91L2.29 12.48C0.97 11.13 0.25 9.39 0.25 7.54C0.25 3.52 3.7 0.25 7.93 0.25C12.16 0.25 15.61 3.52 15.61 7.53C15.61 11.54 12.16 14.81 7.93 14.81C6.77 14.81 5.63 14.56 4.59 14.08L3.29 15.5C3.14 15.66 2.94 15.74 2.74 15.74L2.73 15.75ZM4.42 12.41C4.54 12.41 4.67 12.44 4.78 12.5C5.74 13.03 6.83 13.31 7.93 13.31C11.34 13.31 14.11 10.72 14.11 7.53C14.11 4.34 11.34 1.75 7.93 1.75C4.52 1.75 1.75 4.34 1.75 7.53C1.75 9.09 2.4 10.55 3.59 11.64C3.77 11.8 3.85 12.04 3.82 12.28L3.76 12.75L3.86 12.64C4.01 12.48 4.21 12.4 4.41 12.4L4.42 12.41Z" ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_15243_22796">
                                        <rect width="16" height="16" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <span>  About</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
        <div className='sjs-client-app__content--about'>
            <h1>About</h1>
            <hr  className="sjs-hr" />
            <p>
                This React application demonstrates how to implement a basic SurveyJS service client. You can use it with any backend that supports REST API.
            </p>
        </div>
    </>
)

export default About;