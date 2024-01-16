import React from 'react';
import Container from '../Container/Container';

const Banner = () => {
  return (
    <section>
      <div className="bg-blog-blue shadow-banner text-center px-2 p-banner text-white mb-8">
        <Container>
          <h1 className="font-titillium text-4xl pb-6 drop-shadow-logo text-logo">
            Blog
          </h1>
          <p className="font-light text-2xl">
            A place to share your knowledge.
          </p>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
