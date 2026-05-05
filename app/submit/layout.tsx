import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request an addition",
  description:
    "Suggest someone to add to the site. Both celebrated figures and notorious ones are welcome.",
  alternates: {
    canonical: "/submit",
  },
};

export default function SubmitLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
