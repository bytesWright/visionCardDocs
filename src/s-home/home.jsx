import './home.sass';

export default function Home() {
    return (
        <main className="Home container">
            <section className="title">
                <svg-wrapper className="card-logo" href="/src/visionCardDocs/assets/icons/p-logo.svg"/>
                <h1>
                    VisionCard AI V0.3.1<br/>
                    Open source
                </h1>
            </section>
            <section className="info">
                <p>Our V0.3.1 model is trained using synthetic data generated with Blender, Python, and other open-source tools. It accurately detects traditional credit card designs, identifying the
                    front and back faces, text lines, chip, and magnetic band in images.</p>
                <p>The model, along with the dataset and tools used to create it, are freely available for download under the Apache License Version 2.0. You are welcome to modify and distribute these
                    components as needed.</p>
                <p>We kindly request that you notify us if you plan to use these components or modified versions in a product, research project, or any other initiative that adds value. This helps us
                    maintain a record of users and allows us to acknowledge their contributions on our website.</p>
                <p>The android App extracts the region where a credit card is detected and performs OCR with a model provided by google. Since the data is rather simple most of the classification of
                    the data can be done by conventional methods.s</p>
            </section>
        </main>
    );
}

