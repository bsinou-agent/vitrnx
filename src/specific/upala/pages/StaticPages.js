import React, { Component } from 'react';

import {Route} from 'react-router-dom'

import classes from './pages.css'

// Simply store and render static pages

class Pages extends Component {

    getItwPage() {
        return (
            <div className={classes.Page}>
                <p className={classes.PageTitle}>Entretien individuel</p>
                <p className={classes.PageSubtitle}>Prendre le temps et se poser. Ecouter... l'histoire d'une maladie, d'une angoisse, de soucis familiaux ou professionnels.</p>
                <div className={classes.PageBody}>
                    <p>Entendre la parole dite, les questions posées et celles qui affleurent.</p>
                    <p>Avec bienveillance et respect, ensemble chercher à comprendre, à renouer les liens, à donner un sens à ce qui est dit et à ce qui a été vécu.</p>
                    <p>Accepter ce qui a été ou ce qui est aujourd'hui pour pouvoir envisager demain.</p>
                    <p>Etablir ensemble un plan d'action :</p>
                    <ul>
                        <li>Comment faire ? Quoi faire ?</li>
                        <li>Qui contacter peut-être ?</li>
                        <li>Quelles solutions envisager ?</li>
                    </ul>
                    <p>Puis mettre en place les nouveaux apprentissages dans le temps et les évaluer.</p>
                    <p>Concrètement :</p>
                    <ul>
                        <li>L'entretien dure une heure au minimum.</li>
                        <li>La première rencontre permet de faire un état de la situation et d'envisager l'action à mener.</li>
                        <li>Le nombre et le rythme des entretiens suivants sont déterminés d'un commun accord et sont très variables d'un sujet à l'autre.</li>
                    </ul>
                </div>
            </div>
        );
    }

    getWorkshopPage() {
        return (
            <div className={classes.Page}>
                <p className={classes.PageTitle}>ATELIERS DE PEINTURE - ATELIERS DE REFLEXION</p>
                <p className={classes.PageSubtitle}>en co-animation avec Anne-Noëlle Bissuel, artiste et art-thérapeute, nous mettons en commun nos compétences d'artiste et de thérapeute</p>
                <div className={classes.PageBody}>
                    <p>Plus d'information sur les prochains ateliers bientôt, n'hésitez pas à revenir.</p>
                </div>
            </div>
        );
    }

    getBookPage() {
        return (
            <div className={classes.Page}>
                <p className={classes.PageTitle}>"Notre essentiel de santé"</p>
                <p className={classes.PageSubtitle}>Françoise Desailly, Marie-Madeleine Sinou et François Veyrié</p>
                <div className={classes.PageBody}>
                    <p>Ce livre est un hymne à la santé, il est le fruit d'une trentaine d'années d'expérience de deux professionnelles de la santé, illustré des dessins d'un artiste pédagogue.</p>
                    <p>La santé est visitée ici dans toutes ses dimensions et ancrée dans l'essence ancestrale des médecines traditionnelles axées sur la prévention. Nous faisons notre les questions auxquelles elles répondaient :</p>
                    <ul>
                        <li> Comment maintenir la santé ?</li>
                        <li>Comment garder l'indépendance&nbsp;?</li>
                    </ul>
                    <p>Prix : 30 € frais d'envoi en sus</p>
                    <p>Version électronique : 9,90 € avec achat en ligne</p>
                </div>
            </div>
        );
    }

    getContactPage() {
        return (
            <div className={classes.Page}>
                <p className={classes.PageTitle}>Contact</p>
                <div className={classes.PageBody}>
                    <p>Les entretiens individuels ont lieu à Lyon dans le 5° arrondissement ou dans la Drôme des collines.</p>
                    <p>Les ateliers ont lieu à Lyon, dans la Drôme des collines ou selon les groupes constitués.</p>
                    <p>Email : <a href="mailto:contact@unpasapreslautre.com">contact@unpasapreslautre.com</a></p>
                    {/* <p>Téléphone : <a href="tel:+33611283845">06 11 28 38 45</a></p> */}
                    <p>Téléphone : 06 11 28 38 45</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className={classes.PageContainer}>
                {/* <Route path="/s/about" exact render={this.getContactPage()} /> */}
                <Route path="/s/the-book" exact render={this.getBookPage} />
                <Route path="/s/interview" exact render={this.getItwPage} /> 
                <Route path="/s/workshops" exact render={this.getWorkshopPage} />
                <Route path="/s/contact" exact render={this.getContactPage} />
            </div>
        );
    }
}

export default Pages;
