import './download.sass';

export default function Download() {
    return (<main className="Download container align-items-center justify-content-center">
        <section className="info">
            <h1>V0.3</h1>
            <div className="options">
                <div class="option">
                    <a href="https://huggingface.co/bytesWright/creditCardDetection/resolve/main/model-float-32.tflite?download=true">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/tflite.svg"/>
                        <span class="label">TFLITE F32</span>
                    </a>
                </div>
                <div class="option">
                    <a href="https://huggingface.co/bytesWright/creditCardDetection/resolve/main/model-float-16.tflite?download=true">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/tflite.svg"/>
                        <span class="label">TFLITE F16</span>
                    </a>
                </div>
                <div class="option">
                    <a href="https://huggingface.co/bytesWright/creditCardDetection/resolve/main/model.pt?download=true">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/py-torch.svg"/>
                        <span class="label">PyTorch</span>
                    </a>
                </div>
                <div class="option">
                    <a href="https://github.com/bytesWright/creditCardDetectionAndroidDemo">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/android.svg"/>
                        <span class="label">Source</span>
                    </a>
                </div>
                <div class="option">
                    <a href="https://github.com/bytesWright/creditCardDetectionDSG">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/python.svg"/>
                        <span class="label">Generator</span>
                    </a>
                </div>
                <div class="option">
                    <a href="https://github.com/bytesWright/creditCardDetectionAndroidDemo/releases/download/v0.3.1/app-release.apk">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/android-apk.svg"/>
                        <span class="label">Apk</span>
                    </a>
                </div>
                <div class="option">
                    <a href="https://huggingface.co/datasets/bytesWright/creditCardDetectionDS">
                        <svg-wrapper className="icon" href="/visionCardDocs/assets/icons/database.svg"/>
                        <span class="label">Dataset</span>
                    </a>
                </div>
            </div>
        </section>
    </main>);
}

