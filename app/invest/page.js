import { redirect } from "next/navigation";

export default function InvestRedirect() {
  redirect("/journey?type=invest");
}
