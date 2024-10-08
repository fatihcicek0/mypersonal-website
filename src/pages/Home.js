import Solutions from '../components/solutions/Solutions'
import Contact from '../components/contact/Contact'
import Freelancer from '../components/Freelancer/Freelancer'
import Projects from '../components/projects/projects'
import gif from '../assets/gif.gif'
import './style.css'
export default function Home() {
    return (
        <section id='home'>
            <div id='container-home'>
                <div id='banner'>
                    <div id='box-left'>
                        <div id='screens'>
                            <div id='container-web'>
                                <div id='header-cw'>
                                    <div style={{ backgroundColor: 'red' }} className='point'></div>
                                    <div style={{ backgroundColor: '#ffb300' }} className='point'></div>
                                    <div style={{ backgroundColor: '#0ec70e' }} className='point'></div>
                                </div>
                                <img id='web-img' src='https://user-images.githubusercontent.com/100020069/225827842-ef4a8b7e-cfd8-4739-b578-8a33b737c63b.png'></img>
                            </div>
                            <div id='container-responsive'>
                                <div id='notch'></div>
                                <img id='responsive-img' src='https://user-images.githubusercontent.com/100020069/225834061-8db2b459-0d09-4afc-891f-9f4bb0973613.png'></img>
                            </div>
                        </div>
                    </div>
                    <div id='box-right'>
                        <div id='title'>
                            <div>İşinizi Geliştirecek</div>
                            <div><span id='title-middle'>Mobil Uyumlu</span></div>
                            <div> <span>Web  Çözümleri</span></div>
                        </div>
                        {/* <div id='techs'>
                            <img className='img-tech' src='https://camo.githubusercontent.com/e8cac53cd22e95a470844c0edda4b9b32261b0c7c01592066eb9fbeffc0d343e/68747470733a2f2f7777772e706870726f2e62652f6d656469612f3434302f646f776e6c6f61642f726561637425343034782e706e673f763d32'></img>
                            <img className='img-tech' src='https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png'></img>
                            <img
                                id='icon-mongo'
                                //className='img-tech'
                                // width="60" height="60" style={{ marginTop: 15, marginLeft: 30 }}
                                src='https://pluspng.com/img-png/logo-mongodb-png-mongodb-1600.png'></img>
                            <img
                                id='icon-mysql'
                                //width="60" height="55" style={{ marginTop: 15, marginLeft: 30 }}
                                src='https://streampipes.apache.org/img/pipeline-elements/org.apache.streampipes.connect.adapters.mysql.set/icon.png'></img>
                            <img
                                id='icon-aws'
                                // width="70" height="50" style={{ marginTop: 25, marginLeft: 25 }}
                                src='https://content.partnerpage.io/eyJidWNrZXQiOiJwYXJ0bmVycGFnZS5wcm9kIiwia2V5IjoibWVkaWEvY29udGFjdF9pbWFnZXMvM2VkMDNlYmItZDQ0NS00ZjhmLWI5YjItZmY3YTgyMjM2YTlkLzE5MjBweC1BbWF6b25fV2ViX1NlcnZpY2VzX0xvZ28uc3ZnLnBuZyIsImVkaXRzIjp7InRvRm9ybWF0Ijoid2VicCIsInJlc2l6ZSI6eyJmaXQiOiJjb250YWluIiwiYmFja2dyb3VuZCI6eyJyIjoyNTUsImciOjI1NSwiYiI6MjU1LCJhbHBoYSI6MH19fX0='></img>
                        </div> */}
                    </div>
                </div>

                <Solutions />
                <Projects />
                <Freelancer />
                <Contact />
            </div>
        </section>
    )
}