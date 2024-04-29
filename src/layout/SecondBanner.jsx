export function SecondBanner({ imageUrl }) {
  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto 80%",
          width: "1423px",
          height: "760px",
        }}
      >
        <div
          style={{
            color: "rgb(255, 153, 102)",
            display: "flex",
            alignItems: "center",
            padding: "288px 16px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              marginBottom: "48px",
            }}
          >
            <h2
              style={{
                fontWeight: "600",
                textAlign: "center",
                color: "rgb(255, 153, 102)",
                fontSize: "3.75rem",
                lineHeight: "1.2",
                letterSpacing: "-0.00833em",
              }}
            >
              Uma área importante do site
            </h2>
          </div>
          <a
            href=""
            style={{
              border: "1px solid rgb(255, 153, 102)",
              borderWidth: "3px",
              borderRadius: "8px",
              padding: "5px 15px",
              fontSize: "0.875rem",
              minWidth: "64px",
              fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
              fontWeight: "500",
              lineHeight: "1.75",
              letterSpacing: "0.02857em",
              textTransform: "uppercase",
              cursor: "pointer",
              verticalAlign: "middle",
              justifyContent: "center",
              textDecoration: "none",
              backgroundColor: "transparent",
              width: "292.333px",
              height: "64.25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontSize: "1.5rem",
                fontWeight: "600",
              }}
            >
              Acessar Agora
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
