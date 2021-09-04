import {useNavbar} from "../../Hooks/useNavbar";
import {useEffect} from "react";

import {
    faHtml5, faCss3Alt, faJs,
    faNodeJs, faReact, faGithubAlt,
    faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

import Icon from "../../Components/Icon"

import Main from "./style"

export function Home() {
    const [,setItems] = useNavbar()

    useEffect(()=>{
        setItems([
            <a href={"#About"}>Sobre</a>,
            <a href={"#Tools"}>Ferramentas</a>,
            <a href={"#Projects"}>Projetos</a>,
            <a href={"#Contact"}>Contato</a>
        ])
    },[])

    return (
        <Main>
            <section id={"Intro"}>
                <p>Olá! Meu nome é</p>
                <strong>Gabriel Rangel</strong>
                <p>
                    Sou um estudante de Sistemas de Computação,
                    me preparando para ser um Desenvolvedor Fullstack.
                </p>

                <ul>
                    <a href={"https://github.com/gabrielrangel"} target={"_blank"}>
                        <Icon icon={faGithubAlt} highlight={"black"} hover={"background"}/>
                    </a>
                    <a href={"https://www.linkedin.com/in/rangelgabrielda/"} target={"_blank"}>
                        <Icon icon={faLinkedinIn} highlight={"rgb(0, 93, 201)"} hover={"background"}/>
                    </a>
                </ul>
            </section>

            <section id={"About"}>
                <h1>Sobre Mim</h1>
                <p>
                    Gosto de ajudar pessoas com soluções tecnológicas
                    para resolver problemas.
                </p>
                <p>
                    Em minhas experiencias, aprendi que o
                    usuário é a principal abstração em qualquer
                    sistema computacional.
                </p>
            </section>

            <section id={"Tools"}>
                <h1>Ferramentas</h1>
                <ul>
                    <Icon icon={faHtml5} legend={"HTML5"} highlight={"rgb(255,90,0)"} hover={"glow"}/>
                    <Icon icon={faJs} legend={"JavaScript"} highlight={"rgb(246,195,0)"} hover={"glow"}/>
                    <Icon icon={faCss3Alt} legend={"CSS3"} highlight={"rgb(0,169,226)"} hover={"glow"}/>
                    <Icon icon={faNodeJs} legend={"node.js"} highlight={"rgb(125, 205, 30)"} hover={"glow"}/>
                    <Icon icon={faReact} legend={"React"} highlight={"rgb(0, 219, 255)"} hover={"glow"}/>
                </ul>
            </section>

            <section id={"Projects"}>
                <h1>Projetos</h1>
                <ul/>
            </section>

            <section id={"Contact"}>
                <h1>Fale Comigo!</h1>
                <ul/>
            </section>
        </Main>
    )
}