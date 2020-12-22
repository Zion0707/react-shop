import React from 'react';

const ClassComputer = ({ history }) => {
    return (
        <div className="child-page">
            <h4>
                <button
                    onClick={() => {
                        history.go(-1);
                    }}
                >
                    返回
                </button>
                class-computer
            </h4>
            <ul>
                <li>AOC</li>
                <li>MAC</li>
            </ul>
        </div>
    );
};

export default ClassComputer;
