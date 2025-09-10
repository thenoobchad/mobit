import { User } from "@/db/schema";
import { getCurrentUserById } from "@/lib/currentUser";

import { NavHeader } from "./nav-header";

export const Header = async () => {
  const user = await getCurrentUserById();
  if (!user) return <NavHeader />;

  return (
    <header>
      <NavHeader user={user} />
    </header>
  );
};
