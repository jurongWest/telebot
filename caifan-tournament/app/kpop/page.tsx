import Link from "next/link";
import Tournament from "@/components/Tournament";

const KPOP_IDOLS = [
  "ive wonyoung",
  "blackpink jennie",
  "newjeans minji",
  "newjeans haerin",
  "ohmygirl arin",
  "twice nayeon",
  "lesserafim chaewon",
  "lesserafim sakura",
  "lesserafim kazuha",
  "ive yujin",
  "aespa karina",
  "aespa winter",
  "redvelvet seulgi",
  "redvelvet irene",
  "twice jihyo",
  "alldayproject youngseo"
];

export default function Page() {
  return (
    <>
      <div style={{ maxWidth: 720, margin: "20px auto", padding: "0 16px" }}>
        <Link href="/">Back to Cai Fan</Link>
      </div>

      <Tournament title="K-pop Idol Tournament" items={KPOP_IDOLS} imageBasePath="/kpop" />
    </>
  );
}
