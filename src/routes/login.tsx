import LoginPage from "@/view/pages/Login/LoginPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});
