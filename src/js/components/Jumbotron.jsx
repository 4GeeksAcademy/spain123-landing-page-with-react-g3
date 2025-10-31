import JumbotronIMG from "../../img/JumbotronIMG.png";
export const Jumbotron = () => {

    return (

        <>
            <div style={{ position: 'relative', width: '100%', maxWidth: '80em', margin: '0 auto', padding: '1em', background: 'black' }}>
                <img
                    src={JumbotronIMG} alt="Banner"
                    style={{
                        width: '100%',
                        height: '50em',
                        display: 'block',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '68em',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}
                >
                    <div style={{ pointerEvents: 'auto' }}>
                        <button className="btn btn-warning btn-lg" type="button" style={{
                            background: 'linear-gradient(135deg, #f5e197, #d4af37, #c5a02e)',
                            color: '#000000ff',
                            border: 'none',
                            boxShadow: '0 0 10px rgba(212, 175, 55, 0.6)',
                            fontWeight: 'bold',
                            textShadow: '0 1px 2px rgba(0,0,0,0.4)'
                        }}

                        >
                            Entra en nuestro PLANO
                        </button>
                    </div>
                </div>
            </div>
        </>)
}