export const dynamic = 'force-dynamic';

const products = [
  {
    title: "Blue Rust Autumn Farmhouse Wreath",
    category: "Finished Wreath",
    price: "$145.00",
    badge: "Autumn Collection",
    image: "/images/wreaths/blue-rust-autumn-farmhouse-wreath-main.jpg",
    description:
      "A warm autumn farmhouse wreath with cream, rust, blue, and natural wheat-style textures on a grapevine base.",
  },
];

export default function Home() {
  const featured = products[0];

  return (
    <main style={{ background: "#f7f1e8", minHeight: "100vh", color: "#1b1a18" }}>
      <header
        style={{
          background: "#fbf8f2",
          borderBottom: "1px solid #ded4c8",
          padding: "22px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <div>
          <div
            style={{
              color: "#8a481f",
              fontSize: "12px",
              letterSpacing: "0.35em",
              fontWeight: "700",
              textTransform: "uppercase",
            }}
          >
            Sweet Tea & Saturdays
          </div>
          <h1 style={{ margin: "6px 0 0", fontSize: "30px" }}>Farmhouse Market</h1>
        </div>

        <nav style={{ display: "flex", gap: "24px", fontWeight: "600" }}>
          <a href="#shop" style={{ color: "inherit", textDecoration: "none" }}>Shop</a>
          <a href="#inventory" style={{ color: "inherit", textDecoration: "none" }}>Picks & Floral</a>
          <a href="#wreaths" style={{ color: "inherit", textDecoration: "none" }}>Wreaths</a>
          <a href="#custom" style={{ color: "inherit", textDecoration: "none" }}>Custom Orders</a>
          <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>Our Story</a>
        </nav>

        <button
          style={{
            background: "#050505",
            color: "white",
            border: "0",
            borderRadius: "999px",
            padding: "12px 22px",
            fontWeight: "700",
          }}
        >
          Cart • 0
        </button>
      </header>

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "56px 40px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "48px",
          alignItems: "center",
        }}
      >
        <div>
          <div
            style={{
              display: "inline-block",
              background: "white",
              color: "#7c3f18",
              border: "1px solid #e5cf98",
              borderRadius: "999px",
              padding: "12px 20px",
              fontWeight: "700",
              marginBottom: "34px",
            }}
          >
            Handmade wreaths • farmhouse decor • seasonal floral inventory
          </div>

          <h2
            style={{
              fontSize: "68px",
              lineHeight: "1.02",
              letterSpacing: "-0.055em",
              margin: "0 0 24px",
            }}
          >
            Southern farmhouse charm for every front door.
          </h2>

          <p style={{ fontSize: "21px", lineHeight: "1.6", color: "#645c53", maxWidth: "620px" }}>
            Shop finished handmade wreaths, loose wreath picks, floral stems, centerpiece designs,
            bows, and custom seasonal pieces from Sweet Tea & Saturdays.
          </p>

          <div style={{ display: "flex", gap: "14px", marginTop: "32px" }}>
            <a
              href="#shop"
              style={{
                background: "#050505",
                color: "white",
                textDecoration: "none",
                borderRadius: "999px",
                padding: "15px 26px",
                fontWeight: "700",
              }}
            >
              Shop the Market
            </a>
            <a
              href="#inventory"
              style={{
                background: "white",
                color: "#1b1a18",
                textDecoration: "none",
                borderRadius: "999px",
                padding: "15px 26px",
                fontWeight: "700",
                border: "1px solid #ded4c8",
              }}
            >
              Browse Picks & Floral
            </a>
          </div>
        </div>

        <div
          style={{
            background: "white",
            padding: "18px",
            borderRadius: "34px",
            boxShadow: "0 4px 18px rgba(0,0,0,.08)",
            border: "1px solid #ebe3d8",
          }}
        >
          <div style={{ position: "relative", overflow: "hidden", borderRadius: "26px" }}>
            <img
              src={featured.image}
              alt={featured.title}
              style={{
                width: "100%",
                height: "560px",
                objectFit: "cover",
                display: "block",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "24px",
                right: "24px",
                bottom: "24px",
                background: "rgba(255,255,255,.92)",
                borderRadius: "24px",
                padding: "20px",
                boxShadow: "0 3px 12px rgba(0,0,0,.12)",
              }}
            >
              <div
                style={{
                  color: "#8a481f",
                  fontSize: "12px",
                  fontWeight: "800",
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                }}
              >
                Featured Autumn Wreath
              </div>
              <h3 style={{ margin: "8px 0 0", fontSize: "30px" }}>{featured.title}</h3>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#fffaf2",
          borderTop: "1px solid #ded4c8",
          borderBottom: "1px solid #ded4c8",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "30px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
          }}
        >
          {["Finished Wreaths", "Wreath Picks & Floral", "Centerpieces", "Custom Orders"].map(
            (name) => (
              <div
                key={name}
                style={{
                  background: "white",
                  padding: "24px",
                  borderRadius: "26px",
                  border: "1px solid #e9e0d5",
                }}
              >
                <h3 style={{ margin: "0 0 10px" }}>{name}</h3>
                <p style={{ margin: 0, color: "#645c53", lineHeight: "1.5" }}>
                  Shop Sweet Tea & Saturdays farmhouse decor and seasonal handmade designs.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      <section id="shop" style={{ maxWidth: "1280px", margin: "0 auto", padding: "64px 40px" }}>
        <div
          style={{
            color: "#8a481f",
            fontSize: "13px",
            fontWeight: "800",
            letterSpacing: ".28em",
            textTransform: "uppercase",
          }}
        >
          Featured Market
        </div>
        <h2 style={{ fontSize: "42px", margin: "10px 0 14px" }}>Featured products</h2>
        <p style={{ color: "#645c53", maxWidth: "700px", lineHeight: "1.6" }}>
          This is the first live product image connected through GitHub. Once this works, we will
          keep adding your other wreaths, picks, centerpieces, and inventory.
        </p>

        <div
          style={{
            marginTop: "34px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "22px",
          }}
        >
          {products.map((product) => (
            <article
              key={product.title}
              style={{
                background: "white",
                border: "1px solid #e9e0d5",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,.05)",
              }}
            >
              <div style={{ height: "320px", margin: "16px", overflow: "hidden", borderRadius: "24px" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
              <div style={{ padding: "0 20px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                  <span
                    style={{
                      background: "#f3dfb2",
                      color: "#79400f",
                      fontWeight: "800",
                      fontSize: "12px",
                      padding: "7px 10px",
                      borderRadius: "999px",
                    }}
                  >
                    {product.badge}
                  </span>
                  <span style={{ color: "#766f67", fontSize: "13px" }}>{product.category}</span>
                </div>
                <h3 style={{ margin: "14px 0 10px" }}>{product.title}</h3>
                <p style={{ color: "#645c53", lineHeight: "1.5" }}>{product.description}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <strong style={{ fontSize: "22px" }}>{product.price}</strong>
                  <button
                    style={{
                      background: "#080808",
                      color: "white",
                      border: "0",
                      borderRadius: "999px",
                      padding: "10px 18px",
                      fontWeight: "800",
                    }}
                  >
                    Add
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer style={{ background: "#111", color: "white", padding: "36px 40px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: "22px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                color: "#e5b96f",
                fontSize: "12px",
                letterSpacing: ".35em",
                fontWeight: "700",
                textTransform: "uppercase",
              }}
            >
              Sweet Tea & Saturdays
            </div>
            <p style={{ color: "#d6d1ca" }}>
              Farmhouse wreaths, floral inventory, centerpieces, and custom orders.
            </p>
          </div>
          <div>Shop • Inventory • Custom Orders • About</div>
        </div>
      </footer>
    </main>
  );
}
