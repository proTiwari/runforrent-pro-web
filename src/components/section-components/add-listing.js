// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import ListingMap from './listing-map';
// import { Link } from 'react-router-dom';
// import parse from 'html-react-parser';

function AddListing(props) {

    const [energyClass, setEnergyClass] = React.useState('fixed')
    const [fixedAmount, setFixedAmount] = React.useState('')
    const [variableAmount, setVariableAmount] = React.useState('')
    const [propertytype, setpropertytype] = React.useState('SELECT PROPERTY TYPE')
    const [status, setStatus] = React.useState('STATUS')
    const [preferance, setPreferance] = React.useState('PREFERENCE')
    const [propertyPrice, setpropertyPrice] = React.useState('')
    const [securityFee, setsecurityFee] = React.useState('')
    const [propertyName, setpropertyName] = React.useState('')
    const [propertyDescription, setpropertyDescription] = React.useState('')
    const [address, setaddress] = React.useState('')
    const [country, setcountry] = React.useState('')
    const [state, setstate] = React.useState('')
    const [city, setcity] = React.useState('')
    const [pincode, setpincode] = React.useState('')
    const [latitude, setlatitude] = React.useState('')
    const [longitude, setlongitude] = React.useState('')
    const [bedrooms, setbedrooms] = React.useState('')
    const [bathrooms, setbathrooms] = React.useState('')
    const [floorno, setfloorno] = React.useState('')
    const [email, setemail] = React.useState('')
    const [phonenumber, setphonenumber] = React.useState('')
    const [foodService, setfoodService] = React.useState('')
    const [equippedKitchen, setequippedKitchen] = React.useState('')
    const [gym, setgym] = React.useState('')
    const [laundry, setlaundry] = React.useState('')
    const [mediaRoom, setmediaRoom] = React.useState('')
    const [backyard, setbackyard] = React.useState('')
    const [basketballCourt, setbasketballCourt] = React.useState('')
    const [frontyard, setfrontyard] = React.useState('')
    const [garageAttached, setgarageAttached] = React.useState('')
    const [hotBath, sethotBath] = React.useState('')
    const [pool, setpool] = React.useState('')
    const [centralAir, setcentralAir] = React.useState('')
    const [electricity, setelectricity] = React.useState('')
    const [heating, setheating] = React.useState('')
    const [naturalgas, setnaturalgas] = React.useState('')
    const [Ventilation, setventilation] = React.useState('')
    const [water, setwater] = React.useState('')
    const [chairaccessibility, setchairaccessibility] = React.useState('')
    const [elevator, setelevator] = React.useState('')
    const [Fireplace, setfireplace] = React.useState('')
    const [Smoke, setsmoke] = React.useState('')
    const [Washinganddryer, setwashinganddryer] = React.useState('')
    const [Wifi, setwifi] = React.useState('')

    var googleMapsEmbedLink = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.50881724928!2d77.2090215!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce40a02ab9e1d%3A0xf8df4a077ba82a7!2sIndia!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd";


    const [location, setLocation] = useState(null);
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const { latitude, longitude } = position.coords;

                    console.log('latitude', latitude);
                    console.log('longitude', longitude);
                    googleMapsEmbedLink = location
                        ? `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14035.50881724928!2d${latitude}!3d${longitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce40a02ab9e1d%3A0xf8df4a077ba82a7!2sIndia!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd`
                        : `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d25.4684221!3d81.7896274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd`;
                    setLocation(googleMapsEmbedLink);
                    console.log('setlocaion', location);

                },
                error => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);



    function handleSubmit(e) {
        e.preventDefault();
        console.log('handleSubmit')
        const data = {
            energyClass,
            fixedAmount,
            variableAmount,
            propertytype,
            status,
            preferance,
            propertyPrice,
            securityFee,
            propertyName,
            propertyDescription,
            address,
            country,
            state,
            city,
            pincode,
            latitude,
            longitude,
            bedrooms,
            bathrooms,
            floorno,
            email,
            phonenumber,
            foodService,
            equippedKitchen,
            gym,
            laundry,
            mediaRoom,
            backyard,
            basketballCourt,
            frontyard,
            garageAttached,
            hotBath,
            pool,
            centralAir,
            electricity,
            heating,
            naturalgas,
            Ventilation,
            water,
            chairaccessibility,
            elevator,
            Fireplace,
            Smoke,
            Washinganddryer,
            Wifi
        }
        console.log('handleSubmit data ', data)
    }



    return (
        <div className="ltn__appointment-area pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__appointment-inner">
                            <form action="#">
                                <h2>1. Description</h2>
                                <p><small>These fields are mandatory: Title, Property Media</small></p>

                                <h6>Property Price</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="propertyPrice" placeholder="Price in ₹ (only numbers)" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-item">
                                            <select className="nice-select">
                                                <option>Select Duration</option>
                                                <option>Per Hour</option>
                                                <option>Per Day</option>
                                                <option>Per Night</option>
                                                <option>Per Week</option>
                                                <option>Per Month</option>
                                                <option>Per Year</option>
                                                <option>Will be discussed</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="securityFee" placeholder="Security Fee in ₹ (only numbers)" />
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-6">
                                        <div
                                            className="input-item"
                                        >
                                            <select
                                                value={energyClass}
                                                name="energyClass"

                                                className="nice-select"
                                                onChange={(e) => {
                                                    setEnergyClass(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            >
                                                <option value="Electricity Bill">Electricity Bill</option>
                                                <option value="fixed">Fixed Electricity Bill</option>
                                                <option value="variable">Variable Electricity Bill</option>
                                                <option value="Will be discussed">Will be discussed</option>
                                            </select>
                                        </div>
                                    </div>
                                    {energyClass === 'fixed' && (
                                        <div className="col-md-6">
                                            <div className="input-item">
                                                <input
                                                    type="text"
                                                    name="fixedAmount"
                                                    placeholder="Fixed Amount"
                                                    value={fixedAmount}
                                                    onChange={(e) => {
                                                        setFixedAmount(e.target.value)
                                                        console.log('onChange select ', e)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    {energyClass === 'variable' && (
                                        <div className="col-md-6">
                                            <div className="input-item">
                                                <input
                                                    type="text"
                                                    name="variableAmount"
                                                    placeholder="Variable Amount"
                                                    value={variableAmount}
                                                    onChange={(e) => {
                                                        setVariableAmount(e.target.value)
                                                        console.log('onChange select ', e)
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <h6>Select Categories</h6>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-item">
                                            <select className="nice-select"
                                                value={propertytype}
                                                onChange={(e) => {
                                                    setpropertytype(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            >
                                                <option>SELECT PROPERTY TYPE</option>
                                                <option>PG</option>
                                                <option>Apartments</option>
                                                <option>Condos</option>
                                                <option>Duplexes</option>
                                                <option>Houses</option>
                                                <option>Industrial</option>
                                                <option>Land</option>
                                                <option>Offices</option>
                                                <option>Retail</option>
                                                <option>Villas</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-item">
                                            <select className="nice-select"
                                                onChange={(e) => {
                                                    setStatus(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            >
                                                <option>STATUS</option>
                                                <option>Rentals</option>
                                                <option>Sales</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="input-item">
                                            <select className="nice-select"
                                                onChange={(e) => {
                                                    setPreferance(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            >
                                                <option>PREFERENCE</option>
                                                <option>Only Girls</option>
                                                <option>Only Boys</option>
                                                <option>Girls & Boys</option>
                                                <option>Couple</option>
                                                <option>Family</option>
                                                <option>No Preference</option>
                                            </select>
                                        </div>
                                    </div>
                                    <h6>Property Description</h6>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="propertyName" placeholder="Property Name"
                                                    onChange={(e) => {
                                                        setpropertyName(e.target.value)
                                                        console.log('onChange select ', e)
                                                    }}

                                                />
                                            </div>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea name="ltn__message" placeholder="Description" defaultValue={""}
                                                    onChange={(e) => {
                                                        setpropertyDescription(e.target.value)
                                                        console.log('onChange select ', e)
                                                    }}

                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h2>2. Media</h2>
                                <h6>Listing Media</h6>
                                <input type="file" id="myFile" name="filename" className="btn theme-btn-3 mb-10"
                                /><br />
                                <p>
                                    <small>* At least 1 image is required for a valid submission.Minimum size is 500/500px.</small><br />
                                    <small>* PDF files upload supported as well.</small><br />
                                    <small>* Images might take longer to be processed.</small>
                                </p>

                                <h2>3. Location</h2>
                                <h6>Listing Location</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="address" placeholder="*Address"
                                                onChange={(e) => {
                                                    setaddress(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="country" placeholder="Country"
                                                onChange={(e) => {
                                                    setcountry(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="state" placeholder="State"
                                                onChange={(e) => {
                                                    setstate(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="city" placeholder="City"
                                                onChange={(e) => {
                                                    setcity(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="pincode" placeholder="Pincode"
                                                onChange={(e) => {
                                                    setpincode(e.target.value)
                                                    console.log('onChange select ', e)
                                                }
                                                }
                                            />
                                        </div>
                                    </div>
                                    {/* map */}
                                    <div className="col-lg-12">
                                        <div className="property-details-google-map mb-60">
                                            {/* <ListingMap/> */}
                                            <iframe title='map' src={location} width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="latitude" placeholder="Latitude (for Google Maps)"
                                                onChange={(e) => {
                                                    setlatitude(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="longitude" placeholder="Longitude (for Google Maps)"
                                                onChange={(e) => {
                                                    setlongitude(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                        </div>
                                    </div>
                                </div>
                                <h2>4. Details</h2>
                                <h6>Listing Details</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="bedrooms" placeholder="Bedrooms (*only numbers)"
                                                onChange={(e) => {
                                                    setbedrooms(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="bathrooms" placeholder="Bathrooms (*only numbers)"
                                                onChange={(e) => {
                                                    setbathrooms(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}


                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="floorno" placeholder="Floors No. (*only numbers)"
                                                onChange={(e) => {
                                                    setfloorno(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h2>5. Contact</h2>
                                <h6>Contact Details</h6>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="email" placeholder="Email"
                                                onChange={(e) => {
                                                    setemail(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="input-item input-item-name ltn__custom-icon">
                                            <input type="text" name="phonenumber" placeholder="Phone Number"
                                                onChange={(e) => {
                                                    setphonenumber(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <h2>6. Amenities</h2>
                                <h6>Amenities and Features</h6>
                                <h6>Interior Details</h6>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Food Service
                                            <input type="checkbox" onChange={(e) => {

                                                setfoodService(e.target.value)
                                                console.log('onChange select ', e)
                                            }} />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Equipped Kitchen
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setequippedKitchen(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Gym
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setgym(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Laundry
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setlaundry(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Media Room
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setmediaRoom(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <h6 className="mt-20">Outdoor Details</h6>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Back yard
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setbackyard(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Basketball court
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setbasketballCourt(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Front yard
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setfrontyard(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Garage Attached
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setgarageAttached(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Hot Bath
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    sethotBath(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Pool
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setpool(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <h6 className="mt-20">Utilities</h6>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Central Air
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setcentralAir(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Electricity
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setelectricity(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Heating
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setheating(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Natural Gas
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setnaturalgas(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Ventilation
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setventilation(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Water
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setwater(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <h6 className="mt-20">Other Features</h6>
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Chair Accessible
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setchairaccessibility(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Elevator
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setelevator(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}

                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Fireplace
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setfireplace(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Smoke detectors
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setsmoke(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">Washer and dryer
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setwashinganddryer(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <label className="checkbox-item">WiFi
                                            <input type="checkbox"
                                                onChange={(e) => {
                                                    setwifi(e.target.value)
                                                    console.log('onChange select ', e)
                                                }}
                                            />
                                            <span className="checkmark" />
                                        </label>
                                    </div>
                                </div>
                                <div className="alert alert-warning d-none" role="alert">
                                    Please note that the date and time you requested may not be available. We will contact you to confirm your actual appointment details.
                                </div>
                                <div className="btn-wrapper text-center mt-30">
                                    <button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Submit Property</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddListing