import React from 'react'
import Navbar from '../Navbar/Navbar'

const Antivirus = () => {
    return (
        <>
            <Navbar />
            <div className="container py-5">
                <h1 className="text-center display-4 my-5">C'est quoi un Antivirus?</h1>
                <div className="container text-center my-4">
                    <img src="https://y31uv4ra1.vo.llnwd.net/content/wp/tweaklibrary_com/uploads/2020/11/Are-Free-Antiviruses-Any-Good-Free-vs-Paid-Antivirus.jpg" alt="antivirus" height="500px" />
                </div>
                <div className="text-center mx-auto my-5 col-sm-9 col-md-8 font-italic">
                    Un antivirus est un logiciel informatique destiné à identifier et à effacer des logiciels malveillants (malwares en anglais), également appelés virus,
                    Chevaux de Troie ou vers selon les formes.
                    <br />
                    <span className="float-right">
                        -Futura Sciences
                    </span>
                </div>
                <hr />
                <div className="container my-5">
                    <h2 className="font-weight-normal text-center">
                        Comment fonctionne un antivirus?
                    </h2>
                    <div className="container font-italic my-5">
                        <div className="container my-5">
                            "L'analyse et la surveillance sont les maîtres-mots des antivirus. Le programme passe au crible tous les fichiers stockés sur l'appareil. En parallèle, il contrôle en temps réel l'activité au sein du système afin d'agir immédiatement s'il détecte une menace potentielle.
                            Cette surveillance s'effectue de trois façons :"
                            <ul className="list-group col-sm-4 mt-3">
                                <li className="list-group-item"> Spécifique</li>
                                <li className="list-group-item"> Générique </li>
                                <li className="list-group-item"> Heuristique</li>
                            </ul>

                        </div>
                        <div className="container my-5">
                            "La surveillance spécifique repose sur la comparaison des programmes présents dans la machine avec une base de données qui renferme les signatures des logiciels malveillants les plus connus. Si la signature d'un malware est localisée, le dispositif de défense s'active. Ce procédé est aussi appelé scan ou scanning. La signature d'un logiciel correspond
                            à une chaîne de caractères qui le rendent identifiable."
                        </div>
                        <div className="container mt-5">
                            "La surveillance générique s'apparente à la surveillance spécifique, mais se concentre sur les variantes des malwares les plus connus. Les meilleurs antivirus intègrent un système de surveillance heuristique, qui offre à la machine une protection contre les virus méconnus. Les virus informatiques étant en constante évolution, la mise à jour
                            régulière des bases de données des antivirus est nécessaire pour conserver une protection efficace."
                        </div>
                        <div className="float-right my-2">-Futura Sciences</div>
                    </div>
                    <div className="container my-5 font-italic">
                        Pour plus d'information consulter: <a href="https://www.futura-sciences.com/tech/definitions/informatique-antivirus-10999/" target="_blank">Futura-Sciences</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Antivirus