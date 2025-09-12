import "./Footer.css";

function Footer() {
  return (
    <footer className="app-footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-section">
          <h4>Callismart Tech</h4>
          <p>&copy; {new Date().getFullYear()} Callismart Tech. All rights reserved.</p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="https://callismart.com.ng/callismart-tech/" target="_blank" rel="noopener noreferrer">About Us</a></li>
            <li><a href="https://callismart.com.ng/contact/" target="_blank" rel="noopener noreferrer">Contact</a></li>
            <li><a href="https://callismart.com.ng/blog/" target="_blank" rel="noopener noreferrer">Blogs</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="https://callismart.com.ng/terms/" target="_blank" rel="noopener noreferrer">Terms of Service</a></li>
            <li><a href="https://callismart.com.ng/refund_returns/" target="_blank" rel="noopener noreferrer">Refund Policy</a></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support</h4>
          <ul>
            <li><a href="https://support.callismart.com.ng/" target="_blank" rel="noopener noreferrer">Help Center</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
