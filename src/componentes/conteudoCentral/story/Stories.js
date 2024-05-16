import React, { useEffect, useRef } from 'react';
import Story from './Story';
import './Story.css';
import Gustavo from '../../../imagens/Gustavo.jpg';
import Bruno from '../../../imagens/Bruno.jpg';
import Yasmin from '../../../imagens/Yasmin.jpg';
import Debora from '../../../imagens/Debora.jpg';
import Gabriel from '../../../imagens/Gabriel.jpg';
import Douglas from '../../../imagens/Douglas.jpg';
import Lucas from '../../../imagens/Lucas.jpg';
import Aurora from '../../../imagens/Aurora.jpg';
import Luis from '../../../imagens/Luis.jpg';
import Maddona from '../../../imagens/Maddona.jpg';
import Adriana from '../../../imagens/Adriana.jpg';
import Yule from '../../../imagens/Yule.jpg';

const usuarios = [
    { nome: "Bruno", foto: Bruno, cf: true },
    { nome: "Aurora", foto: Aurora, cf: false },
    { nome: "Luiz Gustavo", foto: Gustavo, cf: false },
    { nome: "Yule", foto: Yule, cf: true },
    { nome: "Gabriel", foto: Gabriel, cf: true },
    { nome: "Yasmin", foto: Yasmin, cf: true },
    { nome: "Adriana", foto: Adriana, cf: false },
    { nome: "Debora", foto: Debora, cf: false },
    { nome: "Lucas", foto: Lucas, cf: false },
    { nome: "Douglas", foto: Douglas, cf: false },
    { nome: "Luis", foto: Luis, cf: true },
    { nome: "Maddona", foto: Maddona, cf: true },
];

export default function Stories() {
    const esquerdaRef = useRef(null);
    const direitaRef = useRef(null);
    const conteudoStoryRef = useRef(null);

    useEffect(() => {
        const direita = direitaRef.current;
        const esquerda = esquerdaRef.current;
        const conteudoStory = conteudoStoryRef.current;

        const updateButtonVisibility = () => {
            if (conteudoStory.scrollLeft === 0) {
                esquerda.style.display = 'none';
            } else {
                esquerda.style.display = 'block';
            }

            if (conteudoStory.scrollLeft + conteudoStory.clientWidth >= conteudoStory.scrollWidth) {
                direita.style.display = 'none';
            } else {
                direita.style.display = 'block';
            }
        };

        const clickDireita = () => {
            conteudoStory.scrollBy({ left: 120, behavior: 'smooth' });
        };

        const clickEsquerda = () => {
            conteudoStory.scrollBy({ left: -120, behavior: 'smooth' });
        };

        direita.addEventListener('click', clickDireita);
        esquerda.addEventListener('click', clickEsquerda);
        conteudoStory.addEventListener('scroll', updateButtonVisibility);

        // Inicializa a visibilidade dos botões
        updateButtonVisibility();

        return () => {
            direita.removeEventListener('click', clickDireita);
            esquerda.removeEventListener('click', clickEsquerda);
            conteudoStory.removeEventListener('scroll', updateButtonVisibility);
        };
    }, []);

    return (
        <>
            <div id='conteudoStory' ref={conteudoStoryRef} style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                {usuarios.map((user) => (
                    <Story key={user.id} nome={user.nome} foto={user.foto} cf={user.cf} />
                ))}
            </div>
            <button id="esquerda" ref={esquerdaRef}>&lt;</button>
            <button id="direita" ref={direitaRef}>&gt;</button>
        </>
    );
}