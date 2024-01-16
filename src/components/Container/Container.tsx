import React, { FC, PropsWithChildren } from 'react';

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-container mx-auto">{children}</div>;
};

export default Container;
