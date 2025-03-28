import "../../styles/about.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <header className="hero-section">
        <h1>About SEIF & Sylvia</h1>
        <p>
          Exploring hardware security and verification through augmented symbolic execution.
        </p>
      </header>

      {/* Content Section */}
      <section className="content-section">
        <h2>What is SEIF?</h2>
        <p>
          SEIF (Symbolic Execution for Information Flow) is an advanced framework designed 
          to analyze and verify information flow in hardware designs. It leverages symbolic 
          execution to identify and eliminate false paths while ensuring security properties 
          are upheld.
        </p>

        <h2>What is Sylvia?</h2>
        <p>
          Sylvia is an open-source symbolic execution engine that integrates with SEIF to 
          efficiently explore hardware designs and verify security constraints. It helps 
          overcome the path explosion problem, making hardware verification faster and 
          more scalable.
        </p>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {[
            { name: "Kaki Ryan", role: "Ph.D. Candidate in Computer Science at UNC Chapel Hill, soon to be Assistant Professor; Lead Developer of SEIF and Sylvia" },
            { name: "William Millen", role: "Undergraduate Student and Researcher developing SEIF and Sylvia’s interactive visualization website" },
            { name: "Cynthia Sturton", role: "Professor of Computer Science at UNC Chapel Hill, and Head of the Hardware Security Research Lab at UNC" }
          ].map((person, index) => (
            <div key={index} className="team-card">
              <h3>{person.name}</h3>
              <p>{person.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

  