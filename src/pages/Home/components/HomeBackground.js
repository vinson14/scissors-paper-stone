const HomeBackground = () => {
    return (
        <div className="row home-background-container">
            <BackgroundSection title="scissors" />
            <BackgroundSection title="paper" />
            <BackgroundSection title="stone" />
        </div>
    );
};

const BackgroundSection = ({ title }) => {
    return (
        <div className={`col-12 col-md-4 home-background-${title}`}>
            <div className="home-background-section-mask"></div>
            <div className="row justify-content-center h-100 align-items-center align-items-md-start">
                <div className="col text-center text-white mt-3 p-5 font-elite">
                    <h3>{title.toUpperCase()}</h3>
                </div>
            </div>
        </div>
    );
};

export default HomeBackground;
