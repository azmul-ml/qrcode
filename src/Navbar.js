import "./Navbar.css";

export default function Navbar() {
  return (
    <ul>
      <li>
        {" "}
        <a href="/"> QR Code Create</a>
      </li>
      <li>
        <a href="/decode"> QR Code Decode</a>
      </li>
    </ul>
  );
}
