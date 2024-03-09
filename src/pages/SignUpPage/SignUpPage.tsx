import React, { FC } from 'react';
import Container from '../../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthButton from '../../components/AuthButton/AuthButton';
import { useLazySignUpQuery } from '../../api/authApi';

interface SignUpFormInt {
  username: string;
  email: string;
  password: string;
}

interface SignUpPageProps {}

const schema = yup.object().shape({
  username: yup
    .string()
    .min(2, 'Username must be at least 2 characters')
    .required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignUpPage: FC<SignUpPageProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormInt>({
    resolver: yupResolver(schema),
  });

  const [triggerSignUpQuery] = useLazySignUpQuery();
  const navigate = useNavigate();

  const onSubmit = async (values: SignUpFormInt) => {
    try {
      const res = await triggerSignUpQuery(values, false);

      navigate('/');
      console.log('ok', res);
    } catch (error: any) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-signUp text-center mt-4">Sign up</h1>
        <div className="text-center">
          <Link to="/login" className="text-blog-blue hover:underline">
            Have an account?
          </Link>
        </div>
        <form
          className="flex flex-col mx-auto max-w-inputWidth"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mt-2">
            <Input placeholder="Username" name="username" register={register} />
            {errors.username && (
              <p className="absolute text-xs text-red-500">
                {errors.username.message}
              </p>
            )}
          </div>
          <div className="mt-2">
            <Input
              placeholder="Email"
              name="email"
              type="email"
              register={register}
            />
            {errors.email && (
              <p className="absolute text-xs text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mt-2">
            <Input
              placeholder="Password"
              name="password"
              type="password"
              register={register}
            />
            {errors.password && (
              <p className="absolute text-xs text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

          <div className="flex justify-end">
            <AuthButton buttonName="Sign up" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignUpPage;
