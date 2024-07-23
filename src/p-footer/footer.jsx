import './footer.sass';

export default function Footer() {
    return (
        <footer>
            <section className="container">
                <div className="row row-cols-auto gx-5">
                    <div className="col">
                        <h5>Social</h5>
                        <ul className="row gx-2">
                            <li className="col"><a href="https://x.com/bytesWright"><svg-wrapper className="icon" href="/visionCardDocs/assets/icons/x-cr.svg"/></a></li>
                            <li className="col"><a href="https://www.linkedin.com/in/david-garcia-971958a6"><svg-wrapper className="icon" href="/visionCardDocs/assets/icons/linkedin-cr.svg"/></a></li>
                            <li className="col"><a href="https://github.com/bytesWright"><svg-wrapper className="icon" href="/visionCardDocs/assets/icons/github-cr.svg"/></a></li>
                            <li className="col"><a href="https://huggingface.co/bytesWright"><svg-wrapper className="icon" href="/visionCardDocs/assets/icons/hf-cr.svg"/></a></li>
                        </ul>
                    </div>

                    <div className="col" style="display:none;">
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

