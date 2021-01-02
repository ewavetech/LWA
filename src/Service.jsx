import React from 'react'
import ServiceCard from "./ServiceCard";
import services from './ServicesData'

const Service = () => {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>

            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-4'>

                            {services.map((crd)=>{
                                return(
                                    <ServiceCard
                                        key={crd.id}
                                        imgSrc={crd.imgSrc}
                                        title={crd.title}
                                        subtitle={crd.subtitle}
                                    />);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Service;
