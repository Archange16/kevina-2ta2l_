import banner1 from "../../../public/assets/img/banner/banner-right-img.jpg";
import bannerShape from "../../../public/assets/img/shape/banner-shape.png";
import Link from "next/link";

const BannerOne = () => {
    return (
            <>
            <div className="banner__one"> 
                <div className="banner-shape">
                    <div className="shape banner-shape-1"></div>
                    <div className="shape banner-shape-2"></div>
                    <div className="shape banner-shape-3"></div>
                    <div className="shape banner-shape-4"></div>
                    <img className="shape banner-shape-5" src={bannerShape.src} alt="image" />
                    <div className="shape banner-shape-7"></div>
                    <div className="shape banner-shape-6"></div>
                </div>
                <div className="container">
                    <div className="row align-items-center gy-4 justify-content-center">
                        <div className="col-xl-6 col-lg-6">
                            <div className="banner__one-content">
                            <span className="subtitle-one">Booster votre Croissance</span>
                                <h2>Donnez du sens à votre activité (ou vie?) <span>avec l'Ikigai</span></h2>
                                <p>Des formations et accompagnements personnalisés pour donner du sens à vos projets professionnels.</p>
                                <div className="grid grid-cols-1 gap-10">
                                    <Link href="/services" className="btn-two">Je veux lancer mon business
                                    </Link>
                                    <Link href="/services" className="btn-two1">Je veux me former
                                    </Link>
                                    <span className="video-acceuil" >
                                        <i className="fas fa-play"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 offset-xl-1 col-lg-6 col-md-9">
                            <div className="banner__one-image">
                                <div className="banner__one-image-wrapper">
                                    <div className="banner__one-image-wrapper-shapes animate-rotate">
                                        <div className="shape shape-1"></div>
                                        <div className="shape shape-2"></div>
                                    </div>
                                    <img src={banner1.src} alt="banner-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default BannerOne;