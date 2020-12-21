import React from 'react';
import { useHistory } from 'react-router-dom';

const ClassMobileType = (props) => {
    const { type } = props.match.params;
    const history = useHistory();
    return (
        <div className="class">
            <h4>
                <button
                    onClick={() => {
                        history.go(-1);
                    }}
                >
                    返回
                </button>
                class-mobile-type
            </h4>
            type={type}
        </div>
    );
};

export default ClassMobileType;
