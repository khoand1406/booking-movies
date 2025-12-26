import { MovieLanding } from "@/components/movie/LandingPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movie/")({
  component: MovieLanding,
  loader: () => ({
    crumb: "Dashboard",
  }),
});
