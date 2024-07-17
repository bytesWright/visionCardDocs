import './team.sass';
import {Image} from "solid-bootstrap";

export default function Team() {
    return (
        <main class="Team container align-items-center pt-md-5">
            <section class="info row ps-5 ps-md-0 mt-md-5">
                <div class="col-auto image-name d-none d-md-block ms-0 ps-0">
                    <div class="image-wrapper ps-0">
                        <img class="image" src="/public/assets/images/people/david-garcia.png" alt="Picture of David Garcia"/>
                    </div>
                    <div class="name">
                        David Garcia
                    </div>
                </div>

                <div class="col content">

                    <h1>Main dev</h1>
                    <p>David Garcia is the main developer, a project he dedicates his free time to. He created all the initial code in Python, Blender, and Kotlin, showcasing his diverse technical
                        expertise. The project also includes an Android app to demonstrate the model's capabilities.</p>
                    <p>He has collaborated with companies across various industries, including logistics, healthcare, weather forecasting, banking, and manufacturing. Over the years, he has developed
                        a strong focus on mobile development, backend systems, and progressive web apps, utilizing technologies such as Kotlin, Swift, JavaScript, and Python. He has held senior and
                        lead positions at several notable companies, including Sharecare, Backbase, and The Weather Channel.</p>
                    <div className="image-wrapper d-md-none">
                        <Image class="image" roundedCircle src="/src/assets/images/people/david-garcia-face.png"/>
                        <div className="name">
                            David Garcia
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

