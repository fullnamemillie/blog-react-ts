import React, { FC } from 'react';

interface AuthButtonProps {
  buttonName: string;
}

const AuthButton: FC<AuthButtonProps> = ({ buttonName }) => {
  return (
    <>
      <button className="text-white bg-blog-blue px-6 py-3 text-xl rounded-signUpRounded leading-6 hover:bg-blog-darkBlue mt-4">
        {buttonName}
      </button>
    </>
  );
};

export default AuthButton;
