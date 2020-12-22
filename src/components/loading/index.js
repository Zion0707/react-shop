import React, { useEffect } from 'react';
import '_less/loading/index.less';

const Loading = () => {
    useEffect(() => {}, []);
    return (
        <div className="page-loading">
            <div className="pl-logo">
                <i></i>
            </div>
        </div>
    );
};

export default Loading;
