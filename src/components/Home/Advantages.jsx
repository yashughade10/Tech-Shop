import React from 'react';
import servicesData from '../../../public/assets/servicesData'

const Advantages = () => {
    return (
        <>
            <div className='adv-heading'>
                <h2>Our Advantages</h2>
                <section className='advantages'>
                    {servicesData.map(item => (
                        <div className='each-adv' key={item.id}>
                            <div className='adv-icons'>{<item.icon />}</div>
                            <div className='adv-content'>
                                <div>{item.title}</div>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}

export default Advantages;
