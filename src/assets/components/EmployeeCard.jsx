import React from 'react';
import PropTypes from 'prop-types';

function EmployeeCard({ image, name, designation, department, bloodGroup, age, gender }) {
    return (
        <div className="flex flex-col bg-[#F8FAFC] rounded-lg w-[300px] h-[300px] p-3 gap-3 items-center hover:shadow-lg">
            <div className="flex flex-col justify-center items-start gap-2 self-start">
                <div className="flex flex-col items-center gap-2">
                    <img className="w-14 h-14 rounded-full" src={image} alt={name} />
                    <p className="text-sm font-semibold">{name}</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-zinc-400 text-xs font-semibold">{designation}</p>
                </div>
            </div>

            <div className="flex flex-col bg-white rounded-2xl w-[280px] h-[160px] p-3 pl-2 pr-2 gap-3">
                <div className="flex justify-between">
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-zinc-400 text-xs font-semibold self-start">Department</p>
                        <p className="text-sm font-semibold">{department}</p>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                        <p className="text-zinc-400 text-xs font-semibold">Blood Group</p>
                        <p className="text-sm font-semibold">{bloodGroup}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-1">
                        <p className='font-semibold'>Age:</p>
                        <p className='text-zinc-400 font-semibold '>{age}</p>
                    </div>

                    <div className="flex items-center gap-1">
                        <p className='font-semibold'>Gender:</p>
                        <p className='text-zinc-400 font-semibold'>{gender}</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

EmployeeCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    designation: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    bloodGroup: PropTypes.string.isRequired,
    age: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
};

export default EmployeeCard;