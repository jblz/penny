import { AuthRecoverPassword } from 'features/Auth/AuthRecoverPassword/AuthRecoverPassword';
import Layout from 'layouts/Full';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { getSingle } from 'utils/types';

const RecoverPasswordPage: NextPage = () => {
  const { query } = useRouter();

  return (
    <Layout seo={{ title: 'Recover Password' }}>
      <AuthRecoverPassword callbackUrl={(query.callbackUrl && getSingle(query.callbackUrl)) ?? '/auth/signin'} />
    </Layout>
  );
};

export default RecoverPasswordPage;
