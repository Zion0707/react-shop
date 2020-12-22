import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import '_less/animated-router/index.less';

const ANIMATION_MAP = {
    PUSH: 'forward',
    POP: 'back',
};

const AnimatedRouter = (props) => {
    const { location, history, children } = props;
    return (
        <TransitionGroup
            className="router-wrapper"
            childFactory={(child) =>
                React.cloneElement(child, {
                    classNames: ANIMATION_MAP[history.action],
                })
            }
        >
            <CSSTransition timeout={500} key={location.pathname}>
                <Fragment>{children}</Fragment>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default withRouter(AnimatedRouter);
