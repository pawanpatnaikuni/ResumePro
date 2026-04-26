function Layout({ title, children }) {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>{title}</h1>

      <div style={styles.content}>{children}</div>
    </div>
  );
}

const styles = {
  container: {
    paddingTop: "70px",
    textAlign: "center",
    maxWidth: "1000px",
    margin: "0 auto",
    paddingLeft: "20px",
    paddingRight: "20px",
  },

  title: {
    fontSize: "34px",
    fontWeight: "700",
    marginBottom: "25px",
    marginTop: "10px",
  },

  content: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
};

export default Layout;
