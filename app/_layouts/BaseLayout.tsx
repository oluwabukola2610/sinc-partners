import { Footer, Navbar, ScrollButton } from "@/app/components/common";

export const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bg-[#F9F9F9] min-h-screen">
      <Navbar />
      {children}
      <ScrollButton />
      <Footer />
    </section>
  );
};
