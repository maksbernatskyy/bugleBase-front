import logo from '../assets/logo.png'

export default function Header() {
    return (
        <>
        <header>
            <div>
                <img id='logo' src={logo} alt="Logo" />
            </div>
        </header>
        </>
    )
}