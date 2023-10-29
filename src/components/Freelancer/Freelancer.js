import meUrl from '../../assets/me.jpg'
import pc from '../../assets/pc.jpg'
import me from '../../assets/me-removebg-preview.png'
import './style.css'

export default function Freelancer() {
    return (
        <div>
            <div id="container-fr" style={{ backgroundColor: '#eef3ff', padding: 20 }}>
                <div>
                    <h2 id='title-fr'>Freelancer ile çalışma avantajları</h2>
                </div>
                {/* <div>
                    <div>
                        <img width="300" height="300" src={meUrl}></img>
                        <img width="400" height="400" src={pc}></img>
                    </div>
                </div> */}
                <div id='container-cardfr'>
                    <div className='card-fr'>
                        <img src='https://cdn-icons-png.flaticon.com/512/684/684908.png'></img>
                        <p className='cardfr-text'>Herzaman heryerden hizmet vermeye hazırız</p>
                    </div>
                    <div className='card-fr'>
                        <img src='https://cdn-icons-png.flaticon.com/512/3652/3652191.png'></img>
                        <p className='cardfr-text'>Esnek çalışma saatleri ile herzaman iletişime açığız</p>
                    </div>
                    <div className='card-fr'>
                        <img src='https://cdn-icons-png.flaticon.com/512/5959/5959585.png'></img>
                        <p className='cardfr-text'>Sabit ofisi bulunan dijital bir ajansa göre daha düşük maliyetli daha makul fiyatlar</p>
                    </div>

                </div>
            </div>
        </div>
    )
}