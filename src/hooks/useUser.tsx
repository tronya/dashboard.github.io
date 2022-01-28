import { getAuth, User } from "firebase/auth";
import app from "../../firebase";

const useUser = (): User | null => {
  const auth = getAuth(app);
  const { currentUser } = auth;

  return currentUser;
};

export default useUser;
