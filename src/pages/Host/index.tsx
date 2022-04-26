import NavbarHost from '../../components/navbars/NavbarHost'
import HostHero from '../../components/HostComponents/HostHero'
import SpecialServices from '../../components/HostComponents/SpecialServices'
import HostVendor from '../../components/HostComponents/HostVendor'
import LoginModal from '../../components/modals/LoginModal'
import SignupModal from '../../components/modals/SignupModal'

const Host = (): JSX.Element => {
    return (
        <>
            <LoginModal />
            <SignupModal />
            <NavbarHost />
            <HostHero />
            <SpecialServices />
            <HostVendor />
        </>
    )
}

export default Host
