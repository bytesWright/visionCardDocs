/* @refresh reload */
import {render} from 'solid-js/web';
import {HashRouter} from "@solidjs/router";
import {lazy} from "solid-js";
import {SvgWrapper} from "./webComponents/SvgWrapper";

import './style/index.sass';
import {Container, Nav, Navbar} from "solid-bootstrap";
import Footer from "./p-footer/footer";

customElements.define(SvgWrapper.defaultTagName, SvgWrapper);

if (window.matchMedia) {
    let colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');

    function setColor() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'dark');
            console.log('switching to dark theme');
        }

        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            document.documentElement.setAttribute('data-bs-theme', 'light');
            console.log('switching to light theme');
        }
    }

    setColor()
    colorSchemeQuery.addEventListener('change', setColor);
}

const routes = [{
    path: "/",
    component: lazy(() => import("./s-home/home.jsx"))
}, {
    path: "/team",
    component: lazy(() => import("./s-team/team.jsx"))
}, {
    path: "/download",
    component: lazy(() => import("./s-download/download.jsx"))
}]


render(() =>
        <>
            <header className="on-top">
                <Navbar bg="dark-subtle" expand="md" sticky="top">
                    <Container>
                        <Navbar.Brand>
                            <svg-wrapper class="icon" href="/visionCardDocs/visionCardDocs/assets/icons/m-logo.svg"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav class="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/team">Team</Nav.Link>
                                <Nav.Link href="/download">Download</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            <HashRouter>{routes}</HashRouter>
            <Footer></Footer>
        </>
    , document.body);
