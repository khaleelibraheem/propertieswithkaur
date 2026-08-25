import { redirect } from "next/navigation";

export default function BuyRedirect() {
  redirect("/journey?type=buy");
}
