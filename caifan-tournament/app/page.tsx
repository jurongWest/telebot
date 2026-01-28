import Link from "next/link";
import Tournament from "@/components/Tournament";

const CAIFAN = [
  "bittergourd", "braised pork", "broccoli", "curry veg",
  "eggplant", "fried fish", "kangkong", "lady finger",
  "long bean", "mapo tofu", "omelette", "salted egg w egg",
  "sausagepotate", "steam egg", "sweet sour pork", "tofu",
];

export default function Page() {
  return (
    <>
      <div style={{ maxWidth: 720, margin: "40px auto 20px", padding: "0 16px" }}>
        <h1 style={{ fontSize: 36, marginBottom: 16 }}>
          zr's fav tournament game
        </h1>

        <Link
          href="/kpop"
          style={{
            display: "inline-block",
            padding: "12px 18px",
            borderRadius: 12,
            backgroundColor: "#111",
            color: "#fff",
            textDecoration: "none",
            fontSize: 16
          }}
        >
          kpop idol version
        </Link>
      </div>

      <Tournament title="Cai Fan Ingredients Tournament" items={CAIFAN} imageBasePath="/images" />
    </>
  );
}

