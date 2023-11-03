import './style.css';
export default function Contact() {
    return (
        <div>
            <div id='container-cnt'>
                <div id='seperator'></div>
                <div id='seperator2'></div>
                <div id='title-cnt'>
                    <h2>Bizimle iletişime geçin</h2>
                </div>
                <div id='body-cnt'>
                    <div id='icon-cnt'>
                        <img src="https://cdn-icons-png.flaticon.com/512/726/726623.png"></img>
                    </div>
                    <div id='mail-cnt'>
                        <a href="mailto:contact@cfatih.dev" target="_blank" rel="noopener noreferrer">contact@cfatih.dev</a>
                    </div>
                </div>
            </div>
        </div>
    )
}