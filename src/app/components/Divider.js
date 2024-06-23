export default function Divider({ children }) {
    return (
      <div className="dividerWrapper">
        <span className="leftDivider"></span>
        <span className="dividerText">{children}</span>
        <span className="rightDivider"></span>
      </div>
    );
  }