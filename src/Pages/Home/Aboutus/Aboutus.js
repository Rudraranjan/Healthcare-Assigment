import React from 'react';
import './Aboutus.css';

const Aboutus = () => {
    return (
        <div className='back mt-5' id='aboutus'>
            <div className="row p-5">
                <div className='p-3 my-5'>
                <h1 className='text-color fw-bold'data-aos="zoom-in-up">About Us</h1>
                <p className='text-light fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit rem nam minima voluptas adipisci deserunt, perspiciatis fugiat alias numquam natus magni ea dolorem aspernatur voluptatibus? Ex provident non pariatur adipisci?</p>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className='bg-none rounded-3 shadow p-3'data-aos="flip-right"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                    <h1 className='text-light'><i class="fas fa-user-md"></i></h1>
                    <h4 className='text-color fw-bold'>Doctor Services</h4>
                    <p className='text-light fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo fugit veniam in saepe at, rem quas eum? Sit officiis suscipit iste quis aperiam. Voluptas accusamus facere repellendus, distinctio sunt expedita est dignissimos placeat perferendis eum.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className='bg-none rounded-3 shadow p-3'data-aos="fade-down"
                                                data-aos-easing="linear"
                                                data-aos-duration="800">
                    <h1 className='text-light'><i class="fas fa-vial"></i></h1>
                    <h4 className='text-color fw-bold'>Pathalogy Services</h4>
                    <p className='text-light fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vero perferendis cupiditate esse laudantium voluptatem fugit temporibus commodi vitae facere accusantium distinctio explicabo molestias voluptatibus cum ex at iste delectus.</p>
                    </div> 
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className='bg-none rounded-3 shadow p-3' data-aos="flip-left"
                            data-aos-easing="ease-out-cubic"
                            data-aos-duration="1000">
                    <h1 className='text-light'><i class="fas fa-pills"></i></h1>
                    <h4 className='text-color fw-bold'>Medicine</h4>
                    <p className='text-light fw-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quam! Sequi eligendi voluptates, quaerat aperiam animi totam mollitia, minus numquam dolore quia, dolores doloremque possimus rerum nobis voluptatem corporis asperiores.</p>
                    </div>
                </div>                
            </div>
        </div>
    );
};

export default Aboutus;