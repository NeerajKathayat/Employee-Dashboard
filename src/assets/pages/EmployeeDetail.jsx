import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Loader2 from '../components/Loader2';

const EmployeeDetail = () => {
    const { Id } = useParams();
    const [employee, setEmployee] = useState(null);
  

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`https://dummyjson.com/users/${Id}`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' }
            });

            const data = await result.json();

            setEmployee(data)

            console.log(data);
        }

        fetchData()
    }, [Id]);

    

    return (
        <div className='px-5 py-6'>
            <h1 className='text-xl font-bold py-3'>EMPLOYEE PROFILE</h1>
            {employee ? (
                <div className='flex flex-col items-center md:items-stretch md:flex-row gap-4 min-h-screen'>
                    <div className="flex flex-col items-center bg-[#F8FAFC] shadow-xl w-full max-w-[350px] py-6">
                        <img className='rounded-full' src={employee.image} alt="" />
                        <div className='flex flex-col items-center'>
                            <p className='text-2xl'>{employee.firstName} {employee.lastName}</p>
                            <p className='text-gray-500'>{employee.company.title}</p>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div>
                                <p className='text-xl'>Role:</p>
                                <p>{employee.role}</p>
                            </div>
                            <div >
                                <p className='text-xl'>Email:</p>
                                <p className='text-[#4099A3]'>{employee.email}</p>
                            </div>
                            <div>
                                <p className='text-xl'>Phone:</p>
                                <p>{employee.phone}</p>
                            </div>
                            <div>
                                <p className='text-xl'>Department:</p>
                                <p className='text-[#4099A3]'>{employee.company.department}</p>
                            </div>

                            <div>
                                <p className='text-xl'>MacAddress:</p>
                                <p>{employee.macAddress}</p>
                            </div>

                            <div>
                                <p className='text-xl'>ip:</p>
                                <p>{employee.ip}</p>
                            </div>
                            <div>
                                <p className='text-xl'>Office:</p>
                                <p className='text-[#4099A3]'>{employee.company.address.address},{employee.company.address.city}</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 w-full '>
                        <div className='flex flex-col gap-4 bg-[#F8FAFC] shadow-xl  py-6 px-10 '>
                           <div className='flex justify-between'>
                           <h1 className='text-2xl'>Basic Information</h1>
                           <i class="fa-solid fa-pen"></i>
                           </div>
                            <div className='flex justify-between'>
                                <p>First Name:</p>
                                <p>{employee.firstName}</p>

                            </div>

                            <div className='flex justify-between'>
                                <p>Last Name:</p>
                                <p>{employee.lastName}</p>
                            </div>

                            <div className='flex justify-between'>
                                <div>Phone(Work):</div>
                                <div>{employee.phone}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Gender:</div>
                                <div>{employee.gender}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Age:</div>
                                <div>{employee.age}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Employee ID:</div>
                                <div>{employee.id}</div>
                            </div>

                        </div>

                        <div className='flex flex-col gap-4 bg-[#F8FAFC] shadow-xl w-full py-6 px-10 '>
                            <div className='flex justify-between'>
                            <h1 className='text-2xl'>Personal Information</h1>
                            <i class="fa-solid fa-pen"></i>
                            </div>
                            <div className='flex justify-between'>
                                <p>Legal First Name:</p>
                                <p>{employee.firstName}</p>

                            </div>

                            <div className='flex justify-between'>
                                <p>Legal Middle Name:</p>

                            </div>

                            <div className='flex justify-between'>
                                <p>Legal Last Name:</p>
                                <p>{employee.lastName}</p>
                            </div>

                            <div className='flex justify-between'>
                                <div>Legal Sex:</div>
                                <div>{employee.gender.charAt(0).toUpperCase()}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Phone(Mobile):</div>
                                <div>{employee.phone}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Date of Birth:</div>
                                <div>{employee.birthDate}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>weight:</div>
                                <div>{employee.weight}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>height:</div>
                                <div>{employee.height}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>Blood Group:</div>
                                <div>{employee.bloodGroup}</div>
                            </div>

                            <div className='flex justify-between'>
                                <div>university:</div>
                                <div>{employee.university}</div>
                            </div>


                            <div className='flex justify-between'>
                                <div>Address:</div>
                                <div>{employee.address.address}, {employee.address.city}, {employee.address.state}, {employee.address.country}</div>
                            </div>




                        </div>
                    </div>

                </div>
            ) : (
                <Loader2 />
            )}

        </div>
    );
}

export default EmployeeDetail;