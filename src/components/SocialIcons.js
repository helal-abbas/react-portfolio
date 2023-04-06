const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons">
      <a className="icon" style={styles.icon} href="https://github.com/syedabbas110">
        <i className="fa-brands fa-github" aria-hidden="true" title="Helal Abbas' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/syed-helal-abbas/">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Helal Abbas' LinkedIn Profile"></i>
      </a>
      {/* <a className="icon" style={styles.icon} href="https://www.instagram.com/michael.yeates/">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Helal Abbas' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://twitter.com/mdyeates">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Helal Abbas' Twitter Profile"></i>
      </a> */}
    </div>
  );
};

export default SocialIcons;
