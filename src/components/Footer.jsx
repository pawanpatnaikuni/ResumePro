function Footer() {
  return (
    <div style={styles.footer}>
      <p style={styles.text}>
        © {new Date().getFullYear()} ResumePro. All rights reserved.
      </p>
    </div>
  );
}

const styles = {
  footer: {
    marginTop: "60px",
    padding: "20px 10px",
    textAlign: "center",
    fontSize: "14px",
    opacity: 0.7,
  },

  text: {
    margin: 0,
  },
};

export default Footer;
