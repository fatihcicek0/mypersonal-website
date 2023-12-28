import './style.css'
export default function Solutions({ data }) {
    return (
        <section id='services' style={{paddingTop:1}}>
            <div id="container-card">
                <div className="card">
                    <div>
                        <img width="65" height="65" src="https://cdn-icons-png.flaticon.com/512/2282/2282226.png" />
                    </div>
                    <div className='card-body'>
                        <div>
                            <h3>Domain</h3>
                            <p>İşletmenizi temsil edicek size özel SSL sertifikalı alan adları</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img width="75" height="80" src="https://cdn-icons-png.flaticon.com/128/954/954574.png" />
                    </div>
                    <div className='card-body'>
                        <div>
                            <h3>Kurumsal Site</h3>
                            <p>İşletmenizi dijitale taşıyacak size özel tasarımlı kurumsal Web sitesi</p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img width="64" height="64"
                            // style={{ backgroundColor: '#dddddd', padding: 15, borderRadius: 7 }}
                            src="https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/external-search-logistics-wanicon-lineal-color-wanicon.png" alt="external-search-logistics-wanicon-lineal-color-wanicon" />
                    </div>
                    <div className='card-body'>
                        <div>
                            <h3>Ürün Tanıtım Sitesi</h3>
                            <p>Ürünlerinizi Web ortamında online olarak tanıtabileceğiniz siteler </p>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div>
                        <img width="70" height="65" src="https://img.icons8.com/external-obvious-flat-kerismaker/96/external-blog-internet-marketing-flat-obvious-flat-kerismaker.png" alt="external-blog-internet-marketing-flat-obvious-flat-kerismaker"></img>
                    </div>
                    <div className='card-body'>
                        <div>
                            <h3>Blog Sitesi</h3>
                            <p>Günlük Bloglarınızı yayınlayabileceğiniz ve abonelerinize mail yoluyla bülten yollayabileceğiniz Blog Siteleri</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}