import UserCard from 'modules/UserForm/UserCard';
import { current } from 'redux/auth/auth-operations';

const UserPage = () => {

current()
  // useEffect(() => {
  //   dispatch(current());
  // }, [dispatch]);


  return <UserCard />;
};

export default UserPage;
