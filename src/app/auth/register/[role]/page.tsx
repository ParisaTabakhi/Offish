import Register from '../../../../features/auth/components/Register';

interface IRegisterPageProps {
  params: Promise<{
    role: 'employer' | 'artist';
  }>;
}

export default async function RegisterPage({ params }: IRegisterPageProps) {
  const { role } = await params;
  return <Register role={role} />;
}