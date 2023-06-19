import React, {useEffect, useRef, useState} from 'react';
import './styles.css';
import {Anchor, Button, Col, Divider, Drawer, Row} from 'antd';

import Vimeo from '@u-wave/react-vimeo'


import {gsap} from 'gsap'

import { Layout } from 'antd';


import img1 from './img/Untitled_1.1.3.jpg'
import img2 from './img/Untitled_1.1.1.jpg'
import img3 from './img/Untitled_1.1.2.jpg'
import img4 from './img/Untitled_1.1.4.jpg'
import img5 from './img/Untitled_1.1.5.jpg'
import img6 from './img/Untitled_1.1.6.jpg'


import production1 from './img/production_1.JPG'
import production2 from './img/production_2.JPG'
import production3 from './img/production_3.JPG'


import {
    CloseCircleTwoTone,
    EditTwoTone, FacebookOutlined,
    FundTwoTone,
    InstagramOutlined, LinkedinOutlined,
    SecurityScanTwoTone, UnorderedListOutlined,
    VideoCameraTwoTone
} from "@ant-design/icons";

import {ScrollTrigger} from "gsap/ScrollTrigger";
import {TextPlugin} from 'gsap/TextPlugin'

const { Header } = Layout;

const HomePage = () => {
    const [showModal, setShowModal] = useState(false)
    const [url, setUrl] = useState('')
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const opt = {
        autoplay: true,
        loop: true,
        controls: false,
        muted: true
    }

    let item1 = useRef(null);
    let item2 = useRef(null);
    let item3 = useRef(null);
    let item4 = useRef(null);
    let item5 = useRef(null);
    let item6 = useRef(null);

    let items = [
        {name: item1, img: img1, url: 'qLTHujbCnUU'},
        {name: item2, img: img2, url: 'kDkwfIzf6Z4'},
        {name: item3, img: img3, url: '09492XfhLck'},
        {name: item4, img: img4, url: 'dzDImiZwY2A'},
        {name: item5, img: img5, url: 'TVWskoEZ-F4'},
        {name: item6, img: img6, url: '6eW1QCICvgk'},
    ]

    const arrow = useRef(null)

    const textRef = useRef(null)
    const textRef2 = useRef(null)

    const videoMain = useState(null)

    const textRef3 = useRef(null)
    const textRef4 = useRef(null)

    const textProd1 = useRef(null)
    const textProd2 = useRef(null)

    const modalRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setShowModal(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [modalRef]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };


    useEffect(() => {
        const el1 = item1.current
        const el2 = item2.current
        const el3 = item3.current
        const el4 = item4.current
        const el5 = item5.current
        const el6 = item6.current
        const txtRef3 = textRef3.current

        gsap.registerPlugin(ScrollTrigger, TextPlugin)

        ScrollTrigger.matchMedia({
            "(min-width: 992px)": function () {

                gsap.fromTo(arrow.current, {opacity: 1, y: 0}, {opacity: 0, y: 100, scrollTrigger: {
                        trigger: txtRef3,
                        start: '100',
                        end: '700',
                        scrub: true,
                    }})

                gsap.fromTo(el1, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '750',
                        scrub: true,
                    }})

                gsap.fromTo(el3, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el3,
                        start: '1',
                        end: '750',
                        scrub: true
                    }})

                gsap.fromTo(el4, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el4,
                        start: '500',
                        end: '950',
                        scrub: true
                    }})

                gsap.fromTo(el6, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el6,
                        start: '500',
                        end: '950',
                        scrub: true
                    }})

                gsap.fromTo(txtRef3, {opacity: 0, x: '900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '700',
                        scrub: true
                    }})

                gsap.fromTo(textRef4.current, {opacity: 0, x: '-900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '700',
                        scrub: true
                    }})

                gsap.fromTo(textProd1.current, {opacity: 0, x: '900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: textProd1.current,
                        start: '1000',
                        end: '1500',
                        scrub: true
                    }})

                gsap.fromTo(textProd2.current, {opacity: 0, x: '-900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: textProd2.current,
                        start: '1000',
                        end: '1500',
                        scrub: true
                    }})
            },
            "(min-width: 768px) and (max-width: 991px)": function() {
                gsap.fromTo(textProd1.current, {opacity: 0, x: '900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: textProd1.current,
                        start: '1000',
                        end: '1600',
                        scrub: true
                    }})

                gsap.fromTo(textProd2.current, {opacity: 0, x: '-900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: textProd2.current,
                        start: '1000',
                        end: '1600',
                        scrub: true
                    }})

                gsap.fromTo(arrow.current, {opacity: 1}, {opacity: 0, scrollTrigger: {
                        trigger: txtRef3,
                        start: '1',
                        end: '100%',
                        scrub: true,
                    }})

                gsap.fromTo(el1, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el1,
                        start: '400',
                        end: '850',
                        scrub: true,
                    }})

                gsap.fromTo(el2, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el2,
                        start: '400',
                        end: '850',
                        scrub: true
                    }})

                gsap.fromTo(el3, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el3,
                        start: '500',
                        end: '900',
                        scrub: true
                    }})

                gsap.fromTo(el4, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el4,
                        start: '500',
                        end: '900',
                        scrub: true
                    }})

                gsap.fromTo(el5, {opacity: 0, x: '1900', duration: 4}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el5,
                        start: '900',
                        end: '1100',
                        scrub: true
                    }})

                gsap.fromTo(el6, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el6,
                        start: '900',
                        end: '1100',
                        scrub: true
                    }})

                gsap.fromTo(txtRef3, {opacity: 0, x: '900'}, {opacity: 1, x: '0', duration: 0.5, delay: 10, scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '600',
                        scrub: true
                    }})

                gsap.fromTo(textRef4.current, {opacity: 0, x: '-900'}, {opacity: 1, x: '0', duration: 0.5, delay: 10, scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '600',
                        scrub: true
                    }})
            },
            "(max-width: 767px)": function() {
                gsap.fromTo(arrow.current, {opacity: 1}, {opacity: 0, scrollTrigger: {
                        trigger: txtRef3,
                        start: '1',
                        end: '100%',
                        scrub: true,
                    }})

                gsap.fromTo(txtRef3, {opacity: 0, x: '900'}, {opacity: 1, x: '0', duration: 0.5, delay: 10, scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '600',
                        scrub: true
                    }})

                gsap.fromTo(textRef4.current, {opacity: 0, x: '-900'}, {opacity: 1, x: '0', duration: 0.5, delay: 10, scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '600',
                        scrub: true
                    }})
            },
            "(max-width: 421px)": function() {

                gsap.fromTo(textProd1.current, {opacity: 0, x: '900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: textProd1.current,
                        start: '1500',
                        end: '2100',
                        scrub: true
                    }})

                gsap.fromTo(textProd2.current, {opacity: 0, x: '-900', duration: 10, ease: "power3.inOut"}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: textProd2.current,
                        start: '1500',
                        end: '2100',
                        scrub: true
                    }})

                gsap.fromTo(el1, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el1,
                        start: '400',
                        end: '850',
                        scrub: true,
                    }})

                gsap.fromTo(el2, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el2,
                        start: '400',
                        end: '850',
                        scrub: true
                    }})

                gsap.fromTo(el3, {opacity: 0, x: '-1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el3,
                        start: '500',
                        end: '1200',
                        scrub: true
                    }})

                gsap.fromTo(el4, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el4,
                        start: '800',
                        end: '1400',
                        scrub: true
                    }})

                gsap.fromTo(el5, {opacity: 0, x: '-1900', duration: 4}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el5,
                        start: '900',
                        end: '1700',
                        scrub: true
                    }})

                gsap.fromTo(el6, {opacity: 0, x: '1900'}, {opacity: 1, x: '0', scrollTrigger: {
                        trigger: el6,
                        start: '900',
                        end: '1850',
                        scrub: true
                    }})

                gsap.fromTo(arrow.current, {opacity: 1}, {opacity: 0, scrollTrigger: {
                        trigger: txtRef3,
                        start: '1',
                        end: '100%',
                        scrub: true,
                    }})

                gsap.fromTo(txtRef3, {opacity: 0, x: '900'}, {opacity: 1, x: '0', duration: 0.5, delay: 10, scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '600',
                        scrub: true
                    }})

                gsap.fromTo(textRef4.current, {opacity: 0, x: '-900'}, {opacity: 1, x: '0', duration: 0.5, delay: 10, scrollTrigger: {
                        trigger: el1,
                        start: '1',
                        end: '600',
                        scrub: true
                    }})
            },
        })

        gsap.fromTo(
            textRef.current,
            { text: " " },
            {
                text: "FILM, VIDEO PRODUCTION, CONTENT CREATION BASED IN TORONTO",
                duration: 2.7,
                ease: "power2.inOut",
            }
        );

        gsap.fromTo(
            ".video-text",
            { y: 0, opacity: 1 },
            {
                opacity: 0,
                y: 200,
                scrollTrigger: {
                    trigger: ".video-text",
                    start: '100',
                    end: '200%',
                    scrub: true
                }
            }
        );

        gsap.fromTo(
            textRef2.current,
            { text: " " },
            {
                text:
                    "COMBINING STORY AND VISUALS TO CREATE IMPACTFUL NARRATIVES",
                duration: 3,
                delay: 1,
                ease: "power2.inOut",
            }
        );

    }, )
    return (
        <>
            <Layout style={{
                position: 'fixed',
                width: '100%',
                zIndex: '999'
            }}>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        backgroundColor: "white",
                    }}
                >

                    <div className='mobileHidden'>
                        <Anchor
                            direction="horizontal"
                            style={{
                                color: 'red'
                            }}
                            items={[
                                {
                                    key: 'home',
                                    href: '#home',
                                    title: 'HOME',
                                },
                                {
                                    key: 'projects',
                                    href: '#projects',
                                    title: 'PROJECTS',
                                },
                                {
                                    key: 'production',
                                    href: '#production',
                                    title: 'PRODUCTION',
                                },
                                {
                                    key: 'contacts',
                                    href: '#contacts',
                                    title: 'CONTACTS',
                                },
                            ]}
                        />
                    </div>
                    <h4 style={{
                        height: 40,
                        paddingLeft: 10,
                        paddingRight: 10,
                        backgroundColor: "black",
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontFamily: "'Russo One', sans-serif"
                    }}>
                        LOGOTYPE
                    </h4>
                    <div className="mobileVisible">
                        <Button type="ghost" onClick={showDrawer}>
                            <UnorderedListOutlined style={{ fontSize: 28}} />
                        </Button>
                        <Drawer placement="right" onClose={onClose} open={open}>
                            <Anchor
                                direction="horizontal"
                                style={{
                                    display: "flex",
                                    flexDirection: 'column'
                                }}
                                items={[
                                    {
                                        key: 'home',
                                        href: '#home',
                                        title: 'HOME',
                                    },
                                    {
                                        key: 'projects',
                                        href: '#projects',
                                        title: 'PROJECTS',
                                    },
                                    {
                                        key: 'production',
                                        href: '#production',
                                        title: 'PRODUCTION',
                                    },
                                    {
                                        key: 'contacts',
                                        href: '#contacts',
                                        title: 'CONTACTS',
                                    },
                                ]}
                            />
                        </Drawer>
                    </div>
                </Header>
            </Layout>
            <div
                className="video-wrapper"
                id="home"
                  style={{
                position: 'inherit',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: "hidden",
                backgroundColor: 'black'
            }}>
                <Vimeo
                    ref={videoMain}
                    className="video-main"
                    video="https://vimeo.com/836760372"
                    opts={opt}
                    showPortrait
                    background={true}
                    autoplay={true}
                    muted
                    loop
                    controls={false}
                />
                <div style={{
                    display: 'flex',
                    position: 'absolute',
                    color: 'white',
                    background: 'rgb(0 0 0 / 70%)',
                    width: '100%',
                    height: '114vh',
                    margin: '0px auto',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                }}>
                    <div
                        className="video-text"
                        style={{
                            display: 'flex',
                            padding: '0 6px',
                            fontWeight: 700,
                            flexDirection: 'column',
                            textAlign: 'center',
                            flexWrap: 'wrap',
                            alignContent: 'center',
                            justifyContent: 'center',
                            alignItems: 'center',
                            maxWidth: 800
                        }}>
                        <h1 ref={textRef} style={{fontSize: 38, fontWeight: 700, marginBottom: 0, lineHeight: '110%'}}>
                            FILM, VIDEO PRODUCTION, CONTENT CREATION BASED IN TORONTO
                        </h1>
                        <h3 ref={textRef2} style={{fontSize: 18, fontWeight: 300}}>
                            COMBINING STORY
                            AND VISUALS TO CREATE IMPACTFUL NARRATIVES
                        </h3>
                        <div className="arrow-container">
                            <div className="arrow-down-txt">Scroll Down</div>
                            <div className="arrow-down"></div>

                        </div>
                    </div>

                </div>
            </div>
            <Row id="projects">
                <Col  style={{
                    color: 'white',
                    backgroundColor: '#e8e8e8',
                    height: 450,
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }} span={24}>
                    <h2 className="h2" ref={textRef3}>PROJECTS</h2>
                    <h3 ref={textRef4} style={{color: 'black', fontSize: 21, lineHeight: '29px', fontWeight: 300}}>WE HELPED BRING TO
                        LIFE</h3>
                </Col>
            </Row>
            <Row
                justify="space-between"
                gutter={[16, {xs: 24, sm: 24, md: 12, lg: 16}]}
                style={{backgroundColor: '#e8e8e8', margin: 0, padding: 0, overflow: 'hidden', paddingBottom: 20 }}
            >
                {items.map((item, index) => (
                    <Col
                        onClick={() => setUrl(item.url)}
                        ref={item.name}
                        key={index}
                        className="project-card"
                        sm={{span: 24}} md={{span: 12}} lg={{span: 8}}>

                            <div onClick={openModal}>
                                <div >
                                    <img width="100%" src={item.img} alt=""/>
                                </div>
                                <div className="caption hoverable_caption">
                                    Protest the Hero – Kezia X
                                    <br/>
                                    <br/>
                                    <br/>
                                    Web
                                </div>
                            </div>
                    </Col>
                ))}
                {showModal && (
                    <div className="modal-wrapper">
                        <div ref={modalRef} className="modal">
                            <iframe className="modal-iframe" width="560" height="315" src={`https://www.youtube.com/embed/${url}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen></iframe>
                                <CloseCircleTwoTone
                                    className="close-button"
                                    onClick={closeModal}
                                    style={{ fontSize: 40 }}
                                    twoToneColor="#cf2e2e"
                                />
                        </div>
                    </div>
                )}
            </Row>
            <Row>
                <Col id="production" style={{
                    color: 'white',
                    backgroundColor: '#e8e8e8',
                    height: 450,
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    overflow: 'hidden'
                }} span={24}>
                    <h2 className="h2" ref={textProd1}>PRODUCTION</h2>
                    <h3 ref={textProd2} className="p-prod" style={{color: 'black', fontSize: 21, lineHeight: '29px', fontWeight: 300}}>PRODUCTION SERVICES
                        THE PEOPLE AND GEAR YOU NEED TO MAKE MOVIE MAGIC IN TORONTO
                    </h3>
                </Col>
            </Row>
            <Row style={{
                display: 'flex',
                flexDirection: 'row',
                alignContent: 'center',
                justifyContent: 'center',
                alignItems: 'flex-start',
                flexWrap: 'nowrap',
                paddingTop: 20,
                paddingBottom: 20
            }}>
                <Row style={{
                    width: '100%',
                    height: '100vh',
                    backgroundImage: `url(${production2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                    <Col span={12}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignContent: 'space-around',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 20
                    }}>
                        <h3
                            style={{
                            lineHeight: 1,
                            fontWeight: 700,
                            color: 'white',
                            fontSize: 70,
                            textAlign: 'center',
                        }}
                            className="h3-prod"
                        >
                            PRODUCTION SERVICES
                        </h3>
                        <h3
                            style={{
                                backgroundColor: 'rgba(1, 1, 1, 0.6)',
                                lineHeight: 1,
                                fontWeight: 700,
                                color: 'white',
                                fontSize: 40,
                                textAlign: 'center',
                            }}
                            className="h2-prod"
                        >
                            THE PEOPLE AND GEAR YOU NEED TO MAKE MOVIE MAGIC IN TORONTO
                        </h3>
                    </Col>
                    <Col span={12}></Col>
                </Row>
            </Row>
            <Row style={{ width: '100%', height: '160vh', display: "flex", flexWrap: "nowrap"}}>
                <Col
                    span={12}
                    style={{
                        width: '100%',
                        backgroundImage: `url(${production3})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </Col>
                <Row
                    style={{display: "flex", alignItems: "flex-start", backgroundColor: 'black', alignContent: "flex-start"}}
                    className="production-wrapper"
                    span={12}
                    gutter={0}
                >
                    <Col span={24}
                         className="production-info">
                        <h3 style={{
                            fontWeight: 400,
                            fontSize: 21,
                            color: "white"
                        }}>COLOR GRADING</h3>
                        <Divider style={{fontSize: 10, backgroundColor: '#cf2e2e', width: '50%', minWidth: '50%'}}/>
                        <h4 style={{ textAlign: "center", fontWeight: 400, fontSize: 16, maxWidth: 375, color: "white"}}>
                            Full digital boutique color correction, freelance color, and grading services.
                            I have experience color grading everything from broadcast commercials
                            in the Super Bowl to social media advertisements and full length features,
                            documentaries.
                        </h4>
                    </Col>
                    <Col span={24} className="production-info">
                        <h3 style={{
                            fontWeight: 400,
                            fontSize: 21,
                            color: "white"
                        }}>PRE-PRODUCTION</h3>
                        <Divider style={{fontSize: 10, backgroundColor: '#cf2e2e', width: '50%', minWidth: '50%'}}/>
                        <h4 style={{ textAlign: "center", fontWeight: 400, fontSize: 16, maxWidth: 375, color: "white"}}>
                            Working with creatives and directors to find the best way
                            to elevate the project even before we start rolling.
                            Not every production is the same, and we handle each one differently.
                        </h4>
                    </Col>
                    <Col span={24}
                         className="production-info mob_v">
                        <h3 style={{
                            fontWeight: 400,
                            fontSize: 21,
                            color: "white"
                        }}>SANCHI!</h3>
                        <Divider style={{fontSize: 10, backgroundColor: '#cf2e2e', width: '50%', minWidth: '50%'}}/>
                        <h4 style={{ textAlign: "center", fontWeight: 400, fontSize: 16, maxWidth: 375, color: "white"}}>
                            Working with creatives and directors to find the best way
                            to elevate the project even before we start rolling.
                            Not every production is the same, and we handle each one differently.
                        </h4>
                    </Col>
                    <Col span={24} className="production-info">
                        <h3 style={{
                            fontWeight: 400,
                            fontSize: 21,
                            color: "white"
                        }}>CHINA!</h3>
                        <Divider style={{fontSize: 10, backgroundColor: '#cf2e2e', width: '50%', minWidth: '50%'}}/>
                        <h4 style={{ textAlign: "center", fontWeight: 400, fontSize: 16, maxWidth: 375, color: "white"}}>
                            Working with creatives and directors to find the best way
                            to elevate the project even before we start rolling.
                            Not every production is the same, and we handle each one differently.
                        </h4>
                    </Col>

                </Row>
            </Row>
            <Row  id="contacts" justify={'center'}>
                <Col style={{
                    color: 'white',
                    backgroundColor: '#e8e8e8',
                    marginTop: 50,
                    height: 170,
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                }} span={24}>
                    <h2 className="h2">CONTACTS</h2>
                </Col>
                <Col>
                    <div className="avatar avatar-border" style={{backgroundImage: `url(${production1})`, minWidth: 375, minHeight: 375}}></div>
                </Col>
                <Col style={{backgroundColor: '#e8e8e8', display: "flex", justifyContent: "center", paddingTop: 35}} span={24}>

                        <a href="https://www.instagram.com/romaniys7/" rel="noreferrer"  target="_blank">
                            <InstagramOutlined style={{fontSize: 28, paddingRight: 20, paddingLeft: 20, color: 'black', cursor: "pointer"}}/>
                        </a>
                    <a href="https://www.linkedin.com/in/roman-yevdochenko-187608269/" rel="noreferrer"  target="_blank">
                        <LinkedinOutlined style={{fontSize: 28, paddingRight: 20, paddingLeft: 20, color: 'black'}}/>
                    </a>
                    <a href="https://www.facebook.com/roman.yevdochenko.54" rel="noreferrer"  target="_blank">
                        <FacebookOutlined style={{fontSize: 28, paddingRight: 20, paddingLeft: 20, color: 'black'}}/>
                    </a>

                </Col>
                <Col span={24} style={{backgroundColor: '#e8e8e8', display: "flex", justifyContent: 'center'}}>
                    <h4 style={{ textAlign: "center", fontWeight: 400, fontSize: 16, maxWidth: 375, color: "black"}}>msaerz398@gmail.com</h4>
                </Col>
                <Col  span={24}
                      style={{backgroundColor: '#e8e8e8', display: "flex", justifyContent: 'center', paddingBottom: 125}}>
                    <h4 style={{ textAlign: "center", fontWeight: 400, fontSize: 16, maxWidth: 375, color: "black"}}>+1(647) 703-76-69</h4>
                </Col>
            </Row>
        </>
    )
};

export default HomePage;
