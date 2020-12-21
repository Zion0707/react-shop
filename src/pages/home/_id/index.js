import React from 'react';

const Detail = (props) => {
    const { params } = props.match;
    return <div className="child-page">{params.id}</div>;
};

export default Detail;
