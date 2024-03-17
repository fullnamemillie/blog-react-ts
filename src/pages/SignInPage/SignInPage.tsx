import React, { FC } from 'react';
import Container from '../../components/Container/Container';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import AuthButton from '../../components/AuthButton/AuthButton';
import { useLazySignInQuery } from '../../api/authApi';
import { useAppDispatch } from '../../store/store';
import { setUser } from '../../store/service/authSlice';

interface SignInFormInt {
  email: string;
  password: string;
}

interface SignInPageProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(3, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const SignInPage: FC<SignInPageProps> = ({ setIsLoggedIn }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormInt>({
    resolver: yupResolver(schema),
  });

  const [error, setError] = React.useState<string>('');
  const [triggerSignInQuery] = useLazySignInQuery();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (values: SignInFormInt) => {
    try {
      const copiedValues = { ...values };
      const res = await triggerSignInQuery(copiedValues, false);

      if (res?.status === 'rejected') {
        setError('Email or password is invalid');
        return;
      }
      dispatch(setUser(res!.data!.user));

      setIsLoggedIn(true);

      navigate('/');

      console.log('ok', res);
    } catch (error: any) {
      console.log('error', error);
    }
  };

  return (
    <>
      <Container>
        <h1 className="text-signUp text-center mt-4">Sign in</h1>
        <div className="text-center">
          <Link to="/login" className="text-blog-blue hover:underline">
            Need an account?
          </Link>
        </div>
        <div className="flex flex-col mx-auto max-w-inputWidth">
          <div className="absolute text-xs text-red-500">{error}</div>
        </div>
        <form
          className="flex flex-col mx-auto max-w-inputWidth"
          onSubmit={handleSubmit(onSubmit)}
        >
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
            <AuthButton buttonName="Sign in" />
          </div>
        </form>
      </Container>
    </>
  );
};

export default SignInPage;

// const apiUrl = 'https://api.realworld.io/api';

// const onSubmit = async (values: SignUpFormInt) => {
//   try {

//     const response = await axios.post(`${apiUrl}/users`, {
//       user: values,
//     });

//     dispatch(setUser(response.data.user));
//     navigate('/');

//     console.log('ok', response);
//   } catch (error) {
//
//     console.log('error', error);
//   }
// };
