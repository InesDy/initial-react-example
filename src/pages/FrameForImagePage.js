import React from 'react';

import FrameForImage from '../components/FrameForImage';
import cats from '../components/Cats';

const FrameForImagePage =() => (
    <div className="main-section__content">

    <h1> Some cat pictures here :-) </h1>

    <FrameForImage
        header={cats[0].headerText}
        image={cats[0].imageUrl}
    >
        {cats[0].description}
    </FrameForImage>

    <FrameForImage
        header={cats[1].headerText}
        image={cats[1].imageUrl}
    >
        {cats[1].description}
    </FrameForImage>

    <FrameForImage
        header={cats[2].headerText}
        image={cats[2].imageUrl}
    >
        {cats[2].description}
    </FrameForImage>
</div>

);



export default FrameForImagePage;