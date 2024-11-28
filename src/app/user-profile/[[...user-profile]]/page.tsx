
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import { UserProfile } from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Next.js Profile | TailAdmin - Next.js Dashboard Template",
  description:
    "This is Next.js Profile page for TailAdmin - Next.js Tailwind CSS Admin Dashboard Template",
};

const UserProfilePage = () => {
  return(
    <DefaultLayout>
      <UserProfile path="/user-profile" />
    </DefaultLayout>
  )
}


export default UserProfilePage;
