import './footer.sass';

export default function Footer() {
    return (
        <footer>
            <section className="container">
                <div className="row row-cols-auto gx-5">
                    <div className="col">
                        <h5>Social</h5>
                        <ul className="row gx-2">
                            <li className="col"><a><svg-wrapper className="icon" href="/src/assets/icons/x-cr.svg"/></a></li>
                            <li className="col"><a><svg-wrapper className="icon" href="/src/assets/icons/linkedin-cr.svg"/></a></li>
                            <li className="col"><a><svg-wrapper className="icon" href="/src/assets/icons/github-cr.svg"/></a></li>
                        </ul>
                    </div>

                    <div className="col">
                        <h5>Organization</h5>
                        <ul>
                            <li>Sponsor</li>
                            <li>Collaborate</li>
                        </ul>
                    </div>
                </div>
            </section>
        </footer>
    );
}

