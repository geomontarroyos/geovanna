'use client'

import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'


export default function Cadastro() {

    const route = useRouter();
    const [nome, setNome] = useState();
    const [curso, setCurso] = useState();
    const [num_inscricao, setNum_inscricao] = useState();


    const cadastrar = (e) => { 
        e.preventDefault()
        const aluno = {
            nome: nome,
            curso: curso,
            num_inscricao: num_inscricao
        }

        const alunoJson = JSON.stringify(aluno);

        fetch("http://localhost:3003/alunos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: alunoJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }
    return (
    
        <div className={styles.main}>
            <form action='' onSubmit={cadastrar}>
                <h1>
                    Cadastrar
                </h1><br/>
                <center> <input className='text-2xl' placeholder='INFORME O NOME DO ALUNO' nome="nome" type="text"
                    onChange={e => setNome(e.target.value)}></input><br/>

                <input className='text-2xl' placeholder='INFORME O CURSO' nome="curso" type="text"
                    onChange={e => setCurso(e.target.value)}></input><br/>

                <input className='text-2xl' placeholder='INFORME Nº DE INSCRIÇÃO' nome="num_inscricao" type="number"
                    onChange={e => setNum_inscricao(e.target.value)}></input><br/> <br/>
                <button type='submit'>CADASTRAR</button> <br/> 
                <br/>
                <center><a href='/'>Voltar</a><br/></center> 
                <br/>
                </center>
                <img src="https://www.acheisudoeste.com.br/hd-imagens/noticias/Tim-Multada-em-Brumado-Noticias-72.jpg" width="200" height="200"/>
            </form>
        </div>

    );

}