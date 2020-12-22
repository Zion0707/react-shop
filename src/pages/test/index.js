import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import '_less/test/index.less';

const Test = () => {
    const [show, setShow] = useState(false);
    const onToggle = () => {
        setShow(!show);
    };
    return (
        <div className="container">
            {show + ''}
            <CSSTransition in={show} timeout={500} classNames="fade" unmountOnExit={true}>
                <div className="square" />
            </CSSTransition>
            <button onClick={onToggle}>toggle</button>
        </div>
    );
};

export default Test;
