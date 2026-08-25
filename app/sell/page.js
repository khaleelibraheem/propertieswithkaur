import { redirect } from "next/navigation";

export default function SellRedirect() {
  redirect("/journey?type=sell");
}
