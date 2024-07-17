import './download.sass';

export default function Download() {
    return (
        <main className="Download container align-items-center justify-content-center">
            <section className="info">
                <h1>V0.1</h1>
                <div className="options">
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/tflite.svg"/><span class="label">TFLITE F32</span></div>
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/tflite.svg"/><span class="label">TFLITE F16</span></div>
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/py-torch.svg"/><span class="label">PyTorch</span></div>
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/android.svg"/><span class="label">Github</span></div>
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/python.svg"/><span class="label">Github</span></div>
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/android-apk.svg"/><span class="label">Apk</span></div>
                    <div class="option"><svg-wrapper className="icon" href="/assets/icons/database.svg"/><span class="label">Dataset</span></div>
                </div>
            </section>
        </main>
    );
}

