import { getServerSession } from "next-auth";

async function getUser() {
  const session = await getServerSession();
  return session;
}

export default async function Home() {
  const session = await getUser();
  console.log(session);
  return <div>{JSON.stringify(session?.user?.name)}</div>;
}
