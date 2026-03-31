import MatchPageClient from "../../components/MatchPageClient";

export default function Page({ params }: any) {
  return <MatchPageClient id={String(params?.id)} />;
}