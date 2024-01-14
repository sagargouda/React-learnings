const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img
        src="https://img.freepik.com/free-vector/restaurant-logo-template_23-2149493636.jpg?w=740&t=st=1704760307~exp=1704760907~hmac=d2640b22656d9243b201bf8dc1a350f34cdca0edb4f4555d459cf42270fa1ec2"
        className="logo"
        width={100}
      />
    </div>

    {/* nav items */}
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
