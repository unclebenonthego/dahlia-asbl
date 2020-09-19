import React from 'react';
import {
    Grid
} from '@material-ui/core';
import data from '../helpers/data.json';
import oreilleIcon from '../images/ecouteIcon.png';
import okIcon from '../images/okIcon.png';
import feuilleIcon from '../images/feuilleIcon.png';
import gifPlayer from '../images/playing.gif';

const MainBody = () => {
    return (
        <div id = 'mainBody'>
            <div id = 'firstContent' className = 'container'>
                <Grid container>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <h2 style = {{textAlign : 'end'}}>
                            Nous travaillons <br />
                            Auprès de tous ceux qui sont<br />
                            Dans le besoin <br />
                        </h2>
                    </Grid>
                    <Grid 
                        item
                        xs = {12}
                        md = {12}
                        lg = {6}
                        xl = {6}
                    >
                        <p style = {{textAlign : 'start', color : '#5a5a5a'}}>
                            Nous travaillons auprès de tout ceux qui sont dans le besoin : Contribuer à une société́ congolaise dynamique où la femme sera libre, forte, valorisée et apportera du progrès , donner l’accès à l’éducation aux enfants pour leur assurer un avenir meilleur et un regard innovant autour des valeurs du travail.
                        </p>
                    </Grid>
                </Grid>
            </div>
            <div id = 'iconContents' className = 'container'>
                 <Grid
                    container
                 >
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                src = {oreilleIcon}
                                alt = ''
                            />
                            <p>
                                {data.bodyElements[0].description}
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                src = {okIcon}
                                alt = ''
                            />
                            <p>
                                {data.bodyElements[1].description}
                            </p>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs = {12}
                        md = {12}
                        lg = {4}
                        xl = {4}
                    >
                        <div className = 'itemIconContent'>
                            <img 
                                src = {feuilleIcon}
                                alt = ''
                            />
                            <p>
                                {data.bodyElements[2].description}
                            </p>
                        </div>
                    </Grid>
                 </Grid>
            </div>
            <div id = 'videoBan' className = 'container'>
                <Grid 
                    container
                >
                    <Grid
                        item
                        className = 'introVideo'
                        xs = {12}
                        md = {12}
                        xl = {4}
                        lg = {4}
                    >
                        <div className = 'introIn'>
                            <h3>Le bien être social, <br /> C'est notre objectif</h3>
                            <p>
                                Notre objectif est de promouvoir le bien être social des enfants défavorisés en général et particulièrement des femmes, et les personnes marginalisées dans la société par la rééducation, la réintégration, la réinsertion sociale et l’entraide.
                            </p>
                            <p className = 'btnPlus'>
                                En savoir plus 
                            </p>
                        </div>
                        
                    </Grid>
                    <Grid
                        item
                        className = 'videoContent'
                        xs = {12}
                        md = {12}
                        xl = {8}
                        lg = {8}
                    >
                        <h4>Nous avons une mission</h4><br />
                        <h2>Aider ceux qui en ont besoin</h2>
                        <div className = 'videoBack' style = {{ backgroundImage : 'url('+require('../images/Famille.jpg')+')',  backgroundPosition : 'center', backgroundSize : 'cover', backgroundRepeat : 'no-repeat'}}>
                            <img
                                src = {gifPlayer}
                                alt = ''
                                // to put request to youtube api before playing
                            />
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div id = 'lastContent' style = {{backgroundImage : 'url('+require('../images/bgHome.jpg')+')', backgroundPosition : 'center', backgroundSize : 'cover'}}>
                <Grid container>
                    <Grid 
                        item
                        className = 'unEmpty'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        <p>Nous existons pour</p>
                        <h3>Donner à chaque femme et enfant les chances de réussir leur avenir</h3>
                        <p>Chez Dahlia asbl, nous sommes convaincus que la connaissance <br /> et le savoir sont les clés d’un monde meilleur.</p>
                        <Grid container className = 'btnGroupL'>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p>FAIRE UN DON MAINTENANT</p>
                            </Grid>
                            <Grid 
                                xs = {12}
                                md = {6}
                                xl = {6}
                                lg = {6}
                                item
                            >
                                <p>DEVENIR VOLONTAIRE</p>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid 
                        item
                        className = 'empty1'
                        xs = {12}
                        md = {6}
                        xl = {6}
                        lg = {6}
                    >
                        {/* <div>
                            <p></p>
                        </div> */}
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MainBody