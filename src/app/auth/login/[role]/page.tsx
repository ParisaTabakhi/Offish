import Login from '../../../../features/auth/components/Login';

interface ILoginPageProps {
  params: Promise<{
    role: 'employer' | 'artist';
  }>;
}

export default async function LoginPage({ params }: ILoginPageProps) {
  const { role } = await params;
  return <Login role={role} />;
}