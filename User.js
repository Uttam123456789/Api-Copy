import React from 'react';
import Album from './Album';
import {  useParams  } from 'react-router-dom';
import './main/User.scss';

const User = () => {

    const {id} =useParams();
    let items = JSON.parse(localStorage.getItem('isLogin'));

    return (
        <>  
            <div className="container rounded bg-white mt-5 mb-5">
                <div className="row">
                    <div className="col-md-3 border-right">
                        <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" /><span className="font-weight-bold" /></div>
                    </div>
                    <div className="col-md-5 border-right">
                        <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h4 className="text-right">Profile</h4>
                            </div>
                            <div id="main">
                                <div className="row mt-2">
                                    <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="Name" id="name" defaultValue readOnly value={items.name} /></div>
                                    <div className="col-md-6"><label className="labels">User</label><input type="text" className="form-control" placeholder="User Name" id="user" defaultValue readOnly value={items.username} /></div>
                                    <div className="col-md-6"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" id="mail" defaultValue readOnly value={items.email} /></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-12"><label className="labels">Address Street</label><input type="text" className="form-control" placeholder="Street" id="street" defaultValue readOnly value={items.address.street} /></div>
                                    <div className="col-md-12"><label className="labels">Suite</label><input type="text" className="form-control" placeholder="Suite" id="suite" defaultValue readOnly value={items.address.suite} /></div>
                                    <div className="col-md-12"><label className="labels">City</label><input type="text" className="form-control" placeholder="City" id="city" defaultValue readOnly value={items.address.city} /></div>
                                    <div className="col-md-12"><label className="labels">Zipcode</label><input type="text" className="form-control" placeholder="Zipcode" id="zip" defaultValue readOnly value={items.address.zipcode} /></div>

                                    <div className="col-md-12"><label className="labels">Phone</label><input type="text" className="form-control" placeholder="phone" id="phone" defaultValue readOnly value={items.phone} /></div>
                                    <div className="col-md-6"><label className="labels">Website</label><input type="text" className="form-control" placeholder="WebSite" id="web" defaultValue readOnly value={items.website} /></div>
                                </div>
                            </div>
                            <h6>Company</h6>
                            <div className="row mt-2">
                                <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="Company's name" id="comName" defaultValue readOnly value={items.company.name} />
                                </div>
                                <div className="col-md-6"><label className="labels">CatchPhrase</label><input type="text" className="form-control" id="catch" defaultValue placeholder="catchPhrase" readOnly value={items.company.catchPhrase} /></div>
                                <div className="col-md-6"><label className="labels">BS</label><input type="text" className="form-control" id="bs" defaultValue placeholder="bs" readOnly value={items.company.bs} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>               
            </div>
            <Album id = {id}/>
        </>
    )
}

export default User