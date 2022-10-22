import React, { useState, useEffect } from 'react';
import { Form, Row, Card, Col, Button, Spinner } from 'react-bootstrap'
import mobiles from '../../defaults/mobiles.json'
import { FcPhoneAndroid } from 'react-icons/fc'
import { AiFillStar } from 'react-icons/ai'
import * as Scroll from 'react-scroll'
import Noresults from '../../assets/noResults.jpg'

const Home = () => {
    const [purpose, setpurpose] = useState('');
    const [budget, setbudget] = useState('');
    const [mobileType, setmobileType] = useState('');
    // eslint-disable-next-line
    const [mobileOS, setmobileOS] = useState('');
    const [specifications, setspecifications] = useState([]);
    const [brands, setbrands] = useState([]);

    // eslint-disable-next-line
    const [Smartphones, setSmartphones] = useState(mobiles);
    const [filteredSmartPhones, setfilteredSmartPhones] = useState([]);

    const [isLoading, setisLoading] = useState(false);


    const getSuggestions = (e) => {
        e.preventDefault()
        var scroll = Scroll.animateScroll
        scroll.scrollToBottom()
        setisLoading(true);
        var cleaned = []
        setTimeout(() => {
            setisLoading(false)
        }, 3000)
        if (purpose === 'Gaming') {
            // eslint-disable-next-line
            let results = Smartphones.filter((mobile) => {
                let Ram = mobile.memory[0]
                let Battery = `${mobile.battery[0]}${mobile.battery[1]}${mobile.battery[2]}${mobile.battery[3]}`
                let brand = mobile.name.split(' ')[0]
                if (brand === 'Oppo' || brand === 'Vivo' || brand === 'Lava' || brand === 'Tecno') {
                    return false
                }
                if (Ram >= 6 && Battery >= 5000 && mobile.rating >= 4.4) {
                    return true
                }
            })
            cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
            setfilteredSmartPhones(cleaned)
        }
        if (purpose === 'Social Media') {
            // eslint-disable-next-line
            let results = Smartphones.filter((mobile) => {
                let Ram = mobile.memory[0]
                let Battery = `${mobile.battery[0]}${mobile.battery[1]}${mobile.battery[2]}${mobile.battery[3]}`
                let brand = mobile.name.split(' ')[0]
                let camera = mobile.camera.split(' ')[0].replace('MP', '')
                if (brand === 'Lava' || brand === 'Tecno') {
                    return false
                }
                if (Ram >= 3 && Battery >= 3000 && mobile.rating >= 4.2 && camera >= 16) {
                    return true
                }

            })
            cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
            setfilteredSmartPhones(cleaned)
        }
        if (purpose === 'Browsing, video streaming') {
            // eslint-disable-next-line
            let results = Smartphones.filter((mobile) => {
                let Ram = mobile.memory[0]
                let Battery = `${mobile.battery[0]}${mobile.battery[1]}${mobile.battery[2]}${mobile.battery[3]}`
                if (Ram >= 3 && Battery >= 3000 && mobile.rating >= 4.4) {
                    return true
                }

            })
            cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
            setfilteredSmartPhones(cleaned)
        }
        if (purpose === 'general') {
            // eslint-disable-next-line
            let results = Smartphones.filter((mobile) => {
                let Ram = mobile.memory[0]
                let Battery = `${mobile.battery[0]}${mobile.battery[1]}${mobile.battery[2]}${mobile.battery[3]}`
                let brand = mobile.name.split(' ')[0]
                if (brand === 'Apple' || brand === 'Oneplus' || brand === 'Asus' || mobile.price > 10000) {
                    return false
                }
                if (Ram >= 2 && Battery >= 3000 && mobile.rating >= 4.4) {
                    return true
                }

            })
            cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
            setfilteredSmartPhones(cleaned)
        }
        if (budget === '1') {
            if (cleaned.length === 0) {
                // eslint-disable-next-line
                let results = Smartphones.filter((mobile) => {
                    let budget = mobile.price
                    if (budget <= 10000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                // eslint-disable-next-line
                let results = cleaned.filter((mobile) => {
                    let budget = mobile.price
                    if (budget <= 10000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (budget === '2') {
            if (cleaned.length === 0) {
                // eslint-disable-next-line
                let results = Smartphones.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 10000 && budget < 20000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                // eslint-disable-next-line
                let results = cleaned.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 10000 && budget < 20000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (budget === '3') {
            if (cleaned.length === 0) {
                // eslint-disable-next-line
                let results = Smartphones.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 20000 && budget < 30000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                // eslint-disable-next-line
                let results = cleaned.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 20000 && budget < 30000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (budget === '4') {
            if (cleaned.length === 0) {
                // eslint-disable-next-line
                let results = Smartphones.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 30000 && budget < 40000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                // eslint-disable-next-line
                let results = cleaned.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 30000 && budget < 40000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (budget === '5') {
            if (cleaned.length === 0) {
                // eslint-disable-next-line
                let results = Smartphones.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 40000 && budget < 50000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                // eslint-disable-next-line
                let results = cleaned.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 40000 && budget < 50000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (budget === '6') {
            if (cleaned.length === 0) {
                // eslint-disable-next-line
                let results = Smartphones.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 50000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                // eslint-disable-next-line
                let results = cleaned.filter((mobile) => {
                    let budget = mobile.price
                    if (budget > 50000) {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (brands.length > 0) {
            if (cleaned.length === 0) {
                let results = Smartphones.filter((mobile) => {
                    let brand = mobile.name.split(' ')[0]
                    if (!brands.find(brand)) {
                        return false
                    } else {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                let results = cleaned.filter((mobile) => {
                    let brand = mobile.name.split(' ')[0]
                    if (!brands.find(b => b === brand)) {
                        return false
                    } else {
                        return true
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
        if (mobileType === 'Flagships') {
            if (cleaned.length === 0) {
                let results = Smartphones.filter((mobile) => {
                    if (mobile.price > 25000) {
                        return true;
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            } else {
                let results = cleaned.filter((mobile) => {
                    if (mobile.price > 25000) {
                        return true;
                    }
                })
                cleaned = results.filter((mobile, index, self) => index === self.findIndex((x) => (`${x.name.split(' ')[0]}${x.name.split(' ')[1]}$${x.name.split(' ')[2]}` === `${mobile.name.split(' ')[0]}${mobile.name.split(' ')[1]}$${mobile.name.split(' ')[2]}`)))
                setfilteredSmartPhones(cleaned)
            }
        }
    }

    useEffect(() => {
        if (mobileType === 'Budget Range') {
            setbudget("1")
        }
        if (mobileType === 'Mid Range') {
            setbudget("2")
        }
    }, [mobileType]);

    const updateSpecifications = (checked, specification) => {
        if (checked) {
            setspecifications([...specifications, specification])
        } else {
            setspecifications(specifications.filter(a => a !== specification))
        }
    }

    const updateBrands = (checked, brand) => {
        if (checked) {
            setbrands([...brands, brand])
        } else {
            setbrands(brands.filter(a => a !== brand))
        }
    }

    return (
        <>
            <h3 style={{ textAlign: 'center', marginTop: '20px', fontFamily: 'montserrat', textDecoration: 'underline', fontWeight: '600' }}>TRUE SMART GADGETS</h3>
            <center>
                <small style={{ marginBottom: '70px', fontFamily: 'poppins' }}>Enter your required specifications correctly and get your suggestions</small>
            </center>
            <div className='container' style={{ marginTop: '30px', marginLeft: '28%' }}>
                <Form>
                    <Row>
                        <div className='col-sm-4'>
                            <Form.Label>Purpose</Form.Label>
                            <select className='form-select' onChange={(e) => setpurpose(e.target.value)}>
                                <option>-- Select --</option>
                                <option>Gaming</option>
                                <option>Social Media</option>
                                <option>Browsing, video streaming</option>
                                <option value="general">General purpose (Just Calls & Messages)</option>
                                <option>Others</option>
                            </select>
                        </div>
                        <div className='col-sm-4'>
                            <Form.Label>Budget</Form.Label>
                            <Form.Select onChange={(e) => setbudget(e.target.value)} value={budget}>
                                <option>-- Select --</option>
                                <option value={1}>Below 10,000</option>
                                <option value={2}>10,000 - 20,000</option>
                                <option value={3}>20,000 - 30,000</option>
                                <option value={4}>30,000 - 40,000</option>
                                <option value={5}>40,000 - 50,000</option>
                                <option value={6}>Above 50,000</option>
                            </Form.Select>
                        </div>
                    </Row><br />
                    <Row>
                        <div className='col-sm-4'>
                            <Form.Label>Type of Mobile</Form.Label>
                            <select className='form-select' onChange={(e) => setmobileType(e.target.value)}>
                                <option>-- Select --</option>
                                <option>Budget Range</option>
                                <option>Mid Range</option>
                                <option>Flagships</option>
                            </select>
                        </div><br />
                        <div className='col-sm-4'>
                            <Form.Label>Type of Operating System</Form.Label>
                            <select className='form-select' onChange={(e) => setmobileOS(e.target.value)}>
                                <option>-- Select --</option>
                                <option>Android</option>
                                <option>iOS</option>
                            </select>
                        </div>
                    </Row><br />
                    <div className='col-sm-6' style={{ marginTop: '20px' }}>
                        <Form.Label>Specifications you focussed (Choose any 2 from below)</Form.Label>
                        <Form.Check label='Processor' onChange={(e) => updateSpecifications(e.target.checked, 'Processor')} />
                        <Form.Check label='Camera' onChange={(e) => updateSpecifications(e.target.checked, 'Camera')} />
                        <Form.Check label='Battery' onChange={(e) => updateSpecifications(e.target.checked, 'Battery')} />
                        <Form.Check label='Display' onChange={(e) => updateSpecifications(e.target.checked, 'Display')} />
                        <Form.Check label='Ram & Storage' onChange={(e) => updateSpecifications(e.target.checked, 'Storage')} />
                    </div>
                    <div className='col-sm-6' style={{ marginTop: '20px', marginBottom: '40px' }}>
                        <Form.Label>Brand Constraints</Form.Label>
                        <Form.Check label='Asus' onChange={(e) => updateBrands(e.target.checked, 'Asus')} />
                        <Form.Check label='Samsung' onChange={(e) => updateBrands(e.target.checked, 'Samsung')} />
                        <Form.Check label='Oneplus' onChange={(e) => updateBrands(e.target.checked, 'Oneplus')} />
                        <Form.Check label='Poco' onChange={(e) => updateBrands(e.target.checked, 'POCO')} />
                        <Form.Check label='Motorola' onChange={(e) => updateBrands(e.target.checked, 'Motorola')} />
                        <Form.Check label='Redmi' onChange={(e) => updateBrands(e.target.checked, 'Redmi')} />
                        <Form.Check label='Xiaomi' onChange={(e) => updateBrands(e.target.checked, 'Xiaomi')} />
                        <Form.Check label='Realme' onChange={(e) => updateBrands(e.target.checked, 'Realme')} />
                        <Form.Check label='iQOO' onChange={(e) => updateBrands(e.target.checked, 'iQOO')} />
                        <Form.Check label='Oppo' onChange={(e) => updateBrands(e.target.checked, 'Oppo')} />
                        <Form.Check label='Vivo' onChange={(e) => updateBrands(e.target.checked, 'Vivo')} />
                    </div>
                    <Button onClick={(e) => getSuggestions(e)}>GET SUGGESTIONS</Button>
                </Form><br /><br />
                <div className='suggestions' id="suggestions" >
                    {isLoading ? <center style={{ fontFamily: 'poppins' }}><Spinner animation='border' role='status' /><br /><br />Loading results...</center> :
                        <Row>
                            {filteredSmartPhones.length === 0 ?
                                <center><span style={{ fontFamily: 'poppins', fontSize: '20px', fontWeight: '500' }}><img src={Noresults} height="400px" /></span></center> :
                                filteredSmartPhones.map((mobile, i) =>
                                    i < 6 ? <Col key={i} style={{ padding: '30px', fontFamily: 'poppins' }} sm={{ span: 4 }}>
                                        <Card style={{ padding: '20px' }}>
                                            <center>
                                                <FcPhoneAndroid size={170} />
                                            </center>
                                            <center>
                                                <h5 style={{ fontSize: '14px' }}>
                                                    <b>
                                                        {mobile.name}<br />
                                                    </b>
                                                </h5>
                                                <h5 style={{ fontSize: '14px' }}>
                                                    <b>
                                                        {mobile.memory}<br />
                                                    </b>
                                                </h5>
                                                <h5 style={{ fontSize: '13px' }}>
                                                    {mobile.camera}<br />
                                                </h5>
                                                {mobile.battery}<br />
                                                {mobile.processor}<br /><br />
                                                <span style={{ color: 'yellowgreen', fontSize: '20px' }}>
                                                    <b>₹{mobile.price}</b>
                                                </span> | <span><AiFillStar style={{ color: '#FFD700', fontSize: '20px' }} />&nbsp;<b>{mobile.rating}</b><br /></span>
                                            </center>
                                        </Card>
                                    </Col>
                                        : null
                                )}
                        </Row>}
                </div>
            </div>
        </>
    );
};

export default Home;