import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer"
import { Logo } from "../../components/Logo"
import { Navbar } from "../../components/Navbar"

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
    return (
        <Container>
            <Logo />

            <Navbar />

            {children}

            <Footer />
        </Container>
    )
}