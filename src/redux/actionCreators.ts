import { userActions } from "./slices/user/userSlice";
import { sidebarActions } from "./slices/sidebar/sidebarSlice";

export default {
  ...userActions,
  ...sidebarActions,
};
