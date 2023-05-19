import useUserData from '@hooks/useUserData';
import { Enum_RoleName } from '@prisma/client';

interface PrivateComponentProps {
  children: JSX.Element | JSX.Element[];
  role: Enum_RoleName;
}

const PrivateComponent = ({ children, role }: PrivateComponentProps) => {
  const { role: userRole } = useUserData();

  if (!userRole || userRole !== role) {
    return null;
  }

  return <>{children}</>;
};
export { PrivateComponent };
