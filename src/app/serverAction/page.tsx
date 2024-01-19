import { getServerSession } from "next-auth";
import IdentifyUserButton from "./IdentifyUserButton";

export default async function ServerActionPage() {
  const identifyUser = async () => {
    "use server";
    const session = await getServerSession();
    return session?.user?.name || "Not Logged In";
  };
  return (
    <div>
      <IdentifyUserButton identifyUserAction={identifyUser} />
    </div>
  );
}
