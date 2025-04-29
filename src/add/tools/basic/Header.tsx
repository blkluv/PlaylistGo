import '../../css/header.css';

const Header = () => {
    return (
        <div className="header-logo" onClick={() => window.location.href = "/"}>
            <div className="logo-text">🎧 DJ. ツ🖤</div>
        </div>
    );
};

export default Header;
