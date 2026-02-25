
const PurplePlanet = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        background: "black",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 800 400"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }} // removes bottom inline gap
      >
        <defs>
          <linearGradient id="groundGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#7a3cff" />
            <stop offset="100%" stopColor="#3b0f70" />
          </linearGradient>

          <radialGradient id="craterGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4b1e91" />
            <stop offset="90%" stopColor="#2a0a52" />
            <stop offset="100%" stopColor="#1a0633" />
          </radialGradient>
        </defs>

        {/* Stars */}
        <g fill="white">
          <circle cx="100" cy="50" r="2" />
          <circle cx="250" cy="80" r="1.5" />
          <circle cx="400" cy="40" r="2" />
          <circle cx="600" cy="70" r="1.5" />
          <circle cx="750" cy="30" r="2" />
          <circle cx="50" cy="120" r="1.5" />
          <circle cx="300" cy="150" r="2" />
          <circle cx="550" cy="110" r="1.5" />
          <circle cx="700" cy="140" r="2" />
        </g>

        {/* Planet Surface - lowered */}
        <path
          d="M 0,300 C 200,170 600,170 800,300 L 800,400 L 0,400 Z"
          fill="url(#groundGradient)"
        />

        {/* Craters - moved lower to match */}
        <g fill="url(#craterGradient)">
          <ellipse cx="200" cy="330" rx="70" ry="35" />
          <ellipse cx="450" cy="300" rx="50" ry="25" />
          <ellipse cx="700" cy="350" rx="30" ry="15" />
          <ellipse cx="350" cy="380" rx="20" ry="10" />
          <ellipse cx="100" cy="360" rx="40" ry="20" />
        </g>

        {/* Highlights */}
        <g fill="none" stroke="#c9a0ff" opacity="0.5">
          <path d="M 130,330 A 70,35 0 0,1 270,330" strokeWidth="4" />
          <path d="M 400,300 A 50,25 0 0,1 500,300" strokeWidth="3" />
          <path d="M 670,350 A 30,15 0 0,1 730,350" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
};

export default PurplePlanet;
