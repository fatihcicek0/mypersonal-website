import './style.css'
import eventvers from '../../assets/eventvers.png'
export default function Projects() {
    console.log(window.innerWidth)
    return (
        <section id='projects'>
            <div id="container-projects">
            <h2 id='p-title'>Bitirdiğimiz projeler</h2>
            <div id='scroll-box'>
                <div id='p-container-card'>
                    <div className='d-card'>
                        <div id='screens' style={{ boxShadow: 'none', width: window.innerWidth > 900 ? 400 : 300 }}>
                            <div id='container-web' style={{ boxShadow: 'none', width: '100%' }}>
                                <div id='header-cw'>
                                    <div style={{ backgroundColor: 'red' }} className='point'></div>
                                    <div style={{ backgroundColor: '#ffb300' }} className='point'></div>
                                    <div style={{ backgroundColor: '#0ec70e' }} className='point'></div>
                                </div>
                                <img id='web-img' src={eventvers}></img>
                            </div>
                        </div>
                        <div className='d-intro'>
                            <a href='https://eventvers.com'>www.eventvers.com
                                <img alt="open car sales website"
                                    style={{ display: 'block' }}
                                    width="28" height="22" class="w-5 mb-1"
                                    src="https://d33wubrfki0l68.cloudfront.net/621fc099b299fce91c2b699d7f08a6e620e38917/d6b3b/assets/site/open.svg" >
                                </img>
                            </a>
                        </div>
                    </div>
                    <div className='d-card'>
                        <div id='screens' style={{ boxShadow: 'none', width: window.innerWidth > 900 ? 400 : 300 }}>
                            <div id='container-web' style={{ boxShadow: 'none', width: '100%' }}>
                                <div id='header-cw'>
                                    <div style={{ backgroundColor: 'red' }} className='point'></div>
                                    <div style={{ backgroundColor: '#ffb300' }} className='point'></div>
                                    <div style={{ backgroundColor: '#0ec70e' }} className='point'></div>
                                </div>
                                <img id='web-img' src={eventvers}></img>
                            </div>
                        </div>
                        <div className='d-intro'>
                            <a href='https://eventvers.com'>www.eventvers.com
                                <img alt="open car sales website"
                                    style={{ display: 'block' }}
                                    width="28" height="22" class="w-5 mb-1"
                                    src="https://d33wubrfki0l68.cloudfront.net/621fc099b299fce91c2b699d7f08a6e620e38917/d6b3b/assets/site/open.svg" >
                                </img>
                            </a>
                        </div>
                    </div>
                    <div className='d-card'>
                        <div id='screens' style={{ boxShadow: 'none', width: window.innerWidth > 900 ? 400 : 300 }}>
                            <div id='container-web' style={{ boxShadow: 'none', width: '100%' }}>
                                <div id='header-cw'>
                                    <div style={{ backgroundColor: 'red' }} className='point'></div>
                                    <div style={{ backgroundColor: '#ffb300' }} className='point'></div>
                                    <div style={{ backgroundColor: '#0ec70e' }} className='point'></div>
                                </div>
                                <img id='web-img' src={eventvers}></img>
                            </div>
                        </div>
                        <div className='d-intro'>
                            <a href='https://eventvers.com'>www.eventvers.com
                                <img alt="open car sales website"
                                    style={{ display: 'block' }}
                                    width="28" height="22" class="w-5 mb-1"
                                    src="https://d33wubrfki0l68.cloudfront.net/621fc099b299fce91c2b699d7f08a6e620e38917/d6b3b/assets/site/open.svg" >
                                </img>
                            </a>
                        </div>
                    </div>
                    <div className='d-card'>
                        <div id='screens' style={{ boxShadow: 'none', width: window.innerWidth > 900 ? 400 : 300 }}>
                            <div id='container-web' style={{ boxShadow: 'none', width: '100%' }}>
                                <div id='header-cw'>
                                    <div style={{ backgroundColor: 'red' }} className='point'></div>
                                    <div style={{ backgroundColor: '#ffb300' }} className='point'></div>
                                    <div style={{ backgroundColor: '#0ec70e' }} className='point'></div>
                                </div>
                                <img id='web-img' src={eventvers}></img>
                            </div>
                        </div>
                        <div className='d-intro'>
                            <a href='https://eventvers.com'>www.eventvers.com
                                <img alt="open car sales website"
                                    style={{ display: 'block' }}
                                    width="28" height="22" class="w-5 mb-1"
                                    src="https://d33wubrfki0l68.cloudfront.net/621fc099b299fce91c2b699d7f08a6e620e38917/d6b3b/assets/site/open.svg" >
                                </img>
                            </a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
        </section>
    )
}