// components
import Header from "../components/Header";
import SideBar from "../components/SideBar";

// Note
// +children de dua page vao con layout kia la mac dinh

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <SideBar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
