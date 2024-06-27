import { BaseLayout } from "@/app/_layouts/BaseLayout";
import {
  Hero,
  NetworkOfBuilders,
  AreaOfFocus,
  ConceptInnovations,
  ServiceIncubationModel,
  StudioPortfolio,
  CoFound,
  EntrepreneurInResidence,
  InvestorsNetwork,
  EquityJobs,
  BlogsAndResources,
  Featured,
} from "@/app/components/Home";

export default function Home() {
  return (
    <>
      <BaseLayout>
        <Hero />
        <NetworkOfBuilders />
        <AreaOfFocus />
        <ConceptInnovations />
        <ServiceIncubationModel />
        <StudioPortfolio />
        <CoFound />
        <EntrepreneurInResidence />
        <InvestorsNetwork />
        <EquityJobs />
        <BlogsAndResources />
        <Featured />
      </BaseLayout>
    </>
  );
}
